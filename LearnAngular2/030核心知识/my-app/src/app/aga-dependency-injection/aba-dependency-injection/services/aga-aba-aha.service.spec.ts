import { TestBed, inject } from '@angular/core/testing';

import { AgaAbaAhaService } from './aga-aba-aha.service';

describe('AgaAbaAhaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgaAbaAhaService]
    });
  });

  it('should be created', inject([AgaAbaAhaService], (service: AgaAbaAhaService) => {
    expect(service).toBeTruthy();
  }));
});
