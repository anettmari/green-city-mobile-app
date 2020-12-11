import { Component, OnInit } from "@angular/core";
import { Transports } from "../model/transports";
import { Co2UserInputDataService } from "../services/co2-user-input-data.service";
import { TransportType } from '../enums/transport-type';

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  transport: Transports;
  loading: boolean;

  constructor(private co2UserInputDataService: Co2UserInputDataService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.loading = true;
    this.co2UserInputDataService.getUserCalculatedData().then((data: Transports) => {
      this.transport = data;
    }).finally(() => {
      this.loading = false;
    });
  }

  calculate(value: number, type: string): string {
    return this.co2UserInputDataService.calculateCo2Emission(value, TransportType[type]).toFixed(2);
  }
}
