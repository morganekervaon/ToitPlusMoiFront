import { TestBed } from '@angular/core/testing';

import { AuthgardlocaService } from './authgardloca.service';

describe('AuthgardlocaService', () => {
  let service: AuthgardlocaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthgardlocaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
