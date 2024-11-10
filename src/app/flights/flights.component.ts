import { Component } from '@angular/core';

import { PaymentService } from '../payment.service';
import { BokingService } from '../boking.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {
  flights: { title: string; details: string; image: string }[] = [];
  bookingDetails: any = null;

  // Sample popular flight routes data
  popularFlights = [
    {
      title: 'Flight F123',
      details: 'Popular route from New York to London.',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsaWdodCUyMHJvdXRlfDB8fDB8fHww%3D%3D'
    },
    {
      title: 'Flight G456',
      details: 'Popular route from Los Angeles to Paris.',
      image: 'https://www.publicdomainpictures.net/pictures/30000/velka/aircraft-1568242755bNQ.jpg'
    },
    {
      title: 'Flight H789',
      details: 'Popular route from San Francisco to Tokyo.',
      image: 'https://images.unsplash.com/photo-1578994950299-85995f1b79d4'
    }
  ];

  // Variable to track if the trip is round trip
  isRoundTrip = false;

  constructor(private bookingService: BokingService, private paymentService: PaymentService) { }

  // Call the service to get flight details
  onBookingSelection() {
    this.bookingDetails = this.bookingService.getBookingDetails('flight');
    console.log('Booking Details:', this.bookingDetails);
    alert('Flight details loaded successfully');
  }

  // Call the service to process payment
  processPayment() {
    if (this.bookingDetails) {
      console.log('Processing payment for the booking:', this.bookingDetails);
      this.paymentService.processPayment(this.bookingDetails);
      alert('Payment is being processed...');
    } else {
      console.error('No booking details found!');
      alert('Please select a flight before proceeding to payment.');
    }
  }

  // Handle trip type change (Round trip or One way)
  onTripTypeChange(event: any) {
    this.isRoundTrip = event.target.value === 'round-trip';
  }

  // Handle form submission and search for flights
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

    // Perform flight search with provided criteria
    this.flights = this.searchFlights(source, destination, date, returnDate, travelClass);
  }

  searchFlights(source: string, destination: string, date: string, returnDate: string | null, travelClass: string): { title: string; details: string; image: string }[] {
    // Dummy implementation of search logic
    return [
      {
        title: `Flight I123`,
        details: `From ${source} to ${destination} on ${date}, Class: ${travelClass}` + (this.isRoundTrip ? `, Return on ${returnDate}` : ''),
        image: 'https://images.unsplash.com/photo-1578994950299-85995f1b79d4'
      },
      {
        title: `Flight J456`,
        details: `From ${source} to ${destination} on ${date}, Class: ${travelClass}` + (this.isRoundTrip ? `, Return on ${returnDate}` : ''),
        image: 'https://www.publicdomainpictures.net/pictures/30000/velka/aircraft-1568242755bNQ.jpg'
      }
    ];
  }

  // Function to handle the "Book Now" button click
  onBookNow(flight: any) {
    console.log('Flight booked:', flight);
    alert(`Booking confirmed for ${flight.title}!`);
    // Call the payment service to process payment for the selected flight
    this.paymentService.processPayment(flight);
  }
}
