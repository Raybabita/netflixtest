import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tvshows } from '../Model/tv';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscoverMovieService {

  constructor(private http: HttpClient, private router: Router) { }
  url: string = 'https://api.themoviedb.org/3';


  getGenreId(): Observable<any> {
    return this.http.get<Tvshows>(this.url + '/genre/movie/list?api_key=' + environment.api_key)

  }

  getMovieBasedOnGenre(selecteGenresId: any): Observable<any> {
    // alert(selecteGenresId)
    return this.http.get<Tvshows>(`https://api.themoviedb.org/3/discover/movie?api_key=285bb9715cde096a3fbb2cfdac23701f&with_genres=${selecteGenresId}`)
  }


}
