import { TestBed, inject } from '@angular/core/testing';

import { AfaAgaService } from './afa-aga.service';

describe('AfaAgaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfaAgaService]
    });
  });

  it('should be created', inject([AfaAgaService], (service: AfaAgaService) => {
    expect(service).toBeTruthy();
  }));
});
