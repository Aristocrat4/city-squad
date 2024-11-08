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
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

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
  contactForm: FormGroup;
  isModalOpen = false;

  constructor(private el: ElementRef, private fb: FormBuilder) {
    this.tvFormTest = this.fb.group({
      tvs: this.fb.array([this.createEmptyTv(true)]),
    });
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
    });
  }

  // Edit the specific form
  onEdit(tv: any, i: number) {
    const tvs = this.tvFormTest.get('tvs') as FormArray;
    tvs.controls.forEach((control, index) => {
      if (i === index) {
        control.get('active')?.setValue(true);
      }
    });
  }

  // Calculate and update the price for the specific TV
  onCalculate(tv: any, i: number) {
    const tvs = this.tvFormTest.get('tvs') as FormArray;
    let totalTvPrices = 0;

    // Calculate the new price for the edited TV form
    if (tvs.at(i).valid) {
      const tvValues = tvs.at(i).value;
      const newPrice = this.calculateSingleTvPrice(tvValues);

      // Update the price in the array instead of adding a new one
      this.tvPrices[i] = newPrice;

      // Recalculate total price
      this.totalPrice = this.tvPrices.reduce((acc, curr) => acc + curr, 0);

      // Close the edit mode for the current form
      tvs.at(i).get('active')?.setValue(false);
    }

    console.log(this.tvPrices);
  }

  // Calculate the total price for a single TV based on the inputs
  calculateSingleTvPrice(tv: TV): number {
    let price = 0;

    // Calculation logic for each TV
    if (tv.size === 'sm') {
      price = 69;
      if (tv.mountType === 'flattilt') {
        price += 29;
      } else if (tv.mountType === 'full') {
        price += 39;
      }
    } else if (tv.size === 'md') {
      price = 79;
      if (tv.mountType === 'flattilt') {
        price += 34;
      } else if (tv.mountType === 'full') {
        price += 49;
      }
    } else if (tv.size === 'lg') {
      price = 90;
      if (tv.mountType === 'flattilt') {
        price += 39;
      } else if (tv.mountType === 'full') {
        price += 59;
      }
    } else if (tv.size === 'xl') {
      price = 119;
      if (tv.mountType === 'flattilt') {
        price += 59;
      } else if (tv.mountType === 'full') {
        price += 99;
      }
    }

    if (tv.whereToHideWires === 'inside') {
      price += 59;
    } else if (tv.whereToHideWires === 'outside') {
      price += 29;
    }

    if (tv.soundBar === 'yes') {
      price += 39;
    }
    if (tv.shelves === 'yes') {
      price += 39;
    }
    if (tv.fireplace === 'yes') {
      price += 69;
    }
    if (tv.led === 'yes') {
      price += 29;
    }

    return price;
  }

  // Add a new TV form
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

      this.tvPrices.push(0); // Add a new price for the newly added TV form
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
  removeTvForm(index: number) {
    const tvs = this.tvFormTest.get('tvs') as FormArray;
    tvs.removeAt(index);
    this.tvPrices.splice(index, 1); // Remove the corresponding price

    // If no forms left, add an empty form
    if (tvs.length === 0) {
      this.onAddAnother();
    }

    // Recalculate total price
    this.totalPrice = this.tvPrices.reduce((acc, curr) => acc + curr, 0);
  }
  openModal() {
    console.log('eee');
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit(e: Event) {
    e.preventDefault();

    if (this.contactForm.valid && this.tvFormTest.valid) {
      // Extract contact form data
      const contactData = this.contactForm.value;

      // Extract TV form data
      const tvData = this.tvsList.value;

      // Format TV details into a structured string
      const tvsDetails = tvData
        .map((tv: any, index: number) => {
          return `
          TV #${index + 1}:
          - Size: ${tv.size || 'N/A'}
          - Mount Type: ${tv.mountType || 'N/A'}
          - Wires Hidden: ${tv.whereToHideWires || 'N/A'}
          - Sound Bar: ${tv.soundBar || 'N/A'}
          - Shelves: ${tv.shelves || 'N/A'}
          - Fireplace: ${tv.fireplace || 'N/A'}
          - LED: ${tv.led || 'N/A'}
          - Date: ${tv.date || 'N/A'}
          - Comment: ${tv.comment || 'N/A'}
          `;
        })
        .join('\n');

      const templateParams = {
        to_name: 'CitySquad Team', // The name of the recipient (fixed)
        from_name: contactData.fullName, // Sender's name
        fullName: contactData.fullName, // Full name of the customer
        phone: contactData.phone, // Phone number
        email: contactData.email, // Email address
        city: contactData.city, // City
        address: contactData.address, // Address
        zipCode: contactData.zipCode, // Zip code
        tvsDetails, // TV details as formatted string
        totalPrice: this.totalPrice, // Total price
      };

      // Send email through EmailJS
      emailjs
        .send(
          'service_4lnu17v', // Replace with your EmailJS service ID
          'template_myx7i6m', // Replace with your EmailJS template ID
          templateParams, // Parameters to send
          'n6f9HrvWskC0mApeH' // Replace with your EmailJS public key
        )
        .then(
          (response) => {
            console.log(
              'Email sent successfully!',
              response.status,
              response.text
            );
            alert('Order details sent successfully!');
            this.closeModal();
          },
          (error) => {
            console.error('Failed to send email:', error);
            alert('Failed to send email. Please try again.');
          }
        );
    } else {
      alert('Please complete the forms correctly before submitting.');
    }
  }
}
