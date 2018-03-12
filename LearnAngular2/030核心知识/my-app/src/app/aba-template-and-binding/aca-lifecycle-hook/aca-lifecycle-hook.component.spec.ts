import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaLifecycleHookComponent } from './aca-lifecycle-hook.component';

describe('AcaLifecycleHookComponent', () => {
  let component: AcaLifecycleHookComponent;
  let fixture: ComponentFixture<AcaLifecycleHookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcaLifecycleHookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaLifecycleHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
