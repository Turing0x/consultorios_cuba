import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainInfoTopComponent } from './main-info-top/main-info-top.component';
import { BoxesComponent } from './boxes/boxes.component';
import { SecondInfoComponent } from './second-info/second-info.component';
import { BuildObjectiveComponent } from './build-objective/build-objective.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    BuildObjectiveComponent,
    MainInfoTopComponent,
    SecondInfoComponent,
    ContactUsComponent,
    HeaderComponent,
    BoxesComponent,
    CommonModule
  ],
  templateUrl: './main_page.component.html',
  styleUrls: ['./main_page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
  
export class MainPageComponent { }
