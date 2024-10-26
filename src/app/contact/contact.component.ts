import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  showModal: boolean = false;
  validationMessage: string = '';
  messages: { name: string; email: string; subject: string; message: string }[] = [];

  onSubmit() {
    if (this.validateForm()) {
      const newMessage = { name: this.name, email: this.email, subject: this.subject, message: this.message };
      this.messages.push(newMessage);
      console.log('Form submitted:', newMessage);

      // Limit to 5 messages
      if (this.messages.length > 5) {
        this.messages.shift(); // Remove the oldest message
      }

      this.showModal = true;  // Show modal on valid form submit
      this.resetForm();
    } else {
      console.log('Form submission failed:', this.validationMessage);
    }
  }

  validateForm(): boolean {
    // Reset validation message
    this.validationMessage = '';

    // Validate name
    if (!this.name) {
      this.validationMessage += 'Name is required. ';
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.email || !emailPattern.test(this.email)) {
      this.validationMessage += 'Valid email is required. ';
    }

    // Validate subject
    if (!this.subject) {
      this.validationMessage += 'Subject is required. ';
    }

    // Validate message
    if (!this.message) {
      this.validationMessage += 'Message is required. ';
    }

    return !this.validationMessage;  // Return true if no validation messages
  }

  closeModal() {
    this.showModal = false; // Close modal
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}
