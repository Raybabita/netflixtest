import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movies, login, SignUp } from '../Model/movies';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const enum endpoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular = '/movie/popular',
  top_rated = '/movie/top_rated',
  upcoming = '/movie/upcoming',
  trending = '/trending/all/week',
  originals = '/discover/tv',
  singleMovie = '/movie/{movie_id}'
}

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  isUserLoggedIn = new BehaviorSubject<boolean>(false)
  LoginErrorMsg = new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: SignUp) {
    this.http.post('http://localhost:3000/users',
      data,
      { observe: 'response' }).subscribe((result) => {
        this.isUserLoggedIn.next(true);
        localStorage.setItem('userDatails', JSON.stringify(result.body));
        // this.router.navigate(['login'])
        console.log(result);
      })
  }

  reloadUser() {
    if (localStorage.getItem('userDatails')) {
      this.isUserLoggedIn.next(true);
      this.router.navigate(['login'])
    }
  }

  userLogin(data: login) {
    console.log(data)
    this.http.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
      { observe: 'response' }).subscribe((result: any) => {
        console.log(result);
        if (result && result.body && result.body.length) {
          this.LoginErrorMsg.emit(false)
          localStorage.setItem('userDatails', JSON.stringify(result.body))
          this.router.navigate(['mainpage'])
        } else {
          console.log("login failed");
          this.LoginErrorMsg.emit(true)
        }
      })
  }

  url: string = 'https://api.themoviedb.org/3';

  getLatestMovies(): Observable<any> {
    return this.http.get<Movies>(this.url + '/movie/latest?api_key=' + environment.api_key)
  }

  getPopularsMovies(): Observable<Movies> {
    return this.http.get<Movies>(this.url + '/movie/popular?api_key=' + environment.api_key)
  }

  getNowPlayingMovies(): Observable<Movies> {
    return this.http.get<Movies>(this.url + '/movie/now_playing?api_key=' + environment.api_key)
  }

  getTopRatedMovies(): Observable<Movies> {
    return this.http.get<Movies>(this.url + '/movie/top_rated?api_key=' + environment.api_key)
  }
  getUpcomingMovies(): Observable<Movies> {
    return this.http.get<Movies>(this.url + '/movie/upcoming?api_key=' + environment.api_key)
  }
  getTrendingMovies(): Observable<Movies> {
    return this.http.get<Movies>(this.url + '/trending/all/week?api_key=' + environment.api_key)
  }
  getOriginalShows(): Observable<Movies> {
    return this.http.get<Movies>(this.url + '/discover/tv?api_key=' + environment.api_key)
  }

  getMovieById(id: any): Observable<Movies> {
    // alert(id);
    return this.http.get<Movies>(`https://api.themoviedb.org/3/movie/${id}?api_key=285bb9715cde096a3fbb2cfdac23701f&append_to_response=videos,images`);

  }


  getImage(id: any): Observable<Movies> {
    return this.http.get<Movies>(`https://api.themoviedb.org/3/movie/${id}/images?api_key=` + environment.api_key);
  }

  getVideo(): Observable<Movies> {
    // alert(id);
    return this.http.get<Movies>(`https://api.themoviedb.org/3/movie/157336?api_key=285bb9715cde096a3fbb2cfdac23701f&append_to_response=videos,images`);

  }



  // private URL: string = 'https://api.themoviedb.org/3';

  // private api_key = environment.api_key;



  // getLatestMovie(): Observable<Movies> {
  //   return this.http.get<Movies>(`${this.URL}${endpoint.latest}`, {
  //     params: {
  //       api_key: this.api_key
  //     }
  //   });
  // }

  // getNowPlaying(): Observable<Movies> {
  //   return this.http.get<Movies>(`${this.URL}${endpoint.now_playing}`, {
  //     params: {
  //       api_key: this.api_key
  //     }
  //   });
  // }

  // getOriginals(): Observable<Movies> {
  //   return this.http.get<Movies>(`${this.URL}${endpoint.originals}`, {
  //     params: {
  //       api_key: this.api_key
  //     }
  //   });
  // }

  // getPopularMovies(): Observable<Movies> {
  //   return this.http.get<Movies>(`${this.URL}${endpoint.popular}`, {
  //     params: {
  //       api_key: this.api_key
  //     }
  //   });
  // }

  // getTopRated(): Observable<Movies> {
  //   return this.http.get<Movies>(`${this.URL}${endpoint.top_rated}`, {
  //     params: {
  //       api_key: this.api_key
  //     }
  //   });
  // }

  // getTrending(): Observable<Movies> {
  //   return this.http.get<Movies>(`${this.URL}${endpoint.trending}`, {
  //     params: {
  //       api_key: this.api_key
  //     }
  //   });
  // }


}

