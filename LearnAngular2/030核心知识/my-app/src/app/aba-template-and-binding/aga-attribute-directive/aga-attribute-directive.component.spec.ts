import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgaAttributeDirectiveComponent } from './aga-attribute-directive.component';

describe('AgaAttributeDirectiveComponent', () => {
  let component: AgaAttributeDirectiveComponent;
  let fixture: ComponentFixture<AgaAttributeDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgaAttributeDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgaAttributeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
