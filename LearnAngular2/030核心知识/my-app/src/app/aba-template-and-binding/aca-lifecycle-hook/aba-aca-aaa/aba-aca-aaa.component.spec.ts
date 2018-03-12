import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaAcaAaaComponent } from './aba-aca-aaa.component';

describe('AbaAcaAaaComponent', () => {
  let component: AbaAcaAaaComponent;
  let fixture: ComponentFixture<AbaAcaAaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaAcaAaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaAcaAaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
