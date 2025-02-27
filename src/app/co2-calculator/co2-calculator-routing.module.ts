import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Co2CalculatorPage } from './co2-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: Co2CalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Co2CalculatorPageRoutingModule {}
