import { Component } from '@angular/core';
import { NewTask } from '../new-task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {

  task: NewTask = new NewTask();

  id: number;

  constructor(private router: Router, private taskService: TaskService, private route: ActivatedRoute) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.taskService.getTaskById(this.id).subscribe(data => {
      this.task = data;
    }, error => console.log(error));
  }



  updateTask() {
    this.taskService.updateTask(this.id, this.task).
      subscribe(data => {
        console.log(data);
        this.task = new NewTask();
        this.gotoList();
      },
        error =>
          console.log(error));
  }


  onSubmit() {
    this.updateTask();
  }

  gotoList() {
    this.router.navigate([`/view-task`])
  }



}
