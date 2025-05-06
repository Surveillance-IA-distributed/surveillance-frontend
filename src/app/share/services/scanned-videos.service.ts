import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideosListReponse } from '../../share/interfaces/uploadedVideosResponse.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScannedVideosService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getScannedVideos() : Observable<VideosListReponse> {
    return this.http.get<VideosListReponse>(`${this.apiUrl}/video/list-videos-scanned`);
  }
}
