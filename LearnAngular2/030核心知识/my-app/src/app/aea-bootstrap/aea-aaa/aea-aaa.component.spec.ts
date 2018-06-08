import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeaAaaComponent } from './aea-aaa.component';

describe('AeaAaaComponent', () => {
  let component: AeaAaaComponent;
  let fixture: ComponentFixture<AeaAaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeaAaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeaAaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
