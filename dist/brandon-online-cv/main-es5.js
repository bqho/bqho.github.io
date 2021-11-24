function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _publications_publication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./publications/publication.component */
    "./src/app/publications/publication.component.ts");
    /* harmony import */


    var _cellsystems_data_cellsystems_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cellsystems-data/cellsystems.component */
    "./src/app/cellsystems-data/cellsystems.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'publications',
      component: _publications_publication_component__WEBPACK_IMPORTED_MODULE_3__["publicationsComponent"]
    }, {
      path: 'cellsystems',
      component: _cellsystems_data_cellsystems_component__WEBPACK_IMPORTED_MODULE_4__["cellsystemsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _navigation_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navigation/nav.component */
    "./src/app/navigation/nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'brandon-online-cv';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_navigation_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navigation_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navigation/nav.component */
    "./src/app/navigation/nav.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _publications_publication_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./publications/publication.component */
    "./src/app/publications/publication.component.ts");
    /* harmony import */


    var _cellsystems_data_cellsystems_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cellsystems-data/cellsystems.component */
    "./src/app/cellsystems-data/cellsystems.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navigation_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _publications_publication_component__WEBPACK_IMPORTED_MODULE_6__["publicationsComponent"], _cellsystems_data_cellsystems_component__WEBPACK_IMPORTED_MODULE_7__["cellsystemsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navigation_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _publications_publication_component__WEBPACK_IMPORTED_MODULE_6__["publicationsComponent"], _cellsystems_data_cellsystems_component__WEBPACK_IMPORTED_MODULE_7__["cellsystemsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cellsystems-data/cellsystems.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/cellsystems-data/cellsystems.component.ts ***!
    \***********************************************************/

  /*! exports provided: cellsystemsComponent */

  /***/
  function srcAppCellsystemsDataCellsystemsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cellsystemsComponent", function () {
      return cellsystemsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var cellsystemsComponent = function cellsystemsComponent() {
      _classCallCheck(this, cellsystemsComponent);
    };

    cellsystemsComponent.ɵfac = function cellsystemsComponent_Factory(t) {
      return new (t || cellsystemsComponent)();
    };

    cellsystemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: cellsystemsComponent,
      selectors: [["cell-systems"]],
      decls: 48,
      vars: 0,
      consts: [[1, "transbox"], [1, "card-container"], [1, "row-container"], ["onclick", "window.location='https://pubmed.ncbi.nlm.nih.gov/29361465/'", 1, "card"], [1, "card-header"], [1, "card-image"], ["alt", "GraphAbstract", "title", "GraphAbstract", "src", "/assets/images/proteinAbundancePaper.jpeg"], [1, "card"], ["href", "/assets/datasets/proteinAbundance/TableS1.xlsx", "target", "_blank", "download", ""], ["href", "/assets/datasets/proteinAbundance/TableS2.xlsx", "target", "_blank", "download", ""], ["href", "/assets/datasets/proteinAbundance/TableS3.xlsx", "target", "_blank", "download", ""], ["href", "/assets/datasets/proteinAbundance/TableS4.xlsx", "target", "_blank", "download", ""], ["href", "/assets/datasets/proteinAbundance/TableS5.xlsx", "target", "_blank", "download", ""], ["href", "/assets/datasets/proteinAbundance/TableS6.xlsx", "target", "_blank", "download", ""], ["href", "/assets/datasets/proteinAbundance/TableS7.xlsx", "target", "_blank", "download", ""], ["href", "/assets/datasets/proteinAbundance/TableS8.xlsx", "target", "_blank", "download", ""]],
      template: function cellsystemsComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      styles: ["div.transbox[_ngcontent-%COMP%] {\n  background: #474f67;\n  height: 250px;\n  width: 100%;\n  text-align: center;\n}\n\ndiv.transbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-weight: 500;\n  font-size: 35px;\n  display: inline-block;\n  margin-top: 5%;\n  line-height: 50px;\n  width: 60%;\n  font-family: \"Courier New\", Courier, monospace;\n  max-height: 400px;\n}\n\ndiv.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.row-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 70%;\n  height: 300px;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 80%;\n  padding: 15px;\n  margin: 15px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);\n  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);\n}\n\ndiv.card-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4285F4;\n}\n\ndiv.card-image[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 90%;\n  max-height: 90%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFuZG9uaG8vRG9jdW1lbnRzL0dpdEh1Yi9icWhvLmdpdGh1Yi5pby9zcmMvYXBwL2NlbGxzeXN0ZW1zLWRhdGEvY2VsbHN5c3RlbXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NlbGxzeXN0ZW1zLWRhdGEvY2VsbHN5c3RlbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSw4Q0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1RUFBQTtFQUNBLG1GQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0gsMEVBQUE7QUNDRDs7QURFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2VsbHN5c3RlbXMtZGF0YS9jZWxsc3lzdGVtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50cmFuc2JveCB7XG4gICAgYmFja2dyb3VuZDogIzQ3NGY2NztcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2LnRyYW5zYm94IHAge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG59XG5cbmRpdi5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3ctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uY2FyZCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwwLDAsLjA4KSwgMCAwIDZweCByZ2JhKDAsMCwwLC4wNSk7XG4gICAgdHJhbnNpdGlvbjogLjNzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjE1NSwxLjEwNSwuMjk1LDEuMTIpLC4zcyBib3gtc2hhZG93LC4zcyAtd2Via2l0LXRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjE1NSwxLjEwNSwuMjk1LDEuMTIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQ6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLC4xMiksIDAgNHB4IDhweCByZ2JhKDAsMCwwLC4wNik7XG59XG5cbmRpdi5jYXJkLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaXYuY2FyZC1oZWFkZXIgYSB7XG4gICAgY29sb3I6ICM0Mjg1RjQ7XG59XG5cbmRpdi5jYXJkLWltYWdlIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZGl2LmNhcmQtaW1hZ2UgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuIiwiZGl2LnRyYW5zYm94IHtcbiAgYmFja2dyb3VuZDogIzQ3NGY2NztcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2LnRyYW5zYm94IHAge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgd2lkdGg6IDYwJTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cblxuZGl2LmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvdy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNTUsIDEuMTA1LCAwLjI5NSwgMS4xMiksIDAuM3MgYm94LXNoYWRvdywgMC4zcyAtd2Via2l0LXRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNTUsIDEuMTA1LCAwLjI5NSwgMS4xMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG5cbmRpdi5jYXJkLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpdi5jYXJkLWhlYWRlciBhIHtcbiAgY29sb3I6ICM0Mjg1RjQ7XG59XG5cbmRpdi5jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaXYuY2FyZC1pbWFnZSBpbWcge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWF4LWhlaWdodDogOTAlO1xuICBtYXJnaW46IGF1dG87XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](cellsystemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'cell-systems',
          templateUrl: './cellsystems.component.html',
          styleUrls: ['./cellsystems.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = function HomeComponent() {
      _classCallCheck(this, HomeComponent);
    };

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["home"]],
      decls: 35,
      vars: 0,
      consts: [[1, "bg-img"], [1, "transbox"], [1, "about-area"], [1, "about-content"], [1, "highlights"], [1, "img-logo"], ["src", "/assets/images/biochemistry-logo.png"], [1, "work-description"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " BRANDON HO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " BIOCHEMISTRY PHD CANDIDATE WITH AN INTEREST IN GENOMICS, PROTEOMICS, BIG DATA ANALYTICS BASED IN TORONTO CANADA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " website still in progress, come back soon!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " About Brandon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " I am a full-time Biochemistry PhD student at the university of Toronto. Under the supervision of Dr. Grant W. Brown, I am studying how the eukaryotic proteins respond to DNA replication stress, a hallmark of cancer cells. Understanding how cells respond to DNA replication stress will provide greater understanding of cancer biology and guide cancer treatments. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Current Work ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "PhD Candidate in Biochemistry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Dr. Grant Brown Lab, University of Toronto, ON, Canada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Full-time, September 2014 - Current ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Protein functionality depends on protein concentration and subcellular location. My graduate work focuses on global proteomic changes in response to DNA replication stress.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["div.bg-img[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/brandonhoprofile.jpg);\n  height: 500px;\n  background-position: 0% 40%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\ndiv.bg-img-contact[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/contact-me.png);\n  background-position: 0% 25%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 200px;\n  vertical-align: bottom;\n  width: 49%;\n  float: left;\n  margin: 0.5%;\n  background-color: #f8F8F8;\n  border-radius: 15px;\n  height: 500px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\ndiv.bg-img-publications[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/publications.png);\n  background-position: 0% -30%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 100px;\n  vertical-align: bottom;\n  width: 49%;\n  float: left;\n  margin: 0.5%;\n  background-color: #F2F2F2;\n  border-radius: 15px;\n  height: 500px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\ndiv.content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 5%;\n}\n\ndiv.bg-img-research[_ngcontent-%COMP%] {\n  width: 49%;\n  float: left;\n  margin: 0.5%;\n  background-color: #fbfbfd;\n  border-radius: 15px;\n  height: 500px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\ndiv.bg-img-CV[_ngcontent-%COMP%] {\n  width: 49%;\n  float: left;\n  margin: 0.5%;\n  background-color: #CDCDCD;\n  border-radius: 15px;\n  height: 500px;\n  color: #080808;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.bg-img-CV[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 350px;\n  margin-top: 10%;\n}\n\n.bg-img-research[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 90%;\n  margin-top: 0%;\n}\n\ndiv.bg-img-research[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\ndiv.transbox[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.2);\n  height: 100%;\n  width: 100%;\n  text-align: center;\n}\n\ndiv.transbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-weight: 500;\n  font-size: 35px;\n  display: inline-block;\n  margin-top: 5%;\n  line-height: 50px;\n  width: 60%;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 500;\n}\n\n.about-area[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n}\n\n.about-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: left;\n  width: 40%;\n  line-height: 30px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.highlights[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 60%;\n  height: 230px;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: left;\n  line-height: 20px;\n  background-color: #FFFFFF;\n}\n\n.highlights[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  vertical-align: top;\n}\n\n.img-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: auto;\n  margin-top: 7.5%;\n}\n\n.work-description[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 100px;\n  margin-left: 3%;\n  display: inline-block;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  color: #06c;\n  text-decoration: none;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFuZG9uaG8vRG9jdW1lbnRzL0dpdEh1Yi9icWhvLmdpdGh1Yi5pby9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMERBQUE7RUFDQSxhQUFBO0VBRUEsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQUo7O0FER0E7RUFDSSxvREFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0FDREo7O0FESUE7RUFDSSxzREFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0FDRko7O0FETUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0FDSEo7O0FETUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtBQ0hKOztBRE1BO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSEo7O0FETUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUNJLHlDQUFBO0FDSEo7O0FETUE7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSw4Q0FBQTtBQ0hKOztBRE1BO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1BO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNISjs7QURNQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtBQ0hKOztBRE1BO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDSEo7O0FETUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE1BO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1BO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSx5Q0FBQTtBQ0hKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmJnLWltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2JyYW5kb25ob3Byb2ZpbGUuanBnKTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuZGl2LmJnLWltZy1jb250YWN0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvY29udGFjdC1tZS5wbmcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDI1JTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcblxuICAgIHdpZHRoOiA0OSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwLjUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOEY4Rjg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5kaXYuYmctaW1nLXB1YmxpY2F0aW9ucyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3B1YmxpY2F0aW9ucy5wbmcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIC0zMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG5cbiAgICB3aWR0aDogNDklO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMC41JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuXG5kaXYuY29udGVudC13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbmRpdi5iZy1pbWctcmVzZWFyY2gge1xuICAgIHdpZHRoOiA0OSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwLjUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5kaXYuYmctaW1nLUNWIHtcbiAgICB3aWR0aDogNDklO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMC41JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RDRENEO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBjb2xvcjogIzA4MDgwODtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmJnLWltZy1DViBpbWcge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIG1hcmdpbi10b3A6MTAlO1xufVxuXG4uYmctaW1nLXJlc2VhcmNoIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDowJTtcbn1cblxuZGl2LmJnLWltZy1yZXNlYXJjaCBoMSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmRpdi50cmFuc2JveCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmRpdi50cmFuc2JveCBwIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG5oMSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmFib3V0LWFyZWEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogNDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uaGlnaGxpZ2h0cyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbi5oaWdobGlnaHRzIGRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uaW1nLWxvZ28gaW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDcuNSU7XG59XG5cbi53b3JrLWRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5hIHtcbiAgICBjb2xvcjogIzA2YztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufSIsImRpdi5iZy1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYnJhbmRvbmhvcHJvZmlsZS5qcGcpO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA0MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmRpdi5iZy1pbWctY29udGFjdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9jb250YWN0LW1lLnBuZyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDI1JTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIHdpZHRoOiA0OSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAuNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOEY4Rjg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5kaXYuYmctaW1nLXB1YmxpY2F0aW9ucyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wdWJsaWNhdGlvbnMucG5nKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTMwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIHdpZHRoOiA0OSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAuNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5kaXYuY29udGVudC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbmRpdi5iZy1pbWctcmVzZWFyY2gge1xuICB3aWR0aDogNDklO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwLjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZkO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuZGl2LmJnLWltZy1DViB7XG4gIHdpZHRoOiA0OSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAuNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRENEQ0Q7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGNvbG9yOiAjMDgwODA4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmJnLWltZy1DViBpbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmJnLWltZy1yZXNlYXJjaCBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDAlO1xufVxuXG5kaXYuYmctaW1nLXJlc2VhcmNoIGgxIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmRpdi50cmFuc2JveCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYudHJhbnNib3ggcCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNjAlO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hYm91dC1hcmVhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWJvdXQtY29udGVudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDQwJTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uaGlnaGxpZ2h0cyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4uaGlnaGxpZ2h0cyBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmltZy1sb2dvIGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA3LjUlO1xufVxuXG4ud29yay1kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuYSB7XG4gIGNvbG9yOiAjMDZjO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/navigation/nav.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/navigation/nav.component.ts ***!
    \*********************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavigationNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavComponent = function NavComponent() {
      _classCallCheck(this, NavComponent);
    };

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)();
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["nav-bar"]],
      decls: 20,
      vars: 0,
      consts: [[1, "nav"], [1, "nav-container"], [1, "header-nav"], [1, "nav-item"], ["routerLink", "home", 1, "name-home"], ["routerLinkActive", "active", 1, "nav", "navbar-nav"], ["routerLink", "home", 1, "nav-link"], ["routerLink", "Home", 1, "nav-link"], ["routerLink", "publications", 1, "nav-link"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["nav[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Arial, sans-serif;\n  position: fixed;\n  width: 100%;\n}\n\n.nav-container[_ngcontent-%COMP%] {\n  background-color: #504f4f;\n}\n\n.header-nav[_ngcontent-%COMP%] {\n  float: left;\n  height: 80%;\n}\n\na.name-home[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  line-height: normal;\n  text-align: center;\n  color: #F2F2F2;\n  padding: 10px 10px;\n  text-decoration: none;\n  font-weight: 700;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  list-style-type: none;\n}\n\na.nav-link[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  line-height: normal;\n  text-align: center;\n  color: #F2F2F2;\n  padding: 10px 10px;\n  text-decoration: none;\n  font-weight: 500;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #D8D8D8;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFuZG9uaG8vRG9jdW1lbnRzL0dpdEh1Yi9icWhvLmdpdGh1Yi5pby9zcmMvYXBwL25hdmlnYXRpb24vbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZpZ2F0aW9uL25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm5hdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA0ZjRmO1xufVxuXG4uaGVhZGVyLW5hdiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiA4MCU7XG59XG5cbmEubmFtZS1ob21lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNGMkYyRjI7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5uYXYgdWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm5hdiB1bCBsaSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5hLm5hdi1saW5rIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNGMkYyRjI7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5uYXYgdWwgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI0Q4RDhEODtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cbiIsIm5hdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDRmNGY7XG59XG5cbi5oZWFkZXItbmF2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogODAlO1xufVxuXG5hLm5hbWUtaG9tZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGMkYyRjI7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5uYXYgdWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubmF2IHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuYS5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGMkYyRjI7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5uYXYgdWwgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNEOEQ4RDg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nav-bar',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/publications/publication.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/publications/publication.component.ts ***!
    \*******************************************************/

  /*! exports provided: publicationsComponent */

  /***/
  function srcAppPublicationsPublicationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "publicationsComponent", function () {
      return publicationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var publicationsComponent = function publicationsComponent() {
      _classCallCheck(this, publicationsComponent);
    };

    publicationsComponent.ɵfac = function publicationsComponent_Factory(t) {
      return new (t || publicationsComponent)();
    };

    publicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: publicationsComponent,
      selectors: [["publications"]],
      decls: 52,
      vars: 0,
      consts: [[1, "transbox"], [1, "information"], [1, "publications"], [1, "publication-entry-container"], [1, "bg-img-biorxiv"], ["alt", "biorxiv-logo", "title", "BioRxiv Logo", "src", "/assets/images/bioRxiv_article.jpeg"], [1, "publication-entry"], ["routerLink", "/cellsystems", 1, "publication-entry-container"]],
      template: function publicationsComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Rehna Krishnan, Mariah Lapierre, Brandon Gautreau, Samah El Ghamrasni, Parasvi S. Patel, Kevin Nixon, Talya Yerlici, Kiran Kumar Naidu Guturi, Jonathan St-Germain, Francesca Mateo, Amine Saad, Arash Algouneh, Rebecca Earnshaw, Joshua Miller, Negin Khosraviani, Chehronai Fozil, Adam Penn, Brandon Ho, Otto Sanchez, Grant W. Brown, Moulay Alaoui-Jamali, John Reynolds, Karim Mekhail, Brian Raught, Miguel A. Pujana, Grant S. Stewart, Anne Hakem, and Razq Hakem. (Submitted 2021) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " RNF168 regulates R-loop resolution and genomic stability in BRCA1/2-deficient tumors ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Journal of Clinical Investigation 1;131(3) (2021) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Parasvi S Patel Karan Joshua Abraham , Kiran Kumar Naidu Guturi , Marie-Jo Halaby , Zahra Khan, Luis Palomero, Brandon Ho, Shili Duan, Jonathan St-Germain, Arash Algouneh, Francesca Mateo, Samah El Ghamrasni, Haithem Barbour, Daniel R Barnes, Jonathan Beesley, Otto Sanchez, Hal K Berman, Grant W Brown, El Bachir Affar, Georgia Chenevix-Trench, Antonis C Antoniou, Cheryl H Arrowsmith, Brian Raught, Miquel Angel Pujana, Karim Mekhail, Anne Hakem, Razqallah Hakem ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Sonic hedgehog accelerates DNA replication to cause replication stress promoting cancer initiation in medulloblastoma ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Nature Cancer 1, 840\u2013854 (2020) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Lukas Tamayo-Orrego, David Gallo, Fr\xE9d\xE9ric Racicot, Amandine Bemmo, Sushmetha Mohan, Brandon Ho, Samer Salameh, Trang Hoang, Andrew P. Jackson, Grant W. Brown & Fr\xE9d\xE9ric Charron ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Mapping DNA-damage dependent genetic interactions in yeast by en masse mating matrix and barcode fusion genetics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Molecular Systems Biology 14(5):e7985 (2018) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Diaz-Meija, J., Mellor, J.C., Cote, A., Bansal, P., Shaeri, F., Gebbia, M., Balint, A., Ho, B., Weile J., Verby, M., Karkhanina, A., Zhang, Y., Wong, C., Rich, J., Prendergast, D., Gupta, G., Ozturk, S., Durocher, D., Andrews, B., Boone, C., Brown, G.W., Roth, F.P. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Unification of Protein Abundance Datasets Yields a Quantitative Saccharomyces cerevisiae Proteome ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Cell Systems. Feb 28;6(2):192-205. (2018) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Ho, B., Baryshnikova, A., and Brown, G.W. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["div.transbox[_ngcontent-%COMP%] {\n  background: #474f67;\n  height: 250px;\n  width: 100%;\n  text-align: center;\n}\n\ndiv.transbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-weight: 500;\n  font-size: 35px;\n  display: inline-block;\n  margin-top: 5%;\n  line-height: 50px;\n  width: 60%;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\ndiv.information[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\ndiv.information[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #4285F4;\n}\n\ndiv.publications[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.publication-entry-container[_ngcontent-%COMP%] {\n  width: 65%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 25px;\n  margin: 20px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);\n  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow;\n  cursor: pointer;\n}\n\ndiv.publication-entry-container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);\n}\n\ndiv.publication-entry[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\ndiv.bg-img-biorxiv[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.bg-img-biorxiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 80%;\n  max-height: auto;\n  margin: auto;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 500;\n}\n\n.about-area[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n}\n\n.about-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: left;\n  width: 40%;\n  line-height: 30px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFuZG9uaG8vRG9jdW1lbnRzL0dpdEh1Yi9icWhvLmdpdGh1Yi5pby9zcmMvYXBwL3B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHVibGljYXRpb25zL3B1YmxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsOENBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUVBQUE7RUFDQSxtRkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0gsMEVBQUE7QUNDRDs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtBQ0NKOztBRElBO0VBQ0ksZUFBQTtFQUNBLHlDQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcHVibGljYXRpb25zL3B1YmxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnRyYW5zYm94IHtcbiAgICBiYWNrZ3JvdW5kOiAjNDc0ZjY3O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYudHJhbnNib3ggcCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuZGl2LmluZm9ybWF0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5kaXYuaW5mb3JtYXRpb24gaDQge1xuICAgIGNvbG9yOiAjNDI4NUY0O1xufVxuXG5kaXYucHVibGljYXRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZGl2LnB1YmxpY2F0aW9uLWVudHJ5LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsMCwwLC4wOCksIDAgMCA2cHggcmdiYSgwLDAsMCwuMDUpO1xuICAgIHRyYW5zaXRpb246IC4zcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xNTUsMS4xMDUsLjI5NSwxLjEyKSwuM3MgYm94LXNoYWRvdywuM3MgLXdlYmtpdC10cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xNTUsMS4xMDUsLjI5NSwxLjEyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5wdWJsaWNhdGlvbi1lbnRyeS1jb250YWluZXI6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLC4xMiksIDAgNHB4IDhweCByZ2JhKDAsMCwwLC4wNik7XG59XG5cbmRpdi5wdWJsaWNhdGlvbi1lbnRyeSB7XG4gICAgd2lkdGg6IDY1JTtcbn1cblxuZGl2LmJnLWltZy1iaW9yeGl2IHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZGl2LmJnLWltZy1iaW9yeGl2IGltZyB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbWF4LWhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuaDEge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hYm91dC1hcmVhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYWJvdXQtY29udGVudCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuXG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuYSB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6YXV0bztcbn1cbiIsImRpdi50cmFuc2JveCB7XG4gIGJhY2tncm91bmQ6ICM0NzRmNjc7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmRpdi50cmFuc2JveCBwIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuZGl2LmluZm9ybWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmRpdi5pbmZvcm1hdGlvbiBoNCB7XG4gIGNvbG9yOiAjNDI4NUY0O1xufVxuXG5kaXYucHVibGljYXRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpdi5wdWJsaWNhdGlvbi1lbnRyeS1jb250YWluZXIge1xuICB3aWR0aDogNjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMjVweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNTUsIDEuMTA1LCAwLjI5NSwgMS4xMiksIDAuM3MgYm94LXNoYWRvdywgMC4zcyAtd2Via2l0LXRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNTUsIDEuMTA1LCAwLjI5NSwgMS4xMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LnB1YmxpY2F0aW9uLWVudHJ5LWNvbnRhaW5lcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuXG5kaXYucHVibGljYXRpb24tZW50cnkge1xuICB3aWR0aDogNjUlO1xufVxuXG5kaXYuYmctaW1nLWJpb3J4aXYge1xuICB3aWR0aDogMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZGl2LmJnLWltZy1iaW9yeGl2IGltZyB7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXgtaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hYm91dC1hcmVhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWJvdXQtY29udGVudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDQwJTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](publicationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'publications',
          templateUrl: './publication.component.html',
          styleUrls: ['./publication.component.scss']
        }]
      }], null, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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
      return console.error(err);
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
    /*! /Users/brandonho/Documents/GitHub/bqho.github.io/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map