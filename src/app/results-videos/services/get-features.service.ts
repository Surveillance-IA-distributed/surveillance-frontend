import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeaturesResponse } from '../interface/featuresRespose.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetFeaturesService {

  private apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  getFeatures() : Observable<FeaturesResponse[]> {
    return this.http.get<FeaturesResponse[]>(`${this.apiUrl}/video-results/features`);
  }
}
