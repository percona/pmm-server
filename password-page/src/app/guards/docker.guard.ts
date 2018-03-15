import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

export class DockerGuard implements CanActivate {
    INSTALLATION_TYPE: string = 'docker';
    constructor() {
    }

    /**
     * Check resolution for ovf route
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return environment.installationType === this.INSTALLATION_TYPE;
    }
}