import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppoimentRoutingModule } from './users-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppoimentDetailsComponent } from './appoiment-details/appoiment-details.component';
import { EditAppoimentComponent } from './edit-appoiment/edit-appoiment.component';
import { AppoimentListComponent } from './appoiment-list/appoiment-list.component';
import { CreateAppoimentComponent } from './create-appoiment/create-appoiment.component';

@NgModule({
  declarations: [
    AppoimentDetailsComponent,
    EditAppoimentComponent,
    AppoimentListComponent,
    CreateAppoimentComponent
  ],
  imports: [
    CommonModule,
    AppoimentRoutingModule,
    FormsModule,
    RouterModule
  ]
})
  
export class AppoimentModule { }
