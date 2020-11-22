import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatisticsPageRoutingModule } from './statistics-routing.module';

import { StatisticsPage } from './statistics.page';
import { PedestrianPage } from './pedestrian/pedestrian.page';
import { CyclistPage } from './cyclist/cyclist.page';
import { PublicTransportPage } from './public-transport/public-transport.page';
import {  CarPage } from './car/car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatisticsPageRoutingModule
  ],
  declarations: [StatisticsPage, PedestrianPage, CyclistPage, PublicTransportPage, CarPage]
})
export class StatisticsPageModule {}
