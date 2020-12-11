import { Component, OnInit } from "@angular/core";
import { AirPollutionDataService } from "../services/air-pollution-data.service";

@Component({
  selector: "app-air-pollution",
  templateUrl: "./air-pollution.page.html",
  styleUrls: ["./air-pollution.page.scss"],
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

  constructor(private airPollutionDataService: AirPollutionDataService) {}

  ngOnInit() {
    this.splitDataToRows().then(() => {
      this.splitDataToArrays();
    });
  }

  splitDataToArrays() {
    this.airPollutionData.shift();
    this.airPollutionData.forEach((e) => {
      const row = e.split(",");
      for (let i = 0; i < row.length; i++) {
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
  }

  splitDataToRows() {
    return new Promise((resolve, reject) => {
      this.airPollutionDataService
        .getAirPollutionData()
        .then((data: string) => {
          const list = data.split("\n");
          list.forEach((e) => {
            this.airPollutionData.push(e);
          });
          resolve();
        });
    });
  }

  chartOptions = {
    responsive: true,
  };
  chartData = [
    { data: this.coData, label: "Co" },
    { data: this.so2Data, label: "So2" },
  ];
  chartLabels = this.date;

  chartOptions3 = {
    responsive: true,
  };
  chartData3 = [
    { data: this.no2Data, label: "No2" },
    { data: this.o3Data, label: "O3" },
  ];
  chartLabels3 = this.date;

  chartOptions2 = {
    responsive: true,
  };

  chartData2 = [
    { data: this.pm25Data, label: "PM2.5" },
    { data: this.pm10Data, label: "PM10" },
  ];
  chartLabels2 = this.date;
}
