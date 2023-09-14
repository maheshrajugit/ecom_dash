import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { NgChartsModule } from 'ng2-charts';
import { HorBarGraphComponent } from './hor-bar-graph/hor-bar-graph.component';


@NgModule({
  declarations: [
    LineGraphComponent,
    HorBarGraphComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [
    LineGraphComponent,
    HorBarGraphComponent,
    NgChartsModule
  ]
})
export class ComponentsModule { }
