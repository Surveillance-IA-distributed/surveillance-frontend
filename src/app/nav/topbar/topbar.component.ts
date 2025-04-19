import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  userEmail = '';
  isSideBarOpen = true;
  @Output() isSideBarOpenChange = new EventEmitter<boolean>();

  constructor(
    private router: Router,
  ) {}

  teamMembers = [
    {
      name: 'Brigham Caceres',
      githubUrl: 'https://github.com/Brigham-CG',
      avatar: 'brigham.webp', 
    },
    {
      name: 'Angel Loayza',
      githubUrl: 'https://github.com/angel452',
      avatar: 'angel.jpg',
    },
    {
      name: 'Hugo Manchego',
      githubUrl: 'https://github.com/Gabriel-Manchego',
      avatar: '/hugo.jpg',
    },
    {
      name: 'Harold Villanueva',
      githubUrl: 'https://github.com/HarryLexvb',
      avatar: 'harold.jpg',
    },
  ];
  
  toggleSidebar() {
    console.log('HIJO: toggleSidebar()');
    this.isSideBarOpen = !this.isSideBarOpen;
    this.isSideBarOpenChange.emit(this.isSideBarOpen);
  }
}
