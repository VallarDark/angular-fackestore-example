import { TestBed } from '@angular/core/testing';

import { PopapService } from './popap.service';

describe('PopapService', () => {
  let service: PopapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
