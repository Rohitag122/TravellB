import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { BookingFormComponent } from './booking-form/booking-form.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FlightsComponent } from './flights/flights.component';
import { HotelsComponent } from './hotels/hotels.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AboutComponent } from './about/about.component';
import { BookingStepsComponent } from './booking-steps/booking-steps.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BusComponent } from './bus/bus.component';
import { TrainComponent } from './train/train.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { HttpClientModule } from '@angular/common/http'; // Correctly import HttpClientModule here

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventDetailComponent,
    BookingFormComponent,
    NavBarComponent,
    FooterComponent,
    FlightsComponent,
    HotelsComponent,
    PackagesComponent,
    ContactComponent,
    LoginComponent,
    NotificationsComponent,
    AboutComponent,
    BookingStepsComponent,
    PaymentComponent,
    BookingHistoryComponent,
    BusComponent,
    TrainComponent,
    HotelBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule // Add HttpClientModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
