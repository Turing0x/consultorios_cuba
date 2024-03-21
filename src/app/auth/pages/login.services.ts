import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

import { UserRegister } from 'src/data/user';

@Injectable()
export class LoginService{

  private url: string = 'http://localhost:8080/api/users'
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(
    public http: HttpClient
  ){ }

  registerUser( doctor: UserRegister ): Observable<UserRegister>{
    return this.http.post<UserRegister>(this.url, doctor, {
      headers: this.httpHeaders
    }).pipe(
      catchError(e => {
          Swal.fire(
            'Registration error',
            e.error['api_message'],
            'error'
          )
          return throwError(() => e)
        })
      );
  }

  signIn( doctor: { username: string, password: string } ): Observable<boolean>{
    return this.http.post<boolean>(`${this.url}/signIn`, doctor, {
      headers: this.httpHeaders }).pipe(
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

  forgotPassword(email: string, doctor: string): Observable<object>{
    return this.http.post<object>(`${this.url}/sendMail`, {email, doctor}, {
      headers: this.httpHeaders }).pipe(
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