import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from "@angular/router";
import { environment } from "../../environments/environment";

@Injectable()
export class DockerGuard implements CanActivate {
  INSTALLATION_TYPE = "docker";

  constructor() {}

  /**
   * Check resolution for ovf route
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return environment.installationType === this.INSTALLATION_TYPE;
  }
}
