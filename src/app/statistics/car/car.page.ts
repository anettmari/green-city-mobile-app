import { Component, OnInit } from '@angular/core';
import { StatisticsPage } from '../statistics.page';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  carDir0: any[] = this.statisticPage.carDir0;
  carDir1: any[] = this.statisticPage.carDir1;
  date: any[] = this.statisticPage.date;

  constructor(private statisticPage: StatisticsPage) { }

  ngOnInit() {
  }

  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: this.carDir0, label: 'Autósok - Szeged felé' },
    { data: this.carDir1, label: 'Autósok - Újszeged felé' }
  ];
  chartColors = [
    { backgroundColor: '#6ecde2'},
    { backgroundColor: '#e1642d'},
  ]
  chartLabels = this.date;
}
