import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSuccessPageComponent } from './success-page.component';

describe('SucessPageComponent', () => {
  let component: AppSuccessPageComponent;
  let fixture: ComponentFixture<AppSuccessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSuccessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
