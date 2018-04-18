import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaUserInputComponent } from './aaa-user-input.component';

describe('AaaUserInputComponent', () => {
  let component: AaaUserInputComponent;
  let fixture: ComponentFixture<AaaUserInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaaUserInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaaUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
