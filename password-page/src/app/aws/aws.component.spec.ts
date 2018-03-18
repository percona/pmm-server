import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAwsInstallationComponent } from './aws.component';

describe('AppAwsInstallationComponent', () => {
  let component: AppAwsInstallationComponent;
  let fixture: ComponentFixture<AppAwsInstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAwsInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAwsInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
