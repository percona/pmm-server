import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-account-credentials-ovf',
    templateUrl: './account-credentials-ovf.component.html',
    styleUrls: ['./account-credentials-ovf.component.scss'],
})
export class AppAccountCredentialsOvfComponent {
    public ovfUserData = {
        username: '',
        password: '',
    };

    public ssh = '';
    public repeatPassword = '';
    public isIdentical: boolean;
    public errorMessage: '';
    public errorMessageSsh: '';

    constructor(private router: Router, public appService: AppService) {
    }

    /**
     * Check passwords fields for identical
     */
    public onPasswordChange(): void {
        this.isIdentical = this.ovfUserData.password === this.repeatPassword;
    }

    /**
     * Send a request and navigate to success page if response is success
     * @returns {boolean | void} boolean - result of matching password fields
     */
    public submit(): (boolean | void) {
        if (!this.isIdentical) {
            return false;
        }
        this.appService.checkUserData(this.ovfUserData).then(() => {
            if (this.ssh && this.ssh.length) return this.checkSSH();
            else this.router.navigate(['success-page']);
        }).catch((err) => {
            this.errorMessageSsh = err.error.title ? err.error.title : err.statusText;
        });
    }

    private checkSSH() {
        this.appService.checkSSH(this.ssh)
            .then(() => this.router.navigate(['success-page']))
            .catch((err) => this.errorMessage = err.error.title ? err.error.title : err.statusText);
    }
}
