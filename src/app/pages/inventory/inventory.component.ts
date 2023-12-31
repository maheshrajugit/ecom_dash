import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FileUploadService } from 'src/app/services/aws/file-upload.service';
import { ParseService } from 'src/app/services/parse.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],


})
export class InventoryComponent {

  @Input() subpage: any='';

  public value = 'clear me';

  public inventoryOverviewCards: any = [
    {
      to:"categories",
      color: "#1570EF",
      title: "Categories",
      icon: "../../../assets/categories-icon.svg",
      info: [
        { value: 14, type: "Total" },
        { value: 14, type: "Sub groups" }
      ]
    },
    {
      to:"",
      color: "#F7931E",
      title: "Total Products",
      icon: "../../../assets/quick-inventory.svg",
      info: [
        { value: 868, type: "Total" }
      ]
    },
    {
      color: "#9D50BB",
      title: "Top selling",
      icon: "../../../assets/sales-stat.svg",
      info: [
        { value: 5, type: "This Week" },
        { value: "₹" + 86890, type: "Revenue" },
      ]
    },
    {
      color: "#F12711",
      title: "Low stock alerts",
      icon: "../../../assets/alerts-icon.svg",
      info: [
        { value: 12, type: "Low in stock" },
        { value: 2, type: "Not in stock" },
      ]
    },

  ];

  public filters: any = {};
  public isFilterSelected: any = false;
  public productModel: any = {
    id: "sxdcac3",
    thumb: "../../../assets/img/thumb-2.jpg",
    sku: "SHG07C00542",
    name: "Green Silk Maheswari Saree",
    price: 4300,
    category: 'saree',
    occation: 'formal wear',
    origin: 'Maheshwar',
    craft: 'wowen',
    blouse_type: 'unstiched blouse piece',
    blouse_dimension: '70cm x 110cm',
    color: 'Green',
    loom: 'handloom',
    dimension: '5.3m x 1.1m',
    fabric: 'silk',
    returns: 'false',
    zari: 'Tested Zari',
    country: 'India',
    stock: 30,
    alert: 4,
    p_images:[]

  }

  public fullProductModel: any = [

    { title: 'SKU #', value: "", type: 'text', key: 'sku' },
    { title: 'Product name', value: '', type: 'text', key: 'name' },
    { title: 'Stock Quantity', value: 0, type: 'number', key: 'stock' },
    { title: 'Low stock alert', value: 5, type: 'number', key: 'alert' },
    { title: 'Selling price', value: 0, type: 'number', key: 'price' },
    { title: 'Before price', value: 0, type: 'number', key: 'b_price' },
    { title: 'Discount percentage', value: 0, type: 'number', key: 'discount' },
    { title: 'Color', value: '', type: 'select', key: 'color', options: ["violet", "indigo", "blue", "green", "yellow", "orange", "red"] },
    { title: 'Saree dimension', value: '', type: 'select', key: 'dimension', options: ["5.3 m x 1.1 m", "6.2 m x 1.4m", "9 m x 7m"] },
    { title: 'Fabric', value: '', type: 'select', key: 'fabric', options: ["Silk", "Cotton", "Nylon", "Wool", "Hemp"] },
    { title: 'craft', value: '', type: 'select', key: 'craft', options: ["Kalankari", "Kajivaram", "Cheerala", "Maheshwaram"] },
    { title: 'Loom', value: 'Handloom', type: 'select', key: 'loom', options: ["Handloom", "Machine"] },
    { title: 'Category', value: '', type: 'select', key: 'category', options: ["Northern Delight", "Eastern Aura", "Southren Gems", "Central Bliss"] },
    { title: 'Occation', value: '', type: 'select', key: 'occation', options: ["Wedding", "Formal", "Festive", "Casual", "Party"] },
    { title: 'Country', value: 'India', type: 'select', key: 'country', options: ["India", "China", "Singapore", "Malasia", "Pakistan"] },
    { title: 'Blouse Type', value: 'Unstiched blouse piece', type: 'select', key: 'blouse_type', options: ["Unstiched blouse piece", "Ready-made"] },
    { title: 'Blouse Dimension', value: '', type: 'select', key: 'blouse_dimension', options: ["70cm x 110cm", "90cm x 200cm", "80 cm x 150cm"] },
    { title: 'Product images', value: [], type: 'image', key: 'p_images' }

  ];

