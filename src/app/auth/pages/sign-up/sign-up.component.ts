import { Component } from '@angular/core';

import { LoginService } from '../login.services';
import { Clinic } from 'src/data/clinic';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up-page',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  clinic: Clinic = new Clinic()  

  constructor(
    private loginService: LoginService,
    private router: Router,
  ){}

  navigateTo( route: string ){
    this.router.navigate([route]);
  }

  public registerClinic(): void{
    this.loginService.registerClinic(this.clinic).subscribe(
      cli => {
        this.clinic = cli
        swal.fire(
          'Action completed!',
          `The clinic has been successfully registered!`,
          'success'
        )
      }
    )
  }

}
