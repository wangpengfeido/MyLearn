import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaAcaComponent } from './aba-aca.component';

describe('AbaAcaComponent', () => {
  let component: AbaAcaComponent;
  let fixture: ComponentFixture<AbaAcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaAcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaAcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
