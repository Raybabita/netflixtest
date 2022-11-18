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
export class TvService {


  constructor(private http: HttpClient, private router: Router) { }
  url: string = 'https://api.themoviedb.org/3';

  getDiscoverTvShows(): Observable<any> {
    return this.http.get<Tvshows>('https://api.themoviedb.org/3/discover/tv?api_key=285bb9715cde096a3fbb2cfdac23701f&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0')
  }
  // getTopRatedTvShows(): Observable<any> {
  //   return this.http.get<Tvshows>(this.url + '/tv/top_rated?api_key=' + environment.api_key)
  // }
  // getTvOnAirShows(): Observable<any> {
  //   return this.http.get<Tvshows>(this.url + '/tv/on_the_air?api_key=' + environment.api_key)
  // }

  getGenreId(): Observable<any> {
    return this.http.get<Tvshows>(this.url + '/genre/tv/list?api_key=' + environment.api_key)
  }
  getTvShowsBasedOnGenre(selecteGenresId: any): Observable<any> {
    // alert(selecteGenresId)
    return this.http.get<Tvshows>(`https://api.themoviedb.org/3/discover/tv?api_key=285bb9715cde096a3fbb2cfdac23701f&with_genres=${selecteGenresId}`)
  }



}
