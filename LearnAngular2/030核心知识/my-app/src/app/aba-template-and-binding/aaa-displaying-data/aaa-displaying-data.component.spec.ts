import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaDisplayingDataComponent } from './aaa-displaying-data.component';

describe('AaaDisplayingDataComponent', () => {
  let component: AaaDisplayingDataComponent;
  let fixture: ComponentFixture<AaaDisplayingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaaDisplayingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaaDisplayingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
