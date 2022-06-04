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
/* harmony import */ var _sp_experience_sp_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sp-experience/sp-experience.component */ "./src/app/sp-experience/sp-experience.component.ts");
/* harmony import */ var _sp_projects_sp_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sp-projects/sp-projects.component */ "./src/app/sp-projects/sp-projects.component.ts");
/* harmony import */ var _sp_about_me_sp_about_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sp-about-me/sp-about-me.component */ "./src/app/sp-about-me/sp-about-me.component.ts");
/* harmony import */ var _sp_contact_me_sp_contact_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sp-contact-me/sp-contact-me.component */ "./src/app/sp-contact-me/sp-contact-me.component.ts");
/* harmony import */ var _sp_skills_sp_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sp-skills/sp-skills.component */ "./src/app/sp-skills/sp-skills.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");










const routes = [
    {
        path: 'about-me',
        component: _sp_about_me_sp_about_me_component__WEBPACK_IMPORTED_MODULE_4__["SpAboutMeComponent"],
    }, {
        path: '',
        redirectTo: '/about-me',
        pathMatch: 'full'
    }, {
        path: 'experience',
        component: _sp_experience_sp_experience_component__WEBPACK_IMPORTED_MODULE_2__["SpExperienceComponent"],
    }, {
        path: 'projects',
        component: _sp_projects_sp_projects_component__WEBPACK_IMPORTED_MODULE_3__["SpProjectsComponent"],
    }, {
        path: 'skills',
        component: _sp_skills_sp_skills_component__WEBPACK_IMPORTED_MODULE_6__["SpSkillsComponent"],
    }, {
        path: 'contact-me',
        component: _sp_contact_me_sp_contact_me_component__WEBPACK_IMPORTED_MODULE_5__["SpContactMeComponent"],
    }, {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
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
/* harmony import */ var _sp_contact_me_sp_contact_me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sp-contact-me/sp-contact-me.component */ "./src/app/sp-contact-me/sp-contact-me.component.ts");
/* harmony import */ var _sp_nav_sp_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sp-nav/sp-nav.component */ "./src/app/sp-nav/sp-nav.component.ts");
/* harmony import */ var _sp_scroller_sp_scroller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sp-scroller/sp-scroller.component */ "./src/app/sp-scroller/sp-scroller.component.ts");
/* harmony import */ var _sp_social_media_sp_social_media_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sp-social-media/sp-social-media.component */ "./src/app/sp-social-media/sp-social-media.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sp_footer_sp_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sp-footer/sp-footer.component */ "./src/app/sp-footer/sp-footer.component.ts");








class AppComponent {
    constructor() {
        this.title = 'Enthusiastic Programmer';
        this.updateSocialMedia = false;
        // console.log( VERSION.full );
    }
    onActivate(event) {
        if (event instanceof _sp_contact_me_sp_contact_me_component__WEBPACK_IMPORTED_MODULE_1__["SpContactMeComponent"]) {
            this.updateSocialMedia = true;
        }
        else {
            this.updateSocialMedia = false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [[1, "container-fluid"], [3, "title"], [3, "updateSocialMedia"], [3, "activate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sp-nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sp-scroller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sp-social-media", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "router-outlet", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_4_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sp-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("updateSocialMedia", ctx.updateSocialMedia);
    } }, directives: [_sp_nav_sp_nav_component__WEBPACK_IMPORTED_MODULE_2__["SpNavComponent"], _sp_scroller_sp_scroller_component__WEBPACK_IMPORTED_MODULE_3__["SpScrollerComponent"], _sp_social_media_sp_social_media_component__WEBPACK_IMPORTED_MODULE_4__["SpSocialMediaComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _sp_footer_sp_footer_component__WEBPACK_IMPORTED_MODULE_6__["SpFooterComponent"]], styles: ["[_nghost-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  position: relative;\n  padding-right: 3.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSDpcXHByb2plY3RzXFxzaXZha3VtYXItcG9ydG9mb2xpby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5jb250YWluZXItZmx1aWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _sp_nav_sp_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sp-nav/sp-nav.component */ "./src/app/sp-nav/sp-nav.component.ts");
/* harmony import */ var _sp_home_sp_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sp-home/sp-home.component */ "./src/app/sp-home/sp-home.component.ts");
/* harmony import */ var _sp_experience_sp_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sp-experience/sp-experience.component */ "./src/app/sp-experience/sp-experience.component.ts");
/* harmony import */ var _sp_projects_sp_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sp-projects/sp-projects.component */ "./src/app/sp-projects/sp-projects.component.ts");
/* harmony import */ var _sp_about_me_sp_about_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sp-about-me/sp-about-me.component */ "./src/app/sp-about-me/sp-about-me.component.ts");
/* harmony import */ var _sp_contact_me_sp_contact_me_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sp-contact-me/sp-contact-me.component */ "./src/app/sp-contact-me/sp-contact-me.component.ts");
/* harmony import */ var _sp_skills_sp_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sp-skills/sp-skills.component */ "./src/app/sp-skills/sp-skills.component.ts");
/* harmony import */ var _sp_scroller_sp_scroller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sp-scroller/sp-scroller.component */ "./src/app/sp-scroller/sp-scroller.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _sp_footer_sp_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sp-footer/sp-footer.component */ "./src/app/sp-footer/sp-footer.component.ts");
/* harmony import */ var _sp_social_media_sp_social_media_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sp-social-media/sp-social-media.component */ "./src/app/sp-social-media/sp-social-media.component.ts");
/* harmony import */ var _sp_carousel_sp_carousel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sp-carousel/sp-carousel.component */ "./src/app/sp-carousel/sp-carousel.component.ts");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _sp_nav_sp_nav_component__WEBPACK_IMPORTED_MODULE_4__["SpNavComponent"],
        _sp_home_sp_home_component__WEBPACK_IMPORTED_MODULE_5__["SpHomeComponent"],
        _sp_experience_sp_experience_component__WEBPACK_IMPORTED_MODULE_6__["SpExperienceComponent"],
        _sp_projects_sp_projects_component__WEBPACK_IMPORTED_MODULE_7__["SpProjectsComponent"],
        _sp_about_me_sp_about_me_component__WEBPACK_IMPORTED_MODULE_8__["SpAboutMeComponent"],
        _sp_contact_me_sp_contact_me_component__WEBPACK_IMPORTED_MODULE_9__["SpContactMeComponent"],
        _sp_skills_sp_skills_component__WEBPACK_IMPORTED_MODULE_10__["SpSkillsComponent"],
        _sp_scroller_sp_scroller_component__WEBPACK_IMPORTED_MODULE_11__["SpScrollerComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
        _sp_footer_sp_footer_component__WEBPACK_IMPORTED_MODULE_13__["SpFooterComponent"],
        _sp_social_media_sp_social_media_component__WEBPACK_IMPORTED_MODULE_14__["SpSocialMediaComponent"],
        _sp_carousel_sp_carousel_component__WEBPACK_IMPORTED_MODULE_15__["SpCarouselComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _sp_nav_sp_nav_component__WEBPACK_IMPORTED_MODULE_4__["SpNavComponent"],
                    _sp_home_sp_home_component__WEBPACK_IMPORTED_MODULE_5__["SpHomeComponent"],
                    _sp_experience_sp_experience_component__WEBPACK_IMPORTED_MODULE_6__["SpExperienceComponent"],
                    _sp_projects_sp_projects_component__WEBPACK_IMPORTED_MODULE_7__["SpProjectsComponent"],
                    _sp_about_me_sp_about_me_component__WEBPACK_IMPORTED_MODULE_8__["SpAboutMeComponent"],
                    _sp_contact_me_sp_contact_me_component__WEBPACK_IMPORTED_MODULE_9__["SpContactMeComponent"],
                    _sp_skills_sp_skills_component__WEBPACK_IMPORTED_MODULE_10__["SpSkillsComponent"],
                    _sp_scroller_sp_scroller_component__WEBPACK_IMPORTED_MODULE_11__["SpScrollerComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                    _sp_footer_sp_footer_component__WEBPACK_IMPORTED_MODULE_13__["SpFooterComponent"],
                    _sp_social_media_sp_social_media_component__WEBPACK_IMPORTED_MODULE_14__["SpSocialMediaComponent"],
                    _sp_carousel_sp_carousel_component__WEBPACK_IMPORTED_MODULE_15__["SpCarouselComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sp-about-me/sp-about-me.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sp-about-me/sp-about-me.component.ts ***!
  \******************************************************/
/*! exports provided: SpAboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpAboutMeComponent", function() { return SpAboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sp_carousel_sp_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sp-carousel/sp-carousel.component */ "./src/app/sp-carousel/sp-carousel.component.ts");



const _c0 = ["designer"];
const _c1 = ["developer"];
class SpAboutMeComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.designerAtTop = false;
        this.textShadow = '8px 8px 3.5px #c5c2c2';
        // Text translate variables
        this.translateAmount = 15;
        this.translateTop = `translateY( -${this.translateAmount}px )`;
        this.translateBottom = `translateY( ${this.translateAmount}px )`;
        this.spIntro = [
            `<span class="sp-big-letter">H</span>ello, this is <strong>Sivakumar Tadisetti</strong>, an enthusiastic and professional <strong>web designer and developer</strong>
              having 6+ years of experience in IT industry who can develop a website from scratch using both frontend and
              backend technologies`,
            `<span class="sp-big-letter">G</span>raduated with my degree in <strong>Computer Science</strong> in the year 2015`,
            `<span class="sp-big-letter">P</span>roficient in working with Javascript, HTML5, CSS3, Angular, React and NodeJS`,
            `<span class="sp-big-letter">D</span>eep diving into Angular, React and NodeJS. Learning Ionic to get understanding and knowledge in mobile application development.`,
            `<span class="sp-big-letter">T</span>otally worked on 5+ awesome projects and eager to work on many more.`,
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.animateSkills();
    }
    animateSkills() {
        setInterval(() => {
            if (!this.designerAtTop) {
                this.animateText(this.designer, false);
                this.animateText(this.developer, true);
            }
            else {
                this.animateText(this.developer, false);
                this.animateText(this.designer, true);
            }
            this.designerAtTop = !this.designerAtTop;
        }, 2000);
    }
    animateText(ele, position) {
        this.renderer.setAttribute(ele.nativeElement, 'style', position
            ?
                `
        transform : ${this.translateTop} rotateX( 360deg );
        text-shadow : ${this.textShadow};
        color : green;
      `
            :
                `
        transform : ${this.translateBottom} rotateX( -360deg );
        text-shadow : none;
        color : brown;
      `);
    }
}
SpAboutMeComponent.ɵfac = function SpAboutMeComponent_Factory(t) { return new (t || SpAboutMeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
SpAboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpAboutMeComponent, selectors: [["app-sp-about-me"]], viewQuery: function SpAboutMeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.designer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.developer = _t.first);
    } }, decls: 15, vars: 1, consts: [[1, "container-fluid"], [1, "row", "intro-container"], [1, "col-sm-8", "intro-details"], [1, "sp-title"], [1, "sp-title-word"], ["designer", ""], ["developer", ""], [3, "paras"], [1, "col-sm", "sp-intro"]], template: function SpAboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Web ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-sp-carousel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paras", ctx.spIntro);
    } }, directives: [_sp_carousel_sp_carousel_component__WEBPACK_IMPORTED_MODULE_1__["SpCarouselComponent"]], styles: ["[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .intro-container[_ngcontent-%COMP%] {\n  height: 70vh;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .intro-container[_ngcontent-%COMP%]   .intro-details[_ngcontent-%COMP%]   .sp-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 900;\n  font-size: xx-large;\n  font-family: \"Lobster Two\", cursive;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .intro-container[_ngcontent-%COMP%]   .intro-details[_ngcontent-%COMP%]   .sp-title[_ngcontent-%COMP%]   .sp-title-word[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: all 1s;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .intro-container[_ngcontent-%COMP%]   .intro-details[_ngcontent-%COMP%]   .sp-title[_ngcontent-%COMP%]   .sp-title-word[_ngcontent-%COMP%]:nth-of-type(1) {\n  transform: translateY(-15px);\n  text-shadow: 8px 8px 3.5px #c5c2c2;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .intro-container[_ngcontent-%COMP%]   .intro-details[_ngcontent-%COMP%]   .sp-title[_ngcontent-%COMP%]   .sp-title-word[_ngcontent-%COMP%]:nth-of-type(2) {\n  transform: translateY(15px);\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .intro-container[_ngcontent-%COMP%]   .sp-intro[_ngcontent-%COMP%] {\n  background-image: url('skt-img.jpg');\n  background-size: 85% 100%;\n  background-repeat: no-repeat;\n  background-position: top;\n  transform: scaleX(-1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3AtYWJvdXQtbWUvSDpcXHByb2plY3RzXFxzaXZha3VtYXItcG9ydG9mb2xpby9zcmNcXGFwcFxcc3AtYWJvdXQtbWVcXHNwLWFib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcC1hYm91dC1tZS9zcC1hYm91dC1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNFLFlBQUE7QUNEVjtBREljO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7QUNGaEI7QURJZ0I7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDRmxCO0FESWtCO0VBQ0UsNEJBQUE7RUFDQSxrQ0FBQTtBQ0ZwQjtBREtrQjtFQUNFLDJCQUFBO0FDSHBCO0FEU1k7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FDUGhCIiwiZmlsZSI6InNyYy9hcHAvc3AtYWJvdXQtbWUvc3AtYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgICAuaW50cm8tY29udGFpbmVyIHtcclxuICAgICAgICAgIGhlaWdodDogNzB2aDtcclxuXHJcbiAgICAgICAgICAgIC5pbnRyby1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAuc3AtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xvYnN0ZXIgVHdvJywgY3Vyc2l2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAuc3AtdGl0bGUtd29yZCB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSggMSApIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoIC0xNXB4ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDhweCA4cHggMy41cHggI2M1YzJjMjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSggMiApIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoIDE1cHggKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNwLWludHJvIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NrdC1pbWcuanBnJyk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JSAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKCAtMSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IHNlY3Rpb24gLmludHJvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNzB2aDtcbn1cbjpob3N0IHNlY3Rpb24gLmludHJvLWNvbnRhaW5lciAuaW50cm8tZGV0YWlscyAuc3AtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXIgVHdvXCIsIGN1cnNpdmU7XG59XG46aG9zdCBzZWN0aW9uIC5pbnRyby1jb250YWluZXIgLmludHJvLWRldGFpbHMgLnNwLXRpdGxlIC5zcC10aXRsZS13b3JkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG46aG9zdCBzZWN0aW9uIC5pbnRyby1jb250YWluZXIgLmludHJvLWRldGFpbHMgLnNwLXRpdGxlIC5zcC10aXRsZS13b3JkOm50aC1vZi10eXBlKDEpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggMy41cHggI2M1YzJjMjtcbn1cbjpob3N0IHNlY3Rpb24gLmludHJvLWNvbnRhaW5lciAuaW50cm8tZGV0YWlscyAuc3AtdGl0bGUgLnNwLXRpdGxlLXdvcmQ6bnRoLW9mLXR5cGUoMikge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XG59XG46aG9zdCBzZWN0aW9uIC5pbnRyby1jb250YWluZXIgLnNwLWludHJvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NrdC1pbWcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDg1JSAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpAboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sp-about-me',
                templateUrl: './sp-about-me.component.html',
                styleUrls: ['./sp-about-me.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { designer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['designer']
        }], developer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['developer']
        }] }); })();


