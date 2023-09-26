import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FileUploadService } from 'src/app/services/aws/file-upload.service';
import { ParseService } from 'src/app/services/parse.service';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss']
})
export class ManageCategoriesComponent {


  @Input() subpage: any='';
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  public open_content_index:any = null;
  public edit_category_index:any = null;
  public open_cat_name:any = null;
  public isEditorOpen:any = false;
  
  public add_sub_cat:any = false;

  public i_cat_name:any='';
  public i_sub_cat:any = '';
  public edit_temp_model:any = {
        name:"", 
        avatar:"",
        subgroup:[]
      }
  public edit_temp:any = {
        name:"", 
        avatar:"",
        subgroup:[]
      }

  public occasions:any = {
    cat_name:'occasions',
    all: [
      {
        name:"wedding", 
        avatar:"",
        subgroup:["best of bridal","trousseau treasures","headed for haldi","mehandi magic"]
      },
      {
        name:"festive", 
        avatar:"",
        subgroup:["Pooja prep","party plans","feeling exclusive"]
      },
    ]
  };

  public regional_collections:any = {
    cat_name:'collections',
    all: [
      {
        name:"Northern Delights", 
        avatar:"",
        subgroup:["banarsi sarees","rajasthani sarees"]
      },
      {
        name:"Southern gems", 
        avatar:"",
        subgroup:["Andhra & Telangana Sarees","Paithani Sarees","Kanjivaram Sarees","Kalamkari Sarees","Soft Silk Sarees"]
      },
    ]
  };

  
  public groups:any = {
    cat_name:'groups',
    all: [
      {
        name:"Exclusive finds", 
        avatar:"",
        subgroup:[]
      },
      {
        name:"New Arrivals", 
        avatar:"",
        subgroup:[]
      },
      {
        name:"Hand Picked", 
        avatar:"",
        subgroup:[]
      }
    ]
  };

  public all_categories:any = [];
  
  constructor(private parse:ParseService, private fileUploader:FileUploadService)
  {
    this.all_categories.push(this.occasions);
    this.all_categories.push(this.regional_collections);
  }

  ngOnInit()
  {
    
    this.getAllCategories();
  }

  getAllCategories()
  {
    this.parse.getData('occasions').then(async(x:any)=>{
      this.occasions.cat_name = 'occasions';
    
      this.occasions.all=[];
      x.map((data:any)=>{
        this.occasions.all.push({...data.attributes,id:data.id});

      })
    });

    this.parse.getData('collections').then((x:any)=>{
      this.regional_collections.cat_name = 'collections';
      
      this.regional_collections.all=[];
      x.map((data:any)=>{
        this.regional_collections.all.push({...data.attributes,id:data.id});

      })
    });

    this.parse.getData('groups').then((x:any)=>{
      this.groups.cat_name = 'groups';
      
      this.groups.all=[];
      x.map((data:any)=>{
        this.groups.all.push({...data.attributes,id:data.id});

      })
    });
    console.log("pulled",this.occasions);
  }

  addSubCat()
  {
    this.add_sub_cat = true;
   
  }

  deleteSubCat(index:any)
  {

    this.parse.deleteObject('sub_groups',this.edit_temp.subgroup[index],this.edit_temp.subgroup[index]["id"]);
    this.edit_temp.subgroup.splice(index,1);
  }

 

  async saveSubCat()
  {
    
    let sc:any = await this.parse.saveObject('sub_groups',{name:this.i_sub_cat});
    this.edit_temp.subgroup.push(sc);
    console.log(this.edit_temp);
    
  }

  openEditForm(cat_name:any)
  {
    console.log("edit");
    this.open_cat_name = cat_name;
    this.isEditorOpen = true;
  }

  triggerFileInput() {
    // Programmatically trigger a click event on the hidden file input
    if (this.fileInput) {
      this.fileInput.nativeElement.click();

    }
  }

