import { Component, ViewChild } from '@angular/core';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  
  public recentOrders:any = [];

  constructor()
  {

  }

  ngOnInit()
  {
    this.recentOrders = [
      {
        imgUrl:"../../../assets/img/thumb-1.jpg",
        collection:"Banarsi Saree",
        date:new Date(),
        amount: 8500,
        orders: 2,
        
        sku:("SK-U"+Math.random() * 10000).split(".")[0],
        status: 'placed'
      },
      {
        imgUrl:"../../../assets/img/thumb-2.jpg",
        collection:"Silk Saree",
        date:new Date(),
        amount: 8500,
        orders: 2,
        sku:("SK-U"+Math.random() * 10000).split(".")[0],
        status: 'shipped'
      },
      {
        imgUrl:"../../../assets/img/thumb-1.jpg",
        collection:"Kanjivaram Saree",
        date:new Date(),
        amount: 6700,
        orders: 1,
        sku:("SK-U"+Math.random() * 10000).split(".")[0],
        status: 'fulfilled'
      },
      {
        imgUrl:"../../../assets/img/thumb-2.jpg",
        collection:"Banarsi Saree",
        date:new Date(),
        amount: 9500,
        orders: 1,
        sku:("SK-U"+Math.random() * 10000).split(".")[0],
        status: 'placed'
      },
      {
        imgUrl:"../../../assets/img/thumb-2.jpg",
        collection:"Cotton Saree",
        date:new Date(),
        amount: 5000,
        orders: 3,
        sku:("SK-U"+Math.random() * 10000).split(".")[0],
        status: 'shipped'
      }

    ];
  }


  getDate(d:any)
  {
    let date = new Date(d);
    let f = date.toLocaleString().split(",");
    let final = f[0]+"<br/>"+f[1];
 
    // console.log(final);
    
    return final;
  }

}
