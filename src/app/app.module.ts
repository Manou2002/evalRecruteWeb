import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from './init/keycloak-init.factory';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './components/client-page/accueil/accueil.component';
import { OffresComponent } from './components/client-page/offres/offres.component';
import { DetailsOffresComponent } from './components/client-page/details-offres/details-offres.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    OffresComponent,
    DetailsOffresComponent,
   
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    // NgbModule
    AccordionModule.forRoot(),
    ModalModule.forRoot()
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
