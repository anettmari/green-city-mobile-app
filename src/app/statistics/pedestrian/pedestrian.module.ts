import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedestrianPageRoutingModule } from './pedestrian-routing.module';

import { PedestrianPage } from './pedestrian.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedestrianPageRoutingModule,
    ChartsModule
  ],
  declarations: [PedestrianPage]
})
export class PedestrianPageModule {}
