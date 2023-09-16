import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { NgChartsModule } from 'ng2-charts';
import { HorBarGraphComponent } from './hor-bar-graph/hor-bar-graph.component';
import { TableComponent } from './table/table.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TopSellingProductsComponent } from './top-selling-products/top-selling-products.component';
import { OverlayDailogComponent } from './overlay-dailog/overlay-dailog.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LineGraphComponent,
    HorBarGraphComponent,
    TableComponent,
    TopSellingProductsComponent,
    OverlayDailogComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    FormsModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,
    MatIconModule
  ],
  exports: [
    LineGraphComponent,
    HorBarGraphComponent,
    NgChartsModule,
    OverlayDailogComponent,
    TableComponent,
    TopSellingProductsComponent,
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule
  ]
})
export class ComponentsModule { }
