import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {

  profileForm = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(''),
  });

  constructor(private companyService: CompanyService,) { }

  onSubmit() {
    console.log(this.profileForm.value);
    
    this.companyService.addCompany(this.profileForm.value);
  }

}
