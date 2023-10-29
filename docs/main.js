(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 6715);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = (_class = class AppComponent {
  constructor() {}
}, _class.ctorParameters = () => [], _class);
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ 1402);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.service */ 4056);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 64);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather.service */ 8986);
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ 1217);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/main-page.component */ 1152);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _shared_tab_set_tab_set_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/tab-set/tab-set.module */ 1131);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent, _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent, _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsComponent, _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _shared_tab_set_tab_set_module__WEBPACK_IMPORTED_MODULE_9__.TabSetModule, _app_routing__WEBPACK_IMPORTED_MODULE_7__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__.ServiceWorkerModule.register("/ngsw-worker.js", {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production
  })],
  providers: [_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService, _weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 64);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ 1152);



const appRoutes = [{
  path: '',
  component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 1217:
/*!********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 9139);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 2340);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 8986);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../location.service */ 4056);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var app_services_ng_destroy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/ng-destroy.service */ 7837);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3303);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








const ACTIVE_TAB_INDEX = "activeTabIndex";
let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor() {
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService);
    this.currentConditionsByZip = this.weatherService.getCurrentConditions();
    this.$destroy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(app_services_ng_destroy_service__WEBPACK_IMPORTED_MODULE_4__.NgDestroy);
  }
  get activeTabIndex() {
    const activeTabIndex = +localStorage.getItem(ACTIVE_TAB_INDEX);
    return activeTabIndex;
  }
  set activeTabIndex(v) {
    localStorage.setItem(ACTIVE_TAB_INDEX, v.toString());
  }
  ngOnInit() {
    this.listenLocationsChange();
  }
  listenLocationsChange() {
    this.locationService.locations$.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.$destroy)).subscribe(locations => {
      this.weatherService.getAllCurrentConditions(locations);
    });
  }
  showForecast(zipcode) {
    this.router.navigate(["/forecast", zipcode]);
  }
  removeCondition(index) {
    const zipcode = this.currentConditionsByZip()[index].zip;
    this.locationService.removeLocation(zipcode);
    if (index < this.activeTabIndex) this.activeTabIndex--;else if (index === this.activeTabIndex) this.activeTabIndex = 0;
  }
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: "app-current-conditions",
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [app_services_ng_destroy_service__WEBPACK_IMPORTED_MODULE_4__.NgDestroy],
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 64:
/*!************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 4517);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 7854);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 8986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ForecastsListComponent = (_class = class ForecastsListComponent {
  constructor(weatherService, route) {
    this.weatherService = weatherService;
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      weatherService.getForecast(this.zipcode).subscribe(data => this.forecast = data);
    });
  }
}, _class.ctorParameters = () => [{
  type: _weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}], _class);
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 4056:
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 462);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const LOCATIONS = "locations";
let LocationService = (_class = class LocationService {
  constructor() {
    this.locations = [];
    this.locations$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.locations);
    let locationsString = localStorage.getItem(LOCATIONS);
    if (locationsString) {
      this.locations = JSON.parse(locationsString);
      this.locations$.next(this.locations);
    }
  }
  addLocation(zipcode) {
    if (this.locations.indexOf(zipcode) !== -1) {
      alert("Location already exists");
      return;
    }
    this.locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    this.locations$.next(this.locations);
  }
  removeLocation(zipcode) {
    let index = this.locations.indexOf(zipcode);
    if (index !== -1) {
      this.locations.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
      this.locations$.next(this.locations);
    }
  }
}, _class.ctorParameters = () => [], _class);
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], LocationService);


/***/ }),

/***/ 1152:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 8132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 7837:
/*!************************************************!*\
  !*** ./src/app/services/ng-destroy.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgDestroy: () => (/* binding */ NgDestroy)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2484);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let NgDestroy = class NgDestroy extends rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject {
  ngOnDestroy() {
    this.next(null);
    this.complete();
  }
};
NgDestroy = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], NgDestroy);


/***/ }),

/***/ 2761:
/*!*****************************************************!*\
  !*** ./src/app/shared/tab-set/tab-set.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabSetComponent: () => (/* binding */ TabSetComponent)
