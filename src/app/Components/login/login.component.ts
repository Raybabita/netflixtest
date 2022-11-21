import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/Model/movies';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
import { SignUp, login } from 'src/app/Model/movies';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // showLogin = false;
  authError: string = "";

  public loginForm!: FormGroup;

  // public signUpForm!: FormGroup;

  constructor(private user: MovieserviceService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user.reloadUser();

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

    // this.signUpForm = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    //   name: ['', Validators.required]
    // })
  }

  signUp(data: SignUp): void {
    console.log(data);
    // this.seller.userSignUp(data).subscribe((result) => {
    //   // console.log(result)
    //   if (result) {
    //     this.router.navigate(['seller-home'])
    //   }
    // });
    this.user.userSignUp(data);
  }
  // openLogin() {
  //   this.showLogin = false;
  // }
  // openSignUp() {
  //   this.showLogin = true;
  // }

  onSignup() {
    this.router.navigate(['signup'])
  }



  login(data: SignUp): void {
    console.log(data);
    this.user.userLogin(data);
    this.user.LoginErrorMsg.subscribe((isError) => {
      if (isError) {
        this.authError = "Email or password is not correct";
      }
    })
  }
}
