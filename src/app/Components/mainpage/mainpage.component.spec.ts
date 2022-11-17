import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainpageComponent } from './mainpage.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
describe('MainpageComponent', () => {
  let component: MainpageComponent;
  let fixture: ComponentFixture<MainpageComponent>;
  let h1: HTMLElement;
  let movieServiceStub: Partial<MovieserviceService>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainpageComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: MovieserviceService, useValue: movieServiceStub }],
    })
      .compileComponents();
    // movieServiceStub.getTrending();
    fixture = TestBed.createComponent(MainpageComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('.movie-title');
    // fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display original title', () => {
  //   expect(h1.textContent).toContain(component.title);
  // });

});
