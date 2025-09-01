import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    
    if (this.username === 'john' && this.password === 'john') {
      
      localStorage.setItem('isLoggedIn', 'true');
      
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials! Use admin/admin123');
    }
  }
}
