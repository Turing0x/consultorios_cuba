import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
  
export class LocationService{

  private url: string = 'http://localhost:8080/api/province'
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(
    public http: HttpClient
  ) { }
  
  getAllProvinces(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  createProviceAndTown( obj: object ): Observable<any>{
    return this.http.post(this.url, obj, {
      headers: this.httpHeaders
    }).pipe(
      catchError(e => {
        Swal.fire(
          'Login error',
          e.error['api_message'],
          'error'
        )
        return throwError(() => e)
      })
    );
  }

}