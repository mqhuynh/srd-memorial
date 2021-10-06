import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeteranPageRoutingModule } from './veteran-routing.module';

import { VeteranPage } from './veteran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeteranPageRoutingModule
  ],
  declarations: [VeteranPage]
})
export class VeteranPageModule {}
