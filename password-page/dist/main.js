(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ami/account-credentials/account-credentials.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ami/account-credentials/account-credentials.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\">\n  <div class=\"row justify-content-center\">\n    <p>Create your username and password to access your PMM</p>\n  </div>\n  <form>\n    <div class=\"row\">\n      <div class=\"col-xl-8 col-10 offset-xl-2 offset-1 input-wrapper\">\n        <div class=\"row\">\n          <div class=\"col-12 text-right\">\n            <input type=\"text\" class=\"custom-form-input form-control\" placeholder=\"Username\"\n                   name=\"{{ fields.USERNAME }}\"\n                   [(ngModel)]=\"amiUserData.username\"\n                   #user=\"ngModel\"\n                   (keyup)=\"onKey($event, fields.USERNAME)\"\n                   required>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div *ngIf=\"user?.errors && isSubmitted\"\n               class=\"col-xl-9 col-12 error-text\">\n            <div *ngIf=\"user?.errors?.required\">*Field is required</div>\n          </div>\n            <div *ngIf=\"errorMessage\" class=\"error-text col-xl-9 col-xs-12\">*{{ errorMessage }}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 text-right\">\n            <input type=\"password\" class=\"custom-form-input form-control\" placeholder=\"Password\"\n                   name=\"{{ fields.PASSWORD }}\"\n                   [(ngModel)]=\"amiUserData.password\"\n                   #pass=\"ngModel\"\n                   (keyup)=\"onKey($event, fields.PASSWORD)\"\n                   maxlength=\"255\"\n                   required>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div *ngIf=\"pass?.errors && isSubmitted\"\n               class=\"col-xl-9 col-12 error-text\">\n            <div *ngIf=\"pass?.errors?.required\">*Field is required</div>\n            <div *ngIf=\"pass?.errors?.maxlength\">*Field can not me more than 255 characters</div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 text-right\">\n            <input type=\"password\" class=\"custom-form-input form-control\" placeholder=\"Repeat Password\"\n                   name=\"{{ fields.REPEAT_PASSWORD }}\"\n                   [(ngModel)]=\"repeatPassword\"\n                   #repeatpass=\"ngModel\"\n                   (keyup)=\"onKey($event, fields.REPEAT_PASSWORD)\"\n                   required>\n          </div>\n        </div>\n        <div class=\"row error-text\">\n          <div *ngIf=\"repeatpass?.errors && isSubmitted\"\n               class=\"col-xl-9 col-12\">\n            <div *ngIf=\"repeatpass?.errors?.required\">*Field is required</div>\n          </div>\n          <div *ngIf=\"!isIdentical && isSubmitted\" class=\"col-xl-9 col-12\">*Passwords must be identical</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 text-right button-row\">\n            <button class=\"btn btn-primary\" type=\"reset\">Reset</button>\n            <button class=\"btn btn-primary\"\n                    (click)=\"submit(!user?.valid || !pass?.valid || !repeatpass?.valid)\">Submit\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/ami/account-credentials/account-credentials.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ami/account-credentials/account-credentials.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-wrapper > div {\n  margin-bottom: 15px; }\n\n.tab-pane p {\n  margin-bottom: 25px;\n  color: var(--white);\n  font-weight: 300;\n  font-size: 0.9rem; }\n\ninput.custom-form-input {\n  height: 38px;\n  color: var(--white);\n  font-weight: 300;\n  border-radius: 0;\n  border: 1px solid #2a2a2a;\n  background-color: #292929; }\n\ninput.custom-form-input::-webkit-input-placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px; }\n\ninput.custom-form-input:-ms-input-placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px; }\n\ninput.custom-form-input::-ms-input-placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px; }\n\ninput.custom-form-input::placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px; }\n\n.error-text {\n  color: var(--white);\n  font-weight: 300; }\n\n.button-row button {\n  height: 40px;\n  font-weight: 300;\n  outline: none;\n  color: var(--white);\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  text-transform: uppercase; }\n\n.button-row button:hover {\n  background-color: #292929;\n  border: none;\n  border-radius: 0; }\n\n.button-row button:active,\n.button-row button:focus {\n  box-shadow: none; }\n"

/***/ }),

/***/ "./src/app/ami/account-credentials/account-credentials.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ami/account-credentials/account-credentials.component.ts ***!
  \**************************************************************************/
/*! exports provided: AppAccountCredentialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAccountCredentialsComponent", function() { return AppAccountCredentialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppAccountCredentialsComponent = /** @class */ (function () {
    function AppAccountCredentialsComponent(router, appService) {
        this.router = router;
        this.appService = appService;
        this.amiUserData = {
            username: '',
            password: '',
        };
        this.fields = {
            USERNAME: 'username',
            PASSWORD: 'password',
            REPEAT_PASSWORD: 'repeatPassword',
        };
        this.isSubmitted = false;
    }
    /**
     * Trim whitespaces in fields
     * @param event - User keyup event
     * @param {string} field - Name of active input filed
     */
    AppAccountCredentialsComponent.prototype.onKey = function (event, field) {
        switch (field) {
            case this.fields.USERNAME: {
                this.amiUserData.username = event.target.value.trim();
                break;
            }
            case this.fields.PASSWORD: {
                this.amiUserData.password = event.target.value.trim();
                break;
            }
            case this.fields.REPEAT_PASSWORD: {
                this.repeatPassword = event.target.value.trim();
                break;
            }
        }
        this.isSubmitted = false;
        this.errorMessage = '';
    };
    /**
     * Checks password fields for identical
     */
    AppAccountCredentialsComponent.prototype.onPasswordChange = function () {
        this.isIdentical = this.amiUserData.password === this.repeatPassword;
    };
    /**
     * Send a request and navigate to success page if response is success
     * @returns {boolean | void} boolean - result of matching password fields
     */
    AppAccountCredentialsComponent.prototype.submit = function (isError) {
        var _this = this;
        this.isSubmitted = true;
        this.onPasswordChange();
        if (!this.isIdentical) {
            return false;
        }
        if (isError)
            return;
        this.appService.checkUserData(this.amiUserData).then(function () {
            _this.router.navigate(['success-page']);
        }).catch(function (err) {
            _this.errorMessage = err.error.title ? err.error.title : err.statusText;
        });
    };
    AppAccountCredentialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-credentials',
            template: __webpack_require__(/*! ./account-credentials.component.html */ "./src/app/ami/account-credentials/account-credentials.component.html"),
            styles: [__webpack_require__(/*! ./account-credentials.component.scss */ "./src/app/ami/account-credentials/account-credentials.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], AppAccountCredentialsComponent);
    return AppAccountCredentialsComponent;
}());



/***/ }),

