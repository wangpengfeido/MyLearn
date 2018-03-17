import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaAeaAaaComponent } from './aba-aea-aaa.component';

describe('AbaAeaAaaComponent', () => {
  let component: AbaAeaAaaComponent;
  let fixture: ComponentFixture<AbaAeaAaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaAeaAaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaAeaAaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