/***/ }),

/***/ "./src/app/sp-carousel/sp-carousel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sp-carousel/sp-carousel.component.ts ***!
  \******************************************************/
/*! exports provided: SpCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpCarouselComponent", function() { return SpCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = ["rightArrow"];
const _c1 = function (a0) { return { "left": a0 }; };
function SpCarouselComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} if (rf & 2) {
    const text_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", text_r3.para, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, text_r3.left + "%"));
} }
const _c2 = function (a0, a1) { return { "btn-success": a0, "no-border": a1 }; };
class SpCarouselComponent {
    constructor() {
        this._paras = [];
        this.currentIndex = 0;
        this.leftDisabled = true;
        this.rightDisabled = false;
    }
    get paras() {
        return this._paras;
    }
    set paras(paragraphs) {
        this._paras = paragraphs.map((p, i) => !i ? { left: 0, para: p } : { left: 100, para: p });
    }
    ngOnInit() {
        const rightBtnElement = this.rightArrow.nativeElement;
        // setInterval( () => {
        //     if( !this.rightDisabled ) {
        //       rightBtnElement.click();
        //     } else {
        //       this.currentIndex = 0;
        //       this.rightDisabled = false;
        //       this.leftDisabled = true;
        //       this.paras.forEach( ( para, index ) => {
        //         if( index ) {
        //           para.left = 100;
        //         } else {
        //           para.left = 0;
        //         }
        //       } );
        //     }
        //  }, 6500 );
    }
    updatePara(right) {
        const ci = this.currentIndex;
        const parasLength = this.paras.length;
        if (right) {
            if (this.currentIndex + 1 < parasLength) {
                this.currentIndex += 1;
                this.paras[ci].left = -100;
                this.paras[this.currentIndex].left = 0;
                this.leftDisabled = false;
                if (this.currentIndex + 1 === parasLength) {
                    this.rightDisabled = true;
                }
            }
        }
        else {
            if (this.currentIndex > 0) {
                this.currentIndex -= 1;
                this.paras[ci].left = 100;
                this.paras[this.currentIndex].left = 0;
                this.rightDisabled = false;
                if (this.currentIndex === 0) {
                    this.leftDisabled = true;
                }
            }
        }
    }
}
SpCarouselComponent.ɵfac = function SpCarouselComponent_Factory(t) { return new (t || SpCarouselComponent)(); };
SpCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpCarouselComponent, selectors: [["app-sp-carousel"]], viewQuery: function SpCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rightArrow = _t.first);
    } }, inputs: { paras: "paras" }, decls: 9, vars: 11, consts: [[1, "slider-container"], [1, "left-arrow", "btn", 3, "disabled", "ngClass", "click"], ["leftArrow", ""], [1, "fas", "fa-chevron-left"], [1, "slider-content"], ["class", "intro-para", 3, "innerHTML", "ngStyle", 4, "ngFor", "ngForOf"], [1, "right-arrow", "btn", 3, "disabled", "ngClass", "click"], ["rightArrow", ""], [1, "fas", "fa-chevron-right"], [1, "intro-para", 3, "innerHTML", "ngStyle"]], template: function SpCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpCarouselComponent_Template_button_click_1_listener() { return ctx.updatePara(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SpCarouselComponent_div_5_Template, 1, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpCarouselComponent_Template_button_click_6_listener() { return ctx.updatePara(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.leftDisabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, !ctx.leftDisabled, ctx.leftDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paras);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.rightDisabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c2, !ctx.rightDisabled, ctx.rightDisabled));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["[_nghost-%COMP%]   .slider-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .slider-container[_ngcontent-%COMP%]   .left-arrow[_ngcontent-%COMP%], [_nghost-%COMP%]   .slider-container[_ngcontent-%COMP%]   .right-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 1px solid #ccc;\n  top: 50%;\n  outline: none;\n  transform: translateY(-50%);\n}\n[_nghost-%COMP%]   .slider-container[_ngcontent-%COMP%]   .left-arrow.no-border[_ngcontent-%COMP%], [_nghost-%COMP%]   .slider-container[_ngcontent-%COMP%]   .right-arrow.no-border[_ngcontent-%COMP%] {\n  border: none;\n}\n[_nghost-%COMP%]   .slider-container[_ngcontent-%COMP%]   .left-arrow[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n[_nghost-%COMP%]   .slider-container[_ngcontent-%COMP%]   .slider-content[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  position: absolute;\n  overflow: hidden;\n  display: flex;\n  text-align: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .slider-container[_ngcontent-%COMP%]   .slider-content[_ngcontent-%COMP%]   .intro-para[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding: 1rem;\n  font-size: 1rem;\n  transition: all 1s;\n}\n[_nghost-%COMP%]   .slider-container[_ngcontent-%COMP%]   .slider-content[_ngcontent-%COMP%]   .intro-para[_ngcontent-%COMP%]   .sp-big-letter[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: bolder;\n}\n[_nghost-%COMP%]   .slider-container[_ngcontent-%COMP%]   .right-arrow[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3AtY2Fyb3VzZWwvSDpcXHByb2plY3RzXFxzaXZha3VtYXItcG9ydG9mb2xpby9zcmNcXGFwcFxcc3AtY2Fyb3VzZWxcXHNwLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcC1jYXJvdXNlbC9zcC1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0RKO0FER0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FDRE47QURHTTtFQUNFLFlBQUE7QUNEUjtBREtJO0VBQ0UsVUFBQTtBQ0hOO0FETUk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pOO0FETU07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSlI7QURNUTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNKVjtBRFNJO0VBQ0UsV0FBQTtBQ1BOIiwiZmlsZSI6InNyYy9hcHAvc3AtY2Fyb3VzZWwvc3AtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gIC5zbGlkZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAubGVmdC1hcnJvdywgLnJpZ2h0LWFycm93IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSggLTUwJSApO1xyXG5cclxuICAgICAgJi5uby1ib3JkZXIge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sZWZ0LWFycm93IHtcclxuICAgICAgbGVmdDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGVyLWNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAuaW50cm8tcGFyYSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuXHJcbiAgICAgICAgLnNwLWJpZy1sZXR0ZXIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1hcnJvdyB7XHJcbiAgICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCAuc2xpZGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuc2xpZGVyLWNvbnRhaW5lciAubGVmdC1hcnJvdywgOmhvc3QgLnNsaWRlci1jb250YWluZXIgLnJpZ2h0LWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgdG9wOiA1MCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbjpob3N0IC5zbGlkZXItY29udGFpbmVyIC5sZWZ0LWFycm93Lm5vLWJvcmRlciwgOmhvc3QgLnNsaWRlci1jb250YWluZXIgLnJpZ2h0LWFycm93Lm5vLWJvcmRlciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbjpob3N0IC5zbGlkZXItY29udGFpbmVyIC5sZWZ0LWFycm93IHtcbiAgbGVmdDogMXJlbTtcbn1cbjpob3N0IC5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItY29udGVudCB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItY29udGVudCAuaW50cm8tcGFyYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xufVxuOmhvc3QgLnNsaWRlci1jb250YWluZXIgLnNsaWRlci1jb250ZW50IC5pbnRyby1wYXJhIC5zcC1iaWctbGV0dGVyIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG46aG9zdCAuc2xpZGVyLWNvbnRhaW5lciAucmlnaHQtYXJyb3cge1xuICByaWdodDogMXJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sp-carousel',
                templateUrl: './sp-carousel.component.html',
                styleUrls: ['./sp-carousel.component.scss']
            }]
    }], function () { return []; }, { rightArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['rightArrow', { static: true }]
        }], paras: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/sp-contact-me/sp-contact-me.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sp-contact-me/sp-contact-me.component.ts ***!
  \**********************************************************/
