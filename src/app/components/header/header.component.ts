import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  onServices() {
    window.scroll({
      top: 780,
      left: 0,
      behavior: 'smooth',
    });
  }
}
