import { Component, ElementRef } from '@angular/core';
import { TvFormComponent } from '../tv-form/tv-form.component';
import { RightCalculationComponent } from '../right-calculation/right-calculation.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from '../select/select.component';
import { CommonModule } from '@angular/common';
interface TV {
  size?: string | null | undefined;
  mountType?: string | null | undefined;
  whereToHideWires?: string | null | undefined;
  soundBar?: string | null | undefined;
  shelves?: string | null | undefined;
  fireplace?: string | null | undefined;
  led?: string | null | undefined;
  date?: string | null | undefined;
  comment?: string | null | undefined;
}
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
  isContactFormVisible!: false;
  isWarningTextVisible!: false;
  tvList: TV[] = [];
  constructor(private el: ElementRef) {}
  onEdit() {
    console.log('edit');
    const element = this.el.nativeElement.querySelector('.labels');
    console.log(element);
  }
  onAddAnother() {
    console.log(this.tvForm.value);
    this.tvList.push(this.tvForm.value);
  }
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