  public tempProductModel: any = {};

  public products: any = [];
  public allProducts: any = [];
  public panelOpenState: any = false;
  public product_specs: any;
  public temp_specs: any;
  public isDialogOpen: any = 'false';
  public isEditProductOpen: any = 'false';
  public basicProdItems: any = [
    "sku", "thumb", "name", "price", "stock", "color", "category", "occation", "origin", "fabric"
  ];

  public temp_data: any = {};
  public selected_product: any = {};

  public filtered_options: any = {};
  public show_moreFilters:any = false;
  public editProdIndex: any = 0;
  public pageIndex: any = 0;
  public length: any = 100;
  public pageSize: any = 10;
  public pageSizeOptions: any = [5, 10, 25, 100];

  constructor(private parse:ParseService, private fileUploader:FileUploadService) {
    // this.products.push(this.productModel);
    this.allProducts = [...this.products];
    this.length = this.allProducts.length;
    // this.tempProductModel = [...this.fullProductModel];
  }

  range(pageIndex: any, pageSize: any): Array<any> {
    let array = [];
    for (let i = pageIndex * pageSize; i < pageIndex + pageSize; i++) {
      if (i < this.length) {
        array.push(i);
      }
      else {
        break;
      }
    }

    // console.log(array);


    return array;
  }

  editProduct(obj:any,idx:any)
  {
    this.selected_product = obj;
    console.log(this.selected_product);
    this.editProdIndex = idx;
    this.isEditProductOpen = 'true';
  }

  async addProduct(prod: any) {

    // console.log(prod);
    let products = [...this.products]
    products.push(prod);
    this.products = [...products];
    this.allProducts = [...products];
    this.length = this.products.length;
    
    let p_images:any = [];
    
    if(prod.p_images.length>0)
    {
      await Promise.all(prod.p_images.map(async(file:any)=>{
        let res = await this.fileUploader.uploadFileToS3(file,'');
        let data: any = { name: file.name, type: file.type.split('/')[0], url: res.Location, key: res.Key };
        p_images.push({src:res.Location, thumb:res.Location});
      }));
      console.log(products, this.products);
      prod.p_images = [...p_images];
      prod.thumb = p_images[0].thumb;
      await this.parse.saveObject('inventory',prod)
      this.closeDialog('false');
    }
    

   
  
  
  }

  async saveProduct(data:any)
  {
    let prods = [...this.products];

    prods[this.editProdIndex] = {...data};

    this.products = [...prods];
    console.log(this.products);

    let p_images:any = [];
    console.log("saving",data);
    
    if(data.p_images.length>0)
    {
      await Promise.all(data.p_images.map(async(file:any)=>{
        if(file?.name)
        {
          let res = await this.fileUploader.uploadFileToS3(file,'');
          let data: any = { name: file.name, type: file.type.split('/')[0], url: res.Location, key: res.Key };
          p_images.push({src:res.Location, thumb:res.Location});
        }
        else 
        {
          p_images.push({src:file.src, thumb:file.thumb});
        }
      }));

      data.p_images = [...p_images];
      data.thumb = p_images[0].thumb;

      data.stock = parseInt(data.stock);
      data.discount = parseInt(data.discount);
      data.price = parseInt(data.price);
      data.b_price = parseInt(data.b_price);
      
      await this.parse.saveObject('inventory',data);
      this.getAllProducts();
    }

    this.isEditProductOpen =false;
    
  }

  async saveAsNew(data:any)
  {
    let prods = [...this.products];

    prods[this.editProdIndex] = {...data};

    this.products = [...prods];
    console.log(this.products);

    let p_images:any = [];
    console.log("saving",data);
    
    if(data.p_images.length>0)
    {
      await Promise.all(data.p_images.map(async(file:any)=>{
        if(file?.name)
        {
          let res = await this.fileUploader.uploadFileToS3(file,'');
          let data: any = { name: file.name, type: file.type.split('/')[0], url: res.Location, key: res.Key };
          p_images.push({src:res.Location, thumb:res.Location});
        }
        else 
        {
          p_images.push({src:file.src, thumb:file.thumb});
        }
      }));

      data.p_images = [...p_images];
      data.thumb = p_images[0].thumb;
      await this.parse.saveObject('inventory',data);
      this.getAllProducts();
    }

    this.isEditProductOpen =false;
  }

 
  deleteProduct(data:any)
  {
    this.isEditProductOpen = false;
    this.products.splice(this.editProdIndex,1);
    this.length = this.products.length;

    this.parse.deleteObject('inventory',data).then((d:any)=>{
      
    })

  }