/*! exports provided: SpContactMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpContactMeComponent", function() { return SpContactMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SpContactMeComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpContactMeComponent.ɵfac = function SpContactMeComponent_Factory(t) { return new (t || SpContactMeComponent)(); };
SpContactMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpContactMeComponent, selectors: [["app-sp-contact-me"]], decls: 22, vars: 0, consts: [[1, "contact-details"], [1, "c-details"], [1, "fas", "fa-envelope"], [1, "fas", "fa-mobile-alt"], [1, "fas", "fa-map-marker-alt"], [1, "resume-block"], ["href", "../../assets/Tadisetti-S-K-L-Sivakumar-Resume.pdf", "target", "_blank", "title", "View Resume", "title", "View Resume", 1, "btn", "btn-info"], [1, "fas", "fa-eye"], [1, "resume-label"], ["href", "../../assets/Tadisetti-S-K-L-Sivakumar-Resume.pdf", "download", "", "title", "Download Resume", 1, "btn", "btn-success"], [1, "fas", "fa-file-download"]], template: function SpContactMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sivakumar Tadisetti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "sivakumar.tadisetti@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+91-9493087808 / +91-8309634801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hyderabad, Telengana, India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]   .contact-details[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 1.5rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2%;\n  box-shadow: 10px 15px 25px #5a5a5a;\n}\n[_nghost-%COMP%]   .contact-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-family: \"Lobster Two\", cursive;\n}\n[_nghost-%COMP%]   .contact-details[_ngcontent-%COMP%]   .c-details[_ngcontent-%COMP%] {\n  margin: 0.8rem;\n}\n[_nghost-%COMP%]   .contact-details[_ngcontent-%COMP%]   .c-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.2rem;\n}\n[_nghost-%COMP%]   .contact-details[_ngcontent-%COMP%]   .c-details[_ngcontent-%COMP%]:nth-of-type(3) {\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .contact-details[_ngcontent-%COMP%]   .resume-block[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 1rem;\n  font-weight: bold;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .contact-details[_ngcontent-%COMP%]   .resume-block[_ngcontent-%COMP%]   .resume-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3AtY29udGFjdC1tZS9IOlxccHJvamVjdHNcXHNpdmFrdW1hci1wb3J0b2ZvbGlvL3NyY1xcYXBwXFxzcC1jb250YWN0LW1lXFxzcC1jb250YWN0LW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcC1jb250YWN0LW1lL3NwLWNvbnRhY3QtbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQ0ROO0FER007RUFDRSxxQkFBQTtFQUNBLG1DQUFBO0FDRFI7QURJTTtFQUNFLGNBQUE7QUNGUjtBRElRO0VBQ0Usb0JBQUE7QUNGVjtBREtRO0VBQ0UscUJBQUE7QUNIVjtBRE9NO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNMUjtBRE9RO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDTFYiLCJmaWxlIjoic3JjL2FwcC9zcC1jb250YWN0LW1lL3NwLWNvbnRhY3QtbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gICAgLmNvbnRhY3QtZGV0YWlscyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCggLTUwJSApO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDEwcHggMTVweCAyNXB4ICM1YTVhNWE7XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXIgVHdvXCIsIGN1cnNpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jLWRldGFpbHMge1xyXG4gICAgICAgIG1hcmdpbjogMC44cmVtO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4ycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVzdW1lLWJsb2NrIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAucmVzdW1lLWxhYmVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IC5jb250YWN0LWRldGFpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgYm94LXNoYWRvdzogMTBweCAxNXB4IDI1cHggIzVhNWE1YTtcbn1cbjpob3N0IC5jb250YWN0LWRldGFpbHMgaDMge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXIgVHdvXCIsIGN1cnNpdmU7XG59XG46aG9zdCAuY29udGFjdC1kZXRhaWxzIC5jLWRldGFpbHMge1xuICBtYXJnaW46IDAuOHJlbTtcbn1cbjpob3N0IC5jb250YWN0LWRldGFpbHMgLmMtZGV0YWlscyBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XG59XG46aG9zdCAuY29udGFjdC1kZXRhaWxzIC5jLWRldGFpbHM6bnRoLW9mLXR5cGUoMykge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG46aG9zdCAuY29udGFjdC1kZXRhaWxzIC5yZXN1bWUtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IC5jb250YWN0LWRldGFpbHMgLnJlc3VtZS1ibG9jayAucmVzdW1lLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMXJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpContactMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sp-contact-me',
                templateUrl: './sp-contact-me.component.html',
                styleUrls: ['./sp-contact-me.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sp-data-model.ts":
/*!**********************************!*\
  !*** ./src/app/sp-data-model.ts ***!
  \**********************************/
