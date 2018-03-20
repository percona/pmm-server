import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAmiInstallationComponent } from './ami.component';

describe('AppAmiInstallationComponent', () => {
  let component: AppAmiInstallationComponent;
  let fixture: ComponentFixture<AppAmiInstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAmiInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAmiInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
