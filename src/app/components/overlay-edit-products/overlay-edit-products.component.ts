import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-overlay-edit-products',
  templateUrl: './overlay-edit-products.component.html',
  styleUrls: ['./overlay-edit-products.component.scss']
})
export class OverlayEditProductsComponent {

  @ViewChild('editform', { static: true }) formElement: ElementRef | undefined;
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  @Input() isOpen: any = 'false';
  @Input() formData: any = {};
  @Output() closeTheDialogue = new EventEmitter<any>();
  @Output() deleteTheProd = new EventEmitter<any>();

  @Output() saveTheProduct = new EventEmitter<any>();



  public value: any = '';
  public temp_data: any = {};
  public filtered_options: any = {};
  public prod_images: any = [


  ]

  public productModel: any = [

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

  ]

  public isEditing: any = false;
  public progress_percent: any = 0;

  constructor() {

  }

  ngOnInit() {
    let i = 1;
    console.log(this.formData);

    this.productModel.map((x: any) => {

      if (this.formData.name == undefined)
        this.temp_data[x.key] = '';
      else  
        this.temp_data[x.key] = this.formData[x.key];

      if (x.options != undefined) {
        this.filtered_options[x.key] = {};
        this.filtered_options[x.key] = [...x.options]
      }
    });
    console.log(this.filtered_options);
    console.log(this.temp_data);
    if (this.formElement) {
      console.log("scrolling");

      this.formElement.nativeElement.scrollTop = 0;
    }
  }

  ngOnChanges() {
    console.log(this.formData);
    this.temp_data = { ...this.formData };
  //   if (this.formData.p_images) {
  //     this.formData.p_images.map((x:any)=>{
  //       this.prod_images.push({src: x.src, thumb:x.thumb})
  //     })
  //     this.prod_images.push(...this.formData.p_images);
  //   }
  //   else 
  //   {
  //     this.prod_images=[];
  //   }
  }

  calcDiscount(e: any, key: any, idx: any = 0) {

    console.log(e);

    console.log('lol', e.target.value);
    if (key == 'discount') {
      if (this.temp_data['price'] != '')
        this.temp_data['b_price'] = Math.round(parseInt(this.temp_data['price']) / (1 - parseInt(this.temp_data['discount']) / 100));
      else {
        this.temp_data['price'] = Math.round(parseInt(this.temp_data['b_price']) * (1 - parseInt(this.temp_data['discount']) / 100));
      }
    }
    else {
      this.temp_data['discount'] = Math.round((1 - (parseInt(this.temp_data['price']) / parseInt(this.temp_data['b_price']))) * 100);
    }
    console.log("vals", this.temp_data['discount'], this.temp_data['price'], this.temp_data['b_price']);
  }

  triggerFileInput() {
    // Programmatically trigger a click event on the hidden file input
    if (this.fileInput) {
      this.fileInput.nativeElement.click();

    }
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

  fileSelected(event: Event) {
    // Handle file selection here
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files != null) {
      const selectedFile = inputElement.files[0];
      if (selectedFile) {
        const selectedFiles = inputElement.files;

        for (let i = 0; i < selectedFiles.length; i++) {
          const file = selectedFiles[i];
          console.log(`Selected file ${i + 1}: ${file.name}`, file);
          this.prod_images.push({ src: URL.createObjectURL(file), thumb: URL.createObjectURL(file) })
          // You can perform further actions with each selected file here
        }
        this.temp_data.p_images =[...this.prod_images] ;
        console.log("here",this.prod_images);
        
      }
    }
  }

  triggerUploadFiles() {

  }


  editForm() {
    this.isEditing = !this.isEditing;
    if(this.isEditing == false)
    {
      this.temp_data = {...this.formData }
    }
  }


  resetForm() {
    console.log('reset', this.productModel);
    this.prod_images = [];
    this.productModel.map((x: any) => {

      this.temp_data[x.key] = '';
    });

  }

  save_product(p: any = undefined) {
    console.log(this.temp_data);
    console.log("lol");
    let final = { ...this.temp_data };
    console.log(final);
    final.thumb = "../../../assets/img/thumb-2.jpg";
    if (this.formElement) {

      console.log("scrolling");

      this.formElement.nativeElement.scrollTop = 0;
    }
    this.prod_images = [];
    this.editForm();
    this.saveTheProduct.emit(final);


  }



  formatData(data: any) {
    let prod = data;
    let finalData = prod;
    console.log(data);

  }


  detectCloseDialogue(e: any = undefined) {
    console.log("detecting");

    if (e != undefined) {
      let cList = [...e.target.classList];
      // console.log(cList);
    
      if (cList.includes('overlay-backdrop')) {
        this.prod_images = [];
        this.closeTheDialogue.emit('false');
      }
    }

  }

  closeDialogue(type: any = undefined) {

    if (this.formElement) {
      console.log("scrolling");

      this.formElement.nativeElement.scrollTop = 0;
    }
    this.prod_images = [];
    this.isEditing = false;
    this.closeTheDialogue.emit('false');

  }

  delete_prod()
  {
    let res = confirm("Are you sure?  Delete this product?");
    if(res == true)
    {
      this.closeTheDialogue.emit('false');
      this.deleteTheProd.emit('');
      
    }
    else 
    {

    }
  }



}
