import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { EmployeesDetailComponent } from './components/employees-detail/employees-detail.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NewsEventsComponent } from './components/news-events/news-events.component';
import { CompanyComponent } from './components/company/company.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MaterialModule } from './material.module';
import { CompanyService } from './services/company.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddCompanyDialogboxComponent } from './components/add-company-dialogbox/add-company-dialogbox.component';
import { DeleteCompanyDialogboxComponent } from './components/delete-company-dialogbox/delete-company-dialogbox.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    DepartmentDetailComponent,
    EmployeesDetailComponent,
    EmployeesComponent,
    NewsEventsComponent,
    CompanyComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    AddCompanyDialogboxComponent,
    DeleteCompanyDialogboxComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [CompanyService],
  bootstrap: [AppComponent],
  entryComponents: [AddCompanyDialogboxComponent, DeleteCompanyDialogboxComponent]
})
export class AppModule { }
