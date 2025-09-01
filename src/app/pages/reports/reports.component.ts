import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LicenseComponent } from '../../shared/license/license.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, LicenseComponent],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  filters = {
    empCode: '',
    department: '',
    designation: '',
    company: '',
    mobileNumber: '',
    licenseNumber: '',
    validLicense: '',
    resident: '',
    startDate: '',
    endDate: ''
  };

  
  myLicenses = [
    { name: 'John Doe', employeeCode: 'EMP001', email: 'john@example.com', mobile: '9876543210', department: 'IT', designation: 'Developer', company: 'TechCorp' },
    { name: 'Jane Smith', employeeCode: 'EMP002', email: 'jane@example.com', mobile: '9876500000', department: 'HR', designation: 'Manager', company: 'HRWorks' }
  ];

  
  filteredLicenses = [...this.myLicenses];

 
  applyFilters() {
    this.filteredLicenses = this.myLicenses.filter(emp => {
      const empCodeMatch = !this.filters.empCode || emp.employeeCode.toLowerCase().includes(this.filters.empCode.toLowerCase());
      const deptMatch = !this.filters.department || emp.department.toLowerCase().includes(this.filters.department.toLowerCase());
      const designationMatch = !this.filters.designation || emp.designation.toLowerCase().includes(this.filters.designation.toLowerCase());
      const companyMatch = !this.filters.company || emp.company.toLowerCase().includes(this.filters.company.toLowerCase());
      const mobileMatch = !this.filters.mobileNumber || emp.mobile.includes(this.filters.mobileNumber);


      return empCodeMatch && deptMatch && designationMatch && companyMatch && mobileMatch;
    });

    console.log('Filters applied:', this.filters, 'Results:', this.filteredLicenses);
  }

  
  resetFilters() {
    this.filters = {
      empCode: '',
      department: '',
      designation: '',
      company: '',
      mobileNumber: '',
      licenseNumber: '',
      validLicense: '',
      resident: '',
      startDate: '',
      endDate: ''
    };

    this.filteredLicenses = [...this.myLicenses]; 
  }
}
