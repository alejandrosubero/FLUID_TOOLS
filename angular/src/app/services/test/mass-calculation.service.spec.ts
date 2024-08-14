import { TestBed } from '@angular/core/testing';

import { MassCalculationService } from '../mass-calculation.service';

describe('MassCalculationService', () => {
  let service: MassCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
