import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MakeQueryResponse } from '../interfaces/makeQueryResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class MakeQueryService {

  private apiUrl = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  makeQuery(requestBody: any) : Observable<MakeQueryResponse[]> {
    return this.http.post<MakeQueryResponse[]>(`${this.apiUrl}/video/make-query`, requestBody);
  }
}
