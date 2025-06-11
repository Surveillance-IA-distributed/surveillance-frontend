import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadVideoResponse } from '../interfaces/uploadVideoResponse.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadVideoService {

  private apiUrl = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  uploadVideo(videoFile: File) : Observable<UploadVideoResponse> {
    const formData = new FormData();
    formData.append('video', videoFile);

    return this.http.post<UploadVideoResponse>(`${this.apiUrl}/api/video-data/upload`, formData);
  }
}
