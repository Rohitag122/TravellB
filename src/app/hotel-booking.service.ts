import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelBookingService {
  private apiUrl = 'https://example.com/api/hotels'; // Replace with actual API endpoint

  constructor(private http: HttpClient) {}

  getHotels(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/list`);
  }

  bookHotel(bookingDetails: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/book`, bookingDetails);
  }
}
