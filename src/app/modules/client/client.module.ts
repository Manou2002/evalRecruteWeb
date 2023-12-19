import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientHomeComponent } from '../../components/client-page/client-home/client-home.component';
import { ClientRoutingModule } from './client-routing.module';
import { HeaderComponent } from '../../components/client-page/header/header.component';
import { FooterComponent } from '../../components/client-page/footer/footer.component';
import { MenuComponent } from '../../components/client-page/menu/menu.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ClientHomeComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,


  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NgbAccordionModule
  ]
})
export class ClientModule { }
