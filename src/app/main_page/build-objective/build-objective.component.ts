import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'build-objective',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './build-objective.component.html',
  styleUrls: ['./build-objective.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
  
export class BuildObjectiveComponent { }
