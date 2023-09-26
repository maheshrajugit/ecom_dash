import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';

const routes: Routes = [

  {
    path: 'dashboard/:page',
    component: DashHomeComponent,
    children: [
      { path: 'home', component: DashHomeComponent  },
    ]
  },
  {
    path: 'dashboard/:page/:subpage',
    component: DashHomeComponent,
  }

];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
