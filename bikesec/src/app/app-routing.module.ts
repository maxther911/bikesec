import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './component/banner/banner.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterBikeComponent } from './component/register-bike/register-bike.component';



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
