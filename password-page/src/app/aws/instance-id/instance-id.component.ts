import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "../../app.service";

@Component({
  selector: 'app-instance-id',
  templateUrl: './instance-id.component.html',
  styleUrls: ['./instance-id.component.scss'],
  providers: [ AppService ]
})
export class InstanceIdComponent {
  instanceParams = {
    instanceId: ''
  };
  isOpenModal: boolean = false;

  constructor(private router: Router, public installWizardService: AppService) {
  }

  toggleModal() {
    this.isOpenModal = !this.isOpenModal;
  }

  public submit(): void {
    // this.router.navigate(['/install-wizard/aws/account-credentials']);
    this.router.navigate(['aws/account-credentials']);
    this.installWizardService.checkInstanceId(this.instanceParams);
  }
}
