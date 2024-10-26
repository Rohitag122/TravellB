import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title: string = 'Travelbea';
  description: string = 'Travelbea has been providing exceptional travel services since 2022. Our commitment to quality and customer satisfaction sets us apart in the travel industry.';
  
  services: string[] = [
    'Flight Bookings',
    'Hotel Reservations',
    'Travel Packages',
    'Tour Planning',
    'Visa Assistance',
    'Corporate Travel Management'
  ];

  testimonials: { name: string; feedback: string; }[] = [
    { name: 'Rajesh Kumar', feedback: 'Agarwal Travels made my trip unforgettable! The best travel service I have ever used.' },
    { name: 'Priya Singh', feedback: 'Excellent service! They took care of everything, from flights to hotel bookings.' },
    { name: 'Amit Sharma', feedback: 'Highly recommend Agarwal Travels for their professionalism and attention to detail.' }
  ];
}
