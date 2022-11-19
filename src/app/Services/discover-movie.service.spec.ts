import { TestBed } from '@angular/core/testing';

import { DiscoverMovieService } from './discover-movie.service';

describe('DiscoverMovieService', () => {
  let service: DiscoverMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscoverMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
