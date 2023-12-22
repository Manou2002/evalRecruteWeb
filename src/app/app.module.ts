import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from './init/keycloak-init.factory';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './components/client-page/accueil/accueil.component';
import { OffresComponent } from './components/client-page/offres/offres.component';
import { DetailsOffresComponent } from './components/client-page/details-offres/details-offres.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccueilComponent,
    OffresComponent,
    DetailsOffresComponent,
   
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // NgbModule
    AccordionModule.forRoot(),
  ],
  providers: [
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
