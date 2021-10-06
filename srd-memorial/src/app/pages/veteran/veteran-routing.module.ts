import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeteranPage } from './veteran.page';

const routes: Routes = [
  {
    path: '',
    component: VeteranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeteranPageRoutingModule {}
