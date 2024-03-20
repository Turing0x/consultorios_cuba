import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { 
    path: 'auth',
    loadChildren: () => 
      import('./auth/auth.module')
        .then( m => m.AuthModule )
  },
  { 
    path: 'person',
    loadChildren: () => 
      import('././users/users.module')
        .then( m => m.UsersModule )
  },
  { 
    path: 'appoiments',
    loadChildren: () => 
      import('././appoiment/appoiment.module')
        .then( m => m.AppoimentModule )
  },
  { 
    path: 'location',
    component: LocationComponent
  },
  {
    path: '**', redirectTo: 'auth'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
