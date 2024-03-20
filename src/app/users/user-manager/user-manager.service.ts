import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Doctor } from "src/data/doctor";
import { Person } from "src/data/person";
import { BackendDoctor, BackendResponse2Tra, BackendResponseTra, Tratamiento } from "src/data/response";

@Injectable({
  providedIn: 'root'
})

export class UserManagerService{

  private url: string = 'http://localhost:8080/api/tratamiento'
  private urlusers: string = 'http://localhost:8080/api/users'
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(
    private http: HttpClient
  ){}

  getAllPersons(): Observable<Tratamiento[]>{
    return this.http.get<BackendResponseTra>(this.url).pipe(
      map(data => data.data)
    )
  }

  getPersonByCI( ci: string ): Observable<Tratamiento>{
    return this.http.get<BackendResponse2Tra>(`${this.url}/${ci}`).pipe(
      map(data => data.data)
    )
  }

  saveOnePerson( person: Person ): Observable<Person>{
    return this.http.post<Person>(this.url, person, {
      headers: this.httpHeaders
    })
  }

  editOnePerson( person: Person ): Observable<Person>{
    return this.http.put<Person>(`${this.url}/${person.ci}`, person, {
      headers: this.httpHeaders
    })
  }

  deleteOnePerson( ci: string ): Observable<boolean>{
    return this.http.delete<boolean>(`${this.url}/${ci}`, {
      headers: this.httpHeaders
    })
  }

  getDoctorByRegNum(regNum: string): Observable<BackendDoctor> {
    return this.http.get<BackendDoctor>(`${this.urlusers}/profile/${regNum}`, {
      headers: this.httpHeaders
    });
  }

}