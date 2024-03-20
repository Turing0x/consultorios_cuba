import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UserManagerService } from '../user-manager/user-manager.service';
import { Person } from 'src/data/person';

@Component({
  selector: 'app-add-person-form',
  templateUrl: './add-person-form.component.html',
  styleUrls: ['./add-person-form.component.css']
})
export class AddPersonFormComponent {

  person: Person = new Person()

  errorGenderMessage: String = '';
  errorAgeMessage: String = '';

  withErrors: boolean = true;

  constructor(
    private userManagerService: UserManagerService,
    private router: Router,
  ){}

  validateGenderField() {
    if (this.person.sex === '') {
      this.errorGenderMessage = 'Please select a gender';
      this.withErrors = true;
    } else{
      this.errorGenderMessage = '';
      this.withErrors = false;
    }
  }

  validateAgeField() {
    if (this.person.age === 0) {
      this.errorAgeMessage = 'Incorrect age';
      this.withErrors = true;
    } else {
      this.errorAgeMessage = '';
      this.withErrors = false;
    }
  }

  navigateTo( route: string ){
    this.router.navigate([route]);
  }

  onSubmit(){

    this.validateGenderField()
    this.validateAgeField()

    if( !this.withErrors ){
      this.userManagerService.saveOnePerson(this.person).subscribe(
        per => {
          this.person = per
          Swal.fire(
            'Action completed!',
            `The perseon has been successfully registered!`,
            'success'
          )
          this.navigateTo('/person/listcomplete')
        }
      )
    }
  }

}
