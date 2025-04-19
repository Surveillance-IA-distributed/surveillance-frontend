import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { TopbarComponent } from './nav/topbar/topbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarComponent,
    TopbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSideBarOpen = true;

  toggleSidebar( isOpen: boolean) {
    console.log('PADRE: toggleSidebar() ->', isOpen);
    this.isSideBarOpen = isOpen;
  }
}
