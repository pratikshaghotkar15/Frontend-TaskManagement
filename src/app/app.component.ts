import { Component, DoCheck } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'taskmanagement';

  isLoggedIn:Boolean=false;

  constructor(private appService:AppService,private router:Router){}

  ngDoCheck(): void {
    this.isLoggedIn=this.appService.validateLogin();
  }
  
}
