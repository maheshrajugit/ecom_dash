import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss']
})
export class DashHomeComponent {

  panelOpenState = false;

  public selected_nav:any = 'dashboard';
  public DashnavItems: any = [
    {
      icon: '../assets/home-icon',
      title:"dashboard",
      to:'home'
    },
    {
      icon: '../assets/w-management-icon',
      title:"website management",
      to:'sitemanagement',
      childs:[
       
        {title:"banner ads",to:"banners"},
        {title:"shopping categories",to:"categories"},
        {title:"collections",to:"collections"},
        {title:"Filters",to:"filters"},
        {title:"Pages",to:"pages"},
      ]
    },
    {
      icon: '../assets/users-icon',
      title:"manage users",
      to:'users',
      childs:[
        {title:"Staff",to:"staff"},
        {title:"Customers",to:"customers"}
      ]
    },
  ];

  public ManagenavItems: any = [
    {
      icon: '../assets/home-icon',
      title:"Inventory Management",
      to:'inventory'
    },
    {
      icon: '../assets/w-management-icon',
      title:"Orders / Sales",
      to:'sitemanagement',
      childs:[
       
        {title:"banner ads",to:"banners"},
        {title:"shopping categories",to:"categories"},
        {title:"collections",to:"collections"},
        {title:"Filters",to:"filters"},
        {title:"Pages",to:"pages"},
      ]
    },
    {
      icon: '../assets/users-icon',
      title:"Invoices",
      to:'users',
    },
    {
      icon: '../assets/w-management-icon',
      title:"Logistics / Tracking",
      to:'sitemanagement',
      childs:[
       
        {title:"banner ads",to:"banners"},
        {title:"shopping categories",to:"categories"},
        {title:"collections",to:"collections"},
        {title:"Filters",to:"filters"},
        {title:"Pages",to:"pages"},
      ]
    },
    {
      icon: '../assets/users-icon',
      title:"Video Appointments",
      to:'users',
    },
    {
      icon: '../assets/users-icon',
      title:"Reels Content",
      to:'users',
    },
    {
      icon: '../assets/w-management-icon',
      title:"Discount Coupons",
      to:'sitemanagement',
    },
    {
      icon: '../assets/users-icon',
      title:"Referral Program",
      to:'users',
    },
    
  ];

  public ClientnavItems: any = [
    {
      icon: '../assets/home-icon',
      title:"Support",
      to:'home'
    },
    {
      icon: '../assets/w-management-icon',
      title:"Reviews Management",
      to:'sitemanagement',
      childs:[
       
        {title:"banner ads",to:"banners"},
        {title:"shopping categories",to:"categories"},
        {title:"collections",to:"collections"},
        {title:"Filters",to:"filters"},
        {title:"Pages",to:"pages"},
      ]
    },
    {
      icon: '../assets/users-icon',
      title:"Send Email",
      to:'users',
      childs:[
        {title:"Staff",to:"staff"},
        {title:"Customers",to:"customers"}
      ]
    },
    {
      icon: '../assets/w-management-icon',
      title:"Send WhatsApp Updates",
      to:'sitemanagement',
      childs:[
       
        {title:"banner ads",to:"banners"},
        {title:"shopping categories",to:"categories"},
        {title:"collections",to:"collections"},
        {title:"Filters",to:"filters"},
        {title:"Pages",to:"pages"},
      ]
    },
    {
      icon: '../assets/transaction-icon',
      title:"Transactions",
      to:'users',
      childs:[
        {title:"Staff",to:"staff"},
        {title:"Customers",to:"customers"}
      ]
    },
  ];

  public AccountnavItems: any = [
    {
      icon: '../assets/help-icon',
      title:"Help",
      to:'home'
    },
    
    {
      icon: '../assets/logout-icon',
      title:"Logout",
      to:'logout',
    },
  ];

  public showFiller: boolean = false;
  public showSearch:boolean = false;

  constructor(private router:Router, private route: ActivatedRoute)
  {

  }

  ngOnInit()
  {
    const paramValue = this.route.snapshot.params['page'];
    console.log(paramValue);

    this.DashnavItems.map((x:any)=>{
      if(x.to==paramValue)
      {
        this.selected_nav = x.title;
      }
    })
    
  }

  click_search()
  {
    this.showSearch = !this.showSearch;
    console.log(this.showSearch);
    
  }

  select_nav_item(title:any, to:any)
  {
    this.selected_nav = title;
    this.router.navigateByUrl('dashboard/'+to);
  }



}
