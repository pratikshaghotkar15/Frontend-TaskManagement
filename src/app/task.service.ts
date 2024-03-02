import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewTask } from './new-task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = 'http://localhost:9091/api/v1/tasks';

  constructor(private httpClient: HttpClient) { }

  createTask(task: NewTask): Observable<Object> {
    return this.httpClient.post(`${this.url}`, task);
  }


  getTasksList(): Observable<NewTask[]> {
    return this.httpClient.get<NewTask[]>(`${this.url}`);
  }

  getTaskById(id: number): Observable<NewTask> {
    return this.httpClient.get<NewTask>(`${this.url}/${id}`)
  }

  deleteTask(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }


  updateTask(id:number,task:NewTask):Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`,task);
   }

   filterTask(task:NewTask):Observable<NewTask[]>{
    return this.httpClient.post<NewTask[]>(`${this.url}/filter-task`,task);
   }



   change(id: number,status:string): Observable<Object> {
    return this.httpClient.get(`${this.url}/changestatus/${id}/${status}`);
  }

}
