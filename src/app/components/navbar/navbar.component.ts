import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isExpanded = false;
  userInfo: any;
  isUserLoggedIn = false;
  constructor(public authService: AuthService) { }

    async ngOnInit() {
    this.userInfo = await this.authService.getUserInfo();
    if(this.userInfo != null){
      this.isUserLoggedIn = true;
    }
    console.log(this.userInfo);
    
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logOutUser(){
    this.authService.logoutUser();
  }

}
