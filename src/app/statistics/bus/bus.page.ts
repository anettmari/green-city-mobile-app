import { Component, OnInit } from '@angular/core';
import { StatisticsPage } from '../statistics.page';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.page.html',
  styleUrls: ['./bus.page.scss'],
})
export class BusPage implements OnInit {

  busDir0: any[] = this.statisticPage.busDir0;
  busDir1: any[] = this.statisticPage.busDir1;
  date: any[] = this.statisticPage.date;
  

  constructor(private statisticPage: StatisticsPage) { }

  ngOnInit() {
  }

  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: this.busDir0, label: 'Busz - Szeged felé' },
    { data: this.busDir1, label: 'Busz - Újszeged felé' }
  ];
  chartColors = [
    { backgroundColor: '#1b496a'},
    { backgroundColor: '#f49e8f'},
  ]
  chartLabels = this.date;

}
