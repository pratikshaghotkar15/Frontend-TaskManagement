import { Component } from '@angular/core';
import { RegisterForm } from '../register-form';
import { AppService } from '../app.service';
import { RegisterResponse } from '../register-response';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  register:RegisterForm=new RegisterForm("","","","","",new Date());
  regResp:RegisterResponse | undefined;

  constructor(private appService:AppService,private router:Router){}

  registration(){
    this.appService.registration(this.register).subscribe(data=>{
      this.regResp=data;
      console.log(this.regResp);
      this.router.navigate(["/"])
      
    });
  }
}
