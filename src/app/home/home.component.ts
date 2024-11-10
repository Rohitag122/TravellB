import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Constructor
  constructor() { }

  // Method for handling search form submission
  onSearchSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const bookingType = (form.querySelector('#searchType') as HTMLSelectElement).value;
    const destination = (form.querySelector('input[name="destination"]') as HTMLInputElement).value;
    const date = (form.querySelector('input[name="date"]') as HTMLInputElement).value;
    const guests = (form.querySelector('input[name="guests"]') as HTMLInputElement).value;

    console.log('Booking Type:', bookingType);
    console.log('Destination:', destination);
    console.log('Date:', date);
    console.log('Number of Guests:', guests);
    
    // Here, you could handle search logic or navigate to search results.
    alert(`Searching for ${bookingType} in ${destination} on ${date} for ${guests} guest(s).`);
  }
}
