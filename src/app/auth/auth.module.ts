import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './forgot_password/forgot_password.component';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
