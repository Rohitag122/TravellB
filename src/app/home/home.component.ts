import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../event.service';

@Component({
  selector: 'app-home',
  template: `
    <app-nav-bar></app-nav-bar>
    <h1>Available Events</h1>
    <ul>
      <li *ngFor="let event of events">
        <a [routerLink]="['/event', event.id]">{{ event.name }} - {{ event.date }}</a>
      </li>
    </ul>
 
  `
})
export class HomeComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
