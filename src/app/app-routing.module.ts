import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { MainPageComponent } from './main_page/main_page.component';

const routes: Routes = [
  { 
    path: '',
    component: MainPageComponent
  },
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
  // { 
  //   path: 'dashboard',
  //   loadChildren: () => 
  //     import('././appoiment/appoiment.module')
  //       .then( m => m.AppoimentModule )
  // },
  { 
    path: 'location',
    component: LocationComponent
  },
  {
    path: '**', redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
