import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  FacebookLoginProvider,
  SocialUser,  GoogleLoginProvider
} from 'angularx-social-login';



@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.scss']
})
export class LoginGoogleComponent implements OnInit{
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService    ){
      console.log(this.isLoggedin);
    }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.socialAuthService.authState.subscribe((user)=>{
      this.socialUser = user;
      this.isLoggedin = user != null;
    });
  }

  loginWithFacebook(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut() {
    this.socialAuthService.signOut();
  }
}
