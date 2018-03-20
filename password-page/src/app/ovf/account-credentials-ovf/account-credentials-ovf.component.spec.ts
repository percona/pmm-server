import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAccountCredentialsOvfComponent } from "./account-credentials-ovf.component";

describe('AccountCredentialsOvfComponent', () => {
  let component: AppAccountCredentialsOvfComponent;
  let fixture: ComponentFixture<AppAccountCredentialsOvfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAccountCredentialsOvfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAccountCredentialsOvfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
