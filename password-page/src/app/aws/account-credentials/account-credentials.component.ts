import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from "../../app.service";

@Component({
  selector: 'app-account-credentials',
  templateUrl: './account-credentials.component.html',
  styleUrls: ['./account-credentials.component.scss'],
  providers: [AppService]
})
export class AccountCredentialsComponent {
  awsUserData = {
    username: '',
    password: '',
  };
  repeatPassword: string = '';
  isIdentical: boolean;

  onPasswordChange() {
    this.isIdentical = this.awsUserData.password === this.repeatPassword;
  }

  constructor(private router: Router, public appService: AppService) {

  }

  public submit(): any {
    if (!this.isIdentical) return false;
    this.appService.checkUserData(this.awsUserData).then(() => {
        this.router.navigate(['success-page']);
    });

  }
}
