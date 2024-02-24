import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private route: Router) {}
  onNavigation(scroll: number) {
    window.scroll({
      top: scroll,
      left: 0,
      behavior: 'smooth',
    });
  }
  onLogo() {
    this.route.navigate(['']);
  }
}
