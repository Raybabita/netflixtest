import { TestBed } from '@angular/core/testing';

import { MyplaylistService } from './myplaylist.service';

describe('MyplaylistService', () => {
  let service: MyplaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyplaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
