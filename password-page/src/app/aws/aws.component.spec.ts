import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAwsInstallationComponent } from './aws.component';

describe('AddAwsInstallationComponent', () => {
  let component: AddAwsInstallationComponent;
  let fixture: ComponentFixture<AddAwsInstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAwsInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAwsInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
