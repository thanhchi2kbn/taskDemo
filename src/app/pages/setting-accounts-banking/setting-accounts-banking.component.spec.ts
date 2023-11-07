import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingAccountsBankingComponent } from './setting-accounts-banking.component';

describe('SettingAccountsBankingComponent', () => {
  let component: SettingAccountsBankingComponent;
  let fixture: ComponentFixture<SettingAccountsBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingAccountsBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingAccountsBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
