import { Component } from '@angular/core';

interface Notification {
  type: string;
  message: string;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications: Notification[] = [
    { type: 'info', message: 'This is an info message.' },
    { type: 'success', message: 'This is a success message.' },
    { type: 'warning', message: 'This is a warning message.' },
    { type: 'error', message: 'This is an error message.' },
    { type: 'info', message: 'Another info message.' },
    { type: 'success', message: 'Another success message.' },
    // Add more notifications as needed
  ];

  getIcon(type: string): string {
    switch (type) {
      case 'info':
        return 'icon-info';  // Replace with your actual icon class
      case 'success':
        return 'icon-success';  // Replace with your actual icon class
      case 'warning':
        return 'icon-warning';  // Replace with your actual icon class
      case 'error':
        return 'icon-error';  // Replace with your actual icon class
      default:
        return 'icon-default';  // Replace with your actual icon class
    }
  }
}
