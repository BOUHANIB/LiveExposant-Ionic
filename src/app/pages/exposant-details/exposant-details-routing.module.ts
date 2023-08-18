import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExposantDetailsPage } from './exposant-details.page';

const routes: Routes = [
  {
    path: '',
    component: ExposantDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExposantDetailsPageRoutingModule {}
