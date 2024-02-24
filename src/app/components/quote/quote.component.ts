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
  tvPrices: number[] = [];

  constructor(private el: ElementRef, private fb: FormBuilder) {
    this.tvFormTest = this.fb.group({
      tvs: this.fb.array([this.createEmptyTv(true)]),
    });
  }
  onEdit(tv: any, i: number) {
    const tvs = this.tvFormTest.get('tvs') as FormArray;
    tvs.controls.forEach((control, index) => {
      if (i === index) {
        control.get('active')?.setValue(true);
      }
    });
  }
  onCalculate(tv: any, i: number) {
    let newTvPrice = 0;
    let totalTvPrices = 0;
    const tvs = this.tvFormTest.get('tvs') as FormArray;
    tvs.controls.forEach((control, index) => {
      if (i === index && control.valid) {
        control.get('active')?.setValue(false);
        this.calculateTotalPrice(this.tvsList.value);
      }
    });
    if (this.tvFormTest.valid && i < 4) {
      const newTv = this.createEmptyTv(true);
      const tvs = this.tvFormTest.get('tvs') as FormArray;
      // tvs.push(newTv);

      tvs.controls.forEach((control) => {
        if (control !== newTv) {
          control.get('active')?.setValue(false);
        }
      });
      this.tvPrices.forEach((price) => {
        totalTvPrices += price;
      });
      newTvPrice = this.totalPrice - totalTvPrices;
      this.tvPrices.push(newTvPrice);
    }

    totalTvPrices = 0;
    newTvPrice = 0;
    console.log(this.tvPrices);
  }
  calculateTotalPrice(tvArray: TV[]) {
    this.totalPrice = 0;
    tvArray.forEach((tv) => {
      if (tv.size === 'sm') {
        this.totalPrice += 69;
        if (tv.mountType === 'flattilt') {
          this.totalPrice += 29;
        } else if (tv.mountType === 'full') {
          this.totalPrice += 39;
        }
      } else if (tv.size === 'md') {
        this.totalPrice += 79;
        if (tv.mountType === 'flattilt') {
          this.totalPrice += 34;
        } else if (tv.mountType === 'full') {
          this.totalPrice += 49;
        }
      } else if (tv.size === 'lg') {
        this.totalPrice += 90;
        if (tv.mountType === 'flattilt') {
          this.totalPrice += 39;
        } else if (tv.mountType === 'full') {
          this.totalPrice += 59;
        }
      } else if (tv.size === 'xl') {
        this.totalPrice += 119;
        if (tv.mountType === 'flattilt') {
          this.totalPrice += 59;
        } else if (tv.mountType === 'full') {
          this.totalPrice += 99;
        }
      }
      if (tv.whereToHideWires === 'inside') {
        this.totalPrice += 59;
      } else if (tv.whereToHideWires === 'outside') {
        this.totalPrice += 29;
      }
      tv.soundBar === 'yes' ? (this.totalPrice += 39) : (this.totalPrice += 0);
      tv.shelves === 'yes' ? (this.totalPrice += 39) : (this.totalPrice += 0);
      tv.fireplace === 'yes' ? (this.totalPrice += 69) : (this.totalPrice += 0);
      tv.led === 'yes' ? (this.totalPrice += 29) : (this.totalPrice += 0);
    });
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
