import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-overlay-dailog',
  templateUrl: './overlay-dailog.component.html',
  styleUrls: ['./overlay-dailog.component.scss']
})


export class OverlayDailogComponent implements OnInit{
  @ViewChild('form', { static: true }) formElement: ElementRef | undefined;

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
    {title:'Saree dimension',value:'',type:'select',key:'dimension'},
    {title:'Fabric',value:'',type:'select',key:'fabric'},
    {title:'craft',value:'',type:'select',key:'craft'},
    {title:'Loom',value:'Handloom',type:'select',key:'loom'},
    {title:'Category',value:'',type:'select',key:'category'},
    {title:'Occation',value:'',type:'select',key:'occation'},
    {title:'Country',value:'India',type:'select',key:'country'},
    {title:'Blouse Type',value:'Unstiched blouse piece',type:'select',key:'blouse_type'},
    {title:'Blouse Dimension',value:'',type:'select',key:'blouse_dimension'}
  
  ]





  constructor()
  {
    
  }

  ngOnInit()
  {
    
    
    let i=1;
    this.productModel.map((x:any)=>{
 
      this.temp_data[x.key]='';
    });

    
   

    if (this.formElement ) {
        console.log("scrolling");
        
        this.formElement.nativeElement.scrollTop = 0;
      }

    
  }

  resetForm()
  {
    console.log('reset',this.productModel);
    
    this.productModel.map((x:any)=>{
 
      this.temp_data[x.key]='';
    });

  }

  add_product(p:any=undefined)
  {
    console.log(this.temp_data);
    console.log("lol");
    let final =this.temp_data;
    console.log(final);
    final.thumb = "../../../assets/img/thumb-2.jpg";

    this.addTheProduct.emit(final);
    
    
  }

  formatData(data:any)
  {
    let prod = data;
    let finalData = prod;
    console.log(data);
    
  }

  
  detectCloseDialogue(e:any)
  {
    console.log("detecting");
    
    if(e!=undefined)
      {
        let cList = [...e.target.classList];
        console.log(cList);
         
        if(cList.includes('overlay-backdrop'))
        {
          this.closeTheDialogue.emit('false');
        }
      }
    
  }

  closeDialogue(type:any=undefined)
  {
    
    if (this.formElement) {
      console.log("scrolling");
      
      this.formElement.nativeElement.scrollTop = 0;
    }
      
    
      this.closeTheDialogue.emit('false');

  }




}
