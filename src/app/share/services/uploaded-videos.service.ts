import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideosListReponse } from '../interfaces/uploadedVideosResponse.interface';
import { environment } from '../../../environments/environment';

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
