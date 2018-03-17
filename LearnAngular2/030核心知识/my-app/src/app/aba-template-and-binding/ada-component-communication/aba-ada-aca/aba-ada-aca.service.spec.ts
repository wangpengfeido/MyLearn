import { TestBed, inject } from '@angular/core/testing';

import { AbaAdaAcaService } from './aba-ada-aca.service';

describe('AbaAdaAcaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbaAdaAcaService]
    });
  });

  it('should be created', inject([AbaAdaAcaService], (service: AbaAdaAcaService) => {
    expect(service).toBeTruthy();
  }));
});
