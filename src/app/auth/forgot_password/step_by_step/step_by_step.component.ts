import { Component, OnInit } from '@angular/core';
import { CurrentStep } from 'src/models/current_step';
import { StepService } from 'src/services/step.service';

@Component({
  selector: 'step-by-step',
  templateUrl: './step_by_step.component.html',
  styleUrls: ['./step_by_step.component.css'],
})
  
export class StepByStepComponent implements OnInit { 

  steps_list: CurrentStep[] = []

  constructor(
    private stepsService: StepService
  ) { }

  ngOnInit(): void {
    this.stepsService.allSteps.subscribe(
      list => {
        this.steps_list = list
      }
    )
  }

}
