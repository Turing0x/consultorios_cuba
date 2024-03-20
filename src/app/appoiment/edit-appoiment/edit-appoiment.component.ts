import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { Appoiment } from 'src/data/cita';
import { AppoimentsService } from '../appoiment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-appoiment',
  templateUrl: './edit-appoiment.component.html',
  styleUrls: ['./edit-appoiment.component.css'],
})
export class EditAppoimentComponent implements OnInit{

  appo!: Appoiment

  withErrors: boolean = true;

  constructor(
    private readonly appManager: AppoimentsService,
    private readonly activateRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadActivePerson()
  }

  navigateTo( route: string ){
    this.router.navigate([route]);
  }

  public loadActivePerson(): void {
    this.activateRoute.params.subscribe(
      params => {
        const appo_id = params['appo_id']
        if( appo_id ){
          this.appManager.getAppoimentsByCI(appo_id).subscribe(
            data => this.appo = data
          )
        }
      }
    )
  }

  onSubmit() {
    
    this.appManager.editOneAppoiments(this.appo).subscribe(
      per => {
        this.appo = per
        Swal.fire(
          'Action completed!',
          `The appoiment has been successfully edited!`,
          'success'
        )
        this.navigateTo('/appoiments/listcomplete')
      }
    )
  }

}
