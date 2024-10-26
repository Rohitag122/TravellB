import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Booking {
  id: number;
  type: 'hotel' | 'bus' | 'train' | 'flight';
  name: string;
  date: string;
  status: 'completed' | 'upcoming' | 'canceled';
}

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private bookings: Booking[] = [
    { id: 1, type: 'flight', name: 'Flight to New York', date: '2024-11-15', status: 'upcoming' },
    { id: 2, type: 'hotel', name: 'Hotel Stay in Paris', date: '2024-10-25', status: 'completed' },
    { id: 3, type: 'train', name: 'Train to London', date: '2024-11-05', status: 'upcoming' },
    { id: 4, type: 'bus', name: 'Bus to Berlin', date: '2024-10-20', status: 'canceled' },
  ];

  private bookingsSubject = new BehaviorSubject<Booking[]>(this.bookings);
  bookings$ = this.bookingsSubject.asObservable();

  getBookings() {
    return this.bookings$;
  }

  cancelBooking(id: number) {
    const bookingIndex = this.bookings.findIndex((b) => b.id === id);
    if (bookingIndex !== -1) {
      this.bookings[bookingIndex].status = 'canceled';
      this.bookingsSubject.next(this.bookings);
    }
  }
}
