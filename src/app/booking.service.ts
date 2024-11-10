import { Injectable } from '@angular/core';

// Define the Passenger interface here if not imported
export interface Passenger {
  id: number;
  name: string;
  isSelected?: boolean; // Optional property for selection
}

export interface Booking {
  title: string;
  details: string;
  date: string;
  location: string;
  price: number;
  offer?: string;
  passengers: Passenger[]; // Array of passengers associated with the booking
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private upcomingBookings: Booking[] = [
    {
      title: 'Flight to Paris',
      details: 'Flight from New York to Paris',
      date: '2024-11-10',
      location: 'New York Airport',
      price: 500,
      offer: '10% off',
      passengers: [
        { id: 1, name: 'Alice', isSelected: false },
        { id: 2, name: 'Bob', isSelected: false }
      ]
    },
    {
      title: 'Hotel Stay in London',
      details: '5-star hotel in London',
      date: '2024-11-15',
      location: 'London',
      price: 1200,
      passengers: [
        { id: 3, name: 'Charlie', isSelected: false },
        { id: 4, name: 'Diana', isSelected: false }
      ]
    }
  ];

  private cancelledBookings: Booking[] = [
    {
      title: 'Flight to Tokyo',
      details: 'Flight from Los Angeles to Tokyo',
      date: '2024-10-20',
      location: 'Los Angeles Airport',
      price: 600,
      passengers: [
        { id: 5, name: 'Edward', isSelected: false },
        { id: 6, name: 'Fiona', isSelected: false }
      ]
    }
  ];

  private completedBookings: Booking[] = [
    {
      title: 'Cruise to Bahamas',
      details: '7-day cruise from Miami',
      date: '2024-09-05',
      location: 'Miami',
      price: 1500,
      passengers: [
        { id: 7, name: 'George', isSelected: false }
      ]
    }
  ];

  getUpcomingBookings(): Booking[] {
    return this.upcomingBookings;
  }

  getCancelledBookings(): Booking[] {
    return this.cancelledBookings;
  }

  getCompletedBookings(): Booking[] {
    return this.completedBookings;
  }

  cancelBooking(booking: Booking, selectedPassengerIds: number[], selectedReasons: string[]): void {
    console.log('Booking cancelled:', booking.title);
    console.log('Cancelled Passengers:', selectedPassengerIds);
    console.log('Reasons:', selectedReasons);
    // Implement cancellation logic
  }

  moveToCancelled(booking: Booking): void {
    const index = this.upcomingBookings.indexOf(booking);
    if (index > -1) {
      this.upcomingBookings.splice(index, 1);
      this.cancelledBookings.push(booking);
    }
  }
}
