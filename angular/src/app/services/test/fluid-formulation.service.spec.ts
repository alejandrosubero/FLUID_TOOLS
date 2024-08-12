import { TestBed } from '@angular/core/testing';

import { FluidFormulationService } from '../fluid-formulation.service';

describe('FluidFormulationService', () => {
  let service: FluidFormulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FluidFormulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
