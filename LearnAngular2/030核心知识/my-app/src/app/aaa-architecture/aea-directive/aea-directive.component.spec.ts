import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeaDirectiveComponent } from './aea-directive.component';

describe('AeaDirectiveComponent', () => {
  let component: AeaDirectiveComponent;
  let fixture: ComponentFixture<AeaDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeaDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeaDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
