import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeaDynamicFormComponent } from './aea-dynamic-form.component';

describe('AeaDynamicFormComponent', () => {
  let component: AeaDynamicFormComponent;
  let fixture: ComponentFixture<AeaDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeaDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeaDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
