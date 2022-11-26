
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUp } from 'src/app/Model/movies';
import { AuthService } from 'src/app/Services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
  images!: string;
  id: any;
  files!: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private auth: AuthService, private activatedRoute: ActivatedRoute, private route: Router) {
    this.userForm = this.formBuilder.group({
      'userId': ['', Validators.required],
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'imagePath': ['']
    })
  }


  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      console.log(file)
      this.images = file;
    }
  }

  onUpload() {
    const formdata = new FormData();
    formdata.append('file', this.images)
    let headers = {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
    this.http.post<any>('http://localhost:5000/auth/upload', formdata, { headers: headers }).subscribe(
      (res) => {
        console.log(res);
        // this.singleInput.nativeElement.value = '';
        // this.displaySingleImage = true;
        // this.displaySingleImageArray.push(res.path);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log("this is profile id", this.id)
    this.signUpData = this.auth.getter();
    console.log("from updated form getter", this.signUpData)

  }

  onClickUpdateBtn() {
    // const data = this.userForm.value;
    const data = {
      userId: this.userForm.value.userId,
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      ProfilePic: this.userForm.value.image
    };
    this.auth.updateProfile(this.id, data).subscribe(res => {
      // alert("user updated successfull")
      if (res.success) {
        this.isProcess = false;
        this.message = res.message;
      } else {
        this.isProcess = false;
        this.message = res.message;
      }
      this.userForm.reset();
      this.route.navigate(['/profile'])
    }, err => {
      alert(err.message);
      console.log(JSON.stringify(data))
      this.isProcess = false;
      this.message = "server error at updatig";
    });
  }

}
