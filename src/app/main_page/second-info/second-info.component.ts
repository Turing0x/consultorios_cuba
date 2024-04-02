import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'second-info',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './second-info.component.html',
  styleUrls: ['./second-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
  
export class SecondInfoComponent { }
