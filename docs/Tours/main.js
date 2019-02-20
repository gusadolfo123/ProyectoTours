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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    {
        path: '',
        loadChildren: function () { return _main_main_module__WEBPACK_IMPORTED_MODULE_5__["MainModule"]; },
        canLoad: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
    },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  margin-top: 80px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXERlc2Fycm9sbG8gQ3Vyc29zXFxDdXJzbyBBbmd1bGFyXFxtZGItYW5ndWxhci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTJCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDgwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _main_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/material.module */ "./src/app/main/material.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _main_main_module__WEBPACK_IMPORTED_MODULE_9__["MainModule"],
                _main_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"border border-light p-5\">\n  <p class=\"h4 mb-4 text-center\">Sign in</p>\n\n  <input type=\"email\" id=\"defaultLoginFormEmail\" class=\"form-control mb-4\" placeholder=\"E-mail\" />\n\n  <input type=\"password\" id=\"defaultLoginFormPassword\" class=\"form-control mb-4\" placeholder=\"Password\" />\n\n  <div class=\"d-flex justify-content-between\">\n    <div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultLoginFormRemember\" />\n        <label class=\"custom-control-label\" for=\"defaultLoginFormRemember\">Remember me</label>\n      </div>\n    </div>\n    <div>\n      <a href=\"\">Forgot password?</a>\n    </div>\n  </div>\n\n  <button class=\"btn btn-info btn-block my-4\" type=\"submit\">Sign in</button>\n\n  <div class=\"text-center\">\n    <p>\n      Not a member?\n      <a href=\"\">Register</a>\n    </p>\n\n    <p>or sign in with:</p>\n    <a type=\"button\" class=\"light-blue-text mx-2\">\n      <i class=\"fab fa-facebook-f\"></i>\n    </a>\n    <a type=\"button\" class=\"light-blue-text mx-2\">\n      <i class=\"fab fa-twitter\"></i>\n    </a>\n    <a type=\"button\" class=\"light-blue-text mx-2\">\n      <i class=\"fab fa-linkedin-in\"></i>\n    </a>\n    <a type=\"button\" class=\"light-blue-text mx-2\">\n      <i class=\"fab fa-github\"></i>\n    </a>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
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

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
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

