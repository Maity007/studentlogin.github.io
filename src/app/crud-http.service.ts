import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudHttpService {
  list() {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient) { }

  apiUrl: string='http://localhost:3000/user_data';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  // Create
  create(data: any): Observable<any> {
      let API_URL = `${this.apiUrl}`;
      return this.http.post(API_URL, data)
      .pipe(
      catchError(this.handleError)
      )
    }
  //login
  list_new() {
    return this.http.get(`${this.apiUrl}`);
    }
  //read
  slist(){
    return this.http.get(`${this.apiUrl}`);
  }

  //update
  Update(id: any, data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
    catchError(this.handleError)
    );
  }

  //delete
  delete(id:any):Observable<any>{
    var API_URL = `${this.apiUrl}/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.handleError)
    );
  }
  
  


  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  };
}
  
