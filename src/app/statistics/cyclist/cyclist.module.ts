import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CyclistPageRoutingModule } from './cyclist-routing.module';

import { CyclistPage } from './cyclist.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CyclistPageRoutingModule,
    ChartsModule
  ],
  declarations: [CyclistPage]
})
export class CyclistPageModule {}
