import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from '../../components/admin-page/admin-home/admin-home.component';
import { AccueilAdminComponent } from '../../components/admin-page/accueil-admin/accueil-admin.component';
import { TestsComponent } from '../../components/admin-page/tests/tests.component';
import { DomaineActivitesComponent } from '../../components/admin-page/domaine-activites/domaine-activites.component';
import { TypesContratsComponent } from '../../components/admin-page/types-contrats/types-contrats.component';
import { NiveauEtudesComponent } from '../../components/admin-page/niveau-etudes/niveau-etudes.component';
import { NiveauExperiencesComponent } from '../../components/admin-page/niveau-experience/niveau-experience.component';
import { OffresAdminComponent } from '../../components/admin-page/offres-admin/offres-admin.component';
const routes: Routes = [
  {
    path: "",
    component: AdminHomeComponent,
     children: [
      {
      path:'dashboard',
         component:AccueilAdminComponent
     },
    {
       path:"",
       redirectTo:'dashboard',
        pathMatch:"full"
        },
        {
          path:'offre',
          component:OffresAdminComponent
        },
        {
          path:'test',
          component:TestsComponent
        },
        {
          path:'domainActivites',
          component:DomaineActivitesComponent
        },
        {
          path:'typeContrats',
          component:TypesContratsComponent
        },
        {
          path:'niveauExperiences',
          component:NiveauExperiencesComponent
        },
        {
          path:'niveauEtudes',
          component:NiveauEtudesComponent
        }
   ]
    
    // canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
