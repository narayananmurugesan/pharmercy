import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url: string = 'http://dummy.restapiexample.com/';

  private currentUrl: string = '';
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse){
      if(error.error instanceof ErrorEvent){
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An Error Occured:', error.error.message);
      }else{
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      return throwError('Something bad happened; please try again later.');
  }

  get(paramUrl: string,id: any): Observable<any>{
    if(id){
      this.currentUrl = `${this.url}${paramUrl}/${id}`;
    }else{
      this.currentUrl = `${this.url}${paramUrl}`;
    }    
    return this.http.get<any>(this.currentUrl).pipe(catchError(this.handleError));
  }

  post(paramUrl: string,param: any): Observable<any>{
    this.currentUrl = `${this.url}/${paramUrl}`
    if(param.username == 'admin' && param.password == 'password'){
      return null;
    }else{
      return this.http.post<any>(this.currentUrl, param).pipe(catchError(this.handleError));
    }
    
  }

}
