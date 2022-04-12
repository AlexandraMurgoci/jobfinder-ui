import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGridViewComponent } from './job-grid-view.component';

describe('JobGridViewComponent', () => {
  let component: JobGridViewComponent;
  let fixture: ComponentFixture<JobGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobGridViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
