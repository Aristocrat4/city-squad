import { Component, ElementRef } from '@angular/core';
import { TvFormComponent } from '../tv-form/tv-form.component';
import { RightCalculationComponent } from '../right-calculation/right-calculation.component';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
  active?: boolean;
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
  tvFormTest!: FormGroup;
  totalPrice: number = 0;

  constructor(private el: ElementRef, private fb: FormBuilder) {
    this.tvFormTest = this.fb.group({
      tvs: this.fb.array([this.createEmptyTv(true)]),
    });
  }
  onEdit(tv: any, i: number) {
    const tvs = this.tvFormTest.get('tvs') as FormArray;
    tvs.controls.forEach((control, index) => {
      console.log(index, i, 'index');
      if (i === index) {
        control.get('active')?.setValue(true);
      }
    });
    console.log(tv, 'edit');
  }
  onSave(tv: any, i: number) {
    const tvs = this.tvFormTest.get('tvs') as FormArray;
    tvs.controls.forEach((control, index) => {
      console.log(index, i, 'index');
      if (i === index) {
        control.get('active')?.setValue(false);
      }
    });
    if (this.tvFormTest.valid && i < 4) {
      const newTv = this.createEmptyTv(true);
      const tvs = this.tvFormTest.get('tvs') as FormArray;
      tvs.push(newTv);

      tvs.controls.forEach((control) => {
        if (control !== newTv) {
          control.get('active')?.setValue(false);
        }
      });
    }
  }
  onAddAnother() {
    if (this.tvFormTest.valid) {
      const newTv = this.createEmptyTv(true);
      const tvs = this.tvFormTest.get('tvs') as FormArray;
      tvs.push(newTv);

      tvs.controls.forEach((control) => {
        if (control !== newTv) {
          control.get('active')?.setValue(false);
        }
      });
    }
  }
  get tvsList(): FormArray {
    return this.tvFormTest.get('tvs') as FormArray;
  }
  createEmptyTv(active: boolean): FormGroup {
    return this.fb.group({
      size: ['', Validators.required],
      mountType: ['', Validators.required],
      whereToHideWires: ['', Validators.required],
      soundBar: ['', Validators.required],
      shelves: ['', Validators.required],
      fireplace: ['', Validators.required],
      led: ['', Validators.required],
      date: [''],
      comment: [''],
      active: active,
    });
  }
}
