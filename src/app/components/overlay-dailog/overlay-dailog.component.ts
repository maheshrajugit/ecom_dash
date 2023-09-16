import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-overlay-dailog',
  templateUrl: './overlay-dailog.component.html',
  styleUrls: ['./overlay-dailog.component.scss']
})


export class OverlayDailogComponent {
  
  @Input() isOpen: any='false';
  @Input() formData: any=[];
  @Output() closeTheDialogue = new EventEmitter<any>();

  @Output() addTheProduct = new EventEmitter<any>();
  public value:any='';
  public temp_data:any={};

  public productModel:any = [
    
    {title:'SKU #',value:"",type:'string',key:'sku'},
    {title:'Product name',value:'',type:'string',key:'name'},
    {title:'Stock Quantity',value:0,type:'number',key:'stock'},
    {title:'Low stock alert',value:5,type:'number',key:'alert'},
    {title:'Selling price',value:0,type:'number',key:'price'},
    {title:'Before price',value:0,type:'number',key:'b_price'},
    {title:'Discount percentage',value:0,type:'number',key:'discount'},
    {title:'Color',value:'',type:'select',key:'color'},
    {title:'Saree dimension',value:'',type:'select',key:'saree'},
    {title:'Fabric',value:'',type:'select',key:'fabric'},
    {title:'craft',value:'',type:'select',key:'craft'},
    {title:'Loom',value:'Handloom',type:'select',key:'loom'},
    {title:'Category',value:'',type:'select',key:'category'},
    {title:'Occation',value:'',type:'select',key:'occation'},
    {title:'Country',value:'India',type:'select',key:'country'},
    {title:'Blouse Type',value:'Unstiched blouse piece',type:'select',key:'b_type'},
    {title:'Blouse Dimension',value:'',type:'select',key:'b_dimension'}
  
  ]





  constructor()
  {

  }

  ngOnInit()
  {
    this.productModel.map((x:any)=>{
      this.temp_data[x.title]=undefined;
    })
  }

  add_product()
  {
    console.log(this.temp_data);
    console.log("lol");

    this.addTheProduct.emit(this.temp_data)
    
  }

  closeDialogue(type:any=undefined)
  {
    console.log("false");
    
      this.closeTheDialogue.emit('false');

  }




}
