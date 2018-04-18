import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiaPipeComponent } from './aia-pipe.component';

describe('AiaPipeComponent', () => {
  let component: AiaPipeComponent;
  let fixture: ComponentFixture<AiaPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiaPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiaPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
