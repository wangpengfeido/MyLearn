import { TestBed, inject } from '@angular/core/testing';

import { AgaAbaAiaService } from './aga-aba-aia.service';

describe('AgaAbaAiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgaAbaAiaService]
    });
  });

  it('should be created', inject([AgaAbaAiaService], (service: AgaAbaAiaService) => {
    expect(service).toBeTruthy();
  }));
});
