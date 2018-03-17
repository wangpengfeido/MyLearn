import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhaStructuralDirectivesComponent } from './aha-structural-directives.component';

describe('AhaStructuralDirectivesComponent', () => {
  let component: AhaStructuralDirectivesComponent;
  let fixture: ComponentFixture<AhaStructuralDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhaStructuralDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhaStructuralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
