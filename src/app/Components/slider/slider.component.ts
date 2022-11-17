import { Component, OnInit, Input } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Movies } from 'src/app/Model/movies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() sliderConfig: any;
  @Input() title !: string;
  @Input() movies !: Movies;


  constructor() { }
  ngOnInit(): void {
  }

}
