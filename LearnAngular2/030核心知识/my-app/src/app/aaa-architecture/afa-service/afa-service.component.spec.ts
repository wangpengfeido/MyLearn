import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfaServiceComponent } from './afa-service.component';

describe('AfaServiceComponent', () => {
  let component: AfaServiceComponent;
  let fixture: ComponentFixture<AfaServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfaServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
