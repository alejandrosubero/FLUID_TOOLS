import { TestBed } from '@angular/core/testing';

import { ReologyServiceService } from './reology-service.service';

describe('ReologyServiceService', () => {
  let service: ReologyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReologyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
