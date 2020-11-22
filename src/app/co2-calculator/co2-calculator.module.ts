import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Co2CalculatorPageRoutingModule } from './co2-calculator-routing.module';

import { Co2CalculatorPage } from './co2-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Co2CalculatorPageRoutingModule
  ],
  declarations: [Co2CalculatorPage]
})
export class Co2CalculatorPageModule {}
