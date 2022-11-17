import { AfterViewInit, Input, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Movies } from 'src/app/Model/movies';
import { Subscription } from 'rxjs';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
import { environment } from 'src/environments/environment';
import {
  Router
} from '@angular/router';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  trending!: Movies;
  popular!: Movies;
  topRated!: Movies;
  originals!: Movies;
  nowPlaying!: Movies;

  sliderConfig = {
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false
  }
  headerBGUrl!: any;
  title!: any;

  constructor(private movie: MovieserviceService, private sanitizer: DomSanitizer, private route: Router) { }

  getUrl() {
    return this.headerBGUrl;
  }
  ngOnInit(): void {
    this.subs.push(this.movie.getTrendingMovies().subscribe(data => {
      this.trending = data;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + data?.results?.[1].backdrop_path;
      console.log(this.headerBGUrl)
      this.title = data?.results?.[1].title;
      console.log(this.title)
    }
    ));
    this.subs.push(this.movie.getPopularsMovies().subscribe(data => this.popular = data));
    this.subs.push(this.movie.getTopRatedMovies().subscribe(data => this.topRated = data));
    this.subs.push(this.movie.getOriginalShows().subscribe(data => this.originals = data));
    this.subs.push(this.movie.getNowPlayingMovies().subscribe(data => this.nowPlaying = data));
    this.getUrl()
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  onSearch() {
    this.route.navigate(['/movieSearchList'])
  }

  logout() {
    localStorage.removeItem("userDetails");
    this.route.navigate(['/'])
  }
}
