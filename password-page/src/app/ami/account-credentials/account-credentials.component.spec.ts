import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAccountCredentialsComponent } from './account-credentials.component';

describe('AccountCredentialsComponent', () => {
  let component: AppAccountCredentialsComponent;
  let fixture: ComponentFixture<AppAccountCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAccountCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAccountCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
