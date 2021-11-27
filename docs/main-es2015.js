(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _publications_publication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publications/publication.component */ "./src/app/publications/publication.component.ts");
/* harmony import */ var _cellsystems_data_cellsystems_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cellsystems-data/cellsystems.component */ "./src/app/cellsystems-data/cellsystems.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv.component.ts");








const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'publications', component: _publications_publication_component__WEBPACK_IMPORTED_MODULE_3__["publicationsComponent"] },
    { path: 'cellsystems', component: _cellsystems_data_cellsystems_component__WEBPACK_IMPORTED_MODULE_4__["cellsystemsComponent"] },
    { path: 'cv', component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_5__["cvComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navigation_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/nav.component */ "./src/app/navigation/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'brandon-online-cv';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navigation_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/nav.component */ "./src/app/navigation/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _publications_publication_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publications/publication.component */ "./src/app/publications/publication.component.ts");
/* harmony import */ var _cellsystems_data_cellsystems_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cellsystems-data/cellsystems.component */ "./src/app/cellsystems-data/cellsystems.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navigation_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _publications_publication_component__WEBPACK_IMPORTED_MODULE_6__["publicationsComponent"],
        _cellsystems_data_cellsystems_component__WEBPACK_IMPORTED_MODULE_7__["cellsystemsComponent"],
        _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__["cvComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navigation_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _publications_publication_component__WEBPACK_IMPORTED_MODULE_6__["publicationsComponent"],
                    _cellsystems_data_cellsystems_component__WEBPACK_IMPORTED_MODULE_7__["cellsystemsComponent"],
                    _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__["cvComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cellsystems-data/cellsystems.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/cellsystems-data/cellsystems.component.ts ***!
  \***********************************************************/
/*! exports provided: cellsystemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cellsystemsComponent", function() { return cellsystemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class cellsystemsComponent {
}
cellsystemsComponent.ɵfac = function cellsystemsComponent_Factory(t) { return new (t || cellsystemsComponent)(); };
cellsystemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: cellsystemsComponent, selectors: [["cell-systems"]], decls: 48, vars: 0, consts: [[1, "transbox"], [1, "card-container"], [1, "row-container"], ["onclick", "window.location='https://pubmed.ncbi.nlm.nih.gov/29361465/'", 1, "card"], [1, "card-header"], [1, "card-image"], ["alt", "GraphAbstract", "title", "GraphAbstract", "src", "/assets/images/proteinAbundancePaper.jpeg"], [1, "card"], ["href", "/assets/datasets/proteinAbundance/TableS1.xlsx", "target", "_blank", "download", ""], ["href", "/assets/datasets/proteinAbundance/TableS2.xlsx", "target", "_blank", "download", ""], ["href", "/assets/datasets/proteinAbundance/TableS3.xlsx", "target", "_blank", "download", ""], ["href", "/assets/datasets/proteinAbundance/TableS4.xlsx", "target", "_blank", "download", ""], ["href", "/assets/datasets/proteinAbundance/TableS5.xlsx", "target", "_blank", "download", ""], ["href", "/assets/datasets/proteinAbundance/TableS6.xlsx", "target", "_blank", "download", ""], ["href", "/assets/datasets/proteinAbundance/TableS7.xlsx", "target", "_blank", "download", ""], ["href", "/assets/datasets/proteinAbundance/TableS8.xlsx", "target", "_blank", "download", ""]], template: function cellsystemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Unification of Protein Abundance Datasets Yields a Quantitative Saccharomyces cerevisiae Proteome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Link to paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Download Table S1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Download Table S2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Download Table S3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Download Table S4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Download Table S5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Download Table S6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Download Table S7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Download Table S8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div.transbox[_ngcontent-%COMP%] {\n  background: #474f67;\n  height: 250px;\n  width: 100%;\n  text-align: center;\n}\n\ndiv.transbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-weight: 500;\n  font-size: 35px;\n  display: inline-block;\n  margin-top: 5%;\n  line-height: 50px;\n  width: 60%;\n  font-family: \"Courier New\", Courier, monospace;\n  max-height: 400px;\n}\n\ndiv.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.row-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 70%;\n  height: 300px;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 80%;\n  padding: 15px;\n  margin: 15px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);\n  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);\n}\n\ndiv.card-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4285F4;\n}\n\ndiv.card-image[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 90%;\n  max-height: 90%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFuZG9uaG8vRG9jdW1lbnRzL0dpdEh1Yi9icWhvLmdpdGh1Yi5pby9zcmMvYXBwL2NlbGxzeXN0ZW1zLWRhdGEvY2VsbHN5c3RlbXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NlbGxzeXN0ZW1zLWRhdGEvY2VsbHN5c3RlbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSw4Q0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1RUFBQTtFQUNBLG1GQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0gsMEVBQUE7QUNDRDs7QURFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2VsbHN5c3RlbXMtZGF0YS9jZWxsc3lzdGVtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50cmFuc2JveCB7XG4gICAgYmFja2dyb3VuZDogIzQ3NGY2NztcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2LnRyYW5zYm94IHAge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG59XG5cbmRpdi5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3ctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uY2FyZCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwwLDAsLjA4KSwgMCAwIDZweCByZ2JhKDAsMCwwLC4wNSk7XG4gICAgdHJhbnNpdGlvbjogLjNzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjE1NSwxLjEwNSwuMjk1LDEuMTIpLC4zcyBib3gtc2hhZG93LC4zcyAtd2Via2l0LXRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjE1NSwxLjEwNSwuMjk1LDEuMTIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQ6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLC4xMiksIDAgNHB4IDhweCByZ2JhKDAsMCwwLC4wNik7XG59XG5cbmRpdi5jYXJkLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaXYuY2FyZC1oZWFkZXIgYSB7XG4gICAgY29sb3I6ICM0Mjg1RjQ7XG59XG5cbmRpdi5jYXJkLWltYWdlIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZGl2LmNhcmQtaW1hZ2UgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuIiwiZGl2LnRyYW5zYm94IHtcbiAgYmFja2dyb3VuZDogIzQ3NGY2NztcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2LnRyYW5zYm94IHAge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgd2lkdGg6IDYwJTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cblxuZGl2LmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvdy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNTUsIDEuMTA1LCAwLjI5NSwgMS4xMiksIDAuM3MgYm94LXNoYWRvdywgMC4zcyAtd2Via2l0LXRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNTUsIDEuMTA1LCAwLjI5NSwgMS4xMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG5cbmRpdi5jYXJkLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpdi5jYXJkLWhlYWRlciBhIHtcbiAgY29sb3I6ICM0Mjg1RjQ7XG59XG5cbmRpdi5jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaXYuY2FyZC1pbWFnZSBpbWcge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWF4LWhlaWdodDogOTAlO1xuICBtYXJnaW46IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](cellsystemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cell-systems',
                templateUrl: './cellsystems.component.html',
                styleUrls: ['./cellsystems.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cv/cv.component.ts":
/*!************************************!*\
  !*** ./src/app/cv/cv.component.ts ***!
  \************************************/
/*! exports provided: cvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cvComponent", function() { return cvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class cvComponent {
}
cvComponent.ɵfac = function cvComponent_Factory(t) { return new (t || cvComponent)(); };
cvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: cvComponent, selectors: [["cv"]], decls: 21, vars: 0, consts: [[1, "top-header"], [1, "cv-area"], [1, "highlights"], [1, "img-logo"], ["src", "/assets/images/biochemistry-logo.png"], [1, "work-description"]], template: function cvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Curriculum Vitae ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Current Work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "PhD Candidate in Biochemistry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Dr. Grant Brown Lab, University of Toronto, ON, Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Full-time, September 2014 - Current ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Protein functionality depends on protein concentration and subcellular location. My graduate work focuses on global proteomic changes in response to DNA replication stress.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div.top-header[_ngcontent-%COMP%] {\n  background: #474f67;\n  height: 250px;\n  width: 100%;\n  text-align: center;\n}\n\ndiv.top-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-weight: 500;\n  font-size: 35px;\n  display: inline-block;\n  margin-top: 5%;\n  line-height: 50px;\n  width: 60%;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\ndiv.cv-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFuZG9uaG8vRG9jdW1lbnRzL0dpdEh1Yi9icWhvLmdpdGh1Yi5pby9zcmMvYXBwL2N2L2N2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdi9jdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDhDQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY3YvY3YuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYudG9wLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzQ3NGY2NztcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2LnRvcC1oZWFkZXIgcCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuZGl2LmN2LWFyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSIsImRpdi50b3AtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzQ3NGY2NztcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2LnRvcC1oZWFkZXIgcCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNjAlO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbmRpdi5jdi1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](cvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cv',
                templateUrl: './cv.component.html',
                styleUrls: ['./cv.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], decls: 44, vars: 0, consts: [[1, "bg-img"], [1, "transbox"], [1, "content-area"], [1, "about-area"], [1, "about-content"], [1, "content-panel"], [1, "current-work"], [1, "work-panel"], [1, "work-card-1"], [1, "inner-work-card"], [1, "work-panel-img"], ["alt", "LabPhoto", "title", "LabPhoto", "src", "/assets/images/CongratulationsJiongwen.png"], [1, "work-description"], ["href", "http://brown.biochemistry.utoronto.ca/", "target", "_blank"], [1, "work-card-2"], [1, "featured-article"], [1, "black-content-card"], ["href", "https://temertymedicine.utoronto.ca/news/cell-holds-42-million-protein-molecules-scientists-reveal", "target", "_blank"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " BRANDON HO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " BIOCHEMISTRY PHD CANDIDATE AT THE UNIVERSITY OF TORONTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " website still in progress, come back soon!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " About Brandon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " I am a full-time Biochemistry PhD student at the university of Toronto. Under the supervision of Dr. Grant W. Brown, I am studying how the eukaryotic proteins respond to DNA replication stress, a hallmark of cancer cells. Understanding how cells respond to DNA replication stress will provide greater understanding of cancer biology and guide cancer treatments. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ph.D. Candidate - Dr. Grant Brown Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Leading a project aimed at understanding how proteins inside a cell respond to various stresses and environments, particularly DNA replication stress, using molecular and cellular biology, computational methods, high-throughput microscopy, and genomic techniques.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Updating! :)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Featured Article: A Cell Holds 42 Million Protein Molecules, Scientists Reveal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " A side and tangential project to my main thesis work: I mined the literature and combined protein abundance datasets to provide a comprehensive and more complete estimate of protein molecules in a eukaryotic cell. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div.bg-img[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/brandonhoprofile.jpg);\n  height: 600px;\n  width: 100%;\n  background-position: 0% 40%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\ndiv.transbox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.2);\n  height: 100%;\n  width: 100%;\n  text-align: center;\n}\n\ndiv.transbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-weight: 500;\n  font-size: 35px;\n  display: inline-block;\n  margin-top: 5%;\n  line-height: 50px;\n  width: 60%;\n  font-family: \"Arial\", Courier, monospace;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 500;\n}\n\n.about-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 550px;\n}\n\n.about-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40%;\n  line-height: 30px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.content-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: auto;\n}\n\n.content-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 550px;\n}\n\n.current-work[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\n\n.work-panel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: 100%;\n}\n\n.work-card-1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 50%;\n  height: 100%;\n  background-color: #f7f7f7;\n}\n\n.work-card-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100%;\n  background-color: #e9e9e9;\n}\n\n.inner-work-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 95%;\n}\n\ndiv.work-panel-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40%;\n  width: 100%;\n  padding-top: 7.5%;\n}\n\n.work-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.work-panel-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.work-description[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.featured-article[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  background-color: black;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(/assets/images/FluorescentCells.png);\n}\n\n.black-content-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  color: white;\n}\n\n.black-content-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n}\n\n.black-content-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-weight: 350;\n  font-size: 25px;\n  display: inline-block;\n  line-height: 35px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: \"Arial\", Courier, monospace;\n  font-weight: 500;\n}\n\na[_ngcontent-%COMP%] {\n  color: #4285F4;\n  text-decoration: none;\n  font-size: 20px;\n}\n\nP[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: inline-block;\n  margin-top: 5%;\n  line-height: 20px;\n  font-family: \"Arial\", Courier, monospace;\n}\n\n.contact-content-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 550px;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFuZG9uaG8vRG9jdW1lbnRzL0dpdEh1Yi9icWhvLmdpdGh1Yi5pby9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMERBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUVBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0FDQUo7O0FER0E7RUFDSSx5Q0FBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNBSjs7QURJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FES0E7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRE1BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURRQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksV0FBQTtBQ0xKOztBRFFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwREFBQTtBQ0xKOztBRFFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNMSjs7QURRQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDTEo7O0FEUUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksd0NBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRFFBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRFFBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7QUNMSjs7QURRQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuYmctaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYnJhbmRvbmhvcHJvZmlsZS5qcGcpO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA0MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5kaXYudHJhbnNib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYudHJhbnNib3ggcCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuaDEge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hYm91dC1hcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTUwcHg7XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRlbnQtYXJlYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY29udGVudC1wYW5lbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1NTBweDtcbn1cblxuXG4uY3VycmVudC13b3JrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi53b3JrLXBhbmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLndvcmstY2FyZC0xIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cblxuLndvcmstY2FyZC0yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xufVxuXG4uaW5uZXItd29yay1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogOTUlO1xufVxuXG5kaXYud29yay1wYW5lbC1pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6NDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgcGFkZGluZy10b3A6IDcuNSU7XG5cbn1cblxuLndvcmstaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG5cbmRpdi53b3JrLXBhbmVsLWltZyBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi53b3JrLWRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZlYXR1cmVkLWFydGljbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvRmx1b3Jlc2NlbnRDZWxscy5wbmcpO1xufVxuXG4uYmxhY2stY29udGVudC1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJsYWNrLWNvbnRlbnQtY2FyZCBkaXYge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uYmxhY2stY29udGVudC1jYXJkIHAge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbn1cblxuaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuYSB7XG4gICAgY29sb3I6ICM0Mjg1RjQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuUCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uY29udGFjdC1jb250ZW50LXBhbmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDU1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSIsImRpdi5iZy1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYnJhbmRvbmhvcHJvZmlsZS5qcGcpO1xuICBoZWlnaHQ6IDYwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5kaXYudHJhbnNib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmRpdi50cmFuc2JveCBwIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmFib3V0LWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTUwcHg7XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA0MCU7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRlbnQtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY29udGVudC1wYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xufVxuXG4uY3VycmVudC13b3JrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLndvcmstcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLndvcmstY2FyZC0xIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi53b3JrLWNhcmQtMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG59XG5cbi5pbm5lci13b3JrLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA5NSU7XG59XG5cbmRpdi53b3JrLXBhbmVsLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDQwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA3LjUlO1xufVxuXG4ud29yay1pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaXYud29yay1wYW5lbC1pbWcgaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi53b3JrLWRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mZWF0dXJlZC1hcnRpY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvRmx1b3Jlc2NlbnRDZWxscy5wbmcpO1xufVxuXG4uYmxhY2stY29udGVudC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJsYWNrLWNvbnRlbnQtY2FyZCBkaXYge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uYmxhY2stY29udGVudC1jYXJkIHAge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNDI4NUY0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuUCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmNvbnRhY3QtY29udGVudC1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/navigation/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/navigation/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavComponent {
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["nav-bar"]], decls: 18, vars: 0, consts: [[1, "nav"], [1, "nav-container"], [1, "header-nav"], [1, "nav-item"], ["routerLink", "home", 1, "name-home"], ["routerLinkActive", "active", 1, "nav", "navbar-nav"], ["routerLink", "home", 1, "nav-link"], ["routerLink", "cv", 1, "nav-link"], ["routerLink", "publications", 1, "nav-link"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BRANDON HO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About/CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Publications & Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["nav[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Arial, sans-serif;\n  position: fixed;\n  width: 100%;\n  height: 70px;\n  top: 0;\n  background-color: #3b3b3b;\n}\n\n.header-nav[_ngcontent-%COMP%] {\n  float: left;\n  height: 80%;\n}\n\na.name-home[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  line-height: normal;\n  text-align: center;\n  color: #F2F2F2;\n  padding: 10px 10px;\n  text-decoration: none;\n  font-weight: 700;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  list-style-type: none;\n}\n\na.nav-link[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  line-height: normal;\n  text-align: center;\n  color: #F2F2F2;\n  padding: 10px 10px;\n  text-decoration: none;\n  font-weight: 500;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #D8D8D8;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFuZG9uaG8vRG9jdW1lbnRzL0dpdEh1Yi9icWhvLmdpdGh1Yi5pby9zcmMvYXBwL25hdmlnYXRpb24vbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZpZ2F0aW9uL25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURJQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm5hdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjcwcHg7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XG59XG5cblxuLmhlYWRlci1uYXYge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogODAlO1xufVxuXG5hLm5hbWUtaG9tZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjRjJGMkYyO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxubmF2IHVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5uYXYgdWwgbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuYS5uYXYtbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjRjJGMkYyO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxubmF2IHVsIGxpIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNEOEQ4RDg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG4iLCJuYXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XG59XG5cbi5oZWFkZXItbmF2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogODAlO1xufVxuXG5hLm5hbWUtaG9tZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGMkYyRjI7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5uYXYgdWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubmF2IHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuYS5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGMkYyRjI7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5uYXYgdWwgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNEOEQ4RDg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nav-bar',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/publications/publication.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/publications/publication.component.ts ***!
  \*******************************************************/
/*! exports provided: publicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicationsComponent", function() { return publicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class publicationsComponent {
}
publicationsComponent.ɵfac = function publicationsComponent_Factory(t) { return new (t || publicationsComponent)(); };
publicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: publicationsComponent, selectors: [["publications"]], decls: 122, vars: 0, consts: [[1, "transbox"], [1, "information"], [1, "publications"], [1, "publication-entry-container"], [1, "bg-img-journal-logo"], ["alt", "biorxiv-logo", "title", "BioRxiv Logo", "src", "/assets/images/bioRxiv_article.jpeg"], [1, "publication-entry"], ["alt", "JCI-logo", "title", "JCI Logo", "src", "/assets/images/JCI_logo.png"], ["alt", "NatureCancer-logo", "title", "NatCancerLogo", "src", "/assets/images/NatureCancer_logo.jpeg"], ["alt", "msb-logo", "title", "MSBLogo", "src", "/assets/images/MSB_logo.png"], ["routerLink", "/cellsystems", 1, "publication-entry-container"], ["alt", "cellsystems-logo", "title", "CellSystemsLogo", "src", "/assets/images/CellSystems_logo.jpeg"], ["alt", "mcb-logo", "title", "MCBLogo", "src", "/assets/images/MCB_logo.png"], ["alt", "ncomms-logo", "title", "NCOMMSLogo", "src", "/assets/images/NCOMMS_logo.png"], ["alt", "nar-logo", "title", "NARLogo", "src", "/assets/images/NAR_logo.png"], ["alt", "reviewlogo", "title", "reviewlogo", "src", "/assets/images/reviewlogo.png"]], template: function publicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Publications & Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Click card to access raw data (if applicable) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " RNF8 regulates R-loop resolution to prevent transcription-dependent DNA damage and is a vulnerability for BRCA1-mutant breast cancer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Rehna Krishnan, Mariah Lapierre, Brandon Gautreau, Samah El Ghamrasni, Parasvi S. Patel, Kevin Nixon, Talya Yerlici, Kiran Kumar Naidu Guturi, Jonathan St-Germain, Francesca Mateo, Amine Saad, Arash Algouneh, Rebecca Earnshaw, Joshua Miller, Negin Khosraviani, Chehronai Fozil, Adam Penn, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Brandon Ho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ", Otto Sanchez, Grant W. Brown, Moulay Alaoui-Jamali, John Reynolds, Karim Mekhail, Brian Raught, Miguel A. Pujana, Grant S. Stewart, Anne Hakem, and Razq Hakem. (Submitted 2021) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " RNF168 regulates R-loop resolution and genomic stability in BRCA1/2-deficient tumors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Journal of Clinical Investigation 1;131(3) (2021) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Parasvi S Patel Karan Joshua Abraham , Kiran Kumar Naidu Guturi , Marie-Jo Halaby , Zahra Khan, Luis Palomero, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Brandon Ho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ", Shili Duan, Jonathan St-Germain, Arash Algouneh, Francesca Mateo, Samah El Ghamrasni, Haithem Barbour, Daniel R Barnes, Jonathan Beesley, Otto Sanchez, Hal K Berman, Grant W Brown, El Bachir Affar, Georgia Chenevix-Trench, Antonis C Antoniou, Cheryl H Arrowsmith, Brian Raught, Miquel Angel Pujana, Karim Mekhail, Anne Hakem, Razqallah Hakem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Sonic hedgehog accelerates DNA replication to cause replication stress promoting cancer initiation in medulloblastoma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Nature Cancer 1, 840\u2013854 (2020) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Lukas Tamayo-Orrego, David Gallo, Fr\u00E9d\u00E9ric Racicot, Amandine Bemmo, Sushmetha Mohan, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Brandon Ho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ", Samer Salameh, Trang Hoang, Andrew P. Jackson, Grant W. Brown & Fr\u00E9d\u00E9ric Charron ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Mapping DNA-damage dependent genetic interactions in yeast by en masse mating matrix and barcode fusion genetics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Molecular Systems Biology 14(5):e7985 (2018) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Diaz-Meija, J., Mellor, J.C., Cote, A., Bansal, P., Shaeri, F., Gebbia, M., Balint, A., ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Ho, B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ", Weile J., Verby, M., Karkhanina, A., Zhang, Y., Wong, C., Rich, J., Prendergast, D., Gupta, G., Ozturk, S., Durocher, D., Andrews, B., Boone, C., Brown, G.W., Roth, F.P. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Unification of Protein Abundance Datasets Yields a Quantitative Saccharomyces cerevisiae Proteome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Cell Systems. Feb 28;6(2):192-205. (2018) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Ho, B.,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, ", Baryshnikova, A., and Brown, G.W. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Premature Senescence in Hutchinsons Gilford Progeria Syndrome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Molecular and Cellular Biology 37(14):e00659-16 (2017) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Wheaton, K., Campuzano, D., Ma, W., Sheinis, M., ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Ho, B.,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Brown, G.W., and Benchimol, S ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " CX-5461 is a DNA G-quadruplex stabilizer with selective lethality in BRCA1/2 deficient tumours ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Nature Communications 8:14432 (2016) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Xu, H., Di Antonio, M., McKinney, S., Mathew, V., ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Ho, B.,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "., ONeil, N., Dos Santos, N., Silvester, J., Kabeer, F., Lai, D., Wei, V., Garcia, J., Soriana, P., Chiu, D., Yap, D., Le, D., Banath, J., Ye, F., Zhang, A., Thu, K., Soong, J., Lin, S., Osako, T., Algara, T., Saunders, D., Wong, J., Xian, J., Bally, M., Brenton, J., Brown, G., Cescon, D., Mak, T., Caldas, C., Stirling, P., Hieter, P., Balasubramanian, S., and Aparicio, S. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Intersection of Calorie Restriction and Magnesium in the Suppression of Genome-Destablizaing RNA-DNA Hybrids ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Nucleic Acids Research 44(18):8870-8884 (2016) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Abraham, K., Chan, J.N.Y., Salvi, J.S., ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Ho, B.,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Hall, A., Vidya, E., Guo, R., Killackey, S., Liu, N., Lee, J.E., Brown, G.W., and Mekhail, K. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " High throughput fluorescence microscopic analysis of protein abundance and localization in budding yeast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Critical Reviews in Biochemistry and Molecular Biology. 2016;51(2):110-9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Torres, N.P., ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Ho, B.,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " and Brown, G.W. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["div.transbox[_ngcontent-%COMP%] {\n  background: #474f67;\n  height: 250px;\n  width: 100%;\n  text-align: center;\n}\n\ndiv.transbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-weight: 500;\n  font-size: 35px;\n  display: inline-block;\n  margin-top: 5%;\n  line-height: 50px;\n  width: 60%;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\ndiv.information[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\ndiv.information[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #4285F4;\n}\n\ndiv.publications[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.publication-entry-container[_ngcontent-%COMP%] {\n  width: 65%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 25px;\n  margin: 20px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);\n  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow;\n  cursor: pointer;\n}\n\ndiv.publication-entry-container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);\n}\n\ndiv.publication-entry[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\ndiv.bg-img-journal-logo[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.bg-img-journal-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n  margin: auto;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 500;\n}\n\n.about-area[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n}\n\n.about-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: left;\n  width: 40%;\n  line-height: 30px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\nmark[_ngcontent-%COMP%] {\n  background-color: #7cfdd7;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFuZG9uaG8vRG9jdW1lbnRzL0dpdEh1Yi9icWhvLmdpdGh1Yi5pby9zcmMvYXBwL3B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHVibGljYXRpb25zL3B1YmxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsOENBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUVBQUE7RUFDQSxtRkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0gsMEVBQUE7QUNDRDs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx5Q0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0FDQ0o7O0FESUE7RUFDSSxlQUFBO0VBQ0EseUNBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50cmFuc2JveCB7XG4gICAgYmFja2dyb3VuZDogIzQ3NGY2NztcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2LnRyYW5zYm94IHAge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbmRpdi5pbmZvcm1hdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuZGl2LmluZm9ybWF0aW9uIGg0IHtcbiAgICBjb2xvcjogIzQyODVGNDtcbn1cblxuZGl2LnB1YmxpY2F0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpdi5wdWJsaWNhdGlvbi1lbnRyeS1jb250YWluZXIge1xuICAgIHdpZHRoOiA2NSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLDAsMCwuMDgpLCAwIDAgNnB4IHJnYmEoMCwwLDAsLjA1KTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMiksLjNzIGJveC1zaGFkb3csLjNzIC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaXYucHVibGljYXRpb24tZW50cnktY29udGFpbmVyOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwuMTIpLCAwIDRweCA4cHggcmdiYSgwLDAsMCwuMDYpO1xufVxuXG5kaXYucHVibGljYXRpb24tZW50cnkge1xuICAgIHdpZHRoOiA2NSU7XG59XG5cbmRpdi5iZy1pbWctam91cm5hbC1sb2dvIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZGl2LmJnLWltZy1qb3VybmFsLWxvZ28gaW1nIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuaDEge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hYm91dC1hcmVhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYWJvdXQtY29udGVudCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuXG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuYSB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6YXV0bztcbn1cblxubWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNCwgMjUzLCAyMTUpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfSIsImRpdi50cmFuc2JveCB7XG4gIGJhY2tncm91bmQ6ICM0NzRmNjc7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmRpdi50cmFuc2JveCBwIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuZGl2LmluZm9ybWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmRpdi5pbmZvcm1hdGlvbiBoNCB7XG4gIGNvbG9yOiAjNDI4NUY0O1xufVxuXG5kaXYucHVibGljYXRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpdi5wdWJsaWNhdGlvbi1lbnRyeS1jb250YWluZXIge1xuICB3aWR0aDogNjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMjVweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNTUsIDEuMTA1LCAwLjI5NSwgMS4xMiksIDAuM3MgYm94LXNoYWRvdywgMC4zcyAtd2Via2l0LXRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNTUsIDEuMTA1LCAwLjI5NSwgMS4xMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LnB1YmxpY2F0aW9uLWVudHJ5LWNvbnRhaW5lcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuXG5kaXYucHVibGljYXRpb24tZW50cnkge1xuICB3aWR0aDogNjUlO1xufVxuXG5kaXYuYmctaW1nLWpvdXJuYWwtbG9nbyB7XG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaXYuYmctaW1nLWpvdXJuYWwtbG9nbyBpbWcge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmFib3V0LWFyZWEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogNDAlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5hIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxubWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Y2ZkZDc7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](publicationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'publications',
                templateUrl: './publication.component.html',
                styleUrls: ['./publication.component.scss']
            }]
    }], null, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brandonho/Documents/GitHub/bqho.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map