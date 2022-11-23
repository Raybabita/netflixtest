import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Tvshows } from 'src/app/Model/tv';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
import { TvService } from 'src/app/Services/tv.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {
  @Input() sliderConfig: any;
  @Input() title !: string;
  @Input() movies !: Tvshows;
  subs: Subscription[] = [];
  discoverTvShows!: Tvshows;
  // topRatedShows: any;
  // Latestshows: any;
  // tvOnAirShows: any;
  tvgenresId: any;
  isShow!: false;
  selecteGenresId: any;

  filterTvData!: Tvshows;

  constructor(private movie: MovieserviceService, private tvshows: TvService) { }

  ngOnInit(): void {

    this.subs.push(this.tvshows.getGenreId().subscribe(data => {
      this.tvgenresId = data;
      console.log("tv genres", this.tvgenresId)
    }
    ));
    this.selecteGenresId = 18
    this.onSelectedGenre(this.selecteGenresId);

  }
  onSelectedGenre(selecteGenresId: any): void {
    this.tvshows.getTvShowsBasedOnGenre(selecteGenresId).subscribe(data => {
      this.filterTvData = data;
      console.log('this is filtertv shows', this.filterTvData);
    })
  }


}