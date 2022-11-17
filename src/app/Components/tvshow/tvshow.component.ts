import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from 'src/app/Services/movieservice.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {

  constructor(private movie: MovieserviceService) { }

  ngOnInit(): void {
    this.movie.getVideo().subscribe(data => {
      console.log(data);
    })
  }

}
