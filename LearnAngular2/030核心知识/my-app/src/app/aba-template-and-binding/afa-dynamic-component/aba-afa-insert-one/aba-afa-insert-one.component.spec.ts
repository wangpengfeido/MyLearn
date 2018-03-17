import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaAfaInsertOneComponent } from './aba-afa-insert-one.component';

describe('AbaAfaInsertOneComponent', () => {
  let component: AbaAfaInsertOneComponent;
  let fixture: ComponentFixture<AbaAfaInsertOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaAfaInsertOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaAfaInsertOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
