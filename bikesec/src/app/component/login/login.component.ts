import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Observable } from 'rxjs';
declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(private login : LoginService) { }

  ngOnInit() {
    if(this.login.isLoggedIn){
      this.user = this.login.getUser;
    }
  }

  loginWithGoogle() {
    this.login.signInWithGoogle();
    this.user = this.login.getUser;
    console.log(this.user);
  }

  loginWithFacebook(){
    this.login.signInWithFacebook();
    this.user = this.login.getUser;
    console.log(this.user);
  }

  loginWithEmail(){
    this.login.signInWithEmail();
    this.user = this.login.getUser;
    console.log(this.user);
  }

  logout() { 
    this.login.logout();
  }

  showLoginOptions(){
    console.log('Click');
    $(".title").slideToggle();
    $("#loginOptions").slideToggle();
  }

}
