import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  traffic: string;

  constructor() {
    this.traffic = "pedestrian";
   }

  ngOnInit() {
  }

}
