import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {


  public inventoryOverviewCards:any = [
    {
      color:"#1570EF",
      title:"Categories",
      icon:"../../../assets/categories-icon.svg",
      info:[
        {value:14, type:"Total"}
      ]
    },
    {
      color:"#F7931E",
      title:"Total Products",
      icon:"../../../assets/quick-inventory.svg",
      info:[
        {value:868, type:"This week"},
        {value:"₹"+250000, type:"Revenue"},
      ]
    },
    {
      color:"#9D50BB",
      title:"Top selling",
      icon:"../../../assets/sales-stat.svg",
      info:[
        {value:5, type:"This Week"},
        {value:"₹"+86890, type:"Revenue"},
      ]
    },
    {
      color:"#F12711",
      title:"Low stock alerts",
      icon:"../../../assets/alerts-icon.svg",
      info:[
        {value:12, type:"Low in stock"},
        {value:2, type:"Not in stock"},
      ]
    },

  ]


  public productModel:any = {
    id:"sxdcac3",
    thumb:"../../../assets/img/thumb-2.jpg",
    sku:"SHG07C00542",
    name:"Green Silk Maheswari Saree",
    s_price:4300,
    category:'saree',
    occation:'formal wear',
    origin:'Maheshwar',
    craft:'wowen',
    blouse_type:'unstiched blouse piece',
    blouse_dimension:'70cm x 110cm',
    colour:'Green',
    loom:'handloom',
    dimension:'5.3m x 1.1m',
    fabric:'silk',
    returns:false,
    zari:'Tested Zari',
    country:'India',
    stock:30,
    alert:4,

  }

  public product_specs:any;

  constructor()
  {

  }

  ngOnInit()
  {
    this.product_specs = Object.keys(this.productModel);
    this.product_specs = this.product_specs.filter((x:any)=>x!='id')
  }




}
