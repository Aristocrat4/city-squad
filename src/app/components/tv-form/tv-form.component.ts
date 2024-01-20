import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tv-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tv-form.component.html',
  styleUrl: './tv-form.component.scss',
})
export class TvFormComponent {
  tvForm = new FormGroup({
    size: new FormControl(''),
    mountType: new FormControl(''),
    whereToHideWires: new FormControl(''),
    soundBar: new FormControl(''),
    shelves: new FormControl(''),
    fireplace: new FormControl(''),
    led: new FormControl(''),
    date: new FormControl(''),
    comment: new FormControl(''),
  });
}
