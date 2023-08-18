import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExposantPage } from './exposant.page';

const routes: Routes = [
  {
    path: '',
    component: ExposantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExposantPageRoutingModule {}
