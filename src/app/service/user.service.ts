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

  search(page: number, searchParam: string) {
    return searchParam && (searchParam+"")!="" ?
     this.http.get(this.baseUrl+"admin/user/search?page="+page+"&searchParam="+searchParam)
     : this.http.get(this.baseUrl+"admin/user/search?page="+page);
  }

  create(user: any) {
    let createUser = {
      email: user.email,
      username: user.username,
      password: user.password,
      roles: user.roles
    };
    return this.http.post(this.baseUrl + "admin/user/create", createUser);
  }
}
