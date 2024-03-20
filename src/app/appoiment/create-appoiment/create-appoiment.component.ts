import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Appoiment } from 'src/data/cita';
import { AppoimentsService } from '../appoiment.service';

@Component({
  selector: 'app-create-appoiment',
  templateUrl: './create-appoiment.component.html',
  styleUrls: ['./create-appoiment.component.css'],
})
export class CreateAppoimentComponent {

  appo: Appoiment = new Appoiment()

  errorGenderMessage: String = '';
  errorAgeMessage: String = '';

  withErrors: boolean = true;

  constructor(
    private readonly appManager: AppoimentsService,
    private router: Router,
  ){}

  navigateTo( route: string ){
    this.router.navigate([route]);
  }

  onSubmit(){
    this.appManager.saveOneAppoiments(this.appo).subscribe(
      per => {
        this.appo = per
        Swal.fire(
          'Action completed!',
          `The appoiment has been successfully registered!`,
          'success'
        )
        this.navigateTo('/appoiments/listcomplete')
      }
    )
  }

}
