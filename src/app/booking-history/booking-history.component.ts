import { Component } from '@angular/core';

interface Booking {
  title: string;
  details: string;
  date: string;
  location: string;
  price: number;
  discount?: number;  // Optional field for discount
  offer?: string;     // Optional field for special offers
  passengers: { id: number; name: string; isSelected?: boolean }[];
}

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent {



 
    selectedTab: string = 'upcoming';
    showCancelModal: boolean = false;
    selectedBooking: Booking | null = null;
    selectedReasons: string[] = [];
    cancellationReasons: string[] = ['Change of plans', 'Health issues', 'Other'];
  
    upcomingBookings: Booking[] = [
      {
        title: 'Hotel Stay at Paradise Resort',
        details: 'A luxurious stay with sea view and breakfast included.',
        date: '2024-12-01',
        location: 'Maldives',
        price: 1500,
        discount: 20,
        offer: 'Get a complimentary dinner buffet.',
        passengers: [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Smith' },
        ]
      },
      {
        title: 'Flight to New York',
        details: 'Non-stop flight, economy class.',
        date: '2024-11-15',
        location: 'New York, USA',
        price: 800,
        passengers: [
          { id: 3, name: 'Michael Brown' }
        ]
      }
    ];
  
    cancelledBookings: Booking[] = [];
    completedBookings: Booking[] = [
      {
        title: 'Train to Paris',
        details: 'First-class ticket with meals included.',
        date: '2024-10-10',
        location: 'Paris, France',
        price: 300,
        passengers: [
          { id: 4, name: 'Anna Johnson' }
        ]
      }
    ];
  
    get selectedTabData(): Booking[] {
      if (this.selectedTab === 'upcoming') {
        return this.upcomingBookings;
      } else if (this.selectedTab === 'cancelled') {
        return this.cancelledBookings;
      } else {
        return this.completedBookings;
      }
    }
  
    selectTab(tab: string): void {
      this.selectedTab = tab;
    }
  
    openCancelModal(event: Event, booking: Booking): void {
      event.stopPropagation();
      this.showCancelModal = true;
      this.selectedBooking = booking;
    }
  
    closeCancelModal(): void {
      this.showCancelModal = false;
      this.selectedBooking = null;
    }
  
    confirmCancellation(): void {
      if (this.selectedBooking) {
        // Remove booking from upcoming and add to cancelled
        this.upcomingBookings = this.upcomingBookings.filter(b => b !== this.selectedBooking);
        this.cancelledBookings.push(this.selectedBooking);
        console.log('Cancellation confirmed:', this.selectedBooking);
      }
      this.closeCancelModal();
    }
  
    openBookingDetails(booking: Booking): void {
      alert(`Opening booking details: ${booking.title}`);
      console.log('Booking details:', booking);
    }
  
    navigateToBooking(): void {
      alert('Navigating to booking page...');
    }
  }
  