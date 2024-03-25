import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { LoginService } from '../pages/login.services';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot_password.component.html',
  styleUrls: ['./forgot_password.component.css'],
})
  
export class ForgotPasswordComponent implements OnInit {

  isWaitingForCode: boolean = false;
  verificationCode: string = ''
  clinicId: string = ''

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.stepManager()
  }

  public sendRocoveryRequest(): void{

    const email = (document.getElementById('mail_text') as HTMLInputElement).value;

    if (!email) {
      swal.fire('Empty field',
        'Please fill with a valid email', 'error');
      return;
    }

    if (!this.checkEmail(email)) {
      swal.fire('Email validation error',
        'The provided email is not valid. Please check and correct it', 'error');
      return;
    }

    this.loginService.forgotPassword(email).subscribe(
      data => {
        this.verificationCode = Object(data)['data']['code'].toString()
        this.clinicId = Object(data)['data']['clinic']
        
        this.isWaitingForCode = true;

        return;
      }
    )
  }

  public recoverPassword(): void{

    const getCode = (document.getElementById('code_verify') as HTMLInputElement).value;

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

  stepManager() {
    const multiStepForm = document.querySelector("[data-multi-step]");
    const dataMultiStep = document.querySelector("[data-each-step]");

    if (multiStepForm && dataMultiStep) {

      const formSteps = [...Array.from(multiStepForm.querySelectorAll("[data-step]"))];
      const eachSteps = [...Array.from(dataMultiStep.querySelectorAll("[each-step]"))];

      let currentStep = formSteps.findIndex((step) => {
        return step.classList.contains("active");
      });

      if (currentStep < 0) {
        currentStep = 0;
        showCurrentStep();
      }

      multiStepForm.addEventListener("click", (event) => {

        let incromentor
        if (event.target) {
          if ((event.target as Element).matches("[next-step]")) {
            incromentor = 1
          }
        }
        
        if (incromentor == null) return;
        
        const inputs = [...Array.from(formSteps[currentStep].querySelectorAll("input"))];
        const allvalid = inputs.every((input) => input.reportValidity());
        if (allvalid) {
          currentStep += incromentor;
          showCurrentStep();
        }
      });

      function showCurrentStep() {
        formSteps.forEach((step, index) => {
          step.classList.toggle("active", index === currentStep);
        });
        eachSteps.forEach((step, index) => {
          step.classList.toggle("en-progreso", index === currentStep);
        });
      }
      
    }
  
  }

}
