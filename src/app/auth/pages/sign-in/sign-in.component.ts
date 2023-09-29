import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { LoginService } from '../login.services';
import { Clinic } from 'src/data/clinic';
import swal from 'sweetalert2';

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  clinic: Clinic = new Clinic()  

  constructor(
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  navigateTo( route: string ){
    this.router.navigate([route]);
  }

  public makeLogin(): void{
    this.loginService.signIn(this.clinic).subscribe(
      success => {

        if( !success ){
          swal.fire( 'Login error', 
            'The data provided is incorrect, please rectify it', 'error' )
          return
        }

        swal.fire( 'Action completed!', 
          `You have successfully logged in!`, 'success')
        
        this.router.navigate(['/person/listcomplete'], 
          { relativeTo: this.activatedRoute })

      }
    )
  }

}
