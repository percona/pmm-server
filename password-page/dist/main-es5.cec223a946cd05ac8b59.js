function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/ami/account-credentials/account-credentials.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/ami/account-credentials/account-credentials.component.ts ***!
    \**************************************************************************/

  /*! exports provided: AppAccountCredentialsComponent */

  /***/
  function srcAppAmiAccountCredentialsAccountCredentialsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppAccountCredentialsComponent", function () {
      return AppAccountCredentialsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppAccountCredentialsComponent_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppAccountCredentialsComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppAccountCredentialsComponent_div_12_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0 == null ? null : _r0.errors == null ? null : _r0.errors.required);
      }
    }

    function AppAccountCredentialsComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("*", ctx_r2.errorMessage, "");
      }
    }

    function AppAccountCredentialsComponent_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppAccountCredentialsComponent_div_19_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Field can not me more than 255 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppAccountCredentialsComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppAccountCredentialsComponent_div_19_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppAccountCredentialsComponent_div_19_div_2_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3 == null ? null : _r3.errors == null ? null : _r3.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3 == null ? null : _r3.errors == null ? null : _r3.errors.maxlength);
      }
    }

    function AppAccountCredentialsComponent_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppAccountCredentialsComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppAccountCredentialsComponent_div_25_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5 == null ? null : _r5.errors == null ? null : _r5.errors.required);
      }
    }

    function AppAccountCredentialsComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Passwords must be identical");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppAccountCredentialsComponent = /*@__PURE__*/function () {
      var AppAccountCredentialsComponent = /*#__PURE__*/function () {
        function AppAccountCredentialsComponent(router, appService) {
          _classCallCheck(this, AppAccountCredentialsComponent);

          this.router = router;
          this.appService = appService;
          this.amiUserData = {
            username: '',
            password: ''
          };
          this.fields = {
            USERNAME: 'username',
            PASSWORD: 'password',
            REPEAT_PASSWORD: 'repeatPassword'
          };
          this.isSubmitted = false;
        }
        /**
         * Trim whitespaces in fields
         * @param event - User keyup event
         * @param {string} field - Name of active input filed
         */


        _createClass(AppAccountCredentialsComponent, [{
          key: "onKey",
          value: function onKey(event, field) {
            switch (field) {
              case this.fields.USERNAME:
                {
                  this.amiUserData.username = event.target.value.trim();
                  break;
                }

              case this.fields.PASSWORD:
                {
                  this.amiUserData.password = event.target.value.trim();
                  break;
                }

              case this.fields.REPEAT_PASSWORD:
                {
                  this.repeatPassword = event.target.value.trim();
                  break;
                }
            }

            this.isSubmitted = false;
            this.errorMessage = '';
          }
          /**
           * Checks password fields for identical
           */

        }, {
          key: "onPasswordChange",
          value: function onPasswordChange() {
            this.isIdentical = this.amiUserData.password === this.repeatPassword;
          }
          /**
           * Send a request and navigate to success page if response is success
           * @returns {boolean | void} boolean - result of matching password fields
           */

        }, {
          key: "submit",
          value: function submit(isError) {
            var _this = this;

            this.isSubmitted = true;
            this.onPasswordChange();

            if (!this.isIdentical) {
              return false;
            }

            if (isError) return;
            this.appService.checkUserData(this.amiUserData).then(function () {
              _this.router.navigate(['success-page']);
            })["catch"](function (err) {
              _this.errorMessage = err.error.title ? err.error.title : err.statusText;
            });
          }
        }]);

        return AppAccountCredentialsComponent;
      }();

      AppAccountCredentialsComponent.ɵfac = function AppAccountCredentialsComponent_Factory(t) {
        return new (t || AppAccountCredentialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]));
      };

      AppAccountCredentialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppAccountCredentialsComponent,
        selectors: [["app-account-credentials"]],
        decls: 33,
        vars: 11,
        consts: [[1, "tab-pane"], [1, "row", "justify-content-center"], [1, "row"], [1, "col-xl-8", "col-10", "offset-xl-2", "offset-1", "input-wrapper"], [1, "col-12", "text-right"], ["type", "text", "placeholder", "Username", "required", "", 1, "custom-form-input", "form-control", 3, "name", "ngModel", "ngModelChange", "keyup"], ["user", "ngModel"], ["class", "col-xl-9 col-12 error-text", 4, "ngIf"], ["class", "error-text col-xl-9 col-xs-12", 4, "ngIf"], ["type", "password", "placeholder", "Password", "maxlength", "255", "required", "", 1, "custom-form-input", "form-control", 3, "name", "ngModel", "ngModelChange", "keyup"], ["pass", "ngModel"], ["type", "password", "placeholder", "Repeat Password", "required", "", 1, "custom-form-input", "form-control", 3, "name", "ngModel", "ngModelChange", "keyup"], ["repeatpass", "ngModel"], [1, "row", "error-text"], ["class", "col-xl-9 col-12", 4, "ngIf"], [1, "col-12", "text-right", "button-row"], ["type", "reset", 1, "btn", "btn-primary"], [1, "btn", "btn-primary", 3, "click"], [1, "col-xl-9", "col-12", "error-text"], [4, "ngIf"], [1, "error-text", "col-xl-9", "col-xs-12"], [1, "col-xl-9", "col-12"]],
        template: function AppAccountCredentialsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create your username and password to access your PMM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppAccountCredentialsComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.amiUserData.username = $event;
            })("keyup", function AppAccountCredentialsComponent_Template_input_keyup_9_listener($event) {
              return ctx.onKey($event, ctx.fields.USERNAME);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppAccountCredentialsComponent_div_12_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppAccountCredentialsComponent_div_13_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppAccountCredentialsComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.amiUserData.password = $event;
            })("keyup", function AppAccountCredentialsComponent_Template_input_keyup_16_listener($event) {
              return ctx.onKey($event, ctx.fields.PASSWORD);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppAccountCredentialsComponent_div_19_Template, 3, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppAccountCredentialsComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.repeatPassword = $event;
            })("keyup", function AppAccountCredentialsComponent_Template_input_keyup_22_listener($event) {
              return ctx.onKey($event, ctx.fields.REPEAT_PASSWORD);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppAccountCredentialsComponent_div_25_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppAccountCredentialsComponent_div_26_Template, 2, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppAccountCredentialsComponent_Template_button_click_31_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

              return ctx.submit(!(_r0 == null ? null : _r0.valid) || !(_r3 == null ? null : _r3.valid) || !(_r5 == null ? null : _r5.valid));
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx.fields.USERNAME);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.amiUserData.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.errors) && ctx.isSubmitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx.fields.PASSWORD);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.amiUserData.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3 == null ? null : _r3.errors) && ctx.isSubmitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx.fields.REPEAT_PASSWORD);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.repeatPassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5 == null ? null : _r5.errors) && ctx.isSubmitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isIdentical && ctx.isSubmitted);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]],
        styles: [".input-wrapper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.tab-pane[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  color: var(--white);\n  font-weight: 300;\n  font-size: 0.9rem;\n}\n\ninput.custom-form-input[_ngcontent-%COMP%] {\n  height: 38px;\n  color: var(--white);\n  font-weight: 300;\n  border-radius: 0;\n  border: 1px solid #2a2a2a;\n  background-color: #292929;\n}\n\ninput.custom-form-input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px;\n}\n\ninput.custom-form-input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px;\n}\n\ninput.custom-form-input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px;\n}\n\ninput.custom-form-input[_ngcontent-%COMP%]::placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: var(--white);\n  font-weight: 300;\n}\n\n.button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n  font-weight: 300;\n  outline: none;\n  color: var(--white);\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #292929;\n  border: none;\n  border-radius: 0;\n}\n\n.button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1pL2FjY291bnQtY3JlZGVudGlhbHMvYWNjb3VudC1jcmVkZW50aWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBSkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUpBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFKQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FtaS9hY2NvdW50LWNyZWRlbnRpYWxzL2FjY291bnQtY3JlZGVudGlhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtd3JhcHBlciA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi50YWItcGFuZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbmlucHV0LmN1c3RvbS1mb3JtLWlucHV0IHtcbiAgaGVpZ2h0OiAzOHB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXdlaWdodDogMzAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmEyYTJhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xufVxuXG5pbnB1dC5jdXN0b20tZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJ1dHRvbi1yb3cgYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idXR0b24tcm93IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmJ1dHRvbi1yb3cgYnV0dG9uOmFjdGl2ZSxcbi5idXR0b24tcm93IGJ1dHRvbjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59Il19 */"]
      });
      return AppAccountCredentialsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/ami/ami.component.ts":
  /*!**************************************!*\
    !*** ./src/app/ami/ami.component.ts ***!
    \**************************************/

  /*! exports provided: AppAmiInstallationComponent */

  /***/
  function srcAppAmiAmiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppAmiInstallationComponent", function () {
      return AppAmiInstallationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppAmiInstallationComponent = /*@__PURE__*/function () {
      var AppAmiInstallationComponent = function AppAmiInstallationComponent() {
        _classCallCheck(this, AppAmiInstallationComponent);
      };

      AppAmiInstallationComponent.ɵfac = function AppAmiInstallationComponent_Factory(t) {
        return new (t || AppAmiInstallationComponent)();
      };

      AppAmiInstallationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppAmiInstallationComponent,
        selectors: [["app-add-ami"]],
        decls: 31,
        vars: 0,
        consts: [[1, "container-fluid", "header"], [1, "row"], [1, "col-xl-4", "col-5", "border-right"], [1, "container-fluid"], [1, "col-2"], ["src", "./assets/pmm-logo.png", "alt", "pmm-logo", 1, "header-logo"], [1, "col-10"], [1, "col-xl-8", "col-7"], [1, "fa", "fa-long-arrow-right"], [1, "container", "main"], [1, "col-xl-10", "offset-xl-1", "col-12"], [1, "text-center"], [1, "nav", "nav-tabs", "gf-tabs"], ["routerLinkActive", "active", 1, "nav-item", "gf-tabs-item"], ["routerLink", "instance-id"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "account-credentials"], [1, "tab-content", "table-panel-wrapper"]],
        template: function AppAmiInstallationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Percona Monitoring and Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Installation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " AMI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "PMM Installation Wizard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Instance ID Verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Account Credentials");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["body[_ngcontent-%COMP%] {\n  background-color: #141414;\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 50px;\n  margin-bottom: 90px;\n  color: #cccccc;\n  background-color: #292929;\n}\n\n.header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: inherit;\n}\n\n.header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.header[_ngcontent-%COMP%]   .border-right[_ngcontent-%COMP%] {\n  border-right: 1px solid #141414 !important;\n}\n\n.header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n}\n\n.main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  color: #ffffff;\n  margin-bottom: 25px;\n}\n\n.main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0;\n  margin: 0;\n}\n\n.main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%] {\n  border-bottom: 5px solid #292929;\n}\n\n.main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  padding: 10px 15px 5px;\n  display: block;\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-weight: 300;\n  text-decoration: none;\n}\n\n.main[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  padding-top: 85px;\n  padding-bottom: 60px;\n  border: 1px solid #2a2a2a;\n  background-color: #1f1d1e;\n}\n\n@media screen and (max-width: 768px) {\n  .main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .tab-content[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    padding-bottom: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1pL2FtaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTs7Ozs7OztFQU9FLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFBO0VBQ0Y7O0VBRUE7SUFDRSxpQkFBQTtJQUNBLG9CQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FtaS9hbWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcbn1cblxuLmhlYWRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcbiAgY29sb3I6ICNjY2NjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XG59XG5cbi5oZWFkZXIgZGl2IHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uaGVhZGVyIC5yb3cgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyIHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaGVhZGVyIC5ib3JkZXItcmlnaHQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMTQxNDE0ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIgLmhlYWRlci1sb2dvIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLm1haW4gcCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ubWFpbiAubmF2LXRhYnMge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1haW4gLm5hdi10YWJzID4gbGkuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMyOTI5Mjk7XG59XG5cbi5tYWluIC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGEsXG4ubWFpbiAubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhOmZvY3VzLFxuLm1haW4gLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYTpob3Zlcixcbi5tYWluIC5uYXYtdGFicyA+IGxpID4gYSxcbi5tYWluIC5uYXYtdGFicyA+IGxpID4gYTpmb2N1cyxcbi5tYWluIC5uYXYtdGFicyA+IGxpID4gYTpob3Zlcixcbi5tYWluIC5uYXYtdGFicyA+IGxpID4gaSB7XG4gIHBhZGRpbmc6IDEwcHggMTVweCA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1haW4gLnRhYi1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDg1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmEyYTJhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZDFlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFpbiBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAudGFiLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICB9XG59XG5cblxuIl19 */"]
      });
      return AppAmiInstallationComponent;
    }();
    /***/

  },

  /***/
  "./src/app/ami/instance-id/instance-id.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ami/instance-id/instance-id.component.ts ***!
    \**********************************************************/

  /*! exports provided: AppInstanceIdComponent */

  /***/
  function srcAppAmiInstanceIdInstanceIdComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInstanceIdComponent", function () {
      return AppInstanceIdComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppInstanceIdComponent_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppInstanceIdComponent_div_15_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Must be correct instance id");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppInstanceIdComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppInstanceIdComponent_div_15_div_1_Template, 2, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppInstanceIdComponent_div_15_div_2_Template, 2, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0 == null ? null : _r0.errors == null ? null : _r0.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0 == null ? null : _r0.errors == null ? null : _r0.errors.pattern);
      }
    }

    function AppInstanceIdComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("*", ctx_r2.errorMessage, "");
      }
    }

    var AppInstanceIdComponent = /*@__PURE__*/function () {
      var AppInstanceIdComponent = /*#__PURE__*/function () {
        function AppInstanceIdComponent(router, appService) {
          _classCallCheck(this, AppInstanceIdComponent);

          this.router = router;
          this.appService = appService;
          this.instanceId = '';
          this.isOpenModal = false;
          this.isSubmitted = false;
        }
        /**
         * Show modal dialog with instructions of getting instance id
         */


        _createClass(AppInstanceIdComponent, [{
          key: "toggleModal",
          value: function toggleModal() {
            this.isOpenModal = !this.isOpenModal;
          }
          /**
           * Trim whitespaces in instance id input field
           * @param event - User keyup event
           */

        }, {
          key: "onKey",
          value: function onKey(event) {
            this.instanceId = event.target.value.trim();
            this.isSubmitted = false;
            this.errorMessage = '';
          }
          /**
           * Send a request and navigate to success page if response is success
           */

        }, {
          key: "submit",
          value: function submit(isError) {
            var _this2 = this;

            this.isSubmitted = true;
            if (isError) return;
            this.appService.checkInstanceId(this.instanceId).then(function () {
              _this2.router.navigate(['ami/account-credentials']);
            })["catch"](function (err) {
              _this2.errorMessage = err.error.title ? err.error.title : err.statusText;
            });
          }
        }]);

        return AppInstanceIdComponent;
      }();

      AppInstanceIdComponent.ɵfac = function AppInstanceIdComponent_Factory(t) {
        return new (t || AppInstanceIdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]));
      };

      AppInstanceIdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppInstanceIdComponent,
        selectors: [["app-instance-id"]],
        decls: 44,
        vars: 7,
        consts: [[1, "tab-pane"], [1, "row"], [1, "text-center", "col-xl-8", "col-10", "offset-xl-2", "offset-1"], ["action", ""], [1, "col-xl-8", "col-10", "offset-xl-3", "offset-1", "input-wrapper"], [1, "row", "flex-column-reverse", "flex-xl-row", "align-items-center"], [1, "col-xl-9", "col-12", "text-right"], ["type", "text", "placeholder", "Instance ID", "name", "instance-id", "pattern", "^i-[0-9a-f]+$", "required", "", 1, "custom-form-input", "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["id", "ngModel"], [1, "col-xl-3", "col-12", "pl-xl-0"], ["href", "javascript:;", 1, "modal-link", 3, "click"], ["class", "col-xl-9 col-xs-12", 4, "ngIf"], ["class", "error-text col-xl-9 col-xs-12", 4, "ngIf"], [1, "col-xl-9", "col-12", "text-right", "button-row"], [1, "btn", "btn-primary", 3, "click"], [1, "backdrop"], ["tabindex", "-1", "role", "dialog", 1, "modal"], ["role", "document", 1, "modal-dialog"], ["id", "instance-modal", 1, "modal-content"], [1, "modal-body"], [1, "d-flex", "justify-content-between"], [1, "fa", "fa-close", "text-right", "close-icon", 3, "click"], ["src", "./assets/id-instruction-img.png", "alt", "instruction-image"], [1, "modal-button", "btn", "btn-primary", 3, "click"], [1, "col-xl-9", "col-xs-12"], ["class", "error-text", 4, "ngIf"], [1, "error-text"], [1, "error-text", "col-xl-9", "col-xs-12"]],
        template: function AppInstanceIdComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please provide the Amazon Instance ID (AMI ID) from the AWS Console. It uses the format of i-abc123def.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppInstanceIdComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.instanceId = $event;
            })("keyup", function AppInstanceIdComponent_Template_input_keyup_9_listener($event) {
              return ctx.onKey($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppInstanceIdComponent_Template_a_click_12_listener() {
              return ctx.toggleModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Where should I get my Instance ID?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppInstanceIdComponent_div_15_Template, 3, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppInstanceIdComponent_div_16_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppInstanceIdComponent_Template_button_click_19_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

              return ctx.submit(!(_r0 == null ? null : _r0.valid));
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Where to get your instance ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppInstanceIdComponent_Template_i_click_29_listener() {
              return ctx.toggleModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "You can copy the instance ID in the Properties panel of your instance, select the Description tab back in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "EC2 console");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ". Click the Copy button next to the Instance ID field. This button appears as soon as you hover the cursor of your mouse over the ID.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Hover the cursor over instance ID for Copy button to appear.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Paste the instance in the Instance ID field of the Percona Monitoring and Management welcome page and click Submit.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppInstanceIdComponent_Template_a_click_42_listener() {
              return ctx.toggleModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Got it, thanks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instanceId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.errors) && ctx.isSubmitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isOpenModal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isOpenModal);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: [".active[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.input-wrapper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.tab-pane[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  color: var(--white);\n  font-weight: 300;\n  font-size: 0.9rem;\n}\n\ninput.custom-form-input[_ngcontent-%COMP%] {\n  height: 38px;\n  color: var(--white);\n  font-weight: 300;\n  border-radius: 0;\n  border: 1px solid #2a2a2a;\n  background-color: #292929;\n}\n\ninput.custom-form-input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px;\n}\n\ninput.custom-form-input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px;\n}\n\ninput.custom-form-input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px;\n}\n\ninput.custom-form-input[_ngcontent-%COMP%]::placeholder {\n  font-weight: 100;\n  color: var(--white);\n  font-size: 12px;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 300;\n}\n\n.modal-link[_ngcontent-%COMP%] {\n  color: #ff7941;\n  font-size: 12px;\n  text-decoration: none;\n}\n\n.modal-link[_ngcontent-%COMP%]:hover {\n  color: #ff7941;\n  text-decoration: underline;\n}\n\n.button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n  font-weight: 300;\n  outline: none;\n  color: var(--white);\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #292929;\n  border: none;\n  border-radius: 0;\n}\n\n.button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n.backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.6);\n  display: none;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  max-width: 680px;\n  width: 100%;\n  margin: auto;\n}\n\n#instance-modal[_ngcontent-%COMP%] {\n  margin: 15px;\n  color: var(--white);\n  font-weight: 300;\n  background-color: #1f1d1d;\n}\n\n#instance-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n\n#instance-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.modal-button) {\n  margin-bottom: 40px;\n}\n\n#instance-modal[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  cursor: pointer;\n}\n\n#instance-modal[_ngcontent-%COMP%]   .modal-img[_ngcontent-%COMP%] {\n  background: url('pmm-logo.74da77ed1cf4dde3cf0e.png') no-repeat;\n  background-size: cover;\n}\n\n#instance-modal[_ngcontent-%COMP%]   .modal-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n#instance-modal[_ngcontent-%COMP%]   .btn-primary.modal-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  height: 40px;\n  width: 150px;\n  padding: 0;\n  color: var(--white);\n  font-weight: 300;\n  outline: none;\n  text-transform: uppercase;\n  background-color: transparent;\n  border: none;\n}\n\n#instance-modal[_ngcontent-%COMP%]   .btn-primary.modal-button[_ngcontent-%COMP%]:hover {\n  background-color: #292929;\n  border: none;\n  border-radius: 0;\n}\n\n@media screen and (max-width: 1200px) {\n  .modal-link[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1pL2luc3RhbmNlLWlkL2luc3RhbmNlLWlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBSkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUpBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFKQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBOztFQUVFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4REFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGNBQUE7SUFDQSxtQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hbWkvaW5zdGFuY2UtaWQvaW5zdGFuY2UtaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtd3JhcHBlciA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi50YWItcGFuZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbmlucHV0LmN1c3RvbS1mb3JtLWlucHV0IHtcbiAgaGVpZ2h0OiAzOHB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXdlaWdodDogMzAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmEyYTJhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xufVxuXG5pbnB1dC5jdXN0b20tZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ubW9kYWwtbGluayB7XG4gIGNvbG9yOiAjZmY3OTQxO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1vZGFsLWxpbms6aG92ZXIge1xuICBjb2xvcjogI2ZmNzk0MTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5idXR0b24tcm93IGJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYnV0dG9uLXJvdyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5idXR0b24tcm93IGJ1dHRvbjphY3RpdmUsXG4uYnV0dG9uLXJvdyBidXR0b246Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIG1heC13aWR0aDogNjgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbiNpbnN0YW5jZS1tb2RhbCB7XG4gIG1hcmdpbjogMTVweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWQxZDtcbn1cblxuI2luc3RhbmNlLW1vZGFsIHAge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI2luc3RhbmNlLW1vZGFsIC5tb2RhbC1ib2R5ID4gKjpub3QoLm1vZGFsLWJ1dHRvbikge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4jaW5zdGFuY2UtbW9kYWwgLmNsb3NlLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2luc3RhbmNlLW1vZGFsIC5tb2RhbC1pbWcge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvcG1tLWxvZ28ucG5nXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2luc3RhbmNlLW1vZGFsIC5tb2RhbC1mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI2luc3RhbmNlLW1vZGFsIC5idG4tcHJpbWFyeS5tb2RhbC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuI2luc3RhbmNlLW1vZGFsIC5idG4tcHJpbWFyeS5tb2RhbC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAubW9kYWwtbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuXG4iXX0= */"]
      });
      return AppInstanceIdComponent;
    }();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*@__PURE__*/function () {
      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = "app";
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        consts: [[2, "display", "none"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to app!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      return AppComponent;
    }();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.router */
    "./src/app/app.router.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ami_ami_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ami/ami.component */
    "./src/app/ami/ami.component.ts");
    /* harmony import */


    var _ovf_ovf_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ovf/ovf.component */
    "./src/app/ovf/ovf.component.ts");
    /* harmony import */


    var _ami_instance_id_instance_id_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./ami/instance-id/instance-id.component */
    "./src/app/ami/instance-id/instance-id.component.ts");
    /* harmony import */


    var _ami_account_credentials_account_credentials_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./ami/account-credentials/account-credentials.component */
    "./src/app/ami/account-credentials/account-credentials.component.ts");
    /* harmony import */


    var _ovf_account_credentials_ovf_account_credentials_ovf_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./ovf/account-credentials-ovf/account-credentials-ovf.component */
    "./src/app/ovf/account-credentials-ovf/account-credentials-ovf.component.ts");
    /* harmony import */


    var _success_page_success_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./success-page/success-page.component */
    "./src/app/success-page/success-page.component.ts");
    /* harmony import */


    var _guards_ami_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./guards/ami.guard */
    "./src/app/guards/ami.guard.ts");
    /* harmony import */


    var _guards_ovf_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./guards/ovf.guard */
    "./src/app/guards/ovf.guard.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _guards_main_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./guards/main.guard */
    "./src/app/guards/main.guard.ts");
    /* harmony import */


    var _docker_page_docker_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./docker-page/docker-page.component */
    "./src/app/docker-page/docker-page.component.ts");
    /* harmony import */


    var _guards_success_page_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./guards/success-page.guard */
    "./src/app/guards/success-page.guard.ts");
    /* harmony import */


    var _guards_docker_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./guards/docker.guard */
    "./src/app/guards/docker.guard.ts");

    var AppModule = /*@__PURE__*/function () {
      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_guards_main_guard__WEBPACK_IMPORTED_MODULE_16__["MainGuard"], _guards_ami_guard__WEBPACK_IMPORTED_MODULE_13__["AmiGuard"], _guards_ami_guard__WEBPACK_IMPORTED_MODULE_13__["AmiCredentialsGuard"], _guards_ovf_guard__WEBPACK_IMPORTED_MODULE_14__["OvfGuard"], _guards_success_page_guard__WEBPACK_IMPORTED_MODULE_18__["SuccessPageGuard"], _guards_docker_guard__WEBPACK_IMPORTED_MODULE_19__["DockerGuard"], _app_service__WEBPACK_IMPORTED_MODULE_15__["AppService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_3__["AppRouter"]), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]]
      });
      return AppModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _ami_ami_component__WEBPACK_IMPORTED_MODULE_7__["AppAmiInstallationComponent"], _ami_instance_id_instance_id_component__WEBPACK_IMPORTED_MODULE_9__["AppInstanceIdComponent"], _ami_account_credentials_account_credentials_component__WEBPACK_IMPORTED_MODULE_10__["AppAccountCredentialsComponent"], _ovf_ovf_component__WEBPACK_IMPORTED_MODULE_8__["AppOvfComponent"], _ovf_account_credentials_ovf_account_credentials_ovf_component__WEBPACK_IMPORTED_MODULE_11__["AppAccountCredentialsOvfComponent"], _success_page_success_page_component__WEBPACK_IMPORTED_MODULE_12__["AppSuccessPageComponent"], _docker_page_docker_page_component__WEBPACK_IMPORTED_MODULE_17__["AppDockerPageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
        exports: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.router.ts":
  /*!*******************************!*\
    !*** ./src/app/app.router.ts ***!
    \*******************************/

  /*! exports provided: AppRouter */

  /***/
  function srcAppAppRouterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRouter", function () {
      return AppRouter;
    });
    /* harmony import */


    var _ami_ami_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ami/ami.component */
    "./src/app/ami/ami.component.ts");
    /* harmony import */


    var _ami_instance_id_instance_id_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ami/instance-id/instance-id.component */
    "./src/app/ami/instance-id/instance-id.component.ts");
    /* harmony import */


    var _ami_account_credentials_account_credentials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ami/account-credentials/account-credentials.component */
    "./src/app/ami/account-credentials/account-credentials.component.ts");
    /* harmony import */


    var _ovf_ovf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ovf/ovf.component */
    "./src/app/ovf/ovf.component.ts");
    /* harmony import */


    var _ovf_account_credentials_ovf_account_credentials_ovf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ovf/account-credentials-ovf/account-credentials-ovf.component */
    "./src/app/ovf/account-credentials-ovf/account-credentials-ovf.component.ts");
    /* harmony import */


    var _success_page_success_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./success-page/success-page.component */
    "./src/app/success-page/success-page.component.ts");
    /* harmony import */


    var _guards_ami_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./guards/ami.guard */
    "./src/app/guards/ami.guard.ts");
    /* harmony import */


    var _guards_ovf_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./guards/ovf.guard */
    "./src/app/guards/ovf.guard.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _guards_main_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./guards/main.guard */
    "./src/app/guards/main.guard.ts");
    /* harmony import */


    var _docker_page_docker_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./docker-page/docker-page.component */
    "./src/app/docker-page/docker-page.component.ts");
    /* harmony import */


    var _guards_success_page_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./guards/success-page.guard */
    "./src/app/guards/success-page.guard.ts");
    /* harmony import */


    var _guards_docker_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./guards/docker.guard */
    "./src/app/guards/docker.guard.ts");

    var AppRouter = [{
      path: '',
      children: [{
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        canActivate: [_guards_main_guard__WEBPACK_IMPORTED_MODULE_9__["MainGuard"]]
      }, {
        path: 'ovf',
        component: _ovf_ovf_component__WEBPACK_IMPORTED_MODULE_3__["AppOvfComponent"],
        canActivate: [_guards_ovf_guard__WEBPACK_IMPORTED_MODULE_7__["OvfGuard"]],
        children: [{
          path: 'account-credentials-ovf',
          component: _ovf_account_credentials_ovf_account_credentials_ovf_component__WEBPACK_IMPORTED_MODULE_4__["AppAccountCredentialsOvfComponent"]
        }, {
          path: '',
          redirectTo: 'account-credentials-ovf',
          pathMatch: 'full'
        }]
      }, {
        path: 'ami',
        component: _ami_ami_component__WEBPACK_IMPORTED_MODULE_0__["AppAmiInstallationComponent"],
        canActivate: [_guards_ami_guard__WEBPACK_IMPORTED_MODULE_6__["AmiGuard"]],
        children: [{
          path: 'instance-id',
          component: _ami_instance_id_instance_id_component__WEBPACK_IMPORTED_MODULE_1__["AppInstanceIdComponent"]
        }, {
          path: 'account-credentials',
          component: _ami_account_credentials_account_credentials_component__WEBPACK_IMPORTED_MODULE_2__["AppAccountCredentialsComponent"],
          canActivate: [_guards_ami_guard__WEBPACK_IMPORTED_MODULE_6__["AmiCredentialsGuard"]]
        }, {
          path: '',
          redirectTo: 'instance-id',
          pathMatch: 'full'
        }]
      }]
    }, {
      path: 'docker',
      component: _docker_page_docker_page_component__WEBPACK_IMPORTED_MODULE_10__["AppDockerPageComponent"],
      canActivate: [_guards_docker_guard__WEBPACK_IMPORTED_MODULE_12__["DockerGuard"]]
    }, {
      path: 'success-page',
      component: _success_page_success_page_component__WEBPACK_IMPORTED_MODULE_5__["AppSuccessPageComponent"],
      canActivate: [_guards_success_page_guard__WEBPACK_IMPORTED_MODULE_11__["SuccessPageGuard"]]
    }];
    /***/
  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppService = /*@__PURE__*/function () {
      var AppService = /*#__PURE__*/function () {
        function AppService(http) {
          _classCallCheck(this, AppService);

          this.http = http;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
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


        _createClass(AppService, [{
          key: "isInstallationComplete",
          value: function isInstallationComplete() {
            return this._isInstallationComplete;
          }
          /**
           * Check installation completing for guards
           * @returns {boolean} - result of checking instance id
           */

        }, {
          key: "isInstanceChecked",
          value: function isInstanceChecked() {
            return this._isInstanceChecked;
          }
          /**
           * Send user data
           * @param {UserCredentials} credentials - username and password
           * @returns {Promise<{}>} - result of matching credentials
           */

        }, {
          key: "checkUserData",
          value: function checkUserData(credentials) {
            var _this3 = this;

            this.data.Username = credentials.username;
            this.data.Password = credentials.password;
            return this.http.post(this.url, this.data, {
              headers: this.headers
            }).toPromise().then(function () {
              return _this3._isInstallationComplete = true;
            });
          }
          /**
           * Send instance id
           * @param {string} instanceId - instance of user id
           * @returns {Promise<{}>} - result of matching instanceId
           */

        }, {
          key: "checkInstanceId",
          value: function checkInstanceId(instanceId) {
            var _this4 = this;

            this.data.Instance = instanceId;
            return this.http.post(this.instanceUrl, {
              instanceId: instanceId
            }, {
              headers: this.headers
            }).toPromise().then(function () {
              return _this4._isInstanceChecked = true;
            });
          }
          /**
           * Send ssh
           * @param {string} ssh - ssh
           * @returns {Promise<{}>} - result of matching ssh
           */

        }, {
          key: "checkSSH",
          value: function checkSSH(ssh) {
            return this.http.post(this.sshUrl, {
              key: ssh
            }, {
              headers: this.headers
            }).toPromise();
          }
        }]);

        return AppService;
      }();

      AppService.ɵfac = function AppService_Factory(t) {
        return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AppService,
        factory: AppService.ɵfac
      });
      return AppService;
    }();
    /***/

  },

  /***/
  "./src/app/docker-page/docker-page.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/docker-page/docker-page.component.ts ***!
    \******************************************************/

  /*! exports provided: AppDockerPageComponent */

  /***/
  function srcAppDockerPageDockerPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppDockerPageComponent", function () {
      return AppDockerPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppDockerPageComponent = /*@__PURE__*/function () {
      var AppDockerPageComponent = function AppDockerPageComponent() {
        _classCallCheck(this, AppDockerPageComponent);
      };

      AppDockerPageComponent.ɵfac = function AppDockerPageComponent_Factory(t) {
        return new (t || AppDockerPageComponent)();
      };

      AppDockerPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppDockerPageComponent,
        selectors: [["app-docker-page"]],
        decls: 16,
        vars: 0,
        consts: [[1, "container-fluid", "header"], [1, "row"], [1, "col-xl-4", "col-5", "border-right"], [1, "container-fluid"], [1, "col-2"], ["src", "./assets/pmm-logo.png", "alt", "pmm-logo", 1, "header-logo"], [1, "col-10"], [1, "col-xl-8", "col-7"], [1, "text-center"], ["href", "https://www.percona.com/doc/percona-monitoring-and-management/glossary.option.html#pmm-glossary-pmm-server-additional-option", "target", "_blank"]],
        template: function AppDockerPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Percona Monitoring and Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Installation docker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Please use pmm-server options for docker ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "read more here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".header[_ngcontent-%COMP%] {\n  height: 50px;\n  margin-bottom: 90px;\n  color: #cccccc;\n  background-color: #292929;\n}\n\n.header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: inherit;\n}\n\n.header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.header[_ngcontent-%COMP%]   .border-right[_ngcontent-%COMP%] {\n  border-right: 1px solid #141414 !important;\n}\n\n.header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--white);\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ja2VyLXBhZ2UvZG9ja2VyLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvZG9ja2VyLXBhZ2UvZG9ja2VyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICBjb2xvcjogI2NjY2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcbn1cblxuLmhlYWRlciBkaXYge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5oZWFkZXIgLnJvdyA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXIgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5oZWFkZXIgLmJvcmRlci1yaWdodCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxNDE0MTQgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlciAuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxucCB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufSJdfQ== */"]
      });
      return AppDockerPageComponent;
    }();
    /***/

  },

  /***/
  "./src/app/guards/ami.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/guards/ami.guard.ts ***!
    \*************************************/

  /*! exports provided: AmiGuard, AmiCredentialsGuard */

  /***/
  function srcAppGuardsAmiGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmiGuard", function () {
      return AmiGuard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmiCredentialsGuard", function () {
      return AmiCredentialsGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");

    var AmiGuard = /*@__PURE__*/function () {
      var AmiGuard = /*#__PURE__*/function () {
        function AmiGuard() {
          _classCallCheck(this, AmiGuard);

          this.INSTALLATION_TYPE = 'ami';
        }
        /**
         * Check on resolution for ami route
         */


        _createClass(AmiGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].installationType === this.INSTALLATION_TYPE;
          }
        }]);

        return AmiGuard;
      }();

      AmiGuard.ɵfac = function AmiGuard_Factory(t) {
        return new (t || AmiGuard)();
      };

      AmiGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AmiGuard,
        factory: AmiGuard.ɵfac
      });
      return AmiGuard;
    }();

    var AmiCredentialsGuard = /*@__PURE__*/function () {
      var AmiCredentialsGuard = /*#__PURE__*/function () {
        function AmiCredentialsGuard(appService) {
          _classCallCheck(this, AmiCredentialsGuard);

          this.appService = appService;
        }
        /**
         * Check on resolution for ami children account credentials route
         */


        _createClass(AmiCredentialsGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return this.appService.isInstanceChecked();
          }
        }]);

        return AmiCredentialsGuard;
      }();

      AmiCredentialsGuard.ɵfac = function AmiCredentialsGuard_Factory(t) {
        return new (t || AmiCredentialsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]));
      };

      AmiCredentialsGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AmiCredentialsGuard,
        factory: AmiCredentialsGuard.ɵfac
      });
      return AmiCredentialsGuard;
    }();
    /***/

  },

  /***/
  "./src/app/guards/docker.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/guards/docker.guard.ts ***!
    \****************************************/

  /*! exports provided: DockerGuard */

  /***/
  function srcAppGuardsDockerGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DockerGuard", function () {
      return DockerGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var DockerGuard = /*@__PURE__*/function () {
      var DockerGuard = /*#__PURE__*/function () {
        function DockerGuard() {
          _classCallCheck(this, DockerGuard);

          this.INSTALLATION_TYPE = "docker";
        }
        /**
         * Check resolution for ovf route
         */


        _createClass(DockerGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].installationType === this.INSTALLATION_TYPE;
          }
        }]);

        return DockerGuard;
      }();

      DockerGuard.ɵfac = function DockerGuard_Factory(t) {
        return new (t || DockerGuard)();
      };

      DockerGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DockerGuard,
        factory: DockerGuard.ɵfac
      });
      return DockerGuard;
    }();
    /***/

  },

  /***/
  "./src/app/guards/main.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/main.guard.ts ***!
    \**************************************/

  /*! exports provided: MainGuard */

  /***/
  function srcAppGuardsMainGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainGuard", function () {
      return MainGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var Installation = /*@__PURE__*/function (Installation) {
      Installation["AMI"] = "ami";
      Installation["OVF"] = "ovf";
      Installation["DOCKER"] = "docker";
      return Installation;
    }({});

    var MainGuard = /*@__PURE__*/function () {
      var MainGuard = /*#__PURE__*/function () {
        function MainGuard(router) {
          _classCallCheck(this, MainGuard);

          this.router = router;
        }

        _createClass(MainGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            switch (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].installationType) {
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
          }
        }]);

        return MainGuard;
      }();

      MainGuard.ɵfac = function MainGuard_Factory(t) {
        return new (t || MainGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      MainGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MainGuard,
        factory: MainGuard.ɵfac
      });
      return MainGuard;
    }();
    /***/

  },

  /***/
  "./src/app/guards/ovf.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/guards/ovf.guard.ts ***!
    \*************************************/

  /*! exports provided: OvfGuard */

  /***/
  function srcAppGuardsOvfGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OvfGuard", function () {
      return OvfGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var OvfGuard = /*@__PURE__*/function () {
      var OvfGuard = /*#__PURE__*/function () {
        function OvfGuard() {
          _classCallCheck(this, OvfGuard);

          this.INSTALLATION_TYPE = "ovf";
        }
        /**
         * Check resolution for ovf route
         */


        _createClass(OvfGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].installationType === this.INSTALLATION_TYPE;
          }
        }]);

        return OvfGuard;
      }();

      OvfGuard.ɵfac = function OvfGuard_Factory(t) {
        return new (t || OvfGuard)();
      };

      OvfGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OvfGuard,
        factory: OvfGuard.ɵfac
      });
      return OvfGuard;
    }();
    /***/

  },

  /***/
  "./src/app/guards/success-page.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/guards/success-page.guard.ts ***!
    \**********************************************/

  /*! exports provided: SuccessPageGuard */

  /***/
  function srcAppGuardsSuccessPageGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessPageGuard", function () {
      return SuccessPageGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");

    var SuccessPageGuard = /*@__PURE__*/function () {
      var SuccessPageGuard = /*#__PURE__*/function () {
        function SuccessPageGuard(appService) {
          _classCallCheck(this, SuccessPageGuard);

          this.appService = appService;
        }
        /**
         * Check resolution for success page router link
         */


        _createClass(SuccessPageGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return this.appService.isInstallationComplete();
          }
        }]);

        return SuccessPageGuard;
      }();

      SuccessPageGuard.ɵfac = function SuccessPageGuard_Factory(t) {
        return new (t || SuccessPageGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]));
      };

      SuccessPageGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SuccessPageGuard,
        factory: SuccessPageGuard.ɵfac
      });
      return SuccessPageGuard;
    }();
    /***/

  },

  /***/
  "./src/app/ovf/account-credentials-ovf/account-credentials-ovf.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/ovf/account-credentials-ovf/account-credentials-ovf.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AppAccountCredentialsOvfComponent */

  /***/
  function srcAppOvfAccountCredentialsOvfAccountCredentialsOvfComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppAccountCredentialsOvfComponent", function () {
      return AppAccountCredentialsOvfComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppAccountCredentialsOvfComponent_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppAccountCredentialsOvfComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppAccountCredentialsOvfComponent_div_12_div_1_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0 == null ? null : _r0.errors == null ? null : _r0.errors.required);
      }
    }

    function AppAccountCredentialsOvfComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("*", ctx_r2.errorMessage, "");
      }
    }

    function AppAccountCredentialsOvfComponent_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppAccountCredentialsOvfComponent_div_19_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Field can not me more than 255 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppAccountCredentialsOvfComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppAccountCredentialsOvfComponent_div_19_div_1_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppAccountCredentialsOvfComponent_div_19_div_2_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3 == null ? null : _r3.errors == null ? null : _r3.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3 == null ? null : _r3.errors == null ? null : _r3.errors.maxlength);
      }
    }

    function AppAccountCredentialsOvfComponent_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppAccountCredentialsOvfComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppAccountCredentialsOvfComponent_div_25_div_1_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5 == null ? null : _r5.errors == null ? null : _r5.errors.required);
      }
    }

    function AppAccountCredentialsOvfComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Passwords must be identical");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppAccountCredentialsOvfComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("*", ctx_r8.errorMessageSsh, "");
      }
    }

    var AppAccountCredentialsOvfComponent = /*@__PURE__*/function () {
      var AppAccountCredentialsOvfComponent = /*#__PURE__*/function () {
        function AppAccountCredentialsOvfComponent(router, appService) {
          _classCallCheck(this, AppAccountCredentialsOvfComponent);

          this.router = router;
          this.appService = appService;
          this.ovfUserData = {
            username: '',
            password: ''
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


        _createClass(AppAccountCredentialsOvfComponent, [{
          key: "onKey",
          value: function onKey(event, field) {
            switch (field) {
              case this.fields.USERNAME_OVF:
                {
                  this.ovfUserData.username = event.target.value.trim();
                  break;
                }

              case this.fields.PASSWORD_OVF:
                {
                  this.ovfUserData.password = event.target.value.trim();
                  break;
                }

              case this.fields.REPEAT_PASSWORD_OVF:
                {
                  this.repeatPassword = event.target.value.trim();
                  break;
                }

              case this.fields.SSH_OVF:
                {
                  this.ssh = event.target.value.trim();
                  break;
                }
            }

            this.isSubmitted = false;
            this.errorMessage = '';
          }
          /**
           * Check passwords fields for identical
           */

        }, {
          key: "onPasswordChange",
          value: function onPasswordChange() {
            this.isIdentical = this.ovfUserData.password === this.repeatPassword;
          }
          /**
           * Send a request and navigate to success page if response is success
           * @returns {boolean | void} boolean - result of matching password fields
           */

        }, {
          key: "submit",
          value: function submit(isError) {
            var _this5 = this;

            this.isSubmitted = true;
            this.onPasswordChange();

            if (!this.isIdentical) {
              return false;
            }

            if (isError) return;
            this.appService.checkUserData(this.ovfUserData).then(function () {
              if (_this5.ssh && _this5.ssh.length) return _this5.checkSSH();else _this5.router.navigate(['success-page']);
            })["catch"](function (err) {
              _this5.errorMessageSsh = err.error.title ? err.error.title : err.statusText;
            });
          }
        }, {
          key: "checkSSH",
          value: function checkSSH() {
            var _this6 = this;

            this.appService.checkSSH(this.ssh).then(function () {
              return _this6.router.navigate(['success-page']);
            })["catch"](function (err) {
              return _this6.errorMessage = err.error.title ? err.error.title : err.statusText;
            });
          }
        }]);

        return AppAccountCredentialsOvfComponent;
      }();

      AppAccountCredentialsOvfComponent.ɵfac = function AppAccountCredentialsOvfComponent_Factory(t) {
        return new (t || AppAccountCredentialsOvfComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]));
      };

      AppAccountCredentialsOvfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppAccountCredentialsOvfComponent,
        selectors: [["app-account-credentials-ovf"]],
        decls: 41,
        vars: 14,
        consts: [[1, "tab-pane"], [1, "row"], [1, "text-center", "col-8", "offset-2"], [1, "col-10", "offset-xl-2", "offset-1", "input-wrapper"], [1, "col-xl-9", "col-12", "text-right"], ["type", "text", "placeholder", "Username", "required", "", 1, "custom-form-input", "form-control", "ng-untouched", "ng-pristine", "ng-valid", 3, "name", "ngModel", "ngModelChange", "keyup"], ["user", "ngModel"], ["class", "col-xl-9 col-12 error-text", 4, "ngIf"], ["class", "error-text col-xl-9 col-xs-12", 4, "ngIf"], ["type", "password", "placeholder", "Password", "maxlength", "255", "required", "", 1, "custom-form-input", "form-control", "ng-untouched", "ng-pristine", "ng-valid", 3, "name", "ngModel", "ngModelChange", "keyup"], ["pass", "ngModel"], ["type", "password", "placeholder", "Repeat Password", "required", "", 1, "custom-form-input", "form-control", "ng-untouched", "ng-pristine", "ng-valid", 3, "name", "ngModel", "ngModelChange", "keyup"], ["repeatpass", "ngModel"], ["class", "col-lg-9 col-md-9 col-sm-12 error-text", 4, "ngIf"], [1, "row", "flex-container", "row-ssh"], ["type", "text", "placeholder", "SSH Key", 1, "custom-form-input", "form-control", "ng-untouched", "ng-pristine", "ng-valid", 3, "name", "ngModel", "ngModelChange", "keyup"], [1, "col-xl-3", "col-12", "input-caption", "font-italic"], [1, "col-xl-9", "col-12", "text-right", "button-row"], ["type", "reset", 1, "btn", "btn-primary"], [1, "btn", "btn-primary", 3, "click"], [1, "col-xl-9", "col-12", "error-text"], [4, "ngIf"], [1, "error-text", "col-xl-9", "col-xs-12"], [1, "col-lg-9", "col-md-9", "col-sm-12", "error-text"]],
        template: function AppAccountCredentialsOvfComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create your username and password to access your PMM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppAccountCredentialsOvfComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.ovfUserData.username = $event;
            })("keyup", function AppAccountCredentialsOvfComponent_Template_input_keyup_9_listener($event) {
              return ctx.onKey($event, ctx.fields.USERNAME_OVF);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppAccountCredentialsOvfComponent_div_12_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppAccountCredentialsOvfComponent_div_13_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppAccountCredentialsOvfComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.ovfUserData.password = $event;
            })("keyup", function AppAccountCredentialsOvfComponent_Template_input_keyup_16_listener($event) {
              return ctx.onKey($event, ctx.fields.PASSWORD_OVF);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppAccountCredentialsOvfComponent_div_19_Template, 3, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppAccountCredentialsOvfComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.repeatPassword = $event;
            })("keyup", function AppAccountCredentialsOvfComponent_Template_input_keyup_22_listener($event) {
              return ctx.onKey($event, ctx.fields.REPEAT_PASSWORD_OVF);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppAccountCredentialsOvfComponent_div_25_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppAccountCredentialsOvfComponent_div_26_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppAccountCredentialsOvfComponent_Template_input_ngModelChange_29_listener($event) {
              return ctx.ssh = $event;
            })("keyup", function AppAccountCredentialsOvfComponent_Template_input_keyup_29_listener($event) {
              return ctx.onKey($event, ctx.fields.SSH_OVF);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "*optional");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AppAccountCredentialsOvfComponent_div_34_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppAccountCredentialsOvfComponent_Template_button_click_39_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

              return ctx.submit(!(_r0 == null ? null : _r0.valid) || !(_r3 == null ? null : _r3.valid) || !(_r5 == null ? null : _r5.valid));
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx.fields.USERNAME_OVF);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ovfUserData.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.errors) && ctx.isSubmitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx.fields.PASSWORD_OVF);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ovfUserData.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3 == null ? null : _r3.errors) && ctx.isSubmitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx.fields.REPEAT_PASSWORD_OVF);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.repeatPassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5 == null ? null : _r5.errors) && ctx.isSubmitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isIdentical && ctx.isSubmitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx.fields.SSH_OVF);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ssh);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessageSsh);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]],
        styles: [".input-wrapper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.tab-pane[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  color: white;\n  font-weight: 300;\n  font-size: 0.9rem;\n}\n\ninput.custom-form-input[_ngcontent-%COMP%] {\n  height: 38px;\n  color: white;\n  font-weight: 300;\n  border-radius: 0;\n  border: 1px solid #2a2a2a;\n  background-color: #292929;\n}\n\ninput.custom-form-input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-weight: 100;\n  color: white;\n  font-size: 12px;\n}\n\ninput.custom-form-input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-weight: 100;\n  color: white;\n  font-size: 12px;\n}\n\ninput.custom-form-input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-weight: 100;\n  color: white;\n  font-size: 12px;\n}\n\ninput.custom-form-input[_ngcontent-%COMP%]::placeholder {\n  font-weight: 100;\n  color: white;\n  font-size: 12px;\n}\n\n.input-wrapper[_ngcontent-%COMP%]   .row-ssh[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  font-weight: 300;\n  color: white;\n}\n\n.input-caption[_ngcontent-%COMP%] {\n  padding-left: 0;\n  color: white;\n}\n\n.button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n  font-weight: 300;\n  outline: none;\n  color: white;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #292929;\n  border: none;\n  border-radius: 0;\n}\n\n@media screen and (max-width: 1200px) {\n  .flex-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n\n  .input-caption[_ngcontent-%COMP%] {\n    padding-left: 15px;\n  }\n\n  .input-caption[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZmL2FjY291bnQtY3JlZGVudGlhbHMtb3ZmL2FjY291bnQtY3JlZGVudGlhbHMtb3ZmLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFKQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFKQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFKQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQUE7SUFDQSw4QkFBQTtJQUNBLHVCQUFBO0lBQ0EsMkJBQUE7RUFDRjs7RUFFQTtJQUNFLGtCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxjQUFBO0lBQ0EsbUJBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvb3ZmL2FjY291bnQtY3JlZGVudGlhbHMtb3ZmL2FjY291bnQtY3JlZGVudGlhbHMtb3ZmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LXdyYXBwZXIgPiBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4udGFiLXBhbmUgcCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbmlucHV0LmN1c3RvbS1mb3JtLWlucHV0IHtcbiAgaGVpZ2h0OiAzOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYTJhMmE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XG59XG5cbmlucHV0LmN1c3RvbS1mb3JtLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaW5wdXQtd3JhcHBlciAucm93LXNzaCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW5wdXQtY2FwdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uLXJvdyBidXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYnV0dG9uLXJvdyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5pbnB1dC1jYXB0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cblxuICAuaW5wdXQtY2FwdGlvbiBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG5cbiJdfQ== */"]
      });
      return AppAccountCredentialsOvfComponent;
    }();
    /***/

  },

  /***/
  "./src/app/ovf/ovf.component.ts":
  /*!**************************************!*\
    !*** ./src/app/ovf/ovf.component.ts ***!
    \**************************************/

  /*! exports provided: AppOvfComponent */

  /***/
  function srcAppOvfOvfComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppOvfComponent", function () {
      return AppOvfComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppOvfComponent = /*@__PURE__*/function () {
      var AppOvfComponent = function AppOvfComponent() {
        _classCallCheck(this, AppOvfComponent);
      };

      AppOvfComponent.ɵfac = function AppOvfComponent_Factory(t) {
        return new (t || AppOvfComponent)();
      };

      AppOvfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppOvfComponent,
        selectors: [["app-ovf"]],
        decls: 26,
        vars: 0,
        consts: [[1, "container-fluid", "header"], [1, "row"], [1, "col-xl-4", "col-5", "border-right"], [1, "container-fluid"], [1, "col-2"], ["src", "./assets/pmm-logo.png", "alt", "pmm-logo", 1, "header-logo"], [1, "col-10"], [1, "col-xl-8", "col-7"], [1, "fa", "fa-long-arrow-right"], [1, "container", "main"], [1, "col-xl-10", "offset-xl-1", "col-12"], [1, "text-center"], [1, "nav", "nav-tabs"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "account-credentials-ovf"], [1, "tab-content"]],
        template: function AppOvfComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Percona Monitoring and Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Installation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " OVF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "PMM Installation Wizard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Account Credentials");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["body[_ngcontent-%COMP%] {\n  background-color: #141414;\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 50px;\n  margin-bottom: 90px;\n  color: #cccccc;\n  background-color: #292929;\n}\n\n.header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: inherit;\n}\n\n.header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.header[_ngcontent-%COMP%]   .border-right[_ngcontent-%COMP%] {\n  border-right: 1px solid #141414 !important;\n}\n\n.header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n}\n\n.main[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  color: var(--white);\n  margin-bottom: 25px;\n}\n\n.main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0;\n  margin: 0;\n}\n\n.main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%] {\n  border-bottom: 5px solid #292929;\n}\n\n.main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-weight: 300;\n  text-decoration: none;\n}\n\n.main[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  padding: 5px 10px 0;\n}\n\n.main[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  padding-top: 85px;\n  padding-bottom: 60px;\n  border: 1px solid #2a2a2a;\n  background-color: #1f1d1e;\n}\n\n@media screen and (max-width: 768px) {\n  .main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .tab-content[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    padding-bottom: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZmL292Zi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7Ozs7Ozs7RUFPRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQUE7RUFDRjs7RUFFQTtJQUNFLGlCQUFBO0lBQ0Esb0JBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvb3ZmL292Zi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICBjb2xvcjogI2NjY2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcbn1cblxuLmhlYWRlciBkaXYge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5oZWFkZXIgLnJvdyA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXIgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5oZWFkZXIgLmJvcmRlci1yaWdodCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxNDE0MTQgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlciAuaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubWFpbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1haW4gcCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5tYWluIC5uYXYtdGFicyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWFpbiAubmF2LXRhYnMgPiBsaS5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzI5MjkyOTtcbn1cblxuLm1haW4gLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYSxcbi5tYWluIC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6Zm9jdXMsXG4ubWFpbiAubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhOmhvdmVyLFxuLm1haW4gLm5hdi10YWJzID4gbGkgPiBhLFxuLm1haW4gLm5hdi10YWJzID4gbGkgPiBhOmZvY3VzLFxuLm1haW4gLm5hdi10YWJzID4gbGkgPiBhOmhvdmVyLFxuLm1haW4gLm5hdi10YWJzID4gbGkgPiBpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5tYWluIC5uYXYtdGFicyA+IGxpID4gaSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDA7XG59XG5cbi5tYWluIC50YWItY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiA4NXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJhMmEyYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWQxZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4gcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLnRhYi1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgfVxufVxuXG4iXX0= */"]
      });
      return AppOvfComponent;
    }();
    /***/

  },

  /***/
  "./src/app/success-page/success-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/success-page/success-page.component.ts ***!
    \********************************************************/

  /*! exports provided: AppSuccessPageComponent */

  /***/
  function srcAppSuccessPageSuccessPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSuccessPageComponent", function () {
      return AppSuccessPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppSuccessPageComponent = /*@__PURE__*/function () {
      var AppSuccessPageComponent = /*#__PURE__*/function () {
        function AppSuccessPageComponent(router) {
          _classCallCheck(this, AppSuccessPageComponent);

          this.router = router;
        }

        _createClass(AppSuccessPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.redirectToMainPage();
          }
          /**
           * Automatic redirect to installation page
           */

        }, {
          key: "goTo",
          value: function goTo() {
            window.location.replace('/');
          }
        }, {
          key: "redirectToMainPage",
          value: function redirectToMainPage() {
            var _this7 = this;

            setTimeout(function () {
              _this7.goTo();
            }, 5000);
          }
        }]);

        return AppSuccessPageComponent;
      }();

      AppSuccessPageComponent.ɵfac = function AppSuccessPageComponent_Factory(t) {
        return new (t || AppSuccessPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppSuccessPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppSuccessPageComponent,
        selectors: [["app-success-page"]],
        decls: 16,
        vars: 0,
        consts: [[1, "header"], [1, "row"], [1, "col-xl-4", "col-5", "border-right"], [1, "header-logo"], [1, "col-xl-8", "col-7"], [1, "text-center"], [1, "home-link", 3, "click"], [1, "fa", "fa-spinner"]],
        template: function AppSuccessPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Percona Monitoring and Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Installation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Congratulations! Your PMM is configured. Please click ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppSuccessPageComponent_Template_span_click_11_listener() {
              return ctx.goTo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " or wait 5 seconds to be redirected to the Index page\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".header[_ngcontent-%COMP%] {\n  height: 50px;\n  margin-bottom: 90px;\n  color: #cccccc;\n  background-color: #292929;\n}\n\n.header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: inherit;\n}\n\n.header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.header[_ngcontent-%COMP%]   .border-right[_ngcontent-%COMP%] {\n  border-right: 1px solid #141414 !important;\n}\n\n.header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n  float: left;\n  width: 35px;\n  height: 35px;\n  margin: 0 10px;\n  background: url('pmm-logo.74da77ed1cf4dde3cf0e.png') no-repeat;\n  background-size: cover;\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--white);\n  font-size: 0.9rem;\n}\n\n > p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.home-link[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n\n.home-link[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n  text-decoration: underline;\n}\n\n.fa-spinner[_ngcontent-%COMP%] {\n  font-size: 4em;\n  -webkit-animation: spin 1500ms infinite linear;\n  animation: spin 1500ms infinite linear;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VjY2Vzcy1wYWdlL3N1Y2Nlc3MtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsMENBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSw4REFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSw4Q0FBQTtFQUNBLHNDQUFBO0FBREY7O0FBSUE7RUFDRTtJQUVFLHVCQUFBO0VBREY7RUFHQTtJQUVFLHlCQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFO0lBRUUsdUJBQUE7RUFGRjtFQUlBO0lBRUUseUJBQUE7RUFGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3VjY2Vzcy1wYWdlL3N1Y2Nlc3MtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDkwcHg7XG4gIGNvbG9yOiAjY2NjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xufVxuXG4uaGVhZGVyIGRpdiB7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLmhlYWRlciAucm93ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlciBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmhlYWRlciAuYm9yZGVyLXJpZ2h0IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzE0MTQxNCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIC5oZWFkZXItbG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xuXG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9wbW0tbG9nby5wbmdcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5wIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbj4gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmhvbWUtbGluayB7XG4gIGNvbG9yOiAjMDA3YmZmOztcbn1cblxuLmhvbWUtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmZhLXNwaW5uZXIge1xuICBmb250LXNpemU6IDRlbTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBzcGluIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn0iXX0= */"]
      });
      return AppSuccessPageComponent;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `angular.json`.


    var environment = {
      production: false,
      installationType: "docker"
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/atymchuk/Projects/pmm-server/password-page/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.cec223a946cd05ac8b59.js.map