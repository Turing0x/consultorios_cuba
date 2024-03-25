import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
  
export class DashboardComponent implements OnInit{ 

  constructor(
    private router: Router,
  ) { }
  
  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);

    this.addHovered()
  }

  patients_list = [
    {
      'news_title': '#01 Estomatología',
      'patient_name': 'David Alberto Herrera',
      'news_date': '02/04/2024'
    },
    {
      'news_title': '#02 Psicología',
      'patient_name': 'Armando Beritán Cruz',
      'news_date': '05/04/2024'
    },
    {
      'news_title': '#03 Sexología',
      'patient_name': 'Denis Rodriguez',
      'news_date': '11/04/2024'
    },
  ]

  navigateTo( route: string ){
    this.router.navigate([route]);
  }

  updateTime(): void {
    const currentDate = new Date(),
    hours = currentDate.getHours(),
    minutes = this.formatTime(currentDate.getMinutes()),
    seconds = this.formatTime(currentDate.getSeconds()),
    formatHours = this.formatTime(((hours + 11) % 12) + 1),
    format = hours < 12 || hours == 24 ? "am" : "pm";
    const timeElement = document.getElementById("time");
    if (timeElement) {
      timeElement.innerHTML = `${formatHours}:${minutes}:${seconds} <small>${format}</small>`;
    }
  }

  formatTime(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

  addHovered() {
    let list = document.querySelectorAll(".navigation li");
    function activeLink(this: any) {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      this.classList.add("hovered");
    }
    list.forEach((item) => {
      item.addEventListener("mouseover", activeLink);
    });
  }

}
