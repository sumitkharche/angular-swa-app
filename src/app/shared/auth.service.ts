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
    const { pathname } = window.location;
    const redirect = `post_logout_redirect_uri=/`;
    const url = `/.auth/logout?${redirect}`;
    window.location.href = url;
  }

  loggedIn() {
    let userInfo;
     this.http.get<any>('/.auth/me').toPromise()
    .then(data => {
      console.log(data);
        userInfo = data.clientPrincipal != null ? data.clientPrincipal : null;
      console.log("From loggedIn inside subscribe:"+ userInfo);
    });
    console.log("From loggedId:"+ userInfo );
    
    if(userInfo == null)
      {
        return false;
      }else{
        return true;
      }
  }

  getLoggedInUserData(){
    this.http.get<any>('/.auth/me').toPromise()
    .then(data => {
      console.log(data);
      const userInfo = data.clientPrincipal != null ? data.clientPrincipal : null;
      console.log("From getLoggedInUserData:"+ userInfo);
      return userInfo;
    });
  }

}
