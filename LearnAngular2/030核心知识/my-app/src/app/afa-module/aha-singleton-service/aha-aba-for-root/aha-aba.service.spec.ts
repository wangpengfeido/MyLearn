import { TestBed, inject } from '@angular/core/testing';

import { AhaAbaService } from './aha-aba.service';

describe('AhaAbaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AhaAbaService]
    });
  });

  it('should be created', inject([AhaAbaService], (service: AhaAbaService) => {
    expect(service).toBeTruthy();
  }));
});
