import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from '../../components/admin-page/admin-home/admin-home.component';
const routes: Routes = [
  {
    path: "",
    component: AdminHomeComponent,
    // children: [
    //     {
    //       path:'accueil',
    //       component:AccueilComponent
    //     },
    //     {
    //       path:"",
    //       redirectTo:'accueil',
    //       pathMatch:"full"
    //     },
    // ]
    //canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
