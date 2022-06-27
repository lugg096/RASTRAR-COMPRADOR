(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _compartido_funciones__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../compartido/funciones */ "3Djf");
/* harmony import */ var _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/apiMongo.service */ "GtMO");
/* harmony import */ var _services_ionic_components_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/ionic-components.service */ "L8EE");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/storage.service */ "n90K");












let LoginPage = class LoginPage {
    constructor(_apiMongo, _fun, _storage, router, _comp, formBuilder, _modal) {
        this._apiMongo = _apiMongo;
        this._fun = _fun;
        this._storage = _storage;
        this.router = router;
        this._comp = _comp;
        this.formBuilder = formBuilder;
        this._modal = _modal;
        this.viewPass = false;
        this.tipo = "password";
        this.submitAttempt = false;
        this.slideOptsOnboarding = {
            allowSlideNext: false,
            allowSlidePrev: false,
            slidesPerView: 1,
            initialSlide: 0,
            speed: 400
        };
        this.loginForm = formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[^@]+@[^@]+\.[^@]+$"), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    mostrar() {
        if (this.viewPass) {
            this.tipo = "password";
            this.viewPass = false;
        }
        else {
            this.tipo = "text";
            this.viewPass = true;
        }
    }
    idioma(contry) {
        //es
        //us
        this.nextSlidePadre();
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /* this.codePartida(); */
            this.backSlidePadre();
            this.backSlidePadre();
            this.backSlidePadre();
            this.backSlidePadre();
        });
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitAttempt = true;
            let loading = yield this._comp.presentLoading();
            if (!this.loginForm.valid) {
                loading.dismiss();
                return;
            }
            try {
                const res = yield this._apiMongo.filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].COLLECTION.party, src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].TABLE_SIS.customer, { 'data.email': this.loginForm.value.username, 'data.password': this.loginForm.value.pass });
                if (this._fun.isEmpty(res.result)) {
                    loading.dismiss();
                    yield this._fun.alertError('Usuario no existe');
                    return;
                }
                let user = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].TABLE_SIS.customer][0];
                this._storage.setLocalStorage('USER', user);
                loading.dismiss();
                this.router.navigate(['/home']);
            }
            catch (error) {
                yield this._fun.alertError(error);
                loading.dismiss();
            }
        });
    }
    invitado() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this._comp.presentLoading();
            this._storage.setLocalStorage('USER', 'INVITADO');
            loading.dismiss();
            this.router.navigate(['/home']);
        });
    }
    nextSlidePadre() {
        this.slidesPadre.lockSwipeToNext(false);
        this.slidesPadre.slideNext();
        this.slidesPadre.lockSwipeToNext(true);
    }
    backSlidePadre() {
        this.slidesPadre.lockSwipeToPrev(false);
        this.slidesPadre.slidePrev();
        this.slidesPadre.lockSwipeToPrev(true);
    }
    goImport() {
        this.router.navigate(['/import-wallet']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__["ApiMongoService"] },
    { type: _compartido_funciones__WEBPACK_IMPORTED_MODULE_7__["Funciones"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_ionic_components_service__WEBPACK_IMPORTED_MODULE_9__["IonicComponentsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
LoginPage.propDecorators = {
    slidesPadre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slidesPadre', { static: false },] }]
};
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" style=\" --background: #e4e4e438;\">\n\n  <!-- TIPO DE CREACION -->\n  <ion-slides #slidesPadre pager=\"false\" [options]=\"slideOptsOnboarding\" style=\"height: 100%;\">\n    <!-- Presentacion -->\n    <ion-slide class=\"ion-no-padding\">\n      <div style=\" padding-bottom: 5px;  height: 100%; color: #2F3435;\">\n\n\n\n        <div style=\"text-align: center;margin-top: 10%;\">\n          <img src=\"../../../assets/images/idiom.png\">\n        </div>\n\n        <p style=\"text-align: center; font-size: 23px;font-weight: 600; margin-bottom: 10px;\">Select a language\n        </p>\n\n        <p style=\"text-align: center;font-size: 12px; margin: 0 40px;color: #8a8a8a;\">\n          Choose the language of your preference</p>\n\n        <div style=\"text-align: center;padding-bottom: 50px;\">\n\n          <a href=\"javascript:void(0)\" class=\"btn-5\" (click)=\"idioma('es')\" style=\"position: relative;top: 30px;letter-spacing: 1.5px;display: inline-block;    padding: 20px 70px;\n        margin-bottom: 15px;font-size: 12px;\">\n            <!--  <img src=\"https://lipis.github.io/flag-icon-css/flags/4x3/es.svg\"\n              style=\"height: 20px;transform: translateY(-1px);width: auto;\" class=\"mx-1 mr-2\" alt=\"\"> --> Español\n\n          </a>\n\n\n\n          <br>\n         <!--  <a href=\"javascript:void(0)\" class=\" btn-2\" (click)=\"idioma('us')\" style=\"\n              position: relative;\n    top: 30px;\n    letter-spacing: 1.5px;\n    padding: 20px 70px;\n    display: inline-block;\n    font-size: 12px;\n    border: 1px solid #0059b580;\n    color: #0059b5d9;\">\n             <img src=\"https://lipis.github.io/flag-icon-css/flags/4x3/us.svg\"\n              style=\"height: 20px;transform: translateY(-1px);width: auto;\" class=\"mx-1 mr-2\" alt=\"\"> English\n\n          </a> -->\n\n          <a href=\"javascript:void(0)\" class=\" btn-2\"  style=\"\n         position: relative;\n          top: 30px;\n          letter-spacing: 1.5px;\n          padding: 20px 70px;\n          display: inline-block;\n          font-size: 12px;\n          border: 1px solid #e2e2e280;\n          color: #ffffffd9;\n          background: #bdbdbd;\">\n            <!--  <img src=\"https://lipis.github.io/flag-icon-css/flags/4x3/us.svg\"\n          style=\"height: 20px;transform: translateY(-1px);width: auto;\" class=\"mx-1 mr-2\" alt=\"\"> --> English\n\n          </a>\n\n\n\n\n\n\n          <!--     <ion-button expand=\"block\" (click)=\"nextSlidePadre()\" class=\"button-01\">\n          Crear cuenta\n        </ion-button> -->\n\n          <!--  <ion-button expand=\"block\" class=\"button-02\" (click)=\"goImport()\">\n        Importar cuenta\n      </ion-button> -->\n        </div>\n\n      </div>\n    </ion-slide>\n\n    <ion-slide class=\"ion-no-padding\">\n      <div style=\"    padding-bottom: 5px;\n      padding-top: 70px;\n      width: 100%;\n      padding-left: 20px;\n      min-height: 630px;\n      color: #2F3435;position: relative;\">\n\n        <div style=\"    text-align: left;\">\n          <img src=\"../../assets/images/logo.png\" style=\"width: 50px;\" alt=\"\">\n        </div>\n\n        <p style=\"    text-align: left;\n        font-size: 25px;\n        font-weight: 600;\n        margin-bottom: 0;\n        margin-top: 30px;\">Trazabilidad\n        </p>\n\n        <p style=\"font-weight: 500;\n        text-align: left;\n        font-size: 27px;\n        line-height: 1;\n        color: #6d6d6d;\">\n          de COOPECAN</p>\n\n        <p style=\"    margin: 0;\n          text-align: left;\n          font-weight: 600;\n          font-size: 25px;\n          color: #0059b5d6;\n          margin-top: 30px;\">\n          Bienvenido\n        </p>\n        <p style=\"    margin: 0;\n          text-align: left;\n          font-size: 13px;\">Ingresa un usuario</p>\n\n        <div style=\"padding-right: 15px;\">\n          <form [formGroup]=\"loginForm\" style=\"    margin-left: -15px;\">\n            <ion-item style=\"margin-top: 20px; --background: transparent;\">\n              <!-- <ion-label position=\"stacked\" style=\"--color:var(--black-100)\">Correo electrónico</ion-label> -->\n              <ion-input formControlName=\"username\" placeholder=\"Ingrese correo electrónico\"\n                style=\"color: var(--black-400);\">\n              </ion-input>\n            </ion-item>\n\n            <p style=\"font-size: 11px;color: #eb445a;text-align: left;margin-top: 5px;margin-left: 15px;\"\n              *ngIf=\"!loginForm.controls.username.valid && !loginForm.controls.username.pending && (loginForm.controls.username.dirty || submitAttempt)\">\n              Correo es requerido\n            </p>\n\n            <ion-item style=\"margin-top:18px;    --background: transparent;\">\n              <!-- <ion-label position=\"stacked\" style=\"--color:var(--black-100)\">Contraseña</ion-label> -->\n              <ion-input placeholder=\"Ingrese contraseña\" [type]=\"tipo\" formControlName=\"pass\"\n                style=\"color: var(--black-400);\">\n              </ion-input>\n              <span style=\"position: absolute;right: 10px; bottom: 5px;z-index: 10;\" (click)=\"mostrar()\">\n                <ion-icon name=\"eye\" *ngIf=\"viewPass\" style=\"font-size: 23px; color: #adadad;;\"></ion-icon>\n                <ion-icon name=\"eye-off\" *ngIf=\"!viewPass\" style=\"font-size: 23px; color: #adadad;;\"></ion-icon>\n              </span>\n            </ion-item>\n            <p style=\"font-size: 11px;color: #eb445a;text-align: left;margin-top: 5px;margin-left: 15px;\"\n              *ngIf=\"!loginForm.controls.pass.valid && (loginForm.controls.pass.dirty || submitAttempt)\">\n              Contraseña es requerida\n            </p>\n          </form>\n\n        </div>\n\n\n        <div style=\"text-align: center\">\n\n          <a href=\"javascript:void(0)\" class=\"btn-5\" (click)=\"login()\" style=\"position: relative;\n            margin-top: 30px;\n            letter-spacing: 1.5px;\n            padding: 18px 80px;\n            display: inline-block;\n            font-size: 11px;\">\n            Iniciar sesión</a>\n          <br>\n\n        </div>\n\n        <div style=\"    position: absolute;\n        font-size: 11px;\n        bottom: 20px;\">\n          Si no cuenta con acceso puede contactarce con\n          <a href=\"\" style=\"color: #0059b5;\">ventas@coopecan.pe</a> para solicitar acceso.\n\n        </div>\n\n\n        <div style=\"    position: absolute;\n        top: 20px;\n        right: 0;\">\n          <p style=\"font-size: 11px;\n          text-align: right;\n          margin: 0;\n          margin-right: 20px;\">¿No tienes <br> una cuenta?</p>\n\n          <a href=\"javascript:void(0)\" class=\"btn-5\" (click)=\"invitado()\" style=\"\n          margin-top: 8px;\n    letter-spacing: 1.5px;\n    padding: 12px 20px;\n    display: inline-block;\n    font-size: 10px;\n    border-radius: 20px 0 0 20px;\">\n            Iniciar como invitado</a>\n\n        </div>\n\n      </div>\n    </ion-slide>\n\n\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainSlide,\n.mainSlide ion-slide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 78%;\n}\n\n.cancel {\n  font-size: 13px;\n  color: var(--main-color);\n  cursor: pointer;\n}\n\n.button-01 {\n  margin: 40px 20px 7px;\n  text-transform: capitalize;\n  --background: var(--main-color);\n  --border-radius: 12px;\n  font-size: 11px;\n}\n\n.button-02 {\n  margin: 10px 20px 7px;\n  text-transform: capitalize;\n  --background: #fff;\n  --color: var(--main-color);\n  --border-radius: 12px;\n  font-size: 11px;\n}\n\n.svg {\n  padding-top: 40%;\n  margin: auto;\n  width: 50%;\n}\n\nion-label {\n  font-size: 5px;\n}\n\nion-radio {\n  margin-right: 15px;\n}\n\n/* IMAGENES */\n\n.content-img {\n  height: 120px;\n  align-items: center;\n  text-align: center;\n  position: relative;\n  padding: 2px;\n}\n\n.eliminar {\n  background: #6051e6f5;\n  position: absolute;\n  transition: 0.18s linear all;\n  height: 0%;\n  width: 100%;\n  color: white;\n  z-index: -1;\n  border: 2px 2px solid #fff;\n}\n\n.img {\n  position: relative;\n  transition: 0.18s linear all;\n  z-index: 1;\n  height: 100%;\n}\n\n.img img {\n  margin: auto;\n  max-height: 100%;\n  max-width: 100%;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  background: white;\n  object-fit: cover;\n}\n\n.openClose {\n  height: 100%;\n  z-index: 1;\n}\n\n.eliminarClose {\n  height: 0%;\n  z-index: -1;\n}\n\n.icon-nav-arrow {\n  font-size: 21px;\n  color: #F7F8FB;\n  position: absolute;\n}\n\n.title {\n  font-size: 18px;\n  text-align: center;\n  color: #F7F8FB;\n}\n\n.button-desable {\n  --background: #8680bdf5;\n  --color: #fff;\n}\n\n.button-enable {\n  --background: #fff;\n  --color: #6051e6f5;\n}\n\n.cancel {\n  font-size: 13px;\n  color: var(--main-color);\n  cursor: pointer;\n}\n\n.btn-main {\n  border-radius: 100%;\n  padding: 20px;\n  margin: 0 15px;\n  font-size: 23px;\n  height: 55px;\n  width: 55px;\n  padding: 0;\n  display: inline-block;\n  border: none;\n  box-shadow: var(--shadow-black-300);\n}\n\n.btn-main-02 {\n  background-color: var(--main-color);\n  border-radius: 100%;\n  font-size: 23px;\n  height: 48px;\n  width: 48px;\n  padding: 0;\n  display: inline-block;\n  border: none;\n  box-shadow: var(--shadow-black-300);\n}\n\n.animate-pulse {\n  animation: pulse_02 2s ease infinite;\n}\n\n@keyframes pulse_02 {\n  0% {\n    transform: scale(0.94);\n    box-shadow: 0 0 0 0 var(--main-color);\n  }\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 12px rgba(255, 255, 255, 0);\n  }\n  100% {\n    transform: scale(0.94);\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n  }\n}\n\n.btn-1 {\n  text-decoration: none;\n  background-color: #fff;\n  padding: 8px 15px;\n  border: none;\n  border-radius: 30px;\n  color: var(--main-color);\n  font-size: 12px;\n  box-shadow: var(--shadow-black-300);\n  font-weight: 600;\n}\n\n.btn-3 {\n  text-decoration: none;\n  background-color: #fff;\n  padding: 15px 70px;\n  border: none;\n  border-radius: 30px;\n  color: var(--main-color);\n  font-size: 12px;\n  box-shadow: var(--shadow-black-300);\n  font-weight: 600;\n}\n\n.btn-1:hover {\n  background-color: var(--main-color);\n  color: #fff;\n}\n\n.btn-2 {\n  text-decoration: none;\n  background-color: var(--main-color);\n  padding: 15px 70px;\n  border: none;\n  border-radius: 30px;\n  color: #ffffffdc;\n  font-size: 13px;\n  box-shadow: var(--shadow-black-300);\n  font-weight: 500;\n}\n\n.btn-2:hover {\n  background-color: #ffffffdc;\n  color: var(--main-color);\n}\n\n.cancel {\n  font-size: 13px;\n  color: var(--main-color);\n  cursor: pointer;\n  position: relative;\n  top: 50px;\n}\n\n/* NUEVOS */\n\n.active {\n  color: #9f76cf;\n}\n\n.desabled {\n  color: #aaaaaa;\n}\n\n.btn-2 {\n  text-decoration: none;\n  background: #fff;\n  padding: 15px 50px;\n  border: 1px solid #4848488c;\n  border-radius: 30px;\n  color: #484848;\n  font-size: 11px;\n  box-shadow: var(--shadow-black-100);\n  font-weight: 600;\n}\n\n.btn-2:hover {\n  background: linear-gradient(90deg, #484848 10%, #484848b5 100%);\n  color: #fff;\n}\n\n.btn-3 {\n  text-decoration: none;\n  background: linear-gradient(90deg, #484848 10%, #484848b5 100%);\n  padding: 15px 50px;\n  border-radius: 30px;\n  color: #fff;\n  font-size: 11px;\n  box-shadow: var(--shadow-black-100);\n  font-weight: 500;\n}\n\n.btn-3:hover {\n  text-decoration: none;\n  background: linear-gradient(90deg, #484848 10%, #484848b5 100%);\n  padding: 15px 50px;\n  border-radius: 30px;\n  color: #fff;\n  font-size: 11px;\n  box-shadow: var(--shadow-black-100);\n  font-weight: 500;\n}\n\n/* ************************ */\n\n.btn-4 {\n  text-decoration: none;\n  background: #fff;\n  padding: 15px 50px;\n  border: 1px solid #005bb5a8;\n  border-radius: 30px;\n  color: #0059b5;\n  font-size: 11px;\n  box-shadow: var(--shadow-black-100);\n  font-weight: 600;\n}\n\n.btn-5 {\n  text-decoration: none;\n  background: linear-gradient(90deg, #0059b5 10%, #5c67ec 100%);\n  padding: 15px 50px;\n  border-radius: 30px;\n  color: #fff;\n  font-size: 11px;\n  box-shadow: var(--shadow-black-100);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0MsY0FBQTtBQUREOztBQUlBO0VBQ0Usa0JBQUE7QUFERjs7QUFLQSxhQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRkY7O0FBSUU7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRk47O0FBTUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFIRjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFORjs7QUFTQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQU5GOztBQVVBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQVBGOztBQVdBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtBQVJGOztBQVlBO0VBQ0UsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtBQVRGOztBQWFBO0VBQ0Usb0NBQUE7QUFWRjs7QUFjQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxxQ0FBQTtFQVhGO0VBY0E7SUFDRSxtQkFBQTtJQUNBLDZDQUFBO0VBWkY7RUFlQTtJQUNFLHNCQUFBO0lBQ0EsMENBQUE7RUFiRjtBQUNGOztBQW1CQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFqQkY7O0FBb0JBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxtQ0FBQTtFQUNBLFdBQUE7QUFqQkY7O0FBcUJBO0VBQ0UscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSwyQkFBQTtFQUNBLHdCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFsQkY7O0FBcUJBLFdBQUE7O0FBRUE7RUFDRSxjQUFBO0FBbkJGOztBQXFCQTtFQUNFLGNBQUE7QUFsQkY7O0FBc0JBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQW5CRjs7QUFzQkE7RUFDRSwrREFBQTtFQUNBLFdBQUE7QUFuQkY7O0FBc0JBO0VBQ0UscUJBQUE7RUFDQSwrREFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFuQkY7O0FBc0JBO0VBQ0UscUJBQUE7RUFDQSwrREFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFuQkY7O0FBdUJBLDZCQUFBOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQXRCRjs7QUEyQkE7RUFDRSxxQkFBQTtFQUNBLDZEQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQXhCRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpblNsaWRlLFxyXG4ubWFpblNsaWRlIGlvbi1zbGlkZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiA3OCU7XHJcbn1cclxuXHJcblxyXG4uY2FuY2VsIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbi0wMSB7XHJcbiAgbWFyZ2luOiA0MHB4IDIwcHggN3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBcclxufVxyXG5cclxuLmJ1dHRvbi0wMiB7XHJcbiAgbWFyZ2luOiAxMHB4IDIwcHggN3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAtLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTs7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLnN2Z3tcclxuICBwYWRkaW5nLXRvcDogNDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiBmb250LXNpemU6IDVweDtcclxufVxyXG5cclxuaW9uLXJhZGlve1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuXHJcbi8qIElNQUdFTkVTICovXHJcbi5jb250ZW50LWltZyB7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4uZWxpbWluYXIge1xyXG4gIGJhY2tncm91bmQ6ICM2MDUxZTZmNTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNpdGlvbjogMC4xOHMgbGluZWFyIGFsbDtcclxuICBoZWlnaHQ6IDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBib3JkZXI6IDJweCAycHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IDAuMThzIGxpbmVhciBhbGw7XHJcbiAgei1pbmRleDogMTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGltZyB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLm9wZW5DbG9zZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5lbGltaW5hckNsb3NlIHtcclxuICBoZWlnaHQ6IDAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uaWNvbi1uYXYtYXJyb3cge1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICBjb2xvcjogI0Y3RjhGQjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI0Y3RjhGQjtcclxufVxyXG5cclxuLmJ1dHRvbi1kZXNhYmxlIHtcclxuICAtLWJhY2tncm91bmQ6ICM4NjgwYmRmNTtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYnV0dG9uLWVuYWJsZSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC0tY29sb3I6ICM2MDUxZTZmNTtcclxufVxyXG5cclxuXHJcbi5jYW5jZWwge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLmJ0bi1tYWluIHtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHBhZGRpbmc6MjBweDtcclxuICBtYXJnaW46IDAgMTVweDtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYmxhY2stMzAwKTtcclxufVxyXG5cclxuXHJcbi5idG4tbWFpbi0wMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYmxhY2stMzAwKTtcclxufVxyXG5cclxuXHJcbi5hbmltYXRlLXB1bHNlIHtcclxuICBhbmltYXRpb246IHB1bHNlXzAyIDJzIGVhc2UgaW5maW5pdGU7XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlXzAyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCB2YXIoLS1tYWluLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDcwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLmJ0bi0xIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA4cHggMTVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1ibGFjay0zMDApO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5idG4tMyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTVweCA3MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWJsYWNrLTMwMCk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmJ0bi0xOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi5idG4tMiB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIHBhZGRpbmc6IDE1cHggNzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBjb2xvcjogI2ZmZmZmZmRjO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYmxhY2stMzAwKTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYnRuLTI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZkYztcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbi5jYW5jZWwge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwcHg7XHJcbn1cclxuXHJcbi8qIE5VRVZPUyAqL1xyXG5cclxuLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICM5Zjc2Y2Y7XHJcbn1cclxuLmRlc2FibGVkIHtcclxuICBjb2xvcjogI2FhYWFhYTtcclxufVxyXG5cclxuXHJcbi5idG4tMiB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogIDE1cHggNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNDg0ODQ4OGM7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBjb2xvcjogICM0ODQ4NDg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1ibGFjay0xMDApO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5idG4tMjpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0ODQ4NDggMTAlLCAjNDg0ODQ4YjUgMTAwJSk7XHJcbiAgY29sb3I6ICAjZmZmIDtcclxufVxyXG5cclxuLmJ0bi0ze1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0ODQ4NDggMTAlLCAjNDg0ODQ4YjUgMTAwJSk7XHJcbiAgcGFkZGluZzogMTVweCA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgY29sb3I6ICAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYmxhY2stMTAwKTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYnRuLTM6aG92ZXJ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzQ4NDg0OCAxMCUsICM0ODQ4NDhiNSAxMDAlKTtcclxuICBwYWRkaW5nOiAxNXB4IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBjb2xvcjogICNmZmY7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1ibGFjay0xMDApO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcblxyXG4uYnRuLTQge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6ICAxNXB4IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNWJiNWE4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgY29sb3I6ICAjMDA1OWI1O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYmxhY2stMTAwKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuXHJcbi5idG4tNXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDA1OWI1IDEwJSwgIzVjNjdlYyAxMDAlKTtcclxuICBwYWRkaW5nOiAxNXB4IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBjb2xvcjogICNmZmY7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1ibGFjay0xMDApO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map