import { TestBed, inject } from '@angular/core/testing';

import { AgaAbaAjaService } from './aga-aba-aja.service';

describe('AgaAbaAjaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgaAbaAjaService]
    });
  });

  it('should be created', inject([AgaAbaAjaService], (service: AgaAbaAjaService) => {
    expect(service).toBeTruthy();
  }));
});
