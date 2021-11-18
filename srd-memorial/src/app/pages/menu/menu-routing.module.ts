import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPortalPageModule } from '../admin-portal/admin-portal.module';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: '',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule),

      },
      {
        path: 'popover',
        loadChildren: () => import('../popover/popover.module').then( m => m.PopoverPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'veteran',
        loadChildren: () => import('../veteran/veteran.module').then( m => m.VeteranPageModule)
      },
      {
        path: 'admin-portal',
        loadChildren: () => import('../admin-portal/admin-portal.module').then( m => m.AdminPortalPageModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
