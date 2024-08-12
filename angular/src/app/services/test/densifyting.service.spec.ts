import { TestBed } from '@angular/core/testing';

import { DensifytingService } from './densifyting.service';

describe('DensifytingService', () => {
  let service: DensifytingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DensifytingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
