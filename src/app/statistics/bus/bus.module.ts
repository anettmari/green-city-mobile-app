import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusPageRoutingModule } from './bus-routing.module';

import { BusPage } from './bus.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusPageRoutingModule,
    ChartsModule
  ],
  declarations: [BusPage]
})
export class BusPageModule {}
