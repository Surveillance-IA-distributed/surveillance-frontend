import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.example';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlertSocketService {

  private socket: Socket;
  private apiAurl = environment.apiUrl;

  constructor() {
    this.socket = io(this.apiAurl)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onAlert(): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on('alert-detected', (data) => {
        subscriber.next(data);
      });
    });
  }
}
