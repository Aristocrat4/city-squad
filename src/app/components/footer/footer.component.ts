import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private route: Router) {}
  onLogo() {
    this.route.navigate(['']);
  }
  callNumber(): void {
    window.location.href = 'tel:9297221167';
  }
}
