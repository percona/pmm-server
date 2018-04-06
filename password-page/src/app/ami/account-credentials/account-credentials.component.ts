import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-account-credentials',
    templateUrl: './account-credentials.component.html',
    styleUrls: ['./account-credentials.component.scss'],
})
export class AppAccountCredentialsComponent {
    public amiUserData = {
        username: '',
        password: '',
    };

    public fields = {
        USERNAME: 'username',
        PASSWORD: 'password',
        REPEAT_PASSWORD: 'repeatPassword',
    };

    public repeatPassword: '';
    public isIdentical: boolean;
    public errorMessage: '';
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
            case this.fields.USERNAME: {
                this.amiUserData.username = event.target.value.trim();
                break;
            }

            case this.fields.PASSWORD: {
                this.amiUserData.password = event.target.value.trim();
                break;
            }

            case this.fields.REPEAT_PASSWORD: {
                this.repeatPassword = event.target.value.trim();
                break;
            }
        }
        this.isSubmitted = false;
        this.errorMessage = '';
    }

    /**
     * Checks password fields for identical
     */
    public onPasswordChange(): void {
        this.isIdentical = this.amiUserData.password === this.repeatPassword;
    }

    /**
     * Send a request and navigate to success page if response is success
     * @returns {boolean | void} boolean - result of matching password fields
     */
    public submit(isError): (boolean | void) {
        this.isSubmitted = true;
        this.onPasswordChange();
        if (!this.isIdentical) { return false; }
        if (isError) return;
        this.appService.checkUserData(this.amiUserData).then(() => {
            this.router.navigate(['success-page']);
        }).catch( (err) => {
            this.errorMessage = err.error.title ? err.error.title : err.statusText;
        });
    }
}
