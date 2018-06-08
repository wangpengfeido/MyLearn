import { TestBed, inject } from '@angular/core/testing';

import { AgaAbaAcaService } from './aga-aba-aca.service';

describe('AgaAbaAcaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgaAbaAcaService]
    });
  });

  it('should be created', inject([AgaAbaAcaService], (service: AgaAbaAcaService) => {
    expect(service).toBeTruthy();
  }));
});
