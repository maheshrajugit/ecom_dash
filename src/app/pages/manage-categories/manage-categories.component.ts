import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss']
})
export class ManageCategoriesComponent {


  @Input() subpage: any='';

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
    cat_name:'regional collections',
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
  
  constructor()
  {
    this.all_categories.push(this.occasions);
    this.all_categories.push(this.regional_collections);
  }

  ngOnInit()
  {

  }

  addSubCat()
  {
    this.add_sub_cat = true;
   
  }

  deleteSubCat(index:any)
  {
    this.edit_temp.subgroup.splice(index,1)
  }

  saveSubCat()
  {
    this.edit_temp.subgroup.push(this.i_sub_cat);

  }

  openEditForm(cat_name:any)
  {
    console.log("edit");
    this.open_cat_name = cat_name;
    this.isEditorOpen = true;
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
    else if(cat_name=='regional collections')
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

    if(this.open_cat_name == 'occasions')
    {
      this.occasions.all.splice(this.edit_category_index,1);;
    }
    else if(this.open_cat_name =='regional collections')
    {
      this.regional_collections.all.splice(this.edit_category_index,1);;
    }
    else if(this.open_cat_name =='groups')
    {
      this.groups.all.splice(this.edit_category_index,1);;
    }
    console.log(this.open_cat_name);
    
      this.closeEditForm();

     
  }

  saveEditForm()
  {
    var category:any;
    if(this.open_cat_name == "occasions")
    {
      category = this.occasions;
    }
    else if(this.open_cat_name == "regional collections")
    {
      category = this.regional_collections;
    }
    else if(this.open_cat_name == "groups")
    {
      category = this.groups;
    }

    if(this.edit_temp.name!=this.edit_temp_model.name && this.edit_category_index==null)
      category.all.push({...this.edit_temp});
      if(this.edit_category_index!=null)
      {
        category.all[this.edit_category_index] = {...this.edit_temp};
      }

      this.closeEditForm();

    
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
