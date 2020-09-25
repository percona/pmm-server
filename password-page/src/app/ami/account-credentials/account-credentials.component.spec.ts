import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppAccountCredentialsComponent } from "./account-credentials.component";
import { AppService } from "../../app.service";

describe("AccountCredentialsComponent", () => {
  let component: AppAccountCredentialsComponent;
  let fixture: ComponentFixture<AppAccountCredentialsComponent>;

  beforeEach(async(() => {
    const checkUserData = () => Promise.resolve(true);

    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [AppAccountCredentialsComponent],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: AppService, useValue: { checkUserData } },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAccountCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create a component", () => {
    expect(component).toBeTruthy();
  });
});
