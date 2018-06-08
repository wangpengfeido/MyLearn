import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaDependencyInjectionComponent } from './aba-dependency-injection.component';

describe('AbaDependencyInjectionComponent', () => {
  let component: AbaDependencyInjectionComponent;
  let fixture: ComponentFixture<AbaDependencyInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaDependencyInjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaDependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
