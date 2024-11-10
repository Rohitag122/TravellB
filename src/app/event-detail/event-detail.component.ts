import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService, Event } from '../event.service';

@Component({
  selector: 'app-event-detail',
  template: `
    <app-nav-bar></app-nav-bar>
    <div *ngIf="event">
      <h2>{{ event.name }}</h2>
      <p>Date: {{ event.date }}</p>
      <p>Available Tickets: {{ event.availableTickets }}</p>
   
    </div>
    <app-footer></app-footer>
  `
})
export class EventDetailComponent implements OnInit {
  event: Event | undefined;

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.event = this.eventService.getEvents().find(e => e.id === id);
  }
}
