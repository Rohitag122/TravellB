import { Component } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {
  flights = [
    {
      name: 'Air India',
      destination: 'New York',
      price: '$500',
      class: 'Economy',
      images: ['https://media.cnn.com/api/v1/images/stellar/prod/230815100214-01-air-india-new-plane.jpg?c=16x9&q=h_833,w_1480,c_fill'], 
      details: 'Non-stop flight from Delhi to New York with complimentary meals.',
      showDetails: false
    },
    
    {
      name: 'British Airways',
      destination: 'London',
      price: '$700',
      class: 'Business',
      images: ['https://c.files.bbci.co.uk/7be6/live/980d3e90-55ae-11ef-8856-bff9ab49b58f.jpg'],
      details: 'Luxurious flight with business class seating and premium services.',
      showDetails: false
    },
    {
      name: 'Emirates',
      destination: 'Dubai',
      price: '$650',
      class: 'First Class',
      images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/cd/51/c3/emirates.jpg?w=1200&h=-1&s=1'],
      details: 'Experience the ultimate in luxury with Emirates First Class cabin to Dubai.',
      showDetails: false
    },
    {
      name: 'Lufthansa',
      destination: 'Frankfurt',
      price: '$550',
      class: 'Economy',
      images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/cd/51/f8/lufthansa.jpg?w=1200&h=-1&s=1'],
      details: 'Enjoy a comfortable economy class flight from Mumbai to Frankfurt.',
      showDetails: false
    },
    {
      name: 'Qatar Airways',
      destination: 'Doha',
      price: '$600',
      class: 'Business',
      images: ['https://africabusinesscommunities.com/assets/components/phpthumbof/cache/Qatar_Airways_Africa_Business_Communities.5d1980509d902384ff1c11754ca09153.jpg'],
      details: 'Fly business class with Qatar Airways and enjoy 5-star service to Doha.',
      showDetails: false
    },
    {
      name: 'Singapore Airlines',
      destination: 'Singapore',
      price: '$750',
      class: 'First Class',
      images: ['https://martinroll.com/wp-content/uploads/Singapore-Airlines-%E2%80%93-An-Excellent-Iconic-Asian-Brand-Martin-Roll.jpg'],
      details: 'First-class service and luxury amenities on your flight to Singapore.',
      showDetails: false
    },
    {
      name: 'Etihad Airways',
      destination: 'Abu Dhabi',
      price: '$500',
      class: 'Economy',
      images: ['https://content.r9cdn.net/rimg/dimg/91/9e/e3e7b5e1-al-EY-55c4cb79.jpg?width=1366&height=768&xhint=341&yhint=168&crop=true'],
      details: 'Fly to Abu Dhabi with Etihad Airways in a comfortable economy seat.',
      showDetails: false
    },
    {
      name: 'Delta Airlines',
      destination: 'Los Angeles',
      price: '$900',
      class: 'Business',
      images: ['https://www.theforage.com/blog/wp-content/uploads/2023/03/working-at-delta-air-lines-1024x683.jpg'],
      details: 'Non-stop business class flight from New York to Los Angeles.',
      showDetails: false
    },
    {
      name: 'Cathay Pacific',
      destination: 'Hong Kong',
      price: '$850',
      class: 'First Class',
      images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/cd/51/99/cathay-pacific.jpg?w=1200&h=-1&s=1'],
      details: 'Enjoy Cathay Pacific’s first-class service on your flight to Hong Kong.',
      showDetails: false
    },
    {
      name: 'Turkish Airlines',
      destination: 'Istanbul',
      price: '$550',
      class: 'Economy',
      images: ['https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2024/02/turkish-airlines-airbus-a350-900.jpg'],
      details: 'Economy class flight from Istanbul with full in-flight entertainment.',
      showDetails: false
    }
  ];

  activeIndex: number[] = [];
  showMore = false;
  showModal = false;
  selectedFlight: any;
  name = '';
  departureDate: any;
  returnDate: any;
  paymentMethod = '';

  toggleDetails(index: number) {
    this.flights[index].showDetails = !this.flights[index].showDetails;
  }

  prevImage(index: number) {
    if (this.activeIndex[index] > 0) {
      this.activeIndex[index]--;
    }
  }

  nextImage(index: number) {
    if (this.activeIndex[index] < this.flights[index].images.length - 1) {
      this.activeIndex[index]++;
    }
  }

  loadMore() {
    this.showMore = true;
  }

  loadLess() {
    this.showMore = false;
  }

  onBookNow(flight: any) {
    this.selectedFlight = flight;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    alert(`Booking confirmed for ${this.name} on flight to ${this.selectedFlight.destination}`);
    this.closeModal();
  }
}
