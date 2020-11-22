import { Component, OnInit } from "@angular/core";
import { UserCo2CalculatedDataService } from '../services/user-co2-calculated-data.service';

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

  constructor(userCo2CalculatedData: UserCo2CalculatedDataService) {}

  ngOnInit() {}

  ionViewWillLeave(){
    this.carButtonClicked = false;
    this.motorButtonClicked = false;
    this.busButtonClicked= false;
    this.tramButtonClicked = false;
  }

  carCo2Calculation() {
    if (this.carInput != null && this.carInput > 0) {
      this.calculatedCarData = this.carInput * 0.133;
      this.carInput = null;
      this.carButtonClicked = true;
    } else {
      return;
    }
  }

  motorCo2Calculation() {
    if (this.motorInput != null && this.motorInput > 0) {
      this.calculatedMotorData = this.motorInput * 0.094;
      this.motorInput = null;
      this.motorButtonClicked = true;
    } else {
      return;
    }
  }

  busCo2Calculation() {
    if (this.busInput != null && this.busInput > 0) {
      this.calculatedBusData = this.busInput * 0.069;
      this.busInput = null;
      this.busButtonClicked = true;
    } else {
      return;
    }
  }

  tramCo2Calculation() {
    if (this.tramInput != null && this.tramInput > 0) {
      this.calculatedTramData = this.tramInput * 0.042;
      this.tramInput = null;
      this.tramButtonClicked = true;
    } else {
      return;
    }
  }

}
