import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicTransportPageRoutingModule } from './public-transport-routing.module';

import { PublicTransportPage } from './public-transport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicTransportPageRoutingModule
  ],
  declarations: [PublicTransportPage]
})
export class PublicTransportPageModule {}
