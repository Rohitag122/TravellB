import { Component } from '@angular/core';

interface HotelBooking {
  hotel: string;
  roomType: string;
  checkin: Date;
  checkout: Date;
}

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent {
  availableHotels: string[] = ['Hotel Paradise', 'Grand Royal', 'Seaside Resort'];
  booking: HotelBooking = {
    hotel: '',
    roomType: 'single',
    checkin: new Date(),
    checkout: new Date()
  };

  submitHotelBooking() {
    console.log('Hotel Booking Details:', this.booking);
    // Proceed to payment or save booking details
  }
}
