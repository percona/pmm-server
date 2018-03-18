import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInstanceIdComponent } from './instance-id.component';

describe('AppInstanceIdComponent', () => {
  let component: AppInstanceIdComponent;
  let fixture: ComponentFixture<AppInstanceIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInstanceIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInstanceIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
