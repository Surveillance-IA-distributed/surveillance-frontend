import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScenariesResponse } from '../interface/scenariesResponse.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetScenariesService {

  private apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  getScenaries() : Observable<ScenariesResponse[]> {
    return this.http.get <ScenariesResponse[]> (`${this.apiUrl}/video-results/scenaries`);
  }
}
