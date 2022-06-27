(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-certificado-certificado-module"],{

/***/ "AnPs":
/*!*******************************************************!*\
  !*** ./src/app/pages/certificado/certificado.page.ts ***!
  \*******************************************************/
/*! exports provided: CertificadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadoPage", function() { return CertificadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_certificado_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./certificado.page.html */ "RnLm");
/* harmony import */ var _certificado_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificado.page.scss */ "mq6M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let CertificadoPage = class CertificadoPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    dasherize(string) {
        return string.replace(/[A-Z]/g, function (char, index) {
            return (index !== 0 ? '-' : '') + char.toLowerCase();
        });
    }
    ;
    compartir() {
    }
    goGestion() {
        this.router.navigate(['/home']);
    }
    verCertificado() {
    }
};
CertificadoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CertificadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-certificado',
        template: _raw_loader_certificado_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_certificado_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CertificadoPage);



/***/ }),

/***/ "Fgaq":
/*!********************************************************!*\
  !*** ./src/app/directives/shared-directives.module.ts ***!
  \********************************************************/
/*! exports provided: SharedDirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDirectivesModule", function() { return SharedDirectivesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _image_fade_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-fade.directive */ "vGfi");




let SharedDirectivesModule = class SharedDirectivesModule {
};
SharedDirectivesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_image_fade_directive__WEBPACK_IMPORTED_MODULE_3__["ImageFadeDirective"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_image_fade_directive__WEBPACK_IMPORTED_MODULE_3__["ImageFadeDirective"]]
    })
], SharedDirectivesModule);



/***/ }),

