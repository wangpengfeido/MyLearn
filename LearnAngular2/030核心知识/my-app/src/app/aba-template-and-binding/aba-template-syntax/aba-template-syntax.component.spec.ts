import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaTemplateSyntaxComponent } from './aba-template-syntax.component';

describe('AbaTemplateSyntaxComponent', () => {
  let component: AbaTemplateSyntaxComponent;
  let fixture: ComponentFixture<AbaTemplateSyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaTemplateSyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaTemplateSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
