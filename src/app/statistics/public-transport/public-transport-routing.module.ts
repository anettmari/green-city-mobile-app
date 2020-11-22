import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicTransportPage } from './public-transport.page';

const routes: Routes = [
  {
    path: '',
    component: PublicTransportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicTransportPageRoutingModule {}
