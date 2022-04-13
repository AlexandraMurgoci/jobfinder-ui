import { Injectable } from '@angular/core';

export enum Role {
  USER = "ROLE_USER",
  ADMIN = "ROLE_ADMIN",
  HR = "ROLE_HR",
  INTERVIEWER = "ROLE_INTERVIEW"
}

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

  userHasRole(role: string) {
    return this.getUserRoles().indexOf(role)!=-1;
  }

  getUserEmail(): string {
    return sessionStorage.getItem('user-email') || "";
  }

  getUserPassword() {
    return sessionStorage.getItem('user-password') || "";
  }

  getUserId() {
    return sessionStorage.getItem('user-id') || "";
  }

  getUserRoles() : Array<string> {
    return this.isUserLogged() ? JSON.parse(sessionStorage.getItem('user-roles') || "") : [];
  }

  logout() {
    sessionStorage.setItem('user-email', "");
    sessionStorage.setItem('user-password', "");
    sessionStorage.setItem('user-roles', "");
    sessionStorage.setItem('user-id', "");
  }
}
