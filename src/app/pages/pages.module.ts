import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashHomeComponent } from './dash-home/dash-home.component';

import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { OverviewComponent } from './overview/overview.component';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { ManageWebsiteComponent } from './manage-website/manage-website.component';
import {MatMenuModule} from '@angular/material/menu';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    LoginPortalComponent,
    PageHeaderComponent,
    DashHomeComponent,
    OverviewComponent,
    InventoryPageComponent,
    ManageWebsiteComponent,
    ManageUsersComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    CdkAccordionModule,
    PagesRoutingModule,
    MatMenuModule,
    ComponentsModule
   
  ],
  exports: [
    LoginPortalComponent,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { 

  


}
