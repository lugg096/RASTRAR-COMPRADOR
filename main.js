(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Recursos Luiggi\Ionic\Rastrar-Comprador\src\main.ts */"zUnb");


/***/ }),

/***/ "09qJ":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-cert/view-cert.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding: 0px 20px;padding-bottom: 50px; overflow-y: scroll;display: block;position: relative;\">\n  <ion-icon name=\"chevron-back-outline\" (click)=\"closeModal()\" style=\"font-size: 20px;\n  color: #db7078;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 20px;\">\n  </ion-icon>\n\n  <p style=\"color: #d36970e8;\n  text-align: center;\n  font-weight: 700;\n  font-size: 17px;\n  margin-top: 18px;\">Certificado digital</p>\n\n\n\n  <div *ngFor=\"let data of listCred;index as i\" style=\"\n    position: relative;\">\n\n\n    <div>\n\n      \n      <div style=\"text-align: center;text-align: -webkit-center;\">\n  \n              <img style=\"\n              max-width: 85%;\n              object-fit: cover;\n          border-radius: 5px;\n          box-shadow: 0 0px 5px rgb(213 213 213 / 53%);\" [src]=\"data.urlImg\" alt=\"\">\n      </div>\n\n      <div style=\"position: relative;\">\n  <!--       <p style=\"color: #5e5e5e;\n  font-weight: 800;\n  margin: 0;\n  margin-top: 20px;\n  font-size: 20px; padding-right: 60px;\">{{data.name}}\n        </p> -->\n        <p style=\"color: #5e5e5e;\n        font-weight: 600;\n        margin: 0;\n        margin-top: 20px;\n        font-size: 20px;\n        padding-right: 20px;\n        line-height: 1;\">{{data.name}}\n              </p>\n\n<!--         <div style=\"    right: 5px;\n  position: absolute;\n  top: -10px;\n  text-align: center;\">\n          <ion-icon name=\"heart\" style=\"transform: translateY(1.5px);\n    background: #d36970e8;\n    color: white;\n    padding: 8px;\n    font-size: 24px;\n    border-radius: 50px;\"></ion-icon>\n          <p style=\"margin: 0;\n    line-height: 0.8;\n    font-size: 12px;\n    font-weight: 800;\">120</p>\n        </div> -->\n\n        <p style=\"font-size: 14px;\n        color: #858585;margin-top: 10px;\">Certificado digital otorgado a {{data.data.document.subject.name}} por el supervisor {{data.data.document.issuer2}} el {{(data.data.document.iat)*1000 | date:'dd/MM/yyyy'}}</p>\n\n      </div>\n\n\n\n      <div style=\"text-align: left;position: relative;\n        margin-top: 10px;\">\n     <!--    <ion-button [href]=\"data.urlDoc\" target=\"_blank\" class=\"button-03\">\n          <ion-icon name=\"document-outline\" style=\"font-size: 20px;\"></ion-icon>Ver documento\n        </ion-button> -->\n\n        <div (click)=\"arrayBand[i]=!arrayBand[i];\" style=\"position: absolute;\n        right: 0px;\n        top: 10px;\n        font-size: 12px;\n        font-weight: 600;\n        color: #797979;\">\n          {{arrayBand[i]?'Mostrar menos':'Ver más'}} <ion-icon [name]=\"arrayBand[i]?'chevron-up':'chevron-down'\" style=\"    transform: translateY(5px);\n          font-size: 18px;\"></ion-icon>\n        </div>\n      </div>\n\n      <div *ngIf=\"arrayBand[i]\" style=\"padding-top: 10px\">\n        <p class=\"font-black-2\">Datos de credencial\n        </p>\n\n        <div class=\"row\">\n          <ion-item lines=\"none\" class=\"col-12\">\n            <ion-label>\n              <p>Nombre</p>\n              {{data.name}}\n            </ion-label>\n          </ion-item>\n\n          <ion-item lines=\"none\" class=\"col-12\">\n            <ion-label>\n              <p>Titular</p>\n\n\n              {{(data.data.document.subject.name | slice:0:3) +'***'+ (data.data.document.subject.name |\n              slice:(data.data.document.subject.name.length-3):(data.data.document.subject.name.length))\n              }}<br>\n              <p style=\"color: rgb(105, 105, 105); font-size: 12px;font-style: italic;\">\n                {{(data.data.document.subject.data.dids.address | slice:0:6)+' ...\n                '+(data.data.document.subject.data.dids.address | slice:38:42)}}\n              </p>\n            </ion-label>\n          </ion-item>\n        </div>\n\n        <div class=\"row\">\n          <ion-item lines=\"none\" class=\"col-12\">\n            <ion-label>\n              <p>Tipo</p>\n              {{data.data.document.documentType.value}}\n            </ion-label>\n          </ion-item>\n\n          <ion-item lines=\"none\" class=\"col-12\">\n            <ion-label>\n              <p>Emisor</p>\n              {{(data.data.document.issuer2 | slice:0:3) +'***'+ (data.data.document.issuer2 |\n              slice:(data.data.document.issuer2.length-3):(data.data.document.issuer2.length))\n              }}<br>\n              <p style=\"color: rgb(105, 105, 105); font-size: 12px;font-style: italic;\">\n                {{(data.data.data_cert.emisor_did | slice:0:6)+' ...\n                '+(data.data.data_cert.emisor_did | slice:38:42)}}\n              </p>\n            </ion-label>\n          </ion-item>\n        </div>\n\n        <div class=\"row\">\n          <ion-item lines=\"none\" class=\"col-12\">\n            <ion-label>\n              <p>Fecha de emisión</p>\n              {{(data.data.document.iat)*1000 | date:'dd/MM/yyyy'}}\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\" class=\"col-12\">\n            <ion-label>\n              <p>Fecha de caducidad</p>\n              {{(data.data.document.exp)*1000 | date:'dd/MM/yyyy'}}\n            </ion-label>\n          </ion-item>\n\n        </div>\n\n\n        <p class=\"font-black-2\">Datos de ingresados</p>\n\n        <ion-item lines=\"none\" *ngFor=\"let item of data.data.infoCert\" style=\"    margin-left: -10px;\">\n          <ion-label class=\"ion-text-wrap\">\n            <p>{{item.caption}}</p>\n            {{item.value}}\n          </ion-label>\n\n\n        </ion-item>\n\n        <ng-container *ngIf=\"data.data.imagesUrl\">\n          <p *ngIf=\"data.data.imagesUrl.length>0\" class=\"font-black-2\">Evidencias\n          </p>\n  \n          <div  *ngIf=\"data.data.imagesUrl.length>0\">\n            <ion-grid style=\"padding-bottom: 15%;\">\n              <ion-row style=\"margin: 3px;\">\n                <ion-col size=\"6\" class=\"content-img\" *ngFor=\"let p of data.data.imagesUrl; let i=index\"\n                  (click)=\"verFoto(endPoint + p)\">\n                  <div class=\"img\" [attr.id]=\"'object-img-'+i\">\n                    <img [src]=\"endPoint + p\">\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ng-container>\n     \n\n\n\n      </div>\n\n\n\n\n    </div>\n\n\n  </div>\n\n  <!-- \n    <p style=\"color: #0261c3;\n    font-size: 18px;\n    margin-left: 15px;\n    margin-top: 20px;\n    padding-right: 30px;\">{{dataProv.values[0].value}}</p> -->\n</div>");

/***/ }),

/***/ "3Djf":
/*!*****************************************!*\
  !*** ./src/app/compartido/funciones.ts ***!
  \*****************************************/
/*! exports provided: Funciones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Funciones", function() { return Funciones; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/alert/alert.component */ "QC9C");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/apiMongo.service */ "GtMO");


/* import { ContractsService } from '../services/contracts.service'; */





let Funciones = class Funciones {
    constructor(_apiMongo, _modal) {
        this._apiMongo = _apiMongo;
        this._modal = _modal;
        this.months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        this.configInput = {
            name: {
                long: 32
            }
        };
        this.validatorkey = _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose(
        /*  [Validators.pattern("^[^0-9][a-zA-Z0-9_]+$"), */
        [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[a-zA-Z_][a-zA-Z0-9_]+$"),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.configInput.name.long),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
    }
    toJson(string) {
        let data = JSON.parse(string);
        return JSON.parse(JSON.stringify(data));
    }
    /* ALERT */
    alert(type, buttonConfim, textTitle, subtitle, desablet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options = {
                path: '/assets/json/' + type + '.json',
                loop: true,
                autoplay: true
            };
            return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const modal = yield this._modal.create({
                    component: _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"],
                    cssClass: 'style-alert',
                    componentProps: {
                        type,
                        textTitle,
                        subtitle,
                        buttonConfim,
                        options,
                        desablet
                    }
                });
                modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    resolve(res.data);
                }));
                return yield modal.present();
            }));
        });
    }
    getTime(tms) {
        let milliseconds = Math.floor((tms % 1000) / 100);
        let seconds = Math.floor((tms / 1000) % 60);
        let minutes = Math.floor((tms / (1000 * 60)) % 60);
        let hours = Math.floor((tms / (1000 * 60 * 60)) % 24);
        /*  hours = (hours < 10) ? "0" + hours : hours;
         minutes = (minutes < 10) ? "0" + minutes : minutes;
         seconds = (seconds < 10) ? "0" + seconds : seconds; */
        hours = (hours > 1) ? hours + " horas" : (hours == 1 ? hours + " hora" : '');
        minutes = (minutes > 1) ? minutes + " minutos" : (minutes == 1 ? minutes + " minuto" : '');
        seconds = (seconds > 1) ? seconds + " segundos" : (seconds == 1 ? seconds + " segundo" : '');
        /*     seconds = (seconds < 10) ? "0" + seconds : seconds; */
        return { hours, minutes, seconds, milliseconds };
    }
    alertError(error, desablet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (desablet != true)
                desablet = false;
            let mensj = error;
            if (!this.isVarInvalid(error.message))
                mensj = error.message;
            yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.TYPE_ERROR, 'ok', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.ERROR_TITLE, mensj, desablet);
        });
    }
    timeStamp() {
        return new Date().getTime();
    }
    initSesion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.TYPE_ALERT, 'Iniciar sesión', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.ALERT_TITLE, 'Se requiere iniciar sesión para visualizar esta información');
        });
    }
    alertGen(btn, txt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.TYPE_ALERT, btn, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.ALERT_TITLE, txt);
        });
    }
    alertDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.TYPE_ALERT, 'Si, eliminar', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.ALERT_TITLE, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.ALERT_DELETE);
        });
    }
    alertSucc(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.TYPE_SUC, ' Ok ', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.ALERT_TITLE, message);
        });
    }
    isUndefined(data) {
        if (data == undefined)
            return true;
        return false;
    }
    isVarInvalid(data) {
        if (data == undefined || data == null || data == 'undefined' || data == 'null' || data == '')
            return true;
        return false;
    }
    isInvalidResApi(code) {
        if (code != 200 && code != '200')
            return true;
        return false;
    }
    isEmpty(...obj) {
        let isEmpty = true;
        for (let i = 0; i < obj.length; i++) {
            if (Array.isArray(obj[i])) {
                if (obj[i].length != 0)
                    isEmpty = false;
                break;
            }
            if (this.isVarInvalid((obj[i]))) {
                isEmpty = false;
                break;
            }
        }
        return isEmpty;
    }
    strToJson(str) {
        try {
            if (this.isVarInvalid(str))
                return {};
            else {
                return JSON.parse(str);
            }
        }
        catch (error) {
            this.alertError(error);
            return null;
        }
    }
    validJson(str) {
        try {
            if (this.isVarInvalid(str))
                return '';
            else {
                let valueJson = JSON.parse(str);
                return valueJson;
            }
        }
        catch (error) {
            this.alertError(error);
            return null;
        }
    }
    codeToenum(code) {
        let number = parseInt(code.replaceAll("C", ""));
        return number;
    }
    closeMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            }));
        });
    }
    sortJSON(arr, key, way) {
        return arr.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            if (typeof x === 'string' || x instanceof String)
                x = x.toLowerCase();
            if (typeof y === 'string' || y instanceof String)
                y = y.toLowerCase();
            if (way) {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }
            if (!way) {
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            }
        });
    }
    getParmas(key_table) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].COLLECTION.general, key_table, 'items');
            return res.result[0][key_table];
        });
    }
    patchValueJson(jsonEstruc, jsonData) {
        Object.keys(jsonEstruc).forEach(key => {
            jsonEstruc[key] = this.valueKeyJSON(jsonData, key);
        });
        return jsonEstruc;
    }
    valueKeyJSON(json, keyJson) {
        var value = null;
        Object.keys(json).forEach(key => {
            if (key == keyJson)
                value = json[key];
        });
        return value;
    }
    tmspToStr(timestamp) {
        var a = new Date(timestamp);
        var year = a.getFullYear();
        var month = this.months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }
    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    makeDigit(length) {
        var result = '';
        var characters = '0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
};
Funciones.ctorParameters = () => [
    { type: _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_6__["ApiMongoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
Funciones = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Funciones);



/***/ }),

