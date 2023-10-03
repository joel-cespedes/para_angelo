import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChangeThemeComponent } from './card-change-theme.component';

describe('CardChangeThemeComponent', () => {
  let component: CardChangeThemeComponent;
  let fixture: ComponentFixture<CardChangeThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardChangeThemeComponent]
    });
    fixture = TestBed.createComponent(CardChangeThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
