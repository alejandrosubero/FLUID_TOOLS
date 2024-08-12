import { TestBed } from '@angular/core/testing';

import { BasicCalculationService } from './basic-calculation.service';

describe('BasicCalculationService', () => {
  let service: BasicCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
