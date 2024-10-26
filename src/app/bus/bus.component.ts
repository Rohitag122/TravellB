
    import { Component } from '@angular/core';

    // Define an interface for bus data
    interface Bus {
      name: string;
      price: number;
      departureTime: string;
      arrivalTime: string;
      duration: string;
      amenities: string[];
      images: string[];
      showDetails: boolean;
      details: string;
    }
    
    @Component({
      selector: 'app-bus',
      templateUrl: './bus.component.html',
      styleUrls: ['./bus.component.css']
    })
    export class BusComponent {
      buses: Bus[] = []; // Declare the buses array with the Bus interface type
      showMore = false;
      showModal = false;
      selectedBus: Bus | null = null; // Specify that selectedBus can be a Bus or null
      name: string = '';
      travelDate: string = '';
      classType: string = '';
      paymentMethod: string = '';
      activeIndex: number[] = [];
    
      constructor() {
        // Sample bus data (update with actual data)
        this.buses = [
          {
            name: 'Chandigarh-Shimla',
            price: 1100,
            departureTime: '10:00 AM',
            arrivalTime: '2:00 PM',
            duration: '10 hours',
            amenities: ['Wi-Fi', 'AC', 'Refreshments'],
            images: ['https://himachaltourpackage.co.in/wp-content/uploads/2020/09/Shimla-Volvo-Bus-Tour-Package.jpg', 'busA2.jpg'],
            showDetails: false,
            details: 'Details about Bus A'
          },
          {
            name: 'Delhi-Dharmshala',
            price: 600,
            departureTime: '11:00 AM',
            arrivalTime: '3:00 PM',
            duration: '14 hours',
            amenities: ['Wi-Fi', 'AC'],
            images: ['https://www.holidaytravel.co/img_cache/100P172510364450367d8ccfbae.jpg', 'busB2.jpg'],
            showDetails: false,
            details: 'Details about Bus B'
          },
          {
            name: 'Delhi-Goa',
            price: 4600,
            departureTime: '11:00 AM',
            arrivalTime: '3:00 PM',
            duration: '26 hours',
            amenities: ['Wi-Fi', 'AC'],
            images: ['https://goadarshanbus.com/wp-content/uploads/2023/07/FB_IMG_1685516912660-1-500x400.jpg', 'busB2.jpg'],
            showDetails: false,
            details: 'Details about Bus B'
          },
          {
            name: 'Mumbai-Ahmedabad',
            price: 2600,
            departureTime: '11:00 AM',
            arrivalTime: '3:00 PM',
            duration: '22 hours',
            amenities: ['Wi-Fi', 'AC'],
            images: ['https://www.onlinebusbookingindia.com/uploads/37142_Mercedes%20bus%204.jpg', 'busB2.jpg'],
            showDetails: false,
            details: 'Details about Bus B'
          },
          {
            name: 'Kolkata-Bhuvneshwar',
            price: 1500,
            departureTime: '11:00 AM',
            arrivalTime: '3:00 PM',
            duration: '15hours',
            amenities: ['Wi-Fi', 'AC'],
            images: ['https://goadarshanbus.com/wp-content/uploads/2023/07/FB_IMG_1685516912660-1-500x400.jpg', 'busB2.jpg'],
            showDetails: false,
            details: 'Details about Bus B'
          },
          // Add more bus objects as needed
        ];
      
    
      // ... Rest of the methods remain the same
      }
    

  toggleDetails(index: number) {
    // Toggle the showDetails property for the selected bus
    this.buses[index].showDetails = !this.buses[index].showDetails;
  }

  onBookNow(bus: any) {
    // Set the selected bus and open the booking modal
    this.selectedBus = bus;
    this.showModal = true;
  }

  closeModal() {
    // Close the booking modal
    this.showModal = false;
    this.resetForm(); // Reset form values when closing the modal
  }

  loadMore() {
    // Show more buses
    this.showMore = true;
  }

  loadLess() {
    // Hide additional buses
    this.showMore = false;
  }

  onSubmit() {
    // Implement your booking logic here
    console.log('Booking submitted:', {
      name: this.name,
      travelDate: this.travelDate,
      classType: this.classType,
      paymentMethod: this.paymentMethod
    });
    this.closeModal(); // Close the modal after submission
  }

  prevImage(index: number) {
    // Go to the previous image if available
    if (this.activeIndex[index] > 0) {
      this.activeIndex[index]--;
    }
  }

  nextImage(index: number) {
    // Go to the next image if available
    if (this.activeIndex[index] < this.buses[index].images.length - 1) {
      this.activeIndex[index]++;
    }
  }

  private resetForm() {
    // Reset form fields
    this.name = '';
    this.travelDate = '';
    this.classType = '';
    this.paymentMethod = '';
    this.selectedBus = null; // Reset selected bus
  }
}
  