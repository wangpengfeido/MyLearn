import { TestBed, inject } from '@angular/core/testing';

import { AgaAbaAgaAbaService } from './aga-aba-aga-aba.service';

describe('AgaAbaAgaAbaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgaAbaAgaAbaService]
    });
  });

  it('should be created', inject([AgaAbaAgaAbaService], (service: AgaAbaAgaAbaService) => {
    expect(service).toBeTruthy();
  }));
});
