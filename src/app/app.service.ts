import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';
import { Observable } from 'rxjs';
import { LoginResponse } from './login-response';
import { RegisterResponse } from './register-response';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl='http://localhost:9091';

  loginCheck(loginForm:LoginForm):Observable<LoginResponse>{
    return this.httpClient.post<LoginResponse>(`${this.baseUrl}/login`,loginForm,{responseType:"json"});
  }


  registration(registerForm:RegisterForm):Observable<RegisterResponse>{
    return this.httpClient.post<RegisterResponse>(`${this.baseUrl}/register`,registerForm,{responseType:"json"});
  }

  validateLogin():Boolean{
    return Boolean(localStorage.getItem("isLoggedIn"));
  }

  getUserById(id: number): Observable<RegisterForm> {
    return this.httpClient.get<RegisterForm>(`${this.baseUrl}/${id}`)
  }
}
