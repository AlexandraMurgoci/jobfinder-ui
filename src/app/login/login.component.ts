import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData : {email: any, password: any} = {email: "", password: ""};
  showError: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    this.userService.login(this.loginData.email, this.loginData.password).subscribe(
      (result:any) => {
        this.authService.setAuthentication(this.loginData.email, this.loginData.password,result.roles, result.userId);
        this.showError = false;
        this.router.navigate(['home']);
      },
      () => {
        this.showError = true;
      }
    );
  }

  handleRegister() {
    this.router.navigate(['register']);
  }

}