/***/ "./src/app/ami/ami.component.html":
/*!****************************************!*\
  !*** ./src/app/ami/ami.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header\">\n    <div class=\"row\">\n        <div class=\"col-xl-4 col-5 border-right\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-2\">\n                        <img src=\"./assets/pmm-logo.png\" class=\"header-logo\" alt=\"pmm-logo\">\n                    </div>\n                    <div class=\"col-10\">Percona Monitoring and Management</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-8 col-7\">\n            <p>Installation <i class=\"fa fa-long-arrow-right\"></i> AMI</p>\n        </div>\n    </div>\n</div>\n<div class=\"container main\">\n    <div class=\"row\">\n        <div class=\"col-xl-10 offset-xl-1 col-12\">\n            <p class=\"text-center\">PMM Installation Wizard</p>\n            <section>\n                <ul class=\"nav nav-tabs gf-tabs\">\n                    <li class=\"nav-item gf-tabs-item\" routerLinkActive=\"active\"><a routerLink=\"instance-id\">Instance ID\n                        Verification</a>\n                    </li>\n                    <li><i class=\"fa fa-long-arrow-right\"></i></li>\n                    <li class=\"nav-item\" routerLinkActive=\"active\"><a routerLink=\"account-credentials\">Account\n                        Credentials</a></li>\n                </ul>\n                <div class=\"tab-content table-panel-wrapper\">\n                    <router-outlet></router-outlet>\n                </div>\n            </section>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ami/ami.component.scss":
/*!****************************************!*\
  !*** ./src/app/ami/ami.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #141414; }\n\n.header {\n  height: 50px;\n  margin-bottom: 90px;\n  color: #cccccc;\n  background-color: #292929; }\n\n.header div {\n  height: inherit; }\n\n.header .row > div {\n  display: flex;\n  align-items: center; }\n\n.header p {\n  margin-bottom: 0; }\n\n.header .border-right {\n  border-right: 1px solid #141414 !important; }\n\n.header .header-logo {\n  width: 35px;\n  height: 35px; }\n\n.main p {\n  font-weight: 300;\n  color: #ffffff;\n  margin-bottom: 25px; }\n\n.main .nav-tabs {\n  border: none;\n  padding: 0;\n  margin: 0; }\n\n.main .nav-tabs > li.active {\n  border-bottom: 5px solid #292929; }\n\n.main .nav-tabs > li.active > a,\n.main .nav-tabs > li.active > a:focus,\n.main .nav-tabs > li.active > a:hover,\n.main .nav-tabs > li > a,\n.main .nav-tabs > li > a:focus,\n.main .nav-tabs > li > a:hover,\n.main .nav-tabs > li > i {\n  padding: 10px 15px 5px;\n  display: block;\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-weight: 300;\n  text-decoration: none; }\n\n.main .tab-content {\n  padding-top: 85px;\n  padding-bottom: 60px;\n  border: 1px solid #2a2a2a;\n  background-color: #1f1d1e; }\n\n@media screen and (max-width: 768px) {\n  .main p {\n    font-size: 14px; }\n  .tab-content {\n    padding-top: 40px;\n    padding-bottom: 40px; } }\n"

/***/ }),

/***/ "./src/app/ami/ami.component.ts":
/*!**************************************!*\
  !*** ./src/app/ami/ami.component.ts ***!
  \**************************************/
/*! exports provided: AppAmiInstallationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAmiInstallationComponent", function() { return AppAmiInstallationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppAmiInstallationComponent = /** @class */ (function () {
    function AppAmiInstallationComponent() {
    }
    AppAmiInstallationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-ami',
            template: __webpack_require__(/*! ./ami.component.html */ "./src/app/ami/ami.component.html"),
            styles: [__webpack_require__(/*! ./ami.component.scss */ "./src/app/ami/ami.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppAmiInstallationComponent);
    return AppAmiInstallationComponent;
}());



/***/ }),

