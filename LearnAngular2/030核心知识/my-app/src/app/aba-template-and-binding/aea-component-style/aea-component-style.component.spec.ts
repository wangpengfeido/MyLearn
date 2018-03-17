import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeaComponentStyleComponent } from './aea-component-style.component';

describe('AeaComponentStyleComponent', () => {
  let component: AeaComponentStyleComponent;
  let fixture: ComponentFixture<AeaComponentStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeaComponentStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeaComponentStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
