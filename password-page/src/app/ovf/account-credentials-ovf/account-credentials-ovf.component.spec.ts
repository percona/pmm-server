import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { noop } from "rxjs";

import { AppAccountCredentialsOvfComponent } from "./account-credentials-ovf.component";
import { AppService } from "../../app.service";

describe("AccountCredentialsOvfComponent", () => {
  let component: AppAccountCredentialsOvfComponent;
  let fixture: ComponentFixture<AppAccountCredentialsOvfComponent>;

  beforeEach(async(() => {
    const checkUserData = () => Promise.resolve(true);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [AppAccountCredentialsOvfComponent],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: AppService, useValue: { checkUserData } },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAccountCredentialsOvfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
