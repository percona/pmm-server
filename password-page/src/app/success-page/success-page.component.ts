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
    goTo(): void {
        window.location.replace('/');
    }

    public redirectToMainPage(): void {
        setTimeout(() => {
          this.goTo();
        }, 5000);
    }
}
