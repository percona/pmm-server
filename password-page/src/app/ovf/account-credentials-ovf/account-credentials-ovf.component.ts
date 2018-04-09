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

    public fields = {
        USERNAME_OVF: 'usernameOvf',
        PASSWORD_OVF: 'passwordOvf',
        REPEAT_PASSWORD_OVF: 'repeatPasswordOvf',
        SSH_OVF: 'ssh'
    };

    public ssh = '';
    public repeatPassword = '';
    public isIdentical: boolean;
    public errorMessage: '';
    public errorMessageSsh: '';
    public isSubmitted = false;

    constructor(private router: Router, public appService: AppService) {
    }

    /**
     * Trim whitespaces in fields
     * @param event - User keyup event
     * @param {string} field - Name of active input filed
     */
    onKey(event: any, field: string) {
        switch(field) {
            case this.fields.USERNAME_OVF: {
                this.ovfUserData.username = event.target.value.trim();
                break;
            }

            case this.fields.PASSWORD_OVF: {
                this.ovfUserData.password = event.target.value.trim();
                break;
            }

            case this.fields.REPEAT_PASSWORD_OVF: {
                this.repeatPassword = event.target.value.trim();
                break;
            }

            case this.fields.SSH_OVF: {
                this.ssh = event.target.value.trim();
                break;
            }
        }
        this.isSubmitted = false;
        this.errorMessage = '';
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
    public submit(isError): (boolean | void) {
        this.isSubmitted = true;
        this.onPasswordChange();
        if (!this.isIdentical) {
            return false;
        }
        if (isError) return;
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
