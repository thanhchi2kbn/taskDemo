import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFormAccountComponent } from './button-form-account.component';

describe('ButtonFormAccountComponent', () => {
  let component: ButtonFormAccountComponent;
  let fixture: ComponentFixture<ButtonFormAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonFormAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFormAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
