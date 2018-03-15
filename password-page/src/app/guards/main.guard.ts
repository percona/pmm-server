import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class MainGuard implements CanActivate {
    INSTALLATION_TYPES: any = {
        AWS: 'aws',
        OVF: 'ovf',
        DOCKER: 'docker'
    };

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        switch (environment.installationType) {
            case this.INSTALLATION_TYPES.AWS:
                this.router.navigate(['aws']);
                break;
            case this.INSTALLATION_TYPES.OVF:
                this.router.navigate(['ovf']);
                break;
            case this.INSTALLATION_TYPES.DOCKER:
                this.router.navigate(['docker']);
                break;
        }

        return false;
    }
}
