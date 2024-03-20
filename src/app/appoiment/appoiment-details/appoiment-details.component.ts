import { Component, OnInit } from '@angular/core';
import { AppoimentsService } from '../appoiment.service';
import { ActivatedRoute } from '@angular/router';
import { Appoiment } from 'src/data/cita';

@Component({
  selector: 'app-appoiment-details',
  templateUrl: './appoiment-details.component.html',
  styleUrls: ['./appoiment-details.component.css'],
})
export class AppoimentDetailsComponent implements OnInit{


  appoiment!: Appoiment

  constructor(
    private readonly appoManager: AppoimentsService,
    private readonly activateRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.loadActivePerson()
  }

  public loadActivePerson(): void {
    this.activateRoute.params.subscribe(
      params => {
        const appo_id = params['appo_id']
        if( appo_id ){
          this.appoManager.getAppoimentsByCI(appo_id).subscribe(
            data => this.appoiment = data
          )
        }
      }
    )
  }

}
