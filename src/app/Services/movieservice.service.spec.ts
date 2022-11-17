import { TestBed } from '@angular/core/testing';
import { MovieserviceService } from './movieservice.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('MovieserviceService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: MovieserviceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieserviceService]
    });

    service = TestBed.inject(MovieserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
