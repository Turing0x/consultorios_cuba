import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { AppoResponse, AppoResponse2 } from "src/data/appo_response";
import { Appoiment } from "src/data/cita";

@Injectable({
  providedIn: 'root'
})

export class AppoimentsService{

  private url: string = 'http://localhost:8080/api/appoiments'
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(
    private http: HttpClient
  ){}

  getAllAppoiments(): Observable<Appoiment[]>{
    return this.http.get<AppoResponse>(this.url).pipe(
      map(data => data.data)
    )
  }

  getAppoimentsByCI( appo_id: string ): Observable<Appoiment>{
    return this.http.get<AppoResponse2>(`${this.url}/${appo_id}`).pipe(
      map(data => data.data)
    )
  }

  saveOneAppoiments( appo: Appoiment ): Observable<Appoiment>{
    return this.http.post<Appoiment>(this.url, appo, {
      headers: this.httpHeaders
    })
  }

  editOneAppoiments( appo: Appoiment ): Observable<Appoiment>{
    return this.http.put<Appoiment>(`${this.url}/${appo.appo_id}`, appo, {
      headers: this.httpHeaders
    })
  }

  deleteOneAppoiments( appo_id: string ): Observable<boolean>{
    return this.http.delete<boolean>(`${this.url}/${appo_id}`, {
      headers: this.httpHeaders
    })
  }

}