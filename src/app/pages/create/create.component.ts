import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  licenseForm: FormGroup;
  uploadedFiles: { type: string, file: File }[] = [];

  constructor(private fb: FormBuilder) {
    this.licenseForm = this.fb.group({
      // ... your form controls here
      name: ['', Validators.required],
      // add all your controls similarly
      documentType: ['']
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const type = this.licenseForm.value.documentType;
    if (file && type) {
      this.uploadedFiles.push({ type, file });
      this.licenseForm.patchValue({ documentType: '' });
      event.target.value = "";
    }
  }

  addDocument() {
    // logic if you want to further process upon Add click
  }

  saveDraft() {
    // example logic
    alert('Saved as draft!');
  }

  onSubmit() {
    if (this.licenseForm.invalid) {
      alert('Fill all required fields!');
      return;
    }
    // handle submit
    alert('Submitted!');
  }
}
