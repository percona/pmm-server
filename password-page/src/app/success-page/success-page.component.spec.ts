import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AppSuccessPageComponent } from "./success-page.component";

describe("SucessPageComponent", () => {
  let component: AppSuccessPageComponent;
  let fixture: ComponentFixture<AppSuccessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppSuccessPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSuccessPageComponent);
    component = fixture.componentInstance;
    // Stub out the redirect
    component.redirectToMainPage = () => {};
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
