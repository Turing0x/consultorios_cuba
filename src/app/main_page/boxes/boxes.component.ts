import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-boxes',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
  
export class BoxesComponent { }
