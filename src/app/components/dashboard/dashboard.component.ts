import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userInfo: any;
  constructor(private authService: AuthService, private _router: Router) { }

   async ngOnInit() {
   this.userInfo = await this.authService.getUserInfo();
    console.log("From dashboard:"+ JSON.stringify(this.userInfo));
    if(this.userInfo == null){
      this._router.navigate(['/login'])
    }
  }

}
