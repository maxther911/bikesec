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

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { RegisterBikeComponent } from './component/register-bike/register-bike.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './component/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTaskComponent,
    LoginComponent,
    RegisterBikeComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-fs'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TaskService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
