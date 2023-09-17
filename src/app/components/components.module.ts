import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { NgChartsModule } from 'ng2-charts';
import { HorBarGraphComponent } from './hor-bar-graph/hor-bar-graph.component';
import { TableComponent } from './table/table.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TopSellingProductsComponent } from './top-selling-products/top-selling-products.component';
import { OverlayDailogComponent } from './overlay-dailog/overlay-dailog.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { GalleryModule } from 'ng-gallery';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';


import {AsyncPipe} from '@angular/common';
import { OverlayEditProductsComponent } from './overlay-edit-products/overlay-edit-products.component';

@NgModule({
  declarations: [
    LineGraphComponent,
    HorBarGraphComponent,
    TableComponent,
    TopSellingProductsComponent,
    OverlayDailogComponent,
    
    GalleryViewComponent,
         OverlayEditProductsComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    FormsModule,
    GalleryModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatAutocompleteModule,
    MatSortModule, 
    MatPaginatorModule,
    MatIconModule,
    MatProgressBarModule,
    AsyncPipe
  ],
  exports: [
    LineGraphComponent,
    GalleryViewComponent,
    HorBarGraphComponent,
    NgChartsModule,
    OverlayDailogComponent,
    OverlayEditProductsComponent,
    TableComponent,
    MatIconModule,
    TopSellingProductsComponent,
    MatAutocompleteModule,
    AsyncPipe,
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,MatProgressBarModule
  ]
})
export class ComponentsModule { }
