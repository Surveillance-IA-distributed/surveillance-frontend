import { TestBed } from '@angular/core/testing';
import { ScannedVideosService } from './scanned-videos.service';

describe('ScannedVideosService', () => {
  let service: ScannedVideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScannedVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
