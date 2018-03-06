import { TestBed, inject } from '@angular/core/testing';

import { AaaAfaService } from './aaa-afa.service';

describe('AaaAfaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AaaAfaService]
    });
  });

  it('should be created', inject([AaaAfaService], (service: AaaAfaService) => {
    expect(service).toBeTruthy();
  }));
});
