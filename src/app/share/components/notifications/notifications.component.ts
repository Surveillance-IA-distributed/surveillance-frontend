import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
  template: `
  <div class="fixed top-4 right-4 z-50 max-w-sm w-full bg-white shadow-lg border-l-4 border-red-500 rounded p-4 animate-slide-in">
    <p class="text-sm font-semibold text-red-800">🔔 {{ alert?.alert }}</p>
    <p class="text-xs text-gray-700 mt-1 break-words">
      {{ alert?.sql }}
    </p>
  </div>
  `,
  styles: [`
    @keyframes slide-in {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    .animate-slide-in {
      animation: slide-in 0.3s ease-out;
    }
  `]
})
export class NotificationsComponent {
  @Input() alert: { alert: string; sql: string; } | undefined;
}
