import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  name: string = 'John Doe';
  paymentMethod: string = '';
  
  // Example booking details (this could come from a service or another component)
  bookingDetails = {
    bookingType: 'Hotel', // Dynamically change based on the booking type (Hotel, Flight, Train, Bus)
    hotelName: 'Grand Palace',
    checkIn: '2024-12-01',
    checkOut: '2024-12-10',
    flightNumber: 'AI202',
    departureDate: '2024-12-05',
    departureTime: '10:00 AM',
    trainNumber: '1234',
    busRoute: 'Route 22',
    passengerName: '',
    passengerContact: '',
    totalAmount: 5000, // Base price
    discount: 500, // Discount
    convenienceFee: 150, // Convenience fee
    tax: 500, // Tax
    finalAmount: 0 // Calculated final amount
  };

  // Method to calculate the final amount
  calculateFinalAmount() {
    const { totalAmount, discount, convenienceFee, tax } = this.bookingDetails;
    this.bookingDetails.finalAmount = totalAmount - discount + convenienceFee + tax;
  }

  // Handle form submission (e.g., payment)
  onSubmit() {
    if (!this.paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    if (!this.bookingDetails.passengerName || !this.bookingDetails.passengerContact) {
      alert('Please fill in all passenger details');
      return;
    }

    console.log('Payment submitted');
    // Add further logic to process the payment
  }

  // Handle payment method change
  onPaymentMethodChange() {
    console.log('Payment method changed to:', this.paymentMethod);
  }

  // Simulate redirection to different payment platforms
  redirectToNetBanking() {
    window.location.href = 'https://netbanking.hdfcbank.com/netbanking/';
  }

  redirectToPaytm() {
    window.location.href = 'https://paytm.com/online-payments';
  }

  redirectToPhonePay() {
    window.location.href = 'https://www.phonepe.com';
  }

  // Call the calculateFinalAmount method when the component initializes
  ngOnInit() {
    this.calculateFinalAmount();
  }
}
