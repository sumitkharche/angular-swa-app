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

   loggedIn() {
     let userInfo = this.getLoggedInUserData();
     console.log("From loggedId:"+ userInfo );
     if(userInfo && userInfo.clientPrincipal != null)
     {
       return true;
     }
     else{
       return false;
     }
  }

  getLoggedInUserData(){
    let userData;  
    this.http.get<any>('/.auth/me')
          .subscribe(data =>{
            userData = data;
          })
    //console.log(userData);
    // const userInfo = userData.clientPrincipal != null ? userData.clientPrincipal : null;
     console.log("From getLoggedInUserData:"+ userData);
    // localStorage.setItem('UserDetails',userInfo);
    return userData;
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
