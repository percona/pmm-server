import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerPageComponent } from './docker-page.component';

describe('DockerPageComponent', () => {
  let component: DockerPageComponent;
  let fixture: ComponentFixture<DockerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DockerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
