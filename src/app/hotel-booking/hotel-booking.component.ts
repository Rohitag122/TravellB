import { Component, OnInit } from '@angular/core';
import { HotelBookingService } from '../hotel-booking.service';


@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent implements OnInit {
  availableHotels: string[] = [];
  booking = {
    hotel: '',
    roomType: 'single',
    checkin: '',
    checkout: '',
    guests: 1
  };

  constructor(private hotelBookingService: HotelBookingService) {}

  ngOnInit() {
    this.fetchAvailableHotels();
  }

  fetchAvailableHotels() {
    this.hotelBookingService.getHotels().subscribe(
      (hotels: string[]) => {
        this.availableHotels = hotels;
      },
      (error) => {
        console.error('Failed to fetch hotels:', error);
      }
    );
  }

  submitHotelBooking() {
    this.hotelBookingService.bookHotel(this.booking).subscribe(
      (response) => {
        alert('Booking successful!');
      },
      (error) => {
        console.error('Booking failed:', error);
      }
    );
  }
}
