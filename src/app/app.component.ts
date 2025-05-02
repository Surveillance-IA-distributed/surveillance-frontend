import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { TopbarComponent } from './nav/topbar/topbar.component';
import { AlertSocketService } from './services/alert-socket.service';
import { NotificationsComponent } from './share/components/notifications/notifications.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarComponent,
    TopbarComponent,
    NotificationsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  isSideBarOpen = true;
  lastAlert: any = null;
  
  constructor(
    private alertSocketService: AlertSocketService
  ) {}
  
  // ngOnInit() {
  //   console.log('PADRE: ngOnInit()');
  //   this.alertSocketService.onAlert().subscribe((alert) => {
  //     this.lastAlert = alert;
      
  //     // Ocultar la notificación después de 5 segundos
  //     setTimeout(() => this.lastAlert = null, 5000);
  //   });
  // }
  
  toggleSidebar( isOpen: boolean) {
    console.log('PADRE: toggleSidebar() ->', isOpen);
    this.isSideBarOpen = isOpen;
  }
}
