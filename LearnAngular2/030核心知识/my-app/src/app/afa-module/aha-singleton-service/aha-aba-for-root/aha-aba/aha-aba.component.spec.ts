import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhaAbaComponent } from './aha-aba.component';

describe('AhaAbaComponent', () => {
  let component: AhaAbaComponent;
  let fixture: ComponentFixture<AhaAbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhaAbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhaAbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
