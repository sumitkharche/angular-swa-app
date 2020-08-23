import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  loginUser(provider){
    const { pathname } = window.location;
    const redirect = `post_login_redirect_uri=${pathname}dashboard`;
    const url = `/.auth/login/${provider}?${redirect}`;
    window.location.href = url;
  }
  
  logoutUser(){
    const { pathname } = window.location;
    const redirect = `post_logout_redirect_uri=${pathname}login`;
    const url = `/.auth/logout?${redirect}`;
    window.location.href = url;
  }

  loggedIn() {
    // this.http.get<any>('/.auth/me')
    // .subscribe(data => {
    //   console.log(data);      
    // });
    this.getLoggedInUserData()
    return true;
  }

  getLoggedInUserData(){
    this.http.get<any>('/.auth/me')
    .subscribe(data => {
      console.log(data);        
    });
  }

}
