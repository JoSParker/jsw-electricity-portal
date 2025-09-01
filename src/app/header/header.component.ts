import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();
  constructor(private router: Router) {}

  onMenuClick() {
    this.menuToggle.emit();
  }

  onBellClick() {
    // Handle bell notifications
    console.log('Bell clicked');
  }

  onUserClick() {
    this.router.navigate(['../pages/login']);
    console.log('User clicked');
  }
  
  // These methods are now handled through the menuToggle event
}