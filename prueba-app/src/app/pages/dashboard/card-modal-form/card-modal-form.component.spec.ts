import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModalFormComponent } from './card-modal-form.component';

describe('CardModalFormComponent', () => {
  let component: CardModalFormComponent;
  let fixture: ComponentFixture<CardModalFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardModalFormComponent]
    });
    fixture = TestBed.createComponent(CardModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
