import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-success-page',
    templateUrl: './success-page.component.html',
    styleUrls: ['./success-page.component.scss']
})
export class AppSuccessPageComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        this.redirectToMainPage();
    }

    /**
     * Automatic redirect to installation page
     */
    public redirectToMainPage(): void {
        setTimeout(() => {
            this.router.navigate(['/']);
        }, 5000);
    }
}
