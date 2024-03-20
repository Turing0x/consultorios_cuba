import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login.services';
import swal from 'sweetalert2';
import { UserRegister } from 'src/data/user';

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: UserRegister = new UserRegister()

  constructor(
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    const userInfo = localStorage.getItem('user_login')
    if (userInfo) {
      this.user = new UserRegister(JSON.parse(userInfo))
    }
  }

  public makeLogin(): void{

    const rememberPass = (document.getElementById('formCheck') as HTMLInputElement)!.checked;
    this.loginService.signIn(this.user).subscribe(
      success => {

        if( !success ){
          swal.fire( 'Login error', 
            'The data provided is incorrect, please rectify it', 'error' )
          return
        }

        if (rememberPass) {
          localStorage.setItem('user_login', JSON.stringify(this.user))
        }

        swal.fire( 'Action completed!', 
          `You have successfully logged in!`, 'success')
        
        this.router.navigate(['/appoiments/listcomplete'], 
          { relativeTo: this.activatedRoute })

      }
    )
  }
  
  navigateTo( route: string ){
    this.router.navigate([route]);
  }

}
