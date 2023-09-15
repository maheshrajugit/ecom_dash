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
      title:"overview stats",
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
      icon: '../assets/inventory-icon',
      title:"Inventory Management",
      to:'inventory',

      childs:[
       
        {title:"All Products",to:"allproducts"},
        {title:"Product varients",to:"groups"}, 
        {title:"Product Specs",to:"groups"}, 
        {title:"Warehouses",to:"warehouses"}, 
        {title:"Special sales",to:"warehouses"}, 
      ]
    },
    {
      icon: '../assets/sales-icon',
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
      icon: '../assets/invoice-icon',
      title:"Invoices",
      to:'users',
    },
    {
      icon: '../assets/logistics-icon',
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
      icon: '../assets/v-call-icon',
      title:"Video Appointments",
      to:'users',
    },
    {
      icon: '../assets/reels-icon',
      title:"Reels Content",
      to:'reels',
    },
    {
      icon: '../assets/discount-icon',
      title:"Discount Coupons",
      to:'discounts',
    },
    {
      icon: '../assets/ewallet-icon',
      title:"e-Wallet coupons",
      to:'ewallets',
    },
    {
      icon: '../assets/referral-icon',
      title:"Referral Program",
      to:'users',
    },
    
  ];

  public ClientnavItems: any = [
    {
      icon: '../assets/support-icon',
      title:"Support",
      to:'home'
    },
    {
      icon: '../assets/reviews-icon',
      title:"Reviews Management",
      to:'reviews',
    },
    {
      icon: '../assets/email-icon',
      title:"Send Email",
      to:'email',
      childs:[
        {title:"Staff",to:"staff"},
        {title:"Customers",to:"customers"}
      ]
    },
    {
      icon: '../assets/whatsapp-icon',
      title:"Send WhatsApp Updates",
      to:'whatsapp',
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
      to:'transactions',
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
      to:'help'
    },
    
    {
      icon: '../assets/logs-icon',
      title:"Logs",
      to:'logs'
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
    var found = false;
    this.DashnavItems.map((x:any)=>{
      if(x.to==paramValue)
      {
        found = true;
        this.selected_nav = x.title;
      }
      
    });

    if(found == false)
    {
      this.ManagenavItems.map((x:any)=>{
        if(x.to==paramValue)
        {
          found = true;
          this.selected_nav = x.title;
        }
        
      });
    }
    else if (found == false)
    {
      this.ClientnavItems.map((x:any)=>{
        if(x.to==paramValue)
        {
          found = true;
          this.selected_nav = x.title;
        }
        
      });
    }
    else 
    {
      this.AccountnavItems.map((x:any)=>{
        if(x.to==paramValue)
        {
          found = true;
          this.selected_nav = x.title;
        }
        
      });
    }
    
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
