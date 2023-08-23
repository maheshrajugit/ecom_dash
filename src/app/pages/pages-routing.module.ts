import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { DashHomeComponent } from './dash-home/dash-home.component';

const routes: Routes = [

  { path: 'home', component: DashHomeComponent },

];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
