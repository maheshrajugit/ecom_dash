import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})


export class OverviewComponent {

  @Output() changePage = new EventEmitter<any>();

  public statList:any = [
    {icon:"../../../assets/sales-stat.svg",name:"Total Sales", value:"₹ 2,43,560", avg:7.15, gradient:'linear-gradient(180deg, #9d50bb 0%, #6e48aa 100%)'},
    {icon:"../../../assets/your-orders-icon.svg",name:"Total Orders", value:"1,760", avg:5.24, gradient:'linear-gradient(177deg, #F5AF19 -1.4%, #F12711 97.54%)'},
    {icon:"../../../assets/total-users-icon.svg",name:"Total Users", value:"90,435", avg:-2.15, gradient:'linear-gradient(180deg, #0082C8 0%, #5B86E5 100%)'},
  ] ;

  public quickCards:any = [
    {
      icon:"../../../assets/quick-inventory.svg",
      title:"inventory",
      to:'inventory',
      bgColor:"linear-gradient(180deg, #0f0c29 0%, #302b63 100%)",
      info: [
        {title:"products",value:"1760"},
        {title:"alerts",value:"2"}
      ]
    },
    {
      icon:"../../../assets/quick-v-shopping.svg",
      title:"Video Shopping",
      bgColor:"linear-gradient(180deg, #1D2671 0%, #C33764 100%)",
      info: [
        {title:"scheduled",value:"25"},
        {title:"today",value:"12"}
      ]
    },
    {
      icon:"../../../assets/quick-logistics.svg",
      title:"Logistics",
      bgColor:" linear-gradient(180deg, #3C3B3F 0%, #605C3C 100%",
      info: [
        {title:"placed",value:"150"},
        {title:"shipping",value:"143"}
      ]
    },
    {
      icon:"../../../assets/quick-support-icon.svg",
      title:"Support",
      bgColor:"linear-gradient(180deg, #0083B0 0%, #000046 100%)",
      info: [
        {title:"queries",value:"2"}
      ]
    },
  ]


  constructor(private router:Router)
  {


  }

  ngOnInit()
  {

  }
  select_quick_card(q:any)
  {
    console.log(q);
    
    if(q.to)
    {
      this.router.navigateByUrl("/dashboard/"+q.to);
      this.changePage.emit(q);
    }
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
