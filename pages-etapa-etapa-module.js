(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-etapa-etapa-module"],{

/***/ "E8xC":
/*!*********************************************!*\
  !*** ./src/app/pages/etapa/etapa.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n  color: #fff;\n}\nion-item p {\n  margin: 0;\n  font-size: 12px;\n  color: #949494;\n}\nion-list {\n  --ion-background-color: #fff;\n}\n.album-info {\n  color: #fff;\n  margin-left: 11px;\n}\n.album-info p {\n  font-weight: bold;\n}\n.image-box {\n  position: fixed;\n  z-index: 0;\n  padding-left: 10%;\n  padding-right: 10%;\n  padding-top: 25%;\n}\nion-row {\n  padding-top: 58vh;\n}\nion-content {\n  font-family: \"Poppins\", sans-serif !important;\n  color: #000;\n  --background: linear-gradient(var(--custombg) 200px, #fff 200px);\n}\n.main {\n  z-index: 10;\n  /*   background: linear-gradient(var(--custombg) 30%, #fff 40%); */\n  min-height: 800px;\n}\nion-label {\n  font-size: 14px !important;\n  color: var(--black-400) !important;\n}\n.button-01 {\n  text-transform: capitalize;\n  --background: #fff;\n  color: var(--main-color);\n  --border-radius: 12px;\n  font-size: 11px;\n  display: inline-block;\n  margin: 5px;\n  padding: 0 2px !important;\n}\n.button-02 {\n  text-transform: capitalize;\n  --background: var(--main-color);\n  color: #fff;\n  --border-radius: 12px;\n  font-size: 11px;\n  display: inline-block;\n  margin: 5px;\n  padding: 0 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxldGFwYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ047QUFHRTtFQUNFLDRCQUFBO0FBQUo7QUFLRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUZKO0FBSUk7RUFDRSxpQkFBQTtBQUZOO0FBTUU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUU7RUFDRSxpQkFBQTtBQUhKO0FBTUU7RUFDRSw2Q0FBQTtFQUNBLFdBQUE7RUFDQSxnRUFBQTtBQUhKO0FBTUU7RUFDRSxXQUFBO0VBQ0Esa0VBQUE7RUFFQSxpQkFBQTtBQUpKO0FBT0U7RUFDRSwwQkFBQTtFQUNBLGtDQUFBO0FBSko7QUFPRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSko7QUFRRTtFQUNFLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFMSiIsImZpbGUiOiJldGFwYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAjOTQ5NDk0O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24tbGlzdCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAuYWxidW0taW5mbyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG4gIFxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaW1hZ2UtYm94IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyNSU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1yb3cge1xyXG4gICAgcGFkZGluZy10b3A6IDU4dmg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tY3VzdG9tYmcpIDIwMHB4LCAjZmZmIDIwMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgLm1haW4ge1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICAvKiAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1jdXN0b21iZykgMzAlLCAjZmZmIDQwJSk7ICovXHJcbiAgXHJcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrLTQwMCkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbi0wMSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogMCAycHggIWltcG9ydGFudDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbi0wMiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogMCAycHggIWltcG9ydGFudDtcclxuICBcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "OHkR":
/*!*********************************************!*\
  !*** ./src/app/pages/etapa/etapa.module.ts ***!
  \*********************************************/
/*! exports provided: EtapaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtapaPageModule", function() { return EtapaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _etapa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./etapa-routing.module */ "iYMw");
/* harmony import */ var _etapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./etapa.page */ "od4C");







let EtapaPageModule = class EtapaPageModule {
};
EtapaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _etapa_routing_module__WEBPACK_IMPORTED_MODULE_5__["EtapaPageRoutingModule"]
        ],
        declarations: [_etapa_page__WEBPACK_IMPORTED_MODULE_6__["EtapaPage"]]
    })
], EtapaPageModule);



/***/ }),

/***/ "dbQ8":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/etapa/etapa.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\n</ion-content>");

/***/ }),

/***/ "iYMw":
/*!*****************************************************!*\
  !*** ./src/app/pages/etapa/etapa-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EtapaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtapaPageRoutingModule", function() { return EtapaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _etapa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./etapa.page */ "od4C");




const routes = [
    {
        path: '',
        component: _etapa_page__WEBPACK_IMPORTED_MODULE_3__["EtapaPage"]
    }
];
let EtapaPageRoutingModule = class EtapaPageRoutingModule {
};
EtapaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EtapaPageRoutingModule);



/***/ }),

/***/ "od4C":
/*!*******************************************!*\
  !*** ./src/app/pages/etapa/etapa.page.ts ***!
  \*******************************************/
/*! exports provided: EtapaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtapaPage", function() { return EtapaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_etapa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./etapa.page.html */ "dbQ8");
/* harmony import */ var _etapa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./etapa.page.scss */ "E8xC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let EtapaPage = class EtapaPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
EtapaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EtapaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-etapa',
        template: _raw_loader_etapa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_etapa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EtapaPage);



/***/ })

}]);
//# sourceMappingURL=pages-etapa-etapa-module.js.map