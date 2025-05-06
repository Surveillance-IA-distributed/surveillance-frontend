import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScanVideoResponse } from '../interfaces/scanVideoResponse.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScanVideosService {

  private apiUrl = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  scanVideo() : Observable<ScanVideoResponse> {
    return this.http.post<ScanVideoResponse>(`${this.apiUrl}/video/scan`, {});
  }
}
