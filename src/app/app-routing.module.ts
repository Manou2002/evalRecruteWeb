import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { url_path } from './constants/app.constant';

const routes: Routes = [
  {
    path: "",
    redirectTo:"client-page",
    pathMatch:"full",
    //canActivate: [AuthGuard]
  },
  {
    path:"client-page",
    loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
