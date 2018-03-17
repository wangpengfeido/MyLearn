import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaAeaAcaComponent } from './aba-aea-aca.component';

describe('AbaAeaAcaComponent', () => {
  let component: AbaAeaAcaComponent;
  let fixture: ComponentFixture<AbaAeaAcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaAeaAcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaAeaAcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
