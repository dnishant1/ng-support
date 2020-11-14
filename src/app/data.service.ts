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


    /** DELETE: delete the hero from the server */
    // deleteHero(hero: Hero | number): Observable<Hero> {
    //   const id = typeof hero === 'number' ? hero : hero.id;
    //   const url = `${this.heroesUrl}/${id}`;
  
    //   return this.http.delete<Hero>(url, this.httpOptions).pipe(
    //     tap(_ => this.log(`deleted hero id=${id}`)),
    //     catchError(this.handleError<Hero>('deleteHero'))
    //   );
    // }
  
    // /** PUT: update the hero on the server */
    // updateHero(hero: Hero): Observable<any> {
    //   return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
    //     tap(_ => this.log(`updated hero id=${hero.id}`)),
    //     catchError(this.handleError<any>('updateHero'))
    //   );
    // }
  

}
