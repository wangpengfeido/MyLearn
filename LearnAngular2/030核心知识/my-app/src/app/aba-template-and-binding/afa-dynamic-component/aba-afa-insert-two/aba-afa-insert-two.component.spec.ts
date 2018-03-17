import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaAfaInsertTwoComponent } from './aba-afa-insert-two.component';

describe('AbaAfaInsertTwoComponent', () => {
  let component: AbaAfaInsertTwoComponent;
  let fixture: ComponentFixture<AbaAfaInsertTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaAfaInsertTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaAfaInsertTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
