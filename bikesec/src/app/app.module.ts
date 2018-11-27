import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment'
import { TasksComponent } from './component/task/task.component';
import { AddTaskComponent } from './component/add-tasks/add-tasks.component';
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'

import { AngularFireAuthModule } from 'angularfire2/auth';

import { TaskService } from './service/task.service'
import { LoginService } from './service/login.service'
import { BikesService } from './service/bikes.service'
import { AgmCoreModule } from '@agm/core';


import { FormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { RegisterBikeComponent } from './component/register-bike/register-bike.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './component/banner/banner.component';
import { ListBikesComponent } from './component/list-bikes/list-bikes.component';
import { AddRobberyComponent } from './component/add-robbery/add-robbery.component';
import { MessageComponent } from './component/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTaskComponent,
    LoginComponent,
    RegisterBikeComponent,
    BannerComponent,
    ListBikesComponent,
    AddRobberyComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-fs'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlNZXT-l5SGSjHvxImYoK4jx_FoiGTczY'
    })
  ],
  providers: [TaskService, LoginService, BikesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