/***/ "./src/app/ami/instance-id/instance-id.component.html":
/*!************************************************************!*\
  !*** ./src/app/ami/instance-id/instance-id.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\">\n  <div class=\"row\">\n    <p\n      class=\"text-center col-xl-8 col-10 offset-xl-2 offset-1\">\n      Please provide the Amazon Instance ID (AMI ID) from the AWS Console. It uses the format of i-abc123def.</p>\n  </div>\n  <form action=\"\">\n    <div class=\"row\">\n      <div class=\"col-xl-8 col-10 offset-xl-3 offset-1 input-wrapper\">\n        <div class=\"row flex-column-reverse flex-xl-row align-items-center\">\n          <div class=\"col-xl-9 col-12 text-right\">\n            <input type=\"text\" class=\"custom-form-input form-control\" placeholder=\"Instance ID\"\n                   name=\"instance-id\"\n                   [(ngModel)]=\"instanceId\"\n                   #id=\"ngModel\"\n                   pattern=\"^i-[0-9a-f]+$\"\n                   (keyup)=\"onKey($event)\"\n                   required>\n          </div>\n          <div class=\"col-xl-3 col-12 pl-xl-0\">\n            <a href=\"javascript:;\" class=\"modal-link\" (click)=\"toggleModal()\">Where should I get my\n              Instance\n              ID?</a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div *ngIf=\"id?.errors && isSubmitted\" class=\"col-xl-9 col-xs-12\">\n            <div *ngIf=\"id?.errors?.required\" class=\"error-text\">*Field is required</div>\n            <div *ngIf=\"id?.errors?.pattern\" class=\"error-text\">*Must be correct instance id</div>\n          </div>\n            <div *ngIf=\"errorMessage\" class=\"error-text col-xl-9 col-xs-12\">*{{ errorMessage }}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xl-9 col-12 text-right button-row\">\n            <button class=\"btn btn-primary\"\n                    (click)=\"submit(!id?.valid)\">Submit\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"backdrop\" [class.active]=\"isOpenModal\">\n</div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [class.active]=\"isOpenModal\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\" id=\"instance-modal\">\n      <div class=\"modal-body\">\n        <div class=\"d-flex justify-content-between\">\n          <h2>Where to get your instance ID</h2>\n          <i class=\"fa fa-close text-right close-icon\" (click)=\"toggleModal()\"></i>\n        </div>\n        <p>You can copy the instance ID in the Properties panel of your instance, select the Description tab back in\n          the <b>EC2 console</b>. Click the Copy button next to the Instance ID field. This button appears as soon\n          as you hover the cursor of your mouse over the ID.</p>\n        <div>\n          <img src=\"./assets/id-instruction-img.png\" alt=\"instruction-image\">\n          <p><em>Hover the cursor over instance ID for Copy button to appear.</em></p>\n        </div>\n        <p>Paste the instance in the Instance ID field of the Percona Monitoring and Management welcome page and\n          click Submit.</p>\n        <a class=\"modal-button btn btn-primary\" (click)=\"toggleModal()\">Got it, thanks</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ami/instance-id/instance-id.component.scss":
/*!************************************************************!*\
  !*** ./src/app/ami/instance-id/instance-id.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  display: flex !important; }\n\n.input-wrapper > div {\n  margin-bottom: 15px; }\n\n.tab-pane p {\n  margin-bottom: 25px;\n  color: var(--white);\n  font-weight: 300;\n  font-size: 0.9rem; }\n\ninput.custom-form-input {\n  height: 38px;\n  color: var(--white);\n  font-weight: 300;\n  border-radius: 0;\n  border: 1px solid #2a2a2a;\n  background-color: #292929; }\n\ninput.custom-form-input::-webkit-input-placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px; }\n\ninput.custom-form-input:-ms-input-placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px; }\n\ninput.custom-form-input::-ms-input-placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px; }\n\ninput.custom-form-input::placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px; }\n\n.error-text {\n  color: white;\n  font-weight: 300; }\n\n.modal-link {\n  color: #ff7941;\n  font-size: 12px;\n  text-decoration: none; }\n\n.modal-link:hover {\n  color: #ff7941;\n  text-decoration: underline; }\n\n.button-row button {\n  height: 40px;\n  font-weight: 300;\n  outline: none;\n  color: var(--white);\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  text-transform: uppercase; }\n\n.button-row button:hover {\n  background-color: #292929;\n  border: none;\n  border-radius: 0; }\n\n.button-row button:active,\n.button-row button:focus {\n  box-shadow: none; }\n\n.backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.6);\n  display: none; }\n\n.modal-dialog {\n  max-width: 680px;\n  width: 100%;\n  margin: auto; }\n\n#instance-modal {\n  margin: 15px;\n  color: var(--white);\n  font-weight: 300;\n  background-color: #1f1d1d; }\n\n#instance-modal p {\n  font-size: 1em; }\n\n#instance-modal .modal-body > *:not(.modal-button) {\n  margin-bottom: 40px; }\n\n#instance-modal .close-icon {\n  font-size: 16px;\n  cursor: pointer; }\n\n#instance-modal .modal-img {\n  background: url('pmm-logo.png') no-repeat;\n  background-size: cover; }\n\n#instance-modal .modal-flex-container {\n  display: flex;\n  justify-content: space-between; }\n\n#instance-modal .btn-primary.modal-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  height: 40px;\n  width: 150px;\n  padding: 0;\n  color: var(--white);\n  font-weight: 300;\n  outline: none;\n  text-transform: uppercase;\n  background-color: transparent;\n  border: none; }\n\n#instance-modal .btn-primary.modal-button:hover {\n  background-color: #292929;\n  border: none;\n  border-radius: 0; }\n\n@media screen and (max-width: 1200px) {\n  .modal-link {\n    display: block;\n    margin-bottom: 10px; } }\n"

/***/ }),

/***/ "./src/app/ami/instance-id/instance-id.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ami/instance-id/instance-id.component.ts ***!
  \**********************************************************/
