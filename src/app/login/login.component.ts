import { Component } from '@angular/core';
import { LoginForm } from '../login-form';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { LoginResponse } from '../login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoggedIn: boolean;
  login: LoginForm = new LoginForm("", "");
  loginResp: LoginResponse | undefined;
  errMsg: string = "";
  id:number

  constructor(private router: Router, private appService: AppService) {
    this.isLoggedIn = false;
  }

  loginCheck() {
    console.log(this.login);
    this.appService.loginCheck(this.login).subscribe(data => {

      this.loginResp = data;
      if (this.loginResp.validLogin) {
        localStorage.setItem("isLoggedIn", "true");
        this.id=this.loginResp.userId;

        this.router.navigate(["dashboard",this.id]);
      } else {
        this.errMsg = "Invalid Credentials";
      }


    });
  }

}