var AuthGuardService = /** @class */ (function () {
    function AuthGuardService() {
    }
    AuthGuardService.prototype.canActivate = function () {
        return true;
    };
    // Carga el modulo correspondiente despues de que se cumpla la condicion
    AuthGuardService.prototype.canLoad = function () {
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/main/about/about.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/about/about.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/about/about.component.scss":
/*!*************************************************!*\
  !*** ./src/app/main/about/about.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/main/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/main/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/main/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/contact/contact.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/main/contact/contact.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/main/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/main/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/main/index/gallery/gallery.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/index/gallery/gallery.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-4\" id=\"mainGallery\">\r\n  <div class=\"col-md-3 parent\">\r\n    <div class=\"child\" style=\"background-image: url('https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg')\"></div>\r\n  </div>\r\n  <div class=\"col-md-3 parent\">\r\n    <div class=\"child\" style=\"background-image: url('https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg')\"></div>\r\n  </div>\r\n  <div class=\"col-md-3 parent\">\r\n    <div class=\"child\" style=\"background-image: url('https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg')\"></div>\r\n  </div>\r\n  <div class=\"col-md-3 parent\">\r\n    <div class=\"child\" style=\"background-image: url('https://mdbootstrap.com/img/Photos/Slides/img%20(69).jpg')\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/index/gallery/gallery.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main/index/gallery/gallery.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent {\n  width: 400px;\n  height: 500px;\n  padding: 0px !important; }\n\n.child {\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  /* fallback color */\n  background-position: center;\n  background-size: cover;\n  transition: all 0.5s; }\n\n.parent:hover .child,\n.parent:focus .child {\n  -webkit-transform: scale(1.03);\n      -ms-transform: scale(1.03);\n          transform: scale(1.03); }\n\n.child::before {\n  content: '';\n  display: none;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.parent:hover .child:before,\n.parent:focus .child:before {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbmRleC9nYWxsZXJ5L0U6XFxEZXNhcnJvbGxvIEN1cnNvc1xcQ3Vyc28gQW5ndWxhclxcbWRiLWFuZ3VsYXIvc3JjXFxhcHBcXG1haW5cXGluZGV4XFxnYWxsZXJ5XFxnYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFDYix3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLHdCQUF1QjtFQUFFLG9CQUFvQjtFQUM3Qyw0QkFBMkI7RUFDM0IsdUJBQXNCO0VBQ3RCLHFCQUFvQixFQUNyQjs7QUFDRDs7RUFFRSwrQkFBc0I7TUFBdEIsMkJBQXNCO1VBQXRCLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxjQUFhO0VBQ2IsYUFBWTtFQUNaLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU8sRUFDUjs7QUFFRDs7RUFFRSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2luZGV4L2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2hpbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgLyogZmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG4ucGFyZW50OmhvdmVyIC5jaGlsZCxcclxuLnBhcmVudDpmb2N1cyAuY2hpbGQge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbn1cclxuLmNoaWxkOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnBhcmVudDpob3ZlciAuY2hpbGQ6YmVmb3JlLFxyXG4ucGFyZW50OmZvY3VzIC5jaGlsZDpiZWZvcmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/index/gallery/gallery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/index/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
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

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/main/index/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/main/index/gallery/gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/main/index/index.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/index/index.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-slider></app-slider>\r\n  <app-search></app-search>\r\n  <div class=\"container py-4\">\r\n    <h1 class=\"text-center my-4\">Top Sitios</h1>\r\n    <!-- <h3 class=\"text-center\">Planes mas Solicitados</h3> -->\r\n    <div class=\"row\">\r\n      <app-card-site class=\"col-md-4 col-sm-6 my-2\"></app-card-site>\r\n      <app-card-site class=\"col-md-4 col-sm-6 my-2\"></app-card-site>\r\n      <app-card-site class=\"col-md-4 col-sm-6 my-2\"></app-card-site>\r\n    </div>\r\n  </div>\r\n  <app-gallery></app-gallery>\r\n  <div class=\"container\">\r\n    <h1 class=\"text-center my-4\">Paquetes</h1>\r\n    <!-- <h3 class=\"text-center mb-4\">Paquetes mas Solicitados</h3> -->\r\n    <div class=\"row mb-5\">\r\n      <app-package class=\"col-md-3 col-sm-6 my-2\"></app-package>\r\n      <app-package class=\"col-md-3 col-sm-6 my-2\"></app-package>\r\n      <app-package class=\"col-md-3 col-sm-6 my-2\"></app-package>\r\n      <app-package class=\"col-md-3 col-sm-6 my-2\"></app-package>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/index/index.component.scss":
/*!*************************************************!*\
  !*** ./src/app/main/index/index.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/index/index.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/index/index.component.ts ***!
  \***********************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
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

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/main/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/main/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.routes */ "./src/app/main/main.routes.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: _main_routes__WEBPACK_IMPORTED_MODULE_2__["mainRoutes"],
    },
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"page-body-wrapper\">\n  <div class=\"main-panel\">\n    <div class=\"content-wrapper\">\n      <router-outlet></router-outlet>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
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

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/main/index/index.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/main/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/main/contact/contact.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _shared_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/search/search.component */ "./src/app/shared/search/search.component.ts");
/* harmony import */ var _index_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index/gallery/gallery.component */ "./src/app/main/index/gallery/gallery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], _shared_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"], _index_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_7__["MainRoutingModule"]],
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/main.routes.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.routes.ts ***!
  \*************************************/
/*! exports provided: mainRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainRoutes", function() { return mainRoutes; });
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.component */ "./src/app/main/index/index.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "./src/app/main/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/main/contact/contact.component.ts");



var mainRoutes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"] },
    { path: 'nosotros', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'contacto', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
];


/***/ }),

