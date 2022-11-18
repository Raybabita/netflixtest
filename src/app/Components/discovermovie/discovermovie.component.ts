import { Subscription } from 'rxjs';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
import { Component, OnInit, Input } from '@angular/core';
import { Movies } from 'src/app/Model/movies';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-discovermovie',
  templateUrl: './discovermovie.component.html',
  styleUrls: ['./discovermovie.component.css']
})
export class DiscovermovieComponent implements OnInit {
  latestMovie: any;
  popularMovies !: Movies;
  nowPlayingMovies!: Movies;
  topRatedMovies!: Movies;
  upComingMovies !: Movies;
  trendingMovies!: Movies;
  originals!: Movies;
  constructor(private movieServices: MovieserviceService, private sanitizer: DomSanitizer, private route: Router) { }

  ngOnInit(): void {
    // this.getLatestMovies();
    this.getNowPlayingMovies();
    this.getOriginals();
    this.getPopularMovies();
    this.getTopRatedMovies();
    this.getTrendingMovies();
    this.getUpcomingMovies();
  }

  @Input() title !: string;
  @Input() movies !: Movies;

  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  // getLatestMovies() {
  //   this.movieServices.getLatestMovies().subscribe(res => {
  //     this.latestMovie = this.changeData(res);
  //     console.log(this.latestMovie)
  //   }, err => {
  //     console.log("error while fetching popular movies", err);
  //   })
  // }
  changeData(res: any): any {
    if (!res.backdrop_path) {
      res.backdrop_path = 'https://image.tmdb.org/t.p/original' + res.poster_path + '?api_key=' + environment.api_key;
    } else {
      res.backdrop_path = 'https://image.tmdb.org/t.p/original' + res.backdrop_path + '?api_key=' + environment.api_key;
    }
    return res;
  }



  getPopularMovies() {
    this.movieServices.getPopularsMovies().subscribe(res => {
      this.popularMovies = this.modifyData(res);

    }, err => {
      console.log("error while fetching popular movies", err);
    })
  }

  getNowPlayingMovies() {
    this.movieServices.getNowPlayingMovies().subscribe(res => {
      this.nowPlayingMovies = this.modifyData(res);
    }, err => {
      console.log("error while fetchingnow playing movies", err);
    })
  }


  getTopRatedMovies() {
    this.movieServices.getTopRatedMovies().subscribe(res => {
      this.topRatedMovies = this.modifyData(res);
    }, err => {
      console.log("error while fetching top rated movies", err);
    })
  }

  getUpcomingMovies() {
    this.movieServices.getUpcomingMovies().subscribe(res => {
      this.upComingMovies = this.modifyData(res);

    }, err => {
      console.log("error while fetching upcoming movies", err);
    })
  }


  getTrendingMovies() {
    this.movieServices.getTrendingMovies().subscribe(res => {
      this.trendingMovies = this.modifyData(res);
    }, err => {
      console.log("error while fetching trending movies", err);
    })
  }
  getOriginals() {
    this.movieServices.getOriginalShows().subscribe(res => {
      this.originals = this.modifyData(res);
      console.log(this.originals)
    }, err => {
      console.log("error while fetching original movies", err);
    })
  }


  modifyData(movies: Movies): Movies {
    if (movies.results) {
      movies.results.forEach(element => {
        element.backdrop_path = 'https://image.tmdb.org/t/p/original' + element.backdrop_path + '?api_key=' + environment.api_key;
        if (!element.title) {
          element.title = element?.name;
        }
      });
    }
    return movies;
  }
}
