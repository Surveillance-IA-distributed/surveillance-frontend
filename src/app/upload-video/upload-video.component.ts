import { Component } from '@angular/core';
import { UploadVideoService } from './services/upload-video.service';
import { UploadedVideosService } from '../share/services/uploaded-videos.service';
import { VideosListReponse } from '../share/interfaces/uploadedVideosResponse.interface';

@Component({
  selector: 'app-upload-video',
  imports: [],
  templateUrl: './upload-video.component.html',
  styleUrl: './upload-video.component.css'
})
export class UploadVideoComponent {
  videoFile: File | null = null;
  uploadStatus = '';

  uploadedVideos!: VideosListReponse;
  isLoading = true;

  constructor(
    private readonly uploadVideoService: UploadVideoService,
    private readonly uploadedVideosService: UploadedVideosService
  ) {
    this.getUploadedVideos();
  }

  getUploadedVideos() {
    this.isLoading = true;
    this.uploadedVideosService.getUploadedVideos().subscribe({
      next: (response) => {
        this.uploadedVideos = response;
        console.log('Uploaded videos:', this.uploadedVideos);
      },
      error: (error) => {
        console.error('Error fetching uploaded videos:', error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  onVideoFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.videoFile = input.files[0];
    }
  }

  uploadVideo(): void {
    if (this.videoFile ) {
      console.log('Uploading video:', this.videoFile);
      this.uploadVideoService.uploadVideo(this.videoFile).subscribe({
        next: (response) => {
          console.log('Upload successful:', response);
          const message = response.message + ' ' + ' - Video Save Path: ' + response.filePath;
          this.uploadStatus = message || 'Upload successful';
        },

        error: (error) => {
          console.error('Upload failed:', error);
          this.uploadStatus = 'Upload failed. Please try again.';
        }
      });

    } else {
      console.error('Please select both a video and a thumbnail file.');
    }
  }
}
