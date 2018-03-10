import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPageComponent } from './success-page.component';

describe('SucessPageComponent', () => {
  let component: SuccessPageComponent;
  let fixture: ComponentFixture<SuccessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
