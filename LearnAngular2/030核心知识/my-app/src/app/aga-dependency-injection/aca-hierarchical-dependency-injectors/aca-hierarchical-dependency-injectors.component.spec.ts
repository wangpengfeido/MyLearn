import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaHierarchicalDependencyInjectorsComponent } from './aca-hierarchical-dependency-injectors.component';

describe('AcaHierarchicalDependencyInjectorsComponent', () => {
  let component: AcaHierarchicalDependencyInjectorsComponent;
  let fixture: ComponentFixture<AcaHierarchicalDependencyInjectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcaHierarchicalDependencyInjectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaHierarchicalDependencyInjectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
