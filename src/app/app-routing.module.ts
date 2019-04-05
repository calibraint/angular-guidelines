import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: '@app/layouts/login-layout/login-layout.module#LoginLayoutModule',
  },
  {
    path: 'home',
    loadChildren: '@app/layouts/home-layout/home-layout.module#HomeLayoutModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
