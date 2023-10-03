import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMainActionsComponent } from './card-main-actions.component';

describe('CardMainActionsComponent', () => {
  let component: CardMainActionsComponent;
  let fixture: ComponentFixture<CardMainActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMainActionsComponent]
    });
    fixture = TestBed.createComponent(CardMainActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
