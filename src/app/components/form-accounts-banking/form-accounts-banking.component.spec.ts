import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAccountsBankingComponent } from './form-accounts-banking.component';

describe('FormAccountsBankingComponent', () => {
  let component: FormAccountsBankingComponent;
  let fixture: ComponentFixture<FormAccountsBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAccountsBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAccountsBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
