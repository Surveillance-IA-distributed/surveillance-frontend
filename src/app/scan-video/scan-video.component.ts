import { Component } from '@angular/core';
import { UploadedVideosService } from '../share/services/uploaded-videos.service';
import { ScanVideosService } from './services/scan-videos.service';
import { ScanVideoResponse } from './interfaces/scanVideoResponse.interface';
import { VideosListReponse } from '../share/interfaces/uploadedVideosResponse.interface';
import { ScannedVideosService } from '../share/services/scanned-videos.service';

@Component({
  selector: 'app-scan-video',
  imports: [],
  templateUrl: './scan-video.component.html',
  styleUrl: './scan-video.component.css'
})
export class ScanVideoComponent {

  uploadedVideos!: VideosListReponse;
  isLoadingGetVideos = true;

  scanVideoResponse: ScanVideoResponse = {
    message: '',
    results: []
  };

  scannedVideoResponse!: VideosListReponse;

  constructor(
    private readonly uploadedVideosService: UploadedVideosService,
    private readonly scanVideoService: ScanVideosService,
    private readonly scannedVideosService: ScannedVideosService
  ) {
    this.getUploadedVideos();
    this.getScannedVideos();
  }

  getUploadedVideos() {
    this.isLoadingGetVideos = true;
    this.uploadedVideosService.getUploadedVideos().subscribe({
      next: (response) => {
        this.uploadedVideos = response;
        console.log('Uploaded videos:', this.uploadedVideos);
      },
      error: (error) => {
        console.error('Error fetching uploaded videos:', error);
      },
      complete: () => {
        this.isLoadingGetVideos = false;
      }
    });
  }

  getScannedVideos() {
    this.scannedVideosService.getScannedVideos().subscribe({
      next: (response) => {
        this.scannedVideoResponse = response;
        console.log('Scanned videos:', this.scannedVideoResponse);
      },
      error: (error) => {
        console.error('Error fetching scanned videos:', error);
      }
    });
  }

  scanVideo(){
    this.scanVideoService.scanVideo().subscribe({
      next: (response) => {
        this.scanVideoResponse = response;
        console.log('Scan video response:', this.scanVideoResponse);
      },
      error: (error) => {
        console.error('Error scanning video:', error);
      },
    });
  }
}