/***/ "RnLm":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/certificado/certificado.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n\n  <ion-toolbar [style.--background]=\"'#1c1c24'\">\n    <ion-buttons slot=\"end\" style=\"position: absolute;right: 0;z-index: 20;\" (click)=\"goGestion()\">\n      <ion-icon name=\"close-outline\" style=\"font-size: 30px; color: white;padding: 15px;\"></ion-icon>\n    </ion-buttons>\n    <p style=\"text-align: center;color: rgba(255, 255, 255, 0.842);font-size: 16px;margin: 0;\">\n      Certificado</p>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content scrollEvents=\"true\" [fullscreen]=\"true\" [appImageFade]=\"cover\" [style.--custombg]=\"'#1c1c24'\">\n  <!-- Image of the album -->\n\n  <p style=\"font-size: 22px; margin: 20px 20px 10px 20px; color: white;position: fixed;line-height: 1;\">Buen trabajo!\n    <br> <small style=\"font-size: 14px;color: rgba(255, 255, 255, 0.842);\">Certificado en inspección de sanidad</small>\n  </p>\n  <div class=\"ion-text-center image-box\" #cover>\n    <img src=\"../../../assets/images/certificado.png\" (click)=\"verCertificado()\"\n      style=\" box-shadow: var(--shadow-black-100);\">\n    <ion-button (click)=\"verCertificado()\" class=\"button-01\">\n      <ion-icon name=\"ribbon-outline\" style=\"font-size: 16px;margin: 3px;\"></ion-icon> Validar <br>\n    </ion-button>\n    <ion-button (click)=\"compartir()\" class=\"button-02\">\n      <!-- <ion-icon name=\"share-social-outline\"></ion-icon> -->\n      <ion-icon name=\"share-social\" style=\"font-size: 14px;margin: 3px;\"></ion-icon> Compartir <br>\n    </ion-button>\n  </div>\n  <!-- Rest of the page content -->\n  <div class=\"main\">\n\n    <!-- General information -->\n    <ion-row>\n    </ion-row>\n\n    <!-- List of tracks -->\n    <ion-list>\n      <p style=\"margin: 10px 15px;font-size: 18px;color: #686868;font-weight: 600;\">Informacion certificado </p>\n      <p style=\"margin: 5px 15px;font-size: 12px;color: #acacac;\">Observación y evaluación\n        que realizada a las alpacas, competente sobre las condiciones sanitarias de los alimentos y\n        bebidas en protección de la salud.</p>\n      <ion-item lines=\"none\">\n        <ion-label>\n          <p>Emisor</p>\n          José Luis Martines Sánchez\n        </ion-label>\n        <ion-icon slot=\"end\" size=\"small\" name=\"ellipsis-horizontal\" color=\"light\"></ion-icon>\n      </ion-item>\n\n      <!--       <ion-item lines=\"none\">\n        <ion-label>\n          <p>Titular</p>\n          100225\n        </ion-label>\n        <ion-icon slot=\"end\" size=\"small\" name=\"ellipsis-horizontal\" color=\"light\"></ion-icon>\n      </ion-item> -->\n\n      <ion-item lines=\"none\">\n        <ion-label>\n          <p>Titular</p>\n          Jean Carlos Zabala Vargas\n        </ion-label>\n        <ion-icon slot=\"end\" size=\"small\" name=\"ellipsis-horizontal\" color=\"light\"></ion-icon>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label>\n          <p>Fecha de emisión</p>\n          20 Ene 2021\n        </ion-label>\n        <ion-icon slot=\"end\" size=\"small\" name=\"ellipsis-horizontal\" color=\"light\"></ion-icon>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label>\n          <p>Fecha de vencimiento</p>\n          10 Mar 2022\n        </ion-label>\n        <ion-icon slot=\"end\" size=\"small\" name=\"ellipsis-horizontal\" color=\"light\"></ion-icon>\n      </ion-item>\n\n\n    <!--   <ion-item lines=\"none\">\n        <ion-label>\n          <p>Tipo de campaña</p>\n          Campaña tipo 01\n        </ion-label>\n        <ion-icon slot=\"end\" size=\"small\" name=\"ellipsis-horizontal\" color=\"light\"></ion-icon>\n      </ion-item> -->\n\n<!-- \n\n\n      <ion-item lines=\"none\">\n        <ion-label>\n          <p>Código</p>\n          00001212\n        </ion-label>\n        <ion-icon slot=\"end\" size=\"small\" name=\"ellipsis-horizontal\" color=\"light\"></ion-icon>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label>\n          <p>DID</p>\n          203579879987979789798\n        </ion-label>\n        <ion-icon slot=\"end\" size=\"small\" name=\"ellipsis-horizontal\" color=\"light\"></ion-icon>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label>\n          <p>Fecha de generación</p>\n          10 Mar 2022\n        </ion-label>\n        <ion-icon slot=\"end\" size=\"small\" name=\"ellipsis-horizontal\" color=\"light\"></ion-icon>\n      </ion-item> -->\n\n      <!--     <ion-item lines=\"none\">\n        <ion-label>\n          <p>Fecha de generación</p>\n          10 Mar 2022\n        </ion-label>\n        <ion-icon slot=\"end\" size=\"small\" name=\"ellipsis-horizontal\" color=\"light\"></ion-icon>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label>\n          <p>Fecha de generación</p>\n          10 Mar 2022\n        </ion-label>\n        <ion-icon slot=\"end\" size=\"small\" name=\"ellipsis-horizontal\" color=\"light\"></ion-icon>\n      </ion-item> -->\n    </ion-list>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "Xfnz":
/*!*********************************************************!*\
  !*** ./src/app/pages/certificado/certificado.module.ts ***!
  \*********************************************************/
/*! exports provided: CertificadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadoPageModule", function() { return CertificadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _certificado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./certificado-routing.module */ "Xlxg");
/* harmony import */ var _certificado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./certificado.page */ "AnPs");
/* harmony import */ var src_app_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared-directives.module */ "Fgaq");








let CertificadoPageModule = class CertificadoPageModule {
};
CertificadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _certificado_routing_module__WEBPACK_IMPORTED_MODULE_5__["CertificadoPageRoutingModule"],
            src_app_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__["SharedDirectivesModule"]
        ],
        declarations: [_certificado_page__WEBPACK_IMPORTED_MODULE_6__["CertificadoPage"]]
    })
], CertificadoPageModule);



/***/ }),

/***/ "Xlxg":
/*!*****************************************************************!*\
  !*** ./src/app/pages/certificado/certificado-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CertificadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadoPageRoutingModule", function() { return CertificadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _certificado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./certificado.page */ "AnPs");




const routes = [
    {
        path: '',
        component: _certificado_page__WEBPACK_IMPORTED_MODULE_3__["CertificadoPage"]
    }
];
let CertificadoPageRoutingModule = class CertificadoPageRoutingModule {
};
CertificadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CertificadoPageRoutingModule);



/***/ }),

