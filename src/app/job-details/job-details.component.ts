import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../service/job.service';

export interface Job {
  id: number,
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

  createMode: boolean = false;
  viewMode: boolean = false;
  editMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobService,
    private router: Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
      this.resetModes();
      if(url[1].toString() == 'view') {
        this.viewMode = true;
        this.getAndDisplayJobById(url[2].toString());
      }
      else if(url[1].toString() == 'edit') {
        this.editMode = true;
        this.getAndDisplayJobById(url[2].toString());
      }
      else {
        this.createMode = true;
      }
    })
  }

  resetModes() {
    this.createMode = false;
    this.viewMode = false;
  }

  getAndDisplayJobById(id: string) {
    this.jobService.getJobById(id).subscribe(
      (result: any) => {
        this.setField("jobId", result.id);
        this.setField("title", result.title);
        this.setField("company", result.company);
        this.setField("level", result.level);
        this.setField("type", result.type);
        this.setField("city", result.city);
        this.setField("requirements", result.requirements);
        this.setField("description", result.description);
      }
    );
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

  public setField(field: string, value: any) {
    this.form.get(field)?.patchValue(value);
  }

  onChangeLevel(event: any) {
    //TODO if needed
  }

  onSubmit() {
    this.submitted = true;
    if (!this.form.invalid) {
      let job: Job = {
        id: this.form.get("jobId")?.value,
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
