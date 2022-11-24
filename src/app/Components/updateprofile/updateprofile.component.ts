
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUp } from 'src/app/Model/movies';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  userForm!: any;
  signUpData!: SignUp;
  isProcess!: false;
  message!: string;
  id: any;
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private activatedRoute: ActivatedRoute) {
    this.userForm = this.formBuilder.group({
      'userId': ['', Validators.required],
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log("this is profile id", this.id)
    this.signUpData = this.auth.getter();


    console.log("from updated form getter", this.signUpData)
  }

  onClickUpdateBtn() {
    this.auth.updateProfile(this.id, this.userForm).subscribe(req => {
      console.log("updated data", req)
    })
  }


}
