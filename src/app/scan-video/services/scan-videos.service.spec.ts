import { TestBed } from '@angular/core/testing';

import { ScanVideosService } from './scan-videos.service';

describe('ScanVideosService', () => {
  let service: ScanVideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScanVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
