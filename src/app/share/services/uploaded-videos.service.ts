import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.example';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideosListReponse } from '../interfaces/uploadedVideosResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class UploadedVideosService {

  private apiUrl = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  getUploadedVideos() : Observable<VideosListReponse> {
    return this.http.get<VideosListReponse>(`${this.apiUrl}/video/list-videos-uploaded`);
  }
}
