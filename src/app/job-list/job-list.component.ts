import { Component, OnInit } from '@angular/core';
import { JobService } from '../service/job.service';
import { Subject } from 'rxjs';
import { debounceTime , distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobList: any[] = [];
  searchParam = "";
  totalRecords = 0;

  customInput : Subject<string> = new Subject();

  constructor(
    private jobService: JobService
  ) { }

  ngOnInit(): void {
    this.reloadData();
    this.customInput.pipe(debounceTime(300),distinctUntilChanged()).subscribe(value =>{
      this.reloadData();
     });
  }

  loadData(event: any) {
    this.jobService.search(event.first/10, this.searchParam).subscribe(
      (result: any) => {
        this.jobList = result.content;
        this.totalRecords = result.totalElements;
      },
      () => this.jobList = []
    );
  }

  reloadData() {
    this.jobService.search(0, this.searchParam).subscribe(
      (result: any) => {
        this.jobList = result.content;
        this.totalRecords = result.totalElements;
      }
    );
  }

  inputValueChanged(){
    this.customInput.next(this.searchParam);
  }

}
