import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCredentialsOvaComponent } from './account-credentials-ova.component';

describe('AccountCredentialsOvaComponent', () => {
  let component: AccountCredentialsOvaComponent;
  let fixture: ComponentFixture<AccountCredentialsOvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCredentialsOvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCredentialsOvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
