import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrolleyPageRoutingModule } from './trolley-routing.module';

import { TrolleyPage } from './trolley.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrolleyPageRoutingModule,
    ChartsModule
  ],
  declarations: [TrolleyPage]
})
export class TrolleyPageModule {}