/*! exports provided: AppInstanceIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInstanceIdComponent", function() { return AppInstanceIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppInstanceIdComponent = /** @class */ (function () {
    function AppInstanceIdComponent(router, appService) {
        this.router = router;
        this.appService = appService;
        this.instanceId = '';
        this.isOpenModal = false;
        this.isSubmitted = false;
    }
    /**
     * Show modal dialog with instructions of getting instance id
     */
    AppInstanceIdComponent.prototype.toggleModal = function () {
        this.isOpenModal = !this.isOpenModal;
    };
    /**
     * Trim whitespaces in instance id input field
     * @param event - User keyup event
     */
    AppInstanceIdComponent.prototype.onKey = function (event) {
        this.instanceId = event.target.value.trim();
        this.isSubmitted = false;
        this.errorMessage = '';
    };
    /**
     * Send a request and navigate to success page if response is success
     */
    AppInstanceIdComponent.prototype.submit = function (isError) {
        var _this = this;
        this.isSubmitted = true;
        if (isError)
            return;
        this.appService.checkInstanceId(this.instanceId).then(function () {
            _this.router.navigate(['ami/account-credentials']);
        }).catch(function (err) {
            _this.errorMessage = err.error.title ? err.error.title : err.statusText;
        });
    };
    AppInstanceIdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instance-id',
            template: __webpack_require__(/*! ./instance-id.component.html */ "./src/app/ami/instance-id/instance-id.component.html"),
            styles: [__webpack_require__(/*! ./instance-id.component.scss */ "./src/app/ami/instance-id/instance-id.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], AppInstanceIdComponent);
    return AppInstanceIdComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ami_ami_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ami/ami.component */ "./src/app/ami/ami.component.ts");
/* harmony import */ var _ovf_ovf_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ovf/ovf.component */ "./src/app/ovf/ovf.component.ts");
/* harmony import */ var _ami_instance_id_instance_id_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ami/instance-id/instance-id.component */ "./src/app/ami/instance-id/instance-id.component.ts");
/* harmony import */ var _ami_account_credentials_account_credentials_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ami/account-credentials/account-credentials.component */ "./src/app/ami/account-credentials/account-credentials.component.ts");
/* harmony import */ var _ovf_account_credentials_ovf_account_credentials_ovf_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ovf/account-credentials-ovf/account-credentials-ovf.component */ "./src/app/ovf/account-credentials-ovf/account-credentials-ovf.component.ts");
/* harmony import */ var _success_page_success_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./success-page/success-page.component */ "./src/app/success-page/success-page.component.ts");
/* harmony import */ var _guards_ami_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/ami.guard */ "./src/app/guards/ami.guard.ts");
/* harmony import */ var _guards_ovf_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/ovf.guard */ "./src/app/guards/ovf.guard.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _guards_main_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/main.guard */ "./src/app/guards/main.guard.ts");
/* harmony import */ var _docker_page_docker_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./docker-page/docker-page.component */ "./src/app/docker-page/docker-page.component.ts");
/* harmony import */ var _guards_success_page_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/success-page.guard */ "./src/app/guards/success-page.guard.ts");
/* harmony import */ var _guards_docker_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/docker.guard */ "./src/app/guards/docker.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _ami_ami_component__WEBPACK_IMPORTED_MODULE_7__["AppAmiInstallationComponent"],
                _ami_instance_id_instance_id_component__WEBPACK_IMPORTED_MODULE_9__["AppInstanceIdComponent"],
                _ami_account_credentials_account_credentials_component__WEBPACK_IMPORTED_MODULE_10__["AppAccountCredentialsComponent"],
                _ovf_ovf_component__WEBPACK_IMPORTED_MODULE_8__["AppOvfComponent"],
                _ovf_account_credentials_ovf_account_credentials_ovf_component__WEBPACK_IMPORTED_MODULE_11__["AppAccountCredentialsOvfComponent"],
                _success_page_success_page_component__WEBPACK_IMPORTED_MODULE_12__["AppSuccessPageComponent"],
                _docker_page_docker_page_component__WEBPACK_IMPORTED_MODULE_17__["AppDockerPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_3__["AppRouter"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            exports: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            providers: [_guards_main_guard__WEBPACK_IMPORTED_MODULE_16__["MainGuard"], _guards_ami_guard__WEBPACK_IMPORTED_MODULE_13__["AmiGuard"], _guards_ami_guard__WEBPACK_IMPORTED_MODULE_13__["AmiCredentialsGuard"], _guards_ovf_guard__WEBPACK_IMPORTED_MODULE_14__["OvfGuard"], _guards_success_page_guard__WEBPACK_IMPORTED_MODULE_18__["SuccessPageGuard"], _guards_docker_guard__WEBPACK_IMPORTED_MODULE_19__["DockerGuard"], _app_service__WEBPACK_IMPORTED_MODULE_15__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: AppRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouter", function() { return AppRouter; });
/* harmony import */ var _ami_ami_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ami/ami.component */ "./src/app/ami/ami.component.ts");
/* harmony import */ var _ami_instance_id_instance_id_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ami/instance-id/instance-id.component */ "./src/app/ami/instance-id/instance-id.component.ts");
/* harmony import */ var _ami_account_credentials_account_credentials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ami/account-credentials/account-credentials.component */ "./src/app/ami/account-credentials/account-credentials.component.ts");
/* harmony import */ var _ovf_ovf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ovf/ovf.component */ "./src/app/ovf/ovf.component.ts");
/* harmony import */ var _ovf_account_credentials_ovf_account_credentials_ovf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ovf/account-credentials-ovf/account-credentials-ovf.component */ "./src/app/ovf/account-credentials-ovf/account-credentials-ovf.component.ts");
/* harmony import */ var _success_page_success_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./success-page/success-page.component */ "./src/app/success-page/success-page.component.ts");
/* harmony import */ var _guards_ami_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/ami.guard */ "./src/app/guards/ami.guard.ts");
/* harmony import */ var _guards_ovf_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/ovf.guard */ "./src/app/guards/ovf.guard.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _guards_main_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/main.guard */ "./src/app/guards/main.guard.ts");
/* harmony import */ var _docker_page_docker_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./docker-page/docker-page.component */ "./src/app/docker-page/docker-page.component.ts");
/* harmony import */ var _guards_success_page_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/success-page.guard */ "./src/app/guards/success-page.guard.ts");
/* harmony import */ var _guards_docker_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/docker.guard */ "./src/app/guards/docker.guard.ts");













