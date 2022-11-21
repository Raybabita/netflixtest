import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { VideoplayerComponent } from './Components/videoplayer/videoplayer.component';
import { UserloginGuard } from './userlogin.guard';
import { SearchComponent } from './Components/search/search.component';
import { HeaderComponent } from './Components/header/header.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { SingleMovieComponent } from './Components/single-movie/single-movie.component';
import { PlayListComponent } from './Components/play-list/play-list.component';
import { TvshowComponent } from './Components/tvshow/tvshow.component';
import { DiscovermovieComponent } from './Components/discovermovie/discovermovie.component';
import { SingletvComponent } from './Components/singletv/singletv.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'mainpage',
    component: MainpageComponent,
    // canActivate: [UserloginGuard]
  },
  {
    path: 'video',
    component: VideoplayerComponent,
    // canActivate: [UserloginGuard]
  },
  {
    path: 'mainpage/video',
    component: VideoplayerComponent,
    // canActivate: [UserloginGuard]
  },
  {
    path: 'movieSearchList',
    component: MovieListComponent,
    // canActivate: [UserloginGuard]
  },
  {
    path: 'mainpage/singleMovie/:id',
    component: SingleMovieComponent,
    // canActivate: [UserloginGuard]
  },
  {
    path: 'singleMovie/myPlaylist',
    component: PlayListComponent,
    // canActivate: [UserloginGuard]
  },
  {
    path: 'tvshow',
    component: TvshowComponent,
    // canActivate: [UserloginGuard]
  },
  {
    path: 'discovermovie',
    component: DiscovermovieComponent,
    // canActivate: [UserloginGuard]
  },
  {
    path: 'tvshow/singleTv/:id',
    component: SingletvComponent,
    // canActivate: [UserloginGuard]
  },
  {
    path: 'discovermovie/singleMovie/:id',
    component: SingleMovieComponent,
    // canActivate: [UserloginGuard]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserloginGuard]
})
export class AppRoutingModule { }
