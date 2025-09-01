import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-license',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent {
  @Input() licenses: {
    name: string;
    employeeCode: string;
    email: string;
    mobile: string;
    department: string;
    designation: string;
    company: string;
  }[] = [];
}
