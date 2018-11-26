import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { LoginService } from '../../service/login.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    console.log(this.afAuth.user);
  }

  loginWithFacebook(){
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  loginWithEmail(){
    this.afAuth.auth.signInWithPopup(new auth.EmailAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  showLoginOptions(){
    console.log('Click');
    $(".title").slideToggle();
    $("#loginOptions").slideToggle();
  }

}
