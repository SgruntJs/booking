import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseChangeComponent } from './choose-change.component';

describe('ChooseChangeComponent', () => {
  let component: ChooseChangeComponent;
  let fixture: ComponentFixture<ChooseChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
