import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.example';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadVideoResponse } from '../interfaces/uploadVideoResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class UploadVideoService {

  private apiUrl = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  uploadVideo(videoFile: File) : Observable<UploadVideoResponse> {
    const formData = new FormData();
    formData.append('video', videoFile);

    return this.http.post<UploadVideoResponse>(`${this.apiUrl}/video/upload`, formData);
  }
}
