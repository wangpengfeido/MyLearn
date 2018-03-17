import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaAdaAcaComponent } from './aba-ada-aca.component';

describe('AbaAdaAcaComponent', () => {
  let component: AbaAdaAcaComponent;
  let fixture: ComponentFixture<AbaAdaAcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaAdaAcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaAdaAcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
