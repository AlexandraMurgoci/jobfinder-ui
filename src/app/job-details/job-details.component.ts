import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../service/job.service';

export interface Job {
  jobId: number,
  title: string,
  company: string,
  level: string,
  type: string,
  city: string,
  requirements: string,
  description: string
}

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    jobId: [null],
    title: ["", Validators.required],
    company: ["", Validators.required],
    level: [null, Validators.required],
    type: ["", Validators.required],
    city: ["", Validators.required],
    requirements: ["", Validators.required],
    description: ["", Validators.required],
  });

  submitted = false;

  levelOption: any = ['Middle', 'Senior', 'Expert'];

  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  public getTitleErrors(): any {
    return this.form.get('title')?.errors;
  }

  public getFieldErrors(field: string) {
    return this.form.get(field)?.errors;
  }

  onChangeLevel(event: any) {
    //TODO if needed
  }

  onSubmit() {
    console.log("SUBMIT");
    this.submitted = true;
    if (!this.form.invalid) {
      let job: Job = {
        jobId: this.form.get("jobId")?.value,
        title: this.form.get("title")?.value,
        company: this.form.get("company")?.value,
        level: this.form.get("level")?.value,
        type: this.form.get("type")?.value,
        city: this.form.get("city")?.value,
        requirements: this.form.get("requirements")?.value,
        description: this.form.get("description")?.value,
      }
      console.log(job);
      this.jobService.saveJob(job).subscribe(
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
