import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class createEventService {

  constructor(private http: HttpClient) { }

  url = 'https://localhost:3000/events/';


  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }



  // getUsers(): Observable<any[]> {
  //   return this.http.get<any[]>(this.url)
  //     .pipe(
  //       tap(users => console.log('fetched users', users)),
  //       catchError(this.handleError('getUsers', []))
  //     )
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** DELETE: delete the hero from the server */
  // deleteUser(id: number): Observable<{}> {
  //   // const url = `${this.url}+${id}`; // DELETE api/heroes/42
  //   return this.http.delete(this.url + '/' + id)
  //     .pipe(
  //       tap(id => console.log('Deleted user', id)),
  //       catchError(this.handleError('deleteHero')),
  //     );
  // }


  // Get details of a Particular User
  // getParticularUser(id): Observable<any[]> {
  //   return this.http.get<any[]>(this.url + '/' + id)
  //     .pipe(
  //       tap(users => console.log('fetched users', users)),
  //       catchError(this.handleError('getUsers', []))
  //     )
  // }

  // createEvent() {
  //   console.log('From Create Event Service')

  //   return this.http.post(this.url, {
  //     "name": "Forex Expert Trading Seminar",
  //     "organiser": "Hantec Global",
  //     "address": "188 Mobolaji Bank Anothony Way",
  //     "telephone": "+18182102582",
  //     "city": "Ikeja",
  //     "state": "Lagos"
  //   }, this.httpOptions)
  // }

  // signup(user: DetailsDataService): Observable<DetailsDataService> {
  //     console.log("Stuff sent to API");
  //     return this.http.post<DetailsDataService>(this.url, {'firstname': user['firstname'], 'surname': user['surname'], 'age': user['dob'],'weight':user['weight'],'height':user['height'],'haircolor':user['hairColor']}, this.httpOptions)
  //   }

}

