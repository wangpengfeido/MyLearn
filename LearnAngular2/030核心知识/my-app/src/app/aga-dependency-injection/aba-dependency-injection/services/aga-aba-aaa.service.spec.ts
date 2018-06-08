import { TestBed, inject } from '@angular/core/testing';

import { AgaAbaAaaService } from './aga-aba-aaa.service';

describe('AgaAbaAaaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgaAbaAaaService]
    });
  });

  it('should be created', inject([AgaAbaAaaService], (service: AgaAbaAaaService) => {
    expect(service).toBeTruthy();
  }));
});
