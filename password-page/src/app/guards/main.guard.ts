import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

enum Installation {
    AWS = 'ami',
    OVF = 'ovf',
    DOCKER = 'docker'
}

@Injectable()
export class MainGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        switch (environment.installationType) {
            case Installation.AWS:
                this.router.navigate(['ami']);
                break;
            case Installation.OVF:
                this.router.navigate(['ovf']);
                break;
            case Installation.DOCKER:
                this.router.navigate(['docker']);
                break;
        }

        return false;
    }
}
