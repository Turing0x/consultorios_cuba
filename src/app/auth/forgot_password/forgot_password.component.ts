import { Component } from '@angular/core';
import { LoginService } from '../pages/login.services';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot_password.component.html',
  styleUrls: ['./forgot_password.component.css'],
})
  
export class ForgotPasswordComponent {

  isWaitingForCode: boolean = false;
  verificationCode: string = ''
  clinicId: string = ''

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  step_list = [
    {
      stepNumber: "Paso 1", 
      stepName: "Tú Email", 
      stepStatus: "Completado"
    },
    {
      stepNumber: "Paso 2", 
      stepName: "Código al Correo", 
      stepStatus: "Completado"
    },
    {
      stepNumber: "Paso 3", 
      stepName: "Nueva Contraseña", 
      stepStatus: "En Progreso"
    }
  ]

  public sendRocoveryRequest(): void{

    const email = (document.getElementById('mail_text') as HTMLInputElement).value;
    const clinic = (document.getElementById('clinic_text') as HTMLInputElement).value;

    if (!email || !clinic) {
      swal.fire('Empty field',
        'Please fill with a valid email', 'error');
      return;
    }

    if (!this.checkEmail(email)) {
      swal.fire('Email validation error',
        'The provided email is not valid. Please check and correct it', 'error');
      return;
    }

    this.loginService.forgotPassword(email, clinic).subscribe(
      data => {
        this.verificationCode = Object(data)['data']['code'].toString()
        this.clinicId = Object(data)['data']['clinic']
        
        this.isWaitingForCode = true;

        return;
      }
    )
  }

  public recoverPassword(): void{

    const getCode = (document.getElementById('confirmationCode') as HTMLInputElement).value;

    if (getCode !== this.verificationCode) {
      swal.fire('Code validation error',
        'The provided code is not valid. Please check and correct it', 'error');
      return;
    }

    console.log('todo en talla');

  }

  public checkEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  navigateTo(route: string) {
    this.isWaitingForCode = false
    this.router.navigate([route]);
  }

}
