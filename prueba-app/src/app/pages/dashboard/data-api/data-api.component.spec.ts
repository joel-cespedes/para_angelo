import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataApiComponent } from './data-api.component';

describe('DataApiComponent', () => {
  let component: DataApiComponent;
  let fixture: ComponentFixture<DataApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataApiComponent]
    });
    fixture = TestBed.createComponent(DataApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
