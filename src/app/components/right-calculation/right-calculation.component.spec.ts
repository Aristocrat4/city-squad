import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCalculationComponent } from './right-calculation.component';

describe('RightCalculationComponent', () => {
  let component: RightCalculationComponent;
  let fixture: ComponentFixture<RightCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightCalculationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
