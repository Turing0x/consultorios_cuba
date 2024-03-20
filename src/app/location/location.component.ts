import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { Province, Town } from 'src/data/province';
import { LocationService } from './location.services';
import { Router } from '@angular/router';

@Component({
  selector: 'location-page',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
  
export class LocationComponent implements OnInit{

  selected_province: string = 'Select a province';

  province_list: Province[] = [];
  town: Town = new Town();
  
  constructor(
    public locationServices: LocationService,
    private router: Router,
  ){ }

  ngOnInit(): void {
    this.locationServices.getAllProvinces().subscribe(
      res => this.province_list = res.data
    );
  }

  navigateTo( route: string ){
    this.router.navigate([route]);
  }

  create_location(): void {

    if (this.selected_province === 'Select a province') {
      Swal.fire(
        'Wrong information',
        `Before that, you should select a province of the list`,
        'error'
      );
      return;
    }

    if (this.town.nombre.length === 0) {
      Swal.fire(
        'Wrong information',
        `You should write the name of town to continue`,
        'error'
      );
      return;
    }

    this.locationServices.createProviceAndTown({
      nombre_p: this.selected_province,
      nombre_m: this.town.nombre
    }).subscribe(
      cli => {
        Swal.fire(
          'Action completed!',
          `The location has been successfully registered!`,
          'success'
        )
      }
    );
  }

  onSelectedProvince(nombre: string): void{
    this.selected_province = nombre;
  }
  
}
