import { Component } from '@angular/core';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrl: './train.component.css'
})
export class TrainComponent {

  trains = [
    {
      name: 'Express Train',
      price: 1500,
      departureTime: '09:00 AM',
      arrivalTime: '12:00 PM',
      duration: '3h',
      amenities: ['AC', 'Wi-Fi', 'Food Service'],
      details: 'Fast and comfortable express train with premium services.',
      images: ['https://assets.cntraveller.in/photos/6620b846437714505a7ebe31/1:1/w_3712,h_3712,c_limit/2WXHFE5.jpg', 'assets/images/train2.jpg'],
      showDetails: false,
    },
    {
      name: 'Intercity Train',
      price: 800,
      departureTime: '01:00 PM',
      arrivalTime: '03:30 PM',
      duration: '2.5h',
      amenities: ['Wi-Fi', 'Food Service'],
      details: 'Convenient intercity train with good amenities.',
      images: ['https://inter-city.co.uk/wp-content/uploads/2021/12/intercity-train-class90@2x.jpg', 'assets/images/train4.jpg'],
      showDetails: false,
    },
    {
      name: 'Local Train',
      price: 300,
      departureTime: '07:30 AM',
      arrivalTime: '09:00 AM',
      duration: '1.5h',
      amenities: ['General Seating'],
      details: 'Economical option for short distances.',
      images: ['https://upload.wikimedia.org/wikipedia/commons/b/b4/Western-Railway-Medha-EMU.jpg', 'assets/images/train6.jpg'],
      showDetails: false,
    },
    {
      name: 'Luxury Train',
      price: 5000,
      departureTime: '05:00 PM',
      arrivalTime: '08:00 PM',
      duration: '3h',
      amenities: ['AC', 'Catering', 'Private Restrooms'],
      details: 'A luxury travel experience with top-notch services.',
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzU0yK9kQlLg5tnqUxntsxzUNqzkkVe8by_A&s', 'assets/images/train8.jpg'],
      showDetails: false,
    },
    {
      name: 'Fast Train',
      price: 2000,
      departureTime: '10:30 AM',
      arrivalTime: '01:00 PM',
      duration: '2.5h',
      amenities: ['AC', 'Wi-Fi'],
      details: 'Fast train with comfortable seating.',
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CiSylGbLp1naUp2a8l2g23IVP_Rdl-FvPQ&s', 'assets/images/train10.jpg'],
      showDetails: false,
    },
    {
      name: 'Metro',
      price: 600,
      departureTime: '11:00 AM',
      arrivalTime: '02:00 PM',
      duration: '3h',
      amenities: ['General Seating'],
      details: 'Affordable option for budget travelers.',
      images: ['https://www.ltmetro.in/media/30061/rolling-stock.jpg', 'assets/images/train12.jpg'],
      showDetails: false,
    },
   
    {
      name: 'Scenic Train',
      price: 2500,
      departureTime: '09:00 AM',
      arrivalTime: '11:00 AM',
      duration: '2h',
      amenities: ['AC', 'Sightseeing'],
      details: 'Enjoy breathtaking views on your journey.',
      images: ['https://static.toiimg.com/photo/msid-93023585,width-96,height-65.cms', 'assets/images/train16.jpg'],
      showDetails: false,
    },

  ]
  activeIndex: number[] = [];
  showMore = false;
  showModal = false;
  selectedTrain: any;
  name: string = '';
  travelDate: string = '';
  classType: string = '';
  paymentMethod: string = '';

  toggleDetails(index: number): void {
    this.trains[index].showDetails = !this.trains[index].showDetails;
  }

  onBookNow(train: any): void {
    this.selectedTrain = train;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedTrain = null;
  }

  loadMore(): void {
    this.showMore = true;
  }

  loadLess(): void {
    this.showMore = false;
  }

  onSubmit(): void {
    // Handle booking submission logic here
    console.log('Booking submitted:', {
      name: this.name,
      travelDate: this.travelDate,
      classType: this.classType,
      paymentMethod: this.paymentMethod,
      train: this.selectedTrain.name
    });
    this.closeModal(); // Close the modal after submission
  }
}
