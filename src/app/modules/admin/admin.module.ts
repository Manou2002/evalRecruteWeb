import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from '../../components/admin-page/admin-home/admin-home.component';
import { FooterComponent } from '../../components/admin-page/footer/footer.component';
import { HeaderComponent } from '../../components/admin-page/header/header.component';
import { MenuComponent } from '../../components/admin-page/menu/menu.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AccueilAdminComponent } from '../../components/admin-page/accueil-admin/accueil-admin.component';
import { PostesComponent } from '../../components/admin-page/postes/postes.component';
import { TestsComponent } from '../../components/admin-page/tests/tests.component';
import { NiveauEtudesComponent } from '../../components/admin-page/niveau-etudes/niveau-etudes.component';
import { TypesContratsComponent } from '../../components/admin-page/types-contrats/types-contrats.component';
import { DomaineActivitesComponent } from '../../components/admin-page/domaine-activites/domaine-activites.component';
import { FormsModule } from '@angular/forms';
import { NiveauExperiencesComponent } from '../../components/admin-page/niveau-experience/niveau-experience.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    AccueilAdminComponent,
    PostesComponent,
    TestsComponent,
    DomaineActivitesComponent,
    TypesContratsComponent,
    NiveauExperiencesComponent,
    NiveauEtudesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ]
})
export class AdminModule { }
