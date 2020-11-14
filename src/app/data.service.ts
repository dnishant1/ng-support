import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }



  getBookings() {
    return this.http.get('http://s2-stage.flightomart.com/book-flights/process.php?getAllItineraries=nishant.dhulipala@gmail.com');
  }


}
