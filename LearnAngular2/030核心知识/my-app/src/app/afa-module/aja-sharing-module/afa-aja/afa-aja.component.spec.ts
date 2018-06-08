import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfaAjaComponent } from './afa-aja.component';

describe('AfaAjaComponent', () => {
  let component: AfaAjaComponent;
  let fixture: ComponentFixture<AfaAjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfaAjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfaAjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
