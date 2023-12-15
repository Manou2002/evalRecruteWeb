import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: "root"
})
export class AuthGuard extends KeycloakAuthGuard {


  constructor(
    protected route: Router,
    // @ts-ignore
    protected keycloakAngular: KeycloakService
  ){
    super(route, keycloakAngular);
  }
  public override async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      if(!this.authenticated){
        await this.keycloakAngular.login({
          redirectUri: window.location.origin + state.url
        });
      }

      // @ts-ignore 
      const requiredRoles = route.data.roles;

      console.log(JSON.stringify(requiredRoles));

      if(!(requiredRoles instanceof Array) || requiredRoles.length == 0){
        return true;
      }

      return requiredRoles.every((role) => this.roles.includes(role));
  }

}
