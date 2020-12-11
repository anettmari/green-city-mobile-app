import { Component, OnInit } from '@angular/core';
import { StatisticsPage } from '../statistics.page';

@Component({
  selector: 'app-trolley',
  templateUrl: './trolley.page.html',
  styleUrls: ['./trolley.page.scss'],
})
export class TrolleyPage implements OnInit {
  trolleyDir0: any[] = this.statisticPage.trolleyDir0;
  trolleyDir1: any[] = this.statisticPage.trolleyDir1;
  date: any[] = this.statisticPage.date;

  constructor(private statisticPage: StatisticsPage) { }

  ngOnInit() {
  }

  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: this.trolleyDir0, label: 'Troli - Szeged felé' },
    { data: this.trolleyDir1, label: 'Troli - Újszeged felé' }
  ];
  chartColors = [
    { backgroundColor: '#301c0a'},
    { backgroundColor: '#e1b43d'},
  ]
  chartLabels = this.date;
}
