import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashHomeComponent } from './dash-home/dash-home.component';

import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {NgxPrintModule} from 'ngx-print';

import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { OverviewComponent } from './overview/overview.component';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { ManageWebsiteComponent } from './manage-website/manage-website.component';
import {MatMenuModule} from '@angular/material/menu';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ComponentsModule } from '../components/components.module';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
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
    ComponentsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxPrintModule
   
  ],
  exports: [
    LoginPortalComponent,
    PagesRoutingModule,
    ComponentsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxPrintModule
  ]
})
export class PagesModule { 

  


}
