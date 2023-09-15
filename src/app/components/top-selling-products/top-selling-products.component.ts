import { Component } from '@angular/core';

@Component({
  selector: 'app-top-selling-products',
  templateUrl: './top-selling-products.component.html',
  styleUrls: ['./top-selling-products.component.scss']
})
export class TopSellingProductsComponent {

  public TopSelling:any = [];

  constructor()
  {

  }

  ngOnInit()
  {
    this.TopSelling = [
      {
        imgUrl:"../../../assets/img/thumb-1.jpg",
        collection:"Banarsi Saree",
        date:new Date(),
        amount: 8500,
        orders: 110,
        
        sku:("SK-U"+Math.random() * 10000).split(".")[0],
        status: 'placed'
      },
      {
        imgUrl:"../../../assets/img/thumb-2.jpg",
        collection:"Silk Saree",
        date:new Date(),
        amount: 8500,
        orders: 80,
        sku:("SK-U"+Math.random() * 10000).split(".")[0],
        status: 'shipped'
      },
      {
        imgUrl:"../../../assets/img/thumb-1.jpg",
        collection:"Kanjivaram Saree",
        date:new Date(),
        amount: 300,
        orders: 72,
        sku:("SK-U"+Math.random() * 10000).split(".")[0],
        status: 'fulfilled'
      },
      {
        imgUrl:"../../../assets/img/thumb-2.jpg",
        collection:"Banarsi Saree",
        date:new Date(),
        amount: 9500,
        orders: 50,
        sku:("SK-U"+Math.random() * 10000).split(".")[0],
        status: 'placed'
      },
      {
        imgUrl:"../../../assets/img/thumb-2.jpg",
        collection:"Cotton Saree",
        date:new Date(),
        amount: 5000,
        orders: 46,
        sku:("SK-U"+Math.random() * 10000).split(".")[0],
        status: 'shipped'
      }

    ];
  }

}