/***/ "3WnV":
/*!***************************************************************!*\
  !*** ./src/app/components/view-cert/view-cert.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  text-align: center;\n  color: #F7F8FB;\n  font-size: 15px;\n}\n\n.icon-nav-arrow {\n  color: #F7F8FB;\n  font-size: 25px;\n  padding: 15px 20px;\n}\n\nion-item p {\n  font-size: 11px !important;\n}\n\nion-item ion-label {\n  font-size: 14px !important;\n  color: var(--black-400);\n}\n\n.status {\n  font-size: 10px;\n  padding: 6px 8px;\n  border-radius: 10px;\n  font-weight: 500;\n}\n\n.pending {\n  background: #b1b1b1;\n  /*  background: #1a75b1; */\n  color: #ffffff;\n}\n\n.enabled {\n  background: #29c79f;\n  color: #ffffff;\n}\n\n.inProcess {\n  background: #29c79f;\n  color: #ffffff;\n  padding-right: 20px;\n  cursor: pointer;\n}\n\n.disabled {\n  background: #d66855;\n  color: #ffffff;\n}\n\n.info {\n  background: #1a75b1;\n  color: #ffffff;\n}\n\n.true {\n  background: #1ab14c;\n  color: #ffffff;\n}\n\n.false {\n  background: #b1381a;\n  color: #ffffff;\n}\n\n.font-black-2 {\n  margin: 10px 5px;\n  font-size: 15px;\n  color: var(--black-400);\n  font-weight: 700;\n  margin-bottom: 0;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -25px;\n  margin-left: -25px;\n}\n\n.button-03 {\n  text-transform: initial;\n  --background: #0059b5d6;\n  color: #fff;\n  --border-radius: 20px;\n  font-size: 10px;\n  display: inline-block;\n  padding: 0 2px !important;\n  font-weight: 600;\n  margin: 0;\n}\n\n.button-03 ion-icon {\n  font-size: 16px;\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3LWNlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBSUk7RUFDRSwwQkFBQTtBQUROOztBQUdJO0VBQ0UsMEJBQUE7RUFDQSx1QkFBQTtBQUROOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7RUFDRCwwQkFBQTtFQUNDLGNBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTEY7O0FBUUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVNBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFORjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFORjs7QUFRRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQU5KIiwiZmlsZSI6InZpZXctY2VydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0Y3RjhGQjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIC5pY29uLW5hdi1hcnJvdyB7XHJcbiAgICBjb2xvcjogI0Y3RjhGQjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICB9XHJcbiAgXHJcblxyXG4gIGlvbi1pdGVte1xyXG4gICAgcHtcclxuICAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogdmFyKC0tYmxhY2stNDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgXHJcbi5zdGF0dXMge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnBlbmRpbmcge1xyXG4gIGJhY2tncm91bmQ6ICNiMWIxYjE7XHJcbiAvKiAgYmFja2dyb3VuZDogIzFhNzViMTsgKi9cclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmVuYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICMyOWM3OWY7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5pblByb2Nlc3N7XHJcbiAgYmFja2dyb3VuZDogIzI5Yzc5ZjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjZDY2ODU1O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uaW5mb3tcclxuICBiYWNrZ3JvdW5kOiAjMWE3NWIxO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5cclxuLnRydWUge1xyXG4gIGJhY2tncm91bmQ6ICMxYWIxNGM7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5mYWxzZSB7XHJcbiAgYmFja2dyb3VuZDogI2IxMzgxYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmZvbnQtYmxhY2stMiB7XHJcbiAgbWFyZ2luOiAxMHB4IDVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrLTQwMCk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tcmlnaHQ6IC0yNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxufVxyXG5cclxuLmJ1dHRvbi0wMyB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1OWI1ZDY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCAycHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ "5wh2":
/*!*************************************************************!*\
  !*** ./src/app/components/conctact/conctact.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25jdGFjdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "6Wfc":
/*!***************************************************************!*\
  !*** ./src/app/components/multimedia/multimedia.component.ts ***!
  \***************************************************************/
/*! exports provided: MultimediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaComponent", function() { return MultimediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_multimedia_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./multimedia.component.html */ "aRxy");
/* harmony import */ var _multimedia_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multimedia.component.scss */ "WlQa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apiMongo.service */ "GtMO");
/* harmony import */ var _view_multimedia_view_multimedia_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view-multimedia/view-multimedia.component */ "t8jK");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _view_cert_view_cert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view-cert/view-cert.component */ "770w");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/data-service.service */ "njzu");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_ionic_components_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/ionic-components.service */ "L8EE");












let MultimediaComponent = class MultimediaComponent {
    constructor(_comp, _sanitizer, _data, _apiMongo, _modal) {
        this._comp = _comp;
        this._sanitizer = _sanitizer;
        this._data = _data;
        this._apiMongo = _apiMongo;
        this._modal = _modal;
        this.credSub = {
            portada: '',
            producers: [],
            sections: []
        };
        this.producer = [];
        this.multimedia = [];
        this.dataContact = {
            "businessName": {
                "width_bootstrap": "",
                "name": "",
                "type": "",
                "code": "",
                "value": ""
            },
            "logoUrl": {
                "width_bootstrap": "",
                "name": "",
                "type": "",
                "code": "",
                "value": ""
            }
        };
    }
    getVideoIframe(url) {
        var video, results;
        if (url === null) {
            return '';
        }
        results = url.match('[\\?&]v=([^&#]*)');
        video = (results === null) ? url : results[1];
        return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video + '?autoplay=1&mute=1');
    }
    ngOnInit() {
        this._data.getData().subscribe(res => {
            if (res) {
                this.data = res;
                this.initData();
            }
        });
    }
    initData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.credSub = this.data.data.dataCred.credential.verifiableCredential[0].credentialSubject;
            this.producer = this.credSub.producers;
            console.log('this.producer', this.producer);
            console.log('credSub', this.credSub);
            for (let index = 0; index < this.credSub.sections.length; index++) {
                let sec = this.credSub.sections[index];
                let jsonData = {};
                if (sec.section.code == 'contact') {
                    for (let index = 0; index < sec.fields.length; index++) {
                        const field = sec.fields[index];
                        jsonData[field.code] = field;
                        if (index == (sec.fields.length - 1)) {
                            this.dataContact = jsonData;
                            console.log('this.dataContact', this.dataContact);
                        }
                    }
                }
                for (let x = 0; x < sec.fields.length; x++) {
                    let field = sec.fields[x];
                    if (field.type == 'imageselect' && field.value.files.length > 0) {
                        console.log('field', field);
                        this.multimedia.push(field);
                    }
                    if (field.type == 'urlYouTube') {
                        console.log('field urlYouTube', field);
                        this.multimedia.push(field);
                    }
                }
                if (index == (this.credSub.sections.length - 1))
                    console.log('this.multimedia', this.multimedia);
            }
            this.producer.forEach(prod => {
                prod.certs.forEach(cert => {
                    let _d = {
                        name: cert.title,
                        lacchainId: cert.lacchainId,
                        trxid: cert.trxid,
                        imgfile: cert.imgfile,
                        titular: prod.name
                    };
                    this.multimedia.push(_d);
                });
                console.log('prod', this.multimedia);
            });
        });
    }
    viewCert(dataProv) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                cssClass: 'style-demo',
                component: _view_cert_view_cert_component__WEBPACK_IMPORTED_MODULE_8__["ViewCertComponent"],
                componentProps: {
                    dataProv
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('res', res);
            }));
            yield modal.present();
        });
    }
    view(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('data', data);
            if (data.trxid) {
                let loading = yield this._comp.presentLoading();
                let res_cert = yield this._apiMongo
                    .filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].COLLECTION.document, src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].TABLE_SIS.external, {
                    "data.data_cert.tx.trxid": data.trxid
                });
                console.log('res_cert', res_cert.result[0].external[0]);
                loading.dismiss();
                this.viewCert(res_cert.result[0].external[0]);
                return;
            }
            const modal = yield this._modal.create({
                cssClass: 'style-demo',
                component: _view_multimedia_view_multimedia_component__WEBPACK_IMPORTED_MODULE_6__["ViewMultimediaComponent"],
                componentProps: {
                    data
                    /*   titleReg: 'objective_cert',
                      listSelect: this.registroForm.controls[field.code].value */
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('res', res);
                /*       if (this._fun.isVarInvalid(res.data)) return;
                      this.imgPortada = res.data.img; */
            }));
            yield modal.present();
        });
    }
};
MultimediaComponent.ctorParameters = () => [
    { type: src_app_services_ionic_components_service__WEBPACK_IMPORTED_MODULE_11__["IonicComponentsService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] },
    { type: src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] },
    { type: src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_5__["ApiMongoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
MultimediaComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MultimediaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-multimedia',
        template: _raw_loader_multimedia_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_multimedia_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MultimediaComponent);



/***/ }),

/***/ "770w":
/*!*************************************************************!*\
  !*** ./src/app/components/view-cert/view-cert.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewCertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCertComponent", function() { return ViewCertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_cert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-cert.component.html */ "09qJ");
/* harmony import */ var _view_cert_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-cert.component.scss */ "3WnV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");





/* import { CertComponent } from '../cert/cert.component'; */

/* import { VerFotoComponent } from '../ver-foto/ver-foto.component'; */

let ViewCertComponent = class ViewCertComponent {
    constructor(_fun, _modal) {
        this._fun = _fun;
        this._modal = _modal;
        this.listCred = [];
        this.endPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url.substr(0, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url.length - 1);
        this.arrayBand = [];
    }
    ngOnInit() {
        this.listCred = [this.dataProv];
        console.log('this.listCred', this.listCred);
        for (let index = 0; index < this.listCred.length; index++) {
            this.arrayBand.push(false);
            const element = this.listCred[index];
            this.endPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url.substr(0, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url.length - 1);
            this.listCred[index].urlImg = this.endPoint + this.listCred[index].data.document.imgfile_anonymous.url;
            this.listCred[index].urlDoc = this.endPoint + this.listCred[index].data.document.datafile_anonymous.url;
        }
        this.infoCertInit();
    }
    verFoto(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*   const modal = await this._modal.create({
                component: VerFotoComponent,
                componentProps: {
                  img: path
                }
              });
              modal.onDidDismiss().then(async (res: any) => {
              });
              return await modal.present(); */
        });
    }
    infoCertInit() {
        for (let index0 = 0; index0 < this.listCred.length; index0++) {
            this.listCred[index0].data.infoCert = [];
            let data = this.listCred[index0].data.data_cert.data;
            let objs = Object.keys(data);
            for (let index = 0; index < objs.length; index++) {
                let key = objs[index];
                if (key != 'objective_cert' && key != 'code_almc' && key != 'emisor_name'
                    && key != 'emisor_did' && key != 'emisor_role' && key != 'titular_name'
                    && key != 'name_titular' && key != 'adrx_titular' && key != 'f_emision'
                    && key != 'f_vencimiento' && data[key] != "") {
                    let caption = this.captionValue(key, this.listCred[index0].data.data_cert.dataScreen);
                    let value = data[key];
                    let cadena = '';
                    if (data[key].value) {
                        cadena = data[key].value;
                    }
                    else
                        cadena = data[key];
                    this.listCred[index0].data.infoCert.push({ caption, value: cadena });
                }
            }
        }
    }
    captionValue(key, estruct) {
        let a;
        let b = estruct;
        if (typeof estruct === 'string' || estruct instanceof String) {
            a = JSON.parse(b);
        }
        else {
            a = estruct;
        }
        let objs = Object.keys(a);
        let keyvalue = objs.filter(a => a == key)[0];
        return a[keyvalue].caption;
    }
    /*   async credential(item) {
        const modal = await this._modal.create({
          cssClass: 'style-cred',
          component: CertComponent,
          componentProps: {
            credential: item
          }
        });
    
        modal.onDidDismiss().then(async (res: any) => {
          
        });
        return await modal.present();
      } */
    closeModal() {
        this._modal.dismiss();
    }
    confirm() {
        this._modal.dismiss({ confirm: true });
    }
};
ViewCertComponent.ctorParameters = () => [
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_6__["Funciones"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ViewCertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-cert',
        template: _raw_loader_view_cert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_cert_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewCertComponent);



/***/ }),

/***/ "9UZi":
/*!***********************************************************!*\
  !*** ./src/app/components/ver-foto/ver-foto.component.ts ***!
  \***********************************************************/
/*! exports provided: VerFotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerFotoComponent", function() { return VerFotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ver_foto_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ver-foto.component.html */ "JCOg");
/* harmony import */ var _ver_foto_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ver-foto.component.scss */ "dbo8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let VerFotoComponent = class VerFotoComponent {
    constructor(_modal) {
        this._modal = _modal;
        this.onlyView = false;
        this.sliderOpts = {
            preventInteractionOnTransition: true,
            /*     zoom: {
                  maxRatio: 5
                }, */
            allowSlideNext: false,
            allowSlidePrev: false,
        };
    }
    ngOnInit() { }
    closeModal(action) {
        this._modal.dismiss({
            delete: action
        });
    }
    zoom(zoomIn) {
        let zoom = this.slider.nativeElement.swiper.zoom;
        if (zoomIn)
            zoom.in();
        else
            zoom.out();
    }
};
VerFotoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
VerFotoComponent.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slider', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }]
};
VerFotoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ver-foto',
        template: _raw_loader_ver_foto_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ver_foto_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerFotoComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    url: 'http://18.230.79.100:8082/',
    url2: 'http://18.230.79.100:8082',
    url_STAMP: 'http://18.230.79.100:8085/',
    node: 'http://34.229.8.55:4545',
    FOLDER_CERT: 'CERT_RASTRAR',
    KEY_COOPERATIVA: '0x384a6b9573340CBBf54493111023B47925b3E902',
    CREDENTIAL_APP: {
        client_id: "0xAeF5F9e6e63F711310e6122Ca12DD85d36910D1D",
        api_key: "0xf4ed4213624cadd343980c55da54257b10eb7d0f47255516868f58521553eb0f00977161b148bbcdca611a94f28e9c615cd1f762a1ca27bd7c32572dcb65400f1c",
        secret_shib: "0xd208de0792d2d7e6c96078c9fdc5f323bb9b5d11",
        domain_key: "0xf6ceb38bf0cab7d4a31bc3f4dd64814daf971c1653790487256313d761e50d13",
        contract: "0x8F6492b89137b79Ced4342D49F675Dc550B41AE5" //ContractVC 
    },
    /* ESTADOS DE CERTIFICADO */
    STATUS_REG: {
        DISABLED: 0,
        SAVED: 1,
        SIGNED: 2,
        UPLOADED: 3
    },
    /* TABLAS EN BD SQLITE  */
    TABLE: {
        USER: 'user',
        CERT: 'certificado',
        IMG: 'images',
        SCREEN: 'screen'
    },
    MSG: {
        TYPE_SUC: 'success',
        TYPE_ALERT: 'alert',
        TYPE_UPLOAD: 'upload',
        TYPE_SIGN: 'sign',
        TYPE_ERROR: 'danger',
        SUC_UPLOAD: 'Certificación completada correctamente.',
        SUC_SAVE: 'La información fue guardada correctamente.',
        SUC_UPDATE: 'La información fue actualizada correctamente.',
        ALERT_SAVE: 'Esta seguro en guardar información de certificado?',
        ALERT_UPDATE: 'Esta seguro en actualizar información de certificado?',
        ALERT_DELETE: 'Esta seguro de revocar esta identidad?',
        ALERT_EXIT_FORM: 'Esta seguro de salir del formulario sin guardar información?',
        ALERT_UPLOAD: 'Se usarán datos para esta acción. Esta seguro de continuar?',
        ERROR_SERV: 'Tuvimos problemas, vuelva a intentar por favor.',
        ERROR_GENERAL: 'Tuvimos problemas, vuelva a intentar por favor.',
        SUC_TITLE: 'Genial!',
        ALERT_TITLE: 'Alerta!',
        ERROR_TITLE: 'Error!',
    },
    /* Colecciones del sistema */
    COLLECTION: {
        dataQrUser: 'dataQrUser',
        associateQr: 'associateQr',
        tx: 'tx',
        party: 'party',
        general: 'general',
        object: 'object',
        document: 'document',
        trace: 'trace',
        traceDetail: 'traceDetail',
        monitor: 'monitor',
        merma: 'merma',
        credential: 'credential'
    },
    /* Tablas del sistema */
    TABLE_SIS: {
        _config: '_config',
        role: 'role',
        tables: 'tables',
        type_user: 'type_user',
        type_doc_ident: 'type_doc_identity',
        g_clie: 'g_clie',
        g_empl: 'g_empl',
        g_prod: 'g_prod',
        employee: 'employee',
        producer: 'producer',
        customer: 'customer',
        action: 'action',
        orden: 'order',
        type_button: 'type_button',
        type_callToAction: 'type_callToAction',
        type_documents: 'type_documents',
        type_input: 'type_input',
        type_field: 'type_field',
        type_field_cert: 'type_field_cert',
        type_certificate: 'type_certificate',
        external: 'external',
        register: 'register',
        type_visibility: 'type_visibility',
        class_task: 'class_task',
        type_cert_register: 'type_cert_register',
        q_unid: 'unid_measure',
        type_product: 'type_product',
        type_via: 'type_via',
        country_source: 'country_source',
        country_target: 'country_target',
        airport: 'airport',
        seaports: 'seaports',
        type_quality: 'type_quality',
        field: 'field',
        task: 'task',
        process: 'process',
        screen: 'screen',
        report: 'report',
        traceDetail: 'traceDetail',
        DIDRegistry: 'DIDRegistry',
        VCRegistry: 'VCRegistry',
    },
};


/***/ }),

/***/ "CKgm":
/*!************************************!*\
  !*** ./src/app/pipes/adrx.pipe.ts ***!
  \************************************/
/*! exports provided: AdrxPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdrxPipe", function() { return AdrxPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AdrxPipe = class AdrxPipe {
    transform(text, acount) {
        return text.substr(0, acount) + ' ... ' + text.substr(text.length - acount, text.length);
    }
};
AdrxPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'adrx'
    })
], AdrxPipe);



/***/ }),

/***/ "GFcb":
/*!*******************************************************!*\
  !*** ./src/app/components/alert/alert.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".svg {\n  /*     padding-top: 40%; */\n  margin: auto;\n  width: 100px;\n  margin: 20px auto;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLDBCQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Zne1xyXG4vKiAgICAgcGFkZGluZy10b3A6IDQwJTsgKi9cclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "GtMO":
/*!**********************************************!*\
  !*** ./src/app/services/apiMongo.service.ts ***!
  \**********************************************/
/*! exports provided: ApiMongoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiMongoService", function() { return ApiMongoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let ApiMongoService = class ApiMongoService {
    constructor(_http) {
        this._http = _http;
        this.dominio = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
    }
    delete(collection, table, key) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}`);
        return this._http.delete(URL).toPromise();
    }
    getkey(collection, table, key) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}`);
        console.log('URL', URL);
        return this._http.get(URL).toPromise();
    }
    changeStatus(collection, table, key, status) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}?status=${status}`);
        return this._http.post(URL, {}).toPromise();
    }
    create(collection, table, key, body, upsert) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}/?upsert=${upsert}`);
        return this._http.post(URL, body).toPromise();
    }
    get(collection, table, item) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${item}`);
        return this._http.get(URL).toPromise();
    }
    getTrace(key_trace) {
        const URL = this.dominio.concat(`process/${key_trace}`);
        return this._http.get(URL).toPromise();
    }
    filter(collection, table, filter) {
        const URL = this.dominio.concat(`db/${collection}/${table}/filter`);
        console.log('URL', URL);
        console.log('filter', filter);
        return this._http.post(URL, filter).toPromise();
    }
    _get(collection, table, item) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${item}`);
        return this._http.get(URL);
    }
    _create(collection, table, key, body, upsert) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}/?upsert=${upsert}`);
        return this._http.post(URL, body);
    }
};
ApiMongoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiMongoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiMongoService);



/***/ }),

/***/ "HdGf":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/infolot/infolot.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div style=\"position: absolute;\n        top: 20px;\n        right: 0;z-index: 2;\">\n\n    <!--   <a href=\"javascript:void(0)\" (click)=\"sesion()\" class=\"btn-5\" style=\"\n         margin-top: 8px;\n    letter-spacing: 1.5px;\n    padding: 12px 15px;\n    display: inline-block;\n    font-size: 10px;\n    border-radius: 20px 0 0 20px;\">\n      <ion-icon name=\"person-circle-outline\" style=\"    font-size: 20px;\n        margin: 0;\n        padding: 0;\n        margin-bottom: -6px;\n        margin-right: 5px;\"></ion-icon>{{user=='INVITADO'?'Iniciar sesión':'Cerrar sesión'}}\n    </a> -->\n\n  </div>\n\n  <div style=\"min-height: 200px;    padding-bottom: 40px;position: relative;\">\n\n    <img [src]=\"'../../../../assets/images/'+dataBasic.portada\" alt=\"\" style=\"width: 100%;\">\n\n    <!--  <video #video preload=\"auto\" playsinline class=\"video-c\" loop muted autoplay oncanplay=\"this.play()\"\n      onloadedmetadata=\"this.muted = true\">\n      <source src=\"../../assets/videos/junto.mp4\" type=\"video/mp4\">\n    </video>\n -->\n    <!--    <video style=\"width: 100%;\" [autoplay]=\"true\" loop=\"true\">\n      <source src=\"../../assets/videos/junto.mp4\" type=\"video/mp4\">\n    </video> -->\n\n    <img src=\"../../../../assets/images/logo-white.svg\" style=\"    width: 100px;\n    margin: 10px;\n    position: absolute;\n    left: 0;\n    z-index: 25000; opacity: 0.95;filter: drop-shadow(1px 1px 1px rgb(132, 132, 132));\" alt=\"\">\n    <!--  <img src=\"../../assets/images/fondo4.jpg\" alt=\"\" style=\"min-height: 185px;\"> -->\n    <!--  <div style=\"background: linear-gradient( \n      179deg\n       , #1c1c2454 10%, rgb(60 61 68 / 18%) 100%);\n          position: absolute;\n          top: 0;\n          width: 100%;\n          height: 185px;\">\n    </div> -->\n  </div>\n\n  <div>\n    <div class=\"row-div red\">\n      <div>\n        <svg id=\"\" preserveAspectRatio=\"xMidYMax meet\" class=\"svg-separator sep1\" viewBox=\"0 0 1600 100\" style=\"\"\n          data-height=\"100\">\n          <path class=\"\" style=\"opacity: 1;fill: #9c9798;\" d=\"M1040,56c0.5,0,1,0,1.6,0c-16.6-8.9-36.4-15.7-66.4-15.7c-56,0-76.8,23.7-106.9,41C881.1,89.3,895.6,96,920,96\n    C979.5,96,980,56,1040,56z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #9c9798;\" d=\"M1699.8,96l0,10H1946l-0.3-6.9c0,0,0,0-88,0s-88.6-58.8-176.5-58.8c-51.4,0-73,20.1-99.6,36.8\n    c14.5,9.6,29.6,18.9,58.4,18.9C1699.8,96,1699.8,96,1699.8,96z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #9c9798;\" d=\"M1400,96c19.5,0,32.7-4.3,43.7-10c-35.2-17.3-54.1-45.7-115.5-45.7c-32.3,0-52.8,7.9-70.2,17.8\n    c6.4-1.3,13.6-2.1,22-2.1C1340.1,56,1340.3,96,1400,96z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #9c9798;\" d=\"M320,56c6.6,0,12.4,0.5,17.7,1.3c-17-9.6-37.3-17-68.5-17c-60.4,0-79.5,27.8-114,45.2\n    c11.2,6,24.6,10.5,44.8,10.5C260,96,259.9,56,320,56z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #9c9798;\" d=\"M680,96c23.7,0,38.1-6.3,50.5-13.9C699.6,64.8,679,40.3,622.2,40.3c-30,0-49.8,6.8-66.3,15.8\n    c1.3,0,2.7-0.1,4.1-0.1C619.7,56,620.2,96,680,96z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #9c9798;\" d=\"M-40,95.6c28.3,0,43.3-8.7,57.4-18C-9.6,60.8-31,40.2-83.2,40.2c-14.3,0-26.3,1.6-36.8,4.2V106h60V96L-40,95.6\n    z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\" d=\"M504,73.4c-2.6-0.8-5.7-1.4-9.6-1.4c-19.4,0-19.6,13-39,13c-19.4,0-19.5-13-39-13c-14,0-18,6.7-26.3,10.4\n    C402.4,89.9,416.7,96,440,96C472.5,96,487.5,84.2,504,73.4z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\" d=\"M1205.4,85c-0.2,0-0.4,0-0.6,0c-19.5,0-19.5-13-39-13s-19.4,12.9-39,12.9c0,0-5.9,0-12.3,0.1\n    c11.4,6.3,24.9,11,45.5,11C1180.6,96,1194.1,91.2,1205.4,85z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\" d=\"M1447.4,83.9c-2.4,0.7-5.2,1.1-8.6,1.1c-19.3,0-19.6-13-39-13s-19.6,13-39,13c-3,0-5.5-0.3-7.7-0.8\n    c11.6,6.6,25.4,11.8,46.9,11.8C1421.8,96,1435.7,90.7,1447.4,83.9z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\" d=\"M985.8,72c-17.6,0.8-18.3,13-37,13c-19.4,0-19.5-13-39-13c-18.2,0-19.6,11.4-35.5,12.8\n    c11.4,6.3,25,11.2,45.7,11.2C953.7,96,968.5,83.2,985.8,72z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\" d=\"M743.8,73.5c-10.3,3.4-13.6,11.5-29,11.5c-19.4,0-19.5-13-39-13s-19.5,13-39,13c-0.9,0-1.7,0-2.5-0.1\n    c11.4,6.3,25,11.1,45.7,11.1C712.4,96,727.3,84.2,743.8,73.5z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\" d=\"M265.5,72.3c-1.5-0.2-3.2-0.3-5.1-0.3c-19.4,0-19.6,13-39,13c-19.4,0-19.6-13-39-13\n    c-15.9,0-18.9,8.7-30.1,11.9C164.1,90.6,178,96,200,96C233.7,96,248.4,83.4,265.5,72.3z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\" d=\"M1692.3,96V85c0,0,0,0-19.5,0s-19.6-13-39-13s-19.6,13-39,13c-0.1,0-0.2,0-0.4,0c11.4,6.2,24.9,11,45.6,11\n    C1669.9,96,1684.8,96,1692.3,96z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\"\n            d=\"M25.5,72C6,72,6.1,84.9-13.5,84.9L-20,85v8.9C0.7,90.1,12.6,80.6,25.9,72C25.8,72,25.7,72,25.5,72z\"></path>\n          <path class=\"\" style=\"fill: #f8f8f8;\" d=\"M-40,95.6C20.3,95.6,20.1,56,80,56s60,40,120,40s59.9-40,120-40s60.3,40,120,40s60.3-40,120-40\n    s60.2,40,120,40s60.1-40,120-40s60.5,40,120,40s60-40,120-40s60.4,40,120,40s59.9-40,120-40s60.3,40,120,40s60.2-40,120-40\n    s60.2,40,120,40s59.8,0,59.8,0l0.2,143H-60V96L-40,95.6z\"></path>\n        </svg>\n      </div>\n    </div>\n  </div>\n\n\n  <div style=\"width: 100%;\n     padding-right: 12px;\npadding-left: 12px;\n  margin-right: 10px;\n  margin-left: auto;\n  padding-bottom: 120px;    margin-top: 60px;\">\n    <section>\n      <h3 style=\"    margin-left: 12px;font-size: 23px;\n      line-height: 30px;color:#141414;font-weight: 700;\">\n        {{dataBasic.objective_cert}}\n      </h3>\n    </section>\n\n    <div class=\"row\">\n      <div class=\"col-6 mb-2\">\n        <span class=\"inp1\">Cantidad de lote</span> <br>\n        <span class=\"inpValue\">\n          {{dataBasic.amount}} Kilos\n          <!--   {{trace.credentialSubject.header.attributes.quantity}}\n          {{trace.credentialSubject.header.attributes.unit}} -->\n        </span>\n\n      </div>\n      <div class=\"col-6 mb-2\">\n        <span class=\"inp1\">Fecha de vencimiento</span> <br>\n        <span class=\"inpValue\" style=\"text-transform: capitalize;\">\n          {{dataBasic.f_vencimineto*1000 | date:' d MMM y'}}\n        </span>\n\n      </div>\n\n      <div class=\"col-6 mb-2\">\n        <span class=\"inp1\">Origen</span> <br>\n        <span class=\"inpValue\">\n          <!--  <img\n            [src]=\"'https://lipis.github.io/flag-icon-css/flags/4x3/'+trace.credentialSubject.header.attributes.country_source_key+'.svg'\"\n            style=\"height: 15px;transform: translateY(-1px);\" class=\"mx-1\" alt=\"\"> -->\n          <!--  {{trace.credentialSubject.header.attributes.country_source}} -->\n          {{dataBasic.origin}}\n        </span>\n\n      </div>\n      <div class=\"col-6 mb-2\">\n        <span class=\"inp1\">Destino</span> <br>\n        <span class=\"inpValue\">\n          <!--  <img\n            [src]=\"'https://lipis.github.io/flag-icon-css/flags/4x3/'+trace.credentialSubject.header.attributes.country_target_key+'.svg'\"\n            style=\"height: 15px;transform: translateY(-1px);\" class=\"mx-1\"> -->\n          {{dataBasic.destination}}\n        </span>\n\n      </div>\n\n      <div class=\"col-6 mb-2\">\n        <span class=\"inp1\">Comprador</span> <br>\n        <span class=\"inpValue\">\n          {{dataBasic.buyer}}\n        </span>\n      </div>\n\n      <div class=\"mb-2\" *ngFor=\"let field of dataInfCom\" [ngClass]=\"field.width_bootstrap\">\n        <span class=\"inp1\">{{field.name}}</span> <br>\n        <span *ngIf=\"field.type=='input'\" class=\"inpValue\"> {{field.value}}</span>\n        <span *ngIf=\"field.type=='select'\" class=\"inpValue\"> {{field.value.value}}</span>\n        <span *ngIf=\"field.type=='imageselect'\" class=\"inpValue\" style=\"font-size: 13px;cursor: pointer;\">\n          <!--  <ion-icon name=\"image-outline\" style=\"font-size: 20px;\n          margin-top: -15px;\n          transform: translateY(4px);\n          color: #0059b5a6;\"></ion-icon>  -->{{field.value.value}}\n        </span>\n\n\n      </div>\n\n\n    \n      <div *ngFor=\"let sec of sections\" class=\"row\">\n\n        <p class=\"col-12\" style=\"font-size: 20px;margin: 0;margin-top: 40px;\">\n          {{sec.section.name}}\n        </p>\n\n        <ng-container *ngFor=\"let field of sec.fields\">\n\n          <div *ngIf=\"(field.type=='input' || field.type=='textarea') && field.value!=''\" [ngClass]=\"field.width_bootstrap\" style=\"margin-top: 20px;\">\n            <p class=\"inp2\">{{field.name}}</p>\n            <p *ngIf=\"field.type=='input'\" class=\"inpValue2\"> {{field.value}}</p>\n            <p *ngIf=\"field.type=='textarea'\" class=\"inpValue2\"> {{field.value}}</p>\n          </div>\n\n          <div *ngIf=\"field.type!='urlYouTube'  && field.type!='input' && field.type!='textarea' \" [ngClass]=\"field.width_bootstrap\" style=\"margin-top: 20px;\">\n            <p class=\"inp2\">{{field.name}}</p>\n            <p *ngIf=\"field.type=='select'\" class=\"inpValue2\">{{field.value.value}}</p>\n            <p *ngIf=\"field.type=='imageselect'\" class=\"inpValue2\" style=\"font-size: 13px;\">\n              {{field.value.value}}\n            </p>\n          </div>\n        </ng-container>\n\n      </div>\n\n    </div>\n\n\n    <!-- COOPERATAIVA -->\n    <div style=\"padding-bottom: 30px;\">\n\n      <p style=\"font-size: 20px;margin: 0;margin-top: 30px;margin-left: 12px;\">\n        Procedencia\n        <ion-icon name=\"analytics\" style=\"    color: #0059b5a6;\n      font-size: 21px;\n      transform: translateY(5px);\"></ion-icon>\n      </p>\n\n\n\n      <div *ngFor=\"let prod of producer\" style=\"\n      padding: 10px 15px;\n      position: relative;\n      padding-bottom: 20px;\n     padding-left: 20px;border-bottom: 1px solid #ddd;\n     margin-bottom: 15px;\">\n        <div style=\"position: relative;\">\n          <p style=\"margin: 0;\nfont-size: 14px;\nfont-weight: 700;\ncolor: #6a6a6a;\">{{prod.name}}</p>\n          <p style=\"margin: 0;\nfont-size: 10px;\nfont-style: italic;\" *ngIf=\"prod.dni!=''\">DNI. {{prod.dni}}</p>\n\n          <p style=\"margin: 0;\nfont-size: 10px;\nfont-style: italic\">Adrx. {{ prod.adrx | adrx:(5)}} </p>\n        </div>\n\n        <div style=\"position: absolute;\n        top: 10px;\n        right: 10px;\n        text-align: center;\n        margin: 5px 15px;\">\n          <p style=\"    margin: 0;\n          font-size: 15px;\n          font-weight: 700;\n          color: #d36970e8;\">{{prod.count}} {{prod.q_unid}} </p>\n          <p style=\"font-size: 12px;\n          font-weight: 600;\n          color: #1c1c1c;margin: 0;\">{{prod.certs.length}} Certificados</p>\n        </div>\n\n        <div style=\"    box-shadow: none;\n        border-radius: 50px;\n        background: #4fa956;\n        height: 0.2rem;\n        width: 40px;\n        transform: rotate(90deg);\n        position: absolute;\n        top: 8px;\n        margin-top: 25px;\n        left: -15px;\"></div>\n\n        <div>\n\n        </div>\n      </div>\n\n\n      <ion-slides #slidesDatos class=\"slide-identificacion\" style=\"position: relative;\" pager=\"true\"\n        [options]=\"slideOpts\" (ionSlideNextEnd)=\"verSlide()\" (ionSlidePrevEnd)=\"verSlide()\"\n        (ionSlideReachEnd)=\"endSlide()\">\n\n\n        <ion-slide *ngFor=\"let item of listCerts\" (click)=\"filedoc.click()\">\n          <div style=\"margin-left: 5%;\">\n            <img style=\"width: 100%; display: block;margin:auto;    max-height: 180px;\n          width: auto;box-shadow: 0px 0px 30px #d2d2d2;\" [src]=\"endPoint+item.data.document.imgfile.url\">\n          </div>\n          <a [href]=\"endPoint+item.data.document.datafile.url\"\n            (click)=\"prueba(endPoint+item.data.document.imgfile.name)\" target=\"_blank\" hidden #filedoc></a>\n        </ion-slide>\n\n        <!--   <ion-slide>\n          <div style=\"margin-left: 5%;\">\n            <img style=\"width: 100%; display: block;margin:auto;    max-height: 180px;\n          width: auto;\" src=\"../../assets/images/cert-prb2.jpg\">\n          </div>\n        </ion-slide>\n\n        <ion-slide>\n          <div style=\"margin-left: 5%;\">\n            <img style=\"width: 100%; display: block;margin:auto;    max-height: 180px;\n          width: auto;\" src=\"../../assets/images/cert-prb3.jpg\">\n          </div>\n        </ion-slide> -->\n\n      </ion-slides>\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "JCOg":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ver-foto/ver-foto.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div>\n    <ion-icon name=\"close\" style=\"position: absolute;right: 4px;top: 4px;font-size: 30px;padding: 20px;z-index: 10;color: var(--main-color);\"\n      (click)=\"closeModal(false);\">\n    </ion-icon>\n  </div>\n\n  <ion-slides [options]=\"sliderOpts\" #slider>\n    <ion-slide>\n      <div class=\"swiper-zoom-container\">\n        <img [src]=\"img\">\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "KqG2":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/conctact/conctact.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"    padding: 20px;padding-bottom: 250px;\">\n  <!--   <p style=\"margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #d36970e8;\n  line-height: 1;\n  margin-top: 10px;\">Multimedia</p> -->\n\n\n  <div style=\"    text-align: center;\">\n    <div style=\"display: inline-block;\">\n      <img [src]=\"dataContact.logoUrl.value\" style=\"height: 55px;\n      width: 55px;\n      object-fit: cover;\n      border-radius: 50px;\">\n    </div>\n    <div style=\"display: inline-block;\">\n      <p style=\"    font-weight: 700;\n      padding-left: 5px;\n      font-size: 18px;\n      margin: 0;\n      line-height: 1;\n      text-align: left;\n      /* padding-top: 20px; */\n      transform: translateY(10px);\">{{dataContact.businessName.value}} <br><span style=\"font-size: 12px;\n    font-weight: 600;\n    color: #999999;\"><ion-icon name=\"checkmark-circle\" style=\"font-size: 13px;\n    margin-top: -5px;\n    transform: translateY(2px);\n    color: #1ea0d2;\"></ion-icon> Compañia validada</span> </p>\n    </div>\n  </div>\n\n  <div>\n<!--     <p style=\"    margin: 0;\n    margin-top: 20px;\n    font-weight: 700;\n    font-size: 15px;\n    color: #4e4e4e;\">Sobre nostros</p> -->\n    <p style=\"font-size: 14px;margin-top: 15px;\n    font-weight: 600;\n    color: #787878;\">{{dataContact.businessDesc.value}}</p>\n  </div>\n\n\n  <div class=\"row\" style=\"    margin-top: 15px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #7a7a7a;\">\n    <div class=\"col-6\" style=\"margin-top: 14px;\" *ngIf=\"dataContact.web.value\">\n      <a style=\"margin: 0;color: #7a7a7a;\" [href]=\"dataContact.web.value\"  target=\"_blank\" ><ion-icon name=\"globe-outline\" style=\"margin-top: -10px;\n        font-size: 20px;\n        transform: translateY(4px);\"></ion-icon> Pagina oficial</a>\n    </div>\n  \n    <div class=\"col-6\"  style=\"margin-top: 14px;\" *ngIf=\"dataContact.facebook.value\">\n      <a style=\"margin: 0;color: #7a7a7a;\"  [href]=\"dataContact.facebook.value\"  target=\"_blank\" ><ion-icon name=\"logo-facebook\" style=\"margin-top: -10px;\n        font-size: 20px;\n        transform: translateY(4px);    color: #5c6cdf;\"></ion-icon> Facebook</a>\n    </div>\n  \n    <div class=\"col-6\"  style=\"margin-top: 14px;\" *ngIf=\"dataContact.instagram.value\">\n      <a style=\"margin: 0;color: #7a7a7a;\"  [href]=\"dataContact.instagram.value\"  target=\"_blank\" ><ion-icon name=\"logo-instagram\" style=\"margin-top: -10px;\n        font-size: 20px;\n        transform: translateY(4px);color:#d15cdf\"></ion-icon> Instagram</a>\n    </div>\n  \n    <div class=\"col-6\"  style=\"margin-top: 14px;\" *ngIf=\"dataContact.linkedin.value\">\n      <a style=\"margin: 0;color: #7a7a7a;\"  [href]=\"dataContact.linkedin.value\"  target=\"_blank\" ><ion-icon name=\"logo-linkedin\" style=\"margin-top: -10px;\n        font-size: 20px;\n        transform: translateY(4px);color: #5ca3df;\"></ion-icon> Linkedin</a>\n    </div>\n  \n    <div class=\"col-6\"  style=\"margin-top: 14px;\" *ngIf=\"dataContact.youtube.value\">\n      <a style=\"margin: 0;color: #7a7a7a;\"  [href]=\"dataContact.youtube.value\"  target=\"_blank\" ><ion-icon name=\"logo-youtube\" style=\"margin-top: -10px;\n        font-size: 20px;\n        transform: translateY(4px);    color: #df5c5c;\"></ion-icon> Youtube</a>\n    </div>\n\n\n    <div class=\"col-6\"  style=\"margin-top: 14px;\" *ngIf=\"dataContact.correo.value\">\n      <a style=\"margin: 0;color: #7a7a7a;\"  [href]=\"dataContact.correo.value\"  target=\"_blank\" ><ion-icon name=\"mail-outline\" style=\"margin-top: -10px;\n        font-size: 20px;\n        transform: translateY(4px);    color: #6faeb5;\"></ion-icon> Correo</a>\n    </div>\n  \n  </div>\n\n\n  \n\n\n\n\n\n\n\n\n\n\n</div>");

/***/ }),

/***/ "L8EE":
/*!******************************************************!*\
  !*** ./src/app/services/ionic-components.service.ts ***!
  \******************************************************/
/*! exports provided: IonicComponentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicComponentsService", function() { return IonicComponentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let IonicComponentsService = class IonicComponentsService {
    constructor(loadingController, actionSheetController, toastController) {
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const loading = yield this.loadingController.create({
                    message: 'Por favor espere...',
                    backdropDismiss: false,
                    showBackdrop: true,
                    spinner: "bubbles"
                });
                yield loading.present();
                resolve(loading);
            }));
        });
    }
    presentToast(texto, color, duracion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: texto,
                duration: duracion,
                color: color
            });
            toast.present();
        });
    }
    resizeImage(base64Str, maxWidth = 180, maxHeight = 150) {
        return new Promise((resolve) => {
            let img = new Image();
            img.src = base64Str;
            img.onload = () => {
                let canvas = document.createElement('canvas');
                const MAX_WIDTH = maxWidth;
                const MAX_HEIGHT = maxHeight;
                let width = img.width;
                let height = img.height;
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                }
                else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                let ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL());
            };
        });
    }
};
IonicComponentsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
IonicComponentsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IonicComponentsService);



/***/ }),

/***/ "MJPf":
/*!*****************************************************!*\
  !*** ./src/app/components/cert/cert.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Om6x":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cert/cert.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-icon name=\"close\" style=\"top: 0;\n    position: absolute;\n    right: 0;\n    padding: 18px;\n    font-size: 25px;\n    color: #8c8c8c;\" (click)=\"closeModal()\">\n  </ion-icon>\n\n\n  <div style=\"padding: 15px 20px;margin-top: 5px;\">\n    <p\n      style=\"font-size: 16px;color: #595959;font-weight: 600;margin-bottom: 0;margin-top: 30px;padding-right: 20px;line-height: 1.1;\">\n      {{credential.name}}\n    </p>\n\n    <div style=\"margin-top: 20px;\" (click)=\"filedoc.click()\">\n      <img [src]=\"urlImg\" style=\"    box-shadow: 4px 4px 40px #e9e9e9;\" alt=\"\">\n      <a [href]=\"urlImg\" target=\"_blank\" hidden  #filedoc></a>\n    \n    </div>\n\n  </div>\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "QC9C":
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./alert.component.html */ "VqP8");
/* harmony import */ var _alert_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.component.scss */ "GFcb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let AlertComponent = class AlertComponent {
    constructor(ngZone, _modal) {
        this.ngZone = ngZone;
        this._modal = _modal;
        this.buttonConfim = '';
        this.textTitle = '';
        this.subtitle = '';
        this.type = ''; // success | danger | alert
        this.desablet = false;
    }
    ngOnInit() {
    }
    animationCreated(animationItem) {
        this.animationItem = animationItem;
        setTimeout(() => {
            this.pause();
        }, 1500);
    }
    stop() {
        this.ngZone.runOutsideAngular(() => this.animationItem.stop());
    }
    play() {
        this.ngZone.runOutsideAngular(() => this.animationItem.play());
    }
    pause() {
        this.ngZone.runOutsideAngular(() => this.animationItem.pause());
    }
    closeModal() {
        this._modal.dismiss();
    }
    confirm() {
        this._modal.dismiss({ confirm: true });
    }
};
AlertComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-alert',
        template: _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_alert_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AlertComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let AppComponent = class AppComponent {
    constructor(route) {
        this.route = route;
    }
    codePartida() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VqP8":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/alert/alert.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"svg hide\" id=\"svg\">\n    <ng-lottie [options]=\"options\" (animationCreated)=\"animationCreated($event)\" (complete)=\"stop()\"></ng-lottie>\n  </div>\n\n  <div style=\"text-align: center;position: absolute;top: 140px;width: 100%;\">\n    <p style=\"font-size: 25px;color: #595959;font-weight: 600;margin-bottom: 0;\">{{textTitle}}</p>\n    <p style=\"margin-top: 5px;color: #5f5f5f;font-size: 15px;margin-left: 20px;margin-right: 20px;\">{{subtitle}}</p>\n\n    <ion-button (click)=\"type != 'alert'?closeModal():confirm()\" class=\"button-02\"\n      style=\"--border-radius: 5px;font-size: 12px;--background: #2778c4;height: 40px;text-transform:initial;margin-right: 5px;\">\n      {{buttonConfim}}\n    </ion-button>\n\n    <ion-button  *ngIf=\"!desablet\" (click)=\"closeModal()\" class=\"button-02\"\n      style=\"--border-radius: 5px;font-size: 12px;--background: rgb(221, 51, 51);height: 40px;text-transform:initial;margin-left: 5px;\">\n      Cancelar\n    </ion-button>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "WlQa":
/*!*****************************************************************!*\
  !*** ./src/app/components/multimedia/multimedia.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".block1 {\n  display: inline-block;\n  width: 47%;\n  margin-right: 6%;\n  position: relative;\n  margin-top: 30px;\n}\n.block1 .likes {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  z-index: 2;\n  color: white;\n  background: #d36970e8;\n  border-radius: 50px;\n  padding: 1px 5px;\n  font-size: 11px;\n  padding-top: 3px;\n}\n.block1 .likes ion-icon {\n  transform: translateY(1.5px);\n}\n.block1 img {\n  height: 190px;\n  opacity: 0.95;\n  width: 160px;\n  object-fit: cover;\n  border-radius: 20px;\n  box-shadow: 0 0px 8px rgba(207, 207, 207, 0.58);\n}\n.block1 .nameField {\n  margin: 0;\n  margin-top: 10px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #444444;\n}\n.block1 .textSub {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #787878;\n}\n.block1 .textSub .time {\n  font-style: italic;\n  font-size: 11px;\n  font-weight: 800;\n}\n.block2 {\n  display: inline-block;\n  width: 47%;\n  position: relative;\n  margin-top: 30px;\n  transform: translateY(40px);\n}\n.block2 .likes {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  z-index: 2;\n  color: white;\n  background: #d36970e8;\n  border-radius: 50px;\n  padding: 1px 5px;\n  font-size: 11px;\n  padding-top: 3px;\n}\n.block2 .likes ion-icon {\n  transform: translateY(1.5px);\n}\n.block2 img {\n  height: 190px;\n  opacity: 0.95;\n  width: 160px;\n  object-fit: cover;\n  border-radius: 20px;\n  box-shadow: 0 0px 8px rgba(207, 207, 207, 0.58);\n}\n.block2 .nameField {\n  margin: 0;\n  margin-top: 10px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #444444;\n}\n.block2 .textSub {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #787878;\n}\n.block2 .textSub .time {\n  font-style: italic;\n  font-size: 11px;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdWx0aW1lZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNSO0FBQ1E7RUFDSSw0QkFBQTtBQUNaO0FBR0k7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFEUjtBQUlJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZSO0FBS0k7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUhSO0FBSVE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZaO0FBUUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFMSjtBQU9JO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTFI7QUFPUTtFQUNJLDRCQUFBO0FBTFo7QUFTSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQVBSO0FBVUk7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUlI7QUFXSTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVFI7QUFVUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUloiLCJmaWxlIjoibXVsdGltZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9jazEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQ3JTtcclxuICAgIG1hcmdpbi1yaWdodDogNiU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICAgIC5saWtlcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2QzNjk3MGU4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMXB4IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMS41cHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC45NTtcclxuICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDBweCA4cHggcmdiKDIwNyAyMDcgMjA3IC8gNTglKTtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZUZpZWxkIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dFN1YiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjNzg3ODc4O1xyXG4gICAgICAgIC50aW1lIHtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmJsb2NrMiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDclO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcclxuXHJcbiAgICAubGlrZXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkMzY5NzBlODtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFweCA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEuNXB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTU7XHJcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwcHggOHB4IHJnYigyMDcgMjA3IDIwNyAvIDU4JSk7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWVGaWVsZCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHRTdWIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzc4Nzg3ODtcclxuICAgICAgICAudGltZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: playerFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lottie-web */ "lPHp");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/alert/alert.component */ "QC9C");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");








/* LOTTIE */





function playerFactory() {
    return lottie_web__WEBPACK_IMPORTED_MODULE_9___default.a;
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"]
        ],
        entryComponents: [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_8__["LottieModule"].forRoot({ player: playerFactory }) /* LOTTIE */
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"] },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] /* ,
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ] */
    })
], AppModule);



/***/ }),

/***/ "aRxy":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/multimedia/multimedia.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding-bottom: 250px;\">\n  <p style=\"margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #313131e8;\n  padding: 10px 10px;\">Multimedia</p>\n\n\n  <div *ngFor=\"let item of multimedia;index as i\" style=\"margin-bottom: 20px; border-top: 1px solid #f0f0f0;\n  padding-top: 7px;\">\n    <div (click)=\"view(item)\" *ngIf=\"item.trxid\">\n      <div style=\"margin-bottom: 5px;position: relative;\">\n\n        <img src=\"../../../assets/images/producer-icon.png\" style=\"object-fit: cover;\n      border-radius: 100%;\n      height: 30px;\n      width: 30px;\n      padding: 2px;\n      background-color: rgb(250, 250, 250);\n      margin: 0 7px;\n      border: 0.5px solid #e3e3e3c9;\">\n\n        <p style=\"line-height: 1;\n      margin: 0;\n      display: inline-block;\n      font-size: 13px;\n      font-weight: 700;\n      color: #686868;\n      transform: translateY(7px);\">{{item.titular}} <br> <span style=\"font-size: 11px;\n    font-weight: 600;\">Productor</span>\n        </p>\n\n    <!--     <ion-icon name=\"ellipsis-horizontal-outline\" style=\"color: #abababb5;\n      position: absolute;\n      top: 2px;\n      right: 8px;\n      font-size: 21px;position: absolute;top: 8px;right: 12px;\"></ion-icon> -->\n      </div>\n\n      <div style=\"margin-bottom: 10px;\">\n        <p style=\"margin: 0 10px;\n      line-height: 1.2;\n      font-size: 13px;\n      color: #646464;\"><span style=\"color: rgb(60 135 215);\">#Credecial</span> {{item.name}}</p>\n      </div>\n\n      <img [src]=\"item.imgfile\" style=\"max-height: 300px;\n    opacity: 0.95;\n    width: 100%;\n    object-fit: cover;\n    border-top: 1px solid #efefef94;\n    border-bottom: 1px solid #efefef94;\">\n\n\n    </div>\n\n    <div (click)=\"view(item)\" *ngIf=\"!item.trxid && item.type!='urlYouTube'\">\n      <div style=\"margin-bottom: 5px;position: relative;\">\n\n        <img [src]=\"dataContact.logoUrl.value\" style=\"object-fit: cover;\n      border-radius: 100%;\n      height: 30px;\n      width: 30px;\n      padding: 1px;\n      background-color: rgb(250, 250, 250);\n      margin: 0 7px;\">\n\n        <p style=\"line-height: 1;\n      margin: 0;\n      display: inline-block;\n      font-size: 13px;\n      font-weight: 700;\n      color: #686868;\n      transform: translateY(7px);\">{{dataContact.businessName.value}} <br> <span style=\"font-size: 11px;\n    font-weight: 600;\">Cooperativa</span>\n        </p>\n      </div>\n\n      <div style=\"margin-bottom: 10px;\">\n        <p style=\"margin: 0 10px;\n      line-height: 1.2;\n      font-size: 13px;\n      color: #646464;\"><span style=\"color: rgb(60 135 215);\">#Evidencias</span>{{item.name}}, {{item.value.value}}</p>\n      </div>\n\n      <img [src]=\"item.value.files[0].url\" style=\"max-height: 300px;\n    opacity: 0.95;\n    width: 100%;\n    object-fit: cover;\n    border-top: 1px solid #efefef94;\n    border-bottom: 1px solid #efefef94;\">\n\n\n    </div>\n\n    <div *ngIf=\"!item.trxid && item.type=='urlYouTube'\">\n      <div style=\"margin-bottom: 5px;position: relative;\">\n\n        <img [src]=\"dataContact.logoUrl.value\" style=\"object-fit: cover;\n      border-radius: 100%;\n      height: 30px;\n      width: 30px;\n      padding: 1px;\n      background-color: rgb(250, 250, 250);\n      margin: 0 7px;\">\n\n        <p style=\"line-height: 1;\n      margin: 0;\n      display: inline-block;\n      font-size: 13px;\n      font-weight: 700;\n      color: #686868;\n      transform: translateY(7px);\">{{dataContact.businessName.value}} <br> <span style=\"font-size: 11px;\n    font-weight: 600;\">Cooperativa</span>\n        </p>\n\n        <ion-icon name=\"ellipsis-horizontal-outline\" style=\"color: #abababb5;\n      position: absolute;\n      top: 2px;\n      right: 8px;\n      font-size: 21px;position: absolute;top: 8px;right: 12px;\"></ion-icon>\n\n      </div>\n\n      <div style=\"margin-bottom: 10px;\">\n        <p style=\"margin: 0 10px;\n      line-height: 1.2;\n      font-size: 13px;\n      color: #646464;\"><span style=\"color: rgb(60 135 215);\">#Evidencias</span> {{item.name}}</p>\n      </div>\n\n\n      <iframe style=\"width: 100%;height: 280px;\" [src]=\"getVideoIframe(item.value)\" frameborder=\"0\" controls=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n\n    </div>\n\n  </div>\n\n  <div *ngIf=\"multimedia.length == 0\" \n  style=\"margin: 0px 10px;\n  font-weight: 600;\n  color: #686868;\">\n    Sin documentos a mostrar\n  </div>\n\n</div>");

/***/ }),

/***/ "dbo8":
/*!*************************************************************!*\
  !*** ./src/app/components/ver-foto/ver-foto.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff;\n}\n\nion-slides {\n  margin-top: 20%;\n  height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2ZXItZm90by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InZlci1mb3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "fXUF":
/*!*********************************************************!*\
  !*** ./src/app/components/infolot/infolot.component.ts ***!
  \*********************************************************/
/*! exports provided: InfolotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfolotComponent", function() { return InfolotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_infolot_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./infolot.component.html */ "HdGf");
/* harmony import */ var _infolot_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infolot.component.scss */ "hfpC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/apiMongo.service */ "GtMO");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-service.service */ "njzu");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/storage.service */ "n90K");









let InfolotComponent = class InfolotComponent {
    constructor(_data, _storage, router, _fun, _apiMongo) {
        this._data = _data;
        this._storage = _storage;
        this.router = router;
        this._fun = _fun;
        this._apiMongo = _apiMongo;
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            speed: 700,
            autoplay: {
                delay: 4000,
            },
        };
        this.initEnd = false;
        this.indexSlide = 0;
        this.listCerts = [];
        this.endPoint = '';
        this.dataBasic = {
            portada: '',
            objective_cert: '',
            amount: '',
            f_vencimineto: '',
            origin: '',
            destination: '',
            buyer: ''
        };
        this.producer = [];
        this.dataInfCom = [];
        this.dataInfProd = [];
        this.sections = [];
        this.credSub = {
            portada: '',
            producers: [],
            sections: []
        };
    }
    ionViewDidLoad() {
        this.videoElement = this.video.nativeElement;
        this.videoElement.play();
    }
    ngOnInit() {
        this._data.getData().subscribe(res => {
            if (res) {
                this.data = res;
                this.initData2();
            }
        });
    }
    /*   multimedia = []; */
    initData2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.credSub = this.data.data.dataCred.credential.verifiableCredential[0].credentialSubject;
            this.dataBasic.portada = this.credSub.portada;
            this.producer = this.credSub.producers;
            console.log('credSub', this.credSub);
            for (let index = 0; index < this.credSub.sections.length; index++) {
                let sec = this.credSub.sections[index];
                if (sec.section.code == 'infoProd') {
                    this.dataInfProd = sec.fields;
                }
                if (sec.section.code == 'infoComer') {
                    for (let x = 0; x < sec.fields.length; x++) {
                        let field = sec.fields[x];
                        if (this.dataBasic[field.code] != undefined)
                            this.dataBasic[field.code] = field.value;
                        if (field.code != 'objective_cert' && field.code != 'buyer' &&
                            field.code != 'amount' && field.code != 'origin' && field.code != 'destination' &&
                            field.code != 'f_emision' && field.code != 'f_vencimineto')
                            this.dataInfCom.push(field);
                    }
                }
                else if (sec.fields.length > 0 && sec.section.code != 'contact')
                    this.sections.push(sec);
                if (index == (this.credSub.sections.length - 1))
                    console.log('this.sections', this.sections);
            }
        });
    }
    initData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*   if (this.viewDemo_pre) {
                this.dataBasic = this.data.jsonForms;
                this.producer = this.data.jsonForms.producers;
              } else { */
            this.dataBasic = this.data.data.dataCredential.credential.verifiableCredential[0].credentialSubject;
            this.producer = this.data.data.dataCredential.credential.verifiableCredential[0].credentialSubject.producers;
            /*    } */
            console.log('this.producer ', this.producer);
            let dataRes = yield this.configData();
            console.log('dataRes', dataRes);
            dataRes.forEach(elm => {
                if (elm.section.code == 'infoComer') {
                    elm.fields.forEach(fld => {
                        if (fld.code != 'objective_cert' && fld.code != 'buyer' &&
                            fld.code != 'amount' && fld.code != 'origin' && fld.code != 'destination' &&
                            fld.code != 'f_emision' && fld.code != 'f_vencimineto')
                            this.dataInfCom.push(fld);
                    });
                }
                if (elm.section.code == 'infoProd')
                    this.dataInfProd = elm.fields;
            });
        });
    }
    configData() {
        return new Promise((resolve, reject) => {
            let dataForm = [];
            /*   if (this.viewDemo_pre) dataForm = this.data.dataForm;
              else  */ dataForm = this.data.data.dataForm;
            let data_make = [];
            for (let x = 0; x < dataForm.length; x++) {
                let form1 = dataForm[x];
                let jsonValue = form1.formValue;
                let dataF = {
                    section: form1.section,
                    fields: []
                };
                if (!jsonValue && (x == (dataForm.length - 1)))
                    resolve(data_make);
                if (!jsonValue)
                    continue;
                let count = 0;
                for (var key in jsonValue) {
                    let field = form1.fields.filter(r => r.code == key)[0];
                    if (jsonValue[key].key)
                        field.value_r = jsonValue[key].value;
                    else
                        field.value_r = jsonValue[key];
                    dataF.fields.push(field);
                    if (count == (Object.keys(jsonValue).length - 1)) {
                        data_make.push(dataF);
                        if (x == (dataForm.length - 1))
                            resolve(data_make);
                    }
                    count++;
                }
            }
        });
    }
    prueba(data) {
    }
    verSlide() {
        this.slidesDatos.getActiveIndex().then(res => {
            if (!this.initEnd)
                this.indexSlide = res;
            this.initEnd = false;
        });
    }
    endSlide() {
        this.initEnd = true;
        this.indexSlide = 2;
    }
    sesion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*     let res: any;
                if (this.user == 'INVITADO') res = await this._fun.alertGen('Iniciar sesión', 'Desea iniciar sesion?');
                else res = await this._fun.alertGen('Si, cerrar', 'Desea cerrar sesión?');
                if (this._fun.isVarInvalid(res)) return;
                await this._storage.remove('USER');
                this.router.navigate(['/login']); */
        });
    }
};
InfolotComponent.ctorParameters = () => [
    { type: src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_5__["Funciones"] },
    { type: src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_6__["ApiMongoService"] }
];
InfolotComponent.propDecorators = {
    slidesDatos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slidesDatos', { static: false },] }],
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["video",] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
InfolotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-infolot',
        template: _raw_loader_infolot_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_infolot_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InfolotComponent);



