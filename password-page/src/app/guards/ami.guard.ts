import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { environment } from '../../environments/environment';

export class AmiGuard implements CanActivate {
    INSTALLATION_TYPE = 'ami';

    constructor() { }

    /**
     * Check on resolution for ami route
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return environment.installationType === this.INSTALLATION_TYPE;
    }
}

@Injectable()
export class AmiCredentialsGuard implements CanActivate {
    constructor(private appService: AppService) {
    }

    /**
     * Check on resolution for ami children account credentials route
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.appService.isInstanceChecked();
    }
}