/***/ "./src/app/main/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/main/material.module.ts ***!
  \*****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// For MDB Angular Free
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["NavbarModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["WavesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["DropdownModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["CarouselModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["IconsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["InputsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["ModalModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["CardsFreeModule"],
            ],
            exports: [
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["NavbarModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["WavesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["DropdownModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["CarouselModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["IconsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["InputsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["ModalModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["CardsFreeModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/card-site/card-site.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/card-site/card-site.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Card-->\n<mdb-card>\n  <!--Card image-->\n  <div class=\"view overlay waves-light\" mdbWavesEffect>\n    <mdb-card-img src=\"https://mdbootstrap.com/img/Photos/Others/food.jpg\"></mdb-card-img>\n    <a>\n      <div class=\"mask rgba-white-slight\"></div>\n    </a>\n  </div>\n  <!--/.Card image-->\n\n  <!--Button-->\n  <a\n    class=\"btn-floating btn-action ml-auto mr-4 bg-success text-center lighten-3 waves-light\"\n    id=\"buttonFloat\"\n    mdbWavesEffect\n  >\n    <i class=\"fas fa-chevron-right pl-1 waves-light\" mdbWavesEffect></i>\n  </a>\n\n  <!--Card content-->\n  <mdb-card-body>\n    <!--Title-->\n    <mdb-card-title>\n      <h4>Card title</h4>\n    </mdb-card-title>\n\n    <hr />\n    <!--Text-->\n    <p class=\"font-small grey-dark-text mb-0\">\n      Some quick example text to build on the card title and make up the bulk of the card's content.\n    </p>\n  </mdb-card-body>\n  <!--/.Card content-->\n  <!-- Card footer -->\n  <mdb-card-footer class=\"bg-success text-center\">\n    <ul class=\"list-unstyled list-inline font-small mt-3\">\n      <li class=\"list-inline-item pr-2 white-text\"><i class=\"far fa-clock pr-1\"></i>05/10/2015</li>\n      <li class=\"list-inline-item pr-2\">\n        <a href=\"#\" class=\"white-text\"> <i class=\"far fa-comments pr-1\"></i>12</a>\n      </li>\n      <li class=\"list-inline-item pr-2\">\n        <a href=\"#\" class=\"white-text\"> <i class=\"fab fa-facebook-f pr-1\"> </i>21</a>\n      </li>\n      <li class=\"list-inline-item\">\n        <a href=\"#\" class=\"white-text\"> <i class=\"fab fa-twitter pr-1\"> </i>5</a>\n      </li>\n    </ul>\n  </mdb-card-footer>\n  <!-- Card footer -->\n</mdb-card>\n<!--/.Card-->\n"

/***/ }),

/***/ "./src/app/shared/card-site/card-site.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/card-site/card-site.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#buttonFloat {\n  border-radius: 50% !important;\n  width: 50px !important;\n  height: 50px !important;\n  position: relative !important;\n  top: -25px;\n  box-shadow: 2px 5px 26px -1px rgba(0, 0, 0, 0.75); }\n  #buttonFloat:hover {\n    box-shadow: 2px 8px 26px -1px rgba(0, 0, 0, 0.75); }\n  #buttonFloat i {\n  color: white !important;\n  position: relative !important;\n  top: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQtc2l0ZS9FOlxcRGVzYXJyb2xsbyBDdXJzb3NcXEN1cnNvIEFuZ3VsYXJcXG1kYi1hbmd1bGFyL3NyY1xcYXBwXFxzaGFyZWRcXGNhcmQtc2l0ZVxcY2FyZC1zaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQTZCO0VBQzdCLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIsOEJBQTZCO0VBQzdCLFdBQVU7RUFHVixrREFBaUQsRUFNbEQ7RUFkRDtJQVlJLGtEQUFpRCxFQUNsRDtFQUVIO0VBQ0Usd0JBQW9DO0VBQ3BDLDhCQUE2QjtFQUM3QixVQUFTLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2FyZC1zaXRlL2NhcmQtc2l0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNidXR0b25GbG9hdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB0b3A6IC0yNXB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDVweCAyNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDJweCA1cHggMjZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDVweCAyNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAmOmhvdmVyIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDhweCAyNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDhweCAyNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA4cHggMjZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgfVxyXG59XHJcbiNidXR0b25GbG9hdCBpIHtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAxNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/card-site/card-site.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/card-site/card-site.component.ts ***!
  \*********************************************************/
/*! exports provided: CardSiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSiteComponent", function() { return CardSiteComponent; });
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

var CardSiteComponent = /** @class */ (function () {
    function CardSiteComponent() {
    }
    CardSiteComponent.prototype.ngOnInit = function () { };
    CardSiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-site',
            template: __webpack_require__(/*! ./card-site.component.html */ "./src/app/shared/card-site/card-site.component.html"),
            styles: [__webpack_require__(/*! ./card-site.component.scss */ "./src/app/shared/card-site/card-site.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], CardSiteComponent);
    return CardSiteComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"page-footer font-small special-color-dark pt-4\">\n  <!-- Footer Elements -->\n  <div class=\"container\">\n    <ul class=\"list-unstyled list-inline text-center\">\n      <li class=\"list-inline-item\">\n        <a class=\"btn-floating btn-fb mx-1 btn-lg\" mdbWavesEffect>\n          <mdb-icon fab icon=\"facebook\"></mdb-icon>\n        </a>\n      </li>\n      <li class=\"list-inline-item\">\n        <a class=\"btn-floating btn-tw mx-1 btn-lg\" mdbWavesEffect>\n          <mdb-icon fab icon=\"twitter\"></mdb-icon>\n        </a>\n      </li>\n      <li class=\"list-inline-item\">\n        <a class=\"btn-floating btn-gplus mx-1 btn-lg\" mdbWavesEffect>\n          <mdb-icon fab fab icon=\"google-plus\"></mdb-icon>\n        </a>\n      </li>\n      <li class=\"list-inline-item\">\n        <a class=\"btn-floating btn-li mx-1 btn-lg\" mdbWavesEffect>\n          <mdb-icon fab icon=\"linkedin\"></mdb-icon>\n        </a>\n      </li>\n      <li class=\"list-inline-item\">\n        <a class=\"btn-floating btn-dribbble mx-1 btn-lg\" mdbWavesEffect>\n          <mdb-icon fab icon=\"dribbble\"></mdb-icon>\n        </a>\n      </li>\n    </ul>\n  </div>\n  <!-- Footer Elements -->\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center py-3\">\n    © 2018 Copyright:\n    <a href=\"/\"> TriperEjemplo.com</a>\n  </div>\n  <!-- Copyright -->\n</footer>\n<!-- Footer -->\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\n<mdb-navbar #nav SideClass=\"navbar navbar-expand-lg navbar-light white fixed-top\">\n  <!-- Navbar brand -->\n  <mdb-navbar-brand>\n    <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"assets/logo.png\" alt=\" ads\" />\n    </a>\n  </mdb-navbar-brand>\n\n  <links>\n    <!-- Links -->\n    <ul class=\"navbar-nav nav-flex-icons ml-auto\">\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['/inicio']\" class=\"nav-link\" routerLinkActive=\"active\">Inicio</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['/nosotros']\" class=\"nav-link\" routerLinkActive=\"active\">Nosotros</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['/contacto']\" class=\"nav-link\" routerLinkActive=\"active\">Contacto</a>\n      </li>\n    </ul>\n    <!-- Links -->\n  </links>\n  <!-- Collapsible content -->\n</mdb-navbar>\n<!--/.Navbar-->\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/package/package.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/package/package.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Card-->\r\n<mdb-card class=\"animated flipInY\">\r\n  <!--Card image-->\r\n  <div class=\"view overlay waves-light\" mdbWavesEffect>\r\n    <mdb-card-img src=\"https://mdbootstrap.com/img/Photos/Others/food.jpg\"></mdb-card-img>\r\n    <a>\r\n      <div class=\"mask rgba-white-slight\"></div>\r\n    </a>\r\n  </div>\r\n  <!--/.Card image-->\r\n\r\n  <!--Card content-->\r\n  <mdb-card-body>\r\n    <!--Title-->\r\n    <mdb-card-title>\r\n      <h5 class=\"text-center\">Fin de semana en Cundinamarca</h5>\r\n    </mdb-card-title>\r\n\r\n    <!--Text-->\r\n    <p class=\"font-small grey-dark-text mb-0 text-center\">\r\n      Bogota, La Vega\r\n    </p>\r\n  </mdb-card-body>\r\n  <!--/.Card content-->\r\n  <!-- Card footer -->\r\n  <mdb-card-footer class=\"bg-transparent\">\r\n    <ul class=\"list-unstyled list-inline font-small mt-3 text-center\">\r\n      <li class=\"list-inline-item pr-2\"><i class=\"fa fa-person-booth pr-1\"></i>1</li>\r\n      <li class=\"list-inline-item pr-2\"><i class=\"fab fa-facebook-f pr-1\"> </i>21</li>\r\n      <li class=\"list-inline-item\"><i class=\"fab fa-twitter pr-1\"> </i>5</li>\r\n    </ul>\r\n\r\n    <div class=\"d-flex justify-content-between align-content-center\">\r\n      <span class=\"d-flex align-content-center justify-content-center align-self-center text-success\" color=\"success\">$ 300</span>\r\n      <button mdbBtn type=\"button\" color=\"success\" rounded=\"true\" mdbWavesEffect>Detalles</button>\r\n    </div>\r\n  </mdb-card-footer>\r\n  <!-- Card footer -->\r\n</mdb-card>\r\n<!--/.Card-->\r\n"

/***/ }),

/***/ "./src/app/shared/package/package.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/package/package.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  color: black !important; }\n\nbutton {\n  border-radius: 64px 64px 64px 64px;\n  -moz-border-radius: 64px 64px 64px 64px;\n  -webkit-border-radius: 64px 64px 64px 64px;\n  border: 0px solid #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhY2thZ2UvRTpcXERlc2Fycm9sbG8gQ3Vyc29zXFxDdXJzbyBBbmd1bGFyXFxtZGItYW5ndWxhci9zcmNcXGFwcFxcc2hhcmVkXFxwYWNrYWdlXFxwYWNrYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQThCLEVBQy9COztBQUNEO0VBQ0UsbUNBQWtDO0VBQ2xDLHdDQUF1QztFQUN2QywyQ0FBMEM7RUFDMUMsMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BhY2thZ2UvcGFja2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcbn1cclxuYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA2NHB4IDY0cHggNjRweCA2NHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNjRweCA2NHB4IDY0cHggNjRweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDY0cHggNjRweCA2NHB4IDY0cHg7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgIzAwMDAwMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/package/package.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/package/package.component.ts ***!
  \*****************************************************/
/*! exports provided: PackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageComponent", function() { return PackageComponent; });
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

var PackageComponent = /** @class */ (function () {
    function PackageComponent() {
    }
    PackageComponent.prototype.ngOnInit = function () {
    };
    PackageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-package',
            template: __webpack_require__(/*! ./package.component.html */ "./src/app/shared/package/package.component.html"),
            styles: [__webpack_require__(/*! ./package.component.scss */ "./src/app/shared/package/package.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PackageComponent);
    return PackageComponent;
}());



/***/ }),

/***/ "./src/app/shared/search/search.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/search/search.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-success text-light\" id=\"searchContainer\">\n  <form [formGroup]=\"form\" class=\"container py-4\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <label for=\"actividad\" class=\"\">Actividad</label>\n        <select formControlName=\"op1\" name=\"op1\" id=\"actividad\" class=\"browser-default custom-select\">\n          <option selected>Open this select menu</option>\n          <option value=\"1\">One</option>\n          <option value=\"2\">Two</option>\n          <option value=\"3\">Three</option>\n        </select>\n      </div>\n      <div class=\"col\">\n        <label for=\"destino\" class=\"\">Destino</label>\n        <select formControlName=\"op2\" name=\"op2\" id=\"destino\" class=\"browser-default custom-select\">\n          <option selected>Open this select menu</option>\n          <option value=\"1\">One</option>\n          <option value=\"2\">Two</option>\n          <option value=\"3\">Three</option>\n        </select>\n      </div>\n      <div class=\"col\">\n        <label class=\"\">Fecha </label>\n        <input class=\"form-control\" type=\"date\" formControlName=\"fecha\" name=\"fecha\" />\n      </div>\n      <div class=\"col\">\n        <label class=\"\">Encontrar </label>\n        <button type=\"submit\" class=\"btn btn-primary form-control p-0 m-0\">Buscar</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/search/search.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/search/search.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#searchContainer {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlYXJjaC9FOlxcRGVzYXJyb2xsbyBDdXJzb3NcXEN1cnNvIEFuZ3VsYXJcXG1kYi1hbmd1bGFyL3NyY1xcYXBwXFxzaGFyZWRcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsNkJBQTRCO0VBQzVCLDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsdUJBQXNCO0VBQ3RCLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaENvbnRhaW5lciB7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21kYm9vdHN0cmFwLmNvbS9pbWcvUGhvdG9zL1NsaWRlcy9pbWclMjAoNikuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.dataForm = {
            op1: '',
            op2: '',
            fecha: '',
        };
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            op1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            op2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    SearchComponent.prototype.onSubmit = function () {
        console.log(this.form.invalid);
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/shared/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/shared/search/search.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/shared/slider/slider.component.ts");
/* harmony import */ var _main_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../main/material.module */ "./src/app/main/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _card_site_card_site_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card-site/card-site.component */ "./src/app/shared/card-site/card-site.component.ts");
/* harmony import */ var _package_package_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./package/package.component */ "./src/app/shared/package/package.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _main_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"],
                _card_site_card_site_component__WEBPACK_IMPORTED_MODULE_9__["CardSiteComponent"],
                _package_package_component__WEBPACK_IMPORTED_MODULE_10__["PackageComponent"],
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"],
                _main_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _card_site_card_site_component__WEBPACK_IMPORTED_MODULE_9__["CardSiteComponent"],
                _package_package_component__WEBPACK_IMPORTED_MODULE_10__["PackageComponent"],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sidebar works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/slider/slider.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/slider/slider.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-carousel class=\"carousel slide carousel-fade\" [animation]=\"'fade'\">\n  <mdb-carousel-item>\n    <div class=\"view w-100\">\n      <img class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg\" alt=\"First slide\" />\n      <div class=\"mask rgba-black-light waves-light\" mdbWavesEffect></div>\n    </div>\n    <div class=\"carousel-caption\">\n      <h3 class=\"h3-responsive\">Light mask</h3>\n      <button type=\"button\" class=\"btn btn-success\">Success</button>\n      <p>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aliquid labore dolorum maiores fugiat magni\n        sit tenetur quibusdam ex et, esse consectetur nihil doloribus facere nam similique nesciunt sed iusto.\n      </p>\n    </div>\n  </mdb-carousel-item>\n  <mdb-carousel-item>\n    <div class=\"view w-100\">\n      <img class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg\" alt=\"Second slide\" />\n      <div class=\"mask rgba-black-strong waves-light\" mdbWavesEffect></div>\n    </div>\n    <div class=\"carousel-caption\">\n      <h3 class=\"h3-responsive\">Strong mask</h3>\n      <button type=\"button\" class=\"btn btn-success\">Success</button>\n      <p>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aliquid labore dolorum maiores fugiat magni\n        sit tenetur quibusdam ex et, esse consectetur nihil doloribus facere nam similique nesciunt sed iusto.\n      </p>\n    </div>\n  </mdb-carousel-item>\n  <mdb-carousel-item>\n    <div class=\"view w-100\">\n      <img class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg\" alt=\"Third slide\" />\n      <div class=\"mask rgba-black-slight waves-light\" mdbWavesEffect></div>\n    </div>\n    <div class=\"carousel-caption\">\n      <h3 class=\"h3-responsive\">Slight mask</h3>\n      <button type=\"button\" class=\"btn btn-success\">Success</button>\n      <p>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aliquid labore dolorum maiores fugiat magni\n        sit tenetur quibusdam ex et, esse consectetur nihil doloribus facere nam similique nesciunt sed iusto.\n      </p>\n    </div>\n  </mdb-carousel-item>\n</mdb-carousel>\n"

/***/ }),

/***/ "./src/app/shared/slider/slider.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/slider/slider.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/slider/slider.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/slider/slider.component.ts ***!
  \***************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
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

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/shared/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/shared/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
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
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! E:\Desarrollo Cursos\Curso Angular\mdb-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map