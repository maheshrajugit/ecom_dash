import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ParseService {

  constructor() {
    const env = environment.parseConfig;
    Parse.initialize(env.appId, env.javascriptKey, env.masterKey);
    (Parse as any).serverURL = env.serverURL;
   
    
}

async login(loginCred: any) {
  try {
    // var password = CryptoJS.AES.decrypt(loginCred.password, environment.authClientKey).toString(CryptoJS.enc.Utf8);
    var password = loginCred.password;
    var user = await Parse.User.logIn(loginCred.username, password);
    let access: any
    if (user.id) {
      await this.getUserRole(user).then((data: any) => {
        access = data;
      })
    }
    return access;
  }
  catch (err: any) {
    console.log(err.message);
    throw err.message;
  }
}

async signUp()
{
  const user = new Parse.User();
user.set("username", "admin@saavithri.in");
user.set("password", "Saavithri!234");
user.set("email", "admin@saavithri.in");

// other fields can be set just like with Parse.Object

try {
  await user.signUp();
  // Hooray! Let them use the app now.
} catch (error:any) {
  // Show the error message somewhere and let the user try again.
  alert("Error: " + error.code + " " + error.message);
}
}

async getUserRole(user: any = null) {
  try {
    if (!user) {
      user = await Parse.User.current()
    }
    if (!user) {
      return false;
    }
    let roles: any = await new Parse.Query(Parse.Role).equalTo('users', user).find();
    if (roles[0] && roles[0].attributes.name) {
      return roles[0].attributes.name;
    }
    else {
      return false;
    }
  }
  catch (err: any) {
    if (err.message === 'Invalid session token') {
      localStorage.clear();
      window.location.reload();
    }
    console.log(err.message);
    return false;
  }
}

}
