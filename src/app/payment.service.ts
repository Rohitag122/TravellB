// payment.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  processPayment(train: any): void {
    // Simulate the payment processing
    console.log(`Processing payment for booking ${train.title}...`);
    // You can implement the actual payment processing logic here, such as calling an API.
    alert(`Payment processed for ${train.title}`);
  }
}
