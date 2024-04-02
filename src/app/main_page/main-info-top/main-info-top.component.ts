import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'main-info-top',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './main-info-top.component.html',
  styleUrls: ['./main-info-top.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
  
  
export class MainInfoTopComponent { }
