import { TestBed, inject } from '@angular/core/testing';

import { AgaAbaAeaAbaService } from './aga-aba-aea-aba.service';

describe('AgaAbaAeaAbaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgaAbaAeaAbaService]
    });
  });

  it('should be created', inject([AgaAbaAeaAbaService], (service: AgaAbaAeaAbaService) => {
    expect(service).toBeTruthy();
  }));
});
