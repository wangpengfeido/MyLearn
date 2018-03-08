import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaAaaComponent } from './aba-aaa.component';

describe('AbaAaaComponent', () => {
  let component: AbaAaaComponent;
  let fixture: ComponentFixture<AbaAaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaAaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaAaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
