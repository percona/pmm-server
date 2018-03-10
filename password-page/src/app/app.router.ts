import {Routes} from '@angular/router';

import {AddAwsInstallationComponent} from "./aws/aws.component";
import {InstanceIdComponent} from "./aws/instance-id/instance-id.component";
import {AccountCredentialsComponent} from "./aws/account-credentials/account-credentials.component";
import {AddOvaComponent} from "./ova/ova.component";
import {AccountCredentialsOvaComponent} from "./ova/account-credentials-ova/account-credentials-ova.component";
import {SuccessPageComponent} from "./success-page/success-page.component";
import {InstallationTypeComponent} from "./installation-type/installation-type.component";

export const AppRouter: Routes = [
    {path: '', redirectTo: 'installation-type', pathMatch: 'full'},
    {
        path: 'installation-type', children: [
            {
                path: '',
                component: InstallationTypeComponent,
            },
            {
                path: 'ova', component: AddOvaComponent, children: [
                    {path: 'account-credentials-ova', component: AccountCredentialsOvaComponent},
                    {path: '', redirectTo: 'account-credentials-ova', pathMatch: 'full'},
                ]
            },
            {
                path: 'aws', component: AddAwsInstallationComponent, children: [
                    {path: 'instance-id', component: InstanceIdComponent},
                    {path: 'account-credentials', component: AccountCredentialsComponent},
                    {path: '', redirectTo: 'instance-id', pathMatch: 'full'},
                ]
            },
        ]
    },
    {path: 'success-page', component: SuccessPageComponent}
];
