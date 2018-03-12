import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaComponentCommunicationComponent } from './ada-component-communication.component';

describe('AdaComponentCommunicationComponent', () => {
  let component: AdaComponentCommunicationComponent;
  let fixture: ComponentFixture<AdaComponentCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaComponentCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaComponentCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
