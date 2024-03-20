import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserManagerComponent } from './user-manager/user-manager.component';
import { AddPersonFormComponent } from './add-person-form/add-person-form.component';
import { DetailsEditFormComponent } from './details-edit-form/details-edit-form.component';
import { UserEditComponent } from './edit/edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { 
    path: '' ,
    children: [
      { path: 'listcomplete', component: UserManagerComponent },
      { path: 'create', component: AddPersonFormComponent },
      { path: 'details/:ci', component: DetailsEditFormComponent },
      { path: 'edit/:ci', component: UserEditComponent },
      { path: 'profile/:reg_med', component: UserProfileComponent },
      { path: '**', redirectTo: 'listcomplete' },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
  
export class UsersRoutingModule { }
