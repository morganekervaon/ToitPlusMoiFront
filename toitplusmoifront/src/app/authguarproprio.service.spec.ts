import { TestBed } from '@angular/core/testing';

import { AuthguarproprioService } from './authguarproprio.service';

describe('AuthguarproprioService', () => {
  let service: AuthguarproprioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguarproprioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
