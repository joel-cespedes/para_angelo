import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModalSimpleComponent } from './card-modal-simple.component';

describe('CardModalSimpleComponent', () => {
  let component: CardModalSimpleComponent;
  let fixture: ComponentFixture<CardModalSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardModalSimpleComponent]
    });
    fixture = TestBed.createComponent(CardModalSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