/* harmony export */ });
/* harmony import */ var _tab_set_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-set.component.html?ngResource */ 8677);
/* harmony import */ var E_Projects_ForFuture_ng_weather_src_app_shared_tab_set_tab_set_component_ts_css_ngResource_E_Projects_ForFuture_ng_weather_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5uYXYtbGluay5hY3RpdmUgewogICAgICAgIGJvcmRlci1jb2xvcjogI2U0ZTRlNDsKICAgICAgICBib3JkZXItYm90dG9tOiAwOwogICAgICB9CgogICAgICAubmF2LWxpbmsgLmNsb3NlIHsKICAgICAgICBtYXJnaW4tbGVmdDogNXB4OwogICAgICB9CgogICAgICAubmF2LWl0ZW0gewogICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgfQoKICAgICAgLm5hdi10YWJzIHsKICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgIH0KCiAgICAgIC50YWItc2V0IHsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIH0KICAgIA_3D_3D_E_Projects_ForFuture_ng_weather_src_app_shared_tab_set_tab_set_component_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/app/shared/tab-set/tab-set.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5uYXYtbGluay5hY3RpdmUgewogICAgICAgIGJvcmRlci1jb2xvcjogI2U0ZTRlNDsKICAgICAgICBib3JkZXItYm90dG9tOiAwOwogICAgICB9CgogICAgICAubmF2LWxpbmsgLmNsb3NlIHsKICAgICAgICBtYXJnaW4tbGVmdDogNXB4OwogICAgICB9CgogICAgICAubmF2LWl0ZW0gewogICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgfQoKICAgICAgLm5hdi10YWJzIHsKICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgIH0KCiAgICAgIC50YWItc2V0IHsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIH0KICAgIA%3D%3D!./src/app/shared/tab-set/tab-set.component.ts */ 2586);
/* harmony import */ var E_Projects_ForFuture_ng_weather_src_app_shared_tab_set_tab_set_component_ts_css_ngResource_E_Projects_ForFuture_ng_weather_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5uYXYtbGluay5hY3RpdmUgewogICAgICAgIGJvcmRlci1jb2xvcjogI2U0ZTRlNDsKICAgICAgICBib3JkZXItYm90dG9tOiAwOwogICAgICB9CgogICAgICAubmF2LWxpbmsgLmNsb3NlIHsKICAgICAgICBtYXJnaW4tbGVmdDogNXB4OwogICAgICB9CgogICAgICAubmF2LWl0ZW0gewogICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgfQoKICAgICAgLm5hdi10YWJzIHsKICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgIH0KCiAgICAgIC50YWItc2V0IHsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIH0KICAgIA_3D_3D_E_Projects_ForFuture_ng_weather_src_app_shared_tab_set_tab_set_component_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_Projects_ForFuture_ng_weather_src_app_shared_tab_set_tab_set_component_ts_css_ngResource_E_Projects_ForFuture_ng_weather_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5uYXYtbGluay5hY3RpdmUgewogICAgICAgIGJvcmRlci1jb2xvcjogI2U0ZTRlNDsKICAgICAgICBib3JkZXItYm90dG9tOiAwOwogICAgICB9CgogICAgICAubmF2LWxpbmsgLmNsb3NlIHsKICAgICAgICBtYXJnaW4tbGVmdDogNXB4OwogICAgICB9CgogICAgICAubmF2LWl0ZW0gewogICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgfQoKICAgICAgLm5hdi10YWJzIHsKICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgIH0KCiAgICAgIC50YWItc2V0IHsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIH0KICAgIA_3D_3D_E_Projects_ForFuture_ng_weather_src_app_shared_tab_set_tab_set_component_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab/tab.component */ 3037);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TabSetComponent = (_class = class TabSetComponent {
  constructor() {
    this.closable = false;
    this.activeTabIndex = 0;
    this.activeTabIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.closeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  get titles() {
    return this.tabs.map(tab => tab.title);
  }
  treatActiveTab() {
    this.tabs?.forEach((tab, index) => {
      if (index === this.activeTabIndex) tab.elementRef.nativeElement.style.display = "block";else tab.elementRef.nativeElement.style.display = "none";
    });
  }
  chooseTab(index) {
    this.activeTabIndex = index;
    this.activeTabIndexChange.emit(index);
  }
  close(e, index) {
    e.stopPropagation();
    this.closeTab.emit(index);
  }
  isTitleString(title) {
    return typeof title === "string";
  }
  ngAfterContentChecked() {
    this.treatActiveTab();
  }
}, _class.propDecorators = {
  closable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  activeTabIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  activeTabIndexChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  closeTab: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  tabs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
    args: [_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__.TabDirective]
  }]
}, _class);
TabSetComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: "tab-set",
  template: _tab_set_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(E_Projects_ForFuture_ng_weather_src_app_shared_tab_set_tab_set_component_ts_css_ngResource_E_Projects_ForFuture_ng_weather_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5uYXYtbGluay5hY3RpdmUgewogICAgICAgIGJvcmRlci1jb2xvcjogI2U0ZTRlNDsKICAgICAgICBib3JkZXItYm90dG9tOiAwOwogICAgICB9CgogICAgICAubmF2LWxpbmsgLmNsb3NlIHsKICAgICAgICBtYXJnaW4tbGVmdDogNXB4OwogICAgICB9CgogICAgICAubmF2LWl0ZW0gewogICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgfQoKICAgICAgLm5hdi10YWJzIHsKICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgIH0KCiAgICAgIC50YWItc2V0IHsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIH0KICAgIA_3D_3D_E_Projects_ForFuture_ng_weather_src_app_shared_tab_set_tab_set_component_ts__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabSetComponent);


