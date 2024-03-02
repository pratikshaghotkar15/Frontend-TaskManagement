import { Component } from '@angular/core';
import { NewTask } from '../new-task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {

  tasks: NewTask[];
  task: NewTask = new NewTask();
  isDeleted:boolean;

  constructor(private taskService: TaskService, private router: Router) {
    this.tasks = [];
  }

  ngOnInit(): void {

    this.getTasks();

  }

  getTasks() {
    this.taskService.getTasksList().subscribe(data => {
      this.tasks = data;
    });
  }

  updateTask(id: number) {
    this.router.navigate(['update-task', id]);
  }


  deleteTask(id: number) {
    this.taskService.deleteTask(id)
      .subscribe(
        data => {
          console.log(data);
          this.getTasks();
          
        },
        error => console.log(error));
        this.router.navigate(["dashboard",id]);
        
  }

 

  changeStatus(id:number){
    this.taskService.getTaskById(id).subscribe(
      data=>{
        this.task=data;
      }
    )

    if(this.task.status==='pending'){
      this.taskService.change(id,'completed').subscribe(
        data=>{
          console.log(data);
          
        }
      )
      this.router.navigate(["dashboard",id]);
    }

    else{
      this.taskService.change(id,'completed').subscribe(
        data=>{
          console.log(data);
          
        }
      )
      this.router.navigate(["dashboard",id]);
    }
   
  }




}
