import { TestBed } from '@angular/core/testing';
import { UploadedVideosService } from './uploaded-videos.service';


describe('UploadedVideosService', () => {
  let service: UploadedVideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadedVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
