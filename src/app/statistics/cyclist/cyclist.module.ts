import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CyclistPageRoutingModule } from './cyclist-routing.module';

import { CyclistPage } from './cyclist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CyclistPageRoutingModule
  ],
  declarations: [CyclistPage]
})
export class CyclistPageModule {}
