import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceIdComponent } from './instance-id.component';

describe('InstanceIdComponent', () => {
  let component: InstanceIdComponent;
  let fixture: ComponentFixture<InstanceIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
