import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignUp } from '../Model/movies';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private data!: SignUp;
  constructor(private http: HttpClient) { }

  signup(data: any): Observable<any> {
    return this.http.post('http://localhost:5000/auth/signup', data);
  }

  signin(data: any): Observable<any> {
    return this.http.post('http://localhost:5000/auth/login', data);
  }


  getprofile(): Observable<any> {
    let headers = {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
    return this.http.get('http://localhost:5000/auth/profile', { headers: headers })
  }

  updateProfile(id: any, data: any): Observable<any> {
    // alert(id)
    let headers = {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
    return this.http.put(`http://localhost:5000/auth/${id}`, data, { headers: headers });
  }

  postProfile(data: any): Observable<any> {
    let headers = {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
    return this.http.post(`http://localhost:5000/auth/upload`, data, { headers: headers });

  }


  // profilePicPost() {
  //   let headers = {
  //     'Authorization': "Bearer " + localStorage.getItem('token')
  //   }
  //   return this.http.post(`http://localhost:5000/auth/upload`, { headers: headers });
  // }

  setter(data: any) {
    console.log("from setter", data)
    this.data = data;
  }

  getter() {
    console.log("from getter", this.data)
    return this.data;
  }
}
