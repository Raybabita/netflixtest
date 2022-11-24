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

  getDiscoverTvShows(): Observable<Tvshows> {
    return this.http.get<Tvshows>('https://api.themoviedb.org/3/discover/tv?api_key=285bb9715cde096a3fbb2cfdac23701f&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0')
  }
  // getTopRatedTvShows(): Observable<any> {
  //   return this.http.get<Tvshows>(this.url + '/tv/top_rated?api_key=' + environment.api_key)
  // }
  // getTvOnAirShows(): Observable<any> {
  //   return this.http.get<Tvshows>(this.url + '/tv/on_the_air?api_key=' + environment.api_key)
  // }

  getGenreId(): Observable<Tvshows> {
    return this.http.get<Tvshows>(this.url + '/genre/tv/list?api_key=' + environment.api_key)
  }
  getTvShowsBasedOnGenre(selecteGenresId: any): Observable<any> {
    // alert(selecteGenresId)
    return this.http.get<Tvshows>(`https://api.themoviedb.org/3/discover/tv?api_key=285bb9715cde096a3fbb2cfdac23701f&with_genres=${selecteGenresId}`)
  }



  getTvShowById(id: any): Observable<Tvshows> {
    // alert(id);
    return this.http.get<Tvshows>(`https://api.themoviedb.org/3/tv/${id}?api_key=285bb9715cde096a3fbb2cfdac23701f&append_to_response=videos,images`);
  }

  getTvShowsSeasons(id: any): Observable<Tvshows> {
    // alert(id);
    return this.http.get<Tvshows>(`https://api.themoviedb.org/3/tv/${id}?api_key=285bb9715cde096a3fbb2cfdac23701f&language=en-US&append_to_response=episode_groups`);

  }

  getTvShowBasedOnSeason(id: any, selectedSeasonId: any): Observable<any> {
    // alert(selecteGenresId)
    return this.http.get<Tvshows>(`https://api.themoviedb.org/3/tv/${id}/season/${selectedSeasonId}?api_key=285bb9715cde096a3fbb2cfdac23701f&append_to_response=episode_groups`)
    // https://api.themoviedb.org/3/tv/68814/season/1?api_key=285bb9715cde096a3fbb2cfdac23701f&language=en-US
  }

  getEpisodeById(tvid: any, seasonnumber: any, episodeNumber: any): Observable<Tvshows> {
    // alert(tvid);
    // alert(seasonnumber)
    // alert(episodeNumber)
    return this.http.get<Tvshows>(`https://api.themoviedb.org/3/tv/${tvid}/season/${seasonnumber}/episode/${episodeNumber}?api_key=285bb9715cde096a3fbb2cfdac23701f&append_to_response=videos,images`);
    // https://api.themoviedb.org/3/tv/1402/season/1/episode/2?api_key=285bb9715cde096a3fbb2cfdac23701f&language=en-US
  }

  getSimilarTvShows(id: any): Observable<Tvshows> {
    // alert(id);
    return this.http.get<Tvshows>(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=285bb9715cde096a3fbb2cfdac23701f&append_to_response=videos,images`);
  }


  getRecommendTvShows(id: any): Observable<Tvshows> {
    // alert(id);
    return this.http.get<Tvshows>(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=285bb9715cde096a3fbb2cfdac23701f&append_to_response=videos,images`);

  }

  getImagebyId(id: any): Observable<Tvshows> {
    return this.http.get<Tvshows>(`https://api.themoviedb.org/3/tv/${id}/images?api_key=` + environment.api_key);
  }

  getVideobyId(id: any): Observable<Tvshows> {
    // alert(id);
    return this.http.get<Tvshows>(`https://api.themoviedb.org/3/tv/157336?api_key=285bb9715cde096a3fbb2cfdac23701f&append_to_response=videos,images`);

  }



}
