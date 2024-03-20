import { Component } from '@angular/core';

import { LoginService } from '../login.services';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserRegister } from 'src/data/user';

@Component({
  selector: 'sign-up-page',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user: UserRegister = new UserRegister()  

  constructor(
    private loginService: LoginService,
    private router: Router,
  ){}

  navigateTo( route: string ){
    this.router.navigate([route]);
  }

  public registerClinic(): void{
    this.loginService.registerUser(this.user).subscribe(
      cli => {
        this.user = cli
        swal.fire(
          'Action completed!',
          `The user has been successfully registered!`,
          'success'
        )
      }
    )
  }

}