var AppRouter = [
    { path: '', children: [
            {
                path: '',
                component: _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], canActivate: [_guards_main_guard__WEBPACK_IMPORTED_MODULE_9__["MainGuard"]]
            },
            {
                path: 'ovf', component: _ovf_ovf_component__WEBPACK_IMPORTED_MODULE_3__["AppOvfComponent"], canActivate: [_guards_ovf_guard__WEBPACK_IMPORTED_MODULE_7__["OvfGuard"]], children: [
                    { path: 'account-credentials-ovf', component: _ovf_account_credentials_ovf_account_credentials_ovf_component__WEBPACK_IMPORTED_MODULE_4__["AppAccountCredentialsOvfComponent"] },
                    { path: '', redirectTo: 'account-credentials-ovf', pathMatch: 'full' },
                ]
            },
            {
                path: 'ami', component: _ami_ami_component__WEBPACK_IMPORTED_MODULE_0__["AppAmiInstallationComponent"], canActivate: [_guards_ami_guard__WEBPACK_IMPORTED_MODULE_6__["AmiGuard"]], children: [
                    { path: 'instance-id', component: _ami_instance_id_instance_id_component__WEBPACK_IMPORTED_MODULE_1__["AppInstanceIdComponent"] },
                    { path: 'account-credentials', component: _ami_account_credentials_account_credentials_component__WEBPACK_IMPORTED_MODULE_2__["AppAccountCredentialsComponent"], canActivate: [_guards_ami_guard__WEBPACK_IMPORTED_MODULE_6__["AmiCredentialsGuard"]] },
                    { path: '', redirectTo: 'instance-id', pathMatch: 'full' },
                ]
            },
        ]
    },
    { path: 'docker', component: _docker_page_docker_page_component__WEBPACK_IMPORTED_MODULE_10__["AppDockerPageComponent"], canActivate: [_guards_docker_guard__WEBPACK_IMPORTED_MODULE_12__["DockerGuard"]] },
    { path: 'success-page', component: _success_page_success_page_component__WEBPACK_IMPORTED_MODULE_5__["AppSuccessPageComponent"], canActivate: [_guards_success_page_guard__WEBPACK_IMPORTED_MODULE_11__["SuccessPageGuard"]] }
];


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.url = '/configurator/v1/users';
        this.instanceUrl = '/configurator/v1/check-instance';
        this.sshUrl = '/configurator/v1/sshkey';
        this.data = {};
        this._isInstanceChecked = false;
        this._isInstallationComplete = false;
    }
    /**
     * Check installation completing for guards
     * @returns {boolean} - result of checking instance id
     */
    AppService.prototype.isInstallationComplete = function () {
        return this._isInstallationComplete;
    };
    /**
     * Check installation completing for guards
     * @returns {boolean} - result of checking instance id
     */
    AppService.prototype.isInstanceChecked = function () {
        return this._isInstanceChecked;
    };
    /**
     * Send user data
     * @param {UserCredentials} credentials - username and password
     * @returns {Promise<{}>} - result of matching credentials
     */
    AppService.prototype.checkUserData = function (credentials) {
        var _this = this;
        this.data.Username = credentials.username;
        this.data.Password = credentials.password;
        return this.http
            .post(this.url, this.data, { headers: this.headers })
            .toPromise()
            .then(function () { return _this._isInstallationComplete = true; });
    };
    /**
     * Send instance id
     * @param {string} instanceId - instance of user id
     * @returns {Promise<{}>} - result of matching instanceId
     */
    AppService.prototype.checkInstanceId = function (instanceId) {
        var _this = this;
        this.data.Instance = instanceId;
        return this.http
            .post(this.instanceUrl, { instanceId: instanceId }, { headers: this.headers })
            .toPromise()
            .then(function () { return _this._isInstanceChecked = true; });
    };
    /**
     * Send ssh
     * @param {string} ssh - ssh
     * @returns {Promise<{}>} - result of matching ssh
     */
    AppService.prototype.checkSSH = function (ssh) {
        return this.http
            .post(this.sshUrl, { key: ssh }, { headers: this.headers })
            .toPromise();
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/docker-page/docker-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/docker-page/docker-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header\">\n    <div class=\"row\">\n        <div class=\"col-xl-4 col-5 border-right\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-2\">\n                        <img src=\"./assets/pmm-logo.png\" class=\"header-logo\" alt=\"pmm-logo\">\n                    </div>\n                    <div class=\"col-10\">Percona Monitoring and Management</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-8 col-7\">\n            <p>Installation docker</p>\n        </div>\n    </div>\n</div>\n<p class=\"text-center\">\n    Please use pmm-server options for docker <a\n        href=\"https://www.percona.com/doc/percona-monitoring-and-management/glossary.option.html#pmm-glossary-pmm-server-additional-option\"\n        target=\"_blank\">read more here</a>\n</p>\n\n"

/***/ }),

/***/ "./src/app/docker-page/docker-page.component.scss":
/*!********************************************************!*\
  !*** ./src/app/docker-page/docker-page.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 50px;\n  margin-bottom: 90px;\n  color: #cccccc;\n  background-color: #292929; }\n\n.header div {\n  height: inherit; }\n\n.header .row > div {\n  display: flex;\n  align-items: center; }\n\n.header p {\n  margin-bottom: 0; }\n\n.header .border-right {\n  border-right: 1px solid #141414 !important; }\n\n.header .header-logo {\n  width: 35px;\n  height: 35px; }\n\np {\n  color: var(--white);\n  font-size: 0.9rem; }\n"

/***/ }),

/***/ "./src/app/docker-page/docker-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/docker-page/docker-page.component.ts ***!
  \******************************************************/
/*! exports provided: AppDockerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDockerPageComponent", function() { return AppDockerPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppDockerPageComponent = /** @class */ (function () {
    function AppDockerPageComponent() {
    }
    AppDockerPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-docker-page',
            template: __webpack_require__(/*! ./docker-page.component.html */ "./src/app/docker-page/docker-page.component.html"),
            styles: [__webpack_require__(/*! ./docker-page.component.scss */ "./src/app/docker-page/docker-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppDockerPageComponent);
    return AppDockerPageComponent;
}());



/***/ }),

/***/ "./src/app/guards/ami.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guards/ami.guard.ts ***!
  \*************************************/
/*! exports provided: AmiGuard, AmiCredentialsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmiGuard", function() { return AmiGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmiCredentialsGuard", function() { return AmiCredentialsGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AmiGuard = /** @class */ (function () {
    function AmiGuard() {
        this.INSTALLATION_TYPE = 'ami';
    }
    /**
     * Check on resolution for ami route
     */
    AmiGuard.prototype.canActivate = function (route, state) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].installationType === this.INSTALLATION_TYPE;
    };
    return AmiGuard;
}());

var AmiCredentialsGuard = /** @class */ (function () {
    function AmiCredentialsGuard(appService) {
        this.appService = appService;
    }
    /**
     * Check on resolution for ami children account credentials route
     */
    AmiCredentialsGuard.prototype.canActivate = function (route, state) {
        return this.appService.isInstanceChecked();
    };
    AmiCredentialsGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], AmiCredentialsGuard);
    return AmiCredentialsGuard;
}());



/***/ }),

/***/ "./src/app/guards/docker.guard.ts":
/*!****************************************!*\
  !*** ./src/app/guards/docker.guard.ts ***!
  \****************************************/
