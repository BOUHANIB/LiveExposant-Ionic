import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExposantPageRoutingModule } from './exposant-routing.module';

import { ExposantPage } from './exposant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExposantPageRoutingModule
  ],
  declarations: [ExposantPage]
})
export class ExposantPageModule {}
