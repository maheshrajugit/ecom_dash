import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent {

  title = 'ng2-charts-demo';
  public innerWidth:any;

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'September',
      'October',
      'November',
      'December',
      'January',
      'February',
      
    ],
    datasets: [
      {
        data: [ 40, 59, 60, 71, 56, 55, 70 ],
        label: 'Sales',
        fill: true,
        tension: 0.5,
        borderColor: 'rgba(0,0,0,0.9)',
        backgroundColor: '#8360c370'
      },
      {
        data: [ 20, 79, 40, 51, 76, 35, 55 ],
        label: 'Revenue',
        fill: true,
        tension: .5,
        borderColor: 'rgba(0,0,0,0.9)',
        backgroundColor: '#2ebf91a0'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    }

  };
  public lineChartLegend = true;


  constructor()
  {

  }

  ngOnInit()
  {
    this.innerWidth = window.innerWidth;
  }



}
