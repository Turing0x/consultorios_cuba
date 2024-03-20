import { Component, type OnInit } from '@angular/core';
import { UserManagerService } from '../user-manager/user-manager.service';
import { ActivatedRoute } from '@angular/router';
import { Tratamiento } from 'src/data/tratamiento';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
  
export class UserEditComponent implements OnInit {

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
        const ci = 'Roberto Diaz'
        if( ci ){
          this.userManager.getPersonByCI(ci).subscribe(
            data => this.cita = data
          )
        }
      }
    )
  }

}
