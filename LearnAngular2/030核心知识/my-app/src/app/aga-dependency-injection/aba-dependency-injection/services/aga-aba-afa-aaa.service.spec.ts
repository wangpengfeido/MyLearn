import { TestBed, inject } from '@angular/core/testing';

import { AgaAbaAfaAaaService } from './aga-aba-afa-aaa.service';

describe('AgaAbaAfaAaaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgaAbaAfaAaaService]
    });
  });

  it('should be created', inject([AgaAbaAfaAaaService], (service: AgaAbaAfaAaaService) => {
    expect(service).toBeTruthy();
  }));
});
