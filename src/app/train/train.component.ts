import { Component } from '@angular/core';

import { PaymentService } from '../payment.service';
import { BokingService } from '../boking.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent {
  trains: { title: string; details: string; image: string }[] = [];
  bookingDetails: any = null;

  // Sample popular train routes data
  popularTrains = [
    {
      title: 'Train A123',
      details: 'Popular route from New York to Washington D.C.',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYWluc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Train B456',
      details: 'Popular route from Chicago to New Orleans',
      image: 'https://c4.wallpaperflare.com/wallpaper/742/301/266/train-railway-steam-locomotive-wallpaper-preview.jpg'
    },
    {
      title: 'Train C789',
      details: 'Popular route from San Francisco to Los Angeles',
      image: 'https://i.pinimg.com/originals/83/f1/ba/83f1ba11e1f3dfe7a96a4761707dbf3b.jpg'
    }
  ];

  // Variable to track if the trip is round trip
  isRoundTrip = false;

  constructor(private bookingService: BokingService, private paymentService: PaymentService) { }

  // Call the service to get train details
  onBookingSelection() {
    this.bookingDetails = this.bookingService.getBookingDetails('train');
    console.log('Booking Details:', this.bookingDetails);
    alert('Train details loaded successfully');
  }

  // Call the service to process payment
  processPayment() {
    if (this.bookingDetails) {
      console.log('Processing payment for the booking:', this.bookingDetails);
      this.paymentService.processPayment(this.bookingDetails);
      alert('Payment is being processed...');
    } else {
      console.error('No booking details found!');
      alert('Please select a train before proceeding to payment.');
    }
  }

  // Handle trip type change (Round trip or One way)
  onTripTypeChange(event: any) {
    this.isRoundTrip = event.target.value === 'round-trip';
  }

  // Handle form submission and search for trains
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

    // Perform train search with provided criteria
    this.trains = this.searchTrains(source, destination, date, returnDate, travelClass);
  }

  searchTrains(source: string, destination: string, date: string, returnDate: string | null, travelClass: string): { title: string; details: string; image: string }[] {
    // Dummy implementation of search logic
    return [
      {
        title: `Train D123`,
        details: `From ${source} to ${destination} on ${date}, Class: ${travelClass}` + (this.isRoundTrip ? `, Return on ${returnDate}` : ''),
        image: 'https://c4.wallpaperflare.com/wallpaper/444/432/860/train-steam-train-locomotive-wallpaper-preview.jpg'
      },
      {
        title: `Train E456`,
        details: `From ${source} to ${destination} on ${date}, Class: ${travelClass}` + (this.isRoundTrip ? `, Return on ${returnDate}` : ''),
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6l5qCq1b1xNYxHd1HYyKJvEnJg6O9dq_UQ&s'
      }
    ];
  }

  // Function to handle the "Book Now" button click
  onBookNow(train: any) {
    console.log('Train booked:', train);
    alert(`Booking confirmed for ${train.title}!`);
    // Call the payment service to process payment for the selected train
    this.paymentService.processPayment(train);
  }
}
