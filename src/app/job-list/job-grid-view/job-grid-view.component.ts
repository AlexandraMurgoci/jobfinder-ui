import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-grid-view',
  templateUrl: './job-grid-view.component.html',
  styleUrls: ['./job-grid-view.component.scss']
})
export class JobGridViewComponent implements OnInit {

  @Input() job : any;

  constructor() { }

  ngOnInit(): void {
  }

}
