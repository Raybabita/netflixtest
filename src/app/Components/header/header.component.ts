import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MyplaylistService } from 'src/app/Services/myplaylist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItem: number = 0;
  isshowMenu = false;
  sticky = false;
  constructor(private route: Router, private playlistService: MyplaylistService) {
    this.myUrlVariable = 'https://res.cloudinary.com/dahw90b2z/image/upload/v1668097628/im_jvwl1k.webp';
  }

  ngOnInit(): void {
    this.playlistService.getMovie().subscribe(res => {
      this.totalItem = res.length;
    })
  }
  onSearch() {
    this.route.navigate(['movieSearchList'])
  }

  onTvshow() {
    this.route.navigate(['tvshow'])
  }
  onHome() {
    this.route.navigate(['mainpage'])
  }

  onMovies() {
    this.route.navigate(['discovermovie'])
  }
  onProfile() {
    this.route.navigate(['profile'])
  }

  @ViewChild('stickyHeader') header!: ElementRef;
  headerBGUrl!: any;
  myUrlVariable!: string;

  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.header.nativeElement.offsetHeight) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  onMenuDisplay() {
    this.isshowMenu = !this.isshowMenu;
  }

  logout() {
    localStorage.removeItem("token")
    this.route.navigate(['/login'])
  }

  onMyList() {
    this.route.navigate(['singleMovie/myPlaylist'])
  }

}
