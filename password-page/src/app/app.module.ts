import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRouter } from './app.router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppAwsInstallationComponent } from './aws/aws.component';
import { AppOvaComponent } from './ova/ova.component';
import { AppInstanceIdComponent } from './aws/instance-id/instance-id.component';
import { AppAccountCredentialsComponent } from './aws/account-credentials/account-credentials.component';
import { AppAccountCredentialsOvaComponent } from './ova/account-credentials-ova/account-credentials-ova.component';
import { AppSuccessPageComponent } from './success-page/success-page.component';
import { AppInstallationTypeComponent } from './installation-type/installation-type.component';

@NgModule({
    declarations: [
        AppComponent,
        AppAwsInstallationComponent,
        AppInstanceIdComponent,
        AppAccountCredentialsComponent,
        AppOvaComponent,
        AppAccountCredentialsOvaComponent,
        AppSuccessPageComponent,
        AppInstallationTypeComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(AppRouter),
        FormsModule,
    ],
    exports: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
