import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientHomeComponent } from '../../components/client-page/client-home/client-home.component';
import { AccueilComponent } from '../../components/client-page/accueil/accueil.component';
import { OffresComponent } from '../../components/client-page/offres/offres.component';
import { DetailsOffresComponent } from '../../components/client-page/details-offres/details-offres.component';
const routes: Routes = [
  {
    path: "",
    component: ClientHomeComponent,
    children:[
      {
        path:'accueil',
        component:AccueilComponent
      },
      {
        path:"",
        redirectTo:'accueil',
        pathMatch:"full"
      },
      {
        path:'offres',
        component:OffresComponent
      },
      {
        path:'details-offres',
        component:DetailsOffresComponent
      }
    ]

    //canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
