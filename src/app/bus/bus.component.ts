import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';
import { BokingService } from '../boking.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent {
  buses: { title: string; details: string; image: string }[] = [];
  bookingDetails: any = null;

  // Sample popular bus routes data
  popularBuses = [
    {
      title: 'Bus B123',
      details: 'Popular route from New York to Boston.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Blue_&_Yellow_Bus.jpg'
    },
    {
      title: 'Bus B456',
      details: 'Popular route from Los Angeles to San Francisco.',
      image: 'https://images.unsplash.com/photo-1604920600456-8f1946509b71'
    },
    {
      title: 'Bus B789',
      details: 'Popular route from Chicago to Detroit.',
      image: 'https://images.unsplash.com/photo-1588251244215-c0c6f20ac6c3'
    }
  ];

  // Variable to track if the trip is round trip
  isRoundTrip = false;

  constructor(private bookingService: BokingService, private paymentService: PaymentService) { }

  // Call the service to get bus details
  onBookingSelection() {
    this.bookingDetails = this.bookingService.getBookingDetails('bus');
    console.log('Booking Details:', this.bookingDetails);
    alert('Bus details loaded successfully');
  }

  // Call the service to process payment
  processPayment() {
    if (this.bookingDetails) {
      console.log('Processing payment for the booking:', this.bookingDetails);
      this.paymentService.processPayment(this.bookingDetails);
      alert('Payment is being processed...');
    } else {
      console.error('No booking details found!');
      alert('Please select a bus before proceeding to payment.');
    }
  }

  // Handle trip type change (Round trip or One way)
  onTripTypeChange(event: any) {
    this.isRoundTrip = event.target.value === 'round-trip';
  }

  // Handle form submission and search for buses
  onSubmit(form: any) {
    const source = form.value.source;
    const destination = form.value.destination;
    const date = form.value.date;
    const travelClass = form.value.travelClass;
    
    const returnDate = this.isRoundTrip ? form.value.returnDate : null;

    // Log the search criteria
    console.log('Search Criteria:', {
      source,
      destination,
      date,
      returnDate,
      travelClass,
      tripType: this.isRoundTrip ? 'Round Trip' : 'One Way'
    });

    // Perform bus search with provided criteria
    this.buses = this.searchBuses(source, destination, date, returnDate, travelClass);
  }

  searchBuses(source: string, destination: string, date: string, returnDate: string | null, travelClass: string): { title: string; details: string; image: string }[] {
    // Dummy implementation of search logic
    return [
      {
        title: `Bus C123`,
        details: `From ${source} to ${destination} on ${date}, Class: ${travelClass}` + (this.isRoundTrip ? `, Return on ${returnDate}` : ''),
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Blue_&_Yellow_Bus.jpg'
      },
      {
        title: `Bus D456`,
        details: `From ${source} to ${destination} on ${date}, Class: ${travelClass}` + (this.isRoundTrip ? `, Return on ${returnDate}` : ''),
        image: 'https://images.unsplash.com/photo-1604920600456-8f1946509b71'
      }
    ];
  }

  // Function to handle the "Book Now" button click
  onBookNow(bus: any) {
    console.log('Bus booked:', bus);
    alert(`Booking confirmed for ${bus.title}!`);
    // Call the payment service to process payment for the selected bus
    this.paymentService.processPayment(bus);
  }
}
