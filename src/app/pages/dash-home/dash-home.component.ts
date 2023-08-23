import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss']
})
export class DashHomeComponent {

  public navItem: any = [
    {
      icon: '<svg viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M22.4645 8.07188L26.6446 11.8922C27.1496 12.3604 27.0055 12.7213 26.3205 12.7213H23.1852V22.7027C23.1852 23.3877 22.6086 24 21.9237 24H16.4821V17.0086C16.4821 16.3236 15.8698 15.7113 15.1848 15.7113H11.7612C11.0762 15.7113 10.4639 16.3236 10.4639 17.0086V24H5.02231C4.33735 24 3.72504 23.3877 3.72504 22.7027V12.7213H0.625439C-0.0595175 12.7213 -0.203658 12.3604 0.301411 11.8922L12.5176 0.793351C13.0227 0.325182 13.8875 0.325182 14.4272 0.793351L17.2016 3.27949V1.29727C17.2016 0.61231 17.8139 0 18.4989 0H21.2018C21.8868 0 22.4633 0.61231 22.4633 1.29727L22.4645 8.07188Z" /></svg>',
      title:"Dashboard"
    }
  ];

  public showFiller: boolean = false;

}