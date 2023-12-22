import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakLoginOptions } from 'keycloak-js';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  routeModule? : Router
  constructor(private router : Router, private keycloakService:KeycloakService){
  this.routeModule = this.router

  }
  
  goToLoginPage(){
   
    
    this.keycloakService.login({
      redirectUri: window.location.href
    })
  }

}
