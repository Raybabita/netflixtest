import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {
  name = 'Video events';
  videoSource = "https://d1imz3dprig39z.cloudfront.net/Marvel+Studios'+Avengers+-+Official+Trailer.mp4";

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('videoPlayer') videoplayer: any;
  public startedPlay: boolean = false;
  public show: boolean = false;

  pauseVideo(videoplayer: any) {
    videoplayer.nativeElement.play();
    // this.startedPlay = true;
    // if(this.startedPlay == true)
    // {
    setTimeout(() => {
      videoplayer.nativeElement.pause();
      if (videoplayer.nativeElement.paused) {
        this.show = !this.show;
      }
    }, 5000);
    // }
  }

  closebutton(videoplayer: any) {
    this.show = !this.show;
    videoplayer.nativeElement.play();
  }



}
