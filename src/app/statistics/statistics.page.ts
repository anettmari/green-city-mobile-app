import { Component, OnInit } from '@angular/core';
import { listChanges } from '@angular/fire/database';
import { TrafficDataService } from '../services/traffic-data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  traffic: string;
  startDate: string;
  endDate: string;

  trafficData: any[] = [];

  date: any[] = [];
  pedestrianDir0: any[] = [];
  pedestrianDir1: any[] = [];
  cyclistDir0: any[] = [];
  cyclistDir1: any[] = [];
  busDir0: any[] = [];
  busDir1: any[] = [];
  trolleyDir0: any[] = [];
  trolleyDir1: any[] = [];
  carDir0: any[] = [];
  carDir1: any[] = [];

  constructor(private trafficDataService: TrafficDataService) {
    this.traffic = "pedestrian";
   }

  ngOnInit() {
    this.startDate = new Date("2020.08.10").toISOString();
    this.endDate = new Date("2020.08.15").toISOString();

    this.splitDataToRows().then(() => {
      this.splitDataToArrays();
    }); 
  }

  splitDataToArrays() {
      this.trafficData = this.filterByDate(this.trafficData, new Date(this.startDate), new Date(this.endDate));
      this.trafficData.forEach( e => {
          const row = e.split(';');
          for(let i=0;i<row.length;i++){
            if (i == 0) {
              this.date.push(row[i]);
            }
            if (i == 1) {
              this.carDir0.push(row[i]);
            }
            if (i == 2) {
              this.carDir1.push(row[i]);
            }
            if (i == 3) {
              this.cyclistDir0.push(row[i]);
            }
            if (i == 4) {
              this.cyclistDir1.push(row[i]);
            }
            if (i == 5) {
              this.pedestrianDir0.push(row[i]);
            }
            if (i == 6) {
              this.pedestrianDir1.push(row[i]);
            }
            if (i == 7) {
              this.busDir0.push(row[i]);
            }
            if (i == 8) {
              this.busDir1.push(row[i]);
            }
            if (i == 9) {
              this.trolleyDir0.push(row[i]);
            }
            if (i == 10) {
              this.trolleyDir1.push(row[i]);
            }
          }
      });
  }

  splitDataToRows() {
    return new Promise((resolve, reject) => {
      this.trafficDataService
        .getTrafficData()
        .then((data: string) => {
          const list = data.split("\n");
          list.forEach((e) => {
            this.trafficData.push(e);
          });
          resolve();
        });
    });
  }

  filterByDate(data: string[], startDate: Date, endDate: Date): string[] {
    let selectedDate =  new Array<string>();
    data.shift();
    data.forEach(e => {
      const row = e.split(';');
          for(let i=0;i<row.length;i++){
            if (i == 0) {
              if(new Date(row[i]) >= startDate && new Date(row[i]) <= endDate){
                selectedDate.push(e);
              }
            }
          }
    });
    return selectedDate;
  }
}
