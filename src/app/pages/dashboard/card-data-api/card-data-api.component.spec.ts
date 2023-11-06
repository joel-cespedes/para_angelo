import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDataApiComponent } from './card-data-api.component';

describe('CardDataApiComponent', () => {
  let component: CardDataApiComponent;
  let fixture: ComponentFixture<CardDataApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDataApiComponent]
    });
    fixture = TestBed.createComponent(CardDataApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
