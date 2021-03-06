import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userInfo: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userInfo = this.authService.getLoggedInUserData()
    console.log(this.userInfo);
    
  }

}
