import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  setAuthentication(userEmail:string, password:string, roles: Array<string>, userId:string) {
    sessionStorage.setItem('user-email', userEmail);
    sessionStorage.setItem('user-password', password);
    sessionStorage.setItem('user-roles', JSON.stringify(roles));
    sessionStorage.setItem('user-id', userId);
  }

  isUserLogged() {
    return sessionStorage.getItem('user-email')!=null && sessionStorage.getItem('user-email')!="";
  }

  getUserEmail(): string {
    return sessionStorage.getItem('user-email') || "";
  }

  getUserPassword() {
    return sessionStorage.getItem('user-password') || "";
  }

  logout() {
    sessionStorage.setItem('user-email', "");
    sessionStorage.setItem('user-password', "");
    sessionStorage.setItem('user-roles', "");
    sessionStorage.setItem('user-id', "");
  }
}
