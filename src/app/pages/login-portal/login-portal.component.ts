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
  public error:any='';
  constructor(private router:Router, private parse:ParseService)
  {

  }

  ngOnInit()
  {

  }

  login()
  {
    this.parse.login({username : this.username, password: this.password}).then((user:any)=>{
      console.log(user);
      if(user.id)
      {
        this.router.navigateByUrl("/dashboard/home")
      }
      
    }).catch((err:any)=>{
      console.log(err);
      this.error = err
    });
    
  }
}