/***/ }),

/***/ "hfpC":
/*!***********************************************************!*\
  !*** ./src/app/components/infolot/infolot.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".aspect-tab {\n  position: relative;\n  width: 100%;\n  max-width: 1000px;\n  margin: 10px auto;\n  border-radius: 4px;\n  background-color: white;\n  box-shadow: 0 0 0 1px #ececec;\n  opacity: 1;\n  transition: box-shadow 0.2s, opacity 0.4s;\n}\n.aspect-tab:hover {\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.11);\n}\n.aspect-input {\n  display: none;\n}\n.aspect-input:checked ~ .aspect-content + .aspect-tab-content {\n  max-height: 3000px;\n}\n.aspect-input:checked ~ .aspect-content:after {\n  transform: rotate(0);\n}\n.aspect-label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  max-height: 80px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 0;\n  z-index: 1;\n  cursor: pointer;\n}\n.aspect-label:hover ~ .aspect-content:after {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTI0IDI0SDBWMGgyNHoiIG9wYWNpdHk9Ii44NyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM1NTZBRUEiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE1Ljg4IDE1LjI5TDEyIDExLjQxbC0zLjg4IDMuODhhLjk5Ni45OTYgMCAxIDEtMS40MS0xLjQxbDQuNTktNC41OWEuOTk2Ljk5NiAwIDAgMSAxLjQxIDBsNC41OSA0LjU5Yy4zOS4zOS4zOSAxLjAyIDAgMS40MS0uMzkuMzgtMS4wMy4zOS0xLjQyIDB6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=\");\n}\n.aspect-content {\n  position: relative;\n  display: block;\n  height: 80px;\n  margin: 0;\n  padding: 0 87px 0 30px;\n  font-size: 0;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.aspect-content:before, .aspect-content:after {\n  content: \"\";\n  display: inline-block;\n  vertical-align: middle;\n}\n.aspect-content:before {\n  height: 100%;\n}\n.aspect-content:after {\n  position: absolute;\n  width: 24px;\n  height: 100%;\n  right: 30px;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTI0IDI0SDBWMGgyNHoiIG9wYWNpdHk9Ii44NyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNBOUFDQUYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE1Ljg4IDE1LjI5TDEyIDExLjQxbC0zLjg4IDMuODhhLjk5Ni45OTYgMCAxIDEtMS40MS0xLjQxbDQuNTktNC41OWEuOTk2Ljk5NiAwIDAgMSAxLjQxIDBsNC41OSA0LjU5Yy4zOS4zOS4zOSAxLjAyIDAgMS40MS0uMzkuMzgtMS4wMy4zOS0xLjQyIDB6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=\");\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: rotate(180deg);\n}\n.aspect-name {\n  display: inline-block;\n  width: 75%;\n  /* margin-left: 16px; */\n  font-size: 30px;\n  font-weight: 500;\n  color: #242a32;\n  white-space: normal;\n  text-align: left;\n  vertical-align: middle;\n}\n.all-opinions,\n.aspect-name {\n  font-size: 14px;\n  line-height: 22px;\n}\n.all-opinions {\n  color: #5d5d5d;\n  text-align: left;\n}\n.aspect-content + .aspect-tab-content {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.4s;\n}\n.aspect-content > div,\n.aspect-stat > div {\n  display: inline-block;\n}\n.aspect-content > div {\n  vertical-align: middle;\n}\n.aspect-info {\n  width: 60%;\n  white-space: nowrap;\n  font-size: 0;\n}\n.aspect-info:before {\n  content: \"\";\n  display: inline-block;\n  height: 44px;\n  vertical-align: middle;\n}\n.aspect-tab-content {\n  background-color: #f9f9f9;\n  font-size: 0;\n  text-align: justify;\n}\n.sentiment-wrapper {\n  padding: 10px 10px 10px;\n}\n.sentiment-wrapper > div {\n  display: inline-block;\n  width: 33.3%;\n  max-width: 390px;\n  padding: 0 5px;\n  box-sizing: border-box;\n  vertical-align: top;\n  cursor: default;\n}\n.sentiment-wrapper > div > div {\n  width: 100%;\n  padding: 16px 24px 20px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ececec;\n  text-align: left;\n}\n.opinion-header {\n  position: relative;\n  width: 100%;\n  margin: 0 0 24px;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 20px;\n  color: #242a32;\n  text-transform: capitalize;\n}\n.opinion-header > span:nth-child(2) {\n  position: absolute;\n  right: 0;\n}\n.opinion-header + div > span {\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 22px;\n  color: #363636;\n}\n@media screen and (max-width: 800px) {\n  .aspect-label {\n    max-height: 102px;\n  }\n\n  .aspect-content {\n    height: auto;\n    padding: 10px 87px 10px 30px;\n  }\n  .aspect-content:before {\n    display: none;\n  }\n  .aspect-content:after {\n    top: 0;\n  }\n\n  .aspect-content > div {\n    display: block;\n    width: 100%;\n  }\n}\n@media screen and (max-width: 750px) {\n  .sentiment-wrapper > div {\n    display: block;\n    width: 100%;\n    max-width: 100%;\n  }\n\n  .sentiment-wrapper > div:not(:first-child) {\n    margin-top: 10px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .aspect-label {\n    max-height: 140px;\n  }\n\n  .aspect-stat > div {\n    display: block;\n    width: 100%;\n  }\n\n  .all-opinions {\n    margin-bottom: 10px;\n  }\n\n  .all-opinions + div > span:first-child {\n    margin: 0;\n  }\n}\n.input {\n  font-size: 11px;\n  color: #8b898f;\n  font-weight: 500;\n}\n.row_container {\n  display: flex;\n}\n.icon-nav-arrow {\n  color: #f7f8fb;\n  font-size: 25px;\n  padding: 15px 20px;\n}\n.title {\n  text-align: left;\n  color: #f7f8fb;\n  font-size: 17px;\n}\n/* ********************** */\n.context {\n  /* width: 300px; */\n  height: 100%;\n  /* margin: 100px; */\n  background: white;\n  transform: translateZ(0);\n  overflow: scroll;\n}\n.viewport {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n.centered {\n  z-index: 30000;\n  position: fixed;\n  /*  left: 50%; */\n  bottom: 0px;\n  /*   transform: translateX(-50%); */\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: 0px;\n  margin-left: 0px;\n}\n.inp1 {\n  color: #787878 !important;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n}\n.inpValue {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.3;\n  color: #212529;\n}\n.inp2 {\n  margin-top: 12px;\n  margin: 0;\n  color: #787878 !important;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  line-height: 1;\n  display: block;\n}\n.inpValue2 {\n  margin: 0;\n  margin-top: 8px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.3;\n  color: #212529;\n  line-height: 1;\n  display: block;\n}\n.nav.tmf-navigation-footer {\n  position: sticky;\n  z-index: 20;\n  bottom: 0;\n  width: 100%;\n  background-color: #484848;\n  padding: 0 0 5px;\n  margin-top: 50px;\n}\n.mm0 {\n  color: #fd7575;\n}\n.mm1 {\n  color: #20e24a;\n}\n.btn-1 {\n  display: inline-block;\n  text-decoration: none;\n  background-color: transparent;\n  padding: 15px 20px;\n  /* border: none; */\n  color: white;\n  border-radius: 15px;\n  border: 1px solid white;\n  font-size: 12px;\n  box-shadow: var(--shadow-black-300);\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.footer {\n  margin-top: 50px;\n}\n.footer ul {\n  justify-content: center;\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.footer ul li {\n  margin: 0 15px;\n}\n.footer ul li a {\n  color: white;\n  text-decoration: none;\n  background-color: transparent;\n}\n.footer ul li a ion-icon {\n  font-size: 30px;\n}\n.nav-bottom {\n  background: #484848;\n  padding: 1;\n  text-align: center;\n  line-height: 1;\n}\n.nav-bottom .nav-cont {\n  border-radius: 0 0 12px 12px;\n  margin: 0 2px 5px 2px;\n  position: relative;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);\n  padding: 5px;\n  padding-bottom: 15px;\n  padding-top: 8px;\n  min-height: 76px;\n  color: white;\n}\n.select-nav {\n  background: white;\n  color: #484848 !important;\n}\n.btn-5 {\n  text-decoration: none;\n  background: linear-gradient(90deg, #0261c3 10%, #5c67ec 100%);\n  padding: 15px 50px;\n  border-radius: 30px;\n  color: #fff;\n  font-size: 11px;\n  box-shadow: var(--shadow-black-100);\n  font-weight: 500;\n}\n/* ****************** */\n/* *********************************** */\n.row-div {\n  width: 210%;\n  height: 3vh;\n  padding: 0;\n  margin: -50px;\n  justify-content: center;\n  position: relative;\n}\n/* -- SVG CSS -- */\n.svg-separator {\n  display: block;\n  background: 0 0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 9;\n  transform: translateY(-100%) translateY(2px);\n  width: 100%;\n}\n.svg-separator.bottom {\n  top: auto;\n  bottom: 0;\n}\n.sep1 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep2 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep3 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep4 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep5 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep6 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep7 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep8 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep9 {\n  transform: translateY(0%) translateY(-2px) scale(-1, -1);\n  transform-origin: bottom;\n}\n.sep10 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep11 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep12 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n/* -- Row BG Color -- */\n.green {\n  background-color: #03a678;\n}\n.green2 {\n  background-color: #1bbc9b;\n}\n.red {\n  background: linear-gradient(180deg, #f8f8f8 10%, #ffffff 100%);\n}\n.light-grey {\n  background-color: #ecf0f1;\n}\n.light-grey2 {\n  background-color: #ecf0f1;\n}\n.dark-blue {\n  background-color: #22313f;\n}\n.grey-blue {\n  background-color: #6c7a89;\n}\n.black {\n  background-color: #333;\n}\n.stupid-blue {\n  background-color: #19b5fe;\n}\n.video-c {\n  width: 100%;\n}\n.video-c:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbmZvbG90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtBQVBGO0FBU0U7RUFDRSw0Q0FBQTtBQVBKO0FBVUE7RUFDRSxhQUFBO0FBUEY7QUFTQTtFQUNFLGtCQUFBO0FBTkY7QUFRQTtFQUNFLG9CQUFBO0FBTEY7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFKRjtBQUtFO0VBQ0UsMmpCQUFBO0FBSEo7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSEY7QUFJRTtFQUVFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBSEo7QUFLRTtFQUNFLFlBQUE7QUFISjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwyakJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFISjtBQU1BO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQWxGYTtFQW1GYixtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFIRjtBQU1BOztFQUVFLGVBQUE7RUFDQSxpQkFBQTtBQUhGO0FBS0E7RUFDRSxjQTVGUztFQTZGVCxnQkFBQTtBQUZGO0FBSUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQURGO0FBR0E7O0VBRUUscUJBQUE7QUFBRjtBQUVBO0VBQ0Usc0JBQUE7QUFDRjtBQUVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQUVBO0VBQ0UseUJBdEhpQjtFQXVIakIsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDQTtFQUNFLHVCQUFBO0FBRUY7QUFBQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBR0Y7QUFEQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFJRjtBQUZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBM0phO0VBNEpiLDBCQUFBO0FBS0Y7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQU1GO0FBSkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBbEttQjtBQXlLckI7QUFKQTtFQUNFO0lBQ0UsaUJBQUE7RUFPRjs7RUFMQTtJQUNFLFlBQUE7SUFDQSw0QkFBQTtFQVFGO0VBUEU7SUFDRSxhQUFBO0VBU0o7RUFQRTtJQUNFLE1BQUE7RUFTSjs7RUFOQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VBU0Y7QUFDRjtBQVBBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUFTRjs7RUFQQTtJQUNFLGdCQUFBO0VBVUY7QUFDRjtBQVJBO0VBQ0U7SUFDRSxpQkFBQTtFQVVGOztFQVJBO0lBQ0UsY0FBQTtJQUNBLFdBQUE7RUFXRjs7RUFUQTtJQUNFLG1CQUFBO0VBWUY7O0VBVkE7SUFDRSxTQUFBO0VBYUY7QUFDRjtBQVZBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVlGO0FBVEE7RUFDRSxhQUFBO0FBWUY7QUFUQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFZRjtBQVRBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVlGO0FBVEEsMkJBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBV0Y7QUFUQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBWUY7QUFWQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUFhRjtBQVhBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBY0Y7QUFYQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWNGO0FBWEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFjRjtBQVZBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFhRjtBQVZBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVlGO0FBVEE7RUFFRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVlGO0FBVEE7RUFDRSxjQUFBO0FBWUY7QUFUQTtFQUNFLGNBQUE7QUFZRjtBQVRBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVlGO0FBVEE7RUFDRSxnQkFBQTtBQVlGO0FBWEU7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBYUo7QUFaSTtFQUNFLGNBQUE7QUFjTjtBQWJNO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFlUjtBQWRRO0VBQ0UsZUFBQTtBQWdCVjtBQVRBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBWUY7QUFWRTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFZSjtBQVJBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQVdGO0FBTkE7RUFDRSxxQkFBQTtFQUNBLDZEQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQVNGO0FBUEEsdUJBQUE7QUFFQSx3Q0FBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFTSjtBQU5FLGtCQUFBO0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUVBLDRDQUFBO0VBQ0EsV0FBQTtBQVFKO0FBTkU7RUFDRSxTQUFBO0VBQ0EsU0FBQTtBQVNKO0FBUEU7RUFDRSx3REFBQTtFQUNBLHFCQUFBO0FBVUo7QUFSRTtFQUNFLHdEQUFBO0VBQ0EscUJBQUE7QUFXSjtBQVRFO0VBQ0Usd0RBQUE7RUFDQSxxQkFBQTtBQVlKO0FBVkU7RUFDRSx3REFBQTtFQUNBLHFCQUFBO0FBYUo7QUFYRTtFQUNFLHdEQUFBO0VBQ0EscUJBQUE7QUFjSjtBQVpFO0VBQ0Usd0RBQUE7RUFDQSxxQkFBQTtBQWVKO0FBYkU7RUFDRSx3REFBQTtFQUNBLHFCQUFBO0FBZ0JKO0FBZEU7RUFDRSx3REFBQTtFQUNBLHFCQUFBO0FBaUJKO0FBZkU7RUFDRSx3REFBQTtFQUNBLHdCQUFBO0FBa0JKO0FBaEJFO0VBQ0Usd0RBQUE7RUFDQSxxQkFBQTtBQW1CSjtBQWpCRTtFQUNFLHdEQUFBO0VBQ0EscUJBQUE7QUFvQko7QUFsQkU7RUFDRSx3REFBQTtFQUNBLHFCQUFBO0FBcUJKO0FBbEJFLHVCQUFBO0FBRUE7RUFBTyx5QkFBQTtBQXFCVDtBQXBCRTtFQUFRLHlCQUFBO0FBd0JWO0FBdkJFO0VBQUssOERBQUE7QUEyQlA7QUExQkU7RUFBWSx5QkFBQTtBQThCZDtBQTdCRTtFQUFhLHlCQUFBO0FBaUNmO0FBaENFO0VBQVcseUJBQUE7QUFvQ2I7QUFuQ0U7RUFBVyx5QkFBQTtBQXVDYjtBQXRDRTtFQUFPLHNCQUFBO0FBMENUO0FBekNFO0VBQWEseUJBQUE7QUE2Q2Y7QUF6Q0U7RUFDRSxXQUFBO0FBNENKO0FBekNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ00sTUFBQTtFQUNOLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0FBNENKIiwiZmlsZSI6ImluZm9sb3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY2lyY2xlLWdyYXk6ICNlNGU0ZTQ7XHJcbiRoZWFkZXItYmxhY2s6ICMyNDJhMzI7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjNmZjYWU3O1xyXG4kdGFiLXRleHQ6ICM1ZDVkNWQ7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHJldmlld3MtdGV4dC1ibGFjazogIzM2MzYzNjtcclxuJHdoaXRlLWxpZ2h0LWdyYXk6ICNmOWY5Zjk7XHJcblxyXG4uYXNwZWN0LXRhYiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgyMzYsIDIzNiwgMjM2LCAxKTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycywgb3BhY2l0eSAwLjRzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xyXG4gIH1cclxufVxyXG4uYXNwZWN0LWlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5hc3BlY3QtaW5wdXQ6Y2hlY2tlZCB+IC5hc3BlY3QtY29udGVudCArIC5hc3BlY3QtdGFiLWNvbnRlbnQge1xyXG4gIG1heC1oZWlnaHQ6IDMwMDBweDtcclxufVxyXG4uYXNwZWN0LWlucHV0OmNoZWNrZWQgfiAuYXNwZWN0LWNvbnRlbnQ6YWZ0ZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG59XHJcbi5hc3BlY3QtbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciB+IC5hc3BlY3QtY29udGVudDphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXlOQ0lnYUdWcFoyaDBQU0l5TkNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkwSURJMElqNEtJQ0FnSUR4bklHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRJMElESTBTREJXTUdneU5Ib2lJRzl3WVdOcGRIazlJaTQ0TnlJdlBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU0xTlRaQlJVRWlJR1pwYkd3dGNuVnNaVDBpYm05dWVtVnlieUlnWkQwaVRURTFMamc0SURFMUxqSTVUREV5SURFeExqUXhiQzB6TGpnNElETXVPRGhoTGprNU5pNDVPVFlnTUNBeElERXRNUzQwTVMweExqUXhiRFF1TlRrdE5DNDFPV0V1T1RrMkxqazVOaUF3SURBZ01TQXhMalF4SURCc05DNDFPU0EwTGpVNVl5NHpPUzR6T1M0ek9TQXhMakF5SURBZ01TNDBNUzB1TXprdU16Z3RNUzR3TXk0ek9TMHhMalF5SURCNklpOCtDaUFnSUNBOEwyYytDand2YzNablBnbz1cIik7XHJcbiAgfVxyXG59XHJcbi5hc3BlY3QtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMCA4N3B4IDAgMzBweDtcclxuICBmb250LXNpemU6IDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXlOQ0lnYUdWcFoyaDBQU0l5TkNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkwSURJMElqNEtJQ0FnSUR4bklHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRJMElESTBTREJXTUdneU5Ib2lJRzl3WVdOcGRIazlJaTQ0TnlJdlBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU5CT1VGRFFVWWlJR1pwYkd3dGNuVnNaVDBpYm05dWVtVnlieUlnWkQwaVRURTFMamc0SURFMUxqSTVUREV5SURFeExqUXhiQzB6TGpnNElETXVPRGhoTGprNU5pNDVPVFlnTUNBeElERXRNUzQwTVMweExqUXhiRFF1TlRrdE5DNDFPV0V1T1RrMkxqazVOaUF3SURBZ01TQXhMalF4SURCc05DNDFPU0EwTGpVNVl5NHpPUzR6T1M0ek9TQXhMakF5SURBZ01TNDBNUzB1TXprdU16Z3RNUzR3TXk0ek9TMHhMalF5SURCNklpOCtDaUFnSUNBOEwyYytDand2YzNablBnbz1cIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcbn1cclxuLmFzcGVjdC1uYW1lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDc1JTtcclxuICAvKiBtYXJnaW4tbGVmdDogMTZweDsgKi9cclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogJGhlYWRlci1ibGFjaztcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmFsbC1vcGluaW9ucyxcclxuLmFzcGVjdC1uYW1lIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuLmFsbC1vcGluaW9ucyB7XHJcbiAgY29sb3I6ICR0YWItdGV4dDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5hc3BlY3QtY29udGVudCArIC5hc3BlY3QtdGFiLWNvbnRlbnQge1xyXG4gIG1heC1oZWlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHM7XHJcbn1cclxuLmFzcGVjdC1jb250ZW50ID4gZGl2LFxyXG4uYXNwZWN0LXN0YXQgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uYXNwZWN0LWNvbnRlbnQgPiBkaXYge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5hc3BlY3QtaW5mbyB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuXHJcbi5hc3BlY3QtdGFiLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1saWdodC1ncmF5O1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi5zZW50aW1lbnQtd3JhcHBlciB7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuLnNlbnRpbWVudC13cmFwcGVyID4gZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDMzLjMlO1xyXG4gIG1heC13aWR0aDogMzkwcHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4uc2VudGltZW50LXdyYXBwZXIgPiBkaXYgPiBkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE2cHggMjRweCAyMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5vcGluaW9uLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCAwIDI0cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICRoZWFkZXItYmxhY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLm9waW5pb24taGVhZGVyID4gc3BhbjpudGgtY2hpbGQoMikge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxufVxyXG4ub3Bpbmlvbi1oZWFkZXIgKyBkaXYgPiBzcGFuIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBjb2xvcjogJHJldmlld3MtdGV4dC1ibGFjaztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuYXNwZWN0LWxhYmVsIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMnB4O1xyXG4gIH1cclxuICAuYXNwZWN0LWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCA4N3B4IDEwcHggMzBweDtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hc3BlY3QtY29udGVudCA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gIC5zZW50aW1lbnQtd3JhcHBlciA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc2VudGltZW50LXdyYXBwZXIgPiBkaXY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuYXNwZWN0LWxhYmVsIHtcclxuICAgIG1heC1oZWlnaHQ6IDE0MHB4O1xyXG4gIH1cclxuICAuYXNwZWN0LXN0YXQgPiBkaXYge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmFsbC1vcGluaW9ucyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAuYWxsLW9waW5pb25zICsgZGl2ID4gc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjb2xvcjogIzhiODk4ZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucm93X2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmljb24tbmF2LWFycm93IHtcclxuICBjb2xvcjogI2Y3ZjhmYjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICNmN2Y4ZmI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4uY29udGV4dCB7XHJcbiAgLyogd2lkdGg6IDMwMHB4OyAqL1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvKiBtYXJnaW46IDEwMHB4OyAqL1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcbi52aWV3cG9ydCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLmNlbnRlcmVkIHtcclxuICB6LWluZGV4OiAzMDAwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLyogIGxlZnQ6IDUwJTsgKi9cclxuICBib3R0b206IDBweDtcclxuICAvKiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgKi9cclxufVxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4uaW5wMSB7XHJcbiAgY29sb3I6ICM3ODc4NzggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5pbnBWYWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG5cclxuXHJcbi5pbnAyIHtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzc4Nzg3OCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmlucFZhbHVlMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBjb2xvcjogIzIxMjUyOTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm5hdi50bWYtbmF2aWdhdGlvbi1mb290ZXIge1xyXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0ODQ4O1xyXG4gIHBhZGRpbmc6IDAgMCA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLm1tMCB7XHJcbiAgY29sb3I6ICNmZDc1NzU7XHJcbn1cclxuXHJcbi5tbTEge1xyXG4gIGNvbG9yOiByZ2IoMzIsIDIyNiwgNzQpO1xyXG59XHJcblxyXG4uYnRuLTEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIC8qIGJvcmRlcjogbm9uZTsgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWJsYWNrLTMwMCk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHVsIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LWJvdHRvbSB7XHJcbiAgYmFja2dyb3VuZDogIzQ4NDg0ODtcclxuICBwYWRkaW5nOiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTtcclxuXHJcbiAgLm5hdi1jb250IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XHJcbiAgICBtYXJnaW46IDAgMnB4IDVweCAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiKDAgMCAwIC8gMTUlKTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIG1pbi1oZWlnaHQ6IDc2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VsZWN0LW5hdntcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjojNDg0ODQ4ICFpbXBvcnRhbnQ7ICBcclxufVxyXG5cclxuXHJcblxyXG4uYnRuLTV7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAyNjFjMyAgMTAlLCAjNWM2N2VjIDEwMCUpO1xyXG4gIHBhZGRpbmc6IDE1cHggNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGNvbG9yOiAgI2ZmZjtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWJsYWNrLTEwMCk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4vKiAqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi5yb3ctZGl2e1xyXG4gICAgd2lkdGg6IDIxMCU7XHJcbiAgICBoZWlnaHQ6IDN2aDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IC01MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIC0tIFNWRyBDU1MgLS0gKi9cclxuICBcclxuICAuc3ZnLXNlcGFyYXRvcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVZKDJweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVkoMnB4KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc3ZnLXNlcGFyYXRvci5ib3R0b217XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG4gIC5zZXAxe1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVZKDJweCkgc2NhbGUoMSwxKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICB9XHJcbiAgLnNlcDIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVZKDJweCkgc2NhbGUoMSwxKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICB9XHJcbiAgLnNlcDMge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVZKDJweCkgc2NhbGUoMSwxKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICB9XHJcbiAgLnNlcDQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVZKDJweCkgc2NhbGUoMSwxKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICB9XHJcbiAgLnNlcDUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVZKDJweCkgc2NhbGUoMSwxKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICB9XHJcbiAgLnNlcDYge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVZKDJweCkgc2NhbGUoMSwxKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICB9XHJcbiAgLnNlcDcge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVZKDJweCkgc2NhbGUoMSwxKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICB9XHJcbiAgLnNlcDgge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVZKDJweCkgc2NhbGUoMSwxKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICB9XHJcbiAgLnNlcDkge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSB0cmFuc2xhdGVZKC0ycHgpIHNjYWxlKC0xLC0xKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICB9XHJcbiAgLnNlcDEwIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSkgdHJhbnNsYXRlWSgycHgpIHNjYWxlKDEsMSk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgfVxyXG4gIC5zZXAxMSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVkoMnB4KSBzY2FsZSgxLDEpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIH1cclxuICAuc2VwMTIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVZKDJweCkgc2NhbGUoMSwxKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICB9XHJcbiAgXHJcbiAgLyogLS0gUm93IEJHIENvbG9yIC0tICovXHJcbiAgXHJcbiAgLmdyZWVue2JhY2tncm91bmQtY29sb3I6IzAzYTY3ODt9XHJcbiAgLmdyZWVuMntiYWNrZ3JvdW5kLWNvbG9yOiMxYmJjOWI7fVxyXG4gIC5yZWR7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjhmOGY4IDEwJSwgI2ZmZmZmZiAxMDAlKX1cclxuICAubGlnaHQtZ3JleXtiYWNrZ3JvdW5kLWNvbG9yOiNlY2YwZjE7fVxyXG4gIC5saWdodC1ncmV5MntiYWNrZ3JvdW5kLWNvbG9yOiNlY2YwZjE7fVxyXG4gIC5kYXJrLWJsdWV7YmFja2dyb3VuZC1jb2xvcjojMjIzMTNmO31cclxuICAuZ3JleS1ibHVle2JhY2tncm91bmQtY29sb3I6IzZjN2E4OTt9XHJcbiAgLmJsYWNre2JhY2tncm91bmQtY29sb3I6IzMzMzt9XHJcbiAgLnN0dXBpZC1ibHVle2JhY2tncm91bmQtY29sb3I6IzE5YjVmZTt9XHJcblxyXG5cclxuXHJcbiAgLnZpZGVvLWN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC52aWRlby1jOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OicnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "ht/g":
/*!***************************************************************************!*\
  !*** ./src/app/components/view-multimedia/view-multimedia.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LW11bHRpbWVkaWEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _filtro_country_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filtro-country.pipe */ "uQTj");
/* harmony import */ var _adrx_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adrx.pipe */ "CKgm");
/* harmony import */ var _max_length_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./max-length.pipe */ "wDhe");






let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_filtro_country_pipe__WEBPACK_IMPORTED_MODULE_3__["FiltroCountryPipe"], _adrx_pipe__WEBPACK_IMPORTED_MODULE_4__["AdrxPipe"], _max_length_pipe__WEBPACK_IMPORTED_MODULE_5__["MaxLengthPipe"]],
        exports: [_filtro_country_pipe__WEBPACK_IMPORTED_MODULE_3__["FiltroCountryPipe"], _adrx_pipe__WEBPACK_IMPORTED_MODULE_4__["AdrxPipe"], _max_length_pipe__WEBPACK_IMPORTED_MODULE_5__["MaxLengthPipe"]],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]
        ]
    })
], PipesModule);



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cert_cert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cert/cert.component */ "u/Qc");
/* harmony import */ var _ver_foto_ver_foto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ver-foto/ver-foto.component */ "9UZi");
/* harmony import */ var _conctact_conctact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conctact/conctact.component */ "ztsL");
/* harmony import */ var _infolot_infolot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infolot/infolot.component */ "fXUF");
/* harmony import */ var _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./multimedia/multimedia.component */ "6Wfc");
/* harmony import */ var _view_cert_view_cert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-cert/view-cert.component */ "770w");
/* harmony import */ var _view_multimedia_view_multimedia_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-multimedia/view-multimedia.component */ "t8jK");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");












