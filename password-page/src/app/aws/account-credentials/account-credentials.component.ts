import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-account-credentials',
    templateUrl: './account-credentials.component.html',
    styleUrls: ['./account-credentials.component.scss'],
    providers: [AppService]
})
export class AppAccountCredentialsComponent {
    public awsUserData = {
        username: '',
        password: '',
    };
    public repeatPassword: string = '';
    public isIdentical: boolean;

    constructor(private router: Router, public appService: AppService) {
    }

    onPasswordChange(): void {
        this.isIdentical = this.awsUserData.password === this.repeatPassword;
    }

    public submit(): (boolean | void)  {
        if (!this.isIdentical) return false;
        this.appService.checkUserData(this.awsUserData).then(() => {
            this.router.navigate(['success-page']);
        });

    }
}
