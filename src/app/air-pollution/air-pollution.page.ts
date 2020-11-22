import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AirPollutionService } from '../services/air-pollution.service';

@Component({
  selector: 'app-air-pollution',
  templateUrl: './air-pollution.page.html',
  styleUrls: ['./air-pollution.page.scss'],
})
export class AirPollutionPage implements OnInit {

  airPollutionData: any[] = [];

  date: any[] = [];
  pm25Data: any[] = [];
  pm10Data: any[] = [];
  o3Data: any[] = [];
  no2Data: any[] = [];
  so2Data: any[] = [];
  coData: any[] = [];

  constructor(private airPollutionService: AirPollutionService) {}

  ngOnInit() {
    this.getData();
    this.splitData();
  }

  splitData() {
    this.airPollutionService.getInfo().then((data: string) => {
      const list = data.split('\n');
      list.shift();
      list.forEach( e => {
          const row = e.split(',');
          for(let i=0;i<row.length;i++){
            if (i == 0) {
              this.date.push(row[i]);
            }
            if (i == 1) {
              this.pm25Data.push(row[i]);
            }
            if (i == 2) {
              this.pm10Data.push(row[i]);
            }
            if (i == 3) {
              this.o3Data.push(row[i]);
            }
            if (i == 4) {
              this.no2Data.push(row[i]);
            }
            if (i == 5) {
              this.so2Data.push(row[i]);
            }
            if (i == 6) {
              this.coData.push(row[i]);
            }
          }
      });
      
    });
  }

  getData() {
    this.airPollutionService.getInfo().then((data: string) => {
      const list = data.split('\n');
      list.forEach( e => {
        this.airPollutionData.push(e);
      });
    });
  }

  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: this.coData, label: 'Co' },
    { data: this.so2Data, label: 'So2' },
    { data: this.no2Data, label: 'No2' }
  ];
  chartLabels = this.date;
  

  chartOptions2 = {
    responsive: true
  };

  chartData2 = [
    { data: this.pm25Data, label: 'PM2.5' },
    { data: this.pm10Data, label: 'PM10' }
  ];
  chartLabels2 = this.date;}