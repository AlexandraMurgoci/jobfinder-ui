import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list-view',
  templateUrl: './job-list-view.component.html',
  styleUrls: ['./job-list-view.component.scss']
})
export class JobListViewComponent implements OnInit {

  @Input() job : any;

  constructor() { }

  ngOnInit(): void {
  }

}
