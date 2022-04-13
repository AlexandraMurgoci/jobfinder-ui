import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';
import { LogoutComponent } from './logout/logout.component';
import { JobListComponent } from './job-list/job-list.component';
import { UserListComponent } from './user-list/user-list.component';

import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {DataViewModule} from 'primeng/dataview';
import {MultiSelectModule} from 'primeng/multiselect';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobGridViewComponent } from './job-list/job-grid-view/job-grid-view.component';
import { JobListViewComponent } from './job-list/job-list-view/job-list-view.component';
import {ButtonModule} from 'primeng/button';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    JobListComponent,
    UserListComponent,
    JobDetailsComponent,
    JobGridViewComponent,
    JobListViewComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DropdownModule,
    DataViewModule,
    ButtonModule,
    MultiSelectModule
  ],
  providers: [
    {  
      provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
