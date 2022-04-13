import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../job-details/job-details.component';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private baseUrl = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  saveJob(job: Job) {
    return this.http.post(this.baseUrl+"hr/job/create-or-update", job);
  }

  getJobById(id: string) {
    return this.http.get(this.baseUrl+"job/view/" + id);
  }

  search(page: number, searchParam: string) {
    return searchParam && (searchParam+"")!="" ?
     this.http.get(this.baseUrl+"job/search?page="+page+"&searchParam="+searchParam)
     : this.http.get(this.baseUrl+"job/search?page="+page);
  }

  deleteJob(job: any) {
    return this.http.post(this.baseUrl+"hr/job/delete", job);
  }
  
}