/*! exports provided: DockerGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DockerGuard", function() { return DockerGuard; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

var DockerGuard = /** @class */ (function () {
    function DockerGuard() {
        this.INSTALLATION_TYPE = 'docker';
    }
    /**
     * Check resolution for ovf route
     */
    DockerGuard.prototype.canActivate = function (route, state) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].installationType === this.INSTALLATION_TYPE;
    };
    return DockerGuard;
}());



/***/ }),

/***/ "./src/app/guards/main.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/main.guard.ts ***!
  \**************************************/
/*! exports provided: MainGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainGuard", function() { return MainGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Installation;
(function (Installation) {
    Installation["AMI"] = "ami";
    Installation["OVF"] = "ovf";
    Installation["DOCKER"] = "docker";
})(Installation || (Installation = {}));
var MainGuard = /** @class */ (function () {
    function MainGuard(router) {
        this.router = router;
    }
    MainGuard.prototype.canActivate = function (route, state) {
        switch (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].installationType) {
            case Installation.AMI:
                this.router.navigate(['ami']);
                break;
            case Installation.OVF:
                this.router.navigate(['ovf']);
                break;
            case Installation.DOCKER:
                this.router.navigate(['docker']);
                break;
        }
        return false;
    };
    MainGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], MainGuard);
    return MainGuard;
}());



/***/ }),

/***/ "./src/app/guards/ovf.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guards/ovf.guard.ts ***!
  \*************************************/
/*! exports provided: OvfGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvfGuard", function() { return OvfGuard; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

var OvfGuard = /** @class */ (function () {
    function OvfGuard() {
        this.INSTALLATION_TYPE = 'ovf';
    }
    /**
     * Check resolution for ovf route
     */
    OvfGuard.prototype.canActivate = function (route, state) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].installationType === this.INSTALLATION_TYPE;
    };
    return OvfGuard;
}());



/***/ }),

/***/ "./src/app/guards/success-page.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/success-page.guard.ts ***!
  \**********************************************/
/*! exports provided: SuccessPageGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageGuard", function() { return SuccessPageGuard; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuccessPageGuard = /** @class */ (function () {
    function SuccessPageGuard(appService) {
        this.appService = appService;
    }
    /**
     * Check resolution for success page router link
     */
    SuccessPageGuard.prototype.canActivate = function (route, state) {
        return this.appService.isInstallationComplete();
    };
    SuccessPageGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"]])
    ], SuccessPageGuard);
    return SuccessPageGuard;
}());



/***/ }),

/***/ "./src/app/ovf/account-credentials-ovf/account-credentials-ovf.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/ovf/account-credentials-ovf/account-credentials-ovf.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\">\n  <div class=\"row\">\n    <p class=\"text-center col-8 offset-2\">Create your\n      username and password to access your PMM</p>\n  </div>\n  <form>\n    <div class=\"row\">\n      <div\n        class=\"col-10 offset-xl-2 offset-1 input-wrapper\">\n        <div class=\"row\">\n          <div class=\"col-xl-9 col-12 text-right\">\n            <input type=\"text\" class=\"custom-form-input form-control ng-untouched ng-pristine ng-valid\"\n                   placeholder=\"Username\"\n                   name=\"{{fields.USERNAME_OVF}}\"\n                   [(ngModel)]=\"ovfUserData.username\"\n                   #user=\"ngModel\"\n                   (keyup)=\"onKey($event, fields.USERNAME_OVF)\"\n                   required>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div *ngIf=\"user?.errors && isSubmitted\"\n               class=\"col-xl-9 col-12 error-text\">\n            <div *ngIf=\"user?.errors?.required\">*Field is required</div>\n          </div>\n          <div *ngIf=\"errorMessage\" class=\"error-text col-xl-9 col-xs-12\">*{{ errorMessage }}</div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-xl-9 col-12 text-right\">\n            <input type=\"password\" class=\"custom-form-input form-control ng-untouched ng-pristine ng-valid\"\n                   placeholder=\"Password\"\n                   name=\"{{ fields.PASSWORD_OVF }}\"\n                   [(ngModel)]=\"ovfUserData.password\"\n                   #pass=\"ngModel\"\n                   (keyup)=\"onKey($event, fields.PASSWORD_OVF)\"\n                   maxlength=\"255\"\n                   required>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div *ngIf=\"pass?.errors && isSubmitted\"\n               class=\"col-xl-9 col-12 error-text\">\n            <div *ngIf=\"pass?.errors?.required\">*Field is required</div>\n            <div *ngIf=\"pass?.errors?.maxlength\">*Field can not me more than 255 characters</div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xl-9 col-12 text-right\">\n            <input type=\"password\" class=\"custom-form-input form-control ng-untouched ng-pristine ng-valid\"\n                   placeholder=\"Repeat Password\"\n                   name=\"{{ fields.REPEAT_PASSWORD_OVF }}\"\n                   [(ngModel)]=\"repeatPassword\"\n                   #repeatpass=\"ngModel\"\n                   (keyup)=\"onKey($event, fields.REPEAT_PASSWORD_OVF)\"\n                   required>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div *ngIf=\"repeatpass?.errors && isSubmitted\"\n               class=\"col-xl-9 col-12 error-text\">\n            <div *ngIf=\"repeatpass?.errors?.required\">*Field is required</div>\n          </div>\n          <div *ngIf=\"!isIdentical && isSubmitted\" class=\"col-lg-9 col-md-9 col-sm-12 error-text\">*Passwords must be identical</div>\n        </div>\n        <div class=\"row flex-container row-ssh\">\n          <div class=\"col-xl-9 col-12 text-right\">\n            <input type=\"text\" class=\"custom-form-input form-control ng-untouched ng-pristine ng-valid\"\n                   placeholder=\"SSH Key\"\n                   name=\"{{ fields.SSH_OVF }}\"\n                   [(ngModel)]=\"ssh\"\n                   (keyup)=\"onKey($event, fields.SSH_OVF)\">\n          </div>\n          <div class=\"col-xl-3 col-12 input-caption font-italic\">\n            <span>*optional</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div *ngIf=\"errorMessageSsh\" class=\"error-text col-xl-9 col-xs-12\">*{{ errorMessageSsh }}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xl-9 col-12 text-right button-row\">\n            <button type=\"reset\" class=\"btn btn-primary\">Reset</button>\n            <button class=\"btn btn-primary\" (click)=\"submit(!user?.valid || !pass?.valid || !repeatpass?.valid)\">\n              Submit\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/ovf/account-credentials-ovf/account-credentials-ovf.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/ovf/account-credentials-ovf/account-credentials-ovf.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-wrapper > div {\n  margin-bottom: 15px; }\n\n.tab-pane p {\n  margin-bottom: 25px;\n  color: white;\n  font-weight: 300;\n  font-size: 0.9rem; }\n\ninput.custom-form-input {\n  height: 38px;\n  color: white;\n  font-weight: 300;\n  border-radius: 0;\n  border: 1px solid #2a2a2a;\n  background-color: #292929; }\n\ninput.custom-form-input::-webkit-input-placeholder {\n  font-weight: 100;\n  color: white;\n  font-size: 12px; }\n\ninput.custom-form-input:-ms-input-placeholder {\n  font-weight: 100;\n  color: white;\n  font-size: 12px; }\n\ninput.custom-form-input::-ms-input-placeholder {\n  font-weight: 100;\n  color: white;\n  font-size: 12px; }\n\ninput.custom-form-input::placeholder {\n  font-weight: 100;\n  color: white;\n  font-size: 12px; }\n\n.input-wrapper .row-ssh {\n  margin-top: 40px;\n  margin-bottom: 40px; }\n\n.flex-container {\n  display: flex;\n  align-items: center; }\n\n.error-text {\n  font-weight: 300;\n  color: white; }\n\n.input-caption {\n  padding-left: 0;\n  color: white; }\n\n.button-row button {\n  height: 40px;\n  font-weight: 300;\n  outline: none;\n  color: white;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  text-transform: uppercase; }\n\n.button-row button:hover {\n  background-color: #292929;\n  border: none;\n  border-radius: 0; }\n\n@media screen and (max-width: 1200px) {\n  .flex-container {\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: flex-start;\n    justify-content: flex-start; }\n  .input-caption {\n    padding-left: 15px; }\n  .input-caption span {\n    display: block;\n    margin-bottom: 10px; } }\n"

