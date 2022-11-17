import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/app/Model/movies';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
import { MyplaylistService } from 'src/app/Services/myplaylist.service';
import { environment } from 'src/environments/environment';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  id: any;
  data: any;
  headerBGUrl!: any;
  video: any;
  safeURL: SafeResourceUrl;
  key: any;
  videoURL: any;
  apiLoaded = false;

  // videoId = 'QIZ9aZD6vs0';
  height = 500;
  width = 840;
  startSeconds = 60;
  endSeconds = 120;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)
    this.getOne()
    this.getImage()
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }


  getOne() {
    this.movieService.getMovieById(this.id).subscribe(items => {
      this.data = items;
      // this.data = items.videos.results?.[0].key;
      this.key = items.videos.results?.[0].key;
      // console.log(this.key)
      this.videoURL = `https://www.youtube.com/embed/${this.key}`;
      console.log(this.videoURL);
    })
  }


  image: any;
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieserviceService, private _sanitizer: DomSanitizer,
    private playListService: MyplaylistService,
    private route: Router) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoURL}`);
  }
  getImage() {
    this.movieService.getImage(this.id).subscribe(imageItem => {
      this.image = imageItem;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + imageItem?.backdrops?.[1].file_path;
      // console.log(this.headerBGUrl)

    })
  }


  playVideo() {
    this.route.navigate(['video'])
  }
  onAddPlayList(data: any) {
    this.playListService.addtocart(data);
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
