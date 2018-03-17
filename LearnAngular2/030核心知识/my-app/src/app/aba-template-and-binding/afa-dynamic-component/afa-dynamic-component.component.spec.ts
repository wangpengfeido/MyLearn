import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfaDynamicComponentComponent } from './afa-dynamic-component.component';

describe('AfaDynamicComponentComponent', () => {
  let component: AfaDynamicComponentComponent;
  let fixture: ComponentFixture<AfaDynamicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfaDynamicComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfaDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
