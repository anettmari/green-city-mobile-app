import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirPollutionPageRoutingModule } from './air-pollution-routing.module';

import { AirPollutionPage } from './air-pollution.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirPollutionPageRoutingModule,
    ChartsModule
  ],
  declarations: [AirPollutionPage]
})
export class AirPollutionPageModule {


}