  fileSelected(event: Event)
  {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files != null) 
    {
      const selectedFile = inputElement.files[0];
      console.log(selectedFile);
      
      this.edit_temp.avatar = URL.createObjectURL(selectedFile);
      this.edit_temp.file = selectedFile;
      
    }
  }

  deleteAvatar()
  {
    this.edit_temp.avatar = "";
  }

  editCategory(cat_name:any,idx:any)
  {
    this.open_cat_name = cat_name;
    this.edit_category_index = idx;

    console.log(this.open_cat_name);
    
    var category:any;
    if(cat_name=='occasions')
    {
      category = this.occasions;
    }
    else if(cat_name=='collections')
    {
      category = this.regional_collections;
    }
    else if(cat_name=='groups')
    {
      category = this.groups;
    }

    this.edit_temp.name = category.all[idx].name;
    this.edit_temp.avatar = category.all[idx].avatar;
    this.edit_temp.subgroup = [...category.all[idx].subgroup];

    this.isEditorOpen = true;
  }

  deleteCategory()
  {
    var category:any;
    if(confirm("Delete this "+this.open_cat_name+"?",))
    {
      
    if(this.open_cat_name == 'occasions')
    {
      category = this.occasions;
      
    }
    else if(this.open_cat_name =='collections')
    {
      category = this.regional_collections;
      
    }
    else if(this.open_cat_name =='groups')
    {
      category = this.groups;
      
    }

    this.edit_temp.subgroup.map((x:any)=>{
      this.parse.deleteObject('sub_groups',null,x.id);
    })

    this.parse.deleteObject(this.open_cat_name,category.all[this.edit_category_index],category.all[this.edit_category_index]["id"])
    category.all.splice(this.edit_category_index,1);;
    console.log(this.open_cat_name);

      
      this.closeEditForm();

    }
    else 
    {

    }
    

    

     
  }

  async saveEditForm()
  {
    
    var category:any;
    if(this.open_cat_name == "occasions")
    {
      category = this.occasions;
    }
    else if(this.open_cat_name == "collections")
    {
      category = this.regional_collections;
    }
    else if(this.open_cat_name == "groups")
    {
      category = this.groups;
    }
   

    if(this.edit_temp.name!=this.edit_temp_model.name && this.edit_category_index==null)
    {
      if(this.edit_temp?.file)
      {
        let file = this.edit_temp?.file;
        let res = await this.fileUploader.uploadFileToS3(file,'');
          let data: any = { name: file.name, type: file.type.split('/')[0], url: res.Location, key: res.Key };
          this.edit_temp.avatar = res.Location;
          delete this.edit_temp["file"];
        category.all.push({...this.edit_temp});
      
        this.parse.saveObject(category.cat_name,this.edit_temp).then((d:any)=>{
          console.log("save success!",d);
          
        }).catch((err:any)=>{
          console.log(err);
        }).then(()=>{
          this.getAllCategories();
          this.closeEditForm();
        });
      }
      
    }
    if(this.edit_category_index!=null)
    { 
      if(this.edit_temp?.file)
      {
        let file = this.edit_temp?.file;
        let res = await this.fileUploader.uploadFileToS3(file,'');
          let data: any = { name: file.name, type: file.type.split('/')[0], url: res.Location, key: res.Key };
          this.edit_temp.avatar = res.Location;
          delete this.edit_temp["file"];
     
      }
      
      this.parse.updateObject(category.cat_name,this.edit_temp,category.all[this.edit_category_index]["id"]).then((d:any)=>{
        console.log("update success!");
        
      }).catch((err:any)=>{
        console.log(err);
      }).then(()=>{
        category.all[this.edit_category_index] = {...this.edit_temp};
        this.closeEditForm();
      });
      
     
    }


   
   
   
    

    
  }

  detectcloseEditForm(e:any)
  {
    
    if(e.target.classList.value.includes('overlay-container'))
    {
      this.closeEditForm();
    }
  }

  closeEditForm(e:any=null)
  {
      this.add_sub_cat = false;
      this.edit_category_index=null;
      this.isEditorOpen = false;
      this.edit_temp.name = this.edit_temp_model.name;
      this.edit_temp.avatar = this.edit_temp_model.avatar;
      this.edit_temp.subgroup = [...this.edit_temp_model.subgroup];
      
      
  }

  openContent(card_name:any,idx:any)
  {
    console.log(card_name,idx);
 
    if(card_name==this.open_cat_name && this.open_content_index==idx)
    {
      this.open_cat_name = null;
      this.open_content_index = null;
    }
    else{
      this.open_cat_name = card_name;
      this.open_content_index = idx;

    }
  }

}
