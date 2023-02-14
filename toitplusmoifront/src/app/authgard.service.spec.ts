import { TestBed } from '@angular/core/testing';

import { AuthgardService } from './authgard.service';

describe('AuthgardService', () => {
  let service: AuthgardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthgardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
