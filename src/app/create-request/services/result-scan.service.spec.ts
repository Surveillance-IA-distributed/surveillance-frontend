import { TestBed } from '@angular/core/testing';

import { ResultScanService } from './result-scan.service';

describe('ResultScanService', () => {
  let service: ResultScanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultScanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
