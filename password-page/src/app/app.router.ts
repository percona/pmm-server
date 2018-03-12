import { Routes } from '@angular/router';
import { AppAwsInstallationComponent } from './aws/aws.component';
import { AppInstanceIdComponent } from './aws/instance-id/instance-id.component';
import { AppAccountCredentialsComponent } from './aws/account-credentials/account-credentials.component';
import { AppOvaComponent } from './ova/ova.component';
import { AppAccountCredentialsOvaComponent } from './ova/account-credentials-ova/account-credentials-ova.component';
import { AppSuccessPageComponent } from './success-page/success-page.component';
import { AppInstallationTypeComponent } from './installation-type/installation-type.component';

export const AppRouter: Routes = [
    { path: '', redirectTo: 'installation-type', pathMatch: 'full' },
    {
        path: 'installation-type', children: [
            {
                path: '',
                component: AppInstallationTypeComponent,
            },
            {
                path: 'ova', component: AppOvaComponent, children: [
                    { path: 'account-credentials-ova', component: AppAccountCredentialsOvaComponent },
                    { path: '', redirectTo: 'account-credentials-ova', pathMatch: 'full' },
                ]
            },
            {
                path: 'aws', component: AppAwsInstallationComponent, children: [
                    { path: 'instance-id', component: AppInstanceIdComponent },
                    { path: 'account-credentials', component: AppAccountCredentialsComponent },
                    { path: '', redirectTo: 'instance-id', pathMatch: 'full' },
                ]
            },
        ]
    },
    { path: 'success-page', component: AppSuccessPageComponent }
];
