import { Component, Input } from '@angular/core';

@Component({
  selector: 'step-by-step',
  templateUrl: './step_by_step.component.html',
  styleUrls: ['./step_by_step.component.css'],
})
  
export class StepByStepComponent { 
  @Input() stepNumber: string = '';
  @Input() stepName: string = '';
  @Input() stepStatus: string = '';
}
