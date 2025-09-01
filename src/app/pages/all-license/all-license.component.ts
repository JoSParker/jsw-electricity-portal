import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseComponent } from '../../shared/license/license.component';
@Component({
  selector: 'app-all-license',
  standalone: true,
  imports: [LicenseComponent,CommonModule],
  templateUrl: './all-license.component.html',
  styleUrl: './all-license.component.css'
})
export class AllLicenseComponent {
  myLicenses = [
  {
    name: 'John Doe',
    employeeCode: 'E001',
    email: 'john@example.com',
    mobile: '9876543210',
    department: 'IT',
    designation: 'Developer',
    company: 'ABC Corp'
  },
  {
    name: 'Jane Smith',
    employeeCode: 'E002',
    email: 'jane@example.com',
    mobile: '9876500000',
    department: 'HR',
    designation: 'Manager',
    company: 'XYZ Ltd'
  }
];




}
