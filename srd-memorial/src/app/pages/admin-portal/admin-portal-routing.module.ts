import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPortalPage } from './admin-portal.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPortalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPortalPageRoutingModule {}