/***/ }),

/***/ "./src/app/ovf/account-credentials-ovf/account-credentials-ovf.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ovf/account-credentials-ovf/account-credentials-ovf.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AppAccountCredentialsOvfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAccountCredentialsOvfComponent", function() { return AppAccountCredentialsOvfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppAccountCredentialsOvfComponent = /** @class */ (function () {
    function AppAccountCredentialsOvfComponent(router, appService) {
        this.router = router;
        this.appService = appService;
        this.ovfUserData = {
            username: '',
            password: '',
        };
        this.fields = {
            USERNAME_OVF: 'usernameOvf',
            PASSWORD_OVF: 'passwordOvf',
            REPEAT_PASSWORD_OVF: 'repeatPasswordOvf',
            SSH_OVF: 'ssh'
        };
        this.ssh = '';
        this.repeatPassword = '';
        this.isSubmitted = false;
    }
    /**
     * Trim whitespaces in fields
     * @param event - User keyup event
     * @param {string} field - Name of active input filed
     */
    AppAccountCredentialsOvfComponent.prototype.onKey = function (event, field) {
        switch (field) {
            case this.fields.USERNAME_OVF: {
                this.ovfUserData.username = event.target.value.trim();
                break;
            }
            case this.fields.PASSWORD_OVF: {
                this.ovfUserData.password = event.target.value.trim();
                break;
            }
            case this.fields.REPEAT_PASSWORD_OVF: {
                this.repeatPassword = event.target.value.trim();
                break;
            }
            case this.fields.SSH_OVF: {
                this.ssh = event.target.value.trim();
                break;
            }
        }
        this.isSubmitted = false;
        this.errorMessage = '';
    };
    /**
     * Check passwords fields for identical
     */
    AppAccountCredentialsOvfComponent.prototype.onPasswordChange = function () {
        this.isIdentical = this.ovfUserData.password === this.repeatPassword;
    };
    /**
     * Send a request and navigate to success page if response is success
     * @returns {boolean | void} boolean - result of matching password fields
     */
    AppAccountCredentialsOvfComponent.prototype.submit = function (isError) {
        var _this = this;
        this.isSubmitted = true;
        this.onPasswordChange();
        if (!this.isIdentical) {
            return false;
        }
        if (isError)
            return;
        this.appService.checkUserData(this.ovfUserData).then(function () {
            if (_this.ssh && _this.ssh.length)
                return _this.checkSSH();
            else
                _this.router.navigate(['success-page']);
        }).catch(function (err) {
            _this.errorMessageSsh = err.error.title ? err.error.title : err.statusText;
        });
    };
    AppAccountCredentialsOvfComponent.prototype.checkSSH = function () {
        var _this = this;
        this.appService.checkSSH(this.ssh)
            .then(function () { return _this.router.navigate(['success-page']); })
            .catch(function (err) { return _this.errorMessage = err.error.title ? err.error.title : err.statusText; });
    };
    AppAccountCredentialsOvfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-credentials-ovf',
            template: __webpack_require__(/*! ./account-credentials-ovf.component.html */ "./src/app/ovf/account-credentials-ovf/account-credentials-ovf.component.html"),
            styles: [__webpack_require__(/*! ./account-credentials-ovf.component.scss */ "./src/app/ovf/account-credentials-ovf/account-credentials-ovf.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], AppAccountCredentialsOvfComponent);
    return AppAccountCredentialsOvfComponent;
}());



/***/ }),

/***/ "./src/app/ovf/ovf.component.html":
/*!****************************************!*\
  !*** ./src/app/ovf/ovf.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header\">\n  <div class=\"row\">\n    <div class=\"col-xl-4 col-5 border-right\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-2\">\n            <img src=\"./assets/pmm-logo.png\" class=\"header-logo\" alt=\"pmm-logo\">\n          </div>\n          <div class=\"col-10\">Percona Monitoring and Management</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-8 col-7\">\n      <p>Installation <i class=\"fa fa-long-arrow-right\"></i> OVF</p>\n    </div>\n  </div>\n</div>\n<div class=\"container main\">\n  <div class=\"row\">\n    <div class=\"col-xl-10 offset-xl-1 col-12\">\n      <p class=\"text-center\">PMM Installation Wizard</p>\n        <section>\n          <ul class=\"nav nav-tabs\">\n            <li class=\"nav-item\" routerLinkActive=\"active\"><a routerLink=\"account-credentials-ovf\">Account\n              Credentials</a></li>\n          </ul>\n          <div class=\"tab-content\">\n              <router-outlet></router-outlet>\n          </div>\n        </section>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ovf/ovf.component.scss":
/*!****************************************!*\
  !*** ./src/app/ovf/ovf.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #141414; }\n\n.header {\n  height: 50px;\n  margin-bottom: 90px;\n  color: #cccccc;\n  background-color: #292929; }\n\n.header div {\n  height: inherit; }\n\n.header .row > div {\n  display: flex;\n  align-items: center; }\n\n.header p {\n  margin-bottom: 0; }\n\n.header .border-right {\n  border-right: 1px solid #141414 !important; }\n\n.header .header-logo {\n  width: 35px;\n  height: 35px; }\n\n.main {\n  font-size: 14px; }\n\n.main p {\n  font-weight: 300;\n  color: var(--white);\n  margin-bottom: 25px; }\n\n.main .nav-tabs {\n  border: none;\n  padding: 0;\n  margin: 0; }\n\n.main .nav-tabs > li.active {\n  border-bottom: 5px solid #292929; }\n\n.main .nav-tabs > li.active > a,\n.main .nav-tabs > li.active > a:focus,\n.main .nav-tabs > li.active > a:hover,\n.main .nav-tabs > li > a,\n.main .nav-tabs > li > a:focus,\n.main .nav-tabs > li > a:hover,\n.main .nav-tabs > li > i {\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-weight: 300;\n  text-decoration: none; }\n\n.main .nav-tabs > li > i {\n  padding: 5px 10px 0; }\n\n.main .tab-content {\n  padding-top: 85px;\n  padding-bottom: 60px;\n  border: 1px solid #2a2a2a;\n  background-color: #1f1d1e; }\n\n@media screen and (max-width: 768px) {\n  .main p {\n    font-size: 14px; }\n  .tab-content {\n    padding-top: 40px;\n    padding-bottom: 40px; } }\n"

/***/ }),

