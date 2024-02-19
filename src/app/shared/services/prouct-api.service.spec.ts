import { TestBed } from '@angular/core/testing';

import { ProuctApiService } from './prouct-api.service';

describe('ProuctApiService', () => {
  let service: ProuctApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProuctApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
