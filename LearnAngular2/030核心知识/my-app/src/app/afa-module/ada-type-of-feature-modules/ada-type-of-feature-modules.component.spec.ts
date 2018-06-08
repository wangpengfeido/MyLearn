import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaTypeOfFeatureModulesComponent } from './ada-type-of-feature-modules.component';

describe('AdaTypeOfFeatureModulesComponent', () => {
  let component: AdaTypeOfFeatureModulesComponent;
  let fixture: ComponentFixture<AdaTypeOfFeatureModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaTypeOfFeatureModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaTypeOfFeatureModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
