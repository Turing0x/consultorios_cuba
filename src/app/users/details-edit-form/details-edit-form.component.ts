import { Component, OnInit } from '@angular/core';
import { Person } from 'src/data/person';
import { UserManagerService } from '../user-manager/user-manager.service';
import { ActivatedRoute } from '@angular/router';
import { Appoiment } from 'src/data/cita';
import { Tratamiento } from 'src/data/tratamiento';

@Component({
  selector: 'app-details-edit-form',
  templateUrl: './details-edit-form.component.html',
  styleUrls: ['./details-edit-form.component.css']
})
export class DetailsEditFormComponent implements OnInit{

  person: Person = new Person()

  cita!: Tratamiento

  constructor(
    private readonly userManager: UserManagerService,
    private readonly activateRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.loadActivePerson()
  }

  public loadActivePerson(): void {
    this.activateRoute.params.subscribe(
      params => {
        const ci = params['ci']
        if( ci ){
          this.userManager.getPersonByCI(ci).subscribe(
            data => this.cita = data
          )
        }
      }
    )
  }

}
