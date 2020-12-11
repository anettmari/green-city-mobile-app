import { Component, OnInit } from "@angular/core";
import { Co2UserInputDataService } from '../services/co2-user-input-data.service';
import { TransportType } from '../enums/transport-type';

@Component({
  selector: "app-co2-calculator",
  templateUrl: "./co2-calculator.page.html",
  styleUrls: ["./co2-calculator.page.scss"],
})
export class Co2CalculatorPage implements OnInit {
  carInput: number;
  calculatedCarData: number;
  
  motorInput: number;
  calculatedMotorData: number;

  busInput: number;
  calculatedBusData: number;

  tramInput: number;
  calculatedTramData: number;

  carButtonClicked: boolean = false;
  motorButtonClicked: boolean = false;
  busButtonClicked: boolean = false;
  tramButtonClicked: boolean = false;

  treeNeededCarInput: number;
  treeNeededMotorInput: number;
  treeNeededBusInput: number;
  treeNeededTramInput: number;


  constructor(private co2UserInputDataService: Co2UserInputDataService) {}

  ngOnInit() {}

  ionViewWillLeave(){
    this.carButtonClicked = false;
    this.motorButtonClicked = false;
    this.busButtonClicked= false;
    this.tramButtonClicked = false;
  }

  carCo2Calculation() {
    this.co2UserInputDataService.uploadCarData(this.carInput);
    if (this.carInput != null && this.carInput > 0) {
      this.calculatedCarData = this.co2UserInputDataService.calculateCo2Emission(this.carInput, TransportType.CAR);
      this.treeNeededCarInput = this.calculatedCarData / 0.06;
      this.carInput = null;
      this.carButtonClicked = true;
    } else {
      return;
    }
  }

  motorCo2Calculation() {
    this.co2UserInputDataService.uploadMotorData(this.motorInput);
    if (this.motorInput != null && this.motorInput > 0) {
      this.calculatedMotorData = this.co2UserInputDataService.calculateCo2Emission(this.motorInput, TransportType.MOTOR);
      this.treeNeededMotorInput = this.calculatedMotorData / 0.06;
      this.motorInput = null;
      this.motorButtonClicked = true;
    } else {
      return;
    }
  }

  busCo2Calculation() {
    this.co2UserInputDataService.uploadBusData(this.busInput);
    if (this.busInput != null && this.busInput > 0) {
      this.calculatedBusData = this.co2UserInputDataService.calculateCo2Emission(this.busInput, TransportType.BUS);
      this.treeNeededBusInput = this.calculatedBusData / 0.06;
      this.busInput = null;
      this.busButtonClicked = true;
    } else {
      return;
    }
  }

  tramCo2Calculation() {
    this.co2UserInputDataService.uploadTramData(this.tramInput);
    if (this.tramInput != null && this.tramInput > 0) {
      this.calculatedTramData = this.co2UserInputDataService.calculateCo2Emission(this.tramInput, TransportType.TRAM);
      this.treeNeededTramInput = this.calculatedTramData / 0.06;
      this.tramInput = null;
      this.tramButtonClicked = true;
    } else {
      return;
    }
  }

}