/***/ }),

/***/ 1131:
/*!**************************************************!*\
  !*** ./src/app/shared/tab-set/tab-set.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabSetModule: () => (/* binding */ TabSetModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _tab_set_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-set.component */ 2761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab/tab.component */ 3037);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TabSetModule = class TabSetModule {};
TabSetModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
  exports: [_tab_set_component__WEBPACK_IMPORTED_MODULE_0__.TabSetComponent, _tab_tab_component__WEBPACK_IMPORTED_MODULE_1__.TabDirective],
  declarations: [_tab_set_component__WEBPACK_IMPORTED_MODULE_0__.TabSetComponent, _tab_tab_component__WEBPACK_IMPORTED_MODULE_1__.TabDirective],
  providers: []
})], TabSetModule);


/***/ }),

/***/ 3037:
/*!*****************************************************!*\
  !*** ./src/app/shared/tab-set/tab/tab.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabDirective: () => (/* binding */ TabDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let TabDirective = (_class = class TabDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    elementRef.nativeElement.style.border = "1px solid #ddd";
    elementRef.nativeElement.style.padding = "20px";
  }
}, _class.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}], _class.propDecorators = {
  title: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
}, _class);
TabDirective = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: "tab"
})], TabDirective);


/***/ }),

/***/ 8986:
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DURATION_FOR_CACHE: () => (/* binding */ DURATION_FOR_CACHE),
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5746);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;




