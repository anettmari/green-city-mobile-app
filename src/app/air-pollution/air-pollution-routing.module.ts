import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirPollutionPage } from './air-pollution.page';

const routes: Routes = [
  {
    path: '',
    component: AirPollutionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirPollutionPageRoutingModule {}
