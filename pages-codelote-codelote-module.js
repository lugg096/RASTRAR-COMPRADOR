(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-codelote-codelote-module"],{

/***/ "JaTT":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/codelote/codelote.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div style=\"position: relative;text-align: center;margin-top: 50%;\">\n    <ion-spinner name=\"lines-small\" style=\"width: 100px;\n  height: 100px;\n  transform: translateY(5px);\n  animation-duration: 1400ms;\n  color: #484848;\"></ion-spinner>\n    <p style=\"color: rgb(129, 129, 129);font-size: 16px;\">Verificando...</p>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "bSrb":
/*!***************************************************!*\
  !*** ./src/app/pages/codelote/codelote.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2RlbG90ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "dCQ6":
/*!***************************************************!*\
  !*** ./src/app/pages/codelote/codelote.module.ts ***!
  \***************************************************/
/*! exports provided: CodelotePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodelotePageModule", function() { return CodelotePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _codelote_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./codelote-routing.module */ "pokM");
/* harmony import */ var _codelote_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./codelote.page */ "nI/S");







let CodelotePageModule = class CodelotePageModule {
};
CodelotePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _codelote_routing_module__WEBPACK_IMPORTED_MODULE_5__["CodelotePageRoutingModule"]
        ],
        declarations: [_codelote_page__WEBPACK_IMPORTED_MODULE_6__["CodelotePage"]]
    })
], CodelotePageModule);



/***/ }),

/***/ "nI/S":
/*!*************************************************!*\
  !*** ./src/app/pages/codelote/codelote.page.ts ***!
  \*************************************************/
/*! exports provided: CodelotePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodelotePage", function() { return CodelotePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_codelote_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./codelote.page.html */ "JaTT");
/* harmony import */ var _codelote_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codelote.page.scss */ "bSrb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/apiMongo.service */ "GtMO");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage.service */ "n90K");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");









let CodelotePage = class CodelotePage {
    constructor(_apiMongo, _fun, _storage, router, route) {
        this._apiMongo = _apiMongo;
        this._fun = _fun;
        this._storage = _storage;
        this.router = router;
        this.route = route;
        this.getCodLote();
    }
    ngOnInit() {
    }
    getCodLote() {
        this.route.queryParams.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('PARAMAS', params);
            if (params['id'] && params['i']) {
                console.log('CODE', params['id']);
                yield this._storage.setLocalStorage('CODE', { code: params['id'], index: params['i'] });
                this.router.navigate(['/home']);
            }
        }));
    }
    validCred() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                /*       let loading: any = await this._comp.presentLoading(); */
                let codeLote = yield this._storage.getLocalStorage('CODE');
                if (this._fun.isVarInvalid(codeLote)) {
                    yield this._fun.alertError('Código incorrecto');
                    return;
                }
                let filter = {
                    "$and": [
                        { "data.correlative1": { "$lte": Number(codeLote.index) } },
                        { "data.correlative2": { "$gte": Number(codeLote.index) } }
                    ]
                };
                const res = yield this._apiMongo.filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].COLLECTION.associateQr, codeLote.code, filter);
                console.log('res.result', res.result);
                if (this._fun.isEmpty(res.result)) {
                    yield this._fun.alertError('Código incorrecto');
                    return;
                }
                let trxid = res.result[0][codeLote.code][0].key;
                let dni = res.result[0][codeLote.code][0].data.indentUser;
                const res_cred = yield this._apiMongo.getkey(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].COLLECTION.dataQrUser, dni, trxid);
                console.log('res_cred', res_cred);
                if (this._fun.isEmpty(res_cred.result)) {
                    yield this._fun.alertError('Código incorrecto');
                    return;
                }
                let dataCred = res_cred.result[0][dni][0];
                resolve(dataCred);
            }));
        });
    }
};
CodelotePage.ctorParameters = () => [
    { type: src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_6__["ApiMongoService"] },
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_5__["Funciones"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CodelotePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-codelote',
        template: _raw_loader_codelote_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_codelote_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CodelotePage);



/***/ }),

/***/ "pokM":
/*!***********************************************************!*\
  !*** ./src/app/pages/codelote/codelote-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CodelotePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodelotePageRoutingModule", function() { return CodelotePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _codelote_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codelote.page */ "nI/S");




const routes = [
    {
        path: '',
        component: _codelote_page__WEBPACK_IMPORTED_MODULE_3__["CodelotePage"]
    }
];
let CodelotePageRoutingModule = class CodelotePageRoutingModule {
};
CodelotePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CodelotePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-codelote-codelote-module.js.map