const DURATION_FOR_CACHE = 1000 * 60 * 60 * 2; // 2 hours
let WeatherService = WeatherService_1 = (_class = class WeatherService {
  isExpiredCacheData(updatedDate) {
    const difference = new Date().getTime() - new Date(updatedDate).getTime();
    return difference >= DURATION_FOR_CACHE;
  }
  clearCurrentConditions() {
    this.currentConditions.set([]);
  }
  concatPrefixAndZipcode(zipcode, prefix = "CurrentCondition-") {
    return prefix + zipcode;
  }
  getForecastKey(zipcode) {
    return this.concatPrefixAndZipcode(zipcode, "Forecast-");
  }
  getCurrentConditionKey(zipcode) {
    return this.concatPrefixAndZipcode(zipcode, "CurrentCondition-");
  }
  hasCurrentConditionOnCache(zipcode) {
    const currentConditionsByZipcode = JSON.parse(localStorage.getItem(this.getCurrentConditionKey(zipcode)));
    if (currentConditionsByZipcode && !this.isExpiredCacheData(currentConditionsByZipcode.updatedDate)) {
      this.currentConditions.mutate(conditions => conditions.push({
        ...currentConditionsByZipcode
      }));
      return true;
    }
    return false;
  }
  getForecastOnCache(zipcode) {
    const forecast = JSON.parse(localStorage.getItem(this.getForecastKey(zipcode)));
    if (forecast && !this.isExpiredCacheData(forecast.updatedDate)) {
      return forecast;
    }
    return null;
  }
  constructor(http) {
    this.http = http;
    this.currentConditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
  }
  getAllCurrentConditions(locations) {
    this.clearCurrentConditions();
    for (let loc of locations) this.addCurrentConditions(loc);
  }
  addCurrentConditions(zipcode) {
    if (this.hasCurrentConditionOnCache(zipcode)) return;
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    this.http.get(`${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`).subscribe(data => {
      const conditionsAndZip = {
        zip: zipcode,
        data,
        updatedDate: new Date().toLocaleString()
      };
      localStorage.setItem(this.getCurrentConditionKey(zipcode), JSON.stringify(conditionsAndZip));
      this.currentConditions.mutate(conditions => conditions.push(conditionsAndZip));
    });
  }
  removeCurrentConditions(zipcode) {
    this.currentConditions.mutate(conditions => {
      for (let i in conditions) {
        if (conditions[i].zip == zipcode) {
          conditions.splice(+i, 1);
        }
      }
    });
  }
  getCurrentConditions() {
    return this.currentConditions.asReadonly();
  }
  getForecast(zipcode) {
    const forecastOnCache = this.getForecastOnCache(zipcode);
    if (forecastOnCache) return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(forecastOnCache);
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get(`${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
      localStorage.setItem(this.getForecastKey(zipcode), JSON.stringify({
        ...data,
        updatedDate: new Date().toLocaleString()
      }));
    }));
  }
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) return WeatherService_1.ICON_URL + "art_storm.png";else if (id >= 501 && id <= 511) return WeatherService_1.ICON_URL + "art_rain.png";else if (id === 500 || id >= 520 && id <= 531) return WeatherService_1.ICON_URL + "art_light_rain.png";else if (id >= 600 && id <= 622) return WeatherService_1.ICON_URL + "art_snow.png";else if (id >= 801 && id <= 804) return WeatherService_1.ICON_URL + "art_clouds.png";else if (id === 741 || id === 761) return WeatherService_1.ICON_URL + "art_fog.png";else return WeatherService_1.ICON_URL + "art_clear.png";
  }
}, _class.URL = "https://api.openweathermap.org/data/2.5", _class.APPID = "5a4b2d457ecbef9eb2a71e480b947604", _class.ICON_URL = "https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/", _class.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}], _class);
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()], WeatherService);


/***/ }),

/***/ 1402:
/*!**********************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 7606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../location.service */ 4056);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ZipcodeEntryComponent = (_class = class ZipcodeEntryComponent {
  constructor(service) {
    this.service = service;
  }
  addLocation(zipcode) {
    if (zipcode.length !== 5) return;
    this.service.addLocation(zipcode);
  }
}, _class.ctorParameters = () => [{
  type: _location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService
}], _class);
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: "app-zipcode-entry",
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ZipcodeEntryComponent);


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 2586:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/shared/tab-set/tab-set.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5uYXYtbGluay5hY3RpdmUgewogICAgICAgIGJvcmRlci1jb2xvcjogI2U0ZTRlNDsKICAgICAgICBib3JkZXItYm90dG9tOiAwOwogICAgICB9CgogICAgICAubmF2LWxpbmsgLmNsb3NlIHsKICAgICAgICBtYXJnaW4tbGVmdDogNXB4OwogICAgICB9CgogICAgICAubmF2LWl0ZW0gewogICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgfQoKICAgICAgLm5hdi10YWJzIHsKICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgIH0KCiAgICAgIC50YWItc2V0IHsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIH0KICAgIA%3D%3D!./src/app/shared/tab-set/tab-set.component.ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
      .nav-link.active {
        border-color: #e4e4e4;
        border-bottom: 0;
      }

      .nav-link .close {
        margin-left: 5px;
      }

      .nav-item {
        cursor: pointer;
      }

      .nav-tabs {
        border: none;
      }

      .tab-set {
        position: relative;
      }
    `, "",{"version":3,"sources":["webpack://./src/app/shared/tab-set/tab-set.component.ts"],"names":[],"mappings":";MACM;QACE,qBAAqB;QACrB,gBAAgB;MAClB;;MAEA;QACE,gBAAgB;MAClB;;MAEA;QACE,eAAe;MACjB;;MAEA;QACE,YAAY;MACd;;MAEA;QACE,kBAAkB;MACpB","sourcesContent":["\n      .nav-link.active {\n        border-color: #e4e4e4;\n        border-bottom: 0;\n      }\n\n      .nav-link .close {\n        margin-left: 5px;\n      }\n\n      .nav-item {\n        cursor: pointer;\n      }\n\n      .nav-tabs {\n        border: none;\n      }\n\n      .tab-set {\n        position: relative;\n      }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6715:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2340:
/*!********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.flex {
  display: flex;
  justify-content: space-between;
}

.well {
  margin-bottom: 0;
}`, "",{"version":3,"sources":["webpack://./src/app/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[".flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.well {\r\n  margin-bottom: 0;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7854:
/*!************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\r\n  width: 45px;\r\n  height: 45px;\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\r\n";

/***/ }),

/***/ 9139:
/*!*********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- AN EXAMPLE FOR USING GENERIC TAB -->\r\n<!-- <tab-set>\r\n  <tab [title]=\"titleTemplate\"> Hello </tab>\r\n\r\n  <ng-template #titleTemplate><span>Yeap</span></ng-template>\r\n  <tab [title]=\"'Bye'\"> Good bye </tab>\r\n</tab-set> -->\r\n\r\n<tab-set\r\n  [(activeTabIndex)]=\"activeTabIndex\"\r\n  [closable]=\"true\"\r\n  (closeTab)=\"removeCondition($event)\"\r\n>\r\n  <tab\r\n    *ngFor=\"let location of currentConditionsByZip()\"\r\n    [title]=\"location.data.name\"\r\n  >\r\n    <div class=\"well flex\" (click)=\"showForecast(location.zip)\">\r\n      <div>\r\n        <h3>{{ location.data.name }} ({{ location.zip }})</h3>\r\n        <h4>Current conditions: {{ location.data.weather[0].main }}</h4>\r\n        <h4>Temperatures today:</h4>\r\n        <p>\r\n          Current {{ location.data.main.temp | number : \".0-0\" }} - Max\r\n          {{ location.data.main.temp_max | number : \".0-0\" }} - Min\r\n          {{ location.data.main.temp_min | number : \".0-0\" }}\r\n        </p>\r\n        <p>\r\n          <a [routerLink]=\"['/forecast', location.zip]\"\r\n            >Show 5-day forecast for {{ location.data.name }}</a\r\n          >\r\n        </p>\r\n      </div>\r\n      <div>\r\n        <img\r\n          [src]=\"weatherService.getWeatherIcon(location.data.weather[0].id)\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </tab>\r\n</tab-set>\r\n";

/***/ }),

/***/ 4517:
/*!*************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">5-day forecast for {{ forecast?.city.name }}</h3>\r\n    </div>\r\n    <ul class=\"list-group\">\r\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\r\n        {{ dailyForecast.dt * 1000 | date : \"EEEE, MMM d\" }}:\r\n        {{ dailyForecast.weather[0].main }}\r\n        - Min: {{ dailyForecast.temp.min | number : \".0-0\" }} - Max:\r\n        {{ dailyForecast.temp.max | number : \".0-0\" }}\r\n\r\n        <img\r\n          [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\"\r\n          class=\"icon\"\r\n        />\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<button class=\"btn btn-success\" [routerLink]=\"'/'\">< Back to main page</button>\r\n";

/***/ }),

