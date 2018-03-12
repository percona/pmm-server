import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-account-credentials-ova',
    templateUrl: './account-credentials-ova.component.html',
    styleUrls: ['./account-credentials-ova.component.scss'],
    providers: [AppService]
})
export class AppAccountCredentialsOvaComponent {
    public ovaUserData = {
        username: '',
        password: '',
    };

    public ssh: string = '';
    public repeatPassword: string = '';
    public isIdentical: boolean;

    constructor(private router: Router, public appService: AppService) {
    }

    /**
     * Check passwords fields for identical
     */
    public onPasswordChange(): void {
        this.isIdentical = this.ovaUserData.password === this.repeatPassword;
    }

    /**
     * Send a request and navigate to success page if response is success
     * @returns {boolean | void} boolean - result of matching password fields
     */
    public submit(): (boolean | void) {
        if (!this.isIdentical) return false;
        this.appService.checkUserData(this.ovaUserData).then(() => {
            this.appService.checkSSH(this.ssh).then(()=> {
                this.router.navigate(['success-page']);
            });
        });
    }
}
