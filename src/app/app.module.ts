
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './Components/home/home.component';
import { Section1Component } from './Components/home/section1/section1.component';
import { Section2Component } from './Components/home/section2/section2.component';
import { Section3Component } from './Components/home/section3/section3.component';
import { Section4Component } from './Components/home/section4/section4.component';
import { Section5Component } from './Components/home/section5/section5.component';
import { FooterComponent } from './Components/home/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { SliderComponent } from './Components/slider/slider.component';
import { VideoplayerComponent } from './Components/videoplayer/videoplayer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqComponent } from './Components/home/faq/faq.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SearchComponent } from './Components/search/search.component';
import { HeaderComponent } from './Components/header/header.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { SingleMovieComponent } from './Components/single-movie/single-movie.component';
import { PlayListComponent } from './Components/play-list/play-list.component';
import { TvshowComponent } from './Components/tvshow/tvshow.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DiscovermovieComponent } from './Components/discovermovie/discovermovie.component';
import { SingletvComponent } from './Components/singletv/singletv.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';


@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    FooterComponent,
    LoginComponent,
    MainpageComponent,
    SliderComponent,
    VideoplayerComponent,
    FaqComponent,
    SearchComponent,
    HeaderComponent,
    MovieListComponent,
    SingleMovieComponent,
    PlayListComponent,
    TvshowComponent,
    DiscovermovieComponent,
    SingletvComponent,
    SignUpComponent,


  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule,
    AppRoutingModule,
    MatFormFieldModule,
    SlickCarouselModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    VgCoreModule,
    VgControlsModule,
    FormsModule,
    VgOverlayPlayModule,
    MatDialogModule,
    VgBufferingModule,
    MatSidenavModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
