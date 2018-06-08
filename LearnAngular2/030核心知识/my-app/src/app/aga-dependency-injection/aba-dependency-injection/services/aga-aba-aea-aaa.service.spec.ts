import { TestBed, inject } from '@angular/core/testing';

import { AgaAbaAeaAaaService } from './aga-aba-aea-aaa.service';

describe('AgaAbaAeaAaaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgaAbaAeaAaaService]
    });
  });

  it('should be created', inject([AgaAbaAeaAaaService], (service: AgaAbaAeaAaaService) => {
    expect(service).toBeTruthy();
  }));
});
