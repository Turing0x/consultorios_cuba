import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
  
export class HeaderComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
