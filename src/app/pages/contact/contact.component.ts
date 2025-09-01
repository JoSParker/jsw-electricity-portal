import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  cards = [
    { icon: 'mail', title: 'Email', value: 'www.jsw.com' },
    { icon: 'phone', title: 'Our Phone Number', value: '1234567890' },
    { icon: 'location_on', title: 'Our Main Office', value: 'Address' }
  ];
}
