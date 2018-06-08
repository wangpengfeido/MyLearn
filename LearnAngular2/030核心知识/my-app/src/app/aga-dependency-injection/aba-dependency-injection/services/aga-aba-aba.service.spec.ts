import { TestBed, inject } from '@angular/core/testing';

import { AgaAbaAbaService } from './aga-aba-aba.service';

describe('AgaAbaAbaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgaAbaAbaService]
    });
  });

  it('should be created', inject([AgaAbaAbaService], (service: AgaAbaAbaService) => {
    expect(service).toBeTruthy();
  }));
});
