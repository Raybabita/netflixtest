import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvService } from 'src/app/Services/tv.service';
@Component({
  selector: 'app-tvepisode',
  templateUrl: './tvepisode.component.html',
  styleUrls: ['./tvepisode.component.css']
})
export class TvepisodeComponent implements OnInit {
  episodeNumber: any;
  episodeData: any;
  seasonNumber: any;
  tvId: any;
  constructor(private activatedRoute: ActivatedRoute, private tvservice: TvService) { }

  ngOnInit(): void {
    this.episodeNumber = this.activatedRoute.snapshot.params['id'];
    this.tvId = this.activatedRoute.snapshot?.url[2]?.path;
    this.seasonNumber = this.activatedRoute.snapshot.url[4]?.path
    console.log("this is episode number", this.episodeNumber)

    console.log("this is tvid", this.tvId)
    console.log("this is season number", this.seasonNumber)
    this.getEpisode()
  }

  getEpisode() {
    alert(this.tvId)
    this.tvservice.getEpisodeById(this.tvId, this.seasonNumber, this.episodeNumber).subscribe(item => {
      this.episodeData = item;
      console.log(this.episodeData)
    })
  }

}
