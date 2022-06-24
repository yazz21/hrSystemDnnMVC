import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataSource: any;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {

    this.companyService.getAllCompany().subscribe(res => {
      this.dataSource = res
      console.log(this.dataSource);
      
    })
    
  }

}