  closeEditDialog(e: any = "false") {
    this.isEditProductOpen = 'false';
    
  }


  openDialog(val: any = 'false') {
    console.log(val);

    this.isDialogOpen = 'true';
  }



  closeDialog(e: any = "false") {
    this.isDialogOpen = 'false'
  }
  
  ngOnInit() {

    this.basicProdItems.map((x: any) => {
      this.filters[x] = '';
    });


    this.fullProductModel.map((x: any) => {

      this.temp_data[x.key] = '';
      if (x.options != undefined) {
        this.filtered_options[x.key] = {};
        this.filtered_options[x.key] = [...x.options]
      }
    });

    this.tempProductModel = [...this.fullProductModel];

    this.getAllProducts();

    this.get_Inventory_overview();
    

  }

  async get_Inventory_overview()
  {
    let g:number  = await this.parse.countObjects('groups');
    let o:number = await this.parse.countObjects('occasions');
    let c:number = await this.parse.countObjects('collections');
    let sg:number = await this.parse.countObjects('sub_groups');
    let p:number = await this.parse.countObjects('inventory');
    console.log("goc",g,o,c);
    
    this.inventoryOverviewCards[0].info[0].value = o + c + g;
    this.inventoryOverviewCards[0].info[1].value = sg;
    this.inventoryOverviewCards[1].info[0].value = p;
  }

  getAllProducts()
  {
    this.parse.getData('inventory',100).then((data:any)=>{
      console.log(data);
      let products:any = [];
      data.map((product:any)=>{
        products.push({id:product.id, ...product.attributes});
      })
      this.products = [...products];
      this.allProducts = [...products];
      this.length = this.allProducts.length;
      
    }).catch((err:any)=>{
      console.log(err);
      
    });
  }

  filterOptions(e: any, item: any) {
    let string = e.target.value;
    console.log(string, item, this.temp_data);
    this.filtered_options[item.key] = [];
    item.options.map((val: any) => {
      let l = val.toLowerCase();
      if (l.includes(string.toLowerCase())) {
        console.log("check", val, string);

        this.filtered_options[item.key].push(val);
        console.log(this.filtered_options);

      }
      else {

      }
    });

    if (string == '') {
      this.productModel.map((m: any) => {
        if (m.key == item.key) {
          this.filtered_options[item.key] = m.options;
        }
      })
    }


  }

  filterProducts(e: any, key: any) {
    console.log(e.target.value, key);

    let string = e.target.value;
    let temp_filter_prods: any = [];
    this.allProducts.map((prod: any) => {
      let l = prod[key].toLowerCase();
      if (l.includes(string.toLowerCase())) {
        temp_filter_prods.push(prod);
      }
    });

    this.products = [...temp_filter_prods];
    this.length = temp_filter_prods.length;
    if (string == '') {

      this.products = [...this.allProducts];
    }

  }

  filterToggle() {
    console.log("clicked");

    this.products = [...this.allProducts];
    this.length = this.products.length;
    console.log(this.products, this.allProducts);
    this.isFilterSelected = !this.isFilterSelected;
    this.tempProductModel = [];
    this.fullProductModel.map((item:any)=>{
      if(this.basicProdItems.includes(item.key))
      {
        this.tempProductModel.push(item);
      }
    })
  }

  moreFilters()
  {
    this.show_moreFilters = !this.show_moreFilters;
    this.tempProductModel = [];
    if(this.show_moreFilters)
    {
      this.tempProductModel = [...this.fullProductModel];
    }
    else 
    {
      this.fullProductModel.map((item:any)=>{
        if(this.basicProdItems.includes(item.key))
        {
          this.tempProductModel.push(item);
        }
      })
    }
  }


  handlePageEvent(e: PageEvent) {

    console.log(e);

    let pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

}


