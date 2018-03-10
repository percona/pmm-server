import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-account-credentials-ova',
  templateUrl: './account-credentials-ova.component.html',
  styleUrls: ['./account-credentials-ova.component.scss'],
  providers: [AppService]
})
export class AccountCredentialsOvaComponent {
  ovaUserData = {
    username: '',
    password: '',
  };

  ovaSshData = {
    ssh: ''
  };

  isIdentical: boolean;
  repeatPassword: string = '';

  onPasswordChange() {
    this.isIdentical = this.ovaUserData.password === this.repeatPassword;
  }

  constructor(private router: Router, public installWizardService: AppService) {

  }

  public submit(): any {
    if (!this.isIdentical) return false;
    this.installWizardService.checkUserData(this.ovaUserData);
    this.installWizardService.checkSSH(this.ovaSshData);
    this.router.navigate(['success-page']);
  }
}
