import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatisticsPageRoutingModule } from './statistics-routing.module';

import { StatisticsPage } from './statistics.page';
import { PedestrianPage } from './pedestrian/pedestrian.page';
import { CyclistPage } from './cyclist/cyclist.page';
import { BusPage } from './bus/bus.page';
import {  CarPage } from './car/car.page';
import { ChartsModule } from 'ng2-charts';
import { TrolleyPage } from './trolley/trolley.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatisticsPageRoutingModule,
    ChartsModule
  ],
  declarations: [StatisticsPage, PedestrianPage, CyclistPage, BusPage, TrolleyPage, CarPage]
})
export class StatisticsPageModule {}