/*! exports provided: spMenu, spExperience, spProjects, spSkills, spSocialMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spMenu", function() { return spMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spExperience", function() { return spExperience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spProjects", function() { return spProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spSkills", function() { return spSkills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spSocialMedia", function() { return spSocialMedia; });
// Company theme colors
const rocketThemeColor = '#000000';
const inforThemeColor = '#cd2028';
const abhraThemeColor = '#29aae3';
const zetoeThemeColor = '#45a8c5';
const osmosysThemeColor = '#eb5d34';
const vishnuThemeColor = '#a4238f';
const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const spMenu = [
    {
        name: 'About Me',
        route: 'about-me',
        icon: 'fa-home'
    },
    {
        name: 'Experience',
        route: 'experience',
        icon: 'fa-hat-cowboy'
    },
    {
        name: 'Projects',
        route: 'projects',
        icon: 'fa-project-diagram'
    },
    {
        name: 'Skills',
        route: 'skills',
        icon: 'fa-palette'
    },
    {
        name: 'Contact Me',
        route: 'contact-me',
        icon: 'fa-id-card'
    },
];
const spExperience = [
    {
        name: 'Rocket Software',
        title: 'Software Engineer III',
        from: getFormattedDate(4, 4, 2022),
        to: getTodayDate(),
        webLink: 'https://www.rocketsoftware.com/',
        logo: 'rocket-logo.PNG',
        location: 'Hyderabad, Telengana, India',
        borderColor: rocketThemeColor,
        description: `Currently working as <b>Software Engineer III</b> at this company.
                       Playing the <b>Senior front-end developer</b> role for a no-code/low-code tool<b> <i>Zenith Studio(Nitro)</i></b>, a process apps builder for businesses.
                       And also working on small Java related tasks and Postgres.`
    }, {
        name: 'Infor India Pvt Ltd',
        title: 'Software Engineer',
        from: getFormattedDate(22, 11, 2018),
        to: getFormattedDate(31, 3, 2022),
        webLink: 'https://www.infor.com/',
        logo: 'infor-logo.png',
        location: 'Hyderabad, Telengana, India',
        borderColor: inforThemeColor,
        description: `Worked as <b>Software Engineer</b> at this company.
                       Played the <b>front-end developer</b> role for a wonderful project <b><i>Birst</i></b>, a business intelligence tool.
                       And also sometimes worked on automation for the same project.`
    }, {
        name: 'Abhra Inc',
        title: 'Software Engineer',
        from: getFormattedDate(5, 3, 2018),
        to: getFormattedDate(31, 10, 2018),
        webLink: 'https://abhrainc.com/',
        logo: 'abhra-logo.png',
        location: 'Hyderabad, Telengana, India',
        borderColor: abhraThemeColor,
        description: `This is the company, where my role got changed to <b>Software Engineer</b>.
                       From this company I completely moved to front-end development and worked on a project
                       <b><i>SOXLobby</i></b> and company's small <b><i>campus portal</i></b> project on my last days at the company.`
    }, {
        name: 'Zetoe',
        title: 'Full Stack PHP Developer',
        from: getFormattedDate(15, 9, 2017),
        to: getFormattedDate(3, 3, 2018),
        webLink: 'https://www.facebook.com/Zetoemarket/',
        logo: 'zetoe-logo.png',
        location: 'Hyderabad, Telengana, India',
        borderColor: zetoeThemeColor,
        description: `Zetoe was a very small start-up company with only 2 employees, where I was one of the them.
                       I played a role <b>full stack PHP developer</b> and developed <b><i>Zetoe website</i></b> from scratch
                       and a mobile application <b><i>Ze-warehouse Orders</i></b> from scratch. On my last days at this company,
                       I alone totally revamped the website UI as per the requirement from higher management.`
    }, {
        name: 'Osmosys Software Solutions Pvt Ltd',
        title: 'Associate Software Engineer',
        from: getFormattedDate(25, 8, 2015),
        to: getFormattedDate(31, 8, 2017),
        webLink: 'https://osmosys.co/',
        logo: 'osmosys-logo.png',
        location: 'Hyderabad, Telengana, India',
        borderColor: osmosysThemeColor,
        description: `This is the company, where I started my career as <b>Associate software engineer</b> after completion of my graduation.
                       Here I got great opportunties to work on different client projects like <b><i>Riveng, Eddie Catz</i></b>
                       and company's internal projects like <b><i>Pinestem, Leave management application, Employee attendance</i></b> and
                       some <i><b>wordpress projects</i></b>.`
    }, {
        name: 'Vishnu Institute Of Technology',
        title: 'Computer Science Graduate ( Bachelor of Technology, UG )',
        from: getFormattedDate(1, 6, 2011),
        to: getFormattedDate(31, 5, 2015),
        webLink: 'http://vishnu.edu.in/',
        logo: 'vishnu-logo.png',
        location: 'Bhimavaram, Andhra Pradesh, India',
        borderColor: vishnuThemeColor,
        description: `This is the college, where I got undergraduate degree in <b>Computer Science</b>. Created a small website <b>FSQAR</b> : Faculty Student Question and Answers Room`
    }
];
const spProjects = [
    {
        name: 'Zenith Studio',
        description: 'ASG-Zenith business process automation services and visual low-code/no-code design studio with BPM, robotic process automation (RPA), governance and enterprise mobility omnichannel delivery.',
        teamSize: '10+',
        role: 'Senior Frontend Developer',
        duration: 2,
        bgColor: rocketThemeColor,
        technologies: [
            { name: 'Javascript', version: '' },
            { name: 'HTML', version: 5 },
            { name: 'CSS', version: 3 },
        ],
        frameworks: [
            { name: 'Angular', version: '2+' },
        ],
        companyName: 'Rocket Software',
        currentProject: true
    }, {
        name: 'Birst',
        description: 'Birst is a cloud-based business intelligence platform that enables businesses to analyze, explore, and visualize big data. Birst takes raw data, runs it through Extract, Transform, Load (ETL) process and then automatically builds a data warehouse to make it ready for analysis. Birst’s software is aimed at all business users from IT to marketing to executive management.',
        teamSize: '20+',
        role: 'Frontend Developer',
        duration: 2,
        bgColor: inforThemeColor,
        technologies: [
            { name: 'Javascript', version: '' },
            { name: 'HTML', version: 5 },
            { name: 'CSS', version: 3 },
        ],
        frameworks: [
            { name: 'Angular', version: '2+' },
        ],
        companyName: 'Infor',
        currentProject: false
    }, {
        name: 'SOXLobby',
        description: 'It is a web application which follows Sarbanes-Oxley act to protect shareholders and the general public from accounting errors and fraudulent practices in enterprises, and to improve the accuracy of corporate disclosures.',
        teamSize: 2,
        role: 'Frontend Developer',
        duration: 2,
        technologies: [
            { name: 'Javascript', version: '' },
            { name: 'HTML', version: 5 },
            { name: 'CSS', version: 3 },
        ],
        frameworks: [
            { name: 'Angular', version: '2+' },
        ],
        companyName: 'Abhra Inc',
        bgColor: abhraThemeColor,
        currentProject: false
    }, {
        name: 'Zetoe Website',
        description: 'Zetoe Website Description',
        teamSize: 2,
        role: 'Full Stack Developer',
        duration: 2,
        technologies: [
            { name: 'Javascript', version: '' },
            { name: 'PHP', version: 5.5 },
            { name: 'HTML', version: 5 },
            { name: 'CSS', version: 3 },
        ],
        frameworks: [
            { name: 'Angular', version: '2+' },
            { name: 'Laravel', version: 4 },
        ],
        companyName: 'Zetoe',
        bgColor: zetoeThemeColor,
        currentProject: false
    }, {
        name: 'Riveng',
        description: 'It is one of the information systems services of Hong Kong visa services consultancy office. It is used to store details of their consultants along with their passport files, resources documents etc. It is a single page application.It also acts as mail client. It has the facility to send, receive, drafts mails in it.In addition to mail client it deals with different documents, in other words we can say which a combination of mail client, file system and information services system provider.',
        teamSize: 3,
        role: 'Full Stack Developer',
        duration: 2,
        technologies: [
            { name: 'Javascript', version: '' },
            { name: 'PHP', version: 5.5 },
            { name: 'HTML', version: 5 },
            { name: 'CSS', version: 3 },
        ],
        frameworks: [],
        companyName: 'Osmosys Software Solutions Pvt Ltd',
        bgColor: osmosysThemeColor,
        currentProject: false
    }, {
        name: 'Leave Management',
        description: 'A simple application to manage employee leaves efficiently in an organization. It has the facility to send emails whenever an employee applies for a leave or update the leave.',
        teamSize: 3,
        role: 'Full Stack Developer',
        duration: 2,
        technologies: [
            { name: 'Javascript', version: '' },
            { name: 'PHP', version: 5.5 },
            { name: 'HTML', version: 5 },
            { name: 'CSS', version: 3 },
        ],
        frameworks: [],
        companyName: 'Osmosys Software Solutions Pvt Ltd',
        bgColor: osmosysThemeColor,
        currentProject: false
    }, {
        name: 'Employee Attendance',
        description: 'Employee Attendance Description',
        teamSize: 3,
        role: 'Full Stack Developer',
        duration: 2,
        technologies: [
            { name: 'Javascript', version: '' },
            { name: 'PHP', version: 5.5 },
            { name: 'HTML', version: 5 },
            { name: 'CSS', version: 3 },
        ],
        frameworks: [],
        companyName: 'Osmosys Software Solutions Pvt Ltd',
        bgColor: osmosysThemeColor,
        currentProject: false
    }
];
const spSkills = [
    { name: 'HTML', version: '5', rating: 80, icon: 'https://s.svgbox.net/files.svg?ic=html&fill=290505' },
    { name: 'CSS', version: '3', rating: 80, icon: 'https://s.svgbox.net/files.svg?ic=css&fill=290505' },
    { name: 'SCSS', version: '', rating: 75, icon: 'https://s.svgbox.net/files.svg?ic=scss&fill=290505' },
    { name: 'Javascript', version: '', rating: 85, icon: 'https://s.svgbox.net/files.svg?ic=js-official&fill=290505' },
    { name: 'Typescript', version: '', rating: 75, icon: 'https://s.svgbox.net/files.svg?ic=typescript-official&fill=290505' },
    { name: 'Angular', version: '2+', rating: 85, icon: 'https://s.svgbox.net/files.svg?ic=angular&fill=290505' },
    { name: 'React', version: '', rating: 60, icon: 'https://s.svgbox.net/files.svg?ic=reactjs&fill=290505' },
    { name: 'Node', version: '', rating: 60, icon: 'https://s.svgbox.net/files.svg?ic=node&fill=290505' },
].sort((a, b) => {
    return b.rating - a.rating;
});
const spSocialMedia = [
    {
        displayName: 'fa-linkedin',
        mediaName: 'linkedin',
        mediaLink: 'https://www.linkedin.com/in/sivakumar-tadisetti-052512aa/',
        mediaColor: '#0966c2',
        backgroundColor: false,
    }, {
        displayName: 'fa-github',
        mediaName: 'github',
        mediaLink: 'https://github.com/sivakumartskl',
        mediaColor: '#24292e',
        backgroundColor: false,
    }, {
        displayName: 'fa-stack-overflow',
        mediaName: 'stackoverflow',
        mediaLink: 'https://stackoverflow.com/users/8593983/sivakumar-tadisetti?tab=profile',
        mediaColor: '#f48024',
        backgroundColor: false,
    }, {
        displayName: 'fa-facebook-f',
        mediaName: 'facebook',
        mediaLink: 'https://www.facebook.com/sivakumartadisetti/',
        mediaColor: '#1097f5',
        backgroundColor: false,
    }
];
function getFormattedDate(day, month, year) {
    return `${getFormattedDay(day)} ${monthShortNames[month - 1]}, ${year}`;
}
function getTodayDate() {
    const today = new Date();
    const formattedDate = getFormattedDate(today.getDate(), today.getMonth() + 1, today.getFullYear());
    return `${formattedDate} ( Until the present )`;
}
function getFormattedDay(day) {
    const prefixedDay = addLeadingZeroIfNeeded(day);
    const formattedDay = addSuffixToNumber(prefixedDay);
    return formattedDay;
}
function addLeadingZeroIfNeeded(num) {
    if (num < 10) {
        return `0${num}`;
    }
    return num.toString();
}
function addSuffixToNumber(number) {
    const distinctSuffix = ['st', 'nd', 'rd'];
    const numbersToExclude = [11, 12, 13];
    const uniqueSuffix = 'th';
    const lastNumber = +number[number.length - 1];
    if (lastNumber > 0 && lastNumber <= 3 && !numbersToExclude.includes(+number)) {
        return `${number}<sup>${distinctSuffix[lastNumber - 1]}</sup>`;
    }
    return `${number}<sup>${uniqueSuffix}</sup>`;
}



/***/ }),

/***/ "./src/app/sp-experience/sp-experience.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sp-experience/sp-experience.component.ts ***!
  \**********************************************************/
/*! exports provided: SpExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpExperienceComponent", function() { return SpExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sp_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sp-main.service */ "./src/app/sp-main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "color": a0 }; };
const _c1 = function (a0) { return { "background-color": a0 }; };
function SpExperienceComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/company-images/", experience_r1.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, experience_r1.borderColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", experience_r1.webLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r1.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, experience_r1.borderColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", experience_r1.from, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", experience_r1.to, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", experience_r1.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class SpExperienceComponent {
    constructor(spMainService) {
        this.spMainService = spMainService;
    }
    ngOnInit() {
        this.spMainService.getSPExperience().subscribe((data) => this.spExperience = data);
    }
}
SpExperienceComponent.ɵfac = function SpExperienceComponent_Factory(t) { return new (t || SpExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sp_main_service__WEBPACK_IMPORTED_MODULE_1__["SpMainService"])); };
SpExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpExperienceComponent, selectors: [["app-sp-experience"]], decls: 1, vars: 1, consts: [["class", "card border rounded-bottom text-center bg-light mb-3 row", 4, "ngFor", "ngForOf"], [1, "card", "border", "rounded-bottom", "text-center", "bg-light", "mb-3", "row"], ["alt", "Card image cap", 1, "card-img-top", "col-md-3", 3, "src"], [1, "card-body", "col-md-9"], [1, "card-title", 3, "ngStyle"], [1, "card-sub-title"], [1, "far", "fa-building"], ["target", "_blank", 3, "href"], [1, "fas", "fa-map-marker-alt"], [2, "color", "#fff", "padding", "0.5rem", 3, "ngStyle"], [3, "innerHTML"], [1, "experience-to"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "list-group-item-light"]], template: function SpExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpExperienceComponent_div_0_Template, 22, 14, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spExperience);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1rem;\n  display: flex;\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  border: 2px solid #cccccc;\n  padding: 0;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:nth-of-type(even) {\n  flex-direction: row-reverse;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  width: 70%;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-sub-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-sub-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 10px 10px 10px;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-sub-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .experience-to[_ngcontent-%COMP%] {\n  margin: 0 0.5rem 0 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3AtZXhwZXJpZW5jZS9IOlxccHJvamVjdHNcXHNpdmFrdW1hci1wb3J0b2ZvbGlvL3NyY1xcYXBwXFxzcC1leHBlcmllbmNlXFxzcC1leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcC1leHBlcmllbmNlL3NwLWV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ1I7QURDUTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUNDWjtBREVRO0VBQ0UsMkJBQUE7QUNBVjtBREdRO0VBQ0UsVUFBQTtBQ0RWO0FER1U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNEWjtBREdZO0VBQ0Usd0JBQUE7QUNEZDtBREdjO0VBQ0UsaUJBQUE7QUNEaEI7QURNVTtFQUNFLHlCQUFBO0FDSloiLCJmaWxlIjoic3JjL2FwcC9zcC1leHBlcmllbmNlL3NwLWV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5IDogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2NjY2M7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOm50aC1vZi10eXBlKCBldmVuICkge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICB3aWR0aDogNzAlO1xyXG5cclxuICAgICAgICAgIC5jYXJkLXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMTBweCAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5leHBlcmllbmNlLXRvIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAuNXJlbSAwIDAuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuOmhvc3QgLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuOmhvc3QgLmNhcmQgaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjY2NjO1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgLmNhcmQ6bnRoLW9mLXR5cGUoZXZlbikge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG46aG9zdCAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgd2lkdGg6IDcwJTtcbn1cbjpob3N0IC5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtc3ViLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAuY2FyZCAuY2FyZC1ib2R5IC5jYXJkLXN1Yi10aXRsZSBwIHtcbiAgbWFyZ2luOiAwIDEwcHggMTBweCAxMHB4O1xufVxuOmhvc3QgLmNhcmQgLmNhcmQtYm9keSAuY2FyZC1zdWItdGl0bGUgcCBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG46aG9zdCAuY2FyZCAuY2FyZC1ib2R5IC5leHBlcmllbmNlLXRvIHtcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDAuNXJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sp-experience',
                templateUrl: './sp-experience.component.html',
                styleUrls: ['./sp-experience.component.scss']
            }]
    }], function () { return [{ type: _sp_main_service__WEBPACK_IMPORTED_MODULE_1__["SpMainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sp-footer/sp-footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sp-footer/sp-footer.component.ts ***!
  \**************************************************/
/*! exports provided: SpFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpFooterComponent", function() { return SpFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SpFooterComponent {
    constructor() {
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
SpFooterComponent.ɵfac = function SpFooterComponent_Factory(t) { return new (t || SpFooterComponent)(); };
SpFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpFooterComponent, selectors: [["app-sp-footer"]], decls: 6, vars: 1, consts: [[1, "footer"], [1, "container"], [1, "text-muted"], ["href", "https://www.hitwebcounter.com", "target", "_blank"], ["src", "https://hitwebcounter.com/counter/counter.php?page=7709950&style=0001&nbdigits=5&type=ip&initCount=0", "title", "Total Website Hits", "Alt", "Web Hits", 2, "border", "0"]], template: function SpFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 Sivakumar Tadisetti - ", ctx.currentYear, " ");
    } }, styles: ["[_nghost-%COMP%]   .footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background-color: #cccccc;\n  opacity: 0.95;\n}\n[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3AtZm9vdGVyL0g6XFxwcm9qZWN0c1xcc2l2YWt1bWFyLXBvcnRvZm9saW8vc3JjXFxhcHBcXHNwLWZvb3Rlclxcc3AtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcC1mb290ZXIvc3AtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FER0k7RUFDRSxZQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9zcC1mb290ZXIvc3AtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIG9wYWNpdHk6IDAuOTU7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3QgLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgb3BhY2l0eTogMC45NTtcbn1cbjpob3N0IC5mb290ZXIgYSB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sp-footer',
                templateUrl: './sp-footer.component.html',
                styleUrls: ['./sp-footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sp-home/sp-home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sp-home/sp-home.component.ts ***!
  \**********************************************/
/*! exports provided: SpHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpHomeComponent", function() { return SpHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SpHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpHomeComponent.ɵfac = function SpHomeComponent_Factory(t) { return new (t || SpHomeComponent)(); };
SpHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpHomeComponent, selectors: [["app-sp-home"]], decls: 2, vars: 0, template: function SpHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sp-home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwLWhvbWUvc3AtaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sp-home',
                templateUrl: './sp-home.component.html',
                styleUrls: ['./sp-home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sp-main.service.ts":
/*!************************************!*\
  !*** ./src/app/sp-main.service.ts ***!
  \************************************/
/*! exports provided: SpMainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpMainService", function() { return SpMainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sp_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sp-data-model */ "./src/app/sp-data-model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




class SpMainService {
    constructor() { }
    getSPMenu() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_sp_data_model__WEBPACK_IMPORTED_MODULE_1__["spMenu"]);
    }
    getSPExperience() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_sp_data_model__WEBPACK_IMPORTED_MODULE_1__["spExperience"]);
    }
    getSPProjects() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_sp_data_model__WEBPACK_IMPORTED_MODULE_1__["spProjects"]);
    }
    getSPSkills() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_sp_data_model__WEBPACK_IMPORTED_MODULE_1__["spSkills"]);
    }
    getSocialMediaLinks() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_sp_data_model__WEBPACK_IMPORTED_MODULE_1__["spSocialMedia"]);
    }
}
SpMainService.ɵfac = function SpMainService_Factory(t) { return new (t || SpMainService)(); };
SpMainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpMainService, factory: SpMainService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpMainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sp-nav/sp-nav.component.ts":
/*!********************************************!*\
  !*** ./src/app/sp-nav/sp-nav.component.ts ***!
  \********************************************/
