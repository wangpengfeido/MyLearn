import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaAeaAbaComponent } from './aba-aea-aba.component';

describe('AbaAeaAbaComponent', () => {
  let component: AbaAeaAbaComponent;
  let fixture: ComponentFixture<AbaAeaAbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaAeaAbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaAeaAbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
