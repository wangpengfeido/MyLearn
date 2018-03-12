import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaAdaAaaComponent } from './aba-ada-aaa.component';

describe('AbaAdaAaaComponent', () => {
  let component: AbaAdaAaaComponent;
  let fixture: ComponentFixture<AbaAdaAaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaAdaAaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaAdaAaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
