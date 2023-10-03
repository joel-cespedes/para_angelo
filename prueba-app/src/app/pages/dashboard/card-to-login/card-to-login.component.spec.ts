import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardToLoginComponent } from './card-to-login.component';

describe('CardToLoginComponent', () => {
  let component: CardToLoginComponent;
  let fixture: ComponentFixture<CardToLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardToLoginComponent]
    });
    fixture = TestBed.createComponent(CardToLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
