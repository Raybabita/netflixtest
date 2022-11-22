import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data!: any;
  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.onProfile();
  }
  logout() {
    localStorage.clear()
    this.route.navigate(['/login'])
  }


  onProfile() {
    this.auth.getprofile().subscribe(res => {
      if (res.success) {
        this.data = res.data;
      } else {
        this.logout();
      }
    }, err => {
      console.log("user data not found")
    })
  }


}
