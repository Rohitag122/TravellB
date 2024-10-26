import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  hotels = [
    {
      name: 'Hotel Sunshine',
      details: 'A beautiful place to relax and enjoy the sun.',
      price: '$100',
      amenities: ['Pool', 'Free WiFi', 'Breakfast'],
      images: ['https://www.kayak.co.in/rimg/himg/54/16/a3/expedia_group-199882-7199272-735522.jpg?width=968&height=607&crop=true', 'https://res.klook.com/image/upload/fl_lossy.progressive,c_fill,f_auto,w_750,q_85/v1720771206/hotel/dydilwqbqr46hgmqj7ns.jpg'],
      showDetails: false
    },
    {
      name: 'Mountain View Hotel',
      details: 'Experience the tranquility of the mountains.',
      price: '$150',
      amenities: [ 'Free Parking','Mountain Views'],
      images: ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/470978132.jpg?k=d46f795040a950106e46a2ad7fdcae1d7ed8f7af71e63c95b3550d291658add6&o=&hp=1', 'https://assets.cntraveller.in/photos/63a53dc3d7caa4e531854e77/master/pass/ROOM%20WITH%20A%20VIEW%20LEAD.jpg'],
      showDetails: false
    },
    {
      name: 'Beach Resort',
      details: 'Enjoy the beach life with all the amenities.',
      price: '$120',
      amenities: ['Beach Access', 'Pool', 'Free WiFi'],
      images: ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/479121921.jpg?k=60615d0bedc0821238464b035f543726343a5953275e85ec97f25940d939cd9e&o=&hp=1', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/479122023.jpg?k=525082e5742986f750ffee1f5cec8e9670ebbdb808f8cf01c616b6aaf2b093a8&o=&hp=1'],
      showDetails: false
    },
    {
      name: 'City Center Hotel',
      details: 'Stay in the heart of the city with great views.',
      price: '$200',
      amenities: ['Gym', 'Free Breakfast', 'City Views'],
      images: ['https://pix10.agoda.net/hotelImages/7947/-1/07ced56d77a74314b87c7e199b7f474b.jpg?ca=14&ce=1&s=702x392', 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/269800866.jpg?k=9b0627237db29c3896f62b5dca7c67af65df2c18a89ecf1069ce7f9976174e0e&o='],
      showDetails: false
    },
    {
      name: 'Luxury Inn',
      details: 'Indulge in luxury and comfort.',
      price: '$250',
      amenities: ['Spa', 'Room Service', 'Free WiFi'],
      images: ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/423396622.jpg?k=820668e543903979d0a7fcecb8c63ef7b9e22972ae6402e187dfae03e3b31c5f&o=&hp=1', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/99/e8/96/hotel-luxury-inn.jpg?w=300&h=-1&s=1'],
      showDetails: false
    },
    {
      name: 'Cozy Cottage',
      details: 'A quaint cottage in a serene location.',
      price: '$90',
      amenities: ['Kitchen', 'Garden', 'Free WiFi'],
      images: ['https://content.jdmagicbox.com/comp/jalgaon/c1/9999px257.x257.170828190533.f4c1/catalogue/motel-cozy-cottage-akashwani-chowk-omkareshwar-temple-road-maha-jalgaon-hotels-f53wzhn.jpg', 'assets/hotel12.jpg'],
      showDetails: false
    },
    {
      name: 'Historic Hotel',
      details: 'Stay in a hotel with rich history and charm.',
      price: '$180',
      amenities: ['Guided Tours', 'Free Parking'],
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-xUtpoV_jafyUkMJmw_i9xgN3yEEn6AVhA&s', 'assets/hotel14.jpg'],
      showDetails: false
    },
    {
      name: 'Family Suites',
      details: 'Spacious suites for the whole family.',
      price: '$160',
      amenities: ['Kids Club', 'Free Breakfast'],
      images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/a6/6c/ec/exterior-aerial-view.jpg?w=700&h=-1&s=1', 'assets/hotel16.jpg'],
      showDetails: false
    },
    {
      name: 'Countryside Lodge',
      details: 'Enjoy nature in a peaceful lodge.',
      price: '$110',
      amenities: ['Hiking Trails', 'Fishing'],
      images: ['https://media-cdn.tripadvisor.com/media/photo-s/29/d9/5d/c4/der-pool-die-bar-links.jpg', 'assets/hotel18.jpg'],
      showDetails: false
    },
    {
      name: 'Desert Retreat',
      details: 'Experience the beauty of the desert.',
      price: '$140',
      amenities: ['Guided Tours', 'Campfire'],
      images: ['https://media.cnn.com/api/v1/images/stellar/prod/170209131056-qasr-pool.jpg?q=w_3508,h_1974,x_0,y_0,c_fill', 'assets/hotel20.jpg'],
      showDetails: false
    }
  ];

  activeIndex: number[] = Array(this.hotels.length).fill(0);
  showMore: boolean = false;
  showModal: boolean = false;
  selectedHotel: any;
  name: string = '';
  checkIn: string = '';
  checkOut: string = '';
  paymentMethod: string = '';

  toggleDetails(index: number) {
    this.hotels[index].showDetails = !this.hotels[index].showDetails;
  }

  loadMore() {
    this.showMore = true;
  }

  loadLess() {
    this.showMore = false;
  }

  onBookNow(hotel: any) {
    this.selectedHotel = hotel;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.resetForm();
  }

  onSubmit() {
    console.log({
      name: this.name,
      checkIn: this.checkIn,
      checkOut: this.checkOut,
      paymentMethod: this.paymentMethod,
      hotelName: this.selectedHotel.name
    });
    this.closeModal();
  }

  resetForm() {
    this.name = '';
    this.checkIn = '';
    this.checkOut = '';
    this.paymentMethod = '';
    this.selectedHotel = null;
  }

  prevImage(index: number) {
    this.activeIndex[index] = (this.activeIndex[index] - 1 + this.hotels[index].images.length) % this.hotels[index].images.length;
  }

  nextImage(index: number) {
    this.activeIndex[index] = (this.activeIndex[index] + 1) % this.hotels[index].images.length;
  }
}