/***/ "./src/app/ovf/ovf.component.ts":
/*!**************************************!*\
  !*** ./src/app/ovf/ovf.component.ts ***!
  \**************************************/
/*! exports provided: AppOvfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppOvfComponent", function() { return AppOvfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppOvfComponent = /** @class */ (function () {
    function AppOvfComponent() {
    }
    AppOvfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ovf',
            template: __webpack_require__(/*! ./ovf.component.html */ "./src/app/ovf/ovf.component.html"),
            styles: [__webpack_require__(/*! ./ovf.component.scss */ "./src/app/ovf/ovf.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppOvfComponent);
    return AppOvfComponent;
}());



/***/ }),

/***/ "./src/app/success-page/success-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/success-page/success-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <div class=\"row\">\n        <div class=\"col-xl-4 col-5 border-right\">\n            <div class=\"header-logo\"></div>\n            <p>Percona Monitoring and Management</p>\n        </div>\n        <div class=\"col-xl-8 col-7\">\n            <p>Installation</p>\n        </div>\n    </div>\n</div>\n<p class=\"text-center\">\n    Congratulation! Your PMM is configured.\n    Please click <span class=\"home-link\" (click)=\"goTo()\">here</span> or wait 5 sec to be redirected to the Index\n    page\n</p>\n<p class=\"text-center\">\n    <i class=\"fa fa-spinner\"></i>\n</p>\n\n"

/***/ }),

/***/ "./src/app/success-page/success-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/success-page/success-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 50px;\n  margin-bottom: 90px;\n  color: #cccccc;\n  background-color: #292929; }\n\n.header div {\n  height: inherit; }\n\n.header .row > div {\n  display: flex;\n  align-items: center; }\n\n.header p {\n  margin-bottom: 0; }\n\n.header .border-right {\n  border-right: 1px solid #141414 !important; }\n\n.header .header-logo {\n  float: left;\n  width: 35px;\n  height: 35px;\n  margin: 0 10px;\n  background: url('pmm-logo.png') no-repeat;\n  background-size: cover; }\n\np {\n  color: var(--white);\n  font-size: 0.9rem; }\n\n> p {\n  font-size: 16px; }\n\n.home-link {\n  color: #007bff; }\n\n.home-link:hover {\n  color: #007bff;\n  text-decoration: underline; }\n\n.fa-spinner {\n  font-size: 4em;\n  -webkit-animation: spin 1500ms infinite linear;\n  animation: spin 1500ms infinite linear; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n"

/***/ }),

/***/ "./src/app/success-page/success-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/success-page/success-page.component.ts ***!
  \********************************************************/
/*! exports provided: AppSuccessPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSuccessPageComponent", function() { return AppSuccessPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppSuccessPageComponent = /** @class */ (function () {
    function AppSuccessPageComponent(router) {
        this.router = router;
    }
    AppSuccessPageComponent.prototype.ngOnInit = function () {
        this.redirectToMainPage();
    };
    /**
     * Automatic redirect to installation page
     */
    AppSuccessPageComponent.prototype.goTo = function () {
        window.location.replace('/');
    };
    AppSuccessPageComponent.prototype.redirectToMainPage = function () {
        var _this = this;
        setTimeout(function () {
            _this.goTo();
        }, 5000);
    };
    AppSuccessPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-success-page',
            template: __webpack_require__(/*! ./success-page.component.html */ "./src/app/success-page/success-page.component.html"),
            styles: [__webpack_require__(/*! ./success-page.component.scss */ "./src/app/success-page/success-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppSuccessPageComponent);
    return AppSuccessPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    installationType: 'docker'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/als/go/src/github.com/percona/pmm-server/password-page/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map