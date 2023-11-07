import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAccoutsBankingComponent } from './table-accouts-banking.component';

describe('TableAccoutsBankingComponent', () => {
  let component: TableAccoutsBankingComponent;
  let fixture: ComponentFixture<TableAccoutsBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAccoutsBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAccoutsBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
