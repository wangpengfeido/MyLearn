import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaReactiveFormComponent } from './ada-reactive-form.component';

describe('AdaReactiveFormComponent', () => {
  let component: AdaReactiveFormComponent;
  let fixture: ComponentFixture<AdaReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
