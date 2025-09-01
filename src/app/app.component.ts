import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // For *ngIf
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,      
    RouterOutlet,      
    HeaderComponent,   
    NavbarComponent,  
    FormsModule,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JSW';
  navbarOpen = false;

  constructor(public router: Router) {}

  isLoginPage() {
    return this.router.url === '/login';
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  closeNavbar() {
    this.navbarOpen = false;
  }
}
