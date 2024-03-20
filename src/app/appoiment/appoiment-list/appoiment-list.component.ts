import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { Appoiment } from 'src/data/cita';
import { AppoimentsService } from '../appoiment.service';

@Component({
  selector: 'app-appoiment-list',
  templateUrl: './appoiment-list.component.html',
  styleUrls: ['./appoiment-list.component.css'],
})
  
export class AppoimentListComponent implements OnInit {

  appo_list: Appoiment[] = [];

  constructor(
    private appoManager: AppoimentsService
  ){}

  ngOnInit(): void {
    this.appoManager.getAllAppoiments().subscribe(
      data => this.appo_list = data
    )
  }

  public deleteOnePerson( appo_id: string ): void{

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
        this.appoManager.deleteOneAppoiments(appo_id).subscribe(
          response => {
            this.appo_list = this.appo_list.filter( per => per.appo_id !== appo_id  )
          }
        )
      }else if( result.dismiss === Swal.DismissReason.cancel ){
        swalWithButtoms.fire(
          'Cancelled', 'Action cancelled, user remains in the system', 'info'
        )
      }
    }))

  }

}
