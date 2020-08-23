import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  providers: any = [
    {key: 'github', value:'Github', btnColor: 'dark'},
    {key: 'google', value:'Google', btnColor: 'danger'},
    {key: 'twitter', value:'Twitter',btnColor: 'info'}
]
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginUser(provider){
    //this.authService.loginUser(provider);
    console.log(provider);
    
  }

}
