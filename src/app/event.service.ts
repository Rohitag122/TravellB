import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Event {
  id: number;
  name: string;
  date: string;
  availableTickets: number;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [
    { id: 1, name: 'Concert', date: '2024-10-20', availableTickets: 50 },
    { id: 2, name: 'Theater', date: '2024-11-15', availableTickets: 30 },
  ];

  private bookingData = new BehaviorSubject<any>(null);
  bookingData$ = this.bookingData.asObservable();

  getEvents() {
    return this.events;
  }

  bookTickets(eventId: number, tickets: number) {
    const event = this.events.find(e => e.id === eventId);
    if (event && tickets <= event.availableTickets) {
      event.availableTickets -= tickets;
      this.bookingData.next({ event, tickets });
      return true;
    }
    return false;
  }
}
