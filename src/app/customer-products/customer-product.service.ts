import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomerProductService {

  productsURL = 'api/products';
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return error; // of(result as T);
    };
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsURL)
      .pipe(
        catchError(this.handleError<any[]>('getProducts', []))
      );
  }

  getProductsWithPagination(page_number: number = 0,
    number_of_entries: number = 10,
  ): Observable<any[]> {
    return this.http.get<any[]>(this.productsURL + `?_page=${page_number}&_limit=${number_of_entries}`)
      .pipe(
        catchError(this.handleError<any[]>('getProducts', []))
      );

  }


  searchProducts(filter: string): Observable<any[]> {
    return this.http.get<any[]>(this.productsURL + `?q=${filter}`)
      .pipe(
        catchError(this.handleError<any[]>('getProducts', []))
      );
  }
}
