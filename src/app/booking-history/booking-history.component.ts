import { Component } from '@angular/core';
import { BookingService, Passenger, Booking } from '../booking.service';
import { Router } from '@angular/router'; // Importing Router

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
  cancellationReasons: string[] = [
    'Change of Plans',
    'Family Emergency',
    'Health Issues',
    'Other',
  ];

  constructor(private bookingService: BookingService, private router: Router) {}

  // Method to fetch booking data based on selected tab (upcoming, cancelled, completed)
  get selectedTabData(): Booking[] {
    switch (this.selectedTab) {
      case 'upcoming':
        return this.bookingService.getUpcomingBookings();
      case 'cancelled':
        return this.bookingService.getCancelledBookings();
      case 'completed':
        return this.bookingService.getCompletedBookings();
      default:
        return [];
    }
  }

  // Select tab for navigation (upcoming, cancelled, completed)
  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  // Open the cancel modal when clicking cancel for a booking
  openCancelModal(event: Event, booking: Booking): void {
    event.stopPropagation(); // Prevent the event from propagating
    this.showCancelModal = true;
    this.selectedBooking = booking;
    this.selectedReasons = []; // Reset selected reasons when opening modal
  }

  // Close the cancel modal and reset data
  closeCancelModal(): void {
    this.showCancelModal = false;
    this.selectedBooking = null;
    this.selectedReasons = [];
  }

  // Confirm cancellation and handle cancellation logic
  confirmCancellation(): void {
    if (this.selectedBooking) {
      const selectedPassengerIds = this.selectedBooking.passengers
        .filter((passenger: Passenger) => passenger.isSelected)
        .map((passenger: Passenger) => passenger.id);

      console.log('Cancellation confirmed for booking:', this.selectedBooking);
      console.log('Passengers to cancel:', selectedPassengerIds);
      console.log('Cancellation reasons:', this.selectedReasons);

      // Call the service method to handle cancellation
      this.bookingService.cancelBooking(this.selectedBooking, selectedPassengerIds, this.selectedReasons);
      this.bookingService.moveToCancelled(this.selectedBooking);
      this.closeCancelModal();

      // Navigate to cancellation summary page or other page
      this.router.navigate(['/cancellation-summary']);
    }
  }

  // Open the booking details page for a selected booking
  openBookingDetails(booking: Booking): void {
    alert(`Opening booking details for: ${booking.title}`);
    console.log('Booking details:', booking);
  }

  // Navigate to booking page for making new bookings
  navigateToBooking(): void {
    alert('Navigating to booking page...');
  }

  // Toggle the reason for cancellation (add/remove from selectedReasons array)
  toggleReason(reason: string): void {
    const index = this.selectedReasons.indexOf(reason);
    if (index === -1) {
      // Reason not selected, add it
      this.selectedReasons.push(reason);
    } else {
      // Reason already selected, remove it
      this.selectedReasons.splice(index, 1);
    }
  }
}
