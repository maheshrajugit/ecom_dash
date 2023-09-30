import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent {


  public users:any = [
    {
      id:"DF3245FG",
      role:"user",
      f_name:"Mahesh",
      l_name:"Raju",
      email:"maheshraju@wibesapp.com",
      mobile:"+917382037337",
      avatar_url:"",
      wishlist:[],
      orders:[],
      support:[],
      addresses:[
        {
          name:"Home",
          h_no:"Plot 123",
          add_line1:"ABC Apartments, road/lane",
          add_line2:"Locality/colony, City/town/village",
          state:"State1",
          country:"",
          pincode:"123456"
        }
      ],

    }
  ]


  constructor()
  {

  }

  ngOnInit()
  {

  }

}
