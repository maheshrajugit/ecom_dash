import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-hor-bar-graph',
  templateUrl: './hor-bar-graph.component.html',
  styleUrls: ['./hor-bar-graph.component.scss']
})
export class HorBarGraphComponent {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Wedding', 'Casuals', 'Festive', 'Parties', 'Silk', 'Formal' ],
    datasets: [
      { data: [ 650, 590, 480, 310, 260, 250, 100 ], label: 'Orders' },
      
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    indexAxis: 'y',
    elements: {
      
      bar: {
        borderRadius:32,
        backgroundColor: '#6E48AA',
      }
    },
  };
}
