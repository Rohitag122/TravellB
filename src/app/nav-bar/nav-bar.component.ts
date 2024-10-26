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
}
