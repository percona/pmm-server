import { Routes } from '@angular/router';
import { AppAwsInstallationComponent } from './aws/aws.component';
import { AppInstanceIdComponent } from './aws/instance-id/instance-id.component';
import { AppAccountCredentialsComponent } from './aws/account-credentials/account-credentials.component';
import { AppOvfComponent } from './ovf/ovf.component';
import { AppAccountCredentialsOvfComponent } from './ovf/account-credentials-ovf/account-credentials-ovf.component';
import { AppSuccessPageComponent } from './success-page/success-page.component';
import { AwsCredentialsGuard, AwsGuard } from './guards/aws.guard';
import { OvfGuard } from './guards/ovf.guard';
import { AppComponent } from './app.component';
import { MainGuard } from './guards/main.guard';
import { AppDockerPageComponent } from './docker-page/docker-page.component';
import { SuccessPageGuard } from './guards/success-page.guard';
import { DockerGuard } from "./guards/docker.guard";

export const AppRouter: Routes = [
    { path: '', children: [
            {
                path: '',
                component: AppComponent, canActivate: [MainGuard]
            },
            {
                path: 'ovf', component: AppOvfComponent, canActivate: [OvfGuard], children: [
                    { path: 'account-credentials-ovf', component: AppAccountCredentialsOvfComponent },
                    { path: '', redirectTo: 'account-credentials-ovf', pathMatch: 'full' },
                ]
            },
            {
                path: 'aws', component: AppAwsInstallationComponent, canActivate: [AwsGuard], children: [
                    { path: 'instance-id', component: AppInstanceIdComponent },
                    { path: 'account-credentials', component: AppAccountCredentialsComponent, canActivate: [AwsCredentialsGuard] },
                    { path: '', redirectTo: 'instance-id', pathMatch: 'full' },
                ]
            },
        ]
    },
    { path: 'docker', component: AppDockerPageComponent, canActivate: [DockerGuard] },
    { path: 'success-page', component: AppSuccessPageComponent, canActivate: [SuccessPageGuard] }
];
