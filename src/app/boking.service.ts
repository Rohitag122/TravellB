// booking.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BokingService {

  // Dummy data for different booking types (Train, Hotel, Bus, Flight)
  trainDetails = {
    title: 'Train D123',
    details: 'From New York to Washington D.C. on 12th Dec, Economy Class',
    price: '$100'
  };

  hotelDetails = {
    title: 'Hotel XYZ',
    details: 'Luxury hotel in New York, 2 nights stay, Deluxe Room',
    price: '$500'
  };

  busDetails = {
    title: 'Bus B456',
    details: 'From Chicago to New Orleans, 10th Dec, VIP Class',
    price: '$60'
  };

  flightDetails = {
    title: 'Flight F789',
    details: 'From Los Angeles to San Francisco, 15th Dec, Business Class',
    price: '$300'
  };

  // Method to get booking details based on type
  getBookingDetails(bookingType: string) {
    switch (bookingType) {
      case 'train':
        return this.trainDetails;
      case 'hotel':
        return this.hotelDetails;
      case 'bus':
        return this.busDetails;
      case 'flight':
        return this.flightDetails;
      default:
        return null;
    }
  }

  // Dummy method to simulate payment processing
  processPayment(bookingDetails: any) {
    alert(`Payment processed for ${bookingDetails?.title} - ${bookingDetails?.price}`);
  }
}
