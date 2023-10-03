import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSimpleComponent } from './modal-simple.component';

describe('ModalSimpleComponent', () => {
  let component: ModalSimpleComponent;
  let fixture: ComponentFixture<ModalSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSimpleComponent]
    });
    fixture = TestBed.createComponent(ModalSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
