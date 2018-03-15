import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRouter } from './app.router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppAwsInstallationComponent } from './aws/aws.component';
import { AppOvfComponent } from './ovf/ovf.component';
import { AppInstanceIdComponent } from './aws/instance-id/instance-id.component';
import { AppAccountCredentialsComponent } from './aws/account-credentials/account-credentials.component';
import { AppAccountCredentialsOvfComponent } from './ovf/account-credentials-ovf/account-credentials-ovf.component';
import { AppSuccessPageComponent } from './success-page/success-page.component';
import { AwsCredentialsGuard, AwsGuard } from './guards/aws.guard';
import { OvfGuard } from './guards/ovf.guard';
import { AppService } from './app.service';
import { MainGuard } from './guards/main.guard';
import { AppDockerPageComponent } from './docker-page/docker-page.component';
import { SuccessPageGuard } from './guards/success-page.guard';
import { DockerGuard } from "./guards/docker.guard";

@NgModule({
    declarations: [
        AppComponent,
        AppAwsInstallationComponent,
        AppInstanceIdComponent,
        AppAccountCredentialsComponent,
        AppOvfComponent,
        AppAccountCredentialsOvfComponent,
        AppSuccessPageComponent,
        AppDockerPageComponent,
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
    providers: [MainGuard, AwsGuard, AwsCredentialsGuard, OvfGuard, SuccessPageGuard, DockerGuard, AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
