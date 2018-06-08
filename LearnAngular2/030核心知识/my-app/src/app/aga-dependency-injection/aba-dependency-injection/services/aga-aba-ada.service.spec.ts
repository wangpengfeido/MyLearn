import { TestBed, inject } from '@angular/core/testing';

import { AgaAbaAdaService } from './aga-aba-ada.service';

describe('AgaAbaAdaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgaAbaAdaService]
    });
  });

  it('should be created', inject([AgaAbaAdaService], (service: AgaAbaAdaService) => {
    expect(service).toBeTruthy();
  }));
});
