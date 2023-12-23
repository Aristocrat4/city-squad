import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPriceButtonComponent } from './get-price-button.component';

describe('GetPriceButtonComponent', () => {
  let component: GetPriceButtonComponent;
  let fixture: ComponentFixture<GetPriceButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetPriceButtonComponent]
    });
    fixture = TestBed.createComponent(GetPriceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
