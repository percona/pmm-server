import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOvfComponent } from './ovf.component';

describe('AddOvfComponent', () => {
  let component: AppOvfComponent;
  let fixture: ComponentFixture<AppOvfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOvfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOvfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
