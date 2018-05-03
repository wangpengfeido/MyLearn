import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaTemplateDrivenFormComponent } from './aba-template-driven-form.component';

describe('AbaTemplateDrivenFormComponent', () => {
  let component: AbaTemplateDrivenFormComponent;
  let fixture: ComponentFixture<AbaTemplateDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaTemplateDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
