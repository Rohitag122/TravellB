// import { Component } from '@angular/core';

// interface Package {
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   duration: string;
//   type: string; // Family, Solo, Couple, etc.
//   showDetails?: boolean; // New property to control detail visibility
// }


// @Component({
//   selector: 'app-packages',
//   templateUrl: './packages.component.html',
//   styleUrls: ['./packages.component.css']
// })
// export class PackagesComponent {
//   packages: Package[] = [
//     {
//       name: 'Honeymoon in Maldives',
//       description: 'A romantic getaway to the beautiful beaches of Maldives with luxurious accommodations and water activities.',
//       price: 150000,
//       imageUrl: 'https://example.com/maldives.jpg',
//       duration: '5 Days, 4 Nights',
//       type: 'Couple'
//     },
//     {
//       name: 'Family Adventure in Rajasthan',
//       description: 'Explore the royal heritage of Rajasthan with your family, including forts, palaces, and local markets.',
//       price: 80000,
//       imageUrl: 'https://example.com/rajasthan.jpg',
//       duration: '7 Days, 6 Nights',
//       type: 'Family'
//     },
//     {
//       name: 'Solo Backpacking in Himachal',
//       description: 'A thrilling solo trip to the hills of Himachal with trekking and camping experiences.',
//       price: 30000,
//       imageUrl: 'https://example.com/himachal.jpg',
//       duration: '6 Days, 5 Nights',
//       type: 'Solo'
//     },
//     {
//       name: 'Couple Retreat in Goa',
//       description: 'Enjoy the sun and sand with your partner in Goa, featuring beach parties and water sports.',
//       price: 60000,
//       imageUrl: 'https://example.com/goa.jpg',
//       duration: '4 Days, 3 Nights',
//       type: 'Couple'
//     },
//     {
//       name: 'Family Trip to Disney World',
//       description: 'Experience the magic of Disney with your family, including park tickets and hotel stays.',
//       price: 120000,
//       imageUrl: 'https://example.com/disney.jpg',
//       duration: '5 Days, 4 Nights',
//       type: 'Family'
//     },
//     {
//       name: 'Solo Yoga Retreat in Rishikesh',
//       description: 'A peaceful solo trip focusing on yoga and meditation in the serene surroundings of Rishikesh.',
//       price: 20000,
//       imageUrl: 'https://example.com/rishikesh.jpg',
//       duration: '7 Days, 6 Nights',
//       type: 'Solo'
//     },
//     {
//       name: 'Cultural Tour of Italy',
//       description: 'Explore the rich culture and history of Italy, including visits to Rome, Florence, and Venice.',
//       price: 180000,
//       imageUrl: 'https://example.com/italy.jpg',
//       duration: '10 Days, 9 Nights',
//       type: 'Couple'
//     },
//     {
//       name: 'Family Safari in South Africa',
//       description: 'Embark on an adventurous safari in South Africa, spotting wildlife and exploring nature.',
//       price: 200000,
//       imageUrl: 'https://example.com/safari.jpg',
//       duration: '8 Days, 7 Nights',
//       type: 'Family'
//     },
//     {
//       name: 'Historical Tour of Turkey',
//       description: 'Discover the historical sites of Turkey, including Istanbul and Cappadocia.',
//       price: 150000,
//       imageUrl: 'https://example.com/turkey.jpg',
//       duration: '9 Days, 8 Nights',
//       type: 'Couple'
//     },
//     {
//       name: 'Solo Hiking in the Swiss Alps',
//       description: 'Experience breathtaking views and hiking trails in the beautiful Swiss Alps.',
//       price: 90000,
//       imageUrl: 'https://example.com/swiss.jpg',
//       duration: '6 Days, 5 Nights',
//       type: 'Solo'
//     },
//     // Add more packages as needed
//   ];

//   displayedPackages: Package[] = []; // Packages to display
//   packageCount = 4; // Number of packages to display initially
//   showLessButton = false; // To control the visibility of the Show Less button

//   constructor() {
//     this.loadInitialPackages();
//   }

//   loadInitialPackages() {
//     this.displayedPackages = this.packages.slice(0, this.packageCount).map(pkg => ({
//       ...pkg,
//       showDetails: false // Initialize showDetails for each package
//     }));
//     this.showLessButton = this.packages.length > this.packageCount;
//   }

//   loadMore() {
//     this.packageCount += 4; // Load 4 more packages
//     this.updateDisplayedPackages();
//   }

//   loadLess() {
//     this.packageCount = Math.max(4, this.packageCount - 4); // Show at least 4 packages
//     this.updateDisplayedPackages();
//   }

//   updateDisplayedPackages() {
//     this.displayedPackages = this.packages.slice(0, this.packageCount).map(pkg => ({
//       ...pkg,
//       showDetails: false // Reset showDetails when updating displayed packages
//     }));
//     this.showLessButton = this.packages.length > this.packageCount;
//   }

//   toggleDetails(pkg: Package) { // Changed parameter name from package to pkg
//     pkg.showDetails = !pkg.showDetails; // Toggle details
//   }
// }


