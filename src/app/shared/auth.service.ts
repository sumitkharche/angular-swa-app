import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: any;
  constructor(private http: HttpClient) { }

  loginUser(provider){
    const { pathname } = window.location;
    const redirect = `post_login_redirect_uri=/dashboard`;
    const url = `/.auth/login/${provider}?${redirect}`;
    window.location.href = url;
  }
  
  logoutUser(){
    localStorage.removeItem("UserDetails");
    const { pathname } = window.location;
    const redirect = `post_logout_redirect_uri=/`;
    const url = `/.auth/logout?${redirect}`;
    window.location.href = url;
  }

   async loggedIn() {
     let userInfo = await this.getLoggedInUserData();
      console.log("From loggedId:"+ userInfo );
  }

  async getLoggedInUserData(){
    const data = await this.http.get<any>('/.auth/me').toPromise();
    console.log(data);
    const userInfo = data.clientPrincipal != null ? data.clientPrincipal : null;
    console.log("From getLoggedInUserData:"+ userInfo);
    localStorage.setItem('UserDetails',userInfo);
    return userInfo;
  }

  isUserLoggedIn(){
    let data = localStorage.getItem("UserDetails");
    if(data != "null"){
      return true; 
    }else{
      return false;
    }
  }

}
