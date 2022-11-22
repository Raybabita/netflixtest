import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

}
