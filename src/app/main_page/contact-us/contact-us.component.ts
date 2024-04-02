import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'contact-us',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
  
export class ContactUsComponent { }
