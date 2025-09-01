import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-license',
  templateUrl: './add-license.component.html',
  styleUrls: ['./add-license.component.css']
})
export class AddLicenseComponent {
  licenseForm: FormGroup;
  documentTypes = ['Aadhaar Card', 'PAN', 'Passport']; // Add as needed
  uploadedFiles: {type: string, file: File}[] = [];

  constructor(private fb: FormBuilder) {
    this.licenseForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      designation: [''],
      licenseNumber: [''],
      licenseType: ['Resident'],
      validLicense: [''],
      applicationStatus: [''],
      documentType: ['']
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const type = this.licenseForm.value.documentType;
    if (file && type) {
      this.uploadedFiles.push({ type, file });
      // Reset select and file input after upload
      this.licenseForm.patchValue({ documentType: '' });
      event.target.value = "";
    }
  }

  addDocument() {
    // File upload logic is handled in onFileSelected
    // (You can implement upload to backend here if needed)
  }

  saveDraft() {
    // Handle saving as draft (perhaps localStorage or call an API)
    alert('Saved as draft!');
    // Replace with a toaster for production use
  }

  onSubmit() {
    if (this.licenseForm.invalid) {
      alert('Fill all required fields!');
      // Use a toaster in production
      return;
    }
    // Prepare and send form data to your backend here
    alert('Submitted!');
    // Replace with a toaster in production
  }
}
