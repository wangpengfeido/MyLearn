import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaAdaAbaComponent } from './aba-ada-aba.component';

describe('AbaAdaAbaComponent', () => {
  let component: AbaAdaAbaComponent;
  let fixture: ComponentFixture<AbaAdaAbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaAdaAbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaAdaAbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
