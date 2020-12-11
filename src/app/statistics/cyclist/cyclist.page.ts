import { Component, OnInit } from '@angular/core';
import { StatisticsPage } from '../statistics.page';

@Component({
  selector: 'app-cyclist',
  templateUrl: './cyclist.page.html',
  styleUrls: ['./cyclist.page.scss'],
})
export class CyclistPage implements OnInit {

  cyclistDir0: any[] = this.statisticPage.cyclistDir0;
  cyclistDir1: any[] = this.statisticPage.cyclistDir1;
  date: any[] = this.statisticPage.date;

  constructor(private statisticPage: StatisticsPage) { }

  ngOnInit() {
  }

  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: this.cyclistDir0, label: 'Biciklisek - Szeged felé' },
    { data: this.cyclistDir1, label: 'Biciklisek - Újszeged felé' }
  ];
  chartColors = [
    { backgroundColor: '#fcea86'},
    { backgroundColor: '#ed5a62'},
  ]
  chartLabels = this.date;
}
