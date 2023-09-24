import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavStateService } from 'src/app/services/nav-state.service';
import { ParseService } from 'src/app/services/parse.service';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss']
})
export class DashHomeComponent {

  panelOpenState = false;

  public selected_nav: any = 'dashboard';
  public subPage:any = '';
  public DashnavItems: any = [
    {
      icon: '../assets/home-icon',
      title: "overview stats",
      to: 'home'
    },
    {
      icon: '../assets/w-management-icon',
      title: "website management",
      to: 'sitemanagement',
      childs: [

        { title: "Pages", to: "" },
        { title: "banner ads", to: "banners" },
        { title: "shopping categories", to: "categories" },
        { title: "collections", to: "collections" },
        { title: "Filters", to: "filters" },
      ]
    },
    {
      icon: '../assets/users-icon',
      title: "manage users",
      to: 'users',
      childs: [
        { title: "Customers", to: "" },
        { title: "Staff", to: "staff" }
      ]
    },
  ];

  public ManagenavItems: any = [
    {
      icon: '../assets/inventory-icon',
      title: "Inventory Management",
      to: 'inventory',

      childs: [

        { title: "All Products", to: "" },
        { title: "Product varients", to: "groups" },
        { title: "Product Specs", to: "specs" },
        { title: "Warehouses", to: "warehouses" },
        { title: "Special sales", to: "special" },
      ]
    },
    {
      icon: '../assets/sales-icon',
      title: "Orders / Sales",
      to: 'orders',
      childs: [

        { title: "Orders", to: "" },
        { title: "Sales Analytics", to: "sales" },
       
      ]
    },
    {
      icon: '../assets/invoice-icon',
      title: "Invoices",
      to: 'users',
    },
    {
      icon: '../assets/logistics-icon',
      title: "Logistics / Tracking",
      to: 'sitemanagement',
      childs: [

        { title: "banner ads", to: "banners" },
        { title: "shopping categories", to: "categories" },
        { title: "collections", to: "collections" },
        { title: "Filters", to: "filters" },
        { title: "Pages", to: "pages" },
      ]
    },
    {
      icon: '../assets/v-call-icon',
      title: "Video Appointments",
      to: 'users',
    },
    {
      icon: '../assets/reels-icon',
      title: "Reels Content",
      to: 'reels',
    },
    {
      icon: '../assets/discount-icon',
      title: "Discount Coupons",
      to: 'discounts',
    },
    {
      icon: '../assets/ewallet-icon',
      title: "e-Wallet coupons",
      to: 'ewallets',
    },
    {
      icon: '../assets/referral-icon',
      title: "Referral Program",
      to: 'users',
    },

  ];

  public ClientnavItems: any = [
    {
      icon: '../assets/support-icon',
      title: "Support",
      to: 'home'
    },
    {
      icon: '../assets/reviews-icon',
      title: "Reviews Management",
      to: 'reviews',
    },
    {
      icon: '../assets/email-icon',
      title: "Send Email",
      to: 'email',
      childs: [
        { title: "Customers", to: "''" },
        { title: "Staff", to: "staff" }
      ]
    },
    {
      icon: '../assets/whatsapp-icon',
      title: "Send WhatsApp Updates",
      to: 'whatsapp',
      childs: [

        { title: "chats", to: "" },
        { title: "Notify users", to: "notify" }
      ]
    },
    {
      icon: '../assets/transaction-icon',
      title: "Transactions",
      to: 'transactions',
     
    },
  ];

  public AccountnavItems: any = [
    {
      icon: '../assets/help-icon',
      title: "Help",
      to: 'help'
    },

    {
      icon: '../assets/logs-icon',
      title: "Logs",
      to: 'logs'
    },

    {
      icon: '../assets/logout-icon',
      title: "Logout",
      to: 'logout',
    },
  ];

  public showFiller: boolean = false;
  public showSearch: boolean = false;

  constructor(private parse: ParseService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnChanges(sc:SimpleChanges)
  {
    const paramValue = this.route.snapshot.params['page'];
    
    console.log(paramValue);
    this.selected_nav = paramValue;
  }

  ngOnInit() {


    const paramValue = this.route.snapshot.params['page'];

      this.selected_nav = paramValue;
  
    
    
   
    
    var found = false;
    this.DashnavItems.map((x: any) => {
      if (x.to == paramValue) {
        found = true;
        this.selected_nav = x.title;
      }

    });

    if (found == false) {
      this.ManagenavItems.map((x: any) => {
        if (x.to == paramValue) {
          found = true;
          this.selected_nav = x.title;
        }

      });
    }
    else if (found == false) {
      this.ClientnavItems.map((x: any) => {
        if (x.to == paramValue) {
          found = true;
          this.selected_nav = x.title;
        }

      });
    }
    else {
      this.AccountnavItems.map((x: any) => {
        if (x.to == paramValue) {
          found = true;
          this.selected_nav = x.title;
        }

      });
    }


    this.parse.getUserRole().then((data: any) => {
      console.log(data);

      if (data == 'admin' || data == 'staff') {

      }
      else {
        this.parse.logout().then((x: any) => {
          this.router.navigateByUrl("/");
        })
      }
    })


  }

  click_search() {
    this.showSearch = !this.showSearch;
    console.log(this.showSearch);

  }

  select_subPage(to:any)
  {
    this.subPage = to;
    console.log(this.subPage, to);
    
  }

  select_nav_item(title: any, to: any) {
    this.selected_nav = title;
    
    if (this.selected_nav == 'Logout') {
      this.logout();
    }
    else {
      this.router.navigateByUrl('dashboard/' + to);
    }
  }

  changeThePage(obj:any)
  {
    this.selected_nav = obj.to;
    let found = false;
    this.DashnavItems.map((x: any) => {
      if (x.to == obj.to) {
        found = true;
        this.selected_nav = x.title;
      }

    });

    if (found == false) {
      this.ManagenavItems.map((x: any) => {
        if (x.to == obj.to) {
          found = true;
          this.selected_nav = x.title;
        }

      });
    }
    else if (found == false) {
      this.ClientnavItems.map((x: any) => {
        if (x.to == obj.to) {
          found = true;
          this.selected_nav = x.title;
        }

      });
    }
    else {
      this.AccountnavItems.map((x: any) => {
        if (x.to == obj.to) {
          found = true;
          this.selected_nav = x.title;
        }

      });
    }
  }

  logout() {
    // this.parse.logout().then(()=>{
    //   this.ngOnInit();
    // })

    this.router.navigateByUrl('/login');
  }



}
