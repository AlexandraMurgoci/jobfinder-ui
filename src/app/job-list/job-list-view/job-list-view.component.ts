import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService, Role } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-job-list-view',
  templateUrl: './job-list-view.component.html',
  styleUrls: ['./job-list-view.component.scss']
})
export class JobListViewComponent implements OnInit {

  @Input() job : any;
  @Output() jobUpdate: EventEmitter<any> = new EventEmitter<any>();
  @Output() jobDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  handleUpdate(job:any) {
    this.jobUpdate.emit(job);
  } 

  handleDelete(job:any) {
    this.jobDelete.emit(job);
  } 

  isUserHr(): boolean {
    return this.authService.isUserLogged() && this.authService.userHasRole(Role.HR);
  }

}
