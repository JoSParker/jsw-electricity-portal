import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  standalone: true,
  imports: [CommonModule] 
})
export class FaqComponent {
  
  openIndex: number | null = null;


  toggleFAQ(index: number) {
    if (this.openIndex === index) {
      this.openIndex = null; 
    } else {
      this.openIndex = index; 
    }
  }
}
