import { Component, Input } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-booking-form',
  template: `
    <form (ngSubmit)="bookTickets()" #bookingForm="ngForm">
      <label for="tickets">Number of Tickets:</label>
      <input type="number" id="tickets" [(ngModel)]="ticketCount" name="tickets" min="1" [max]="maxTickets" required>
      <button type="submit">Book Tickets</button>
      <div *ngIf="errorMessage">{{ errorMessage }}</div>
    </form>
  `
})
export class BookingFormComponent {
  @Input() eventId!: number;
  ticketCount: number = 1;
  errorMessage: string | null = null;

  constructor(private eventService: EventService) {}

  get maxTickets() {
    const event = this.eventService.getEvents().find(e => e.id === this.eventId);
    return event ? event.availableTickets : 0;
  }

  bookTickets() {
    const success = this.eventService.bookTickets(this.eventId, this.ticketCount);
    if (success) {
      this.errorMessage = null;
      // Navigate to summary page or handle success
    } else {
      this.errorMessage = 'Not enough tickets available.';
    }
  }
}
