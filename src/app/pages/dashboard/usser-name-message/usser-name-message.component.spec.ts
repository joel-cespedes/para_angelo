import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsserNameMessageComponent } from './usser-name-message.component';

describe('UsserNameMessageComponent', () => {
  let component: UsserNameMessageComponent;
  let fixture: ComponentFixture<UsserNameMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsserNameMessageComponent]
    });
    fixture = TestBed.createComponent(UsserNameMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
