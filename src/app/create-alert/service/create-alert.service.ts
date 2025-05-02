import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.example';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateAlertService {

  private apiUrl = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  createAlert( alertText: string ) {
    const body = {
      alert: alertText
    };
    return this.http.post(`${this.apiUrl}/video/add-alert`, body);
  }
}
