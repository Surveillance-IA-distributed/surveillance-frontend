import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoListResponse } from '../interfaces/uploadedVideosResponse.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadedVideosService {

  private apiUrl = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  getUploadedVideos() : Observable<VideoListResponse[]> {
    return this.http.get<VideoListResponse[]>(`${this.apiUrl}/api/video-data/getVideoList`);
  }
}
