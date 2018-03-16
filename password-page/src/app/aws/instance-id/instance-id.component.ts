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

    constructor(private router: Router, public appService: AppService) {
    }

    /**
     * Show modal dialog with instructions of getting instance id
     */
    public toggleModal(): void {
        this.isOpenModal = !this.isOpenModal;
    }

    /**
     * Send a request and navigate to success page if response is success
     */
    public submit(): void {
        this.appService.checkInstanceId(this.instanceId).then(() => {
            this.router.navigate(['aws/account-credentials']);
        });
    }
}
