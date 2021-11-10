import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPortalPageRoutingModule } from './admin-portal-routing.module';

import { AdminPortalPage } from './admin-portal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPortalPageRoutingModule
  ],
  declarations: [AdminPortalPage]
})
export class AdminPortalPageModule {}
