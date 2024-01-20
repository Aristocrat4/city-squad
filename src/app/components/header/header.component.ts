import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  onNavigation(scroll: number) {
    window.scroll({
      top: scroll,
      left: 0,
      behavior: 'smooth',
    });
  }
}
