import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.elementRef.nativeElement.classList.add('open');
    } else {
      this.elementRef.nativeElement.classList.remove('open');
    }
  }
  get isOpen(): boolean {
    return this._isOpen;
  }

  @Output() navbarClose = new EventEmitter<void>();

  private _isOpen = false;

  constructor(private elementRef: ElementRef) {}

  closeNavbar() {
    this.navbarClose.emit();
  }
}
