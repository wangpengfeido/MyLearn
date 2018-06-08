import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfaAeaAaaComponent } from './afa-aea-aaa.component';

describe('AfaAeaAaaComponent', () => {
  let component: AfaAeaAaaComponent;
  let fixture: ComponentFixture<AfaAeaAaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfaAeaAaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfaAeaAaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
