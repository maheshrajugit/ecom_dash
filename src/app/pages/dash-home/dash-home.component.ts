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
  public window_width:any;
  public selected_nav: any = 'dashboard';
  public subPage:any = '';
  public page:any = '';
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

        { title: "Pages", to: null },
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
        { title: "Customers", to: null },
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

        { title: "All Products", to: null },
        { title: "Product categories", to: "categories" },
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
    
    // this.route.paramMap.subscribe((params) => {
    //   this.selected_nav = params.get('page');;
    //   this.subPage = params.get('subpage');
    //   // Do something with page and subpage
    // });
  }

  ngOnInit() {



    this.window_width = window.innerWidth;
    console.log(this.window_width);
    
    var paramValue:any ;
      this.route.paramMap.subscribe((params) => {
        paramValue = params.get('page');
        this.page = params.get('page');
        this.subPage = params.get('subpage');
        // Do something with page and subpage
        console.log(paramValue,this.subPage);
        
      });
    

   
    
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
    if(to!=null)
    this.router.navigate(['/dashboard',this.page,to]);
    else 
    this.router.navigate(['/dashboard',this.page]);
    console.log(this.subPage, to);
    
  }

  select_nav_item(title: any, to: any) {
    this.selected_nav = title;
    
    if (title == 'Logout') {
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
