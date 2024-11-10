import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { HotelsComponent } from './hotels/hotels.component';

import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AboutComponent } from './about/about.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { TrainComponent } from './train/train.component';
import { BusComponent } from './bus/bus.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [

  { path: 'flights', component: FlightsComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'train', component: TrainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bus', component: BusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'about', component: AboutComponent},
  { path: 'booking-history', component: BookingHistoryComponent },
  { path: 'app-payment', component: PaymentComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
