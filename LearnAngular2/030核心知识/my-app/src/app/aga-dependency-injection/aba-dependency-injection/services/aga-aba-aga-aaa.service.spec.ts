import { TestBed, inject } from '@angular/core/testing';

import { AgaAbaAgaAaaService } from './aga-aba-aga-aaa.service';

describe('AgaAbaAgaAaaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgaAbaAgaAaaService]
    });
  });

  it('should be created', inject([AgaAbaAgaAaaService], (service: AgaAbaAgaAaaService) => {
    expect(service).toBeTruthy();
  }));
});
