import { Component, OnInit } from '@angular/core';

import { UserManagerService } from '../user-manager/user-manager.service';
import { Doctor } from 'src/data/doctor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
  
export class UserProfileComponent implements OnInit {

  doctor?: Doctor;
  readOnly: boolean = true;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private userManager: UserManagerService
  ){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        const reg_med = params['reg_med']
        if( reg_med ){
          this.userManager.getDoctorByRegNum(reg_med).subscribe(
            data => this.doctor = data.data
          )
        }
      }
    )
  }

}
