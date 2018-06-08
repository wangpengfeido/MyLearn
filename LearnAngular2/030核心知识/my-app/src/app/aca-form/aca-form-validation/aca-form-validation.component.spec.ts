import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaFormValidationComponent } from './aca-form-validation.component';

describe('AcaFormValidationComponent', () => {
  let component: AcaFormValidationComponent;
  let fixture: ComponentFixture<AcaFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcaFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
