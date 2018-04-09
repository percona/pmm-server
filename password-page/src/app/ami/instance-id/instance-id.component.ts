import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-instance-id',
    templateUrl: './instance-id.component.html',
    styleUrls: ['./instance-id.component.scss'],
})
export class AppInstanceIdComponent {
    public instanceId = '';
    public isOpenModal = false;
    public errorMessage: '';
    public isSubmitted = false;

    constructor(private router: Router, public appService: AppService) {
    }

    /**
     * Show modal dialog with instructions of getting instance id
     */
    public toggleModal(): void {
        this.isOpenModal = !this.isOpenModal;
    }

    /**
     * Trim whitespaces in instance id input field
     * @param event - User keyup event
     */
    onKey(event: any) {
        this.instanceId = event.target.value.trim();
        this.isSubmitted = false;
        this.errorMessage = '';
    }

    /**
     * Send a request and navigate to success page if response is success
     */
    public submit(isError): void {
        this.isSubmitted = true;
        if (isError) return;
        this.appService.checkInstanceId(this.instanceId).then(() => {
            this.router.navigate(['ami/account-credentials']);
        }).catch( (err) => {
            this.errorMessage = err.error.title ? err.error.title : err.statusText;
        });
    }
}
