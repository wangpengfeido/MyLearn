import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaDataBindingComponent } from './ada-data-binding.component';

describe('AdaDataBindingComponent', () => {
  let component: AdaDataBindingComponent;
  let fixture: ComponentFixture<AdaDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
