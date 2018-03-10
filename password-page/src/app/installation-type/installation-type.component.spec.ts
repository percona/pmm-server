import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationTypeComponent } from './installation-type.component';

describe('InstallationTypeComponent', () => {
  let component: InstallationTypeComponent;
  let fixture: ComponentFixture<InstallationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
