import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from '../../components/admin-page/admin-home/admin-home.component';
import { FooterComponent } from '../../components/admin-page/footer/footer.component';
import { HeaderComponent } from '../../components/admin-page/header/header.component';
import { MenuComponent } from '../../components/admin-page/menu/menu.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AccueilAdminComponent } from '../../components/admin-page/accueil-admin/accueil-admin.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    AccueilAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
