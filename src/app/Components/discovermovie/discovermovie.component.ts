import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Tvshows } from 'src/app/Model/tv';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
import { DiscoverMovieService } from 'src/app/Services/discover-movie.service';
import { Movies } from 'src/app/Model/movies';
@Component({
  selector: 'app-discovermovie',
  templateUrl: './discovermovie.component.html',
  styleUrls: ['./discovermovie.component.css']
})
export class DiscovermovieComponent implements OnInit {
  @Input() sliderConfig: any;
  @Input() title !: string;
  @Input() movies !: Movies;
  subs: Subscription[] = [];
  discoverTvShows!: Tvshows;
  // topRatedShows: any;
  // Latestshows: any;
  // tvOnAirShows: any;
  tvgenresId: any;
  isShow!: false;
  selecteGenresId: any;
  tvshowsBasedonId: any;
  filterTvData!: Tvshows;
  constructor(private movie: MovieserviceService, private discoverMovie: DiscoverMovieService) { }

  ngOnInit(): void {
    this.subs.push(this.discoverMovie.getGenreId().subscribe(data => {
      this.tvgenresId = data;
      console.log(this.tvgenresId)
      console.log("tv genres", this.tvgenresId)
    }
    ));

    this.selecteGenresId = 18
    this.onSelectedGenre(this.selecteGenresId);
  }


  onSelectedGenre(selecteGenresId: any): void {
    this.discoverMovie.getMovieBasedOnGenre(selecteGenresId).subscribe(data => {
      this.filterTvData = data;
      console.log('this is movie filter', this.filterTvData);
    })
  }

}
