import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  menuOpen = false; // Controls menu toggle
  searchTerm = '';  // Bound to search input
  description = ''; // Placeholder for dynamic description text

  // Toggle the navbar for mobile view
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // This method would be called when the user types in the search bar
  onInputChange() {
    // Implement logic to change description or other features based on input
    if (this.searchTerm.trim()) {
      this.description = `Searching for: ${this.searchTerm}`;
    } else {
      this.description = '';
    }
  }

  // Method that handles search functionality
  onSearch() {
    if (this.searchTerm.trim()) {
      alert(`Searching for ${this.searchTerm}`);
      // Implement actual search logic here
    } else {
      alert('Please enter a search term.');
    }
  }
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