/***/ 8132:
/*!***************************************************************!*\
  !*** ./src/app/main-page/main-page.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n\r\n  <app-zipcode-entry> </app-zipcode-entry>\r\n  <app-current-conditions></app-current-conditions>\r\n\r\n</div>\r\n";

/***/ }),

/***/ 8677:
/*!******************************************************************!*\
  !*** ./src/app/shared/tab-set/tab-set.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul class=\"nav nav-tabs\">\r\n  <li class=\"nav-item\" *ngFor=\"let title of titles; index as i\">\r\n    <a\r\n      class=\"nav-link\"\r\n      [ngClass]=\"{ active: i === activeTabIndex }\"\r\n      aria-current=\"page\"\r\n      (click)=\"chooseTab(i)\"\r\n    >\r\n      <ng-container *ngIf=\"isTitleString(title); else template\">\r\n        {{ title }}\r\n      </ng-container>\r\n      <ng-template #template>\r\n        <ng-containter [ngTemplateOutlet]=\"title\"></ng-containter>\r\n      </ng-template>\r\n      <span *ngIf=\"closable\" (click)=\"close($event, i)\" class=\"close\"\r\n        >&times;</span\r\n      ></a\r\n    >\r\n  </li>\r\n</ul>\r\n<div class=\"tab-set\">\r\n  <ng-content></ng-content>\r\n</div>\r\n";

/***/ }),

/***/ 7606:
/*!***********************************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\r\n  <h2>Enter a zipcode:</h2>\r\n  <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\">\r\n  <br>\r\n  <button class=\"btn btn-primary\" (click)=\"addLocation(zipcode.value)\" >\r\n    Add location\r\n  </button>\r\n</div>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map