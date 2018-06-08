import { TestBed, inject } from '@angular/core/testing';

import { AhaAbaSigletonService } from './aha-aba-sigleton.service';

describe('AhaAbaSigletonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AhaAbaSigletonService]
    });
  });

  it('should be created', inject([AhaAbaSigletonService], (service: AhaAbaSigletonService) => {
    expect(service).toBeTruthy();
  }));
});
