import { TestBed, inject } from '@angular/core/testing';

import { AgaAbaAkaService } from './aga-aba-aka.service';

describe('AgaAbaAkaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgaAbaAkaService]
    });
  });

  it('should be created', inject([AgaAbaAkaService], (service: AgaAbaAkaService) => {
    expect(service).toBeTruthy();
  }));
});
