import { Component, OnInit } from '@angular/core';
import { Person } from 'src/data/person';
import { UserManagerService } from './user-manager.service';
import Swal from 'sweetalert2';
import { Appoiment } from 'src/data/cita';
import { Tratamiento } from 'src/data/response';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit{

  person_list: Tratamiento[] = [];

  constructor(
    private userManager: UserManagerService
  ){}

  ngOnInit(): void {
    this.userManager.getAllPersons().subscribe(
      data => this.person_list = data
    )
  }

  public deleteOnePerson( ci: string ): void{

    const swalWithButtoms = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger mx-2'
      }, buttonsStyling: false
    })

    swalWithButtoms.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel this action!',
      reverseButtons: true
    }).then((result => {
      if( result.isConfirmed ){
        // this.userManager.deleteOnePerson(ci).subscribe(
        //   response => {
        //     this.person_list = this.person_list.filter( per => per.ci !== ci  )
        //   }
        // )
      }else if( result.dismiss === Swal.DismissReason.cancel ){
        swalWithButtoms.fire(
          'Cancelled', 'Action cancelled, user remains in the system', 'info'
        )
      }
    }))

  }

}
