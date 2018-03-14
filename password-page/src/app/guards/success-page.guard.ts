import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppService } from "../app.service";
import { Injectable } from "@angular/core";

@Injectable()
export class SuccessPageGuard implements CanActivate {
    constructor(private appService: AppService) { }

    /**
     * Check resolution for success page router link
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.appService.isInstallationComplete();
    }
}