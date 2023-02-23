import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Quote } from "../types/quote.type";
import * as Realm from "realm-web";

// const app = new Realm.App({ id: "zenapp-xxfow" });
// const credentials = Realm.Credentials.anonymous();
// try {
//   const user = await app.logIn(credentials);
// } catch(err) {
//   console.error("Failed to log in", err);
// }


@Injectable({
  providedIn: 'root'
})

export class QuotesService {
  constructor(private http: HttpClient) { }

  //custom endpoint from mongo-atlas realm
  private quotesUrl = 'https://eu-central-1.aws.data.mongodb-api.com/app/zenapp-xxfow/endpoint/quotes';

  /** GET heroes from the server */
  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.quotesUrl)
      .pipe(
        catchError(this.handleError<Quote[]>('getQuotes', []))
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