/***/ "mq6M":
/*!*********************************************************!*\
  !*** ./src/app/pages/certificado/certificado.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n  color: #fff;\n}\nion-item p {\n  margin: 0;\n  font-size: 12px;\n  color: #949494;\n}\nion-list {\n  --ion-background-color: #fff;\n}\n.album-info {\n  color: #fff;\n  margin-left: 11px;\n}\n.album-info p {\n  font-weight: bold;\n}\n.image-box {\n  position: fixed;\n  z-index: 0;\n  padding-left: 10%;\n  padding-right: 10%;\n  padding-top: 25%;\n}\nion-row {\n  padding-top: 58vh;\n}\nion-content {\n  font-family: \"Poppins\", sans-serif !important;\n  color: #000;\n  --background: linear-gradient(var(--custombg) 200px, #fff 200px);\n}\n.main {\n  z-index: 10;\n  /*   background: linear-gradient(var(--custombg) 30%, #fff 40%); */\n  min-height: 800px;\n}\nion-label {\n  font-size: 14px !important;\n  color: var(--black-400) !important;\n}\n.button-01 {\n  text-transform: capitalize;\n  --background: #fff;\n  color: var(--main-color);\n  --border-radius: 12px;\n  font-size: 11px;\n  display: inline-block;\n  margin: 5px;\n  padding: 0 2px !important;\n}\n.button-02 {\n  text-transform: capitalize;\n  --background: var(--main-color);\n  color: #fff;\n  --border-radius: 12px;\n  font-size: 11px;\n  display: inline-block;\n  margin: 5px;\n  padding: 0 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjZXJ0aWZpY2Fkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFHQTtFQUNFLDRCQUFBO0FBQUY7QUFLQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUZGO0FBSUU7RUFDRSxpQkFBQTtBQUZKO0FBTUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhGO0FBTUE7RUFDRSxpQkFBQTtBQUhGO0FBTUE7RUFDRSw2Q0FBQTtFQUNBLFdBQUE7RUFDQSxnRUFBQTtBQUhGO0FBTUE7RUFDRSxXQUFBO0VBQ0Esa0VBQUE7RUFFQSxpQkFBQTtBQUpGO0FBT0E7RUFDRSwwQkFBQTtFQUNBLGtDQUFBO0FBSkY7QUFPQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSkY7QUFRQTtFQUNFLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFMRiIsImZpbGUiOiJjZXJ0aWZpY2Fkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzk0OTQ5NDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuXHJcbi5hbGJ1bS1pbmZvIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tbGVmdDogMTFweDtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi5pbWFnZS1ib3gge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICBwYWRkaW5nLXRvcDogMjUlO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICBwYWRkaW5nLXRvcDogNTh2aDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzAwMDtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1jdXN0b21iZykgMjAwcHgsICNmZmYgMjAwcHgpO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgLyogICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tY3VzdG9tYmcpIDMwJSwgI2ZmZiA0MCUpOyAqL1xyXG5cclxuICBtaW4taGVpZ2h0OiA4MDBweDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tYmxhY2stNDAwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0dG9uLTAxIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDAgMnB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uYnV0dG9uLTAyIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDAgMnB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "vGfi":
/*!****************************************************!*\
  !*** ./src/app/directives/image-fade.directive.ts ***!
  \****************************************************/
/*! exports provided: ImageFadeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageFadeDirective", function() { return ImageFadeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let ImageFadeDirective = class ImageFadeDirective {
    constructor(renderer, domCtrl) {
        this.renderer = renderer;
        this.domCtrl = domCtrl;
    }
    onContentScroll($event) {
        const scrollTop = $event.detail.scrollTop;
        let newOpacity = Math.max(100 - (scrollTop / 1.8), 0);
        let newPadding = 10 + (scrollTop / 10);
        if (newPadding > 100) {
            newPadding = 100;
        }
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.cover, 'opacity', `${newOpacity}%`);
            this.renderer.setStyle(this.cover, 'padding-left', `${newPadding}%`);
            this.renderer.setStyle(this.cover, 'padding-right', `${newPadding}%`);
        });
    }
};
ImageFadeDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"] }
];
ImageFadeDirective.propDecorators = {
    cover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['appImageFade',] }],
    onContentScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['ionScroll', ['$event'],] }]
};
ImageFadeDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appImageFade]'
    })
], ImageFadeDirective);



/***/ })

}]);
//# sourceMappingURL=pages-certificado-certificado-module.js.map