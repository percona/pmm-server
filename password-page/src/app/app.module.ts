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
import { AwsCredentialsGuard, AwsGuard } from './guards/aws.guard';
import { OvaGuard } from './guards/ova.guard';
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
        AppOvaComponent,
        AppAccountCredentialsOvaComponent,
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
    providers: [MainGuard, AwsGuard, AwsCredentialsGuard, OvaGuard, SuccessPageGuard, DockerGuard, AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
