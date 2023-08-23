import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashHomeComponent } from './dash-home/dash-home.component';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    LoginPortalComponent,
    DashHomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports: [
    LoginPortalComponent,
    PagesRoutingModule
  ]
})
export class PagesModule { 

  


}
