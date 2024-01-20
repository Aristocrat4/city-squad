import { Component } from '@angular/core';
import { TvFormComponent } from '../tv-form/tv-form.component';
import { RightCalculationComponent } from '../right-calculation/right-calculation.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from '../select/select.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [
    TvFormComponent,
    RightCalculationComponent,
    ReactiveFormsModule,
    SelectComponent,
    CommonModule,
  ],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss',
})
export class QuoteComponent {
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
