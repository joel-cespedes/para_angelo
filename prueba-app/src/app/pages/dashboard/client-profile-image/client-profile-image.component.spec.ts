import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileImageComponent } from './client-profile-image.component';

describe('ClientProfileImageComponent', () => {
  let component: ClientProfileImageComponent;
  let fixture: ComponentFixture<ClientProfileImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientProfileImageComponent]
    });
    fixture = TestBed.createComponent(ClientProfileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
