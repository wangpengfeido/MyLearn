import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaAnimationComponent } from './aja-animation.component';

describe('AjaAnimationComponent', () => {
  let component: AjaAnimationComponent;
  let fixture: ComponentFixture<AjaAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
