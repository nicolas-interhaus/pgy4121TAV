import { TestBed } from '@angular/core/testing';

import { ZonaAPIService } from './zona-api.service';

describe('ZonaAPIService', () => {
  let service: ZonaAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZonaAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
