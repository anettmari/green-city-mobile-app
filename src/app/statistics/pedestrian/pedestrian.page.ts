import { Component } from '@angular/core';
import { StatisticsPage } from '../statistics.page';

@Component({
  selector: 'app-pedestrian',
  templateUrl: './pedestrian.page.html',
  styleUrls: ['./pedestrian.page.scss'],
})
export class PedestrianPage {
  pedestrianDir0: any[] = this.statisticPage.pedestrianDir0;
  pedestrianDir1: any[] = this.statisticPage.pedestrianDir1;
  date: any[] = this.statisticPage.date;
 
  constructor(private statisticPage: StatisticsPage) { }

  ngOnInit() {
  }

  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: this.pedestrianDir0, label: 'Gyalogosok - Szeged felé' },
    { data: this.pedestrianDir1, label: 'Gyalogosok - Újszeged felé' }
  ];
  chartColors = [
    { backgroundColor: '#c0e2ca'},
    { backgroundColor: '#43a189'},
  ]

  chartLabels = this.date;
}
