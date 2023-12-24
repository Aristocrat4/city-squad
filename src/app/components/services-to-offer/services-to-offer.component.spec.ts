import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesToOfferComponent } from './services-to-offer.component';

describe('ServicesToOfferComponent', () => {
  let component: ServicesToOfferComponent;
  let fixture: ComponentFixture<ServicesToOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesToOfferComponent]
    });
    fixture = TestBed.createComponent(ServicesToOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
