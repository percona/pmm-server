import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOvaComponent } from './ova.component';

describe('AddOvaComponent', () => {
  let component: AddOvaComponent;
  let fixture: ComponentFixture<AddOvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
