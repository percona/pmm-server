import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDockerPageComponent } from './docker-page.component';

describe('AppDockerPageComponent', () => {
  let component: AppDockerPageComponent;
  let fixture: ComponentFixture<AppDockerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDockerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDockerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
