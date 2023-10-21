import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRandomNumbersComponent } from './card-random-numbers.component';

describe('CardRandomNumbersComponent', () => {
  let component: CardRandomNumbersComponent;
  let fixture: ComponentFixture<CardRandomNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRandomNumbersComponent]
    });
    fixture = TestBed.createComponent(CardRandomNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
