import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ParseService } from 'src/app/services/parse.service';

@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.scss']
})
export class LoginPortalComponent {
  public username:any;
  public password:any;

  constructor(private router:Router, private parse:ParseService)
  {

  }

  ngOnInit()
  {

  }

  login()
  {
    // this.parse.signUp().then((d:any)=>{
    //   console.log(d);
      
    // }).catch((err:any)=>{
    //   console.log(err);
      
    // };)
    this.parse.login({username : "admin@gmail.com", password: "admin"}).then((d:any)=>{
      console.log(d);
      
    }).catch((err:any)=>{
      console.log(err);
      
    });
    
  }
}