import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {

 
    packages = [
      {
        name: 'Romantic Maldives Getaway',
        price: 1200,
        type: 'Couples',
        amenities: ['Private Beach', 'Luxury Spa', 'Fine Dining'],
        details: 'Enjoy a luxurious stay in a private villa with stunning ocean views.',
        images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
        showDetails: false,
      },
      {
        name: 'Solo Adventure in Bali',
        price: 800,
        type: 'Solo',
        amenities: ['Surf Lessons', 'Guided Tours', 'Cultural Experiences'],
        details: 'Experience the thrill of surfing and explore Bali’s rich culture.',
        images: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
        showDetails: false,
      },
      {
        name: 'Duo Escapade in Paris',
        price: 1500,
        type: 'Duo',
        amenities: ['City Tour', 'Wine Tasting', 'Romantic Dinner'],
        details: 'Explore the romantic city of Paris with a loved one.',
        images: ['image7.jpg', 'image8.jpg', 'image9.jpg'],
        showDetails: false,
      },
      {
        name: 'Cultural Trip to Japan',
        price: 2000,
        type: 'Solo',
        amenities: ['Guided Tours', 'Culinary Experiences', 'Temple Visits'],
        details: 'Immerse yourself in the culture of Japan with guided tours.',
        images: ['image10.jpg', 'image11.jpg', 'image12.jpg'],
        showDetails: false,
      },
      {
        name: 'Honeymoon in Bora Bora',
        price: 3000,
        type: 'Couples',
        amenities: ['Private Lagoon', 'Luxury Dining', 'Couples Massage'],
        details: 'Spend your honeymoon in one of the most beautiful islands in the world.',
        images: ['image13.jpg', 'image14.jpg', 'image15.jpg'],
        showDetails: false,
      },
      {
        name: 'Backpacking in South America',
        price: 600,
        type: 'Solo',
        amenities: ['Hostel Stays', 'Adventure Activities', 'Cultural Tours'],
        details: 'Explore the beauty of South America with an adventurous spirit.',
        images: ['image16.jpg', 'image17.jpg', 'image18.jpg'],
        showDetails: false,
      },
      {
        name: 'Weekend Getaway to the Mountains',
        price: 400,
        type: 'Duo',
        amenities: ['Hiking', 'Cabin Stay', 'Bonfire Nights'],
        details: 'Enjoy a weekend of relaxation and adventure in the mountains.',
        images: ['image19.jpg', 'image20.jpg', 'image21.jpg'],
        showDetails: false,
      },
      {
        name: 'Safari Adventure in Africa',
        price: 2500,
        type: 'Couples',
        amenities: ['Wildlife Tours', 'Luxury Lodges', 'Cultural Experiences'],
        details: 'Experience the thrill of a safari in Africa with your partner.',
        images: ['image22.jpg', 'image23.jpg', 'image24.jpg'],
        showDetails: false,
      },
      {
        name: 'Cruise Trip in the Caribbean',
        price: 1800,
        type: 'Duo',
        amenities: ['All-Inclusive', 'Excursions', 'Live Entertainment'],
        details: 'Enjoy a luxurious cruise experience in the beautiful Caribbean.',
        images: ['image25.jpg', 'image26.jpg', 'image27.jpg'],
        showDetails: false,
      },
      {
        name: 'Wellness Retreat in Costa Rica',
        price: 1500,
        type: 'Solo',
        amenities: ['Yoga Classes', 'Spa Treatments', 'Healthy Cuisine'],
        details: 'Rejuvenate your mind and body at a serene wellness retreat.',
        images: ['image28.jpg', 'image29.jpg', 'image30.jpg'],
        showDetails: false,
      }
    ];
  
    activeIndex: number[] = [];
    showMore: boolean = false;
    showModal: boolean = false;
    selectedPackage: any;
    name: string = '';
    checkIn: string = '';
    checkOut: string = '';
    paymentMethod: string = '';
  
    toggleDetails(index: number) {
      this.packages[index].showDetails = !this.packages[index].showDetails;
    }
  
    onBookNow(packageItem: any) {
      this.selectedPackage = packageItem;
      this.showModal = true;
    }
  
    closeModal() {
      this.showModal = false;
    }
  
    onSubmit() {
      // Handle booking submission logic here
      console.log('Booking submitted for', this.selectedPackage);
      this.closeModal();
    }
  
    loadMore() {
      this.showMore = true;
    }
  
    loadLess() {
      this.showMore = false;
    }
  
    prevImage(index: number) {
      this.activeIndex[index] = (this.activeIndex[index] || 0) - 1;
      if (this.activeIndex[index] < 0) {
        this.activeIndex[index] = this.packages[index].images.length - 1;
      }
    }
  
    nextImage(index: number) {
      this.activeIndex[index] = (this.activeIndex[index] || 0) + 1;
      if (this.activeIndex[index] >= this.packages[index].images.length) {
        this.activeIndex[index] = 0;
      }
    }
  }
  