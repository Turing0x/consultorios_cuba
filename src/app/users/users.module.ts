import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { RouterModule } from '@angular/router';
import { AddPersonFormComponent } from './add-person-form/add-person-form.component';
import { DetailsEditFormComponent } from './details-edit-form/details-edit-form.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { UserEditComponent } from './edit/edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AddPersonFormComponent,
    DetailsEditFormComponent,
    UserEditComponent,
    UserManagerComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    RouterModule
  ]
})
  
export class UsersModule { }
