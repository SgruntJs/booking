import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestBoxComponent } from './guest-box.component';

describe('GuestBoxComponent', () => {
  let component: GuestBoxComponent;
  let fixture: ComponentFixture<GuestBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
