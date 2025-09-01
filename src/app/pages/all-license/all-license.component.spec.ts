import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLicenseComponent } from './all-license.component';

describe('AllLicenseComponent', () => {
  let component: AllLicenseComponent;
  let fixture: ComponentFixture<AllLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllLicenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