let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _cert_cert_component__WEBPACK_IMPORTED_MODULE_4__["CertComponent"],
            _ver_foto_ver_foto_component__WEBPACK_IMPORTED_MODULE_5__["VerFotoComponent"],
            _conctact_conctact_component__WEBPACK_IMPORTED_MODULE_6__["ConctactComponent"],
            _infolot_infolot_component__WEBPACK_IMPORTED_MODULE_7__["InfolotComponent"],
            _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_8__["MultimediaComponent"],
            _view_cert_view_cert_component__WEBPACK_IMPORTED_MODULE_9__["ViewCertComponent"],
            _view_multimedia_view_multimedia_component__WEBPACK_IMPORTED_MODULE_10__["ViewMultimediaComponent"]
        ],
        exports: [
            _cert_cert_component__WEBPACK_IMPORTED_MODULE_4__["CertComponent"],
            _ver_foto_ver_foto_component__WEBPACK_IMPORTED_MODULE_5__["VerFotoComponent"],
            _conctact_conctact_component__WEBPACK_IMPORTED_MODULE_6__["ConctactComponent"],
            _infolot_infolot_component__WEBPACK_IMPORTED_MODULE_7__["InfolotComponent"],
            _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_8__["MultimediaComponent"],
            _view_cert_view_cert_component__WEBPACK_IMPORTED_MODULE_9__["ViewCertComponent"],
            _view_multimedia_view_multimedia_component__WEBPACK_IMPORTED_MODULE_10__["ViewMultimediaComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "jBNp":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-multimedia/view-multimedia.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding: 0px 20px;padding-bottom: 50px; overflow-y: scroll;display: block;\">\n  <ion-icon name=\"chevron-back-outline\" (click)=\"closeModal()\" style=\"font-size: 20px;\n  color: #db7078;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 20px;\">\n  </ion-icon>\n\n  <p style=\"color: #d36970e8;\n  text-align: center;\n  font-weight: 700;\n  font-size: 17px;\n  margin-top: 18px;\">{{data.name}}</p>\n\n\n  <ion-slides #slidesDatos class=\"slide-identificacion\" style=\"position: relative;\" pager=\"true\" [options]=\"slideOpts\"\n    (ionSlideNextEnd)=\"verSlide()\" (ionSlidePrevEnd)=\"verSlide()\" (ionSlideReachEnd)=\"endSlide()\">\n\n\n    <ion-slide *ngFor=\"let imgFile of data.value.files\">\n     <div style=\"padding: 10px;\">\n      <img style=\"\n      object-fit: cover;\n      border-radius: 5px;\n      box-shadow: 0 0px 5px rgb(213 213 213 / 53%);\" [src]=\"imgFile.url\">\n     </div>\n   \n\n    </ion-slide>\n\n\n  </ion-slides>\n\n\n\n<!-- \n<div style=\"text-align: center;\">\n  <img src=\"../../../../assets/images/3-cert-prb.jpg\" alt=\"\" style=\"    opacity: 0.95;\n    width: 230px;\n    object-fit: cover;\n    border-radius: 15px;\n    box-shadow: 0 1px 18px rgb(179 179 179 / 58%);\">\n</div> -->\n\n\n<div style=\"position: relative;\">\n<!--   <p style=\"color: #5e5e5e;\n  font-weight: 800;\n  margin: 0;\n  margin-top: 20px;\n  font-size: 20px; padding-right: 60px;\">{{data.name}} </p>\n -->\n<p style=\"    color: #5e5e5e;\nfont-weight: 600;\nmargin: 0;\nmargin-top: 20px;\nfont-size: 20px;\npadding-right: 20px;\nline-height: 1;\">{{data.name}} </p>\n\n<!--   <div style=\"    right: 5px;\n    position: absolute;\n    top: -10px;\n    text-align: center;\">\n    <ion-icon name=\"heart\" style=\"transform: translateY(1.5px);\n      background: #d36970e8;\n      color: white;\n      padding: 8px;\n      font-size: 24px;\n      border-radius: 50px;\"></ion-icon>\n    <p style=\"margin: 0;\n      line-height: 0.8;\n      font-size: 12px;\n      font-weight: 800;\">120</p>\n  </div> -->\n\n  <p style=\"font-size: 14px;\n  color: #858585;\">Se adjunto {{data.value.files.length}} imagenes</p>\n\n<!--   <p style=\"color: #525252;\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aspernatur\n    exercitationem dolore... <span style=\"font-weight: 700;\">Leer más</span></p> -->\n\n    <p style=\"color: #8d8d8d;\n    font-size: 14px;margin-top: 10px;\">{{data.value.description}} <!-- <span style=\"font-weight: 700;\">Leer más</span> --></p>\n\n\n<!--   <p style=\"    font-size: 16px;\n    font-weight: 600;\n    margin: 0;\n    margin-top: 25px;\">Información de certificado</p>\n\n  <p style=\"    font-weight: 600;\n    font-size: 14px;\n    margin: 0;\n    font-style: italic;\n    margin-top: 5px;\">Tipo</p>\n  <p style=\"color: #525252;\">Sanitario</p> -->\n</div>\n\n\n\n</div>");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let StorageService = class StorageService {
    constructor(route) {
        this.route = route;
        /* VARIABLE PARA EL CÓDIGO DEL LOTE
         */
        this.code = null;
        this.initSesion = true;
        this.moneda = null;
        this.datos = {
            PIN: '',
            ADDRESS: '',
            DID: '',
            privateKey: '',
            publicKey: '',
            PHOTO: '',
            PHOTO_MIN: '',
            creadentialSignature: '',
            NAME: '',
            DNI: '',
            ALIAS: '',
            EMAIL: ''
        };
        this.userSesion = {
            publicKey: ''
        };
    }
    initVarSis() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.userSesion = (yield this.getLocalStorage('USER')) || { publicKey: '' };
                resolve(true);
            }));
        });
    }
    resetData() {
        this.datos = {
            PIN: '',
            ADDRESS: '',
            DID: '',
            privateKey: '',
            publicKey: '',
            PHOTO: '',
            PHOTO_MIN: '',
            creadentialSignature: '',
            NAME: '',
            DNI: '',
            ALIAS: '',
            EMAIL: ''
        };
    }
    validarAuth() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = yield this.getLocalStorage('USER');
            if (data)
                return Promise.resolve(true);
            return Promise.resolve(false);
        });
    }
    getLocalStorage(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let item = (yield Storage.get({ key: name })) || null;
            if (!item)
                return null;
            return JSON.parse(item.value);
        });
    }
    setLocalStorage(name, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.set({ key: name, value: JSON.stringify(data) });
        });
    }
    remove(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.remove({ key: name });
        });
    }
    clearStorage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.clear();
        });
    }
};
StorageService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "njzu":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let DataService = class DataService {
    constructor() {
        this.dataSend = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    getData() {
        return this.dataSend.asObservable();
    }
};
DataService.ctorParameters = () => [];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "t8jK":
/*!*************************************************************************!*\
  !*** ./src/app/components/view-multimedia/view-multimedia.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewMultimediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMultimediaComponent", function() { return ViewMultimediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_multimedia_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-multimedia.component.html */ "jBNp");
/* harmony import */ var _view_multimedia_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-multimedia.component.scss */ "ht/g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ViewMultimediaComponent = class ViewMultimediaComponent {
    constructor(_modal) {
        this._modal = _modal;
        this.initEnd = false;
        this.indexSlide = 0;
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            speed: 700,
            autoplay: {
                delay: 4000,
            },
        };
    }
    ngOnInit() {
        console.log('DATAAAA1', this.data);
    }
    verSlide() {
        this.slidesDatos.getActiveIndex().then(res => {
            if (!this.initEnd)
                this.indexSlide = res;
            this.initEnd = false;
        });
    }
    endSlide() {
        this.initEnd = true;
        this.indexSlide = 2;
    }
    closeModal() {
        this._modal.dismiss({ confirm: false });
    }
    confirm() {
        this._modal.dismiss({ confirm: true });
    }
};
ViewMultimediaComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ViewMultimediaComponent.propDecorators = {
    slidesDatos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slidesDatos', { static: false },] }]
};
ViewMultimediaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-multimedia',
        template: _raw_loader_view_multimedia_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_multimedia_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewMultimediaComponent);



/***/ }),

/***/ "u/Qc":
/*!***************************************************!*\
  !*** ./src/app/components/cert/cert.component.ts ***!
  \***************************************************/
/*! exports provided: CertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertComponent", function() { return CertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cert.component.html */ "Om6x");
/* harmony import */ var _cert_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cert.component.scss */ "MJPf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






let CertComponent = class CertComponent {
    constructor(_modal) {
        this._modal = _modal;
        this.urlImg = '';
    }
    ngOnInit() {
        let endPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url.substr(0, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url.length - 1); //quitar el "/"
        this.urlImg = endPoint + this.credential.data.document.imgfile.url;
    }
    closeModal() {
        this._modal.dismiss();
    }
    confirm() {
        this._modal.dismiss({ confirm: true });
    }
};
CertComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
CertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cert',
        template: _raw_loader_cert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cert_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CertComponent);



/***/ }),

/***/ "uQTj":
/*!**********************************************!*\
  !*** ./src/app/pipes/filtro-country.pipe.ts ***!
  \**********************************************/
/*! exports provided: FiltroCountryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroCountryPipe", function() { return FiltroCountryPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let FiltroCountryPipe = class FiltroCountryPipe {
    transform(text, count) {
        if (count)
            return text.substr(0, count) + '...';
        if (text.length > 10)
            return text.substr(0, 10) + '...';
        else
            return text;
    }
};
FiltroCountryPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'maxText'
    })
], FiltroCountryPipe);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        /*    canActivate: [noLoginGuard], */
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        /*     canActivate: [AuthGuard], */
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: 'cert',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-certificado-certificado-module */ "pages-certificado-certificado-module").then(__webpack_require__.bind(null, /*! ./pages/certificado/certificado.module */ "Xfnz")).then(m => m.CertificadoPageModule)
    },
    {
        path: 'etapa',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-etapa-etapa-module */ "pages-etapa-etapa-module").then(__webpack_require__.bind(null, /*! ./pages/etapa/etapa.module */ "OHkR")).then(m => m.EtapaPageModule)
    },
    {
        path: 'code',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-codelote-codelote-module */ "pages-codelote-codelote-module").then(__webpack_require__.bind(null, /*! ./pages/codelote/codelote.module */ "dCQ6")).then(m => m.CodelotePageModule)
    },
    {
        path: 'notfound',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-notfound-notfound-module */ "pages-notfound-notfound-module").then(__webpack_require__.bind(null, /*! ./pages/notfound/notfound.module */ "GSxL")).then(m => m.NotfoundPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "wDhe":
/*!******************************************!*\
  !*** ./src/app/pipes/max-length.pipe.ts ***!
  \******************************************/
/*! exports provided: MaxLengthPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthPipe", function() { return MaxLengthPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let MaxLengthPipe = class MaxLengthPipe {
    transform(text, count) {
        /*    if (count) return text.substr(0, count) + '...';
           if (text.length > 10) return text.substr(0, 10) + '...';
           else return text; */
        if (count)
            return text.substr(0, count) + '...';
        if (text.length >= count)
            return text;
        else
            return text.substr(0, count) + '...';
    }
};
MaxLengthPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'maxLength'
    })
], MaxLengthPipe);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "ztsL":
/*!***********************************************************!*\
  !*** ./src/app/components/conctact/conctact.component.ts ***!
  \***********************************************************/
/*! exports provided: ConctactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConctactComponent", function() { return ConctactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_conctact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./conctact.component.html */ "KqG2");
/* harmony import */ var _conctact_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conctact.component.scss */ "5wh2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-service.service */ "njzu");





let ConctactComponent = class ConctactComponent {
    constructor(_data) {
        this._data = _data;
        this.credSub = {
            portada: '',
            producers: [],
            sections: []
        };
        this.dataContact = {
            "businessName": {
                "width_bootstrap": "col-6",
                "name": "Descripción del negocio",
                "type": "input",
                "code": "businessName",
                "value": ""
            },
            "businessDesc": {
                "width_bootstrap": "col-6",
                "name": "Descripción del negocio",
                "type": "input",
                "code": "businessDesc",
                "value": ""
            },
            "logoUrl": {
                "width_bootstrap": "col-6",
                "name": "Logo de negocio",
                "type": "input",
                "code": "logoUrl",
                "value": ""
            },
            "facebook": {
                "width_bootstrap": "col-6",
                "name": "Facebook",
                "type": "input",
                "code": "facebook",
                "value": ""
            },
            "instagram": {
                "width_bootstrap": "col-6",
                "name": "Instagram",
                "type": "input",
                "code": "instagram",
                "value": ""
            },
            "linkedin": {
                "width_bootstrap": "col-6",
                "name": "Linkedin",
                "type": "input",
                "code": "linkedin",
                "value": ""
            },
            "youtube": {
                "width_bootstrap": "col-6",
                "name": "Youtube",
                "type": "input",
                "code": "youtube",
                "value": ""
            },
            "correo": {
                "width_bootstrap": "col-6",
                "name": "Correo",
                "type": "input",
                "code": "correo",
                "value": "prueba@gmai.com"
            },
            "web": {
                "width_bootstrap": "col-6",
                "name": "Pagina web oficial",
                "type": "input",
                "code": "web",
                "value": "http://www.nescafe.com.pe/"
            }
        };
    }
    ngOnInit() {
        console.log('data', this.data);
        console.log('user', this.user);
        this._data.getData().subscribe(res => {
            if (res) {
                this.data = res;
                this.credSub = this.data.data.dataCred.credential.verifiableCredential[0].credentialSubject;
                console.log('credSub', this.credSub);
                this.init();
            }
        });
    }
    init() {
        let sections = this.data.data.dataCred.credential.verifiableCredential[0].credentialSubject.sections;
        let jsonData = {};
        sections.forEach(sec => {
            if (sec.section.code == 'contact') {
                for (let index = 0; index < sec.fields.length; index++) {
                    const field = sec.fields[index];
                    jsonData[field.code] = field;
                    if (index == (sec.fields.length - 1)) {
                        this.dataContact = jsonData;
                        console.log('this.dataContact', this.dataContact);
                    }
                }
            }
        });
        for (let index = 0; index < sections.length; index++) {
            let sec = sections[index];
            console.log('credSub', this.credSub);
        }
    }
};
ConctactComponent.ctorParameters = () => [
    { type: src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
ConctactComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ConctactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-conctact',
        template: _raw_loader_conctact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_conctact_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConctactComponent);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map