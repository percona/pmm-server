import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot
} from '@angular/router';
import { AppService } from '../app.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SuccessPageGuard implements CanActivate {
    constructor(private appService: AppService) { }

    /**
     * Check resolution for success page router link
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.appService.isInstallationComplete();
    }
}
