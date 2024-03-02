import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { NewTask } from '../new-task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-task',
  templateUrl: './filter-task.component.html',
  styleUrls: ['./filter-task.component.css']
})
export class FilterTaskComponent {

  tasks:NewTask[];
  task:NewTask=new NewTask();
  constructor(private taskService:TaskService,private router:Router){
    this.tasks=[];
  }


  onSubmit(){
    this.filterTask();
  }


  filterTask(){
    this.taskService.filterTask(this.task)
    .subscribe(data=>{
    this.tasks=data;
    this.router.navigate(["filter-task"])
    },
    error=>
    console.log(error));
    }



  }
  


