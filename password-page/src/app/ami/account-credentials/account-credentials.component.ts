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
    public repeatPassword: '';
    public isIdentical: boolean;
    public errorMessage: '';

    constructor(private router: Router, public appService: AppService) { }

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
    public submit(): (boolean | void) {
        if (!this.isIdentical) { return false; }
        this.appService.checkUserData(this.amiUserData).then(() => {
            this.router.navigate(['success-page']);
        }).catch( (err) => {
            this.errorMessage = err.error.title ? err.error.title : err.statusText;
        });

    }
}
