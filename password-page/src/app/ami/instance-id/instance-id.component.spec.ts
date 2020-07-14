import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppInstanceIdComponent } from "./instance-id.component";
import { AppService } from "../../app.service";

describe("AppInstanceIdComponent", () => {
  let component: AppInstanceIdComponent;
  let fixture: ComponentFixture<AppInstanceIdComponent>;

  beforeEach(async(() => {
    const checkUserData = () => Promise.resolve(true);

    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [AppInstanceIdComponent],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: AppService, useValue: { checkUserData } },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInstanceIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
