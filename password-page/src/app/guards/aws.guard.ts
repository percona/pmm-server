import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { AppService } from '../app.service';
import { Injectable } from '@angular/core';

export class AwsGuard implements CanActivate {
    INSTALLATION_TYPE: string = 'aws';

    constructor() {
    }

    /**
     * Check on resolution for aws route
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return environment.installationType === this.INSTALLATION_TYPE;
    }
}

@Injectable()
export class AwsCredentialsGuard implements CanActivate {
    constructor(private appService: AppService) { }

    /**
     * Check on resolution for aws children account credentials route
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.appService.isInstanceChecked();
    }
}