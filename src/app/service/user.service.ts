import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8080/";

  constructor(
    private http: HttpClient
  ) { }

  login(email:string, password:string) {
    let loginData = {'usernameOrEmail':email, 'password':password};
    return this.http.post(this.baseUrl+"login",loginData);
  }
}
