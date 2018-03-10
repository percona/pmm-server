import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppRouter } from './app.router';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddAwsInstallationComponent } from './aws/aws.component';
import { AddOvaComponent } from './ova/ova.component';
import { InstanceIdComponent } from './aws/instance-id/instance-id.component';
import { AccountCredentialsComponent } from './aws/account-credentials/account-credentials.component';
import { AccountCredentialsOvaComponent } from './ova/account-credentials-ova/account-credentials-ova.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { InstallationTypeComponent } from './installation-type/installation-type.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAwsInstallationComponent,
    InstanceIdComponent,
    AccountCredentialsComponent,
    AddOvaComponent,
    AccountCredentialsOvaComponent,
    SuccessPageComponent,
    InstallationTypeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRouter),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  exports: [
    AppComponent,
    AddAwsInstallationComponent,
    AddOvaComponent,
    InstanceIdComponent,
    AccountCredentialsComponent,
    AccountCredentialsOvaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
