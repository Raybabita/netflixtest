import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/app/Model/movies';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MyplaylistService } from 'src/app/Services/myplaylist.service';
import { environment } from 'src/environments/environment';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { TvService } from 'src/app/Services/tv.service';

@Component({
  selector: 'app-singletv',
  templateUrl: './singletv.component.html',
  styleUrls: ['./singletv.component.css']
})
export class SingletvComponent implements OnInit {
  id: any;
  data: any;
  headerBGUrl!: any;
  video: any;
  safeURL: SafeResourceUrl;
  key: any;
  videoURL: any;
  apiLoaded = false;
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
    this.tvservice.getTvShowById(this.id).subscribe(items => {
      this.data = items;
      // this.data = items.videos.results?.[0].key;
      this.key = items.videos.results?.[0].key;
      // console.log(this.key)
      this.videoURL = `https://www.youtube.com/embed/${this.key}`;
      console.log(this.videoURL);
    })
  }


  image: any;
  constructor(private activatedRoute: ActivatedRoute, private tvservice: TvService, private _sanitizer: DomSanitizer,
    private playListService: MyplaylistService,
    private route: Router) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoURL}`);
  }
  getImage() {
    this.tvservice.getImagebyId(this.id).subscribe(imageItem => {
      this.image = imageItem;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + imageItem?.backdrops?.[1].file_path;
      // console.log(this.headerBGUrl)

    })
  }


  playVideo() {
    this.route.navigate(['video'])
  }
  onAddPlayList(data: any) {
    this.playListService.addtoList(data);
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
