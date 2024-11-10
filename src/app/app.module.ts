import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FlightsComponent } from './flights/flights.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AboutComponent } from './about/about.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BusComponent } from './bus/bus.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { BookingService } from './booking.service';
import { TravelService } from './travel.service';
import { EventService } from './event.service';
import { HotelBookingService } from './hotel-booking.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TrainComponent } from './train/train.component';
import { BokingService } from './boking.service';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventDetailComponent,

    NavBarComponent,
    FooterComponent,
    FlightsComponent,
    HotelsComponent,
 
    ContactComponent,
    LoginComponent,
    NotificationsComponent,
    AboutComponent,
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
    
   // Add HttpClientModule here
  ],
  providers: [ BookingService,TravelService,EventService,HotelBookingService,BokingService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
