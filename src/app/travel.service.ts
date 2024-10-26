import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private destinations: string[] = ['New York', 'London', 'Tokyo', 'Paris'];

  constructor() {}

  getDestinations() {
    return this.destinations;
  }

  // Add more methods to handle other data or events
}
