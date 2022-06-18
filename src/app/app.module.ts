import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { EmployeesDetailComponent } from './components/employees-detail/employees-detail.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NewsEventsComponent } from './components/news-events/news-events.component';
import { CompanyComponent } from './components/company/company.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader, MatCardModule, MatCardTitle } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    DepartmentsComponent,
    DepartmentDetailComponent,
    EmployeesDetailComponent,
    EmployeesComponent,
    NewsEventsComponent,
    CompanyComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
