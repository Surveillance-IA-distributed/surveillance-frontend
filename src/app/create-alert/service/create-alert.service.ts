import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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
