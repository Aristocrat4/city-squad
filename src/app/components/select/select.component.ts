import { Component, Inject, Injector, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
})
export class SelectComponent<T> implements ControlValueAccessor {
  control!: FormControl | undefined;
  isRequired = false;
  selectedCar!: number;
  public basePath: any;
  heroForm!: FormGroup;
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  private _isDisabled = false;
  private _destroy$ = new Subject<void>();
  private _onTouched!: () => T;

  constructor(
    @Inject(Injector) private injector: Injector,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.basePath = window.location.host.includes('localhost')
      ? ''
      : '/ng-select';
    this.heroForm = this.fb.group({
      heroId: 'batman',
      agree: null,
    });
    this.control = this.injector.get(FormControl);
    this.isRequired = this.control?.hasValidator(Validators.required);
  }

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
