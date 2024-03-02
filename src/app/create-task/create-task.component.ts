import { Component } from '@angular/core';
import { NewTask } from '../new-task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  task:NewTask=new NewTask();
  

  constructor(private taskService:TaskService,private router:Router){}

  onSubmit(){
    console.log(this.task);
    this.saveTask();
    }

    saveTask()
    {
    this.taskService.createTask(this.task)
    .subscribe(data=>{
    console.log(data);
  
    this.router.navigate(["view-task"])
    },
    error=>
    console.log(error));
    }
}
