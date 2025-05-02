import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  template: `
    <ng-container *ngIf="lastAlert">
      <app-notification [alert]="lastAlert"></app-notification>
    </ng-container>
  `,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {

}
