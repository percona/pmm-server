import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCredentialsComponent } from './account-credentials.component';

describe('AccountCredentialsComponent', () => {
  let component: AccountCredentialsComponent;
  let fixture: ComponentFixture<AccountCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
