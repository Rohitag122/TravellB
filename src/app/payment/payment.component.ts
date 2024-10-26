import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  name: string = '';
  checkIn: string = '';
  checkOut: string = '';
  paymentMethod: string = '';

  @Output() paymentSubmitted = new EventEmitter<any>();

  onSubmit() {
    const paymentDetails = {
      name: this.name,
      checkIn: this.checkIn,
      checkOut: this.checkOut,
      paymentMethod: this.paymentMethod,
    };
    this.paymentSubmitted.emit(paymentDetails);
  }
}