/*! exports provided: SpNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpNavComponent", function() { return SpNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sp_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sp-main.service */ "./src/app/sp-main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function SpNavComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menu_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-name", menu_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fas ", menu_r1.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menu_r1.name, "");
} }
const _c0 = function (a0, a1) { return { "animated-header": a0, "bg-light": a1 }; };
class SpNavComponent {
    constructor(spMainService) {
        this.spMainService = spMainService;
        this.animateHeader = false;
    }
    ngOnInit() {
        this.spMainService.getSPMenu().subscribe((data) => this.spMenu = data);
    }
    onscroll(event) {
        if (event.target.scrollingElement.scrollTop > 45) {
            this.animateHeader = true;
        }
        else {
            this.animateHeader = false;
        }
    }
}
SpNavComponent.ɵfac = function SpNavComponent_Factory(t) { return new (t || SpNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sp_main_service__WEBPACK_IMPORTED_MODULE_1__["SpMainService"])); };
SpNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpNavComponent, selectors: [["app-sp-nav"]], hostBindings: function SpNavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SpNavComponent_scroll_HostBindingHandler($event) { return ctx.onscroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { title: "title" }, decls: 11, vars: 8, consts: [[1, "container-fluid", "sp-header", 3, "ngClass"], [1, "container-fluid", "d-flex", "align-items-center"], ["src", "../../assets/web-icons/android-chrome-192x192.png", "width", "60", "height", "60", "alt", "", 1, "d-inline-block", "align-top"], [1, "mr-auto", "web-title"], ["d-none", "", "d-lg-block", "", 1, "navbar", "navbar-expand-lg"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["class", "nav-item", "routerLinkActive", "activated-route", 4, "ngFor", "ngForOf", "ngForAs"], ["routerLinkActive", "activated-route", 1, "nav-item"], [1, "nav-link", 3, "routerLink"]], template: function SpNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SpNavComponent_li_10_Template, 4, 6, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.animateHeader, ctx.animateHeader));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spMenu)("ngForAs", ctx.index)("ngForAs", ctx.first);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  margin-bottom: 8.5rem;\n}\n[_nghost-%COMP%]   .sp-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 25px;\n  left: 0;\n  height: 4.5rem;\n  line-height: 3;\n  transition: all 0.4s;\n}\n[_nghost-%COMP%]   .sp-header.animated-header[_ngcontent-%COMP%] {\n  z-index: 2;\n  top: 0;\n  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.3);\n}\n[_nghost-%COMP%]   .sp-header.animated-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #383838;\n}\n[_nghost-%COMP%]   .sp-header.animated-header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #383838;\n}\n[_nghost-%COMP%]   .sp-header[_ngcontent-%COMP%]   .web-title[_ngcontent-%COMP%] {\n  color: #383838;\n  margin-left: 1rem;\n  font-family: \"Lobster Two\", cursive;\n}\n[_nghost-%COMP%]   .sp-header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  width: 10rem;\n  margin-right: 1rem;\n  text-align: center;\n  display: flex;\n  height: 3.5rem;\n  align-items: center;\n  position: relative;\n}\n[_nghost-%COMP%]   .sp-header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.activated-route[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #322d31;\n}\n[_nghost-%COMP%]   .sp-header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #383838;\n  width: 10rem;\n  padding: 0;\n  position: relative;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .sp-header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n[_nghost-%COMP%]   .sp-header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::before {\n  content: attr(data-name);\n  position: absolute;\n  left: 0;\n  top: -100%;\n  width: 100%;\n  height: 100%;\n  font-weight: 900;\n  transition: all 0.3s;\n  text-shadow: 8px 8px 2.5px #c5c2c2;\n}\n[_nghost-%COMP%]   .sp-header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover::before {\n  top: 0;\n  color: green;\n  background-color: #E0E0E0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3AtbmF2L0g6XFxwcm9qZWN0c1xcc2l2YWt1bWFyLXBvcnRvZm9saW8vc3JjXFxhcHBcXHNwLW5hdlxcc3AtbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcC1uYXYvc3AtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUksYUFBQTtFQUNBLHFCQUFBO0FDRko7QURJSTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNGUjtBRElRO0VBQ0ksVUFBQTtFQUNBLE1BQUE7RUFDQSxpREFBQTtBQ0ZaO0FESVk7RUFDSSxjQW5Ca0I7QUNpQmxDO0FEUW9CO0VBQ0ksY0ExQlU7QUNvQmxDO0FEWVE7RUFDSSxjQWxDYTtFQW1DYixpQkFBQTtFQUNBLG1DQUFBO0FDVlo7QURjWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDWmhCO0FEY2dCO0VBQ0ksZ0NBQUE7QUNacEI7QURlZ0I7RUFDSSxjQXRESztFQXVETCxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNicEI7QURlb0I7RUFDRSxvQkFBQTtBQ2J0QjtBRGdCb0I7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQ2R0QjtBRGtCc0I7RUFDRSxNQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDaEJ4QiIsImZpbGUiOiJzcmMvYXBwL3NwLW5hdi9zcC1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAkaGVhZGVyLXRleHQtY29sb3IgOiAjMzgzODM4O1xyXG4gICAgJGFuaW1hdGVkLWhlYWRlci10ZXh0LWNvbG9yIDogIzM4MzgzODtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOC41cmVtO1xyXG5cclxuICAgIC5zcC1oZWFkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDI1cHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBoZWlnaHQ6IDQuNXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuXHJcbiAgICAgICAgJi5hbmltYXRlZC1oZWFkZXIge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCByZ2JhKDEyNywgMTM3LCAxNjEsIDAuMyk7XHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGFuaW1hdGVkLWhlYWRlci10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgICAgICAgICAubmF2LWl0ZW0ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGFuaW1hdGVkLWhlYWRlci10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndlYi10aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkaGVhZGVyLXRleHQtY29sb3I7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xvYnN0ZXIgVHdvJywgY3Vyc2l2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmF0ZWQtcm91dGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMzIyZDMxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRoZWFkZXItdGV4dC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBhdHRyKCBkYXRhLW5hbWUgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogOHB4IDhweCAyLjVweCAjYzVjMmMyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA4LjVyZW07XG59XG46aG9zdCAuc3AtaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDI1cHg7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNC41cmVtO1xuICBsaW5lLWhlaWdodDogMztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG46aG9zdCAuc3AtaGVhZGVyLmFuaW1hdGVkLWhlYWRlciB7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IHJnYmEoMTI3LCAxMzcsIDE2MSwgMC4zKTtcbn1cbjpob3N0IC5zcC1oZWFkZXIuYW5pbWF0ZWQtaGVhZGVyIGgzIHtcbiAgY29sb3I6ICMzODM4Mzg7XG59XG46aG9zdCAuc3AtaGVhZGVyLmFuaW1hdGVkLWhlYWRlciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgY29sb3I6ICMzODM4Mzg7XG59XG46aG9zdCAuc3AtaGVhZGVyIC53ZWItdGl0bGUge1xuICBjb2xvcjogIzM4MzgzODtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXIgVHdvXCIsIGN1cnNpdmU7XG59XG46aG9zdCAuc3AtaGVhZGVyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMy41cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAuc3AtaGVhZGVyIC5uYXZiYXItbmF2IC5uYXYtaXRlbS5hY3RpdmF0ZWQtcm91dGUge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzMyMmQzMTtcbn1cbjpob3N0IC5zcC1oZWFkZXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gIGNvbG9yOiAjMzgzODM4O1xuICB3aWR0aDogMTByZW07XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IC5zcC1oZWFkZXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG46aG9zdCAuc3AtaGVhZGVyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1uYW1lKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IC0xMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggMi41cHggI2M1YzJjMjtcbn1cbjpob3N0IC5zcC1oZWFkZXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluazpob3Zlcjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICBjb2xvcjogZ3JlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sp-nav',
                templateUrl: './sp-nav.component.html',
                styleUrls: ['./sp-nav.component.scss']
            }]
    }], function () { return [{ type: _sp_main_service__WEBPACK_IMPORTED_MODULE_1__["SpMainService"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onscroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/sp-projects/sp-projects.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sp-projects/sp-projects.component.ts ***!
  \******************************************************/
/*! exports provided: SpProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpProjectsComponent", function() { return SpProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sp_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sp-main.service */ "./src/app/sp-main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SpProjectsComponent_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Current Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function SpProjectsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpProjectsComponent_div_1_span_4_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpProjectsComponent_div_1_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const project_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.displayProjectDetails(project_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Read More...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, project_r2.bgColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r2.currentProject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.role);
} }
function SpProjectsComponent_section_3_h5_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technology_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technology_r10.name + " " + technology_r10.version);
} }
function SpProjectsComponent_section_3_div_38_h5_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const framework_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](framework_r12.name + " " + framework_r12.version);
} }
function SpProjectsComponent_section_3_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpProjectsComponent_section_3_div_38_h5_1_Template, 3, 1, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.project.frameworks);
} }
function SpProjectsComponent_section_3_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Framework Used.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SpProjectsComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Company : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Team Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Technologies Used");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SpProjectsComponent_section_3_h5_32_Template, 3, 1, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "FrameWorks Used");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SpProjectsComponent_section_3_div_38_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SpProjectsComponent_section_3_ng_template_39_Template, 3, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.project.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.project.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r1.project.teamSize, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r1.project.role, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r1.project.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.project.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.project.frameworks.length > 0)("ngIfElse", _r8);
} }
class SpProjectsComponent {
    constructor(spMainService) {
        this.spMainService = spMainService;
    }
    ngOnInit() {
        this.spMainService.getSPProjects().subscribe((data) => this.spProjects = data);
    }
    displayProjectDetails(project) {
        this.project = project;
        setTimeout(() => {
            const ele = document.getElementById('projectDetails');
            ele.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
}
SpProjectsComponent.ɵfac = function SpProjectsComponent_Factory(t) { return new (t || SpProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sp_main_service__WEBPACK_IMPORTED_MODULE_1__["SpMainService"])); };
SpProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpProjectsComponent, selectors: [["app-sp-projects"]], decls: 4, vars: 2, consts: [[1, "cards-container"], ["class", "card letter-card", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["id", "menuMargin", 1, "menu-margin"], ["id", "projectDetails", "class", "project-details", 4, "ngIf"], [1, "card", "letter-card", 3, "ngStyle"], [1, "card-body"], [4, "ngIf"], [1, "project-read-more"], [1, "read-more", 3, "click"], ["id", "projectDetails", 1, "project-details"], [1, "card"], [1, "card-header"], [1, "card-footer"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "alert", "alert-info"], [4, "ngFor", "ngForOf"], ["class", "alert alert-success", 4, "ngIf", "ngIfElse"], ["noFramework", ""], [1, "badge", "badge-pill", "badge-info"], [1, "alert", "alert-success"], [1, "badge", "badge-pill", "badge-success"], [1, "alert", "alert-danger"]], template: function SpProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpProjectsComponent_div_1_Template, 10, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SpProjectsComponent_section_3_Template, 41, 9, "section", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n  height: 80vh;\n}\n[_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%]   .letter-card[_ngcontent-%COMP%] {\n  width: 15rem;\n  height: 15rem;\n  margin: 1rem;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%]   .letter-card[_ngcontent-%COMP%]   .project-read-more[_ngcontent-%COMP%] {\n  color: #fff;\n  position: absolute;\n  width: 15rem;\n  height: 8rem;\n  background-color: #000;\n  bottom: -100%;\n  text-align: center;\n  padding: 1rem;\n  transition: all 0.6s;\n  box-shadow: 0px -10px 30px #000;\n}\n[_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%]   .letter-card[_ngcontent-%COMP%]   .project-read-more[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-style: italic;\n  padding: 0.5rem 0 0.5rem 0;\n  border-bottom: 0.1rem solid red;\n}\n[_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%]   .letter-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  font-weight: bolder;\n  text-align: center;\n  transition: all 0.6s;\n}\n[_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%]   .letter-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: all 0.6s;\n}\n[_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%]   .letter-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n  box-shadow: inset 2px 10px 15px rgba(0, 0, 0, 0.9);\n}\n[_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%]   .letter-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  top: 20%;\n  font-size: 1.2rem;\n  text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.5);\n}\n[_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%]   .letter-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%]   .letter-card[_ngcontent-%COMP%]:hover   .project-read-more[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n[_nghost-%COMP%]   .project-details[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  padding-top: 6rem;\n  margin-bottom: 10rem;\n}\n[_nghost-%COMP%]   .project-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3AtcHJvamVjdHMvSDpcXHByb2plY3RzXFxzaXZha3VtYXItcG9ydG9mb2xpby9zcmNcXGFwcFxcc3AtcHJvamVjdHNcXHNwLXByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcC1wcm9qZWN0cy9zcC1wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDTjtBRENNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0FDQ1I7QURDUTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0FDQ1Y7QURHTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0RSO0FER1E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDRFY7QURNUTtFQUNFLGtEQUFBO0FDSlY7QURNVTtFQUNFLFFBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0FDSlo7QURPVTtFQUNFLGFBQUE7QUNMWjtBRFNRO0VBQ0UsU0FBQTtBQ1BWO0FEYUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNYSjtBRGtCYztFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNoQmhCIiwiZmlsZSI6InNyYy9hcHAvc3AtcHJvamVjdHMvc3AtcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC5jYXJkcy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGhlaWdodDogODB2aDtcclxuXHJcbiAgICAubGV0dGVyLWNhcmQge1xyXG4gICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgIGhlaWdodDogMTVyZW07XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgLnByb2plY3QtcmVhZC1tb3JlIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgICAgIGhlaWdodDogOHJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGJvdHRvbTogLTEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IC0xMHB4IDMwcHggIzAwMDtcclxuXHJcbiAgICAgICAgLnJlYWQtbW9yZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDEwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvamVjdC1yZWFkLW1vcmUge1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtZGV0YWlscyB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICAgICAgLmFsZXJ0IHtcclxuICAgICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5jYXJkcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDgwdmg7XG59XG46aG9zdCAuY2FyZHMtY29udGFpbmVyIC5sZXR0ZXItY2FyZCB7XG4gIHdpZHRoOiAxNXJlbTtcbiAgaGVpZ2h0OiAxNXJlbTtcbiAgbWFyZ2luOiAxcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAuY2FyZHMtY29udGFpbmVyIC5sZXR0ZXItY2FyZCAucHJvamVjdC1yZWFkLW1vcmUge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTVyZW07XG4gIGhlaWdodDogOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgYm90dG9tOiAtMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbiAgYm94LXNoYWRvdzogMHB4IC0xMHB4IDMwcHggIzAwMDtcbn1cbjpob3N0IC5jYXJkcy1jb250YWluZXIgLmxldHRlci1jYXJkIC5wcm9qZWN0LXJlYWQtbW9yZSAucmVhZC1tb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAwO1xuICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgcmVkO1xufVxuOmhvc3QgLmNhcmRzLWNvbnRhaW5lciAubGV0dGVyLWNhcmQgLmNhcmQtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbn1cbjpob3N0IC5jYXJkcy1jb250YWluZXIgLmxldHRlci1jYXJkIC5jYXJkLWJvZHkgcCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbn1cbjpob3N0IC5jYXJkcy1jb250YWluZXIgLmxldHRlci1jYXJkOmhvdmVyIC5jYXJkLWJvZHkge1xuICBib3gtc2hhZG93OiBpbnNldCAycHggMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC45KTtcbn1cbjpob3N0IC5jYXJkcy1jb250YWluZXIgLmxldHRlci1jYXJkOmhvdmVyIC5jYXJkLWJvZHkgcCB7XG4gIHRvcDogMjAlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1zaGFkb3c6IDJweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG46aG9zdCAuY2FyZHMtY29udGFpbmVyIC5sZXR0ZXItY2FyZDpob3ZlciAuY2FyZC1ib2R5IHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLmNhcmRzLWNvbnRhaW5lciAubGV0dGVyLWNhcmQ6aG92ZXIgLnByb2plY3QtcmVhZC1tb3JlIHtcbiAgYm90dG9tOiAwO1xufVxuOmhvc3QgLnByb2plY3QtZGV0YWlscyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XG59XG46aG9zdCAucHJvamVjdC1kZXRhaWxzIC5jYXJkIC5jYXJkLWZvb3RlciAuY2FyZCAuY2FyZC1ib2R5IC5hbGVydCBoNSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sp-projects',
                templateUrl: './sp-projects.component.html',
                styleUrls: ['./sp-projects.component.scss']
            }]
    }], function () { return [{ type: _sp_main_service__WEBPACK_IMPORTED_MODULE_1__["SpMainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sp-scroller/sp-scroller.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sp-scroller/sp-scroller.component.ts ***!
  \******************************************************/
/*! exports provided: SpScrollerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpScrollerComponent", function() { return SpScrollerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "show-scroller": a0 }; };
class SpScrollerComponent {
    constructor() {
        this.showScroller = false;
    }
    ngOnInit() {
        this.subscribeToWindowScroll();
    }
    subscribeToWindowScroll() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'scroll')
            .subscribe(event => {
            if (event.target.scrollingElement.scrollTop > 45) {
                this.showScroller = true;
            }
            else {
                this.showScroller = false;
            }
        });
    }
    goToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
SpScrollerComponent.ɵfac = function SpScrollerComponent_Factory(t) { return new (t || SpScrollerComponent)(); };
SpScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpScrollerComponent, selectors: [["app-sp-scroller"]], decls: 2, vars: 3, consts: [[1, "scroller", 3, "ngClass", "click"], [1, "fas", "fa-chevron-circle-up"]], template: function SpScrollerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpScrollerComponent_Template_div_click_0_listener() { return ctx.goToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.showScroller));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n[_nghost-%COMP%]   .scroller[_ngcontent-%COMP%] {\n  display: none;\n  bottom: 1rem;\n  right: 0.5rem;\n  z-index: 3;\n  margin: 1rem;\n  font-size: 3rem;\n  cursor: pointer;\n  position: fixed;\n  transition: all 0.5s;\n}\n[_nghost-%COMP%]   .scroller.show-scroller[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .scroller[_ngcontent-%COMP%]:hover {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Atc2Nyb2xsZXIvSDpcXHByb2plY3RzXFxzaXZha3VtYXItcG9ydG9mb2xpby9zcmNcXGFwcFxcc3Atc2Nyb2xsZXJcXHNwLXNjcm9sbGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcC1zY3JvbGxlci9zcC1zY3JvbGxlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDQ047QURDTTtFQUNJLGNBQUE7QUNDVjtBREVNO0VBQ0UsWUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvc3Atc2Nyb2xsZXIvc3Atc2Nyb2xsZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuc2Nyb2xsZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBib3R0b206IDFyZW07XHJcbiAgICAgIHJpZ2h0OiAwLjVyZW07XHJcbiAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcblxyXG4gICAgICAmLnNob3ctc2Nyb2xsZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IC5zY3JvbGxlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJvdHRvbTogMXJlbTtcbiAgcmlnaHQ6IDAuNXJlbTtcbiAgei1pbmRleDogMztcbiAgbWFyZ2luOiAxcmVtO1xuICBmb250LXNpemU6IDNyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbjpob3N0IC5zY3JvbGxlci5zaG93LXNjcm9sbGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCAuc2Nyb2xsZXI6aG92ZXIge1xuICBjb2xvcjogZ3JlZW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpScrollerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sp-scroller',
                templateUrl: './sp-scroller.component.html',
                styleUrls: ['./sp-scroller.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sp-skills/sp-skills.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sp-skills/sp-skills.component.ts ***!
  \**************************************************/
/*! exports provided: SpSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpSkillsComponent", function() { return SpSkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sp_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sp-main.service */ "./src/app/sp-main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SpSkillsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", skill_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.name);
} }
class SpSkillsComponent {
    constructor(spMainService) {
        this.spMainService = spMainService;
        this.spSkills = [];
    }
    ngOnInit() {
        this.spMainService.getSPSkills().subscribe((data) => this.spSkills = data);
    }
}
SpSkillsComponent.ɵfac = function SpSkillsComponent_Factory(t) { return new (t || SpSkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sp_main_service__WEBPACK_IMPORTED_MODULE_1__["SpMainService"])); };
SpSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpSkillsComponent, selectors: [["app-sp-skills"]], decls: 2, vars: 1, consts: [[1, "skill-container"], ["class", "skill", 4, "ngFor", "ngForOf"], [1, "skill"], [1, "sp-skill-icon", 3, "src"], [1, "skill-name"]], template: function SpSkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpSkillsComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spSkills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["[_nghost-%COMP%]   .skill-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .skill-container[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin: 25px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n  transition: all 0.5s;\n}\n[_nghost-%COMP%]   .skill-container[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   .sp-skill-icon[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n}\n[_nghost-%COMP%]   .skill-container[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   .skill-name[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 10px;\n  font-size: 14px;\n  padding: 5px;\n  text-align: center;\n  border-radius: 5px;\n  background-color: #6d6b6b;\n  transition: all 0.2s;\n}\n[_nghost-%COMP%]   .skill-container[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 2rem;\n  background-color: #d6d6d6;\n}\n[_nghost-%COMP%]   .skill-container[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: translateY(-5px);\n  background-color: #e2e2e2;\n  box-shadow: 1px 2px 30px #000;\n}\n[_nghost-%COMP%]   .skill-container[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]:hover   .skill-name[_ngcontent-%COMP%] {\n  color: #6d6b6b;\n  background-color: #fff;\n}\n[_nghost-%COMP%]   .skill-container[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]:active {\n  transform: translateY(0px);\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Atc2tpbGxzL0g6XFxwcm9qZWN0c1xcc2l2YWt1bWFyLXBvcnRvZm9saW8vc3JjXFxhcHBcXHNwLXNraWxsc1xcc3Atc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcC1za2lsbHMvc3Atc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQU47QURFTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ0FSO0FERVE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0FWO0FER1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNEVjtBRElRO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDRlY7QURLUTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUNIVjtBREtVO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0FDSFo7QURPUTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUNMViIsImZpbGUiOiJzcmMvYXBwL3NwLXNraWxscy9zcC1za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAuc2tpbGwtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgLnNraWxsIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuXHJcbiAgICAgICAgLnNwLXNraWxsLWljb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5za2lsbC1uYW1lIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZkNmI2YjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2dyZXNzIHtcclxuICAgICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDMwcHggIzAwMDtcclxuXHJcbiAgICAgICAgICAuc2tpbGwtbmFtZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNmQ2YjZiO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IC5za2lsbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAuc2tpbGwtY29udGFpbmVyIC5za2lsbCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG46aG9zdCAuc2tpbGwtY29udGFpbmVyIC5za2lsbCAuc3Atc2tpbGwtaWNvbiB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cbjpob3N0IC5za2lsbC1jb250YWluZXIgLnNraWxsIC5za2lsbC1uYW1lIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ2YjZiO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbjpob3N0IC5za2lsbC1jb250YWluZXIgLnNraWxsIC5wcm9ncmVzcyB7XG4gIGhlaWdodDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcbn1cbjpob3N0IC5za2lsbC1jb250YWluZXIgLnNraWxsOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XG4gIGJveC1zaGFkb3c6IDFweCAycHggMzBweCAjMDAwO1xufVxuOmhvc3QgLnNraWxsLWNvbnRhaW5lciAuc2tpbGw6aG92ZXIgLnNraWxsLW5hbWUge1xuICBjb2xvcjogIzZkNmI2YjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbjpob3N0IC5za2lsbC1jb250YWluZXIgLnNraWxsOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICBib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpSkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sp-skills',
                templateUrl: './sp-skills.component.html',
                styleUrls: ['./sp-skills.component.scss']
            }]
    }], function () { return [{ type: _sp_main_service__WEBPACK_IMPORTED_MODULE_1__["SpMainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sp-social-media/sp-social-media.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sp-social-media/sp-social-media.component.ts ***!
  \**************************************************************/
/*! exports provided: SpSocialMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpSocialMediaComponent", function() { return SpSocialMediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sp_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sp-main.service */ "./src/app/sp-main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = function (a0) { return { "color": a0 }; };
function SpSocialMediaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function SpSocialMediaComponent_div_1_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const media_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleBackgroundColor(media_r1); })("mouseleave", function SpSocialMediaComponent_div_1_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const media_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleBackgroundColor(media_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const media_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, media_r1.backgroundColor ? media_r1.mediaColor : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", media_r1.mediaLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("data-name", media_r1.mediaName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fab ", media_r1.displayName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, !media_r1.backgroundColor ? media_r1.mediaColor : ""));
} }
const _c2 = function (a0) { return { "update-social-media-position": a0 }; };
class SpSocialMediaComponent {
    constructor(spMainService) {
        this.spMainService = spMainService;
        this.updateSocialMedia = false;
        this.spSocialMedia = [];
    }
    ngOnInit() {
        this.spMainService.getSocialMediaLinks().subscribe((data) => this.spSocialMedia = data);
    }
    toggleBackgroundColor(media) {
        media.backgroundColor = !media.backgroundColor;
    }
}
SpSocialMediaComponent.ɵfac = function SpSocialMediaComponent_Factory(t) { return new (t || SpSocialMediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sp_main_service__WEBPACK_IMPORTED_MODULE_1__["SpMainService"])); };
SpSocialMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpSocialMediaComponent, selectors: [["app-sp-social-media"]], inputs: { updateSocialMedia: "updateSocialMedia" }, decls: 2, vars: 4, consts: [[1, "social-media-container", 3, "ngClass"], ["class", "social-media", 3, "ngStyle", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "social-media", 3, "ngStyle", "mouseenter", "mouseleave"], ["target", "_blank"], [3, "ngStyle"]], template: function SpSocialMediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpSocialMediaComponent_div_1_Template, 3, 11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx.updateSocialMedia));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spSocialMedia);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["[_nghost-%COMP%]   .social-media-container[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  top: 50%;\n  right: 0;\n  width: 3rem;\n  height: 12rem;\n  z-index: 1;\n  flex-direction: column;\n  transform: translateY(-50%);\n  transition: all 0.6s;\n}\n[_nghost-%COMP%]   .social-media-container[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  line-height: 3;\n  font-weight: bolder;\n  text-align: center;\n  text-transform: uppercase;\n  border: 2px solid #ccc;\n  border-radius: 50%;\n  margin-bottom: 0.5rem;\n  transition: all 1s;\n}\n[_nghost-%COMP%]   .social-media-container[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  height: 100%;\n  text-decoration: none;\n  position: relative;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .social-media-container.update-social-media-position[_ngcontent-%COMP%] {\n  top: 75%;\n  right: 50%;\n  width: auto;\n  z-index: 1;\n  flex-direction: row;\n  transform: translateX(50%);\n}\n[_nghost-%COMP%]   .social-media-container.update-social-media-position[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  margin: 1rem;\n  box-shadow: 5px 8px 5px #cccccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Atc29jaWFsLW1lZGlhL0g6XFxwcm9qZWN0c1xcc2l2YWt1bWFyLXBvcnRvZm9saW8vc3JjXFxhcHBcXHNwLXNvY2lhbC1tZWRpYVxcc3Atc29jaWFsLW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcC1zb2NpYWwtbWVkaWEvc3Atc29jaWFsLW1lZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ0RKO0FER0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNETjtBREdNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRFI7QURLSTtFQUNFLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDSE47QURLTTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvc3Atc29jaWFsLW1lZGlhL3NwLXNvY2lhbC1tZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgLnNvY2lhbC1tZWRpYS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogM3JlbTtcclxuICAgIGhlaWdodDogMTJyZW07XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzO1xyXG5cclxuICAgIC5zb2NpYWwtbWVkaWEge1xyXG4gICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMztcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYudXBkYXRlLXNvY2lhbC1tZWRpYS1wb3NpdGlvbiB7XHJcbiAgICAgIHRvcDogNzUlO1xyXG4gICAgICByaWdodDogNTAlO1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCA1MCUgKTtcclxuXHJcbiAgICAgIC5zb2NpYWwtbWVkaWEge1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggOHB4IDVweCAjY2NjY2NjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5zb2NpYWwtbWVkaWEtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDEycmVtO1xuICB6LWluZGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xufVxuOmhvc3QgLnNvY2lhbC1tZWRpYS1jb250YWluZXIgLnNvY2lhbC1tZWRpYSB7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpbmUtaGVpZ2h0OiAzO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG46aG9zdCAuc29jaWFsLW1lZGlhLWNvbnRhaW5lciAuc29jaWFsLW1lZGlhIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCAuc29jaWFsLW1lZGlhLWNvbnRhaW5lci51cGRhdGUtc29jaWFsLW1lZGlhLXBvc2l0aW9uIHtcbiAgdG9wOiA3NSU7XG4gIHJpZ2h0OiA1MCU7XG4gIHdpZHRoOiBhdXRvO1xuICB6LWluZGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbn1cbjpob3N0IC5zb2NpYWwtbWVkaWEtY29udGFpbmVyLnVwZGF0ZS1zb2NpYWwtbWVkaWEtcG9zaXRpb24gLnNvY2lhbC1tZWRpYSB7XG4gIG1hcmdpbjogMXJlbTtcbiAgYm94LXNoYWRvdzogNXB4IDhweCA1cHggI2NjY2NjYztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpSocialMediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sp-social-media',
                templateUrl: './sp-social-media.component.html',
                styleUrls: ['./sp-social-media.component.scss']
            }]
    }], function () { return [{ type: _sp_main_service__WEBPACK_IMPORTED_MODULE_1__["SpMainService"] }]; }, { updateSocialMedia: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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

module.exports = __webpack_require__(/*! H:\projects\sivakumar-portofolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map