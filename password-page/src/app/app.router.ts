import { Routes } from '@angular/router';
import { AppAwsInstallationComponent } from './aws/aws.component';
import { AppInstanceIdComponent } from './aws/instance-id/instance-id.component';
import { AppAccountCredentialsComponent } from './aws/account-credentials/account-credentials.component';
import { AppOvaComponent } from './ova/ova.component';
import { AppAccountCredentialsOvaComponent } from './ova/account-credentials-ova/account-credentials-ova.component';
import { AppSuccessPageComponent } from './success-page/success-page.component';
import { AwsCredentialsGuard, AwsGuard } from './guards/aws.guard';
import { OvaGuard } from './guards/ova.guard';
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
                path: 'ova', component: AppOvaComponent, canActivate: [OvaGuard], children: [
                    { path: 'account-credentials-ova', component: AppAccountCredentialsOvaComponent },
                    { path: '', redirectTo: 'account-credentials-ova', pathMatch: 'full' },
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
