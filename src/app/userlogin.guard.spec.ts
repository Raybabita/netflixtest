import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserloginGuard } from './userlogin.guard';

describe('UserloginGuard', () => {
  let guard: UserloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    guard = TestBed.inject(UserloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
