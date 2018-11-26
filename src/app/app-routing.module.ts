import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './component/banner/banner.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterBikeComponent } from './component/register-bike/register-bike.component';
import { AddRobberyComponent } from './component/add-robbery/add-robbery.component';



const routes: Routes = [
  {
    path: '',
    component: BannerComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'bike-register',
    component: RegisterBikeComponent
  },
  {
    path: 'robbery-register',
    component:AddRobberyComponent
  }
  
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
