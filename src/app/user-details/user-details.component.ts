import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from '../service/authentication.service';
import { UserService } from '../service/user.service';

export interface User {
  id: number,
  username: string,
  password: string,
  email: string,
  roles: string[],
  active: boolean
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    id: [null],
    username: ["", Validators.required],
    password: ["", Validators.required],
    email: [null, Validators.required],
    roles: [[], Validators.required],
    active: [true, Validators.required]
  });

  submitted = false;

  createMode: boolean = true;
  viewMode: boolean = false;
  editMode: boolean = false;

  roleOptions: any[] = [
    {name: 'User', code: Role.USER},
    {name: 'Administrator', code: Role.ADMIN},
    {name: 'Hr', code: Role.HR},
    {name: 'Interviewer', code: Role.INTERVIEWER},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public getTitleErrors(): any {
    return this.form.get('title')?.errors;
  }

  public getFieldErrors(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.form.invalid) {
      let user: User = {
        id: this.form.get("id")?.value,
        username: this.form.get("username")?.value,
        password: this.form.get("password")?.value,
        email: this.form.get("email")?.value,
        roles: this.form.get("roles")?.value,
        active: this.form.get("active")?.value
      }
      this.userService.create(user).subscribe(
        () => {
          this.router.navigate(['home']);
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['home']);
  }

}
