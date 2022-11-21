import { Component, OnInit } from '@angular/core';


import { Movies } from 'src/app/Model/movies';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
import { SignUp, login } from 'src/app/Model/movies';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  message: string = "";
  isProcess: boolean = false;
  className = 'd-none';
  constructor(private router: Router, private formBuilder: FormBuilder, private auth: AuthService) {
    this.signUpForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.router.navigate(['login'])
  }
  signUp() {
    const data = this.signUpForm.value;
    delete data['confirm']
    this.auth.signup(data).subscribe(res => {
      // alert("user register successfull")
      if (res.success) {
        this.isProcess = false;
        this.message = "account has been create hppy";
        this.className = 'alert alert-success'
      } else {
        this.isProcess = false;
        this.message = res.message;
        this.className = "alert alert-danger";
      }
      this.signUpForm.reset();
    }, err => {
      // alert(err);
      this.isProcess = false;
      this.message = "server error at signup";
      this.className = "alert alert-danger";
    });
  }

}
