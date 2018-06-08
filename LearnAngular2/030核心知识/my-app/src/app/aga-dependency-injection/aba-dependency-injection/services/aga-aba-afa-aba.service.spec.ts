import { TestBed, inject } from '@angular/core/testing';

import { AgaAbaAfaAbaService } from './aga-aba-afa-aba.service';

describe('AgaAbaAfaAbaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgaAbaAfaAbaService]
    });
  });

  it('should be created', inject([AgaAbaAfaAbaService], (service: AgaAbaAfaAbaService) => {
    expect(service).toBeTruthy();
  }));
});
