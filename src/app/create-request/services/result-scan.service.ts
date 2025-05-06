import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScanResultResponse } from '../interfaces/scanResultResponse.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultScanService {

  private apiUrl = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  getScanResults(videoId: string) : Observable<ScanResultResponse> {
    return this.http.get<ScanResultResponse>(`${this.apiUrl}/video/results/${videoId}`);
  }
}
