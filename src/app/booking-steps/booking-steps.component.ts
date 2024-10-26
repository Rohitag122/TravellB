import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-steps',
  templateUrl: './booking-steps.component.html',
  styleUrls: ['./booking-steps.component.css']
})
export class BookingStepsComponent {
  currentStep: number = 1;
  selectedType: string = '';

  steps: string[] = [
    'Select Booking Type',
    'Enter Booking Details',
    'Payment',
    'Confirmation'
  ];

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
      console.log(`Moved to step: ${this.steps[this.currentStep - 1]}`);
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      console.log(`Moved to step: ${this.steps[this.currentStep - 1]}`);
    }
  }

  setBookingType(type: string) {
    this.selectedType = type;
    this.nextStep();
    console.log(`Selected booking type: ${type}`);
  }

  isFinalStep(): boolean {
    return this.currentStep === this.steps.length;
  }
}
