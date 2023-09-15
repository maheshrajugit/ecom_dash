import { Component } from '@angular/core';



interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})


export class OverviewComponent {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  public statList:any = [
    {icon:"../../../assets/sales-stat.svg",name:"Total Sales", value:"₹ 2,43,560", avg:7.15, gradient:'linear-gradient(180deg, #9d50bb 0%, #6e48aa 100%)'},
    {icon:"../../../assets/your-orders-icon.svg",name:"Total Orders", value:"1,760", avg:5.24, gradient:'linear-gradient(177deg, #F5AF19 -1.4%, #F12711 97.54%)'},
    {icon:"../../../assets/total-users-icon.svg",name:"Total Users", value:"90,435", avg:-2.15, gradient:'linear-gradient(180deg, #0082C8 0%, #5B86E5 100%)'},
  ] ;

  constructor()
  {


  }

  ngOnInit()
  {

  }

  printPage()
  {
    console.log("print");
    
    // let main = document.getElementsByClassName("overview-main")[0].innerHTML;
    // console.log(main);
    // const originalContents = document.body.innerHTML;

  // document.body.innerHTML = main;
  window.print();
  // document.body.innerHTML = originalContents;
  window.location.reload();
    
  }

  refresh()
  {
    window.location.reload();
  }

  }
