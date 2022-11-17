import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
import { RouterTestingModule } from "@angular/router/testing";
import { SingleMovieComponent } from './single-movie.component';

describe('SingleMovieComponent', () => {
  let component: SingleMovieComponent;
  let fixture: ComponentFixture<SingleMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleMovieComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [MovieserviceService],
    })
      .compileComponents();

    fixture = TestBed.createComponent(SingleMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
