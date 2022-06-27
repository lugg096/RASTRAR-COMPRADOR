(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content style=\"--background: #FFF5F5;\">\n\n  <img src=\"https://rastrar.com/assets/img/bg/1.jpg\" class=\"bg\" style=\"width: 100%;\n  height: 100%;\" alt=\"\">\n\n  <div style=\"background: linear-gradient(\n    -47deg, #eb656e 0%, #bf3942 100%);height: 100%;width: 100%;opacity: 0.94;position: absolute;\">\n  </div>\n\n\n  <div style=\"    color: #fff!important;position: absolute;\n  width: 580px;\n  right: 15%;\n  top: 12%;font-size: 15px;\"> \n    <h1 style=\"visibility: visible;\n    animation-delay: 0.15s;\n    animation-name: fadeInUp;font-size: 2.6em;\n    font-weight: 700;\n    line-height: 1.2;\">Plataforma Blockchain para asegurar la trazabilidad digital.</h1>\n    <p style=\"margin-bottom: 1.5rem!important;margin-top: 1.5rem!important;\">Rastreamos el recorrido de un producto para\n      consumo humano a través de toda la cadena de suministro: producción,\n      procesamiento, distribución y comercialización.</p>\n\n    <b class=\"text-white\" style=\"font-weight: 700;\">Caracteristicas:</b>\n    <ul class=\"text-white list-use\" style=\"display: block;\n    list-style-type: disc;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n    padding-inline-start: 40px;    margin: 0;\n    padding: 0;    padding-left: 1em;\">\n      <li style=\"list-style: circle;\">Alineado al ISO22005:2008.</li>\n      <li style=\"list-style: circle;\">Utilizamos certificación digital acreditada basadas en credenciales verifiables,\n        NFTs y certificación\n        Blockchain</li>\n      <li style=\"list-style: circle;\">Rastreo de personas, mercaderías, medicamentos, productos agricolas o ganaderos.\n      </li>\n    </ul>\n\n  </div>\n\n\n  <svg style=\"position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\" viewBox=\"0 0 1920 310\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"svg replaced-svg\">\n    <defs></defs>\n    <g id=\"shapeHome\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n      <g id=\"shapeHome\" transform=\"translate(0.000000, -554.000000)\" fill=\"#FFFFFF\">\n        <path\n          d=\"M-3,551 C186.257589,757.321118 319.044414,856.322454 395.360475,848.004007 C509.834566,835.526337 561.525143,796.329212 637.731734,765.961549 C713.938325,735.593886 816.980646,681.910577 1035.72208,733.065469 C1254.46351,784.220361 1511.54925,678.92359 1539.40808,662.398665 C1567.2669,645.87374 1660.9143,591.478574 1773.19378,597.641868 C1848.04677,601.75073 1901.75645,588.357675 1934.32284,557.462704 L1934.32284,863.183395 L-3,863.183395\"\n          id=\"shapeHome\"></path>\n      </g>\n    </g>\n  </svg>\n\n  <div class=\"slides01\" style=\"box-shadow: var(--shadow-black-200);padding:  0;overflow-y: scroll;\">\n<!-- \n    <div style=\"overflow-y: scroll;display: block;--background: var(--color-background-2);\"> -->\n\n\n      <div class=\"context\" style=\"height: 100%;\">\n        <!--   <div class=\"context\" style=\"height: 100%;\"> -->\n        <div class=\"viewport\">\n          <div class=\"canvas\" style=\"position: relative;\">\n    \n            <div [ngClass]=\"page!='info'?'quitar' :null\">\n              <app-infolot [data]=\"data\" [user]=\"user\"></app-infolot>\n            </div>\n    \n    \n            <div [ngClass]=\"page!='contact'?'quitar' :null\">\n              <app-conctact [data]=\"data\" [user]=\"user\"></app-conctact>\n            </div>\n    \n            <div [ngClass]=\"page!='process'?'quitar' :null\">\n              <app-multimedia [data]=\"data\" [user]=\"user\"> </app-multimedia>\n            </div>\n    \n            <div class=\"centered\" style=\"width: 100%;  background: #484848;\">\n              <div class=\"row\">\n    \n                <div class=\"col-4 m-0 p-0 nav-bottom \" (click)=\"page='info'\">\n                  <!--  <div class=\"nav-cont\" [ngClass]=\"page=='info'?'select-nav' :null\"> -->\n                  <div class=\"nav-cont\" [ngClass]=\"page=='info'?'select-nav':null\">\n                    <ion-icon name=\"cart-outline\" style=\"font-size: 22px;\"></ion-icon> <br>\n                    <span style=\"font-size: 10px;letter-spacing: 0.6px;\">Información del producto</span>\n                  </div>\n                </div>\n    \n    \n    \n                <div class=\"col-4 m-0 p-0 nav-bottom\" (click)=\"permisoLogin('contact')\">\n                  <div class=\"nav-cont\" [ngClass]=\"page=='contact'?'select-nav':null\">\n                    <ion-icon name=\"rocket-outline\" style=\"font-size: 22px;\"></ion-icon>\n                    <br>\n                    <span style=\"font-size: 10px;letter-spacing: 0.6px;\">Contacto de empresa</span>\n                  </div>\n                </div>\n    \n    \n    \n    \n                <div class=\"col-4 m-0 p-0 nav-bottom\" (click)=\"permisoLogin('process')\">\n                  <div class=\"nav-cont\" [ngClass]=\"page=='process'?'select-nav':null\">\n                    <ion-icon name=\"layers-outline\" style=\"font-size: 22px;\"></ion-icon> <br>\n                    <span style=\"font-size: 10px;letter-spacing: 0.6px;\"> Publicaciones</span>\n                  </div>\n    \n                </div>\n              </div>\n    \n            </div>\n    \n          </div>\n        </div>\n      </div>\n    \n      <div style=\"background: rgb(72 72 72);    padding: 40px 50px 30px;text-align: center;\">\n    \n        <div class=\"row\">\n          <div class=\"col-6 p-0 m-0 pr-2\" style=\"align-self: center;border-right: 1px solid #ffffff66;\">\n            <img src=\"../../../assets/images/logo-white.svg\" style=\"height: 40px;\" alt=\"\">\n          </div>\n          <div class=\"col-6 p-0 m-0 pl-2\" style=\"align-self: center;\">\n            <img src=\"../../assets/images/logo-lacchain-footer.png\" alt=\"\">\n          </div>\n        </div>\n    \n        <p style=\"margin: 35px 10px 25px;\n        text-align: center;\n        color: #ffffff;\n        font-weight: 300;\n        font-size: 13px;;\">Rastrar® utiliza tecnologías de vanguardia para construir un puente entre los productores, los\n          consumidores y todos los demás. Nuestra misión es aportar transparencia a la procedencia de los productos,\n          ayudando a crear confianza en la cadena de suministro.</p>\n    \n        <div class=\"btn-1\">\n          Más información\n        </div>\n    \n        <div class=\"footer\">\n    \n    \n          <ul>\n            <li>\n              <a href=\"https://www.facebook.com/\" target=\"_blank\">\n                <ion-icon name=\"logo-facebook\"></ion-icon>\n              </a>\n            </li>\n    \n            <li>\n              <a href=\"https://www.facebook.com/\" target=\"_blank\">\n                <ion-icon name=\"logo-twitter\"></ion-icon>\n              </a>\n            </li>\n    \n            <li>\n              <a href=\"https://www.facebook.com/\" target=\"_blank\">\n                <ion-icon name=\"logo-instagram\"></ion-icon>\n              </a>\n            </li>\n    \n    \n    \n          </ul>\n    \n          <p style=\"    font-size: 12px;\n          color: white;\n          margin: 0;\n          margin-top: 20px;\">© 2021 Rastrar®</p>\n    \n        </div>\n      </div>\n   <!--  </div> -->\n\n  </div>\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".aspect-tab {\n  position: relative;\n  width: 100%;\n  max-width: 1000px;\n  margin: 10px auto;\n  border-radius: 4px;\n  background-color: white;\n  box-shadow: 0 0 0 1px #ececec;\n  opacity: 1;\n  transition: box-shadow 0.2s, opacity 0.4s;\n}\n.aspect-tab:hover {\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.11);\n}\n.aspect-input {\n  display: none;\n}\n.aspect-input:checked ~ .aspect-content + .aspect-tab-content {\n  max-height: 3000px;\n}\n.aspect-input:checked ~ .aspect-content:after {\n  transform: rotate(0);\n}\n.aspect-label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  max-height: 80px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 0;\n  z-index: 1;\n  cursor: pointer;\n}\n.aspect-label:hover ~ .aspect-content:after {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTI0IDI0SDBWMGgyNHoiIG9wYWNpdHk9Ii44NyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM1NTZBRUEiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE1Ljg4IDE1LjI5TDEyIDExLjQxbC0zLjg4IDMuODhhLjk5Ni45OTYgMCAxIDEtMS40MS0xLjQxbDQuNTktNC41OWEuOTk2Ljk5NiAwIDAgMSAxLjQxIDBsNC41OSA0LjU5Yy4zOS4zOS4zOSAxLjAyIDAgMS40MS0uMzkuMzgtMS4wMy4zOS0xLjQyIDB6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=\");\n}\n.aspect-content {\n  position: relative;\n  display: block;\n  height: 80px;\n  margin: 0;\n  padding: 0 87px 0 30px;\n  font-size: 0;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.aspect-content:before, .aspect-content:after {\n  content: \"\";\n  display: inline-block;\n  vertical-align: middle;\n}\n.aspect-content:before {\n  height: 100%;\n}\n.aspect-content:after {\n  position: absolute;\n  width: 24px;\n  height: 100%;\n  right: 30px;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTI0IDI0SDBWMGgyNHoiIG9wYWNpdHk9Ii44NyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNBOUFDQUYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE1Ljg4IDE1LjI5TDEyIDExLjQxbC0zLjg4IDMuODhhLjk5Ni45OTYgMCAxIDEtMS40MS0xLjQxbDQuNTktNC41OWEuOTk2Ljk5NiAwIDAgMSAxLjQxIDBsNC41OSA0LjU5Yy4zOS4zOS4zOSAxLjAyIDAgMS40MS0uMzkuMzgtMS4wMy4zOS0xLjQyIDB6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=\");\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: rotate(180deg);\n}\n.aspect-name {\n  display: inline-block;\n  width: 75%;\n  /* margin-left: 16px; */\n  font-size: 30px;\n  font-weight: 500;\n  color: #242a32;\n  white-space: normal;\n  text-align: left;\n  vertical-align: middle;\n}\n.all-opinions,\n.aspect-name {\n  font-size: 14px;\n  line-height: 22px;\n}\n.all-opinions {\n  color: #5d5d5d;\n  text-align: left;\n}\n.aspect-content + .aspect-tab-content {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.4s;\n}\n.aspect-content > div,\n.aspect-stat > div {\n  display: inline-block;\n}\n.aspect-content > div {\n  vertical-align: middle;\n}\n.aspect-info {\n  width: 60%;\n  white-space: nowrap;\n  font-size: 0;\n}\n.aspect-info:before {\n  content: \"\";\n  display: inline-block;\n  height: 44px;\n  vertical-align: middle;\n}\n.aspect-tab-content {\n  background-color: #f9f9f9;\n  font-size: 0;\n  text-align: justify;\n}\n.sentiment-wrapper {\n  padding: 10px 10px 10px;\n}\n.sentiment-wrapper > div {\n  display: inline-block;\n  width: 33.3%;\n  max-width: 390px;\n  padding: 0 5px;\n  box-sizing: border-box;\n  vertical-align: top;\n  cursor: default;\n}\n.sentiment-wrapper > div > div {\n  width: 100%;\n  padding: 16px 24px 20px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ececec;\n  text-align: left;\n}\n.opinion-header {\n  position: relative;\n  width: 100%;\n  margin: 0 0 24px;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 20px;\n  color: #242a32;\n  text-transform: capitalize;\n}\n.opinion-header > span:nth-child(2) {\n  position: absolute;\n  right: 0;\n}\n.opinion-header + div > span {\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 22px;\n  color: #363636;\n}\n@media screen and (max-width: 800px) {\n  .aspect-label {\n    max-height: 102px;\n  }\n\n  .aspect-content {\n    height: auto;\n    padding: 10px 87px 10px 30px;\n  }\n  .aspect-content:before {\n    display: none;\n  }\n  .aspect-content:after {\n    top: 0;\n  }\n\n  .aspect-content > div {\n    display: block;\n    width: 100%;\n  }\n}\n@media screen and (max-width: 750px) {\n  .sentiment-wrapper > div {\n    display: block;\n    width: 100%;\n    max-width: 100%;\n  }\n\n  .sentiment-wrapper > div:not(:first-child) {\n    margin-top: 10px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .aspect-label {\n    max-height: 140px;\n  }\n\n  .aspect-stat > div {\n    display: block;\n    width: 100%;\n  }\n\n  .all-opinions {\n    margin-bottom: 10px;\n  }\n\n  .all-opinions + div > span:first-child {\n    margin: 0;\n  }\n}\n.input {\n  font-size: 11px;\n  color: #8b898f;\n  font-weight: 500;\n}\n.row_container {\n  display: flex;\n}\n.icon-nav-arrow {\n  color: #f7f8fb;\n  font-size: 25px;\n  padding: 15px 20px;\n}\n.title {\n  text-align: left;\n  color: #f7f8fb;\n  font-size: 17px;\n}\n/* ********************** */\n.context {\n  /* width: 300px; */\n  height: 100%;\n  /* margin: 100px; */\n  background: white;\n  transform: translateZ(0);\n  /*   overflow: scroll; */\n}\n.viewport {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n.centered {\n  z-index: 30000;\n  position: fixed;\n  /*  left: 50%; */\n  bottom: 0px;\n  /*   transform: translateX(-50%); */\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: 0px;\n  margin-left: 0px;\n}\n.inp1 {\n  color: #787878 !important;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n}\n.inpValue {\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1.3;\n  color: #212529;\n}\n.nav.tmf-navigation-footer {\n  position: sticky;\n  z-index: 20;\n  bottom: 0;\n  width: 100%;\n  background-color: #484848;\n  padding: 0 0 5px;\n  margin-top: 50px;\n}\n.mm0 {\n  color: #fd7575;\n}\n.mm1 {\n  color: #20e24a;\n}\n.btn-1 {\n  display: inline-block;\n  text-decoration: none;\n  background-color: transparent;\n  padding: 15px 20px;\n  /* border: none; */\n  color: white;\n  border-radius: 15px;\n  border: 1px solid white;\n  font-size: 12px;\n  box-shadow: var(--shadow-black-300);\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.footer {\n  margin-top: 50px;\n}\n.footer ul {\n  justify-content: center;\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.footer ul li {\n  margin: 0 15px;\n}\n.footer ul li a {\n  color: white;\n  text-decoration: none;\n  background-color: transparent;\n}\n.footer ul li a ion-icon {\n  font-size: 30px;\n}\n.nav-bottom {\n  background: #484848;\n  padding: 1;\n  text-align: center;\n  line-height: 1;\n}\n.nav-bottom .nav-cont {\n  border-radius: 0 0 12px 12px;\n  margin: 0 2px 5px 2px;\n  position: relative;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);\n  padding: 5px;\n  padding-bottom: 15px;\n  padding-top: 8px;\n  min-height: 76px;\n  color: white;\n}\n.select-nav {\n  background: white;\n  color: #484848 !important;\n}\n.quitar {\n  display: none;\n}\n.btn-5 {\n  text-decoration: none;\n  background: linear-gradient(90deg, #0261c3 10%, #5c67ec 100%);\n  padding: 15px 50px;\n  border-radius: 30px;\n  color: #fff;\n  font-size: 11px;\n  box-shadow: var(--shadow-black-100);\n  font-weight: 500;\n}\n/* ****************** */\n.bg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  object-fit: cover;\n}\n.slides01 {\n  height: 650px;\n  max-height: 90%;\n  width: 380px;\n  min-width: 25%;\n  background: #fff;\n  margin-top: 3%;\n  border-radius: 10px;\n  position: absolute;\n  left: 10%;\n}\n.menu-header-bg {\n  top: 30%;\n  position: absolute;\n  height: 50%;\n  width: 480px;\n  background: linear-gradient(-47deg, #eb656e 0%, #bf3942 100%);\n  box-shadow: 0px 1px 20px rgba(94, 94, 94, 0.25);\n  transform: rotate(-40deg);\n  border-radius: 16%;\n  margin-left: -320px;\n  margin-bottom: 25px;\n  z-index: 1;\n}\n.menu-header-bg div {\n  width: 100%;\n  height: 100%;\n}\n.menu-header-bg div img {\n  width: 132px;\n  position: absolute;\n  right: 25px;\n  bottom: 70px;\n  transform: rotate(40deg);\n}\n@media screen and (max-width: 1200px) {\n  .slides01 {\n    left: 20%;\n  }\n}\n@media screen and (max-width: 600px) {\n  .title {\n    font-size: 25px;\n  }\n\n  .subtitle {\n    font-weight: 500;\n  }\n\n  .slides01 {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    left: 0;\n    border-radius: 0px;\n    max-height: 100%;\n  }\n\n  .img-left {\n    display: none !important;\n  }\n}\n.item-input {\n  --background: transparent;\n  padding: 0px 0;\n  border: 2px solid #e1e1e1b8;\n  border-radius: 5px;\n}\n.item-input ion-label {\n  flex: 0 0 100px;\n  min-width: 40px;\n  max-width: 40px;\n  text-align: center;\n}\n.item-input ion-label ion-icon {\n  font-size: 16px;\n  color: #c3c3c3;\n  transform: translateY(2px);\n}\n.item-input ion-input {\n  color: var(--black-400);\n  font-size: 13px;\n}\n.btn-3 {\n  display: inline-block;\n  text-decoration: none;\n  background-image: linear-gradient(to right, #da5d67, #d75a64, #d45861, #d1555f, #ce525c, #cc5059, #c94d57, #c74b54, #c44951, #c1464f, #bf444c, #bc414a);\n  padding: 15px 70px;\n  border: none;\n  border-radius: 30px;\n  color: #ffffffdc;\n  font-size: 13px;\n  box-shadow: var(--shadow-black-200);\n  font-weight: 500;\n}\n.btn-3 ion-icon {\n  font-size: 16px;\n  transform: translateY(5px);\n  margin-right: 3px;\n  margin-top: -8px;\n}\n.btn-3:hover {\n  color: #fff;\n  text-decoration: none;\n}\n.btn-2 {\n  display: inline-block;\n  text-decoration: none;\n  background: #ffffff8a;\n  padding: 15px 70px;\n  border-radius: 30px;\n  border: 1px solid #959595c7;\n  font-size: 12px;\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);\n  font-weight: 600;\n  color: #484848eb;\n}\n.btn-2:hover {\n  text-decoration: none;\n  color: #0052ffad;\n}\n.check-terms {\n  --background: transparent;\n}\n.check-terms ion-label {\n  font-size: 12px !important;\n  color: #787777 !important;\n}\n.check-terms ion-label a {\n  color: #787777;\n  text-decoration: underline;\n  font-weight: 700;\n}\n.check-terms ion-checkbox {\n  margin-right: 12px;\n  --background-checked: var(--tertiary);\n  --border-color-checked: var(--tertiary);\n  --border-color: #d3d3d3;\n}\n.btn-disable {\n  background: linear-gradient(90deg, #e3c9c9 10%, #e3b5b5 100%);\n  color: #fff;\n  box-shadow: var(--shadow-black-100);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtBQVBGO0FBU0U7RUFDRSw0Q0FBQTtBQVBKO0FBVUE7RUFDRSxhQUFBO0FBUEY7QUFTQTtFQUNFLGtCQUFBO0FBTkY7QUFRQTtFQUNFLG9CQUFBO0FBTEY7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFKRjtBQUtFO0VBQ0UsMmpCQUFBO0FBSEo7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSEY7QUFJRTtFQUVFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBSEo7QUFLRTtFQUNFLFlBQUE7QUFISjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwyakJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFISjtBQU1BO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQWxGYTtFQW1GYixtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFIRjtBQU1BOztFQUVFLGVBQUE7RUFDQSxpQkFBQTtBQUhGO0FBS0E7RUFDRSxjQTVGUztFQTZGVCxnQkFBQTtBQUZGO0FBSUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQURGO0FBR0E7O0VBRUUscUJBQUE7QUFBRjtB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QkFBQTtBQVFGO0FBTkU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVFKO0FBUEk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBU047QUFMRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQU9KO0FBSEE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUpBQUE7RUFlQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFSRjtBQVdFO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVRKO0FBYUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFWRjtBQWFBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVZGO0FBYUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBVkY7QUFhQTtFQUNFLHlCQUFBO0FBVkY7QUFXRTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7QUFUSjtBQVVJO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFSTjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsdUJBQUE7QUFUSjtBQWFBO0VBQ0UsNkRBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQVZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNpcmNsZS1ncmF5OiAjZTRlNGU0O1xuJGhlYWRlci1ibGFjazogIzI0MmEzMjtcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjNmZjYWU3O1xuJHRhYi10ZXh0OiAjNWQ1ZDVkO1xuJHdoaXRlOiAjZmZmO1xuJHJldmlld3MtdGV4dC1ibGFjazogIzM2MzYzNjtcbiR3aGl0ZS1saWdodC1ncmF5OiAjZjlmOWY5O1xuXG4uYXNwZWN0LXRhYiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMjM2LCAyMzYsIDIzNiwgMSk7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycywgb3BhY2l0eSAwLjRzO1xuXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xuICB9XG59XG4uYXNwZWN0LWlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5hc3BlY3QtaW5wdXQ6Y2hlY2tlZCB+IC5hc3BlY3QtY29udGVudCArIC5hc3BlY3QtdGFiLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAzMDAwcHg7XG59XG4uYXNwZWN0LWlucHV0OmNoZWNrZWQgfiAuYXNwZWN0LWNvbnRlbnQ6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbn1cbi5hc3BlY3QtbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpob3ZlciB+IC5hc3BlY3QtY29udGVudDphZnRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l5TkNJZ2FHVnBaMmgwUFNJeU5DSWdkbWxsZDBKdmVEMGlNQ0F3SURJMElESTBJajRLSUNBZ0lEeG5JR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUSTBJREkwU0RCV01HZ3lOSG9pSUc5d1lXTnBkSGs5SWk0NE55SXZQZ29nSUNBZ0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNMU5UWkJSVUVpSUdacGJHd3RjblZzWlQwaWJtOXVlbVZ5YnlJZ1pEMGlUVEUxTGpnNElERTFMakk1VERFeUlERXhMalF4YkMwekxqZzRJRE11T0RoaExqazVOaTQ1T1RZZ01DQXhJREV0TVM0ME1TMHhMalF4YkRRdU5Ua3ROQzQxT1dFdU9UazJMams1TmlBd0lEQWdNU0F4TGpReElEQnNOQzQxT1NBMExqVTVZeTR6T1M0ek9TNHpPU0F4TGpBeUlEQWdNUzQwTVMwdU16a3VNemd0TVM0d015NHpPUzB4TGpReUlEQjZJaTgrQ2lBZ0lDQThMMmMrQ2p3dmMzWm5QZ289XCIpO1xuICB9XG59XG4uYXNwZWN0LWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCA4N3B4IDAgMzBweDtcbiAgZm9udC1zaXplOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gICY6YmVmb3JlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgJjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICByaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXlOQ0lnYUdWcFoyaDBQU0l5TkNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkwSURJMElqNEtJQ0FnSUR4bklHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRJMElESTBTREJXTUdneU5Ib2lJRzl3WVdOcGRIazlJaTQ0TnlJdlBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU5CT1VGRFFVWWlJR1pwYkd3dGNuVnNaVDBpYm05dWVtVnlieUlnWkQwaVRURTFMamc0SURFMUxqSTVUREV5SURFeExqUXhiQzB6TGpnNElETXVPRGhoTGprNU5pNDVPVFlnTUNBeElERXRNUzQwTVMweExqUXhiRFF1TlRrdE5DNDFPV0V1T1RrMkxqazVOaUF3SURBZ01TQXhMalF4SURCc05DNDFPU0EwTGpVNVl5NHpPUzR6T1M0ek9TQXhMakF5SURBZ01TNDBNUzB1TXprdU16Z3RNUzR3TXk0ek9TMHhMalF5SURCNklpOCtDaUFnSUNBOEwyYytDand2YzNablBnbz1cIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxufVxuLmFzcGVjdC1uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNzUlO1xuICAvKiBtYXJnaW4tbGVmdDogMTZweDsgKi9cbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogJGhlYWRlci1ibGFjaztcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmFsbC1vcGluaW9ucyxcbi5hc3BlY3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG4uYWxsLW9waW5pb25zIHtcbiAgY29sb3I6ICR0YWItdGV4dDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5hc3BlY3QtY29udGVudCArIC5hc3BlY3QtdGFiLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHM7XG59XG4uYXNwZWN0LWNvbnRlbnQgPiBkaXYsXG4uYXNwZWN0LXN0YXQgPiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYXNwZWN0LWNvbnRlbnQgPiBkaXYge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uYXNwZWN0LWluZm8ge1xuICB3aWR0aDogNjAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDA7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxufVxuXG4uYXNwZWN0LXRhYi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWxpZ2h0LWdyYXk7XG4gIGZvbnQtc2l6ZTogMDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5zZW50aW1lbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xufVxuLnNlbnRpbWVudC13cmFwcGVyID4gZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzMuMyU7XG4gIG1heC13aWR0aDogMzkwcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uc2VudGltZW50LXdyYXBwZXIgPiBkaXYgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweCAyNHB4IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5vcGluaW9uLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDI0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAkaGVhZGVyLWJsYWNrO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5vcGluaW9uLWhlYWRlciA+IHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cbi5vcGluaW9uLWhlYWRlciArIGRpdiA+IHNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogJHJldmlld3MtdGV4dC1ibGFjaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmFzcGVjdC1sYWJlbCB7XG4gICAgbWF4LWhlaWdodDogMTAycHg7XG4gIH1cbiAgLmFzcGVjdC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCA4N3B4IDEwcHggMzBweDtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIHRvcDogMDtcbiAgICB9XG4gIH1cbiAgLmFzcGVjdC1jb250ZW50ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLnNlbnRpbWVudC13cmFwcGVyID4gZGl2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlbnRpbWVudC13cmFwcGVyID4gZGl2Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuYXNwZWN0LWxhYmVsIHtcbiAgICBtYXgtaGVpZ2h0OiAxNDBweDtcbiAgfVxuICAuYXNwZWN0LXN0YXQgPiBkaXYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5hbGwtb3BpbmlvbnMge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmFsbC1vcGluaW9ucyArIGRpdiA+IHNwYW46Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uaW5wdXQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjOGI4OThmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucm93X2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pY29uLW5hdi1hcnJvdyB7XG4gIGNvbG9yOiAjZjdmOGZiO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmN2Y4ZmI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLyogKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4uY29udGV4dCB7XG4gIC8qIHdpZHRoOiAzMDBweDsgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBtYXJnaW46IDEwMHB4OyAqL1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuLyogICBvdmVyZmxvdzogc2Nyb2xsOyAqL1xufVxuLnZpZXdwb3J0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uY2VudGVyZWQge1xuICB6LWluZGV4OiAzMDAwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiAgbGVmdDogNTAlOyAqL1xuICBib3R0b206IDBweDtcbiAgLyogICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7ICovXG59XG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmlucDEge1xuICBjb2xvcjogIzc4Nzg3OCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pbnBWYWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbi5uYXYudG1mLW5hdmlnYXRpb24tZm9vdGVyIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB6LWluZGV4OiAyMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NDg0ODtcbiAgcGFkZGluZzogMCAwIDVweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm1tMCB7XG4gIGNvbG9yOiAjZmQ3NTc1O1xufVxuXG4ubW0xIHtcbiAgY29sb3I6IHJnYigzMiwgMjI2LCA3NCk7XG59XG5cbi5idG4tMSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICAvKiBib3JkZXI6IG5vbmU7ICovXG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWJsYWNrLTMwMCk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5mb290ZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB1bCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpIHtcbiAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubmF2LWJvdHRvbSB7XG4gIGJhY2tncm91bmQ6ICM0ODQ4NDg7XG4gIHBhZGRpbmc6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgLm5hdi1jb250IHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xuICAgIG1hcmdpbjogMCAycHggNXB4IDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYigwIDAgMCAvIDE1JSk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgbWluLWhlaWdodDogNzZweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLnNlbGVjdC1uYXZ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjojNDg0ODQ4ICFpbXBvcnRhbnQ7ICBcbn1cblxuLnF1aXRhcntcbiAgZGlzcGxheTogbm9uZVxufVxuXG5cblxuLmJ0bi01e1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAyNjFjMyAgMTAlLCAjNWM2N2VjIDEwMCUpO1xuICBwYWRkaW5nOiAxNXB4IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiAgI2ZmZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYmxhY2stMTAwKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi8qICoqKioqKioqKioqKioqKioqKiAqL1xuLmJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnNsaWRlczAxIHtcbiAgaGVpZ2h0OiA2NTBweDtcbiAgbWF4LWhlaWdodDogOTAlO1xuICB3aWR0aDogMzgwcHg7XG4gIG1pbi13aWR0aDogMjUlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMCU7XG59XG5cbi5tZW51LWhlYWRlci1iZyB7XG4gIHRvcDogMzAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogNDgwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDdkZWcsICNlYjY1NmUgMCUsICNiZjM5NDIgMTAwJSk7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMjBweCByZ2IoOTQgOTQgOTQgLyAyNSUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xuICBib3JkZXItcmFkaXVzOiAxNiU7XG4gIG1hcmdpbi1sZWZ0OiAtMzIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHotaW5kZXg6IDE7XG5cbiAgZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEzMnB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICBib3R0b206IDcwcHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2xpZGVzMDEge1xuICAgIGxlZnQ6IDIwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5zbGlkZXMwMSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmltZy1sZWZ0IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLml0ZW0taW5wdXQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwcHggMDtcbiAgYm9yZGVyOiAycHggc29saWQgI2UxZTFlMWI4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmbGV4OiAwIDAgMTAwcHg7XG4gICAgbWluLXdpZHRoOiA0MHB4O1xuICAgIG1heC13aWR0aDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICNjM2MzYzM7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgICB9XG4gIH1cblxuICBpb24taW5wdXQge1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjay00MDApO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG4uYnRuLTMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgICNkYTVkNjcsXG4gICAgI2Q3NWE2NCxcbiAgICAjZDQ1ODYxLFxuICAgICNkMTU1NWYsXG4gICAgI2NlNTI1YyxcbiAgICAjY2M1MDU5LFxuICAgICNjOTRkNTcsXG4gICAgI2M3NGI1NCxcbiAgICAjYzQ0OTUxLFxuICAgICNjMTQ2NGYsXG4gICAgI2JmNDQ0YyxcbiAgICAjYmM0MTRhXG4gICk7XG4gIHBhZGRpbmc6IDE1cHggNzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjb2xvcjogI2ZmZmZmZmRjO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1ibGFjay0yMDApO1xuICBmb250LXdlaWdodDogNTAwO1xuXG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICB9XG59XG5cbi5idG4tMzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idG4tMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmOGE7XG4gIHBhZGRpbmc6IDE1cHggNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk1OTU5NWM3O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDhweCByZ2IoMCAwIDAgLyA1JSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDg0ODQ4ZWI7XG59XG5cbi5idG4tMjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDUyZmZhZDtcbn1cblxuLmNoZWNrLXRlcm1zIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzc4Nzc3NyAhaW1wb3J0YW50O1xuICAgIGEge1xuICAgICAgY29sb3I6ICM3ODc3Nzc7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICB9XG4gIGlvbi1jaGVja2JveCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS10ZXJ0aWFyeSk7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdmFyKC0tdGVydGlhcnkpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDNkM2QzO1xuICB9XG59XG5cbi5idG4tZGlzYWJsZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2UzYzljOSAxMCUsICNlM2I1YjUgMTAwJSk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYmxhY2stMTAwKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _compartido_funciones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../compartido/funciones */ "3Djf");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/apiMongo.service */ "GtMO");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _services_ionic_components_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/ionic-components.service */ "L8EE");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/data-service.service */ "njzu");












let HomePage = class HomePage {
    constructor(_data, _comp, _storage, _modal, _fun, _apiMongo, fun, router) {
        this._data = _data;
        this._comp = _comp;
        this._storage = _storage;
        this._modal = _modal;
        this._fun = _fun;
        this._apiMongo = _apiMongo;
        this.fun = fun;
        this.router = router;
        this.page = 'info';
        //COMPONENT INFO LOTE
        this.trace = {
            credentialSubject: {
                details: [],
                header: {
                    attributes: {
                        country_source: "",
                        country_source_key: "",
                        country_target: "",
                        country_target_key: "",
                        delivery_date: null,
                        notes: "",
                        order_date: null,
                        product_type: "",
                        product_type_key: "",
                        quantity: 0,
                        reference_key: "",
                        sku: "",
                        unit: "",
                        via_type: "",
                        via_type_key: "",
                    }
                }
            }
        };
        //COMPONENT TRAZABILIDAD
        this.traceDetail = [];
        // http://localhost:8100/#/code?id=f8d9a7bba7532e9aef581b09a9ed27de60fbbcfe90d56454765e6ba639fe3649&i=1
        //http://rastrar.com/appComprador/#/code?id=f8d9a7bba7532e9aef581b09a9ed27de60fbbcfe90d56454765e6ba639fe3649&i=1
        //COMPONET ALAMCEN
        this.producersLot = [];
        this.dataCred();
        /*     this.getUser(); */
    }
    ionViewDidEnter() {
        this.getUser();
    }
    //http://localhost:8100/appComprador/#/code?id=d2e24c20484f65eeae0fb87e28987cceccb1e051158411bf5dfbc0cd41c9540f&i=1
    //   http://localhost:8100/appComprador/#/code?id=2e75f3397766a04c55bfd66be20e0fbe6d8e58af7d1a7c159e3635c55c7e581d&i=1
    //   http://rastrar.com/appComprador/#/code?id=2e75f3397766a04c55bfd66be20e0fbe6d8e58af7d1a7c159e3635c55c7e581d&i=1
    //   http://rastrar.com/appComprador/#/code?id=2e75f3397766a04c55bfd66be20e0fbe6d8e58af7d1a7c159e3635c55c7e581d&i=1
    getUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = yield this._storage.getLocalStorage('USER');
        });
    }
    dataCred() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.data = yield this.validCred();
            this._data.dataSend.next(this.data);
        });
    }
    permisoLogin(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.user == 'INVITADO') {
                let res = yield this.fun.initSesion();
                if (this.fun.isVarInvalid(res))
                    return;
                yield this._storage.remove('USER');
                this.router.navigate(['/login']);
            }
            else
                this.page = page;
        });
    }
    validCred() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let loading = yield this._comp.presentLoading();
                let codeLote = yield this._storage.getLocalStorage('CODE');
                if (this._fun.isVarInvalid(codeLote)) {
                    loading.dismiss();
                    this.router.navigate(['/notfound']);
                    return;
                }
                let filter = {
                    "$and": [
                        { "data.correlative1": { "$lte": Number(codeLote.index) } },
                        { "data.correlative2": { "$gte": Number(codeLote.index) } }
                    ]
                };
                const res = yield this._apiMongo.filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].COLLECTION.associateQr, codeLote.code, filter);
                console.log('res.result', res.result);
                if (this._fun.isEmpty(res.result)) {
                    loading.dismiss();
                    this.router.navigate(['/notfound']);
                    yield this._fun.alertError('Código incorrecto');
                    return;
                }
                let trxid = res.result[0][codeLote.code][0].key;
                let dni = res.result[0][codeLote.code][0].data.indentUser;
                const res_cred = yield this._apiMongo.getkey(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].COLLECTION.dataQrUser, dni, trxid);
                console.log('res_cred', res_cred);
                if (this._fun.isEmpty(res_cred.result)) {
                    loading.dismiss();
                    this.router.navigate(['/notfound']);
                    yield this._fun.alertError('Código incorrecto');
                    return;
                }
                let dataCred = res_cred.result[0][dni][0];
                loading.dismiss();
                resolve(dataCred);
            }));
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_data_service_service__WEBPACK_IMPORTED_MODULE_11__["DataService"] },
    { type: _services_ionic_components_service__WEBPACK_IMPORTED_MODULE_10__["IonicComponentsService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _compartido_funciones__WEBPACK_IMPORTED_MODULE_5__["Funciones"] },
    { type: _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_7__["ApiMongoService"] },
    { type: _compartido_funciones__WEBPACK_IMPORTED_MODULE_5__["Funciones"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map