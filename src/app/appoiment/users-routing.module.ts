import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoimentListComponent } from './appoiment-list/appoiment-list.component';
import { CreateAppoimentComponent } from './create-appoiment/create-appoiment.component';
import { AppoimentDetailsComponent } from './appoiment-details/appoiment-details.component';
import { EditAppoimentComponent } from './edit-appoiment/edit-appoiment.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: '' ,
    children: [
      { path: 'listcomplete', component: DashboardComponent },
      { path: 'create', component: CreateAppoimentComponent },
      { path: 'details/:appo_id', component: AppoimentDetailsComponent },
      { path: 'edit/:appo_id', component: EditAppoimentComponent },
      { path: '**', redirectTo: 'listcomplete' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
  
export class AppoimentRoutingModule { }
