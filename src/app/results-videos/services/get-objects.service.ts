import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.example';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObjectsResponse } from '../interface/objectsResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GetObjectsService {

  private apiUrl = environment.apiUrl
  
  constructor(
    private http: HttpClient
  ) { }

  getObjects() : Observable<ObjectsResponse[]> {
    return this.http.get<ObjectsResponse[]>(`${this.apiUrl}/video-results/objects`);
  }    
}
