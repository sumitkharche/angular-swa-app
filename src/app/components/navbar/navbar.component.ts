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
  isUserLoggedIn = false;
  constructor(public authService: AuthService) { }

    async ngOnInit() {
    await this.authService.loggedIn();
    this.isUserLoggedIn = this.authService.isUserLoggedIn();
    console.log(this.isUserLoggedIn);
    
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
