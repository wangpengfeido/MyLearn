import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaAbaComponent } from './aba-aba.component';

describe('AbaAbaComponent', () => {
  let component: AbaAbaComponent;
  let fixture: ComponentFixture<AbaAbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaAbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaAbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
