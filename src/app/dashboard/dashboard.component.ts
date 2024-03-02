import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewTask } from '../new-task';
import { TaskService } from '../task.service';
import { AppService } from '../app.service';
import { RegisterForm } from '../register-form';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user:RegisterForm=new RegisterForm("","","","","",new Date());
  constructor(private route:ActivatedRoute,private service:AppService){}

  id:number;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getUserById(this.id).subscribe(
      data=>{
        this.user=data;

      }, error => console.log(error)
    ); 
  }
  



}
