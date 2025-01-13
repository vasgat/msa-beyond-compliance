"use strict";
(self["webpackChunkmsa_dashboard"] = self["webpackChunkmsa_dashboard"] || []).push([["main"],{

/***/ 82912:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _assets_methodology_table_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/methodology_table.json */ 47187);
/* harmony import */ var _assets_spotlight_metrics_table_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/spotlight_metrics_table.json */ 56770);
/* harmony import */ var _assets_reports_per_sector_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/reports_per_sector.json */ 28807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_sector_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sector.provider */ 41398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subscribe/subscribe.component */ 40983);
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slider/slider.component */ 80280);
/* harmony import */ var _slider_slider_item_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slider/slider-item.directive */ 60606);
// @ts-ignore

// @ts-ignore

// @ts-ignore








function AboutComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 56)(1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 59)(4, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Read more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const report_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", report_r1["image"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](report_r1["title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](report_r1["description"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", report_r1["href"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function AboutComponent_tr_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 63)(2, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", item_r2["url"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r2["metric"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r2["description"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", item_r2["requirements_guidance_color"] === "red" ? "td-bg-color-red" : "td-bg-color-yellow");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r2["requirements_guidance"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", item_r2["requirements_criterion_color"] === "red" ? "td-bg-color-red" : "td-bg-color-yellow");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r2["requirements_criterion"], "");
  }
}
function AboutComponent_tr_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 63)(2, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", item_r3["url"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r3["metric"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r3["description"]);
  }
}
function AboutComponent_div_168_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 68)(1, "div", 69)(2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const contributor_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", contributor_r4.logo, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", contributor_r4.contributor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", contributor_r4.contributor, " ");
  }
}
function AboutComponent_ng_template_169_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "As the project progressed 3 more standardised metrics have been added. One resulting from the Australian Modern Slavery Act requirements assessing \"Consultation process\" (see table below) and two looking at best practices such as companies ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "providing a historic record of previous statements");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " on their website, and making explicit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "how the legislation impacted company behavior.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
class AboutComponent {
  constructor(route, sectorProvider, scroll) {
    this.route = route;
    this.sectorProvider = sectorProvider;
    this.scroll = scroll;
    this.table = [];
    this.spotlight_metrics_table = [];
    this.reports = [];
    this.currentIndex = 1;
    this.contributors = [{
      "contributor": "Australian National University",
      "logo": "https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/5295432/20444349-medium.png"
    }, {
      "contributor": "ESCP Europe",
      "logo": "https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/1779114/12602972-medium.png"
    }, {
      "contributor": "John Hopkins University",
      "logo": "https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/2749557/12774885-medium.jpg"
    }, {
      "contributor": "Lancaster University Management School",
      "logo": "https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/12639475/33117884-medium.png"
    }, {
      "contributor": "School of International and Public Affairs at Columbia University",
      "logo": "https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/12639482/33117897-medium.png"
    }, {
      "contributor": "University of Amsterdam",
      "logo": "https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/5759131/21999891-medium.png"
    }, {
      "contributor": "University of British Columbia",
      "logo": "https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/2877117/13099211-medium.png"
    }, {
      "contributor": "University of Connecticut",
      "logo": "https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/2877060/13099154-medium.png"
    }, {
      "contributor": "University of Nottingham",
      "logo": "https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/3149947/13561221-medium.png"
    }, {
      "contributor": "University of Western Australia",
      "logo": "https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/2549359/12602502-medium.jpeg"
    }];
  }
  ngOnInit() {
    this.table = JSON.parse(JSON.stringify(_assets_methodology_table_json__WEBPACK_IMPORTED_MODULE_0__));
    this.spotlight_metrics_table = JSON.parse(JSON.stringify(_assets_spotlight_metrics_table_json__WEBPACK_IMPORTED_MODULE_1__));
    this.reports = JSON.parse(JSON.stringify(_assets_reports_per_sector_json__WEBPACK_IMPORTED_MODULE_2__));
    this.route.url.subscribe(val => {
      if (val[0].path === 'about') this.sectorProvider.getPath().next(val[0].path);
    });
    this.scrollToTop();
  }
  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
  static {
    this.ɵfac = function AboutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_sector_provider__WEBPACK_IMPORTED_MODULE_3__.SectorProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.ViewportScroller));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["about"]],
      decls: 171,
      vars: 4,
      consts: [["standardized_metrics_details", ""], [1, "container", "mt-4", "mb-4"], [1, "pt-4", "pb-4"], [1, "intro", "pb-4", "col-lg-10", "col-md-12"], [1, "row"], [1, "col-lg-12", "p-3", "pt-4", "pb-4"], [1, "mb-3"], [1, "col-lg-10", "col-md-12"], ["appSliderItem", "", 4, "ngFor", "ngForOf"], [1, "mb-4"], [1, "row", "ms-lg-0", "me-lg-0", "ms-1", "me-1"], [1, "col-lg-4", "mb-lg-0", "mb-3", "no-padding", "pe-lg-2", "content-box"], [1, "bg-yellow", "p-4", "fit-height"], [1, "no-margin"], [1, "col-lg-4", "mb-lg-0", "mb-3", "no-padding", "ps-lg-2", "pe-lg-2", "content-box"], [1, "bg-dark-orange", "p-4", "pb-2", "fit-height"], [1, "col-lg-4", "no-padding", "ps-lg-2", "content-box"], [1, "bg-deep-blue", "p-4", "fit-height"], ["href", "https://wikirate.org/MSA_Beyond_Compliance_Research", 1, "text-white"], [1, "col-lg-12"], [1, "content"], [1, "section", "bg-grey"], ["id", "methodology", 1, "content", "collapse"], [1, "table", "table-responsive-md"], [1, "thead-dark"], ["scope", "col-3", "colspan", "2", 1, "bg-deep-blue", "wikirate-metrics"], ["scope", "col-3", 1, "bg-deep-blue"], ["href", "https://www.gov.uk/government/publications/transparency-in-supply-chains-a-practical-guide"], ["href", "https://modernslaveryregister.gov.au/resources/"], ["scope", "col-2", 1, "bg-white", "wikirate-metrics"], ["scope", "col-4", 1, "bg-white", "wikirate-metrics"], ["scope", "col-3", 1, "bg-white"], [4, "ngFor", "ngForOf"], [1, "row", "ms-2"], [1, "row", "p-1", "justify-content-end"], [1, "col-auto", "no-padding"], [1, "col-auto"], [1, "legend-box", "td-bg-color-red"], [1, "legend-box", "td-bg-color-yellow"], [1, "table", "table-responsive-md", "mt-3"], ["scope", "col-9", "colspan", "2", 1, "bg-deep-blue", "wikirate-metrics"], ["scope", "col-10", 1, "bg-white", "wikirate-metrics"], ["id", "show-more", "data-bs-toggle", "collapse", "href", "#methodology", "role", "button", "aria-expanded", "false", "aria-controls", "methodology", 1, "show-more", "collapsed"], [1, "section"], [1, "col-md-8", "p-3"], ["href", "https://wikirate.org", "target", "_blank"], [1, "col-md-4", "mb-md-0", "mb-3", "p-md-4", "content-box", "d-flex", "flex-column", "justify-content-center"], [1, "bg-deep-blue", "p-4"], ["href", "https://wikirate.org/MSA_Beyond_Compliance_Research", "target", "_blank", 1, "text-white"], [1, "mt-auto"], ["href", "https://docs.google.com/forms/d/e/1FAIpQLSerCNkXsdRrdPeirYub3qMxY5SC0-JwxpP7b9gUZuV0mL6Q-Q/viewform", "target", "_blank", 1, "button", "white-button", "mt-3", "me-2"], [1, "container"], [1, "col-lg-12", "p-3"], [1, "slider", "mt-3"], [1, "slide-track"], ["class", "slide", 4, "ngFor", "ngForOf"], ["appSliderItem", ""], [1, "card", "m-2", 2, "width", "18rem"], [1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["target", "_blank", 1, "button", "orange-navy-button", "mt-3", "me-2", 3, "href"], [1, "col-2", "bg-neutral-blue", "wikirate-metrics"], ["target", "_blank", 3, "href"], [1, "col-4", "bg-neutral-blue", "wikirate-metrics"], [1, "col-3", 3, "ngClass"], [1, "col-10", "bg-neutral-blue", "wikirate-metrics"], [1, "slide"], [1, "row", "col-12", "justify-content-center"], [1, "image-box", "d-flex", "justify-content-center", "align-items-center", "m-2"], [3, "src", "alt"], [1, "contributor-name", "m3", "text-center"], ["href", "https://wikirate.org/Walk_Free+MSA_historic_record", "target", "_blank"], ["href", "https://wikirate.org/Walk_Free+MSA_Impact_on_Company_Behaviour", "target", "_blank"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "This dashboard shines a light on business reporting under modern slavery legislation. Only with transparency can we understand how legislation is affecting business practice, hold non-compliance to account and improve industry standards. Promoting respect for human rights and labour standards is crucial to build a more sustainable and resilient global economy - join us in our efforts!");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 1)(6, "div", 4)(7, "div", 5)(8, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Sector Focus");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Over the years Walk Free has analysed and published subsets of the data collected through the Modern Slavery Act Research project on Wikirate. Since 2019 these case studies have had a sector specific focus, which so far have included: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "app-slider");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, AboutComponent_div_13_Template, 10, 4, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 1)(15, "h3", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Take Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Policy maker");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "ul", 13)(23, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Assess how companies are responding to MSA legislation across sectors");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Find reporting gaps and assess how these could be improved through strengthened legislation");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Use these findings to advocate for improved MSA legislation");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Implement financial penalties for non-compliance with the MSAs");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 14)(32, "div", 15)(33, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Company reporting under MSA");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "ul")(36, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Assess how peers are performing under MSA legislations and identify better practice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Address reporting gaps that exist at your company");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Use the beyond compliance metrics to define due diligence and reporting targets");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Share findings with industry initiatives, to encourage better engagement with MSA legislations");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 16)(45, "div", 17)(46, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Activist");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "ul")(49, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Share findings on social media to highlight where companies can do more ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Spread the word! Share the dashboard so that others can engage too");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, " Join the MSA research on the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Wikirate platform");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 1)(58, "div", 4)(59, "div", 19)(60, "div", 20)(61, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, " In 2016, when the first companies started publishing their UK Modern Slavery Act statements, Walk Free and Wikirate partnered to set up a research project that could assess their contents; were companies approaching it as another tick box exercise or were they going beyond compliance? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 21)(64, "div", 1)(65, "div", 4)(66, "div", 5)(67, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "Methodology");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, " Drawing on Walk Free's knowledge of modern slavery due diligence and the Home Office Guidance accompanying the UK Act, the partnership developed a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "set of 18 standardised metrics");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, " to assess the content of the statements. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "In 2024, ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "3 spotlight metrics");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, " were designed to capture additional aspects of due diligence. The following overview shows how both the UK and Australian legislation guidance and requirements map to the projects' standardised metrics. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 22)(80, "table", 23)(81, "thead", 24)(82, "tr")(83, "th", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "Walk Free metrics on Wikirate platform ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "th", 26)(86, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "UK MSA Requirements & Guidance");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "th", 26)(89, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "Australia MSA Requirements");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "tr")(92, "th", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "Metric");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "Requirements & Guidance");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "Requirements & Criterion");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](101, AboutComponent_tr_101_Template, 10, 7, "tr", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "div", 33)(103, "div", 34)(104, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "Mandatory");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](107, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "div", 34)(109, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110, "Not Mandatory");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](112, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "table", 39)(114, "thead", 24)(115, "tr")(116, "th", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, "Spotlight metrics ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "tr")(119, "th", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](120, "Metric");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "th", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](124, AboutComponent_tr_124_Template, 6, 3, "tr", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](125, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "div", 1)(127, "div", 43)(128, "div", 4)(129, "div", 44)(130, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](131, "Collaborative Research");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "div", 20)(133, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](134, "On ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](135, "a", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](136, "wikirate.org");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](137, " anyone interested can take part in research efforts that gather data about the actions and impacts of companies on people and planet. The data displayed in this dashboard is collected through the Modern Slavery Act research project. It is organised by Walk Free and Wikirate but the research is conducted by a much broader community of passionate researchers including volunteers, University students, and experts from around the world. As the research is ongoing, this is a dynamic dashboard that updates as and when new data is contributed to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "a", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](139, "wikirate.org");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](140, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](141, "p")(142, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](143, "The data feeding into this dashboard includes raw assessment from our team of student volunteers. The data used in our research publications undergoes an additional layer of quality assurance.");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "div", 46)(145, "div", 47)(146, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](147, "Join the Research");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](148, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](149, "Contribute to MSA research via the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](151, "wikirate.org");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "div", 49)(153, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](154, "Become a Volunteer");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](155, "div", 51)(156, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](157, "app-subscribe");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](158, "div", 1)(159, "div", 43)(160, "div", 4)(161, "div", 52)(162, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](163, "Research Contributors");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](165, "This research was performed with the contribution of the following organisations");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](166, "div", 53)(167, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](168, AboutComponent_div_168_Template, 6, 3, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](169, AboutComponent_ng_template_169_Template, 7, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.reports);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](88);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.table);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.spotlight_metrics_table);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.contributors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_4__.SubscribeComponent, _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__.SliderComponent, _slider_slider_item_directive__WEBPACK_IMPORTED_MODULE_6__.SliderItemDirective],
      styles: ["p[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  line-height: 25px !important;\n  font-weight: 400 !important;\n  letter-spacing: 0.3px;\n  font-family: SourceSansPro !important;\n}\n\np.intro[_ngcontent-%COMP%] {\n  font-size: 32px !important;\n  line-height: 38.4px !important;\n  font-weight: 400 !important;\n  letter-spacing: 0.3px;\n  font-family: TiemposText !important;\n}\n\n@media only screen and (max-width: 576px) {\n  .wikirate-metrics[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 576px) {\n  p.intro[_ngcontent-%COMP%] {\n    font-size: 26px !important;\n    line-height: 32px !important;\n    font-weight: 400 !important;\n    letter-spacing: 0.2px;\n    font-family: TiemposText !important;\n  }\n}\n.content-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  line-height: 22px !important;\n  font-weight: 400 !important;\n  letter-spacing: 0.3px;\n}\n\nli[_ngcontent-%COMP%] {\n  padding-bottom: 7px;\n}\n\n.show-more.collapsed[_ngcontent-%COMP%]::before {\n  content: \"Show More\";\n  text-transform: uppercase;\n  font-family: Rubik !important;\n  font-size: 14px !important;\n  font-weight: 600;\n  padding-right: 0.4em;\n}\n\n.show-more.collapsed[_ngcontent-%COMP%]::after {\n  content: \"\\f105\";\n  font-size: 16px !important;\n  font-weight: 600;\n  font-family: FontAwesome !important;\n}\n\n.show-more[_ngcontent-%COMP%]:not(.collapsed)::before {\n  content: \"Show Less\";\n  font-family: Rubik !important;\n  text-transform: uppercase;\n  font-size: 14px !important;\n  font-weight: 600;\n  padding-right: 0.4em;\n}\n\n.show-more[_ngcontent-%COMP%]:not(.collapsed)::after {\n  content: \"\\f106\";\n  font-size: 16px !important;\n  font-weight: 600;\n  font-family: FontAwesome !important;\n}\n\n.show-more[_ngcontent-%COMP%]:hover {\n  color: #FF5C45 !important;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 250px !important;\n  height: 250px !important;\n  min-width: 250px !important;\n  min-height: 250px !important;\n}\n\n.image-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100% !important;\n  max-height: 100% !important;\n  height: auto !important;\n}\n\n.contributor-name[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.6em;\n}\n\n.image-box[_ngcontent-%COMP%] {\n  width: 140px !important;\n  height: 140px !important;\n}\n\n.image-box-small-screen[_ngcontent-%COMP%] {\n  height: auto !important;\n  max-width: 200px !important;\n}\n\n@keyframes _ngcontent-%COMP%_scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-1750px);\n  }\n}\n.slider[_ngcontent-%COMP%] {\n  height: 200px;\n  margin: auto;\n  overflow: hidden;\n  position: relative;\n  width: auto;\n}\n.slider[_ngcontent-%COMP%]   .slide-track[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_scroll 60s linear infinite;\n  display: flex;\n  width: 3500px;\n}\n.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 250px;\n}\n\n.card-img-top[_ngcontent-%COMP%] {\n  max-height: 161px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9rdWJlcm5ldGVzJTIwcGxheWdyb3VuZC9tc2EtYmV5b25kLWNvbXBsaWFuY2Uvc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsYUFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSw0QkFBQTtJQUNBLDJCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQ0FBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtBQ0RGOztBRElBO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQ0RGOztBRElBO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURJQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDREY7O0FESUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUNERjs7QURJQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUNERjs7QURNQTtFQUNFO0lBQUssd0JBQUE7RUNGTDtFREdBO0lBQU8sOEJBQUE7RUNBUDtBQUNGO0FERUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQUY7QURFRTtFQUNFLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNBSjtBREVFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNBSjs7QURJQTtFQUNFLGlCQUFBO0FDREYiLCJzb3VyY2VzQ29udGVudCI6WyJwLCBsaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gIGZvbnQtZmFtaWx5OiBTb3VyY2VTYW5zUHJvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnAuaW50cm8ge1xyXG4gIGZvbnQtc2l6ZTogMzJweCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAzOC40cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gIGZvbnQtZmFtaWx5OiBUaWVtcG9zVGV4dCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLndpa2lyYXRlLW1ldHJpY3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgcC5pbnRybyB7XHJcbiAgICBmb250LXNpemU6IDI2cHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICBmb250LWZhbWlseTogVGllbXBvc1RleHQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50LWJveCBwLCBsaXtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbn1cclxuXHJcbmxpe1xyXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbi5zaG93LW1vcmUuY29sbGFwc2VkOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdTaG93IE1vcmUnO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6IFJ1YmlrICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjRlbTtcclxufVxyXG5cclxuLnNob3ctbW9yZS5jb2xsYXBzZWQ6OmFmdGVyIHtcclxuICBjb250ZW50OiAnXFxmMTA1JztcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2hvdy1tb3JlOm5vdCguY29sbGFwc2VkKTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnU2hvdyBMZXNzJztcclxuICBmb250LWZhbWlseTogUnViaWsgIWltcG9ydGFudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy1yaWdodDogMC40ZW07XHJcbn1cclxuXHJcbi5zaG93LW1vcmU6bm90KC5jb2xsYXBzZWQpOjphZnRlciB7XHJcbiAgY29udGVudDogJ1xcZjEwNic7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNob3ctbW9yZTpob3ZlcntcclxuICBjb2xvcjogI0ZGNUM0NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1nIHtcclxuICB3aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWFnZS1ib3ggaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250cmlidXRvci1uYW1le1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAwLjZlbTtcclxufVxyXG5cclxuLmltYWdlLWJveHtcclxuICB3aWR0aDogMTQwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWFnZS1ib3gtc21hbGwtc2NyZWVue1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuJGFuaW1hdGlvblNwZWVkOiA2MHM7XHJcblxyXG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTI1MHB4ICogNykpfVxyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG5cclxuICAuc2xpZGUtdHJhY2sge1xyXG4gICAgYW5pbWF0aW9uOiBzY3JvbGwgJGFuaW1hdGlvblNwZWVkIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogY2FsYygyNTBweCAqIDE0KTtcclxuICB9XHJcbiAgLnNsaWRlIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1pbWctdG9we1xyXG4gIG1heC1oZWlnaHQ6IDE2MXB4O1xyXG59XHJcbiIsInAsIGxpIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBmb250LWZhbWlseTogU291cmNlU2Fuc1BybyAhaW1wb3J0YW50O1xufVxuXG5wLmludHJvIHtcbiAgZm9udC1zaXplOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAzOC40cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiBUaWVtcG9zVGV4dCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC53aWtpcmF0ZS1tZXRyaWNzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICBwLmludHJvIHtcbiAgICBmb250LXNpemU6IDI2cHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgZm9udC1mYW1pbHk6IFRpZW1wb3NUZXh0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5jb250ZW50LWJveCBwLCBsaSB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cblxubGkge1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xufVxuXG4uc2hvdy1tb3JlLmNvbGxhcHNlZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJTaG93IE1vcmVcIjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFJ1YmlrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjRlbTtcbn1cblxuLnNob3ctbW9yZS5jb2xsYXBzZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcXGYxMDVcIjtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZSAhaW1wb3J0YW50O1xufVxuXG4uc2hvdy1tb3JlOm5vdCguY29sbGFwc2VkKTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJTaG93IExlc3NcIjtcbiAgZm9udC1mYW1pbHk6IFJ1YmlrICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjRlbTtcbn1cblxuLnNob3ctbW9yZTpub3QoLmNvbGxhcHNlZCk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcXGYxMDZcIjtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZSAhaW1wb3J0YW50O1xufVxuXG4uc2hvdy1tb3JlOmhvdmVyIHtcbiAgY29sb3I6ICNGRjVDNDUgIWltcG9ydGFudDtcbn1cblxuLmltZyB7XG4gIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbn1cblxuLmltYWdlLWJveCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmNvbnRyaWJ1dG9yLW5hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuNmVtO1xufVxuXG4uaW1hZ2UtYm94IHtcbiAgd2lkdGg6IDE0MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTQwcHggIWltcG9ydGFudDtcbn1cblxuLmltYWdlLWJveC1zbWFsbC1zY3JlZW4ge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNzUwcHgpO1xuICB9XG59XG4uc2xpZGVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xufVxuLnNsaWRlciAuc2xpZGUtdHJhY2sge1xuICBhbmltYXRpb246IHNjcm9sbCA2MHMgbGluZWFyIGluZmluaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMzUwMHB4O1xufVxuLnNsaWRlciAuc2xpZGUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5jYXJkLWltZy10b3Age1xuICBtYXgtaGVpZ2h0OiAxNjFweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 94114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 62320);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 82912);
/* harmony import */ var _dashboard_key_findings_section_key_findings_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/key-findings-section/key-findings-section.component */ 27789);
/* harmony import */ var _dashboard_minimum_requirements_section_minimum_requirements_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/minimum-requirements-section/minimum-requirements-section.component */ 4939);
/* harmony import */ var _dashboard_further_findings_alternative_two_further_findings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/further-findings-alternative-two/further-findings.component */ 50664);
/* harmony import */ var _dashboard_disclosure_rates_disclosure_rates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/disclosure-rates/disclosure-rates.component */ 8755);
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscribe/subscribe.component */ 40983);
/* harmony import */ var _dashboard_beyond_compliance_beyond_compliance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/beyond-compliance/beyond-compliance.component */ 36063);
/* harmony import */ var _dashboard_highlight_metric_highlight_metric_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/highlight-metric/highlight-metric.component */ 10891);
/* harmony import */ var _case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./case-studies/case-studies.component */ 81502);
/* harmony import */ var _dashboard_going_beyond_compliance_going_beyond_compliance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/going-beyond-compliance/going-beyond-compliance.component */ 13379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);














const routes = [{
  path: 'dashboard/:sector',
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}, {
  path: 'dashboard/key-findings/:sector',
  component: _dashboard_key_findings_section_key_findings_section_component__WEBPACK_IMPORTED_MODULE_2__.KeyFindingsSectionComponent
}, {
  path: 'dashboard/highlight-metric/:sector',
  component: _dashboard_highlight_metric_highlight_metric_component__WEBPACK_IMPORTED_MODULE_8__.HighlightMetricComponent
}, {
  path: 'dashboard/meeting-minimum-requirements/:sector',
  component: _dashboard_minimum_requirements_section_minimum_requirements_section_component__WEBPACK_IMPORTED_MODULE_3__.MinimumRequirementsSectionComponent
}, {
  path: 'dashboard/beyond-compliance/:sector',
  component: _dashboard_beyond_compliance_beyond_compliance_component__WEBPACK_IMPORTED_MODULE_7__.BeyondComplianceComponent
}, {
  path: 'dashboard/going-beyond-compliance/:sector',
  component: _dashboard_going_beyond_compliance_going_beyond_compliance_component__WEBPACK_IMPORTED_MODULE_10__.GoingBeyondComplianceComponent
}, {
  path: 'dashboard/further-findings/:sector',
  component: _dashboard_further_findings_alternative_two_further_findings_component__WEBPACK_IMPORTED_MODULE_4__.FurtherFindingsComponent
}, {
  path: 'dashboard/sector-disclosure-rates/:sector',
  component: _dashboard_disclosure_rates_disclosure_rates_component__WEBPACK_IMPORTED_MODULE_5__.DisclosureRatesComponent
}, {
  path: 'case-studies',
  component: _case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_9__.CaseStudiesComponent
}, {
  path: 'subscribe',
  component: _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_6__.SubscribeComponent
}, {
  path: 'about',
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}, {
  path: '**',
  redirectTo: '/dashboard/all-sectors',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookieconsent */ 23719);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 42152);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 60708);






function AppComponent_header_component_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header-component");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_footer_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "footer");
  }
}
const cookieConfig = {
  cookie: {
    domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};
class AppComponent {
  constructor(route, router, ccService) {
    this.route = route;
    this.router = router;
    this.ccService = ccService;
    this.view = 'default';
  }
  ngOnInit() {
    // subscribe to cookieconsent observables to react to main events
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(() => {
      // you can use this.ccService.getConfig() to do stuff...
    });
    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(() => {});
    this.initializeSubscription = this.ccService.initializing$.subscribe(event => {});
    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(event => {
      if (event.status == 'allow') {
        gtag('consent', 'update', {
          'ad_storage': 'granted',
          'analytics_storage': 'granted'
        });
      } else {
        gtag('consent', 'update', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied'
        });
        this.deleteAllCookies();
      }
    });
    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(() => {
      gtag('consent', 'update', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied'
      });
    });
    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(event => {});
    // this.setUpAnalytics();
    this.route.queryParams.subscribe(params => {
      // @ts-ignore
      this.view = params.view;
    });
  }
  deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      if (name.includes("_ga") || name.includes("_gid") || name.includes("_gat")) {
        document.cookie = name + '=; path=/; domain=' + '.wikirate.org' + '; expires=' + new Date(0).toUTCString();
      }
    }
  }
  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializeSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_4__.NgcCookieConsentService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_header_component_0_Template, 2, 0, "header-component", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_footer_2_Template, 1, 0, "footer", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.view !== "embed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.view !== "embed");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 50635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 94114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 20092);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 42152);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 60708);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ 82912);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 62320);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 48418);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _services_sector_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/sector.provider */ 41398);
/* harmony import */ var _dashboard_introductory_section_introductory_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/introductory-section/introductory-section.component */ 66605);
/* harmony import */ var _dashboard_key_findings_section_key_findings_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/key-findings-section/key-findings-section.component */ 27789);
/* harmony import */ var _dashboard_minimum_requirements_section_minimum_requirements_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/minimum-requirements-section/minimum-requirements-section.component */ 4939);
/* harmony import */ var _services_data_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/data.provider */ 74004);
/* harmony import */ var _pipes_num_format_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/num-format.pipe */ 44078);
/* harmony import */ var _services_charts_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/charts.service */ 33827);
/* harmony import */ var _pipes_percentage_format_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/percentage-format.pipe */ 62952);
/* harmony import */ var _dashboard_disclosure_rates_disclosure_rates_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/disclosure-rates/disclosure-rates.component */ 8755);
/* harmony import */ var _dashboard_further_findings_alternative_two_approach_to_policies_approach_to_policies_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/further-findings-alternative-two/approach-to-policies/approach-to-policies.component */ 57114);
/* harmony import */ var _dashboard_further_findings_alternative_two_further_findings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/further-findings-alternative-two/further-findings.component */ 50664);
/* harmony import */ var _dashboard_further_findings_alternative_two_approach_to_incidents_approach_to_incidents_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/further-findings-alternative-two/approach-to-incidents/approach-to-incidents.component */ 30938);
/* harmony import */ var _dashboard_further_findings_alternative_two_approach_to_risks_approach_to_risks_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/further-findings-alternative-two/approach-to-risks/approach-to-risks.component */ 99250);
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./section/section.component */ 73944);
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-export-as */ 6621);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-clipboard */ 46881);
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./subscribe/subscribe.component */ 40983);
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-cookieconsent */ 23719);
/* harmony import */ var _dashboard_spotlight_metrics_spotlight_metrics_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/spotlight-metrics/spotlight-metrics.component */ 395);
/* harmony import */ var _dashboard_beyond_compliance_beyond_compliance_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/beyond-compliance/beyond-compliance.component */ 36063);
/* harmony import */ var _dashboard_highlight_metric_highlight_metric_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/highlight-metric/highlight-metric.component */ 10891);
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./slider/slider.component */ 80280);
/* harmony import */ var _slider_slider_item_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./slider/slider-item.directive */ 60606);
/* harmony import */ var _case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./case-studies/case-studies.component */ 81502);
/* harmony import */ var _dashboard_going_beyond_compliance_going_beyond_compliance_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dashboard/going-beyond-compliance/going-beyond-compliance.component */ 13379);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _dashboard_export_as_export_as_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/export-as/export-as.component */ 84503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 37580);








































const cookieConfig = {
  cookie: {
    domain: '.wikirate.org'
  },
  palette: {
    popup: {
      background: '#000029'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out',
  layout: 'my-custom-layout',
  layouts: {
    "my-custom-layout": '{{messagelink}}{{compliance}}'
  },
  elements: {
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}
      <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link" href="{{privacyPolicyHref}}" target="_blank">{{privacyPolicyLink}}</a>.
    </span>
    `
  },
  content: {
    message: 'The Beyond Compliance Dashboard uses cookies to collect and analyze site performance and usage. By clicking the Accept button, you agree to allow us to place cookies and share information with Google Analytics. For more information, please read our ',
    privacyPolicyLink: 'Privacy Policy',
    privacyPolicyHref: 'https://www.walkfree.org/privacy-policy/'
  }
};
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({
      providers: [_services_sector_provider__WEBPACK_IMPORTED_MODULE_6__.SectorProvider, _services_data_provider__WEBPACK_IMPORTED_MODULE_10__.DataProvider, _services_charts_service__WEBPACK_IMPORTED_MODULE_12__.ChartsService, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_30__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_30__.withInterceptorsFromDi)()), (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.provideClientHydration)((0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.withEventReplay)())],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_35__.RouterModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_export_as__WEBPACK_IMPORTED_MODULE_36__.ExportAsModule, ngx_clipboard__WEBPACK_IMPORTED_MODULE_37__.ClipboardModule, ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_38__.NgcCookieConsentModule.forRoot(cookieConfig)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.DashboardComponent, _dashboard_introductory_section_introductory_section_component__WEBPACK_IMPORTED_MODULE_7__.IntroductorySectionComponent, _dashboard_key_findings_section_key_findings_section_component__WEBPACK_IMPORTED_MODULE_8__.KeyFindingsSectionComponent, _dashboard_minimum_requirements_section_minimum_requirements_section_component__WEBPACK_IMPORTED_MODULE_9__.MinimumRequirementsSectionComponent, _pipes_num_format_pipe__WEBPACK_IMPORTED_MODULE_11__.NumFormatPipe, _pipes_percentage_format_pipe__WEBPACK_IMPORTED_MODULE_13__.PercentageFormatPipe, _dashboard_disclosure_rates_disclosure_rates_component__WEBPACK_IMPORTED_MODULE_14__.DisclosureRatesComponent, _dashboard_further_findings_alternative_two_approach_to_incidents_approach_to_incidents_component__WEBPACK_IMPORTED_MODULE_17__.ApproachToIncidentsComponent, _dashboard_further_findings_alternative_two_approach_to_risks_approach_to_risks_component__WEBPACK_IMPORTED_MODULE_18__.ApproachToRisksComponent, _dashboard_further_findings_alternative_two_approach_to_policies_approach_to_policies_component__WEBPACK_IMPORTED_MODULE_15__.ApproachToPoliciesComponent, _dashboard_further_findings_alternative_two_further_findings_component__WEBPACK_IMPORTED_MODULE_16__.FurtherFindingsComponent, _section_section_component__WEBPACK_IMPORTED_MODULE_19__.SectionComponent, _dashboard_export_as_export_as_component__WEBPACK_IMPORTED_MODULE_28__.ExportAsComponent, _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_20__.SubscribeComponent, _dashboard_spotlight_metrics_spotlight_metrics_component__WEBPACK_IMPORTED_MODULE_21__.SpotlightMetricsComponent, _dashboard_beyond_compliance_beyond_compliance_component__WEBPACK_IMPORTED_MODULE_22__.BeyondComplianceComponent, _dashboard_highlight_metric_highlight_metric_component__WEBPACK_IMPORTED_MODULE_23__.HighlightMetricComponent, _slider_slider_component__WEBPACK_IMPORTED_MODULE_24__.SliderComponent, _slider_slider_item_directive__WEBPACK_IMPORTED_MODULE_25__.SliderItemDirective, _case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_26__.CaseStudiesComponent, _dashboard_going_beyond_compliance_going_beyond_compliance_component__WEBPACK_IMPORTED_MODULE_27__.GoingBeyondComplianceComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_35__.RouterModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_export_as__WEBPACK_IMPORTED_MODULE_36__.ExportAsModule, ngx_clipboard__WEBPACK_IMPORTED_MODULE_37__.ClipboardModule, ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_38__.NgcCookieConsentModule]
  });
})();

/***/ }),

/***/ 81502:
/*!********************************************************!*\
  !*** ./src/app/case-studies/case-studies.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaseStudiesComponent: () => (/* binding */ CaseStudiesComponent)
/* harmony export */ });
/* harmony import */ var _assets_case_studies_electronics_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/case-studies/electronics.json */ 20069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
// @ts-ignore



function CaseStudiesComponent_div_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "figure")(2, "div", 16)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "figcaption", 18)(7, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "cite", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Modern Slavery Statement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const case_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](case_r1["quote"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", case_r1["wikirate_answer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](case_r1["company"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](" Page " + case_r1["page"] + " on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", case_r1["source"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function CaseStudiesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9)(7, "div", 10)(8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Case studies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10)(11, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10)(14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13)(19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CaseStudiesComponent_div_2_div_20_Template, 13, 5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const case_study_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", case_study_r2["key"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", case_study_r2["key"] + "_title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-bs-target", "#" + case_study_r2["key"] + "_alt_two");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", "image-container " + case_study_r2["key"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](case_study_r2["subject"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](case_study_r2["description"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", case_study_r2["key"] + "_alt_two");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-labelledby", case_study_r2["key"] + "_title")("data-bs-parent", "#" + case_study_r2["key"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", case_study_r2["case_studies"]);
  }
}
class CaseStudiesComponent {
  constructor() {
    this.case_studies = _assets_case_studies_electronics_json__WEBPACK_IMPORTED_MODULE_0__;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function CaseStudiesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CaseStudiesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CaseStudiesComponent,
      selectors: [["app-case-studies"]],
      decls: 3,
      vars: 1,
      consts: [[1, "container"], [1, "row", "mt-3"], ["class", "col-xl-4 col-lg-6 col-md-12 col-12 mb-lg-0 mb-3 pt-3", 4, "ngFor", "ngForOf"], [1, "col-xl-4", "col-lg-6", "col-md-12", "col-12", "mb-lg-0", "mb-3", "pt-3"], [1, "accordion", 3, "id"], [1, "accordion-item-transparent"], [1, "accordion-header", 3, "id"], ["type", "button", "data-bs-toggle", "collapse", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "accordion-button-transparent", "collapsed"], [3, "className"], [1, "row", "p-4"], [1, "row"], [1, "orange-title"], [1, "on-details"], [1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "blockquote", "ps-2"], [1, "bi", "bi-quote", "pe-2"], [1, "blockquote-footer", "mt-2", "mb-2"], ["target", "_blank", 3, "href"], ["title", "source"]],
      template: function CaseStudiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CaseStudiesComponent_div_2_Template, 21, 10, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.case_studies);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
      styles: [".blockquote[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  border-color: rgb(255, 92, 69);\n  border-style: solid;\n  border-top-style: solid;\n  border-right-style: solid;\n  border-bottom-style: solid;\n  border-left-style: solid;\n  border-width: 0 0 0 2px;\n}\n\ni[_ngcontent-%COMP%] {\n  color: rgb(255, 92, 69);\n}\n\nh6[_ngcontent-%COMP%] {\n  color: rgb(255, 92, 69);\n}\n\n.image-container[_ngcontent-%COMP%] {\n  align-items: center;\n  background-position: center;\n  background-size: cover;\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center;\n  padding-bottom: 56.25%;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.worker_engagement[_ngcontent-%COMP%] {\n  padding-bottom: 75%;\n  background-image: url(\"/assets/img/worker_engagement.jpg\") !important;\n}\n\n.risk_management[_ngcontent-%COMP%] {\n  padding-bottom: 75%;\n  background-image: url(\"/assets/img/risk_management.jpg\") !important;\n}\n\n.living_wage[_ngcontent-%COMP%] {\n  padding-bottom: 75%;\n  background-image: url(\"/assets/img/living_wage.jpg\") !important;\n}\n\n.remediations[_ngcontent-%COMP%] {\n  padding-bottom: 75%;\n  background-image: url(\"/assets/img/remediations.jpg\") !important;\n}\n\n.purchasing_practices[_ngcontent-%COMP%] {\n  padding-bottom: 75%;\n  background-image: url(\"/assets/img/purchasing_practices.jpg\") !important;\n}\n\n.identifying_incidents[_ngcontent-%COMP%] {\n  padding-bottom: 75%;\n  background-image: url(\"/assets/img/identifying_incidents.jpg\") !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FzZS1zdHVkaWVzL2Nhc2Utc3R1ZGllcy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2t1YmVybmV0ZXMlMjBwbGF5Z3JvdW5kL21zYS1iZXlvbmQtY29tcGxpYW5jZS9zcmMvYXBwL2Nhc2Utc3R1ZGllcy9jYXNlLXN0dWRpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1QkFBQTtBQ0VKOztBRENBO0VBQ0ksdUJBQUE7QUNFSjs7QURDQTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxxRUFBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxtRUFBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSwrREFBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxnRUFBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSx3RUFBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSx5RUFBQTtBQ0VKIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrcXVvdGUge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDkyLCA2OSk7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMCAwIDJweDtcclxufVxyXG5pIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCA5MiwgNjkpO1xyXG59XHJcblxyXG5oNntcclxuICAgIGNvbG9yOiByZ2IoMjU1LCA5MiwgNjkpO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud29ya2VyX2VuZ2FnZW1lbnQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDc1JTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3dvcmtlcl9lbmdhZ2VtZW50LmpwZ1wiKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlza19tYW5hZ2VtZW50IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9yaXNrX21hbmFnZW1lbnQuanBnXCIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saXZpbmdfd2FnZSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNzUlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvbGl2aW5nX3dhZ2UuanBnXCIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZW1lZGlhdGlvbnMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDc1JTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3JlbWVkaWF0aW9ucy5qcGdcIikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB1cmNoYXNpbmdfcHJhY3RpY2VzIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9wdXJjaGFzaW5nX3ByYWN0aWNlcy5qcGdcIikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlkZW50aWZ5aW5nX2luY2lkZW50cyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNzUlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvaWRlbnRpZnlpbmdfaW5jaWRlbnRzLmpwZ1wiKSAhaW1wb3J0YW50O1xyXG59IiwiLmJsb2NrcXVvdGUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCA5MiwgNjkpO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMCAycHg7XG59XG5cbmkge1xuICBjb2xvcjogcmdiKDI1NSwgOTIsIDY5KTtcbn1cblxuaDYge1xuICBjb2xvcjogcmdiKDI1NSwgOTIsIDY5KTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53b3JrZXJfZW5nYWdlbWVudCB7XG4gIHBhZGRpbmctYm90dG9tOiA3NSU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3dvcmtlcl9lbmdhZ2VtZW50LmpwZ1wiKSAhaW1wb3J0YW50O1xufVxuXG4ucmlza19tYW5hZ2VtZW50IHtcbiAgcGFkZGluZy1ib3R0b206IDc1JTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcmlza19tYW5hZ2VtZW50LmpwZ1wiKSAhaW1wb3J0YW50O1xufVxuXG4ubGl2aW5nX3dhZ2Uge1xuICBwYWRkaW5nLWJvdHRvbTogNzUlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9saXZpbmdfd2FnZS5qcGdcIikgIWltcG9ydGFudDtcbn1cblxuLnJlbWVkaWF0aW9ucyB7XG4gIHBhZGRpbmctYm90dG9tOiA3NSU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3JlbWVkaWF0aW9ucy5qcGdcIikgIWltcG9ydGFudDtcbn1cblxuLnB1cmNoYXNpbmdfcHJhY3RpY2VzIHtcbiAgcGFkZGluZy1ib3R0b206IDc1JTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcHVyY2hhc2luZ19wcmFjdGljZXMuanBnXCIpICFpbXBvcnRhbnQ7XG59XG5cbi5pZGVudGlmeWluZ19pbmNpZGVudHMge1xuICBwYWRkaW5nLWJvdHRvbTogNzUlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9pZGVudGlmeWluZ19pbmNpZGVudHMuanBnXCIpICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 36063:
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/beyond-compliance/beyond-compliance.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BeyondComplianceComponent: () => (/* binding */ BeyondComplianceComponent)
/* harmony export */ });
/* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter.model */ 53060);
/* harmony import */ var _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/charts-params/beyond-compliance-metrics.json */ 70167);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var src_app_utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/wikirate-url-builder */ 73234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_data_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.provider */ 74004);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_sector_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sector.provider */ 41398);
/* harmony import */ var src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/charts.service */ 33827);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _export_as_export_as_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export-as/export-as.component */ 84503);

// @ts-ignore











function BeyondComplianceComponent_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r0.getSectorName(), " Sector");
  }
}
function BeyondComplianceComponent_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const metric_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", metric_r2["seq"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](metric_r2["label"]);
  }
}
function BeyondComplianceComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "div", 32)(3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
class BeyondComplianceComponent {
  constructor(dataProvider, route, sectorProvider, chartService) {
    this.dataProvider = dataProvider;
    this.route = route;
    this.sectorProvider = sectorProvider;
    this.chartService = chartService;
    this.sector = "all-sectors";
    this.year = '';
    this.active = 'name';
    this.isLoading = true;
    this.beyond_compliance_metrics = _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_1__;
    this.metric_question = '';
    this.metric_seq = 1;
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let sector = params.get('sector');
      if (sector !== null) {
        this.sector = sector;
        this.updateData();
      }
      this.sectorProvider.getSector().next(sector);
    });
    this.route.url.subscribe(val => {
      if (val[1].path === 'going-beyond-compliance') this.sectorProvider.getPath().next(val[1].path);
    });
  }
  getSectorName() {
    return this.dataProvider.sectors[this.sector];
  }
  updateData() {
    this.active = "name";
    this.isLoading = true;
    let company_group = this.dataProvider.getCompanyGroup(this.sector);
    const uk_statements_assessed = this.dataProvider.getAnswers(this.dataProvider.metrics.meet_uk_min_requirements, [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('value', ['Yes', 'No', 'Unknown']), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", [company_group, this.dataProvider.companies_with_assessed_statement.uk].filter(value => value != ''))]);
    const aus_statements_assessed = this.dataProvider.getAnswers(this.dataProvider.metrics.meet_aus_min_requirements, [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('value', ['Yes', 'No', 'Unknown']), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", [company_group, this.dataProvider.companies_with_assessed_statement.aus].filter(value => value != ''))]);
    const statements_assessed = this.dataProvider.getAnswers(this.dataProvider.metrics.msa_meet_min_requirements, [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('value', ['Yes', 'No', 'Unknown']), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", [company_group, this.dataProvider.companies_with_assessed_statement.any].filter(value => value != ''))]);
    let metric = this.beyond_compliance_metrics.find(document => document.seq === this.metric_seq);
    this.metric_question = metric['question'];
    const metric_answers = this.dataProvider.getAnswers(metric['id'], [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", metric['filter_value']), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", [company_group, this.dataProvider.companies_with_assessed_statement.any].filter(value => value != ''))].filter(item => item.value != 'latest'));
    const metric_total_url = new src_app_utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_2__.WikirateUrlBuilder().setEndpoint(metric['id']).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", metric['filter_value'])).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", [company_group, this.dataProvider.companies_with_assessed_statement.any].filter(value => value != ''))).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)).build();
    const metric_uk_url = new src_app_utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_2__.WikirateUrlBuilder().setEndpoint(metric['id']).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", metric['filter_value'])).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", [company_group, this.dataProvider.companies_with_assessed_statement.uk].filter(value => value != ''))).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)).build();
    const metric_aus_url = new src_app_utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_2__.WikirateUrlBuilder().setEndpoint(metric['id']).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", metric['filter_value'])).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", [company_group, this.dataProvider.companies_with_assessed_statement.aus].filter(value => value != ''))).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)).build();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([uk_statements_assessed, aus_statements_assessed, statements_assessed, metric_answers]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(([uk_assessed_statements, aus_assessed_statements, total_assessed_statements, answers]) => {
      if (this.year == 'latest') {
        total_assessed_statements = Object.values(total_assessed_statements.reduce((r, o) => {
          r[o.company] = r[o.company] && r[o.company].year > o.year ? r[o.company] : o;
          return r;
        }, {}));
      }
      let uk_count = answers.reduce((count, item) => {
        if (uk_assessed_statements.some(o => o.company === item.company && o.year === item.year)) {
          return count + 1;
        }
        return count;
      }, 0);
      let aus_count = answers.reduce((count, item) => {
        if (aus_assessed_statements.some(o => o.company === item.company && o.year === item.year)) {
          return count + 1;
        }
        return count;
      }, 0);
      let total = answers.reduce((count, item) => {
        if (total_assessed_statements.some(o => o.company === item.company && o.year === item.year)) {
          return count + 1;
        }
        return count;
      }, 0);
      return {
        'uk_percent': Math.round(uk_count * 100 / uk_assessed_statements.length),
        'aus_percent': Math.round(aus_count * 100 / aus_assessed_statements.length),
        'total_percent': Math.round(total * 100 / total_assessed_statements.length)
      };
    })).subscribe({
      next: results => {
        let vis_data = [{
          'label': 'Both',
          'value': results.total_percent,
          'color': '#000029',
          'metric': metric['label'],
          'wikirate_page': metric_total_url
        }, {
          'label': 'UK',
          'value': results.uk_percent,
          'color': metric['uk_color_hex'],
          'mandatory': metric['uk_color'] == 'bg-deep-orange' ? 'Yes' : 'No',
          'metric': metric['label'],
          'wikirate_page': metric_uk_url
        }, {
          'label': 'AUS',
          'value': results.aus_percent,
          'color': metric['aus_color_hex'],
          'mandatory': metric['aus_color'] == 'bg-deep-orange' ? 'Yes' : 'No',
          'metric': metric['label'],
          'wikirate_page': metric_aus_url
        }];
        if (metric['label'] == "Consultation process") {
          vis_data = [{
            'label': 'Both',
            'value': NaN,
            'color': '#000029',
            'metric': metric['label'],
            'wikirate_page': metric_total_url
          }, {
            'label': 'UK',
            'value': NaN,
            'color': metric['uk_color_hex'],
            'mandatory': metric['uk_color'] == 'bg-deep-orange' ? 'Yes' : 'No',
            'metric': metric['label'],
            'wikirate_page': metric_uk_url
          }, {
            'label': 'AUS',
            'value': results.aus_percent,
            'color': metric['aus_color_hex'],
            'mandatory': metric['aus_color'] == 'bg-deep-orange' ? 'Yes' : 'No',
            'metric': metric['label'],
            'wikirate_page': metric_aus_url
          }];
        }
        this.chartService.drawSimpleBarChart(metric['label'], '#metric-chart', vis_data, {
          renderer: "svg",
          actions: false
        });
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
  ngOnChanges(changes) {
    this.updateData();
  }
  static {
    this.ɵfac = function BeyondComplianceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BeyondComplianceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_data_provider__WEBPACK_IMPORTED_MODULE_3__.DataProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_sector_provider__WEBPACK_IMPORTED_MODULE_4__.SectorProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_5__.ChartsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: BeyondComplianceComponent,
      selectors: [["beyond-compliance"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
      decls: 51,
      vars: 20,
      consts: [[1, "container"], ["id", "beyond-compliance", 1, "section-top", "mt-5", "bg-grey", "p-4"], [1, "row"], [1, "col-md-8"], [1, "title"], ["class", "fst-italic", 4, "ngIf"], [1, "col-md-4"], ["aria-label", "Minimum requirements year filter", 1, "msa-form-select", "ms-md-auto", "bg-grey", 2, "max-width", "120px", "max-height", "50px", "font-size", "0.8em", 3, "ngModelChange", "change", "ngModel"], ["selected", "", 3, "ngValue"], [3, "ngValue"], [1, "row", "p-2"], [1, "col-lg-10", "col-md-12"], ["aria-label", "Metric Select", 1, "msa-metric-select", "ms-md-auto", "bg-grey", 3, "change", "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "row", "pt-md-2", "pt-1"], [1, "col-md-12"], [1, "col-lg-10", "col-md-12", "fst-italic", "fs-5"], [1, "row", "p-2", "row", "justify-content-center", 3, "ngClass"], [1, "row", "p-1", "pe-2", "text-center"], [1, "row", "p-1", "pe-2"], [1, "col-auto", "no-padding", "ms-auto"], [1, "col-auto"], [1, "legend-box", "bg-deep-orange"], [1, "row", "p-1", "pe-2", "justify-content-center"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-6", "col-xl-6"], ["id", "metric-chart", 1, "chart-wrapper"], ["class", "row mt-3", "style", "height: 150px", 4, "ngIf"], [1, "section-bottom", "bg-grey", "p-1", "pe-4", "pb-4"], [3, "sector", "section", "elementId", "ngClass"], [1, "fst-italic"], [1, "row", "mt-3", 2, "height", "150px"], [1, "col-12", "text-center", "align-self-center"], ["role", "status", 1, "spinner-grow", "text-warning", "bg-deep-blue"], [1, "sr-only"]],
      template: function BeyondComplianceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Going Beyond Compliance");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, BeyondComplianceComponent_h6_6_Template, 2, 1, "h6", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6)(8, "select", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BeyondComplianceComponent_Template_select_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.year, $event) || (ctx.year = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function BeyondComplianceComponent_Template_select_change_8_listener() {
            return ctx.updateData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "ALL YEARS");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "LATEST");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "2021");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "2019");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "2018");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "2017");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "2016");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 10)(28, "div", 11)(29, "select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function BeyondComplianceComponent_Template_select_change_29_listener() {
            return ctx.updateData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BeyondComplianceComponent_Template_select_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.metric_seq, $event) || (ctx.metric_seq = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, BeyondComplianceComponent_option_30_Template, 2, 2, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 14)(32, "div", 15)(33, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Beyond the minimum requirements, the accompanying guidance of the MSAs outlines the measures and actions companies should take and report on to ensure their operations and supply chains are free from exploitation. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 17)(36, "div", 18)(37, "p")(38, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 19)(41, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Mandatory");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 23)(46, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, BeyondComplianceComponent_div_48_Template, 5, 0, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "export-as", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sector !== "all-sectors");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.year);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", "latest");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", 2022);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", 2021);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", 2020);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", 2019);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", 2018);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", 2017);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", 2016);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.metric_seq);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.beyond_compliance_metrics);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.metric_question);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sector", ctx.sector)("section", "beyond-compliance")("elementId", "beyond-compliance")("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _export_as_export_as_component__WEBPACK_IMPORTED_MODULE_6__.ExportAsComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 62320:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_sector_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/sector.provider */ 41398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _introductory_section_introductory_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./introductory-section/introductory-section.component */ 66605);
/* harmony import */ var _key_findings_section_key_findings_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./key-findings-section/key-findings-section.component */ 27789);
/* harmony import */ var _minimum_requirements_section_minimum_requirements_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minimum-requirements-section/minimum-requirements-section.component */ 4939);
/* harmony import */ var _disclosure_rates_disclosure_rates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disclosure-rates/disclosure-rates.component */ 8755);
/* harmony import */ var _further_findings_alternative_two_further_findings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./further-findings-alternative-two/further-findings.component */ 50664);
/* harmony import */ var _spotlight_metrics_spotlight_metrics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spotlight-metrics/spotlight-metrics.component */ 395);
/* harmony import */ var _beyond_compliance_beyond_compliance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./beyond-compliance/beyond-compliance.component */ 36063);
/* harmony import */ var _highlight_metric_highlight_metric_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./highlight-metric/highlight-metric.component */ 10891);












function DashboardComponent_introductory_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "introductory-section");
  }
}
class DashboardComponent {
  constructor(route, sectorProvider, scroll) {
    this.route = route;
    this.sectorProvider = sectorProvider;
    this.scroll = scroll;
    this.sector = "all-sectors";
    this.view = "default";
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let sector = params.get('sector');
      if (sector !== null && sector != this.sector) {
        this.sector = sector;
      }
      this.sectorProvider.getSector().next(sector);
    });
    this.route.queryParams.subscribe(params => {
      // @ts-ignore
      this.view = params.view;
    });
    this.sectorProvider.getPath().next("dashboard");
    this.scrollToTop();
  }
  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_sector_provider__WEBPACK_IMPORTED_MODULE_0__.SectorProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.ViewportScroller));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["dashboard"]],
      decls: 8,
      vars: 1,
      consts: [[4, "ngIf"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, DashboardComponent_introductory_section_0_Template, 1, 0, "introductory-section", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "highlight-metric")(2, "key-findings-section")(3, "spotlight-metrics")(4, "further-findings")(5, "minimum-requirements-section")(6, "beyond-compliance")(7, "disclosure-rates");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.view !== "embed");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _introductory_section_introductory_section_component__WEBPACK_IMPORTED_MODULE_1__.IntroductorySectionComponent, _key_findings_section_key_findings_section_component__WEBPACK_IMPORTED_MODULE_2__.KeyFindingsSectionComponent, _minimum_requirements_section_minimum_requirements_section_component__WEBPACK_IMPORTED_MODULE_3__.MinimumRequirementsSectionComponent, _disclosure_rates_disclosure_rates_component__WEBPACK_IMPORTED_MODULE_4__.DisclosureRatesComponent, _further_findings_alternative_two_further_findings_component__WEBPACK_IMPORTED_MODULE_5__.FurtherFindingsComponent, _spotlight_metrics_spotlight_metrics_component__WEBPACK_IMPORTED_MODULE_6__.SpotlightMetricsComponent, _beyond_compliance_beyond_compliance_component__WEBPACK_IMPORTED_MODULE_7__.BeyondComplianceComponent, _highlight_metric_highlight_metric_component__WEBPACK_IMPORTED_MODULE_8__.HighlightMetricComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8755:
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/disclosure-rates/disclosure-rates.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisclosureRatesComponent: () => (/* binding */ DisclosureRatesComponent)
/* harmony export */ });
/* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter.model */ 53060);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/wikirate-url-builder */ 73234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.provider */ 74004);
/* harmony import */ var _services_sector_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sector.provider */ 41398);
/* harmony import */ var src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/charts.service */ 33827);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _export_as_export_as_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../export-as/export-as.component */ 84503);











function DisclosureRatesComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
class DisclosureRatesComponent {
  constructor(dataProvider, sectorProvider, chartsService, route) {
    this.dataProvider = dataProvider;
    this.sectorProvider = sectorProvider;
    this.chartsService = chartsService;
    this.route = route;
    this.year = '';
    this.isLoading = true;
    this.garment_avg_disclosure_rate = 0;
    this.financial_avg_disclosure_rate = 0;
    this.hospitality_avg_disclosure_rate = 0;
    this.food_bev_avg_disclosure_rate = 0;
    this.renewable_energy_avg_disclosure_rate = 0;
    this.electronics_avg_disclosure_rate = 0;
  }
  ngOnInit() {
    this.updateData();
    this.route.url.subscribe(val => {
      if (val[1].path === 'disclosure-rates') this.sectorProvider.getPath().next(val[1].path);
    });
  }
  /**
   * Update Data function calculates the average disclosure rate per selected sector and year. We are taking here into
   * consideration only assessed statements into the calculation.
   */
  updateData() {
    this.isLoading = true;
    const food_and_bev_disclosure_rates = this.dataProvider.getAnswers(this.dataProvider.metrics.msa_disclosure_rate, [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", [this.dataProvider.company_groups.food_and_beverage, this.dataProvider.companies_with_assessed_statement.any])].filter(item => item.value != 'latest'));
    const food_and_bev_disclosure_rates_url = new _utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_1__.WikirateUrlBuilder().setEndpoint(this.dataProvider.metrics.msa_disclosure_rate).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", [this.dataProvider.company_groups.food_and_beverage, this.dataProvider.companies_with_assessed_statement.any])).build();
    const garment_disclosure_rates = this.dataProvider.getAnswers(this.dataProvider.metrics.msa_disclosure_rate, [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", [this.dataProvider.company_groups.garment, this.dataProvider.companies_with_assessed_statement.any])].filter(item => item.value != 'latest'));
    const garment_disclosure_rates_url = new _utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_1__.WikirateUrlBuilder().setEndpoint(this.dataProvider.metrics.msa_disclosure_rate).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", [this.dataProvider.company_groups.garment, this.dataProvider.companies_with_assessed_statement.any])).build();
    const financial_disclosure_rates = this.dataProvider.getAnswers(this.dataProvider.metrics.msa_disclosure_rate, [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.dataProvider.company_groups.financial)].filter(item => item.value != 'latest'));
    const financial_disclosure_rates_url = new _utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_1__.WikirateUrlBuilder().setEndpoint(this.dataProvider.metrics.msa_disclosure_rate).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", [this.dataProvider.company_groups.financial, this.dataProvider.companies_with_assessed_statement.any])).build();
    const hospitality_disclosure_rates = this.dataProvider.getAnswers(this.dataProvider.metrics.msa_disclosure_rate, [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.dataProvider.company_groups.hospitality)].filter(item => item.value != 'latest'));
    const hospitality_disclosure_rates_url = new _utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_1__.WikirateUrlBuilder().setEndpoint(this.dataProvider.metrics.msa_disclosure_rate).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", [this.dataProvider.company_groups.hospitality, this.dataProvider.companies_with_assessed_statement.any])).build();
    const renewable_energy_disclosure_rates = this.dataProvider.getAnswers(this.dataProvider.metrics.msa_disclosure_rate, [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.dataProvider.company_groups.renewable_energy)].filter(item => item.value != 'latest'));
    const renewable_energy_disclosure_rates_url = new _utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_1__.WikirateUrlBuilder().setEndpoint(this.dataProvider.metrics.msa_disclosure_rate).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", [this.dataProvider.company_groups.renewable_energy, this.dataProvider.companies_with_assessed_statement.any])).build();
    const electronics_disclosure_rates = this.dataProvider.getAnswers(this.dataProvider.metrics.msa_disclosure_rate, [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.dataProvider.company_groups.electronics)].filter(item => item.value != 'latest'));
    const electronics_disclosure_rates_url = new _utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_1__.WikirateUrlBuilder().setEndpoint(this.dataProvider.metrics.msa_disclosure_rate).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", [this.dataProvider.company_groups.renewable_energy, this.dataProvider.companies_with_assessed_statement.any])).build();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([food_and_bev_disclosure_rates, garment_disclosure_rates, financial_disclosure_rates, hospitality_disclosure_rates, renewable_energy_disclosure_rates, electronics_disclosure_rates]).subscribe(results => {
      if (this.year == 'latest') {
        results[0] = Object.values(results[0].reduce((r, o) => {
          r[o.company] = r[o.company] && r[o.company].year > o.year ? r[o.company] : o;
          return r;
        }, {}));
        results[1] = Object.values(results[1].reduce((r, o) => {
          r[o.company] = r[o.company] && r[o.company].year > o.year ? r[o.company] : o;
          return r;
        }, {}));
        results[2] = Object.values(results[2].reduce((r, o) => {
          r[o.company] = r[o.company] && r[o.company].year > o.year ? r[o.company] : o;
          return r;
        }, {}));
        results[3] = Object.values(results[3].reduce((r, o) => {
          r[o.company] = r[o.company] && r[o.company].year > o.year ? r[o.company] : o;
          return r;
        }, {}));
        results[4] = Object.values(results[3].reduce((r, o) => {
          r[o.company] = r[o.company] && r[o.company].year > o.year ? r[o.company] : o;
          return r;
        }, {}));
        results[5] = Object.values(results[4].reduce((r, o) => {
          r[o.company] = r[o.company] && r[o.company].year > o.year ? r[o.company] : o;
          return r;
        }, {}));
      }
      this.food_bev_avg_disclosure_rate = this.calc_avg_disclosure_rate(results[0]);
      this.garment_avg_disclosure_rate = this.calc_avg_disclosure_rate(results[1]);
      this.financial_avg_disclosure_rate = this.calc_avg_disclosure_rate(results[2]);
      this.hospitality_avg_disclosure_rate = this.calc_avg_disclosure_rate(results[3]);
      this.renewable_energy_avg_disclosure_rate = this.calc_avg_disclosure_rate(results[4]);
      this.electronics_avg_disclosure_rate = this.calc_avg_disclosure_rate(results[5]);
      this.drawSemiDonutChart(this.garment_avg_disclosure_rate, "semi-donut-disclosure-rates-garment", garment_disclosure_rates_url);
      this.drawSemiDonutChart(this.food_bev_avg_disclosure_rate, "semi-donut-disclosure-rates-food-bev", food_and_bev_disclosure_rates_url);
      this.drawSemiDonutChart(this.financial_avg_disclosure_rate, "semi-donut-disclosure-rates-finance", financial_disclosure_rates_url);
      this.drawSemiDonutChart(this.hospitality_avg_disclosure_rate, "semi-donut-disclosure-rates-hospitality", hospitality_disclosure_rates_url);
      this.drawSemiDonutChart(this.renewable_energy_avg_disclosure_rate, "semi-donut-disclosure-rates-energy", renewable_energy_disclosure_rates_url);
      this.drawSemiDonutChart(this.electronics_avg_disclosure_rate, "semi-donut-disclosure-rates-electronics", electronics_disclosure_rates_url);
      this.isLoading = false;
    });
  }
  /**
   * Calculates the average disclosure rate given the array of the assessed statements and disclosure rates
   * @param assessed_statements
   * @param disclosure_rates
   * @private
   */
  calc_avg_disclosure_rate(disclosure_rates) {
    let avg_discosure_rate = 0;
    for (let answer of disclosure_rates) avg_discosure_rate += answer['value'] == 'Unknown' ? 0 : Number(answer['value']);
    return Math.round(avg_discosure_rate * 10 / disclosure_rates.length);
  }
  drawSemiDonutChart(percentage, elementId, url) {
    this.chartsService.drawSemiDonutChart(`${percentage}%`, `div#${elementId}`, [{
      'id': 'Covered',
      'percent': percentage,
      'wikirate_page': url
    }, {
      'id': 'Not Covered',
      'percent': 100 - percentage,
      'wikirate_page': url
    }], 250, ["#FF5C45", "#E5E5EA"], ["Covered", "Not Covered"], {
      renderer: "svg",
      actions: false
    });
  }
  static {
    this.ɵfac = function DisclosureRatesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DisclosureRatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_data_provider__WEBPACK_IMPORTED_MODULE_2__.DataProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_sector_provider__WEBPACK_IMPORTED_MODULE_3__.SectorProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_4__.ChartsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: DisclosureRatesComponent,
      selectors: [["disclosure-rates"]],
      decls: 79,
      vars: 17,
      consts: [[1, "container"], ["id", "disclosure-rates", 1, "section-top", "bg-grey", "mt-5", "p-4"], [1, "row"], [1, "col-md-8"], [1, "title"], [1, "col-md-4"], ["aria-label", "Minimum requirements year filter", 1, "msa-form-select", "bg-grey", "ms-md-auto", 2, "max-width", "120px", "max-height", "50px", "font-size", "0.8em", 3, "ngModelChange", "change", "ngModel"], ["selected", "", 3, "ngValue"], [3, "ngValue"], [1, "col-lg-10", "col-md-12", "pt-md-2", "pt-1", "fst-italic", "fs-5"], ["class", "row mt-3", "style", "height: 150px", 4, "ngIf"], [1, "disclosure-rates", 3, "ngClass"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6", "mt-lg-0", "mt-2", "text-center", "p-5"], [1, "col-md-8", "col-sm-10"], ["id", "semi-donut-disclosure-rates-food-bev", 1, "chart-wrapper"], [1, "col-12"], [1, "pb-3", "pt-1"], ["id", "semi-donut-disclosure-rates-garment", 1, "chart-wrapper"], [1, "col-lg-4", "col-md-6", "mt-md-2", "mt-lg-0", "mt-2", "text-center", "p-5"], ["id", "semi-donut-disclosure-rates-finance", 1, "chart-wrapper"], [1, "col-lg-4", "col-md-6", "mt-md-2", "mt-lg-0", "mt-2", "pt-lg-2", "text-center", "p-5"], ["id", "semi-donut-disclosure-rates-hospitality", 1, "chart-wrapper"], ["id", "semi-donut-disclosure-rates-energy", 1, "chart-wrapper"], ["id", "semi-donut-disclosure-rates-electronics", 1, "chart-wrapper"], [1, "section-bottom", "p-1", "pe-4", "pb-4", "bg-grey"], [3, "sector", "section", "elementId", "ngClass"], [1, "row", "mt-3", 2, "height", "150px"], [1, "col-12", "text-center", "align-self-center"], ["role", "status", 1, "spinner-grow", "text-warning", "bg-deep-blue"], [1, "sr-only"]],
      template: function DisclosureRatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Sector Disclosure Rates");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5)(7, "select", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function DisclosureRatesComponent_Template_select_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.year, $event) || (ctx.year = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DisclosureRatesComponent_Template_select_change_7_listener() {
            return ctx.updateData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "ALL YEARS");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "LATEST");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "2021");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "2019");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "2018");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "2017");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "2016");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "2015");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 2)(29, "div", 9)(30, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "The average percentage of measures and actions reported by companies in their modern slavery statements by sector.");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, DisclosureRatesComponent_div_32_Template, 5, 0, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 11)(34, "div", 12)(35, "div", 13)(36, "div", 12)(37, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 16)(40, "h6", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Food & Beverage");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 13)(43, "div", 12)(44, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 16)(47, "h6", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Garment");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 19)(50, "div", 12)(51, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 16)(54, "h6", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Finance");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 21)(57, "div", 12)(58, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 16)(61, "h6", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "(Renewable) Energy");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 21)(64, "div", 12)(65, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 16)(68, "h6", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Hospitality");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 21)(71, "div", 12)(72, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 16)(75, "h6", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "Electronics");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "export-as", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.year);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "latest");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2022);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2021);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2020);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2019);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2018);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2017);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2016);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2015);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("sector", "all-sectors")("section", "sector-disclosure-rates")("elementId", "disclosure-rates")("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _export_as_export_as_component__WEBPACK_IMPORTED_MODULE_5__.ExportAsComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 84503:
/*!************************************************************!*\
  !*** ./src/app/dashboard/export-as/export-as.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportAsComponent: () => (/* binding */ ExportAsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-clipboard */ 46881);



const _c0 = ["embed"];
function ExportAsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Embed Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExportAsComponent_ng_template_23_Template_button_click_3_listener() {
      const modal_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r3.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17)(5, "pre", null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 18)(9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cbOnSuccess", function ExportAsComponent_ng_template_23_Template_button_cbOnSuccess_9_listener() {
      const modal_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r3.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("<iframe src=\"", ctx_r3.baseUrl, "", ctx_r3.section, "/", ctx_r3.sector, "\n      ?view=embed\" width=\"100%\" height=\"100%\" frameborder=\"0\"></iframe>");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cbContent", ctx_r3.src_content);
  }
}
class ExportAsComponent {
  constructor() {
    this.elementId = '';
    this.sector = 'all-sectors';
    this.section = '';
    this.button_class = 'btn-deep-blue';
    this.baseUrl = '';
    this.waiting = false;
    this.src_content = "";
  }
  // constructor(private exportAsService: ExportAsService, private modalService: NgbModal) {
  // }
  ngOnInit() {
    this.baseUrl = window.location.origin + '/dashboard/';
    this.src_content = '<iframe src=\'' + this.baseUrl + this.section + '/' + this.sector + '?view=embed\' width=\'100%\' height=\'100%\' frameborder=\'0\'></iframe>';
  }
  export() {
    // this.waiting = true;
    // var exportAsConfig: ExportAsConfig = {
    //   type: 'png', // the type you want to download
    //   elementIdOrContent: this.elementId, // the id of html/table element
    //   options: {
    //     scale: 3
    //   }
    // }
    // this.exportAsService.save(exportAsConfig, this.section + '-' + this.sector).subscribe(() => {
    // }, () => {
    // }, () => {
    //   this.waiting = false
    // });
  }
  openModal() {
    // this.modalService.open(this.embed, { centered: true });
  }
  static {
    this.ɵfac = function ExportAsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExportAsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExportAsComponent,
      selectors: [["export-as"]],
      viewQuery: function ExportAsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.embed = _t.first);
        }
      },
      inputs: {
        elementId: "elementId",
        sector: "sector",
        section: "section",
        button_class: "button_class"
      },
      decls: 25,
      vars: 10,
      consts: [["embed", ""], ["code", ""], [1, "row"], [1, "col-md-12", "ms-md-auto", "text-end"], [3, "click", "ngClass"], ["type", "button", "id", "share", "data-bs-toggle", "dropdown", "aria-expanded", "false"], ["aria-labelledby", "share", 1, "dropdown-menu"], ["target", "_blank", "type", "button", "ngxClipboard", "", 1, "dropdown-item", 3, "cbContent"], [1, "bi", "bi-link-45deg", "ms-2", "me-2"], ["type", "button", 1, "dropdown-item", 3, "click"], [1, "bi", "bi-code-square", "ms-2", "me-2"], ["target", "_blank", 1, "dropdown-item", 3, "href"], [1, "bi", "bi-linkedin", "ms-2", "me-2"], [1, "bi", "bi-envelope-fill", "ms-2", "me-2"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "ngxClipboard", "", 1, "btn", "btn-light", 3, "cbOnSuccess", "cbContent"]],
      template: function ExportAsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExportAsComponent_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.export());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "export as png");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "share");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6)(7, "li")(8, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "copy link");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li")(12, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExportAsComponent_Template_a_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.openModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "embed");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li")(16, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "linkedin");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ExportAsComponent_ng_template_23_Template, 11, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button-sm ", ctx.button_class, " me-2 ms-md-auto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.waiting ? "waiting" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button-sm ms-md-auto ", ctx.button_class, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cbContent", ctx.baseUrl + ctx.section + "/" + ctx.sector);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://www.linkedin.com/shareArticle?mini=true&url=" + ctx.baseUrl + ctx.section + "/" + ctx.sector, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:info@example.com?&subject=&cc=&bcc=&body=" + ctx.baseUrl + ctx.section + "/" + ctx.sector, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, ngx_clipboard__WEBPACK_IMPORTED_MODULE_2__.ClipboardDirective],
      styles: [".waiting[_ngcontent-%COMP%] {\n  cursor: wait !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2V4cG9ydC1hcy9leHBvcnQtYXMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9rdWJlcm5ldGVzJTIwcGxheWdyb3VuZC9tc2EtYmV5b25kLWNvbXBsaWFuY2Uvc3JjL2FwcC9kYXNoYm9hcmQvZXhwb3J0LWFzL2V4cG9ydC1hcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FDQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIud2FpdGluZyB7XHJcbiAgY3Vyc29yOiB3YWl0ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLndhaXRpbmcge1xuICBjdXJzb3I6IHdhaXQgIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 30938:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/dashboard/further-findings-alternative-two/approach-to-incidents/approach-to-incidents.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApproachToIncidentsComponent: () => (/* binding */ ApproachToIncidentsComponent)
/* harmony export */ });
/* harmony import */ var _services_data_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/data.provider */ 74004);
/* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/filter.model */ 53060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_charts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/charts.service */ 33827);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);






function ApproachToIncidentsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
class ApproachToIncidentsComponent {
  constructor(dataProvider, chartsService) {
    this.dataProvider = dataProvider;
    this.chartsService = chartsService;
    this.company_group = [];
    this.params = '';
    this.isLoading = true;
  }
  ngOnInit() {
    const dataPaths = ['/assets/charts-params/incidents-remediation.json'];
    this.dataProvider.loadData(dataPaths).subscribe({
      next: ([incidents_remediation]) => {
        this.incidents_remediation = incidents_remediation;
        // Notify that data is loaded
        this.dataProvider.markDataAsLoaded();
      },
      error: error => {
        console.error('Failed to load data:', error);
      }
    });
    // Subscribe to the isDataLoaded$ observable
    this.dataProvider.isDataLoaded$.subscribe(isLoaded => {
      if (isLoaded) {
        this.updateData();
      }
    });
  }
  ngOnChanges(changes) {
    this.updateData();
  }
  updateData() {
    this.company_group = [];
    if (this.sector != 'all-sectors') this.company_group.push(this.dataProvider.getCompanyGroup(this.sector));
    this.isLoading = true;
    let assessed_statements_metric_id = this.dataProvider.metrics.msa_meet_min_requirements;
    this.company_group.push(this.dataProvider.companies_with_assessed_statement.any);
    if (this.legislation == 'uk') {
      assessed_statements_metric_id = this.dataProvider.metrics.meet_uk_min_requirements;
      this.company_group.push(this.dataProvider.companies_with_assessed_statement.uk);
    } else if (this.legislation == 'aus') {
      assessed_statements_metric_id = this.dataProvider.metrics.meet_aus_min_requirements;
      this.company_group.push(this.dataProvider.companies_with_assessed_statement.aus);
    }
    this.params = _services_data_provider__WEBPACK_IMPORTED_MODULE_0__.DataProvider.getUrlParams([new _models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter('year', this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter("company_group", this.company_group)].filter(filter => filter.value != '' && filter.value != 'latest')).toString();
    this.chartsService.drawSubgroupsBarChart("Whistleblowing or Grievance Mechanisms", "div#whistleblowing-mechanisms-alt-two", 300, assessed_statements_metric_id, 2722458, {
      "name": "subgroups",
      "values": [{
        "key": "(direct employees)",
        "label": "Direct employees",
        "color": 0,
        "seq": 1
      }, {
        "key": "(supply chain workers)",
        "label": "Supply chain workers",
        "color": 1,
        "seq": 2
      }, {
        "key": "",
        "label": "Direct employees",
        "color": 2,
        "seq": 3
      }],
      "transform": [{
        "type": "window",
        "ops": ["row_number"],
        "as": ["seq"]
      }]
    }, {
      "name": "groups",
      "values": [{
        "title": "Whistleblower protection",
        "term": "Whistleblower protection",
        "seq": 1
      }, {
        "title": "Hotline, email, contact form",
        "term": "Hotline",
        "seq": 2
      }, {
        "title": "Focal point",
        "term": "Focal Point",
        "seq": 3
      }, {
        "title": "None of the above",
        "term": "No",
        "seq": 3
      }],
      "transform": [{
        "type": "window",
        "ops": ["row_number"],
        "as": ["seq"]
      }]
    }, this.year, this.company_group, {
      renderer: "svg",
      actions: false
    }).finally(() => {
      this.chartsService.drawBarChart("Incidents Remediation", "div#incident-remediation-alt-two", 350, 250, assessed_statements_metric_id, this.incidents_remediation, this.year, this.company_group, {
        renderer: "svg",
        actions: false
      }).finally(() => this.isLoading = false);
    });
  }
  static {
    this.ɵfac = function ApproachToIncidentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ApproachToIncidentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_provider__WEBPACK_IMPORTED_MODULE_0__.DataProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_charts_service__WEBPACK_IMPORTED_MODULE_2__.ChartsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ApproachToIncidentsComponent,
      selectors: [["approach-to-incidents"]],
      inputs: {
        year: "year",
        sector: "sector",
        legislation: "legislation"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 20,
      vars: 4,
      consts: [["class", "row mt-3", "style", "height: 150px", 4, "ngIf"], [1, "row", "justify-content-md-center", 3, "ngClass"], [1, "col-md-12"], [1, "row"], ["target", "_blank", 3, "href"], [1, "row", "text-center", "pt-2"], ["id", "whistleblowing-mechanisms-alt-two", 1, "chart-wrapper"], [1, "col-md-12", "mt-4"], ["id", "incident-remediation-alt-two", 1, "chart-wrapper"], [1, "row", "mt-3", 2, "height", "150px"], [1, "col-12", "text-center", "align-self-center"], ["role", "status", 1, "spinner-grow", "text-warning", "bg-deep-blue"], [1, "sr-only"]],
      template: function ApproachToIncidentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApproachToIncidentsComponent_div_0_Template, 5, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5")(5, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "GRIEVANCE MECHANISMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "provided to increase likelihood of incidents being reported");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7)(12, "div", 3)(13, "h5")(14, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "REMEDIATION STRATEGY");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "deployed when specific incidents are identified");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "https://wikirate.org/Walk_Free+MSA_whistleblowing_mechanism_revised?tab=metric_answer&" + ctx.params, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "https://wikirate.org/Walk_Free+MSA_incidents_remediation_revised?tab=metric_answer&" + ctx.params, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Z1cnRoZXItZmluZGluZ3MtYWx0ZXJuYXRpdmUtdHdvL2FwcHJvYWNoLXRvLWluY2lkZW50cy9hcHByb2FjaC10by1pbmNpZGVudHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9rdWJlcm5ldGVzJTIwcGxheWdyb3VuZC9tc2EtYmV5b25kLWNvbXBsaWFuY2Uvc3JjL2FwcC9kYXNoYm9hcmQvZnVydGhlci1maW5kaW5ncy1hbHRlcm5hdGl2ZS10d28vYXBwcm9hY2gtdG8taW5jaWRlbnRzL2FwcHJvYWNoLXRvLWluY2lkZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 57114:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/dashboard/further-findings-alternative-two/approach-to-policies/approach-to-policies.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApproachToPoliciesComponent: () => (/* binding */ ApproachToPoliciesComponent)
/* harmony export */ });
/* harmony import */ var _services_data_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/data.provider */ 74004);
/* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/filter.model */ 53060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_charts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/charts.service */ 33827);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);







function ApproachToPoliciesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
class ApproachToPoliciesComponent {
  constructor(dataProvider, chartsService, httpClient) {
    this.dataProvider = dataProvider;
    this.chartsService = chartsService;
    this.httpClient = httpClient;
    this.company_group = [];
    this.params = '';
    this.isLoading = true;
  }
  ngOnInit() {
    const dataPaths = ['/assets/charts-params/modern-slavery-policies.json', '/assets/charts-params/modern-slavery-training.json'];
    this.dataProvider.loadData(dataPaths).subscribe({
      next: ([policies, training]) => {
        this.modern_slavery_policies = policies;
        this.modern_slavery_training = training;
        // Notify that data is loaded
        this.dataProvider.markDataAsLoaded();
      },
      error: error => {
        console.error('Failed to load data:', error);
      }
    });
    // Subscribe to isDataLoaded$ to trigger updateData
    this.dataProvider.isDataLoaded$.subscribe(isLoaded => {
      if (isLoaded) {
        this.updateData();
      }
    });
  }
  ngOnChanges(changes) {
    this.updateData();
  }
  updateData() {
    this.isLoading = true;
    this.company_group = [];
    if (this.sector != 'all-sectors') this.company_group.push(this.dataProvider.getCompanyGroup(this.sector));
    let assessed_statements_metric_id = this.dataProvider.metrics.msa_meet_min_requirements;
    this.company_group.push(this.dataProvider.companies_with_assessed_statement.any);
    if (this.legislation == 'uk') {
      assessed_statements_metric_id = this.dataProvider.metrics.meet_uk_min_requirements;
      this.company_group.push(this.dataProvider.companies_with_assessed_statement.uk);
    } else if (this.legislation == 'aus') {
      assessed_statements_metric_id = this.dataProvider.metrics.meet_aus_min_requirements;
      this.company_group.push(this.dataProvider.companies_with_assessed_statement.aus);
    }
    this.params = _services_data_provider__WEBPACK_IMPORTED_MODULE_0__.DataProvider.getUrlParams([new _models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter('year', this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter("company_group", this.company_group)].filter(filter => filter.value != '' && filter.value != 'latest')).toString();
    this.chartsService.drawBarChart("Modern Slavery Supply Chain Policies", "div#modern-slavery-supply-chain-policies-alt-two", 350, 250, assessed_statements_metric_id, this.modern_slavery_policies, this.year, this.company_group, {
      renderer: "svg",
      actions: false
    }).finally(() => {
      this.chartsService.drawBarChart("Modern Slavery Training", "div#training-alt-two", 350, 350, assessed_statements_metric_id, this.modern_slavery_training, this.year, this.company_group, {
        renderer: "svg",
        actions: false
      }).finally(() => {
        this.isLoading = false;
      });
    });
  }
  static {
    this.ɵfac = function ApproachToPoliciesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ApproachToPoliciesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_provider__WEBPACK_IMPORTED_MODULE_0__.DataProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_charts_service__WEBPACK_IMPORTED_MODULE_2__.ChartsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ApproachToPoliciesComponent,
      selectors: [["approach-to-policies"]],
      inputs: {
        year: "year",
        sector: "sector",
        legislation: "legislation"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 21,
      vars: 5,
      consts: [["class", "row mt-3", "style", "height: 150px", 4, "ngIf"], [1, "row", 3, "ngClass"], [1, "col-md-12"], [1, "row"], ["target", "_blank", 3, "href"], [1, "row", "text-center", "pt-2"], ["id", "training-alt-two", 1, "chart-wrapper"], [1, "col-md-12", "mt-4"], ["id", "modern-slavery-supply-chain-policies-alt-two", 1, "chart-wrapper"], [1, "row", "mt-3", 2, "height", "150px"], [1, "col-12", "text-center", "align-self-center"], ["role", "status", 1, "spinner-grow", "text-warning", "bg-deep-blue"], [1, "sr-only"]],
      template: function ApproachToPoliciesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApproachToPoliciesComponent_div_0_Template, 5, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5")(5, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "MODERN SLAVERY TRAINING");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "provided to increase chances of staff identifying incidents and avoiding practices that increase chances of incidents occurring ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 1)(12, "div", 7)(13, "div", 3)(14, "h5")(15, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "MODERN SLAVERY SUPPLY CHAIN POLICIES");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "specifying practices thas should be adhered to be avoid exploitation");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "https://wikirate.org/Walk_Free+MSA_training_revised?tab=metric_answer&" + ctx.params, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "https://wikirate.org/Walk_Free+MSA_Policy_grouped?tab=metric_answer&" + ctx.params, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
      styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Z1cnRoZXItZmluZGluZ3MtYWx0ZXJuYXRpdmUtdHdvL2FwcHJvYWNoLXRvLXBvbGljaWVzL2FwcHJvYWNoLXRvLXBvbGljaWVzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4va3ViZXJuZXRlcyUyMHBsYXlncm91bmQvbXNhLWJleW9uZC1jb21wbGlhbmNlL3NyYy9hcHAvZGFzaGJvYXJkL2Z1cnRoZXItZmluZGluZ3MtYWx0ZXJuYXRpdmUtdHdvL2FwcHJvYWNoLXRvLXBvbGljaWVzL2FwcHJvYWNoLXRvLXBvbGljaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 99250:
/*!*************************************************************************************************************!*\
  !*** ./src/app/dashboard/further-findings-alternative-two/approach-to-risks/approach-to-risks.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApproachToRisksComponent: () => (/* binding */ ApproachToRisksComponent)
/* harmony export */ });
/* harmony import */ var _services_data_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/data.provider */ 74004);
/* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/filter.model */ 53060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_charts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/charts.service */ 33827);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);






function ApproachToRisksComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
class ApproachToRisksComponent {
  constructor(dataProvider, chartsService) {
    this.dataProvider = dataProvider;
    this.chartsService = chartsService;
    this.isLoading = true;
    this.company_group = [];
    this.params = '';
  }
  ngOnInit() {
    const dataPaths = ['/assets/charts-params/risk-identification.json', '/assets/charts-params/risk-assessment.json'];
    // Load data using the service
    this.dataProvider.loadData(dataPaths).subscribe({
      next: ([identification, assessment]) => {
        this.risk_identification = identification;
        this.risk_assessment = assessment;
        // Notify that data is loaded
        this.dataProvider.markDataAsLoaded();
      },
      error: error => {
        console.error('Failed to load data:', error);
      }
    });
    // Subscribe to the isDataLoaded$ observable
    this.dataProvider.isDataLoaded$.subscribe(isLoaded => {
      if (isLoaded) {
        this.updateData();
      }
    });
  }
  ngOnChanges(changes) {
    this.updateData();
  }
  updateData() {
    this.company_group = [];
    if (this.sector != 'all-sectors') this.company_group.push(this.dataProvider.getCompanyGroup(this.sector));
    this.isLoading = true;
    let assessed_statements_metric_id = this.dataProvider.metrics.msa_meet_min_requirements;
    this.company_group.push(this.dataProvider.companies_with_assessed_statement.any);
    if (this.legislation == 'uk') {
      assessed_statements_metric_id = this.dataProvider.metrics.meet_uk_min_requirements;
      this.company_group.push(this.dataProvider.companies_with_assessed_statement.uk);
    } else if (this.legislation == 'aus') {
      assessed_statements_metric_id = this.dataProvider.metrics.meet_aus_min_requirements;
      this.company_group.push(this.dataProvider.companies_with_assessed_statement.aus);
    }
    this.params = _services_data_provider__WEBPACK_IMPORTED_MODULE_0__.DataProvider.getUrlParams([new _models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter('year', this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter("company_group", this.company_group)].filter(filter => filter.value != '' && filter.value != 'latest')).toString();
    this.chartsService.drawBarChart("Risk Assessment", "div#risk-assessment-alt-two", 350, 200, assessed_statements_metric_id, this.risk_assessment, this.year, this.company_group, {
      renderer: "svg",
      actions: false
    }).finally(() => {
      this.chartsService.drawBarChart("Risks identified by risk category", "div#risk-identification-alt-two", 350, 250, assessed_statements_metric_id, this.risk_identification, this.year, this.company_group, {
        renderer: "svg",
        actions: false
      }).finally(() => this.chartsService.drawSubgroupsBarChart("Risks Management", "div#risk-management-alt-two", 350, assessed_statements_metric_id, 6948944, {
        "name": "subgroups",
        "values": [{
          "key": "(self- reporting)",
          "label": "Self reporting",
          "color": 0,
          "seq": 1
        }, {
          "key": "(independent)",
          "label": "Independent",
          "color": 1,
          "seq": 2
        }],
        "transform": [{
          "type": "window",
          "ops": ["row_number"],
          "as": ["seq"]
        }]
      }, {
        "name": "groups",
        "values": [{
          "title": "Audits of suppliers",
          "term": "Audits of suppliers",
          "seq": 1
        }, {
          "title": "On-site visits",
          "term": "On-site visits",
          "seq": 2
        }, {
          "title": "Neither",
          "term": "Neither",
          "seq": 3
        }],
        "transform": [{
          "type": "window",
          "ops": ["row_number"],
          "as": ["seq"]
        }]
      }, this.year, this.company_group, {
        renderer: "svg",
        actions: false
      })).finally(() => this.isLoading = false);
    });
  }
  static {
    this.ɵfac = function ApproachToRisksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ApproachToRisksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_provider__WEBPACK_IMPORTED_MODULE_0__.DataProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_charts_service__WEBPACK_IMPORTED_MODULE_2__.ChartsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ApproachToRisksComponent,
      selectors: [["approach-to-risks"]],
      inputs: {
        year: "year",
        sector: "sector",
        legislation: "legislation"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 30,
      vars: 6,
      consts: [["class", "row mt-3", "style", "height: 150px", 4, "ngIf"], [1, "row", 3, "ngClass"], [1, "col-md-12"], [1, "row"], ["target", "_blank", 3, "href"], [1, "row", "text-center", "pt-2"], ["id", "risk-assessment-alt-two", 1, "chart-wrapper"], [1, "row", "justify-content-md-center", 3, "ngClass"], [1, "col-md-12", "mt-4"], ["id", "risk-identification-alt-two", 1, "chart-wrapper"], ["id", "risk-management-alt-two", 1, "chart-wrapper"], [1, "row", "mt-3", 2, "height", "150px"], [1, "col-12", "text-center", "align-self-center"], ["role", "status", 1, "spinner-grow", "text-warning", "bg-deep-blue"], [1, "sr-only"]],
      template: function ApproachToRisksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApproachToRisksComponent_div_0_Template, 5, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5")(5, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "RISK ASSESSMENT TOOLS");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "used to identify high risk factors in operations");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "div", 3)(14, "h5")(15, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "TYPES OF RISKS IDENTIFIED");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "as likely to occur within operations");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 8)(22, "div", 3)(23, "h5")(24, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "RISK MANAGEMENT SYSTEM");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "used to keep an eye on (high risk) operations");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "https://wikirate.org/Walk_Free+MSA_risk_assessment?tab=metric_answer&" + ctx.params, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "https://wikirate.org/Walk_Free+MSA_Identification_of_risks?tab=metric_answer&" + ctx.params, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "https://wikirate.org/Walk_Free+MSA_risk_management_revised?tab=metric_answer&" + ctx.params, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Z1cnRoZXItZmluZGluZ3MtYWx0ZXJuYXRpdmUtdHdvL2FwcHJvYWNoLXRvLXJpc2tzL2FwcHJvYWNoLXRvLXJpc2tzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4va3ViZXJuZXRlcyUyMHBsYXlncm91bmQvbXNhLWJleW9uZC1jb21wbGlhbmNlL3NyYy9hcHAvZGFzaGJvYXJkL2Z1cnRoZXItZmluZGluZ3MtYWx0ZXJuYXRpdmUtdHdvL2FwcHJvYWNoLXRvLXJpc2tzL2FwcHJvYWNoLXRvLXJpc2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 50664:
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/further-findings-alternative-two/further-findings.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FurtherFindingsComponent: () => (/* binding */ FurtherFindingsComponent)
/* harmony export */ });
/* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter.model */ 53060);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_data_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.provider */ 74004);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_sector_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sector.provider */ 41398);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 48418);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _approach_to_incidents_approach_to_incidents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approach-to-incidents/approach-to-incidents.component */ 30938);
/* harmony import */ var _approach_to_risks_approach_to_risks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approach-to-risks/approach-to-risks.component */ 99250);
/* harmony import */ var _approach_to_policies_approach_to_policies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approach-to-policies/approach-to-policies.component */ 57114);
/* harmony import */ var _export_as_export_as_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export-as/export-as.component */ 84503);













const _c0 = ["content"];
function FurtherFindingsComponent_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h6", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.getSectorName(), " Sector");
  }
}
function FurtherFindingsComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "div", 50)(3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
function FurtherFindingsComponent_ng_template_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 52)(1, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "The Australian Modern Slavery Act");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FurtherFindingsComponent_ng_template_99_Template_button_click_3_listener() {
      const modal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r5.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 55)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "The Australian Modern Slavery Act was passed in 2018 and required companies to produce their first statement for financial year 2019. These needed to be submitted within 3 months after year's end (in 2020) but for this first year the government provided companies with an extension due to the impact of the covid pandemic. As a result, most companies submitted statements under the Australian Act from the financial year 2020 onward.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 56)(8, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FurtherFindingsComponent_ng_template_99_Template_button_click_8_listener() {
      const modal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r5.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
class FurtherFindingsComponent {
  constructor(dataProvider, route, sectorProvider, modalService) {
    this.dataProvider = dataProvider;
    this.route = route;
    this.sectorProvider = sectorProvider;
    this.modalService = modalService;
    this.sector = "all-sectors";
    this.legislation = 'both';
    this.year = '';
    this.percentage_of_companies_identified_risks = 0;
    this.percentage_of_companies_report_policy_beyond_t1 = 0;
    this.percentage_of_no_remediations = 0;
    this.isLoading = true;
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let sector = params.get('sector');
      if (sector !== null) {
        this.sector = sector;
        this.updateData();
      }
      this.sectorProvider.getSector().next(sector);
    });
    this.route.url.subscribe(val => {
      if (val[1].path === 'further-findings') this.sectorProvider.getPath().next(val[1].path);
    });
  }
  getSectorName() {
    return this.dataProvider.sectors[this.sector];
  }
  updateData() {
    this.isLoading = true;
    let company_group = [];
    if (this.sector != 'all-sectors') company_group.push(this.dataProvider.getCompanyGroup(this.sector));
    this.isLoading = true;
    let assessed_statements_metric_id = this.dataProvider.metrics.msa_meet_min_requirements;
    company_group.push(this.dataProvider.companies_with_assessed_statement.any);
    if (this.legislation == 'uk') {
      assessed_statements_metric_id = this.dataProvider.metrics.meet_uk_min_requirements;
      company_group.push(this.dataProvider.companies_with_assessed_statement.uk);
    } else if (this.legislation == 'aus') {
      if (this.year !== '' && this.year !== 'latest' && Number(this.year) < 2020) {
        this.openMessage();
        this.year = '2020';
      }
      assessed_statements_metric_id = this.dataProvider.metrics.meet_aus_min_requirements;
      company_group.push(this.dataProvider.companies_with_assessed_statement.aus);
    }
    this.isLoading = true;
    let assessed_filters = [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ["Yes", "No", "Unknown"]), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", company_group)];
    if (this.year == 'latest') {
      assessed_filters = [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ["Yes", "No", "Unknown"]), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", company_group)];
    }
    let assessed_statements = this.dataProvider.getAnswers(assessed_statements_metric_id, assessed_filters);
    let no_remediation = this.dataProvider.getAnswers(this.dataProvider.metrics.msa_incidents_remediation, [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ["No", "In Development"]), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", company_group)]);
    let risks_identified = this.dataProvider.getAnswers(this.dataProvider.metrics.msa_risks_identified, [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ["Yes"]), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", company_group)]);
    let policy_beyond_t1 = this.dataProvider.getAnswers(this.dataProvider.metrics.msa_policy_beyond_t1, [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ["Yes"]), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", company_group)]);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([assessed_statements, no_remediation, risks_identified, policy_beyond_t1]).subscribe(response => {
      if (this.year == 'latest') {
        response[0] = Object.values(response[0].reduce((r, o) => {
          r[o.company] = r[o.company] && r[o.company].year > o.year ? r[o.company] : o;
          return r;
        }, {}));
      }
      response[1] = response[1].filter(item => response[0].find(o => o.company == item.company && o.year == item.year));
      response[2] = response[2].filter(item => response[0].find(o => o.company == item.company && o.year == item.year));
      response[3] = response[3].filter(item => response[0].find(o => o.company == item.company && o.year == item.year));
      let assessed = response[0];
      let no_remediation = response[1];
      let reported_risks = response[2];
      let policy_beyond = response[3];
      this.percentage_of_no_remediations = Math.round(no_remediation.length * 100 / assessed.length);
      this.percentage_of_companies_identified_risks = Math.round(reported_risks.length * 100 / assessed.length);
      this.percentage_of_companies_report_policy_beyond_t1 = Math.round(policy_beyond.length * 100 / assessed.length);
    }, error => {
      console.log(error);
    }, () => this.isLoading = false);
  }
  openMessage() {
    this.modalService.open(this.content, {
      centered: true
    });
  }
  static {
    this.ɵfac = function FurtherFindingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FurtherFindingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_data_provider__WEBPACK_IMPORTED_MODULE_1__.DataProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_sector_provider__WEBPACK_IMPORTED_MODULE_2__.SectorProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: FurtherFindingsComponent,
      selectors: [["further-findings"]],
      viewQuery: function FurtherFindingsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      decls: 103,
      vars: 24,
      consts: [["select", ""], ["content", ""], [1, "container"], ["id", "further-findings-section", 1, "section-top", "mt-5", "bg-grey", "p-4"], [1, "row"], [1, "col-md-4"], [1, "title"], ["class", "fst-italic", 4, "ngIf"], [1, "col-md-8"], [1, "row", "ps-3", "pe-3", "pt-md-0", "pt-2"], ["aria-label", "Minimum requirements year filter", 1, "msa-form-select", "bg-grey", "ms-md-auto", "me-3", "mb-md-0", "mb-1", 2, "max-width", "120px", "max-height", "50px", "font-size", "0.8em", 3, "ngModelChange", "change", "ngModel"], ["value", "", "selected", ""], ["value", "latest"], ["value", "2022"], ["value", "2021"], ["value", "2020"], ["value", "2019"], ["value", "2018"], ["value", "2017"], ["value", "2016"], ["aria-label", "Legislation filter", 1, "msa-form-select", "bg-grey", 3, "ngModelChange", "change", "ngModel"], ["selected", "", 3, "ngValue"], [3, "ngValue"], ["class", "row mt-3", "style", "height: 150px", 4, "ngIf"], [1, "row", "dive-deeper", "mt-3", 3, "ngClass"], [1, "col-lg-4", "mb-lg-0", "mb-3"], ["id", "approach_to_policies", 1, "accordion"], [1, "accordion-item"], ["id", "approachToPoliciesTitle", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#approach-to-policies-alt-two", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "accordion-button-grey", "collapsed"], [1, "row", "mt-3"], [1, "msa-primary-info"], [1, "accordion-paragraph"], [1, "on-details"], ["id", "approach-to-policies-alt-two", "aria-labelledby", "approachToPoliciesTitle", "data-bs-parent", "#approach_to_policies", 1, "accordion-collapse", "collapse"], [1, "accordion-body"], [3, "year", "legislation", "sector"], ["id", "approach_to_risks_accordion", 1, "accordion"], ["id", "headingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#ApproachToRisksAltTwo", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "accordion-button-grey", "collapsed"], ["id", "ApproachToRisksAltTwo", "aria-labelledby", "headingThree", "data-bs-parent", "#approach_to_risks_accordion", 1, "accordion-collapse", "collapse"], ["id", "approach_to_incidents", 1, "accordion"], ["id", "headingApproachToIncidents", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseApproachToIncidents-alt-two", "aria-expanded", "false", "aria-controls", "collapseApproachToIncidents", 1, "accordion-button-grey", "collapsed"], ["id", "collapseApproachToIncidents-alt-two", "aria-labelledby", "headingApproachToIncidents", "data-bs-parent", "#approach_to_incidents", 1, "accordion-collapse", "collapse"], [1, "section-bottom", "bg-grey", "pe-4", "pb-4"], [3, "sector", "section", "elementId", "ngClass"], [1, "fst-italic"], [1, "row", "mt-3", 2, "height", "150px"], [1, "col-12", "text-center", "align-self-center"], ["role", "status", 1, "spinner-grow", "text-warning", "bg-deep-blue"], [1, "sr-only"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"]],
      template: function FurtherFindingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Further Findings");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, FurtherFindingsComponent_h6_6_Template, 2, 1, "h6", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 8)(8, "div", 9)(9, "select", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function FurtherFindingsComponent_Template_select_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.year, $event) || (ctx.year = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function FurtherFindingsComponent_Template_select_change_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            const select_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
            ctx.updateData();
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](select_r3.value = ctx.year);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "ALL YEARS");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "LATEST");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "2021");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "2019");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "2018");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "2017");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "2016");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "select", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function FurtherFindingsComponent_Template_select_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.legislation, $event) || (ctx.legislation = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function FurtherFindingsComponent_Template_select_change_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.updateData());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "LEGISLATION");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "UK MSA");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "AUS MSA");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, FurtherFindingsComponent_div_36_Template, 5, 0, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 24)(38, "div", 25)(39, "div", 26)(40, "div", 27)(41, "div", 28)(42, "div", 29)(43, "div", 30)(44, "div", 4)(45, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 4)(48, "p", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "of companies ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "do not have a modern slavery policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, " that applies to stakeholders beyond the 1st tier of their supply chain");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "h5", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Policies");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 34)(56, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "approach-to-policies", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 25)(59, "div", 37)(60, "div", 27)(61, "div", 38)(62, "div", 39)(63, "div", 30)(64, "div", 4)(65, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 4)(68, "p", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "of companies ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "have not identified any modern slavery risks");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, " within their operations and supply chains ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "h5", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "Risks");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 40)(77, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](78, "approach-to-risks", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 25)(80, "div", 41)(81, "div", 27)(82, "div", 42)(83, "div", 43)(84, "div", 30)(85, "div", 4)(86, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 4)(89, "p", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "of companies ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "do not disclose having remediation policies in place");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, " to respond to incidents of modern slavery");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "h5", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, "Remediation");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "div", 44)(97, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "approach-to-incidents", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](99, FurtherFindingsComponent_ng_template_99_Template, 10, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](102, "export-as", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sector !== "all-sectors");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.year);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.legislation);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", "both");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", "uk");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", "aus");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", 100 - ctx.percentage_of_companies_report_policy_beyond_t1, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("year", ctx.year)("legislation", ctx.legislation)("sector", ctx.sector);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", 100 - ctx.percentage_of_companies_identified_risks, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("year", ctx.year)("legislation", ctx.legislation)("sector", ctx.sector);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.percentage_of_no_remediations, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("year", ctx.year)("legislation", ctx.legislation)("sector", ctx.sector);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sector", ctx.sector)("section", "further-findings")("elementId", "further-findings-section")("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _approach_to_incidents_approach_to_incidents_component__WEBPACK_IMPORTED_MODULE_3__.ApproachToIncidentsComponent, _approach_to_risks_approach_to_risks_component__WEBPACK_IMPORTED_MODULE_4__.ApproachToRisksComponent, _approach_to_policies_approach_to_policies_component__WEBPACK_IMPORTED_MODULE_5__.ApproachToPoliciesComponent, _export_as_export_as_component__WEBPACK_IMPORTED_MODULE_6__.ExportAsComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 13379:
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/going-beyond-compliance/going-beyond-compliance.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoingBeyondComplianceComponent: () => (/* binding */ GoingBeyondComplianceComponent)
/* harmony export */ });
/* harmony import */ var _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/charts-params/beyond-compliance-metrics.json */ 70167);
/* harmony import */ var src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/filter.model */ 53060);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.provider */ 74004);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_services_sector_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sector.provider */ 41398);
/* harmony import */ var src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/charts.service */ 33827);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
// @ts-ignore










function GoingBeyondComplianceComponent_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.getSectorName(), " Sector");
  }
}
class GoingBeyondComplianceComponent {
  getSectorName() {
    return this.dataProvider.sectors[this.sector];
  }
  constructor(dataProvider, route, sectorProvider, chartService) {
    this.dataProvider = dataProvider;
    this.route = route;
    this.sectorProvider = sectorProvider;
    this.chartService = chartService;
    this.sector = "all-sectors";
    this.year = '';
    this.beyond_compliance_metrics = _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_0__;
    this.metric_question = '';
    this.metric_seq = 1;
    this.isLoading = true;
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let sector = params.get('sector');
      if (sector !== null) {
        this.sector = sector;
        this.updateData();
      }
      this.sectorProvider.getSector().next(sector);
    });
    this.route.url.subscribe(val => {
      if (val[1].path === 'going-beyond-compliance') this.sectorProvider.getPath().next(val[1].path);
    });
  }
  updateData() {
    let company_group = this.dataProvider.getCompanyGroup(this.sector);
    const uk_statements_assessed = this.dataProvider.getAnswers(this.dataProvider.metrics.meet_uk_min_requirements, [new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter("year", this.year), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter('value', ['Yes', 'No', 'Unknown']), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter("company_group", [company_group, this.dataProvider.companies_with_assessed_statement.uk].filter(value => value != ''))]);
    const aus_statements_assessed = this.dataProvider.getAnswers(this.dataProvider.metrics.meet_aus_min_requirements, [new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter("year", this.year), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter('value', ['Yes', 'No', 'Unknown']), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter("company_group", [company_group, this.dataProvider.companies_with_assessed_statement.aus].filter(value => value != ''))]);
    const statements_assessed = this.dataProvider.getAnswers(this.dataProvider.metrics.msa_meet_min_requirements, [new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter("year", this.year), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter('value', ['Yes', 'No', 'Unknown']), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter("company_group", [company_group, this.dataProvider.companies_with_assessed_statement.any].filter(value => value != ''))]);
    let requests = [];
    requests.push(uk_statements_assessed);
    requests.push(aus_statements_assessed);
    requests.push(statements_assessed);
    for (let metric of _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_0__) {
      requests.push(this.dataProvider.getAnswers(metric['id'], [new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter("year", this.year), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter("value", metric['filter_value']), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_1__.Filter("company_group", [company_group, this.dataProvider.companies_with_assessed_statement.any].filter(value => value !== ''))].filter(item => item.value !== 'latest')));
    }
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(requests).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(responses => {
      console.log(responses);
      let results = [];
      if (this.year == 'latest') {
        responses[2] = Object.values(responses[2].reduce((r, o) => {
          r[o.company] = r[o.company] && r[o.company].year > o.year ? r[o.company] : o;
          return r;
        }, {}));
      }
      for (let i = 3; i < responses.length; i++) {
        let uk_count = responses[i].reduce((count, item) => {
          if (responses[0].some(o => o.company === item.company && o.year === item.year)) {
            return count + 1;
          }
          return count;
        }, 0);
        let aus_count = responses[i].reduce((count, item) => {
          if (responses[1].some(o => o.company === item.company && o.year === item.year)) {
            return count + 1;
          }
          return count;
        }, 0);
        let total = responses[i].reduce((count, item) => {
          if (responses[2].some(o => o.company === item.company && o.year === item.year)) {
            return count + 1;
          }
          return count;
        }, 0);
        results.push({
          'key': _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_0__[i - 3]['label'],
          'value': Math.round(uk_count * 100 / responses[0].length),
          'category': 'UK',
          'label': _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_0__[i - 3]['break_down_label'],
          'question': _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_0__[i - 3]['question'],
          'mandatory': _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_0__[i - 3]['aus_color'] == 'bg-deep-orange' ? 'Yes' : 'No'
        });
        results.push({
          'key': _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_0__[i - 3]['label'],
          'value': Math.round(aus_count * 100 / responses[1].length),
          'category': 'AUS',
          'label': _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_0__[i - 3]['break_down_label'],
          'question': _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_0__[i - 3]['question'],
          'mandatory': _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_0__[i - 3]['aus_color'] == 'bg-deep-orange' ? 'Yes' : 'No'
        });
        results.push({
          'key': _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_0__[i - 3]['label'],
          'value': Math.round(total * 100 / responses[2].length),
          'category': 'Both',
          'label': _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_0__[i - 3]['break_down_label'],
          'question': _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_0__[i - 3]['question'],
          'mandatory': _assets_charts_params_beyond_compliance_metrics_json__WEBPACK_IMPORTED_MODULE_0__[i - 3]['aus_color'] == 'bg-deep-orange' ? 'Yes' : 'No'
        });
      }
      return results;
    })).subscribe({
      next: results => {
        this.chartService.drawRadarChart('', '#radar-chart', results, '', {
          renderer: "svg",
          actions: true
        });
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
  static {
    this.ɵfac = function GoingBeyondComplianceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GoingBeyondComplianceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_data_provider__WEBPACK_IMPORTED_MODULE_2__.DataProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_sector_provider__WEBPACK_IMPORTED_MODULE_3__.SectorProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_4__.ChartsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: GoingBeyondComplianceComponent,
      selectors: [["app-going-beyond-compliance"]],
      decls: 34,
      vars: 11,
      consts: [[1, "container"], ["id", "beyond-compliance", 1, "section-top", "mt-5", "bg-grey", "p-4"], [1, "row"], [1, "col-md-8"], [1, "title"], ["class", "fst-italic", 4, "ngIf"], [1, "col-md-4"], ["aria-label", "Minimum requirements year filter", 1, "msa-form-select", "ms-md-auto", "bg-grey", 2, "max-width", "120px", "max-height", "50px", "font-size", "0.8em", 3, "ngModelChange", "change", "ngModel"], ["selected", "", 3, "ngValue"], [3, "ngValue"], [1, "row", "pt-md-2", "pt-1"], [1, "col-md-12"], [1, "col-lg-10", "col-md-12", "fst-italic", "fs-5"], [1, "row", "p-1", "pe-2", "justify-content-center"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-6", "col-xl-6"], ["id", "radar-chart", 1, "chart-wrapper"], [1, "fst-italic"]],
      template: function GoingBeyondComplianceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Going Beyond Compliance");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, GoingBeyondComplianceComponent_h6_6_Template, 2, 1, "h6", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "select", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function GoingBeyondComplianceComponent_Template_select_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.year, $event) || (ctx.year = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function GoingBeyondComplianceComponent_Template_select_change_8_listener() {
            return ctx.updateData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "ALL YEARS");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "LATEST");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "2021");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "2019");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "2018");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "2017");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "2016");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 10)(28, "div", 11)(29, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Beyond the minimum requirements, the accompanying guidance of the MSAs outlines the measures and actions companies should take and report on to ensure their operations and supply chains are free from exploitation. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 13)(32, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sector !== "all-sectors");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.year);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", "latest");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2022);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2021);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2020);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2019);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2018);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2017);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2016);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 10891:
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/highlight-metric/highlight-metric.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightMetricComponent: () => (/* binding */ HighlightMetricComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/filter.model */ 53060);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_data_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.provider */ 74004);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 48418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_services_sector_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sector.provider */ 41398);
/* harmony import */ var src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/charts.service */ 33827);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _export_as_export_as_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../export-as/export-as.component */ 84503);
/* harmony import */ var _pipes_percentage_format_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/percentage-format.pipe */ 62952);












const _c0 = ["content"];
function HighlightMetricComponent_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getSectorName(), " Sector");
  }
}
function HighlightMetricComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "div", 39)(3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function HighlightMetricComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41)(1, "h5", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "The Australian Modern Slavery Act");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HighlightMetricComponent_ng_template_59_Template_button_click_3_listener() {
      const modal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](modal_r5.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 44)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "The Australian Modern Slavery Act was passed in 2018 and required companies to produce their first statement for financial year 2019. These needed to be submitted within 3 months after year's end (in 2020) but for this first year the government provided companies with an extension due to the impact of the covid pandemic. As a result, most companies submitted statements under the Australian Act from the financial year 2020 onward.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 45)(8, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HighlightMetricComponent_ng_template_59_Template_button_click_8_listener() {
      const modal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](modal_r5.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class HighlightMetricComponent {
  constructor(dataProvider, modalService, route, sectorProvider, chartsService) {
    this.dataProvider = dataProvider;
    this.modalService = modalService;
    this.route = route;
    this.sectorProvider = sectorProvider;
    this.chartsService = chartsService;
    this.sector = "all-sectors";
    this.company_group = [];
    this.isLoading = false;
    this.year = '';
    this.legislation = 'both';
    this.incidents_url = "#";
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let sector = params.get('sector');
      if (sector !== null) {
        this.sector = sector;
        this.updateData(this.year);
      }
      this.sectorProvider.getSector().next(sector);
    });
  }
  getSectorName() {
    return this.dataProvider.sectors[this.sector];
  }
  updateData($event) {
    this.isLoading = true;
    this.company_group = [];
    if (this.sector != 'all-sectors') this.company_group.push(this.dataProvider.getCompanyGroup(this.sector));
    if (this.legislation === 'uk') {
      this.company_group.push(this.dataProvider.companies_with_assessed_statement.uk);
    } else if (this.legislation === 'aus') {
      this.company_group.push(this.dataProvider.companies_with_assessed_statement.aus);
    } else {
      this.company_group.push(this.dataProvider.companies_with_assessed_statement.any);
    }
    if (this.legislation === 'both') {
      this.createChart(this.dataProvider.metrics.msa_statement_assessed, this.dataProvider.metrics.msa_incidents_identified);
      return $event;
    } else if (this.legislation === 'uk') {
      this.createChart(this.dataProvider.metrics.uk_msa_statement_assessed, this.dataProvider.metrics.msa_incidents_identified);
      return $event;
    } else {
      if (this.year !== '' && this.year !== 'latest' && Number(this.year) < 2020) {
        this.openMessage();
        this.year = '2020';
      }
      this.createChart(this.dataProvider.metrics.aus_msa_statement_assessed, this.dataProvider.metrics.msa_incidents_identified);
      return this.year;
    }
  }
  createChart(assessed_statements_metric, incidents_identified_metric) {
    //prepare all requests that need to be executed
    this.isLoading = true;
    var accepted_values = ["Yes", "Recruitment fees", "Freedom of movement", "Wages and benefits", "Working Hours", "Working conditions", "Other incidents"];
    let assessed_filters = [new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", accepted_values), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.company_group)];
    if (this.year == 'latest') {
      assessed_filters = [new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", accepted_values), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.company_group)];
    }
    const assessed = this.dataProvider.getAnswers(assessed_statements_metric, assessed_filters);
    const msa_incidents = this.dataProvider.getAnswers(incidents_identified_metric, [new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", accepted_values), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.company_group)]);
    const descriptions = {
      "Yes": "Cases that companies qualified as forced or child labour",
      "Recruitment fees": "Cases of workers paying recruitment or other fees",
      "Freedom of movement": "Restrictions on freedom of movement workers (e.g. withholding of passports)",
      "Wages and benefits": "Issues related to wages (underpayment, salary below minimum wages)",
      "Working Hours": "Cases of excessive or mandatory overtime",
      "Working conditions": "Issues related to health and safety or cases of harassment",
      "Other incidents": "Cases of illegal subcontracting or issues related to general labour practices"
    };
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([assessed, msa_incidents]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(([assessed_response, msa_incidents_response]) => {
      if (this.year == 'latest') {
        assessed_response = Object.values(assessed_response.reduce((r, o) => {
          r[o.company] = r[o.company] && r[o.company].year > o.year ? r[o.company] : o;
          return r;
        }, {}));
      }
      msa_incidents_response = msa_incidents_response.filter(item => assessed_response.find(o => o.company == item.company && o.year == item.year));
      var values = [];
      this.companies_reporting_msi = Math.round(msa_incidents_response.length * 100 / assessed_response.length);
      values.push({
        "category": "Companies reporting\nmodern slavery\nincidents",
        "stack": 1,
        "sort": 1,
        "labels": "left",
        "labeledValue": this.companies_reporting_msi
      });
      for (var i = 0; i < accepted_values.length; i++) {
        values.push({
          "category": accepted_values[i] == 'Yes' ? 'Modern slavery' : accepted_values[i],
          "stack": 2,
          "sort": i + 1,
          "labels": "right",
          "gap": 10
        });
      }
      var data = {
        "Yes": 0,
        "Recruitment fees": 0,
        "Freedom of movement": 0,
        "Wages and benefits": 0,
        "Working Hours": 0,
        "Working conditions": 0,
        "Other incidents": 0
      };
      for (var i = 0; i < msa_incidents_response.length; i++) {
        var options = msa_incidents_response[i]['value'].split(", ");
        for (var option of options) {
          data[option] = data[option] + 1;
        }
      }
      for (var value of accepted_values) {
        values.push({
          'source': "Companies reporting\nmodern slavery\nincidents",
          'destination': value == 'Yes' ? 'Modern slavery' : value,
          'description': descriptions[value],
          'value': Math.round(data[value] * 100 / msa_incidents_response.length)
        });
      }
      return {
        'incidents': Math.round(msa_incidents_response.length * 100 / assessed_response.length),
        'values': values
      };
    })).subscribe({
      next: results => {
        this.incidents = results.incidents;
        this.chartsService.drawShankeyChart('#incidents-chart', results.values, {
          renderer: "svg",
          actions: false
        });
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
  openMessage() {
    this.modalService.open(this.content, {
      centered: true
    });
  }
  static {
    this.ɵfac = function HighlightMetricComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HighlightMetricComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_data_provider__WEBPACK_IMPORTED_MODULE_1__.DataProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_sector_provider__WEBPACK_IMPORTED_MODULE_2__.SectorProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_3__.ChartsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: HighlightMetricComponent,
      selectors: [["highlight-metric"]],
      viewQuery: function HighlightMetricComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      decls: 63,
      vars: 19,
      consts: [["select", ""], ["content", ""], [1, "container"], ["id", "highlighted-metric-section", 1, "bg-grey", "p-4", "mt-5"], [1, "row"], [1, "col-md-4", "col-lg-6"], [1, "title"], ["class", "fst-italic", 4, "ngIf"], [1, "col-md-8", "col-lg-6"], [1, "row", "ps-3", "pe-3", "pt-md-0", "pt-3"], ["aria-label", "Default select example", 1, "msa-form-select", "bg-grey", "ms-md-auto", "me-3", "mb-md-0", "mb-1", 2, "max-width", "120px", "max-height", "50px", "font-size", "0.8em", 3, "ngModelChange", "ngModel"], ["value", "", "selected", ""], ["value", "latest"], ["value", "2022"], ["value", "2021"], ["value", "2020"], ["value", "2019"], ["value", "2018"], ["value", "2017"], ["value", "2016"], ["aria-label", "Default select example", 1, "msa-form-select", "bg-grey", 3, "ngModelChange", "change", "ngModel"], ["selected", "", 3, "ngValue"], [3, "ngValue"], ["class", "row mt-3", "style", "height: 150px", 4, "ngIf"], [1, "incidents-identified", 3, "ngClass"], [1, "row", "mt-4", "d-flex", "justify-content-center"], [1, "col-12"], [1, "col-lg-10", "col-md-12", "fst-italic", "fs-5"], [1, "row", "mt-4", "align-items-center", "g-md-0"], [1, "col-md-3"], [1, "ms-1", "text-end", "fst-5"], [1, "h4"], [1, "col-md-9"], ["id", "incidents-chart", 1, "chart-wrapper"], [1, "section-bottom", "bg-grey", "pe-4", "pb-4"], [3, "sector", "section", "elementId", "button_class", "ngClass"], [1, "fst-italic"], [1, "row", "mt-3", 2, "height", "150px"], [1, "col-12", "text-center", "align-self-center"], ["role", "status", 1, "spinner-grow", "text-warning", "bg-deep-blue"], [1, "sr-only"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"]],
      template: function HighlightMetricComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Underreporting of cases of exploitation");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, HighlightMetricComponent_h6_6_Template, 2, 1, "h6", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 8)(8, "div", 9)(9, "select", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function HighlightMetricComponent_Template_select_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.year, $event) || (ctx.year = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function HighlightMetricComponent_Template_select_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            const select_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](select_r3.value = ctx.updateData($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "ALL YEARS");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "LATEST");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "2021");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "2019");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "2018");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "2017");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "2016");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "select", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function HighlightMetricComponent_Template_select_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.legislation, $event) || (ctx.legislation = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function HighlightMetricComponent_Template_select_change_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.updateData($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "LEGISLATION");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "UK MSA");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "AUS MSA");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, HighlightMetricComponent_div_36_Template, 5, 0, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 24)(38, "div", 25)(39, "div", 26)(40, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Millions of modern slavery victims go undetected. While an estimated ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "28 million people");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, " are ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "in forced labour globally");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](48, "percentageFormat");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 28)(50, "div", 29)(51, "h6", 30)(52, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](54, "percentageFormat");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, " of companies disclosing violations report incidents in the following categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, HighlightMetricComponent_ng_template_59_Template, 10, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "export-as", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.sector !== "all-sectors");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.year);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.legislation);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "both");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "uk");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "aus");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](", only ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](48, 15, ctx.incidents), " of companies we've assessed report finding incidents in their supply chains. This stark gap reveals a critical need for better reporting and transparency. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](54, 17, ctx.companies_reporting_msi));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("sector", ctx.sector)("section", "highlight-metric")("elementId", "highlighted-metric-section")("button_class", "btn-deep-blue")("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _export_as_export_as_component__WEBPACK_IMPORTED_MODULE_4__.ExportAsComponent, _pipes_percentage_format_pipe__WEBPACK_IMPORTED_MODULE_5__.PercentageFormatPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 66605:
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/introductory-section/introductory-section.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntroductorySectionComponent: () => (/* binding */ IntroductorySectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_sector_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/sector.provider */ 41398);
/* harmony import */ var _services_data_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.provider */ 74004);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);





function IntroductorySectionComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Take Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", "/assets/downloads/Wikirate_MSA_Beyond_Compliance_Dashboard_Dataset_" + (ctx_r0.company_group === "" ? "full" : ctx_r0.company_group) + ".csv", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("download", "Wikirate_MSA_Beyond_Compliance_Dashboard_Dataset_" + ctx_r0.company_group + ".csv");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Download ", ctx_r0.company_group === "" ? "All" : "Sector", " Data");
  }
}
class IntroductorySectionComponent {
  constructor(sectorProvider, dataProvider, cd) {
    this.sectorProvider = sectorProvider;
    this.dataProvider = dataProvider;
    this.cd = cd;
    this.sector = 'all-sectors';
    this.company_group = '';
    this.page = 'dashboard';
  }
  ngOnInit() {
    this.sectorProvider.getSector().subscribe(sector => {
      this.sector = sector;
      this.company_group = this.dataProvider.getCompanyGroup(sector);
    });
  }
  ngAfterViewInit() {
    this.sectorProvider.getPath().subscribe(path => {
      this.page = path;
    }, error => {}, () => {
      this.cd.detectChanges();
    });
  }
  static {
    this.ɵfac = function IntroductorySectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IntroductorySectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sector_provider__WEBPACK_IMPORTED_MODULE_0__.SectorProvider), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_provider__WEBPACK_IMPORTED_MODULE_1__.DataProvider), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: IntroductorySectionComponent,
      selectors: [["introductory-section"]],
      decls: 8,
      vars: 1,
      consts: [[1, "intro"], [1, "col-md-6", "bg-deep-blue-transparent", "p-5", "ms-auto"], [1, "title", "pt-5"], [1, "row", "pb-5"], [1, "subtitle", "mt-4"], ["class", "mt-4 mb-1 pb-5", 4, "ngIf"], [1, "mt-4", "mb-1", "pb-5"], ["type", "button", "routerLink", "/about", 1, "button", "orange-button", "mb-2"], [1, "button", "transparent-button", "mt-md-0", "mt-3", 3, "href", "download"]],
      template: function IntroductorySectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Beyond Compliance");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " A living data dashboard assessing modern slavery reporting across business sectors. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, IntroductorySectionComponent_div_7_Template, 5, 3, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.page === "dashboard");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: [".intro[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/background-image-3.jpg\") !important;\n  background-position: center center;\n  background-size: cover;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2ludHJvZHVjdG9yeS1zZWN0aW9uL2ludHJvZHVjdG9yeS1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4va3ViZXJuZXRlcyUyMHBsYXlncm91bmQvbXNhLWJleW9uZC1jb21wbGlhbmNlL3NyYy9hcHAvZGFzaGJvYXJkL2ludHJvZHVjdG9yeS1zZWN0aW9uL2ludHJvZHVjdG9yeS1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0VBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0NGIiwic291cmNlc0NvbnRlbnQiOlsiLmludHJve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2JhY2tncm91bmQtaW1hZ2UtMy5qcGdcIikgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwiLmludHJvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC1pbWFnZS0zLmpwZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 27789:
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/key-findings-section/key-findings-section.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyFindingsSectionComponent: () => (/* binding */ KeyFindingsSectionComponent)
/* harmony export */ });
/* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter.model */ 53060);
/* harmony import */ var _models_valuerange_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/valuerange.model */ 52024);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/wikirate-url-builder */ 73234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_data_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.provider */ 74004);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 48418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_sector_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sector.provider */ 41398);
/* harmony import */ var src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/charts.service */ 33827);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _export_as_export_as_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export-as/export-as.component */ 84503);
/* harmony import */ var _pipes_num_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/num-format.pipe */ 44078);
/* harmony import */ var _pipes_percentage_format_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/percentage-format.pipe */ 62952);
















const _c0 = ["content"];
function KeyFindingsSectionComponent_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r1.getSectorName(), " Sector");
  }
}
function KeyFindingsSectionComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "div", 46)(3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
}
function KeyFindingsSectionComponent_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "the Australian and UK Modern Slavery Acts");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function KeyFindingsSectionComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("the ", ctx_r1.legislation.toUpperCase(), " Modern Slavert Act");
  }
}
function KeyFindingsSectionComponent_ng_template_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 48)(1, "h5", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "The Australian Modern Slavery Act");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function KeyFindingsSectionComponent_ng_template_101_Template_button_click_3_listener() {
      const modal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r5.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 51)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "The Australian Modern Slavery Act was passed in 2018 and required companies to produce their first statement for financial year 2019. These needed to be submitted within 3 months after year's end (in 2020) but for this first year the government provided companies with an extension due to the impact of the covid pandemic. As a result, most companies submitted statements under the Australian Act from the financial year 2020 onward.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 52)(8, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function KeyFindingsSectionComponent_ng_template_101_Template_button_click_8_listener() {
      const modal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r5.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
class KeyFindingsSectionComponent {
  constructor(dataProvider, modalService, route, sectorProvider, chartsService, titleService, meta) {
    this.dataProvider = dataProvider;
    this.modalService = modalService;
    this.route = route;
    this.sectorProvider = sectorProvider;
    this.chartsService = chartsService;
    this.titleService = titleService;
    this.meta = meta;
    this.sector = "all-sectors";
    this.company_group = [];
    this.year = '';
    this.legislation = 'both';
    this.isLoading = false;
    this.meet_min_requirements_metric_url = '#';
    this.msa_statement_assessed_metric_url = '#';
    this.msa_statements_metric_url = '#';
    this.supply_chain_disclosure_url = '#';
    this.worker_remediation_url = "#";
    this.due_dilligence_url = "#";
    this.incidents_url = "#";
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let sector = params.get('sector');
      if (sector !== null) {
        this.sector = sector;
        this.updateData(this.year);
      }
      this.sectorProvider.getSector().next(sector);
    });
    this.route.url.subscribe(val => {
      if (val[1].path === 'key-findings') {
        this.titleService.setTitle("Beyond Compliance: Key Findings");
        this.meta.updateTag({
          name: 'og:title',
          content: "Beyond Compliance: Key Findings"
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: "Beyond Compliance: Key Findings"
        });
        this.sectorProvider.getPath().next(val[1].path);
      } else {
        this.titleService.setTitle("Beyond Compliance");
        this.meta.updateTag({
          name: 'description',
          content: "Discover ESG data disclosure ratings and supplier transparency of the biggest 100 apparel companies in infographics, charts, and maps by Wikirate."
        });
        this.meta.updateTag({
          name: 'og:description',
          content: "@walkfree & @wikirate have simplified the data on the current state of modern slavery reporting in Australia and the UK. Explore the interactive dashboard to see trends on the effectiveness of this measure to #endmodernslavery."
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: "Discover ESG data disclosure ratings and supplier transparency of the biggest 100 apparel companies in infographics, charts, and maps by Wikirate."
        });
      }
    });
  }
  getSectorName() {
    return this.dataProvider.sectors[this.sector];
  }
  updateData($event) {
    this.isLoading = true;
    this.numOfAssessedMSAStatements = 0;
    this.company_group = [];
    if (this.sector != 'all-sectors') this.company_group.push(this.dataProvider.getCompanyGroup(this.sector));
    if (this.legislation === 'uk') {
      this.company_group.push(this.dataProvider.companies_with_assessed_statement.uk);
    } else if (this.legislation === 'aus') {
      this.company_group.push(this.dataProvider.companies_with_assessed_statement.aus);
    } else {
      this.company_group.push(this.dataProvider.companies_with_assessed_statement.any);
    }
    if (this.legislation === 'both') {
      this.key_findings_calculation(this.dataProvider.metrics.msa_statement_assessed, this.dataProvider.metrics.msa_meet_min_requirements, this.dataProvider.metrics.msa_supply_chain_disclosure, this.dataProvider.metrics.msa_incidents_remediation, this.dataProvider.metrics.msa_supply_chain_due_dilligence, this.dataProvider.metrics.msa_incidents_identified);
      return $event;
    } else if (this.legislation === 'uk') {
      this.key_findings_calculation(this.dataProvider.metrics.uk_msa_statement_assessed, this.dataProvider.metrics.meet_uk_min_requirements, this.dataProvider.metrics.msa_supply_chain_disclosure, this.dataProvider.metrics.msa_incidents_remediation, this.dataProvider.metrics.msa_supply_chain_due_dilligence, this.dataProvider.metrics.msa_incidents_identified);
      return $event;
    } else {
      if (this.year !== '' && this.year !== 'latest' && Number(this.year) < 2020) {
        this.openMessage();
        this.year = '2020';
      }
      this.key_findings_calculation(this.dataProvider.metrics.aus_msa_statement_assessed, this.dataProvider.metrics.meet_aus_min_requirements, this.dataProvider.metrics.msa_supply_chain_disclosure, this.dataProvider.metrics.msa_incidents_remediation, this.dataProvider.metrics.msa_supply_chain_due_dilligence, this.dataProvider.metrics.msa_incidents_identified);
      return this.year;
    }
  }
  /**
   * This method performs all the necessary requests to wikirate's api to retrieve the required data in order to
   * calculate the statistics on the component. Different metrics might be used when different filtering is applied.
   * The method gets as input the ids of the metrics used for calculating the key findings.
   * @param statements_metric
   * @param assessed_statements_metric
   * @param meet_requirements_metric
   * @param beyond_compliance_metric
   */
  key_findings_calculation(assessed_statements_metric, meet_requirements_metric, supply_chain_disclosure_metric, incidents_remediation_metric, due_dilligence_metric, incidents_metric) {
    let legislation_filter_value = ["Yes - UK Modern Slavery Act", "Yes - Australian Modern Slavery Act"];
    let beyond_compliance_value = ["Yes"];
    if (this.legislation === 'uk') {
      legislation_filter_value = ["Yes - UK Modern Slavery Act"];
      beyond_compliance_value = new _models_valuerange_model__WEBPACK_IMPORTED_MODULE_1__.ValueRange(1, '');
    } else if (this.legislation === 'aus') {
      legislation_filter_value = ["Yes - Australian Modern Slavery Act"];
      beyond_compliance_value = new _models_valuerange_model__WEBPACK_IMPORTED_MODULE_1__.ValueRange(1, '');
    }
    //build urls to link the numbers to wikirate metrics with proper filters applied
    this.meet_min_requirements_metric_url = new _utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_2__.WikirateUrlBuilder().setEndpoint(meet_requirements_metric).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('value', ['Yes'])).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('company_group', this.company_group)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)).build();
    let msa_statement_assessed_metric_wikirate_url = new _utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_2__.WikirateUrlBuilder().setEndpoint(assessed_statements_metric).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('value', ['Yes'])).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('company_group', this.company_group));
    if (this.year != 'latest') {
      msa_statement_assessed_metric_wikirate_url.addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year));
      this.msa_statement_assessed_metric_url = msa_statement_assessed_metric_wikirate_url.build();
    }
    this.supply_chain_disclosure_url = new _utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_2__.WikirateUrlBuilder().setEndpoint(supply_chain_disclosure_metric).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ['Geographical', 'Facility/Supplier'])).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('company_group', this.company_group)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)).build();
    this.worker_remediation_url = new _utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_2__.WikirateUrlBuilder().setEndpoint(incidents_remediation_metric).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ['Worker remediation'])).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('company_group', this.company_group)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)).build();
    this.due_dilligence_url = new _utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_2__.WikirateUrlBuilder().setEndpoint(due_dilligence_metric).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ['Worker remediation'])).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('company_group', this.company_group)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)).build();
    this.incidents_url = new _utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_2__.WikirateUrlBuilder().setEndpoint(incidents_metric).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ['Yes'])).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('company_group', this.company_group)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)).build();
    //prepare all requests that need to be executedF
    const assessed = this.dataProvider.getAnswers(assessed_statements_metric, [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ["Yes"]), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.company_group), ...(this.year !== 'latest' ? [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)] : [])]);
    const meet_requirements = this.dataProvider.getAnswers(meet_requirements_metric, [
    // new Filter("year", this.year),
    new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ["Yes"]), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.company_group), ...(this.year !== 'latest' ? [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)] : [])]);
    const supply_chain_disclosure = this.dataProvider.getAnswers(supply_chain_disclosure_metric, [
    // new Filter("year", this.year),
    new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ['Geographical', 'Facility/Supplier']), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.company_group), ...(this.year !== 'latest' ? [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)] : [])]);
    const incidents_remediation = this.dataProvider.getAnswers(incidents_remediation_metric, [
    // new Filter("year", this.year),
    new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ['Worker remediation']), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.company_group), ...(this.year !== 'latest' ? [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)] : [])]);
    const due_dilligence = this.dataProvider.getAnswers(due_dilligence_metric, [
    // new Filter("year", this.year),
    new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ['Yes']), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.company_group), ...(this.year !== 'latest' ? [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)] : [])]);
    const msa_incidents = this.dataProvider.getAnswers(incidents_metric, [
    // new Filter("year", this.year),
    new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ['Yes']), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.company_group), ...(this.year !== 'latest' ? [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)] : [])]);
    /**perform the requests using forkJoin to get all the results before start calculating the key findings**/
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)([assessed, meet_requirements, supply_chain_disclosure, incidents_remediation, due_dilligence, msa_incidents]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(([assessed_response, meet_requirements_response, supply_chain_disclosure_response, incidents_remediation_response, due_dilligence_response, msa_incidents_response]) => {
      if (this.year == 'latest') {
        assessed_response = Object.values(assessed_response.reduce((r, o) => {
          r[o.company] = r[o.company] && r[o.company].year > o.year ? r[o.company] : o;
          return r;
        }, {}));
      }
      meet_requirements_response = meet_requirements_response.filter(item => assessed_response.find(o => o.company == item.company && o.year == item.year));
      supply_chain_disclosure_response = supply_chain_disclosure_response.filter(item => assessed_response.find(o => o.company == item.company && o.year == item.year));
      incidents_remediation_response = incidents_remediation_response.filter(item => assessed_response.find(o => o.company == item.company && o.year == item.year));
      due_dilligence_response = due_dilligence_response.filter(item => assessed_response.find(o => o.company == item.company && o.year == item.year));
      msa_incidents_response = msa_incidents_response.filter(item => assessed_response.find(o => o.company == item.company && o.year == item.year));
      return {
        'num_of_assessed_msa_statements': assessed_response.length,
        'cover_min_requirements': Math.round(meet_requirements_response.length / assessed_response.length * 100),
        'supply_chain_disclosure': Math.round(supply_chain_disclosure_response.length * 100 / assessed_response.length),
        'incidents_remediation': Math.round(incidents_remediation_response.length * 100 / assessed_response.length),
        'due_dilligence': Math.round(due_dilligence_response.length * 100 / assessed_response.length)
      };
    })).subscribe({
      next: results => {
        this.numOfAssessedMSAStatements = results.num_of_assessed_msa_statements;
        this.meetsMinRequirements = results.cover_min_requirements;
        this.supplyChainDisclosure = results.supply_chain_disclosure;
        this.workerRemediation = results.incidents_remediation;
        this.dueDilligence = results.due_dilligence;
        // this.incidents = results.incidents
        this.drawDonutChart(100 - this.meetsMinRequirements, "donut-meet-min-requirements", this.meet_min_requirements_metric_url, ['Do not meet minimum requirements', 'Meet minimum requirements'], "#FF5C45");
        this.drawDonutChart(100 - this.supplyChainDisclosure, "donut-supply-chain-disclosure", this.supply_chain_disclosure_url, ['Do not disclose information about their supply chain', 'Disclose information about their supply chain'], "#FF5C45");
        this.drawDonutChart(100 - this.workerRemediation, "donut-worker-remediation", this.worker_remediation_url, ['Disclose direct worker remediation policies', 'Do not disclose direct worker remediation policies'], "#FF5C45");
        this.drawDonutChart(100 - this.dueDilligence, "donut-due-dilligence", this.due_dilligence_url, ['No supply chain due dilligence in place', 'Supply chain due dilligence in place'], "#FF5C45");
        // this.drawDonutChart(this.incidents, "donut-incidents", this.incidents_url, "#FF5C45")
        //loading stops when all requests and calculations have been performed successfully
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
  openMessage() {
    this.modalService.open(this.content, {
      centered: true
    });
  }
  drawDonutChart(percentage, elementId, url, options, hex) {
    this.chartsService.drawDonutChart(`${percentage}%`, `div#${elementId}`, [{
      'id': options[0],
      'percent': percentage,
      'URL': url
    }, {
      'id': options[1],
      'percent': 100 - percentage,
      'URL': url
    }], 250, 250, ["#e5e5ea", hex], [options[1], options[0]], {
      renderer: "svg",
      actions: false
    });
  }
  static {
    this.ɵfac = function KeyFindingsSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || KeyFindingsSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_data_provider__WEBPACK_IMPORTED_MODULE_3__.DataProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_sector_provider__WEBPACK_IMPORTED_MODULE_4__.SectorProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_5__.ChartsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.Meta));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: KeyFindingsSectionComponent,
      selectors: [["key-findings-section"]],
      viewQuery: function KeyFindingsSectionComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      decls: 105,
      vars: 31,
      consts: [["select", ""], ["content", ""], [1, "container"], ["id", "key-findings-section", 1, "section-top", "mt-5", "bg-grey", "p-4"], [1, "row"], [1, "col-md-4"], [1, "title"], ["class", "fst-italic", 4, "ngIf"], [1, "col-md-8", "ms-md-auto"], [1, "row", "ps-3", "pe-3", "pt-md-0", "pt-2"], ["aria-label", "Default select example", 1, "msa-form-select", "bg-grey", "ms-md-auto", "me-3", "mb-md-0", "mb-1", 2, "max-width", "120px", "max-height", "50px", "font-size", "0.8em", 3, "ngModelChange", "ngModel"], ["value", "", "selected", ""], ["value", "latest"], ["value", "2022"], ["value", "2021"], ["value", "2020"], ["value", "2019"], ["value", "2018"], ["value", "2017"], ["value", "2016"], ["aria-label", "Default select example", 1, "msa-form-select", "bg-grey", 3, "ngModelChange", "change", "ngModel"], ["selected", "", 3, "ngValue"], [3, "ngValue"], ["class", "row mt-3", "style", "height: 150px", 4, "ngIf"], [1, "row", 3, "ngClass"], [1, "row", "pt-md-2", "pt-1"], [1, "col-md-12"], [1, "col-lg-10", "col-md-12", "fst-italic", "fs-5"], ["target", "_blank", 3, "href"], [4, "ngIf"], [1, "row", "mt-5"], [1, "col-sm-12", "col-md-6", "mb-5"], [1, "row", "d-flex", "justify-content-center"], [1, "msa-primary-info", "col-5", "p-lg-4", "p-2"], ["id", "donut-meet-min-requirements", 1, "chart-wrapper"], [1, "col-7", "align-content-center"], [1, "msa-secondary-info", "mb-2"], ["type", "button", 1, "tooltip-term", 3, "ngbTooltip"], ["id", "donut-supply-chain-disclosure", 1, "chart-wrapper"], ["id", "donut-worker-remediation", 1, "chart-wrapper"], ["id", "donut-due-dilligence", 1, "chart-wrapper"], [1, "section-bottom", "bg-grey", "pe-4", "pb-4"], [3, "sector", "section", "elementId", "ngClass"], [1, "fst-italic"], [1, "row", "mt-3", 2, "height", "150px"], [1, "col-12", "text-center", "align-self-center"], ["role", "status", 1, "spinner-grow", "text-warning", "bg-deep-blue"], [1, "sr-only"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"]],
      template: function KeyFindingsSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Key Findings");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, KeyFindingsSectionComponent_h6_6_Template, 2, 1, "h6", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 8)(8, "div", 9)(9, "select", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function KeyFindingsSectionComponent_Template_select_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.year, $event) || (ctx.year = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function KeyFindingsSectionComponent_Template_select_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            const select_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](10);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](select_r3.value = ctx.updateData($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "ALL YEARS");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "LATEST");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "2021");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "2019");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "2018");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "2017");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "2016");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "select", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function KeyFindingsSectionComponent_Template_select_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.legislation, $event) || (ctx.legislation = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function KeyFindingsSectionComponent_Template_select_change_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.updateData(ctx.year));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "LEGISLATION");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "UK MSA");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "AUS MSA");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, KeyFindingsSectionComponent_div_36_Template, 5, 0, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 24)(38, "div", 25)(39, "div", 26)(40, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "We ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](44, "numFormat");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, " produced under ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, KeyFindingsSectionComponent_span_46_Template, 2, 0, "span", 29)(47, KeyFindingsSectionComponent_span_47_Template, 2, 1, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, " and these are some of the gaps we have discovered. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 30)(50, "div", 31)(51, "div", 32)(52, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](53, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 35)(55, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, " Companies are failing to effectively meet their reporting obligations. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "p")(58, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](60, "percentageFormat");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, " of statements do not meet all ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "minimum requirements");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, " of the corresponding MSA legislation.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 31)(66, "div", 32)(67, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](68, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 35)(70, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, " Ineffective disclosures render millions of workers invisible ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "p")(73, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](75, "percentageFormat");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, " of statements disclosed no information on their supply chains.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "div", 31)(78, "div", 32)(79, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](80, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "div", 35)(82, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](83, " No direct worker remediation ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "p")(85, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](87, "percentageFormat");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](88, " of statements do not disclose direct worker remediation policies. Such policies prioritise the well-being, rights, and dignity of affected workers. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "div", 31)(90, "div", 32)(91, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](92, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "div", 35)(94, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](95, " No direct Supply chain due dilligence ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "p")(97, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](98);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](99, "percentageFormat");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](100, " of statements report no supply chain due dilligence in place. This means no risk management, seriously impending companies' ability to detect or respond to exploitation.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](101, KeyFindingsSectionComponent_ng_template_101_Template, 10, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](104, "export-as", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.sector !== "all-sectors");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.year);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.legislation);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", "both");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", "uk");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", "aus");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("href", ctx.msa_statement_assessed_metric_url, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("analysed ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](44, 21, ctx.numOfAssessedMSAStatements), " company statements");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.legislation == "both");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.legislation != "both");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](60, 23, 100 - ctx.meetsMinRequirements));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbTooltip", "Disclosure requirements which companies must comply with under the Act.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](75, 25, 100 - ctx.supplyChainDisclosure));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Only ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](87, 27, 100 - ctx.workerRemediation), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](99, 29, 100 - ctx.dueDilligence));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("sector", ctx.sector)("section", "key-findings")("elementId", "key-findings-section")("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltip, _export_as_export_as_component__WEBPACK_IMPORTED_MODULE_6__.ExportAsComponent, _pipes_num_format_pipe__WEBPACK_IMPORTED_MODULE_7__.NumFormatPipe, _pipes_percentage_format_pipe__WEBPACK_IMPORTED_MODULE_8__.PercentageFormatPipe],
      styles: ["a.stat[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2tleS1maW5kaW5ncy1zZWN0aW9uL2tleS1maW5kaW5ncy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4va3ViZXJuZXRlcyUyMHBsYXlncm91bmQvbXNhLWJleW9uZC1jb21wbGlhbmNlL3NyYy9hcHAvZGFzaGJvYXJkL2tleS1maW5kaW5ncy1zZWN0aW9uL2tleS1maW5kaW5ncy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbImEuc3RhdCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiYS5zdGF0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4939:
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/minimum-requirements-section/minimum-requirements-section.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinimumRequirementsSectionComponent: () => (/* binding */ MinimumRequirementsSectionComponent)
/* harmony export */ });
/* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter.model */ 53060);
/* harmony import */ var src_app_utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/wikirate-url-builder */ 73234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.provider */ 74004);
/* harmony import */ var _services_charts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/charts.service */ 33827);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_sector_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sector.provider */ 41398);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 48418);
/* harmony import */ var _export_as_export_as_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../export-as/export-as.component */ 84503);











function MinimumRequirementsSectionComponent_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.getSectorName(), " Sector");
  }
}
function MinimumRequirementsSectionComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function MinimumRequirementsSectionComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 19)(2, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "No data available!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function MinimumRequirementsSectionComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 19)(2, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "No data available!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
class MinimumRequirementsSectionComponent {
  constructor(dataProvider, chartsService, route, sectorProvider) {
    this.dataProvider = dataProvider;
    this.chartsService = chartsService;
    this.route = route;
    this.sectorProvider = sectorProvider;
    this.sector = "all-sectors";
    this.year = "";
    this.isLoading = true;
    this.aus_assessed = 0;
    this.uk_assessed = 0;
    this.uk_legislation_info = "The UK legislation only requires three criteria, none of which relate to the quality of the statement. Therefore, a direct comparison of minimum compliance between Australian and UK is difficult.";
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let sector = params.get('sector');
      if (sector !== null) {
        this.sector = sector;
        this.updateData();
      }
      this.sectorProvider.getSector().next(sector);
    });
    this.route.url.subscribe(val => {
      if (val[1].path === 'meeting-minimum-requirements') this.sectorProvider.getPath().next(val[1].path);
    });
  }
  getSectorName() {
    return this.dataProvider.sectors[this.sector];
  }
  updateData() {
    let uk_company_group = [this.dataProvider.companies_with_assessed_statement.uk];
    let aus_company_group = [this.dataProvider.companies_with_assessed_statement.aus];
    if (this.dataProvider.getCompanyGroup(this.sector) != '') {
      uk_company_group.push(this.dataProvider.getCompanyGroup(this.sector));
      aus_company_group.push(this.dataProvider.getCompanyGroup(this.sector));
    }
    const uk_meet_min_requirements_url = new src_app_utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_1__.WikirateUrlBuilder().setEndpoint(this.dataProvider.metrics.meet_uk_min_requirements).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('value', ['Yes'])).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('company_group', uk_company_group)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)).build();
    const aus_meet_min_requirements_url = new src_app_utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_1__.WikirateUrlBuilder().setEndpoint(this.dataProvider.metrics.meet_aus_min_requirements).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('value', ['Yes'])).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('company_group', aus_company_group)).addFilter(new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)).build();
    this.isLoading = true;
    this.draw_minimum_requirements_pie_chart("Meet Minimun UK Requirements", "div#uk-meet-min-requirements", uk_meet_min_requirements_url, this.dataProvider.metrics.meet_uk_min_requirements, uk_company_group);
    if (this.year >= '2020' || this.year == '' || this.year == 'latest') {
      this.draw_minimum_requirements_pie_chart("Meet Minimun Australian Requirements", "div#aus-meet-min-requirements", aus_meet_min_requirements_url, this.dataProvider.metrics.meet_aus_min_requirements, aus_company_group);
    }
  }
  draw_minimum_requirements_pie_chart(title, element, wikirate_url, meet_min_requirements_metric_id, company_group) {
    const meet_requirements = this.dataProvider.getAnswers(meet_min_requirements_metric_id, [new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ["Yes", "No", "Unknown"]), new _models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", company_group)]);
    meet_requirements.subscribe(results => {
      let assessed = results.length;
      if (company_group.includes(this.dataProvider.companies_with_assessed_statement.uk)) {
        this.uk_assessed = assessed;
      } else {
        this.aus_assessed = assessed;
      }
      // @ts-ignore
      let meet_min_requirements = results.filter(item => item['value'] === "Yes").length;
      this.chartsService.drawPieChart(title, element, [{
        'value': 'Met',
        'count': meet_min_requirements,
        'sum_count': assessed,
        'wikirate_page': wikirate_url
      }, {
        'value': 'Not Met',
        'count': assessed - meet_min_requirements,
        'sum_count': assessed,
        'wikirate_page': wikirate_url
      }], 210, 180, ["#000029", "#FF5C45"], ["Not Met", "Met"], {
        renderer: "svg",
        actions: false
      });
      this.isLoading = false;
    });
  }
  static {
    this.ɵfac = function MinimumRequirementsSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MinimumRequirementsSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_data_provider__WEBPACK_IMPORTED_MODULE_2__.DataProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_charts_service__WEBPACK_IMPORTED_MODULE_3__.ChartsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_sector_provider__WEBPACK_IMPORTED_MODULE_4__.SectorProvider));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: MinimumRequirementsSectionComponent,
      selectors: [["minimum-requirements-section"]],
      decls: 61,
      vars: 25,
      consts: [[1, "container"], ["id", "meeting-min-requirements-section", 1, "section-top", "mt-5", "bg-grey", "p-4"], [1, "row"], [1, "col-md-8"], [1, "title"], ["class", "fst-italic", 4, "ngIf"], [1, "col-md-4"], ["aria-label", "Minimum requirements year filter", 1, "msa-form-select", "ms-md-auto", "bg-grey", 2, "max-width", "120px", "max-height", "50px", "font-size", "0.8em", 3, "ngModelChange", "change", "ngModel"], ["selected", "", 3, "ngValue"], [3, "ngValue"], [1, "row", "pt-md-2", "pt-1"], [1, "col-lg-10", "col-md-12", "fst-italic", "fs-5"], ["class", "row mt-3", "style", "height: 150px", 4, "ngIf"], [1, "row", "mt-2", "justify-items-center", 3, "ngClass"], [1, "p-3", 3, "ngClass"], [1, "text-center"], [1, "h4"], [1, "bi", "bi-exclamation-diamond-fill", "small", "superscript", "ms-1", 3, "ngbTooltip"], [3, "ngClass"], [1, "row", "text-center", "pt-4"], ["id", "uk-meet-min-requirements", 1, "chart-wrapper"], [4, "ngIf"], [1, "row", "pt-4", "justify-content-center", 3, "ngClass"], [1, "col-10"], [1, "quote"], [1, "bi", "bi-exclamation-diamond", "pe-2"], [1, "col-md-6", "p-3", 3, "ngClass"], [1, "row", "text-center"], ["id", "aus-meet-min-requirements", 1, "chart-wrapper"], [1, "section-bottom", "bg-grey", "pe-4", "pb-4"], [3, "sector", "section", "elementId", "ngClass"], [1, "fst-italic"], [1, "row", "mt-3", 2, "height", "150px"], [1, "col-12", "text-center", "align-self-center"], ["role", "status", 1, "spinner-grow", "text-warning", "bg-deep-blue"], [1, "sr-only"], [2, "font-style", "italic"]],
      template: function MinimumRequirementsSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Meeting Minimum Requirements");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, MinimumRequirementsSectionComponent_h6_6_Template, 2, 1, "h6", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6)(8, "select", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function MinimumRequirementsSectionComponent_Template_select_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.year, $event) || (ctx.year = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MinimumRequirementsSectionComponent_Template_select_change_8_listener() {
            return ctx.updateData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "ALL YEARS");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "LATEST");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "2021");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "2019");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "2018");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "2017");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "2016");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 10)(28, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Are company statements compliant with the minimum requirements under the UK or Australian Modern Slavery Act?");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, MinimumRequirementsSectionComponent_div_30_Template, 5, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 13)(32, "div", 14)(33, "div", 15)(34, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "UK Act");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 18)(38, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, MinimumRequirementsSectionComponent_div_40_Template, 4, 0, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 22)(42, "div", 23)(43, "p", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Australian Modern Slavery Act was passed in 2018");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, " and required companies to produce their first statement for financial year 2019. These needed to be submitted within 3 months after year's end (in 2020) but for this first year the government provided companies with an extension due to the impact of the covid pandemic. As a result, ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "most companies submitted statements under the Australian Act from the financial year 2020 onward.");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 26)(52, "div", 27)(53, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Australian Act");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 18)(56, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, MinimumRequirementsSectionComponent_div_58_Template, 4, 0, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "export-as", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.sector !== "all-sectors");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.year);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "latest");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2022);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2021);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2020);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2019);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2018);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2017);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2016);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.year >= "2020" || ctx.year == "" || ctx.year == "latest" ? "col-md-6" : "col-md-12");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbTooltip", ctx.uk_legislation_info);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.uk_assessed > 0 ? "show-element" : "hide-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.uk_assessed == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.year >= "2020" || ctx.year == "" || ctx.year == "latest" ? "hide-element" : "show-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.year >= "2020" || ctx.year == "" || ctx.year == "latest" ? "show-element" : "hide-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.aus_assessed > 0 ? "show-element" : "hide-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.aus_assessed == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("sector", ctx.sector)("section", "meeting-minimum-requirements")("elementId", "meeting-min-requirements-section")("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltip, _export_as_export_as_component__WEBPACK_IMPORTED_MODULE_5__.ExportAsComponent],
      styles: [".warning-message[_ngcontent-%COMP%] {\n  width: 350px !important;\n  max-width: 100% !important;\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21pbmltdW0tcmVxdWlyZW1lbnRzLXNlY3Rpb24vbWluaW11bS1yZXF1aXJlbWVudHMtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2t1YmVybmV0ZXMlMjBwbGF5Z3JvdW5kL21zYS1iZXlvbmQtY29tcGxpYW5jZS9zcmMvYXBwL2Rhc2hib2FyZC9taW5pbXVtLXJlcXVpcmVtZW50cy1zZWN0aW9uL21pbmltdW0tcmVxdWlyZW1lbnRzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuaW5nLW1lc3NhZ2V7XHJcbiAgd2lkdGg6MzUwcHggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4iLCIud2FybmluZy1tZXNzYWdlIHtcbiAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 395:
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/spotlight-metrics/spotlight-metrics.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpotlightMetricsComponent: () => (/* binding */ SpotlightMetricsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/filter.model */ 53060);
/* harmony import */ var src_app_utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/wikirate-url-builder */ 73234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.provider */ 74004);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 48418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_services_sector_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sector.provider */ 41398);
/* harmony import */ var src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/charts.service */ 33827);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _export_as_export_as_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../export-as/export-as.component */ 84503);
/* harmony import */ var _pipes_percentage_format_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/percentage-format.pipe */ 62952);













function SpotlightMetricsComponent_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.getSectorName(), " Sector");
  }
}
function SpotlightMetricsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 35)(3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
function SpotlightMetricsComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37)(1, "h5", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "The Australian Modern Slavery Act");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SpotlightMetricsComponent_ng_template_67_Template_button_click_3_listener() {
      const modal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r5.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 40)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "The Australian Modern Slavery Act was passed in 2018 and required companies to produce their first statement for financial year 2019. These needed to be submitted within 3 months after year's end (in 2020) but for this first year the government provided companies with an extension due to the impact of the covid pandemic. As a result, most companies submitted statements under the Australian Act from the financial year 2020 onward. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 41)(8, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SpotlightMetricsComponent_ng_template_67_Template_button_click_8_listener() {
      const modal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r5.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
class SpotlightMetricsComponent {
  constructor(dataProvider, modalService, route, sectorProvider, chartsService) {
    this.dataProvider = dataProvider;
    this.modalService = modalService;
    this.route = route;
    this.sectorProvider = sectorProvider;
    this.chartsService = chartsService;
    this.sector = "all-sectors";
    this.company_group = [];
    this.year = '';
    this.legislation = 'both';
    this.isLoading = true;
    this.collaborations_and_memberships_url = '#';
    this.workers_engagement_url = '#';
    this.living_wage_commitment_url = '#';
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let sector = params.get('sector');
      if (sector !== null) {
        this.sector = sector;
        this.updateData(this.year);
      }
      this.sectorProvider.getSector().next(sector);
    });
  }
  getSectorName() {
    return this.dataProvider.sectors[this.sector];
  }
  updateData($event) {
    this.isLoading = true;
    this.company_group = [];
    if (this.sector != 'all-sectors') this.company_group.push(this.dataProvider.getCompanyGroup(this.sector));
    if (this.legislation === 'uk') {
      this.company_group.push(this.dataProvider.companies_with_assessed_statement.uk);
    } else if (this.legislation === 'aus') {
      this.company_group.push(this.dataProvider.companies_with_assessed_statement.aus);
    } else {
      this.company_group.push(this.dataProvider.companies_with_assessed_statement.any);
    }
    this.findings();
    return this.year;
  }
  findings() {
    //build urls to link the numbers to wikirate metrics with proper filters applied
    this.collaborations_and_memberships_url = new src_app_utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_1__.WikirateUrlBuilder().setEndpoint(this.dataProvider.metrics.msa_collaborations_and_membership).addFilter(new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('value', ['Yes'])).addFilter(new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('company_group', this.company_group)).addFilter(new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)).build();
    this.workers_engagement_url = new src_app_utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_1__.WikirateUrlBuilder().setEndpoint(this.dataProvider.metrics.msa_workers_engagement).addFilter(new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('value', ['Yes'])).addFilter(new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('company_group', this.company_group)).addFilter(new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)).build();
    this.living_wage_commitment_url = new src_app_utils_wikirate_url_builder__WEBPACK_IMPORTED_MODULE_1__.WikirateUrlBuilder().setEndpoint(this.dataProvider.metrics.msa_living_wage).addFilter(new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('value', ['Yes'])).addFilter(new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('company_group', this.company_group)).addFilter(new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('year', this.year)).build();
    //prepare all requests that need to be executed
    let assessed_filters = [new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ["Yes"]), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.company_group)];
    if (this.year == 'latest') {
      assessed_filters = [new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("value", ["Yes"]), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.company_group)];
    }
    const assessed = this.dataProvider.getAnswers(this.dataProvider.metrics.msa_statement_assessed, assessed_filters);
    const collaborations_and_memberships = this.dataProvider.getAnswers(this.dataProvider.metrics.msa_collaborations_and_membership, [new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.company_group)]);
    const workers_engagement = this.dataProvider.getAnswers(this.dataProvider.metrics.msa_workers_engagement, [new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.company_group)]);
    const living_wage = this.dataProvider.getAnswers(this.dataProvider.metrics.msa_living_wage, [new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("year", this.year), new src_app_models_filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter("company_group", this.company_group)]);
    /**perform the requests using forkJoin to get all the results before start calculating the key findings**/
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([assessed, collaborations_and_memberships, workers_engagement, living_wage]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(([assessed_response, collaborations_and_memberships_response, workers_engagement_response, living_wage_response]) => {
      if (this.year == 'latest') {
        assessed_response = Object.values(assessed_response.reduce((r, o) => {
          r[o.company] = r[o.company] && r[o.company].year > o.year ? r[o.company] : o;
          return r;
        }, {}));
      }
      collaborations_and_memberships_response.filter(item => assessed_response.find(o => o.company == item.company && o.year == item.year));
      workers_engagement_response.filter(item => assessed_response.find(o => o.company == item.company && o.year == item.year));
      living_wage_response.filter(item => assessed_response.find(o => o.company == item.company && o.year == item.year));
      let statements_reporting_workers_engagement = workers_engagement_response.filter(x => x['value'].includes('Yes with workers') || x['value'].includes('Yes with labor unions')).length;
      let statements_reporting_living_wage_commitment = living_wage_response.filter(x => x['value'] == 'Yes').length;
      let statements_reporting_collaborations_and_memberships = collaborations_and_memberships_response.filter(x => x['value'] == 'Yes').length;
      return {
        'assessed_collaborations_and_memberships': collaborations_and_memberships_response.length,
        'collaborations_and_memberships': statements_reporting_collaborations_and_memberships,
        'assessed_workers_engagement': workers_engagement_response.length,
        'workers_engagement': statements_reporting_workers_engagement,
        'assessed_living_wage': living_wage_response.length,
        'living_wage': statements_reporting_living_wage_commitment
      };
    })).subscribe({
      next: results => {
        this.collaborationsAndMemberships = Math.round(results.collaborations_and_memberships * 100 / results.assessed_collaborations_and_memberships), this.workersEngagement = Math.round(results.workers_engagement * 100 / results.assessed_workers_engagement), this.livingWageCommitment = Math.round(results.living_wage * 100 / results.assessed_living_wage);
        this.chartsService.drawSingleBar("Living wage in supply chains", "div#living-wage-chart", [{
          "meet_criteria": results.living_wage,
          "num_of_assessed": results.assessed_living_wage
        }], this.living_wage_commitment_url, {
          renderer: "svg",
          actions: false
        });
        this.chartsService.drawSingleBar("Collaborations and Memberships", "div#collaborations-and-memberships-chart", [{
          "meet_criteria": results.collaborations_and_memberships,
          "num_of_assessed": results.assessed_collaborations_and_memberships
        }], this.collaborations_and_memberships_url, {
          renderer: "svg",
          actions: false
        });
        this.chartsService.drawSingleBar("Workers Engagement", "div#workers-engagement-chart", [{
          "meet_criteria": results.workers_engagement,
          "num_of_assessed": results.assessed_workers_engagement
        }], this.workers_engagement_url, {
          renderer: "svg",
          actions: false
        });
      },
      complete: () => this.isLoading = false
    });
  }
  static {
    this.ɵfac = function SpotlightMetricsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SpotlightMetricsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_data_provider__WEBPACK_IMPORTED_MODULE_2__.DataProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_sector_provider__WEBPACK_IMPORTED_MODULE_3__.SectorProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_charts_service__WEBPACK_IMPORTED_MODULE_4__.ChartsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: SpotlightMetricsComponent,
      selectors: [["spotlight-metrics"]],
      decls: 71,
      vars: 21,
      consts: [["select", ""], ["content", ""], [1, "container"], ["id", "spotlight-metrics-section", 1, "section-top", "mt-5", "bg-grey", "p-4"], [1, "row"], [1, "col-md-4"], [1, "title"], ["class", "fst-italic", 4, "ngIf"], [1, "col-md-8", "ms-md-auto"], [1, "row", "ps-3", "pe-3", "pt-md-0", "pt-2"], ["aria-label", "Default select example", 1, "msa-form-select", "bg-grey", "ms-md-auto", "me-3", "mb-md-0", "mb-1", 2, "max-width", "120px", "max-height", "50px", "font-size", "0.8em", 3, "ngModelChange", "ngModel"], ["value", "", "selected", ""], ["value", "latest"], ["value", "2022"], ["value", "2021"], ["aria-label", "Default select example", 1, "msa-form-select", "bg-grey", 3, "ngModelChange", "change", "ngModel"], ["selected", "", 3, "ngValue"], [3, "ngValue"], ["class", "row mt-3", "style", "height: 150px", 4, "ngIf"], [1, "row", "mt-4", 3, "ngClass"], [1, "row", "mt-2"], [1, "mb-lg-3", "mb-md-3"], [1, "row", "d-flex", "justify-content-center"], [1, "msa-primary-info", "col-lg-6", "col-md-12", "order-2", "p-lg-4", "p-2"], ["id", "living-wage-chart", 1, "chart-wrapper"], [1, "col-lg-6", "col-md-12", "order-1", "align-content-center"], [1, "msa-secondary-info", "mb-2"], [1, "row", "mt-lg-4", "mt-5"], ["id", "collaborations-and-memberships-chart", 1, "chart-wrapper"], ["id", "workers-engagement-chart", 1, "chart-wrapper"], [1, "section-bottom", "bg-grey", "pe-4", "pb-4"], [3, "sector", "section", "elementId", "ngClass"], [1, "fst-italic"], [1, "row", "mt-3", 2, "height", "150px"], [1, "col-12", "text-center", "align-self-center"], ["role", "status", 1, "spinner-grow", "text-warning", "bg-deep-blue"], [1, "sr-only"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"]],
      template: function SpotlightMetricsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Spotlight Metrics");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, SpotlightMetricsComponent_h6_6_Template, 2, 1, "h6", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 8)(8, "div", 9)(9, "select", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SpotlightMetricsComponent_Template_select_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.year, $event) || (ctx.year = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SpotlightMetricsComponent_Template_select_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            const select_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](select_r3.value = ctx.updateData($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "ALL YEARS");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "LATEST");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "2021");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SpotlightMetricsComponent_Template_select_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.legislation, $event) || (ctx.legislation = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SpotlightMetricsComponent_Template_select_change_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.updateData(ctx.year));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "LEGISLATION");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "UK MSA");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "AUS MSA");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, SpotlightMetricsComponent_div_26_Template, 5, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 19)(28, "div", 20)(29, "div", 21)(30, "div", 22)(31, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 25)(34, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, " Low and underpayment of wages in supply chains ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "p")(37, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "percentageFormat");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, " of statements provided a commitment on, or detail action to ensure fair / living wages in at least some parts of their supply chain. Low and underpayment of wages are an indicator of forced labour. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 27)(42, "div", 21)(43, "div", 22)(44, "div", 25)(45, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, " Memberships and Partnerships with multi-stakeholder initiatives. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "p")(48, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](50, "percentageFormat");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, " of statements mention memberships or collaborations with multi-stakeholder initiatives that address modern slavery issues. Such initiatives can enable effective remedy for harms and sharing of good practices. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 27)(55, "div", 21)(56, "div", 22)(57, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 25)(60, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, " workers Engagement ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "p")(63, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](65, "percentageFormat");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, " of statements reported that the company engage with workers or trade unions in the supply chain. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, SpotlightMetricsComponent_ng_template_67_Template, 10, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](70, "export-as", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sector !== "all-sectors");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.year);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.legislation);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", "both");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", "uk");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", "aus");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Only ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](39, 15, ctx.livingWageCommitment), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](50, 17, ctx.collaborationsAndMemberships));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Only ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](65, 19, ctx.workersEngagement), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sector", ctx.sector)("section", "spotlight-metrics")("elementId", "spotlight-metrics-section")("ngClass", !ctx.isLoading ? "show-element" : "hide-element");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _export_as_export_as_component__WEBPACK_IMPORTED_MODULE_5__.ExportAsComponent, _pipes_percentage_format_pipe__WEBPACK_IMPORTED_MODULE_6__.PercentageFormatPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 60708:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class FooterComponent {
  constructor() {
    this.current_year = 2022;
    this.current_year = new Date().getFullYear();
  }
  ngOnInit() {}
  static {
    this.ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["footer"]],
      decls: 18,
      vars: 1,
      consts: [[1, "bg-grey", "mt-5"], [1, "container", "pt-3", "pb-5"], [1, "row"], [1, "text-center", "creators"], [1, "row", "justify-content-center"], [1, "col-4", "text-center"], ["href", "https://walkfree.org/"], ["src", "assets/logos/walk_free_footer_logo.svg", 1, "logo"], [1, "col-4", "text-center", "logo-center"], ["href", "https://wikirate.org"], ["src", "assets/logos/wikirate_logo.svg", 1, "logo"], [1, "bg-orange"], [1, "footer-container"], [1, "col-11"], [1, "mt-1", "text-light-white", "mb-1"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "A collaboration between:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "div", 2)(15, "div", 13)(16, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Copyright \u00A9 ", ctx.current_year, " Minderoo Foundation Pty Ltd. All rights reserved ");
        }
      },
      styles: [".creators[_ngcontent-%COMP%] {\n  font-size: 0.8em !important;\n  letter-spacing: 0.5px !important;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2t1YmVybmV0ZXMlMjBwbGF5Z3JvdW5kL21zYS1iZXlvbmQtY29tcGxpYW5jZS9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdG9ycyB7XHJcbiAgZm9udC1zaXplOiAwLjhlbSAhaW1wb3J0YW50O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuIiwiLmNyZWF0b3JzIHtcbiAgZm9udC1zaXplOiAwLjhlbSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 42152:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_sector_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/sector.provider */ 41398);
/* harmony import */ var _services_data_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.provider */ 74004);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);





function HeaderComponent_li_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_li_33_Template_a_click_1_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onSelectSector(item_r2.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", "dashboard/" + ctx_r2.path + item_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r2.value, " ");
  }
}
class HeaderComponent {
  constructor(sectorProvider, dataProvider) {
    this.sectorProvider = sectorProvider;
    this.dataProvider = dataProvider;
    this.selectedSector = "All Sectors";
    this.selectedSection = "dashboard";
    this.path = "";
    this.sectors = {};
    this.isMenuOpen = false;
    this.sectors = dataProvider.sectors;
  }
  ngOnInit() {
    this.sectorProvider.getSector().subscribe(sector => {
      if (sector === "all-sectors" && sector !== this.selectedSector) {
        this.selectedSector = "All Sectors";
      } else if (sector === "food-and-beverage" && sector !== this.selectedSector) {
        this.selectedSector = "Food & Beverage";
      } else if (sector === "garment-sector" && sector !== this.selectedSector) {
        this.selectedSector = "Garment";
      } else if (sector === "financial-sector" && sector !== this.selectedSector) {
        this.selectedSector = "Financial";
      } else if (sector === "hospitality-sector" && sector !== this.selectedSector) {
        this.selectedSector = "Hospitality";
      }
    });
    this.sectorProvider.getPath().subscribe(path => {
      if (path === "dashboard" || path === "about" || path === "case-studies" || path === "subscribe") this.path = '';else {
        this.path = path + '/';
      }
    });
  }
  onSelectSector(sector) {
    this.selectedSector = sector;
  }
  onSelectSection(section) {
    this.selectedSection = section;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sector_provider__WEBPACK_IMPORTED_MODULE_0__.SectorProvider), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_provider__WEBPACK_IMPORTED_MODULE_1__.DataProvider));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["header-component"]],
      decls: 35,
      vars: 8,
      consts: [[1, "bg-deep-blue", "sticky-top", "ps-lg-5", "pe-lg-5", "ps-md-4", "pe-md-4", "ps-3", "pe-3"], ["id", "navigation_bar"], [1, "nav", "navbar"], ["routerLink", "/dashboard", 1, "navbar-brand", "navbar-expand"], ["src", "assets/logos/walk_free_header_logo.svg", 1, "logo", "ms-1", "mt-1", "mb-1"], [1, "burger", 3, "click"], [1, "navbar", "menu", "ms-md-auto", "ms-0"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "dashboard", "nav-item", "nav-link", "menu-item", 3, "click"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-item", "nav-link", "menu-item", 3, "click"], ["routerLink", "/case-studies", "routerLinkActive", "active", 1, "nav-item", "nav-link", "menu-item", 3, "click"], [1, "nav-item", "dropdown", "col"], ["type", "button", "id", "share", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-item", "nav-link", "text-nowrap", "menu-item"], [1, "share"], [1, "bi", "bi-share-fill", "ms-0", "ms-sm-2"], ["aria-labelledby", "share", 1, "dropdown-menu"], ["target", "_blank", "href", "https://www.linkedin.com/shareArticle?mini=true&url=", 1, "dropdown-item"], [1, "bi", "bi-linkedin", "ms-2", "me-2"], ["target", "_blank", "href", "mailto:info@example.com?&subject=&cc=&bcc=&body=", 1, "dropdown-item"], [1, "bi", "bi-envelope-fill", "ms-2", "me-2"], [1, "filter-dropdown", "dropdown", "ms-2"], ["type", "button", "id", "sector-filter", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "sector-filter"], ["aria-labelledby", "sector-filter", "data-popper-placement", "bottom-start", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "click", "routerLink"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ul", 2)(3, "li")(4, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_6_listener() {
            return ctx.toggleMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 6)(9, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_9_listener() {
            return ctx.onSelectSection("dashboard");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "HOME");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() {
            return ctx.onSelectSection("about");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "ABOUT");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_13_listener() {
            return ctx.onSelectSection("case-studies");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "CASE STUDIES");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "a", 11)(17, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "SHARE");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ul", 14)(21, "li")(22, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "linkedin");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li")(26, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19)(30, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ul", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, HeaderComponent_li_33_Template, 3, 2, "li", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "keyvalue");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.isMenuOpen ? "bi bi-x display-6" : "bi bi-list display-6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-open", ctx.isMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedSector);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 6, ctx.sectors));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.KeyValuePipe],
      styles: ["a.nav-link[_ngcontent-%COMP%]:active {\n  color: #FFDC00 !important;\n}\n\n@media only screen and (max-width: 576px) {\n  .share[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 359px) {\n  .share[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .dashboard[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\na.nav-link[_ngcontent-%COMP%] {\n  color: white !important;\n  padding: 0.4rem 0.8rem !important;\n}\n\na.nav-link.active[_ngcontent-%COMP%] {\n  color: #FFDC00 !important;\n}\n\n.text-yellow[_ngcontent-%COMP%] {\n  color: #FFDC00 !important;\n}\n\n#navigation_bar[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  border-left: 1px solid #eee;\n  display: none;\n  cursor: pointer;\n}\n#navigation_bar[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #999;\n}\n@media (max-width: 768px) {\n  #navigation_bar[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 768px) {\n  #navigation_bar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #navigation_bar[_ngcontent-%COMP%]   .menu.is-open[_ngcontent-%COMP%] {\n    display: block;\n    background: #000029;\n    width: 100%;\n  }\n  #navigation_bar[_ngcontent-%COMP%]   .menu.is-open[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #cccccc;\n  }\n}\n#navigation_bar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  text-decoration: none;\n  display: block;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #454545;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2t1YmVybmV0ZXMlMjBwbGF5Z3JvdW5kL21zYS1iZXlvbmQtY29tcGxpYW5jZS9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSx5QkFBQTtBQ0RKOztBRElFO0VBQ0U7SUFDRSxhQUFBO0VDREo7QUFDRjtBRElFO0VBQ0U7SUFDRSxhQUFBO0VDRko7RURLRTtJQUNFLGFBQUE7RUNISjtBQUNGO0FETUU7RUFDRSx1QkFBQTtFQUNBLGlDQUFBO0FDSko7O0FET0U7RUFDRSx5QkFBQTtBQ0pKOztBRE9FO0VBQ0UseUJBQUE7QUNKSjs7QURTRTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDTko7QURRSTtFQUNFLFdBQUE7QUNOTjtBRFNJO0VBVkY7SUFXSSxjQUFBO0VDTko7QUFDRjtBRFdJO0VBRkY7SUFHSSxhQUFBO0VDUko7RURVSTtJQUNFLGNBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7RUNSTjtFRFVNO0lBQ0UsZ0NBQUE7RUNSUjtBQUNGO0FEWUk7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1ZOIiwic291cmNlc0NvbnRlbnQiOlsiJG1lbnVCcmVha3BvaW50OiA3NjhweDtcclxuXHJcbiAgYS5uYXYtbGluazphY3RpdmUge1xyXG4gICAgY29sb3I6ICNGRkRDMDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5zaGFyZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XHJcbiAgICAuc2hhcmUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXNoYm9hcmQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYS5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGEubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjRkZEQzAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dC15ZWxsb3cge1xyXG4gICAgY29sb3I6ICNGRkRDMDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNuYXZpZ2F0aW9uX2JhciB7XHJcblxyXG4gIC5idXJnZXIge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBpIHtcclxuICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtZW51QnJlYWtwb2ludCkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZW51IHtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1lbnVCcmVha3BvaW50KSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgICAmLmlzLW9wZW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMjk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5tZW51LWl0ZW0ge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtaXRlbSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjNDU0NTQ1O1xyXG4gICAgfVxyXG4gIH1cclxufSIsImEubmF2LWxpbms6YWN0aXZlIHtcbiAgY29sb3I6ICNGRkRDMDAgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2hhcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLnNoYXJlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5kYXNoYm9hcmQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbmEubmF2LWxpbmsge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMC40cmVtIDAuOHJlbSAhaW1wb3J0YW50O1xufVxuXG5hLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjRkZEQzAwICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXllbGxvdyB7XG4gIGNvbG9yOiAjRkZEQzAwICFpbXBvcnRhbnQ7XG59XG5cbiNuYXZpZ2F0aW9uX2JhciAuYnVyZ2VyIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNuYXZpZ2F0aW9uX2JhciAuYnVyZ2VyIGkge1xuICBjb2xvcjogIzk5OTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjbmF2aWdhdGlvbl9iYXIgLmJ1cmdlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjbmF2aWdhdGlvbl9iYXIgLm1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI25hdmlnYXRpb25fYmFyIC5tZW51LmlzLW9wZW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMjk7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI25hdmlnYXRpb25fYmFyIC5tZW51LmlzLW9wZW4gLm1lbnUtaXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XG4gIH1cbn1cbiNuYXZpZ2F0aW9uX2JhciAubWVudSAubWVudS1pdGVtIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0NTQ1NDU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 53060:
/*!****************************************!*\
  !*** ./src/app/models/filter.model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Filter: () => (/* binding */ Filter)
/* harmony export */ });
class Filter {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

/***/ }),

/***/ 52024:
/*!********************************************!*\
  !*** ./src/app/models/valuerange.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValueRange: () => (/* binding */ ValueRange)
/* harmony export */ });
class ValueRange {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
}

/***/ }),

/***/ 44078:
/*!******************************************!*\
  !*** ./src/app/pipes/num-format.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumFormatPipe: () => (/* binding */ NumFormatPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class NumFormatPipe {
  transform(input, args) {
    if (input === undefined) {
      return input;
    }
    if (typeof input === "string" && !Number.isNaN(Number(input))) input = Number(input);else if (typeof input === "string") return input;
    if (Number.isNaN(input)) {
      return '-';
    }
    if (input < 1000) {
      return input;
    }
    return input.toString().slice(0, input.toString().length - 3) + ',' + input.toString().slice(-3);
  }
  static {
    this.ɵfac = function NumFormatPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NumFormatPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "numFormat",
      type: NumFormatPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 62952:
/*!*************************************************!*\
  !*** ./src/app/pipes/percentage-format.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PercentageFormatPipe: () => (/* binding */ PercentageFormatPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class PercentageFormatPipe {
  transform(input, args) {
    if (input === undefined) {
      return '-';
    }
    if (typeof input === "string" && !Number.isNaN(Number(input))) input = Number(input) + '%';else if (typeof input === "string") return input;else if (Number.isNaN(input)) return '-';
    return input + '%';
  }
  static {
    this.ɵfac = function PercentageFormatPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PercentageFormatPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "percentageFormat",
      type: PercentageFormatPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 73944:
/*!**********************************************!*\
  !*** ./src/app/section/section.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionComponent: () => (/* binding */ SectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class SectionComponent {
  constructor() {
    this.sector = "all-sectors";
  }
  ngOnInit() {}
  static {
    this.ɵfac = function SectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SectionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SectionComponent,
      selectors: [["app-section"]],
      decls: 1,
      vars: 0,
      template: function SectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 33827:
/*!********************************************!*\
  !*** ./src/app/services/charts.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartsService: () => (/* binding */ ChartsService)
/* harmony export */ });
/* harmony import */ var _assets_charts_pie_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/charts/pie.json */ 64117);
/* harmony import */ var _assets_charts_simple_bar_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/charts/simple-bar.json */ 52443);
/* harmony import */ var _assets_charts_donut_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/charts/donut.json */ 2315);
/* harmony import */ var _assets_charts_semi_donut_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/charts/semi-donut.json */ 28634);
/* harmony import */ var _assets_charts_single_bar_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/charts/single-bar.json */ 67505);
/* harmony import */ var _assets_charts_bars_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/charts/bars.json */ 52175);
/* harmony import */ var _assets_charts_subgroup_bars_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/charts/subgroup-bars.json */ 18013);
/* harmony import */ var _assets_charts_shankey_chart_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/charts/shankey-chart.json */ 5273);
/* harmony import */ var _assets_charts_radar_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/charts/radar.json */ 69103);
/* harmony import */ var vega_embed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vega-embed */ 52378);
/* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/filter.model */ 53060);
/* harmony import */ var _data_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data.provider */ 74004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore





class ChartsService {
  constructor() {
    this.wikirateApiHost = "https://wikirate.org";
  }
  addListenerOnChartClick(result) {
    const view = result.view;
    //add Signal Listener for open url in a new tab when user clicks on the bar chart
    view.addSignalListener('click', (name, value) => {
      if (value) {
        window.open(value, '_blank');
      }
    });
    view.addEventListener('click', () => {
      view.signal('click', null).run();
    });
  }
  drawRadarChart(title, element, values, url, options) {
    var chart = JSON.parse(JSON.stringify(_assets_charts_radar_json__WEBPACK_IMPORTED_MODULE_8__));
    // bar['signals']['0']['value'] = title
    chart['data'][0]['values'] = values;
    // bar['data'][1]['transform'][2]['expr'] = "'" + `${url}` + "'"
    return (0,vega_embed__WEBPACK_IMPORTED_MODULE_9__["default"])(element, chart, options);
  }
  drawSingleBar(title, element, values, url, options) {
    var bar = JSON.parse(JSON.stringify(_assets_charts_single_bar_json__WEBPACK_IMPORTED_MODULE_4__));
    bar['signals']['0']['value'] = title;
    bar['data'][0]['values'] = values;
    bar['data'][1]['transform'][2]['expr'] = "'" + `${url}` + "'";
    return (0,vega_embed__WEBPACK_IMPORTED_MODULE_9__["default"])(element, bar, options).then(result => this.addListenerOnChartClick(result));
  }
  drawShankeyChart(element, values, options) {
    var chart = JSON.parse(JSON.stringify(_assets_charts_shankey_chart_json__WEBPACK_IMPORTED_MODULE_7__));
    chart['data'][0]['values'] = values;
    return (0,vega_embed__WEBPACK_IMPORTED_MODULE_9__["default"])(element, chart, options);
  }
  drawPieChart(title, element, values, width, height, colors, domain, options) {
    var pie = JSON.parse(JSON.stringify(_assets_charts_pie_json__WEBPACK_IMPORTED_MODULE_0__));
    pie["description"] = title;
    pie["data"][0]["values"] = values;
    pie["width"] = width;
    pie["height"] = height;
    pie["scales"][0]["range"] = colors;
    pie["scales"][0]["domain"] = domain;
    return (0,vega_embed__WEBPACK_IMPORTED_MODULE_9__["default"])(element, pie, options).then(result => this.addListenerOnChartClick(result));
  }
  drawDonutChart(title, element, values, width, height, colors, domain, options) {
    var donut = JSON.parse(JSON.stringify(_assets_charts_donut_json__WEBPACK_IMPORTED_MODULE_2__));
    donut["title"]["text"] = title;
    donut["data"][0]["values"] = values;
    donut["width"] = width;
    donut["height"] = height;
    donut["scales"][0]["range"] = colors;
    donut["scales"][0]["domain"] = domain;
    return (0,vega_embed__WEBPACK_IMPORTED_MODULE_9__["default"])(element, donut, options).then(result => this.addListenerOnChartClick(result));
  }
  drawSemiDonutChart(title, element, values, width, colors, domain, options) {
    var donut = JSON.parse(JSON.stringify(_assets_charts_semi_donut_json__WEBPACK_IMPORTED_MODULE_3__));
    donut["title"]["text"] = title;
    donut["data"][0]["values"] = values;
    donut["width"] = width;
    donut["scales"][0]["range"] = colors;
    donut["scales"][0]["domain"] = domain;
    return (0,vega_embed__WEBPACK_IMPORTED_MODULE_9__["default"])(element, donut, options).then(result => this.addListenerOnChartClick(result));
  }
  drawSimpleBarChart(title, element, values, options) {
    var simple_bar = JSON.parse(JSON.stringify(_assets_charts_simple_bar_json__WEBPACK_IMPORTED_MODULE_1__));
    simple_bar["title"]["text"] = title;
    simple_bar["data"][0]["values"] = values;
    return (0,vega_embed__WEBPACK_IMPORTED_MODULE_9__["default"])(element, simple_bar, options).then(result => this.addListenerOnChartClick(result));
  }
  drawSubgroupsBarChart(title, element, width, meets_requirements_metric_id, metric, subgroups, groups, year, company_groups, options) {
    let bars = JSON.parse(JSON.stringify(_assets_charts_subgroup_bars_json__WEBPACK_IMPORTED_MODULE_6__));
    let data = [];
    let filters = [new _models_filter_model__WEBPACK_IMPORTED_MODULE_10__.Filter('company_group', company_groups), new _models_filter_model__WEBPACK_IMPORTED_MODULE_10__.Filter('year', year)];
    data.push({
      "name": 'meets_min_requirements',
      "url": `${this.wikirateApiHost}/~${meets_requirements_metric_id}+Answer.json?${_data_provider__WEBPACK_IMPORTED_MODULE_11__.DataProvider.getParams(filters).toString()}`,
      "transform": [{
        "type": "formula",
        "as": "key",
        "expr": "datum.company + ',' + datum.year"
      }]
    });
    if (year == 'latest') {
      filters.pop();
    }
    data.push({
      "name": "answers",
      "url": `${this.wikirateApiHost}/~${metric}+Answer.json?${_data_provider__WEBPACK_IMPORTED_MODULE_11__.DataProvider.getParams(filters).toString()}`,
      "transform": [{
        "type": "formula",
        "as": "key",
        "expr": "datum.company + ',' + datum.year"
      }, {
        "type": "lookup",
        "from": "meets_min_requirements",
        "key": "key",
        "fields": ["key"],
        "values": ["value"],
        "as": ["meets_min_requirements"]
      }, {
        "type": "filter",
        "expr": "datum.meets_min_requirements == 'Yes' || datum.meets_min_requirements == 'No' || datum.meets_min_requirements == 'Unknown'"
      }, {
        "type": "formula",
        "expr": "split(datum.value, ', ')",
        "as": "value_array"
      }]
    });
    data.push(subgroups);
    data.push(groups);
    data.push(bars['data'][4]);
    bars['description'] = title;
    bars['data'] = data;
    bars['width'] = width;
    return (0,vega_embed__WEBPACK_IMPORTED_MODULE_9__["default"])(element, bars, options);
  }
  drawBarChart(title, element, width, height, meets_requirements_metric_id, metrics, year, company_groups, options) {
    let bars = JSON.parse(JSON.stringify(_assets_charts_bars_json__WEBPACK_IMPORTED_MODULE_5__));
    let data = [];
    let filters = [new _models_filter_model__WEBPACK_IMPORTED_MODULE_10__.Filter('company_group', company_groups), new _models_filter_model__WEBPACK_IMPORTED_MODULE_10__.Filter('year', year)];
    data.push({
      "name": 'meets_min_requirements',
      "url": `${this.wikirateApiHost}/~${meets_requirements_metric_id}+Answer.json?${_data_provider__WEBPACK_IMPORTED_MODULE_11__.DataProvider.getParams(filters).toString()}`,
      "transform": [{
        "type": "formula",
        "as": "key",
        "expr": "datum.company + ',' + datum.year"
      }]
    });
    if (year == 'latest') {
      filters.pop();
    }
    data.push({
      "name": "answers",
      // @ts-ignore
      "url": `${this.wikirateApiHost}/~${metrics[0]['id']}+Answer.json?${_data_provider__WEBPACK_IMPORTED_MODULE_11__.DataProvider.getParams(filters).toString()}`
    });
    let short_labels = [];
    for (let metric of metrics) {
      short_labels.push(metric['short_label']);
      let condition = '';
      // @ts-ignore
      for (let value of metric['filter_value']) {
        condition += 'indexof(datum.value, \'' + value + '\') >= 0 || ';
      }
      condition = condition.substring(0, condition.length - 3);
      data.push({
        name: metric['short_label'],
        "source": ["answers"],
        "transform": [{
          "type": "formula",
          "as": "key",
          "expr": "datum.company + ',' + datum.year"
        }, {
          "type": "lookup",
          "from": "meets_min_requirements",
          "key": "key",
          "fields": ["key"],
          "values": ["value"],
          "as": ["meets_min_requirements"]
        }, {
          "type": "filter",
          "expr": "datum.meets_min_requirements == 'Yes' || datum.meets_min_requirements == 'No' || datum.meets_min_requirements == 'Unknown'"
        }, {
          "type": "formula",
          "as": "accepted_value",
          "expr": "if(" + condition + ", true, false)"
        }, {
          "type": "aggregate",
          "groupby": ["accepted_value"]
        }, {
          "type": "impute",
          "key": "accepted_value",
          "keyvals": [true],
          "field": "count",
          "value": 0
        }, {
          "type": "joinaggregate",
          "fields": ["count"],
          "ops": ["sum"]
        }, {
          "type": "filter",
          "expr": "datum.accepted_value == true"
        }]
      });
    }
    data.push({
      'name': 'metrics',
      'values': metrics
    });
    data.push({
      "name": "counts",
      "source": short_labels,
      "transform": [{
        "type": "window",
        "ops": ["row_number"],
        "as": ["seq"]
      }, {
        "type": "lookup",
        "from": "metrics",
        "key": "seq",
        "fields": ["seq"],
        "values": ["label", "metric", "color", "filter_value"],
        "as": ["title", "wikirate_page", "color", "filter_value"]
      }, {
        "type": "formula",
        "expr": "datum.count/datum.sum_count",
        "as": "percentage"
      }, {
        "type": "formula",
        "expr": "format(datum.count / datum.sum_count, '.0%')",
        "as": "percent_label"
      }, {
        "type": "formula",
        "expr": "datum.count + ' out of ' + datum.sum_count + ' statements'",
        "as": "count_label"
      }, {
        "type": "formula",
        "expr": "{ value: datum.filter_value }",
        "as": "filter"
      }]
    });
    bars['description'] = title;
    bars['data'] = data;
    bars['width'] = width;
    bars['height'] = height;
    return (0,vega_embed__WEBPACK_IMPORTED_MODULE_9__["default"])(element, bars, options);
  }
  static {
    this.ɵfac = function ChartsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ChartsService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
      token: ChartsService,
      factory: ChartsService.ɵfac
    });
  }
}

/***/ }),

/***/ 74004:
/*!*******************************************!*\
  !*** ./src/app/services/data.provider.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataProvider: () => (/* binding */ DataProvider)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _models_valuerange_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/valuerange.model */ 52024);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);





class DataProvider {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.isDataLoadedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.isDataLoaded$ = this.isDataLoadedSubject.asObservable();
    this.cache = {};
    this.wikirateApiHost = "https://wikirate.org";
    this.company_groups = {
      garment: 'MSA_Garment',
      food_and_beverage: 'MSA_Food_Beverage',
      hospitality: 'MSA_Hospitality',
      financial: 'MSA_Financial',
      renewable_energy: 'MSA_Renewable_Energy',
      electronics: 'MSA_Electronics',
      none: ''
    };
    this.companies_with_assessed_statement = {
      uk: "Companies_with_assessed_UK_MSA_statement",
      aus: "Companies_with_assessed_Australian_MSA_statement",
      any: "Companies_with_assessed_MSA_statement"
    };
    this.sectors = {
      'all-sectors': 'All Sectors',
      'food-and-beverage': 'Food & Beverage',
      'garment-sector': 'Garment',
      'financial-sector': 'Financial',
      'hospitality-sector': 'Hospitality',
      'renewable-energy': '(Renewable) Energy',
      'electronics': 'Electronics'
    };
    this.metrics = {
      msa_registry_submission: 12536930,
      modern_slavery_statement: 1827651,
      msa_statement_assessed: 12621772,
      aus_msa_statement_assessed: 12602630,
      uk_msa_statement_assessed: 12602618,
      meet_uk_min_requirements: 6901749,
      meet_aus_min_requirements: 12601871,
      msa_meet_min_requirements: 12642257,
      aus_beyond_compliance_disclosure_rate: 12620676,
      uk_beyond_compliance_disclosure_rate: 6899063,
      msa_beyond_compliance: 12620974,
      msa_disclosure_rate: 14554858,
      msa_incidents_identified: 1831964,
      msa_policy_beyond_t1: 6915846,
      msa_risks_identified: 6916242,
      msa_supply_chain_disclosure: 1831908,
      msa_incidents_remediation: 2722444,
      msa_supply_chain_due_dilligence: 6915961,
      msa_collaborations_and_membership: 15850813,
      msa_workers_engagement: 15928634,
      msa_living_wage: 14019233
    };
  }
  loadData(paths) {
    const requests = paths.map(path => this.httpClient.get(path));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(requests);
  }
  markDataAsLoaded() {
    this.isDataLoadedSubject.next(true);
  }
  getAnswers(metric_id, filters) {
    let url = `${this.wikirateApiHost}/~${metric_id}+Answer.json`;
    return this.get(url, DataProvider.getParams(filters));
  }
  static getParams(filters) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
    for (let filter of filters) {
      if (Array.isArray(filter.value)) {
        for (let single_value of filter.value) {
          params = params.append("filter[" + filter.name + "][]", single_value);
        }
      } else if (filter.value instanceof _models_valuerange_model__WEBPACK_IMPORTED_MODULE_0__.ValueRange) {
        params = params.append("filter[" + filter.name + "][from]", filter.value.from);
        params = params.append("filter[" + filter.name + "][to]", filter.value.to);
      } else {
        params = params.append("filter[" + filter.name + "]", filter.value);
      }
    }
    params = params.append("limit", 0);
    params = params.append("view", "answer_list");
    return params;
  }
  static getUrlParams(filters) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
    for (let filter of filters) {
      if (Array.isArray(filter.value)) {
        for (let single_value of filter.value) {
          params = params.append("filter[" + filter.name + "][]", single_value);
        }
      } else if (filter.value instanceof _models_valuerange_model__WEBPACK_IMPORTED_MODULE_0__.ValueRange) {
        params = params.append("filter[" + filter.name + "][from]", filter.value.from);
        params = params.append("filter[" + filter.name + "][to]", filter.value.to);
      } else {
        params = params.append("filter[" + filter.name + "]", filter.value);
      }
    }
    return params;
  }
  getCompanyGroup(sector) {
    if (sector === 'garment-sector') {
      return this.company_groups.garment;
    } else if (sector === 'food-and-beverage') {
      return this.company_groups.food_and_beverage;
    } else if (sector === 'hospitality-sector') {
      return this.company_groups.hospitality;
    } else if (sector === 'financial-sector') {
      return this.company_groups.financial;
    } else if (sector === 'renewable-energy') {
      return this.company_groups.renewable_energy;
    } else if (sector === 'electronics') {
      return this.company_groups.electronics;
    } else {
      return this.company_groups.none;
    }
  }
  get(url, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams(), useCache = true) {
    const cacheKey = url + JSON.stringify(params);
    if (useCache && this.cache[cacheKey]) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.cache[cacheKey]);
    }
    return this.httpClient.get(url, {
      params: params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(data => {
      this.cache[cacheKey] = data;
    }));
  }
  clearCache() {
    this.cache = {};
  }
  static {
    this.ɵfac = function DataProvider_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: DataProvider,
      factory: DataProvider.ɵfac
    });
  }
}

/***/ }),

/***/ 41398:
/*!*********************************************!*\
  !*** ./src/app/services/sector.provider.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectorProvider: () => (/* binding */ SectorProvider)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class SectorProvider {
  constructor() {
    this.sector = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.path = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.sector.next("all-sectors");
    this.path.next("dashboard");
  }
  getSector() {
    return this.sector;
  }
  getPath() {
    return this.path;
  }
  static {
    this.ɵfac = function SectorProvider_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SectorProvider)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SectorProvider,
      factory: SectorProvider.ɵfac
    });
  }
}

/***/ }),

/***/ 60606:
/*!*************************************************!*\
  !*** ./src/app/slider/slider-item.directive.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderItemDirective: () => (/* binding */ SliderItemDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class SliderItemDirective {
  constructor() {}
  static {
    this.ɵfac = function SliderItemDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SliderItemDirective)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SliderItemDirective,
      selectors: [["", "appSliderItem", ""]]
    });
  }
}

/***/ }),

/***/ 80280:
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderComponent: () => (/* binding */ SliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _slider_item_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider-item.directive */ 60606);



const _c0 = ["slides"];
const _c1 = [[["", "appSliderItem", ""]]];
const _c2 = ["[appSliderItem]"];
class SliderComponent {
  constructor() {
    this.slidesIndex = 0;
  }
  get currentItem() {
    //@ts-ignore
    return this.items.find((item, index) => index === this.slidesIndex);
  }
  ngAfterContentInit() {}
  ngAfterViewInit() {}
  onClickLeft() {
    //@ts-ignore
    this.slidesContainer.nativeElement.scrollLeft -= this.currentItem.nativeElement.offsetWidth;
    if (this.slidesIndex > 0) {
      this.slidesIndex--;
    }
  }
  onClickRight() {
    this.slidesContainer.nativeElement.scrollLeft += this.currentItem.nativeElement.offsetWidth;
    if (this.slidesIndex < this.items.length - 1) {
      this.slidesIndex++;
    }
  }
  static {
    this.ɵfac = function SliderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SliderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SliderComponent,
      selectors: [["app-slider"]],
      contentQueries: function SliderComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _slider_item_directive__WEBPACK_IMPORTED_MODULE_0__.SliderItemDirective, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.items = _t);
        }
      },
      viewQuery: function SliderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slidesContainer = _t.first);
        }
      },
      ngContentSelectors: _c2,
      decls: 9,
      vars: 0,
      consts: [["slides", ""], [1, "slider-container"], [1, "text-center"], ["color", "primary", 1, "button", 3, "click"], [1, "bi", "bi-chevron-left"], [1, "button", 3, "click"], [1, "bi", "bi-chevron-right"], [1, "slides"]],
      template: function SliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderComponent_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onClickLeft());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderComponent_Template_a_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onClickRight());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](8, 0, ["#sliderItem", ""]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
      },
      styles: [".slider-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.slides[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: scroll;\n  scroll-behavior: smooth;\n}\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\ni[_ngcontent-%COMP%] {\n  -webkit-text-stroke: 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL2t1YmVybmV0ZXMlMjBwbGF5Z3JvdW5kL21zYS1iZXlvbmQtY29tcGxpYW5jZS9zcmMvYXBwL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQ0o7QURDSTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtBQ0NSOztBRElBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDREo7O0FESUE7RUFDSSx3QkFBQTtBQ0RKIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zbGlkZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmNvbnRyb2xzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaSB7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHg7XHJcbn0iLCIuc2xpZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zbGlkZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuLnNsaWRlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmkge1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 40983:
/*!**************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscribeComponent: () => (/* binding */ SubscribeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_sector_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/sector.provider */ 41398);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




class SubscribeComponent {
  constructor(route, sectorProvider) {
    this.route = route;
    this.sectorProvider = sectorProvider;
  }
  ngOnInit() {
    this.route.url.subscribe(val => {
      if (val[0].path === 'subscribe') this.sectorProvider.getPath().next(val[0].path);
    });
  }
  static {
    this.ɵfac = function SubscribeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SubscribeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sector_provider__WEBPACK_IMPORTED_MODULE_0__.SectorProvider));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SubscribeComponent,
      selectors: [["app-subscribe"]],
      decls: 40,
      vars: 0,
      consts: [["id", "subscribe", 1, "section", "mt-2", "bg-white", "p-4"], [1, "row", "justify-content-center"], [1, "col-xl-6", "col-lg-8", "col-md-10", "col-sm-11"], [1, "d-block", "mt-3", "text-center"], [1, "mx-5", "mt-3"], ["id", "subForm", "action", "https://www.createsend.com/t/subscribeerror?description=", "method", "post", "data-id", "92D4C54F0FEC16E5ADC2B1904DE9ED1A12EE3E2054BC84C8727F8FF869E2E4F56850AC318310431E4639179F5B6D1E489B5EC432E8407D7ECF9927E19D0AEA55", 1, "js-cm-form"], [1, "form-label"], ["autocomplete", "Email", "aria-label", "Email", "id", "fieldEmail", "maxlength", "200", "name", "cm-jktrulk-jktrulk", "required", "", "type", "email", 1, "js-cm-email-input", "qa-input-email", "form-control"], [1, "form-label", "mt-2"], ["aria-label", "First Name", "id", "fieldjkdllhj", "maxlength", "200", "name", "cm-f-jkdllhj", 1, "form-control"], ["aria-label", "Last Name", "id", "fieldjkdllht", "maxlength", "200", "name", "cm-f-jkdllht", 1, "form-control"], ["aria-label", "Organisation", "id", "fieldjkujjky", "maxlength", "200", "name", "cm-f-jkujjky", 1, "form-control"], [1, "form-check", "mt-1"], ["aria-required", "", "id", "cm-privacy-consent", "name", "cm-privacy-consent", "required", "", "type", "checkbox", 1, "form-check-input"], ["for", "cm-privacy-consent", 1, "form-check-label"], ["id", "cm-privacy-consent-hidden", "name", "cm-privacy-consent-hidden", "type", "hidden", "value", "true"], ["href", "https://www.walkfree.org/privacy-policy/", "rel", "noopener", "target", "_blank", 1, "small"], [1, "row"], [1, "col-12", "text-center"], ["type", "submit", 1, "button", "orange-button", "mb-2"]],
      template: function SubscribeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Subscribe to receive updates on dashboard data and our upcoming research and advocacy related to Modern Slavery");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div")(7, "form", 5)(8, "div")(9, "div")(10, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Email ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div")(14, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "First Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div")(18, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Last Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div")(22, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Organisation ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div")(26, "div")(27, "div")(28, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Yes, I want to receive occasional updates from Walk Free");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p")(34, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "View our privacy policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17)(37, "div", 18)(38, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Subscribe");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 73234:
/*!***********************************************!*\
  !*** ./src/app/utils/wikirate-url-builder.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WikirateUrlBuilder: () => (/* binding */ WikirateUrlBuilder)
/* harmony export */ });
/* harmony import */ var _models_valuerange_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/valuerange.model */ 52024);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);


class WikirateUrlBuilder {
  constructor() {
    this.baseUrl = 'https://wikirate.org';
    this.endpoint = '';
    this.filters = [];
  }
  setEndpoint(endpoint) {
    this.endpoint = typeof endpoint === 'number' ? `~${endpoint}` : endpoint;
    return this;
  }
  addFilter(filter) {
    this.filters.push(filter);
    return this;
  }
  build() {
    let url = `${this.baseUrl}/${this.endpoint}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    for (let filter of this.filters) {
      if (Array.isArray(filter.value)) {
        for (let single_value of filter.value) {
          params = params.append("filter[" + filter.name + "][]", single_value);
        }
      } else if (filter.value instanceof _models_valuerange_model__WEBPACK_IMPORTED_MODULE_0__.ValueRange) {
        params = params.append("filter[" + filter.name + "][from]", filter.value.from);
        params = params.append("filter[" + filter.name + "][to]", filter.value.to);
      } else {
        params = params.append("filter[" + filter.name + "]", filter.value);
      }
    }
    params = params.append("tab", "metric_answer");
    return `${url}?${params.toString()}`;
  }
}

/***/ }),

/***/ 45312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 45312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 20069:
/*!**************************************************!*\
  !*** ./src/assets/case-studies/electronics.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"subject":"Remediations","key":"remediations","description":"Providing support and compensation to victims and survivors of modern slavery is critical. When remediation is done effectively, it focuses on restoring dignity, ensuring recovery, and preventing re-exploitation through comprehensive programmes. These efforts are essential for businesses to fulfill their ethical responsibilities and promote long-term rehabilitation of affected workers.","case_studies":[{"company":"Cisco Systems","wikirate_answer":"https://wikirate.org/Walk_Free+MSA_incidents_remediation_revised+Cisco_Systems+2023","quote":"As part of our normal processes, we take two main corrective actions to address bonded labor risks: drive suppliers to absorb recruitment fees previously passed onto workers and remediate and facilitate reimbursements to affected workers, irrespective of whether the charging of such fees is legal in the relevant jurisdiction.","page":"5","source":"https://wikirate.org/Source_000195983?tab=preview"},{"company":"Microsoft","wikirate_answer":"https://wikirate.org/Walk_Free+MSA_incidents_remediation_revised+Microsoft_Corporation+2022","quote":"In cases where our audit findings determined that a factory employee paid recruitment or employment fees or were underpaid according to legal requirements, we required the nonconformant suppliers to repay employees for any recruitment or employment fees paid or insufficient wages based on local law and Microsoft requirements. In FY22, suppliers in Microsoft’s Devices repaid $252,367 of recruitment fees and insufficient wages to 13,728 supplier employees, including $62,329 of recruitment fees to 6,888 supplier employees.","page":"10","source":"https://wikirate.org/Source_000178459?tab=preview"},{"company":"Burberry Group PLC","wikirate_answer":"https://wikirate.org/Walk_Free+MSA_incidents_remediation_revised+Burberry_Group_plc+2020","quote":"In early 2020, in an area of our supply chain where we identified a group of migrant workers paying fees during a complex recruitment journey, we started working with a local NGO, Issara Institute, and two suppliers who operate four facilities to build worker voice and remediate any fees paid by existing workers as well as workers that had since left their employment.","page":"12","source":"https://wikirate.org/Source_000127486?tab=preview"}]},{"subject":"Identifying incidents","key":"identifying_incidents","description":"Identifying and transparently reporting on incidents of modern slavery in supply chains is key to addressing the issue effectively. Given the scale of forced labour, particularly in high-risk sectors, it\'s likely that no company is entirely free from incidents of modern slavery. Reporting on incidents also provides valuable data for developing more effective prevention strategies and improving overall supply chain transparency.","case_studies":[{"company":"Asos","wikirate_answer":"https://wikirate.org/Walk_Free+MSA_incidents_identified+Asos+2022","quote":"In 2021, we identified a breach of our Code of Conduct with workers underpaid the legal minimum wage since April 2020 in Karnataka, India; this was part of a widespread and much-reported issue in the province. We worked with our supply chain partners in Karnataka to ensure all outstanding arrears have been paid to the workers.","page":"14","source":"https://wikirate.org/Source_000175611?tab=preview"}]},{"subject":"Risk management","key":"risk_management","description":"Risk management involves comprehensive assessment and mitigation of modern slavery risks in both direct operations and extended supply chains. This proactive approach is key to preventing exploitation before it occurs and demonstrates a company\'s commitment to due diligence. Effective risk management strategies can significantly reduce the likelihood of modern slavery incidents.","case_studies":[{"company":"Canon UK Limited","wikirate_answer":"https://wikirate.org/Walk_Free+MSA_risk_management_revised+CANON_UK_LIMITED+2022","quote":"In 2022, 57 production sites in major business areas were assessed using RBA’s SAQ and 16 sites in Japan and abroad underwent external audits by RBA. The audits results concluded nonconformance due to differences between requirements of RBA code of conduct and local laws and company policies.","page":"5","source":"https://wikirate.org/Source_000189375?tab=preview"},{"company":"Adidas","wikirate_answer":"https://wikirate.org/Walk_Free+MSA_risk_management_revised+Adidas_UK+2021","quote":"Responses received through the \'Workers Voice\' platform are carefully tracked by adidas, using KPIs and dashboard reviews, case satisfaction ratings and on-site worker interviews. This allows us to evaluate the efficacy of the grievance channels, see major cases in real time and undertake timely interventions, where necessary. It also helps us understand the main challenges and labour rights issues in a factory and track how the factory management and their HR teams resolve cases and communicate their findings.","page":"4","source":"https://wikirate.org/Source_000172060?tab=preview"}]},{"subject":"Living Wage","key":"living_wage","description":"Ensuring a living wage is fundamental in reducing workers\' vulnerability to exploitation and forced labour. These examples highlight how businesses can implement fair compensation practices that allow workers to meet their basic needs and those of their families. By promoting living wages, companies contribute to breaking the cycle of poverty that often leads to modern slavery.","case_studies":[{"company":"Hewlett Packard","wikirate_answer":"https://wikirate.org/Walk_Free+Living_wage_in_supply_chains+Hewlett_Packard_Enterprise+2022","quote":"HPE recognizes forced labor and wage risks are often linked. We continued to actively participate in the RBA taskforce on living wages, and conducted additional engagement with peer companies to specifically research and plan how to introduce living wage measures across the electronics supply chain. No single electronics company can achieve this without collective action. In FY22, we began planning our practical pilot program for implementing a living wage, including trialing different approaches, and engaging with suppliers. This pilot will occur in 2023.","page":"15","source":"https://wikirate.org/Source_000187638?tab=preview"},{"company":"Bulb Energy","wikirate_answer":"https://wikirate.org/Walk_Free+Living_wage_in_supply_chains+BULB_ENERGY_LTD+2020","quote":"We also assess whether our suppliers pay their employees the Living Wage, extending this assessment to their sub-contractors (where used) as well. All employees, suppliers or contractors that work on-site are paid the Living Wage.","page":"2","source":"https://wikirate.org/Source_000167362?tab=preview"}]},{"subject":"Worker Engagement","key":"worker_engagement","description":"Engaging workers directly is vital for identifying issues early, empowering vulnerable populations, and creating a culture of trust and transparency. It ensures that anti-slavery efforts are informed by the experiences and needs of those most at risk.","case_studies":[{"company":"NXP Semiconductors","wikirate_answer":"https://wikirate.org/Walk_Free+MSA_Workers_Engagement+NXP_Semiconductors+2022","quote":"During a supplier audit, the auditor tests the grievance mechanism thoroughly. During a private worker interview, questions regarding the ways to report a grievance are discussed. After the interview, the auditor provides the worker with the NXP third-party grievance card, which they can use at any time and for any reason to make an anonymous report in the local language.","page":"69","source":"https://wikirate.org/Source_000195297?tab=preview"},{"company":"Apple","wikirate_answer":"https://wikirate.org/Walk_Free+MSA_Workers_Engagement+Apple_Inc+2022","quote":"Directly engaging rights-holders is an integral part of our assessment process, and we interview tens of thousands of supplier employees each year about their workplace experience. Participation in interviews is completely voluntary, and employees are selected randomly through a sampling methodology that seeks broad representation across the facility and employee population.","page":"9","source":"https://wikirate.org/Source_000191782?tab=preview"}]},{"subject":"Purchasing practices","key":"purchasing_practices","description":"This area focuses on aligning procurement strategies with ethical standards to create a responsible supply chain. Businesses can adjust their purchasing practices to prevent supplier exploitation and promote fair labour conditions.","case_studies":[{"company":"Fujifilm Australia","wikirate_answer":"https://wikirate.org/Walk_Free+MSA_Purchasing_Practices+FUJIFILM_AUSTRALIA_PTY_LTD+2021","quote":"We commenced review of our own payment terms with small to medium suppliers to ensure that we do not inadvertently or indirectly create a risk of modern slavery in our supply chain. Our continued review of payment terms, especially to small to medium businesses (SMB), shows that 66% of the total value of SMB invoices are paid within 21 days rising to 76% of the SMB total value paid within 30 days and 91% of the SMB value paid within 40 days","page":"11","source":"https://wikirate.org/Source_000192429/?tab=preview"}]}]');

/***/ }),

/***/ 70167:
/*!*****************************************************************!*\
  !*** ./src/assets/charts-params/beyond-compliance-metrics.json ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"seq":1,"id":1831852,"metric":"Business_Human_Rights_Resource_Centre+MSA_statement_signed","question":"Was the company\'s Modern Slavery Act statement signed by an appropriate person?","label":"Signed by appropriate person","break_down_label":["Signed by","appropriate person"],"short_label":"signed","color":0,"filter_value":["Signed by CEO","Signed by Director","Signed by Managing Director","Signed by Chairman"],"aus_color":"bg-deep-orange","uk_color":"bg-deep-orange","aus_color_hex":"#FF5C45","uk_color_hex":"#FF5C45"},{"seq":2,"id":1827915,"metric":"Business_Human_Rights_Resource_Centre+MSA_Statement_Approval","question":"Was the company\'s Modern Slavery Act statement explicitly approved by the board of directors (or equivalent management body)?","label":"Board approval","break_down_label":["Board approval"],"short_label":"approved","color":0,"filter_value":["Approved by Board"],"aus_color":"bg-deep-orange","uk_color":"bg-deep-orange","aus_color_hex":"#FF5C45","uk_color_hex":"#FF5C45"},{"seq":3,"id":12552057,"metric":"Walk_Free+MSA_Statement_Publication","question":"Does the company either publish their statement on their homepage (UK) or provide the statement to the registry (Australia)?","label":"Statement publication","break_down_label":["Statement publication"],"short_label":"statement_publication","color":0,"filter_value":["Yes"],"aus_color":"bg-deep-orange","uk_color":"bg-deep-orange","aus_color_hex":"#FF5C45","uk_color_hex":"#FF5C45"},{"seq":4,"id":8772491,"metric":"Walk_Free+MSA_Consultation_Process","question":"Does the statement describe consulting with any entities that it owns or controls?","label":"Consultation process","break_down_label":["Consultation","process"],"short_label":"consultation_process","color":0,"filter_value":["Yes"],"aus_color":"bg-deep-orange","uk_color":"bg-deep-blue","aus_color_hex":"#FF5C45","uk_color_hex":"#000029"},{"seq":5,"id":5454264,"metric":"Walk_Free+MSA_Organizational_structure_and_operations","question":"Does the company disclose the ownership structures (or business models) of its brands, subsidiaries, and other businesses?","label":"Organizational structure and operations","break_down_label":["Organizational structure","and operations"],"short_label":"organizational_structure","color":0,"filter_value":["Yes"],"aus_color":"bg-deep-orange","uk_color":"bg-deep-blue","aus_color_hex":"#FF5C45","uk_color_hex":"#000029"},{"seq":6,"id":1831908,"metric":"Walk_Free+MSA_supply_chain_disclosure","question":"Does the company\'s statement name the suppliers in their supply chain and/or the geographic regions where their supply chain operates?","label":"Supply chain disclosure","break_down_label":["Supply chain","disclosure"],"short_label":"supply_chain_disclosure","color":0,"filter_value":["Geographical","Facility/Supplier"],"aus_color":"bg-deep-orange","uk_color":"bg-deep-blue","aus_color_hex":"#FF5C45","uk_color_hex":"#000029"},{"seq":7,"id":2722057,"metric":"Walk Free+MSA policy (revised)","question":"Does the company\'s statement detail one or more specific, organisational policies or actions to combat slavery in their direct (tier 1) and/or in-direct (beyond tier 1) supply chain?","label":"Supply chain policies","break_down_label":["Supply chain","policies"],"short_label":"policies","color":0,"filter_value":["Suppliers comply with laws and company’s policies (direct / tier 1)","Suppliers comply with laws and company’s policies (beyond tier 1)","Prohibit use of forced labour (direct / tier 1)","Prohibit use of forced labour (beyond tier 1)","Code of conduct or supplier code includes clauses on slavery and human trafficking (direct / tier 1)","Code of conduct or supplier code includes clauses on slavery and human trafficking (beyond tier 1)","Contracts include clauses on forced labour (direct / tier 1)","Contracts include clauses on forced labour (beyond tier 1)","Suppliers produce their own statement (direct / tier 1)","Suppliers produce their own statement (beyond tier 1)","Prohibit charging of recruitment fees to employee (direct / tier 1)","Prohibit charging of recruitment fees to employee (beyond tier 1)","Prohibit use of child labour (direct / tier 1)","Prohibit use of child labour (beyond tier 1)","Suppliers protect migrant workers (direct / tier 1)","Suppliers protect migrant workers (beyond tier 1)","Suppliers respect labour rights (wages / freedom of association etc) (direct / tier 1)","Suppliers respect labour rights (wages / freedom of association etc) (beyond tier 1)"],"aus_color":"bg-deep-blue","uk_color":"bg-deep-blue","aus_color_hex":"#000029","uk_color_hex":"#000029"},{"seq":8,"id":2722223,"metric":"Walk_Free+MSA_risk_assessment","question":"How does the company assess the risks of modern slavery and trafficking in their supply chain?","label":"Risk assessment","break_down_label":["Risk assessment"],"short_label":"risk_assessment","color":0,"filter_value":["Risk-based questionnaires","Use of risk management tool or software","Conducting research"],"aus_color":"bg-deep-orange","uk_color":"bg-deep-blue","aus_color_hex":"#FF5C45","uk_color_hex":"#000029"},{"seq":9,"id":1831932,"metric":"Walk_Free+MSA_Identification_of_risks","question":"Does the compan\'s statement identify specific geographic regions (e.g. Indonesia), industries (e.g. agriculture), resources (e.g. Palm Oil) or types of workforce (e.g. migrant workers) where the risk of modern slavery is the greatest?","label":"Identification of risks","break_down_label":["Identification","of risks"],"short_label":"risk_identification","color":0,"filter_value":["Geographic","Resource","Workforce","Industry"],"aus_color":"bg-deep-orange","uk_color":"bg-deep-blue","aus_color_hex":"#FF5C45","uk_color_hex":"#000029"},{"seq":10,"id":2722169,"metric":"Walk_Free+MSA_risk_management","question":"Does the company continuously monitor suppliers to ensure that they comply with the company\'s policies and local laws?","label":"Risk management","break_down_label":["Risk management"],"short_label":"risk_management","color":0,"filter_value":["Audits of suppliers (self- reporting)","Audits of suppliers (independent)","On-site visits (self- reporting)","On-site visits (independent)"],"aus_color":"bg-deep-orange","uk_color":"bg-deep-blue","aus_color_hex":"#FF5C45","uk_color_hex":"#000029"},{"seq":11,"id":2722458,"metric":"Walk_Free+MSA_whistleblowing_mechanism_revised","question":"Does the company describe a grievance mechanism to facilitate whistle-blowing or the reporting of suspected incidents of slavery or trafficking?","label":"Whistleblowing mechanism","break_down_label":["Whistleblowing mechanism"],"short_label":"whistleblowing_mechanism","color":0,"filter_value":["Hotline, Email, Contact Form (direct employees)","Hotline, Email, Contact Form (supply chain workers)","Whistleblower protection (direct employees)","Whistleblower protection (supply chain workers)","Focal Point (direct employees)","Focal Point (supply chain workers)"],"aus_color":"bg-deep-orange","uk_color":"bg-deep-blue","aus_color_hex":"#FF5C45","uk_color_hex":"#000029"},{"seq":12,"id":1831964,"metric":"Walk Free+MSA incidents identified","question":"Did the company identify any specific incidents related to modern slavery that require(d) remediation?","label":"Incidents identification","break_down_label":["Incidents","identification"],"short_label":"incident_identification","color":0,"filter_value":["Yes"],"aus_color":"bg-deep-blue","uk_color":"bg-deep-blue","aus_color_hex":"#000029","uk_color_hex":"#000029"},{"seq":13,"id":2722444,"metric":"Walk_Free+MSA_incidents_remediation_revised","question":"In the modern slavery statement, does the company explain one or more of the corrective steps it has taken (or would take) in response to modern slavery incidents in their operations and/or supply chain?","label":"Incidents remediation","break_down_label":["Incidents","remediation"],"short_label":"incident_remediation","color":0,"filter_value":["Worker remediation","Corrective action plan","Senior management","Cancel contracts"],"aus_color":"bg-deep-orange","uk_color":"bg-deep-blue","aus_color_hex":"#FF5C45","uk_color_hex":"#000029"},{"seq":14,"id":2722482,"metric":"Walk_Free+MSA_training_revised","question":"Does the statement describe training for staff that is specifically geared towards detecting signs of slavery or trafficking?","label":"Modern slavery training","break_down_label":["Modern slavery","training"],"short_label":"training","color":0,"filter_value":["Employees (all)","Procurement / purchasing","Recruitment / HR","Leadership","Suppliers","Training provided - not specified to who"],"aus_color":"bg-deep-blue","uk_color":"bg-deep-blue","aus_color_hex":"#000029","uk_color_hex":"#000029"},{"seq":15,"id":1832024,"metric":"Walk_Free+MSA_Performance_Indicators","question":"Does the modern slavery statement define the performance indicators against which the company measures the effectiveness of its actions to combat slavery and trafficking? E.g. number of audits done, number of employee training provided","label":"Key performance indicators","break_down_label":["Key performance","indicators"],"short_label":"kpis","color":0,"filter_value":["Yes"],"aus_color":"bg-deep-orange","uk_color":"bg-deep-blue","aus_color_hex":"#FF5C45","uk_color_hex":"#000029"},{"seq":16,"id":1832012,"metric":"Walk_Free+MSA_Business_Performance_Indicators","question":"Has the company reviewed business KPIs to ensure they are not increasing risk of modern slavery? (E.g. expansion to production countries that have a lot of migrant workers)","label":"Business performance indicators","break_down_label":["Business","performance","indicators"],"short_label":"business_kpis","color":0,"filter_value":["Yes"],"aus_color":"bg-deep-blue","uk_color":"bg-deep-blue","aus_color_hex":"#000029","uk_color_hex":"#000029"}]');

/***/ }),

/***/ 52175:
/*!*************************************!*\
  !*** ./src/assets/charts/bars.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://vega.github.io/schema/vega/v5.json","description":"A nested bar chart example, with bars grouped by category.","width":350,"height":200,"signals":[{"name":"barHeight","value":"15"},{"name":"colors","value":{"orange":"#FF5C45","red":"#FE0000","blue":"#7EB2E2","navy":"#000029","yellow":"#FFCB2B"}},{"name":"barTitle","value":null,"on":[{"events":"rect:mouseover, text:mouseover","update":"datum.title"},{"events":"rect:mouseout, text:mouseout","update":"null"}]}],"data":[{"name":"assessed","url":"https://wikirate.org/~12602618+Answer.json?limit=0&filter[value][]=Yes&filter[year]=latest&view=answer_list"},{"name":"signed","url":"https://wikirate.org/Business_Human_Rights_Resource_Centre+MSA_statement_signed_binary+answer/answer_list.json?limit=0&filter[status]=known&filter[year]=latest","transform":[{"type":"lookup","from":"assessed","key":"company","fields":["company"],"values":["value"],"as":["assessed"]},{"type":"filter","expr":"datum.assessed == \'Yes\'"},{"type":"aggregate","groupby":["value"]},{"type":"impute","key":"value","keyvals":["Yes"],"field":"count","value":0},{"type":"joinaggregate","fields":["count"],"ops":["sum"]},{"type":"filter","expr":"datum.value == \'Yes\'"}]},{"name":"approved","url":"https://wikirate.org/Business_Human_Rights_Resource_Centre+MSA_Statement_Approval+answer/answer_list.json?limit=0&filter[year]=latest","transform":[{"type":"lookup","from":"assessed","key":"company","fields":["company"],"values":["value"],"as":["assessed"]},{"type":"filter","expr":"datum.assessed == \'Yes\'"},{"type":"aggregate","groupby":["value"]},{"type":"impute","key":"value","keyvals":["Approved by Board"],"field":"count","value":0},{"type":"joinaggregate","fields":["count"],"ops":["sum"]},{"type":"filter","expr":"datum.value == \'Approved by Board\'"}]},{"name":"homepage","url":"https://wikirate.org/Business_Human_Rights_Resource_Centre+MSA_homepage_link_archived+answer/answer_list.json?limit=0&filter[year]=latest","transform":[{"type":"lookup","from":"assessed","key":"company","fields":["company"],"values":["value"],"as":["assessed"]},{"type":"filter","expr":"datum.assessed == \'Yes\'"},{"type":"aggregate","groupby":["value"]},{"type":"impute","key":"value","keyvals":["Yes"],"field":"count","value":0},{"type":"joinaggregate","fields":["count"],"ops":["sum"]},{"type":"filter","expr":"datum.value == \'Yes\'"}]},{"name":"all","url":"https://wikirate.org/Walk_Free+Meets_Minimum_UK_MSA_Requirements+answer/answer_list.json?limit=0&filter[company_group][]=MSA_Asset_Managers&filter[year]=latest","transform":[{"type":"aggregate","groupby":["value"]},{"type":"impute","key":"value","keyvals":["Yes"],"field":"count","value":0},{"type":"joinaggregate","fields":["count"],"ops":["sum"]},{"type":"filter","expr":"datum.value == \'Yes\'"}]},{"name":"metrics","values":[{"seq":1,"metric":"Business_Human_Rights_Resource_Centre+MSA_statement_signed","label":"Signed by Appropriate Person","short_label":"signed","color":0,"filter_value":["Signed by CEO","Signed by Director","Signed by Managing Director","Signed by Chairman"]},{"seq":2,"metric":"Business_Human_Rights_Resource_Centre+MSA_Statement_Approval","label":"Board Approval","short_label":"approved","color":0,"filter_value":["Approved by Board"]},{"seq":3,"metric":"Walk_Free+MSA_statement_homepage_link","label":"Homepage Link","short_label":"homepage","color":0,"filter_value":["Yes"]}]},{"name":"counts","source":["signed","approved","homepage"],"transform":[{"type":"window","ops":["row_number"],"as":["seq"]},{"type":"lookup","from":"metrics","key":"seq","fields":["seq"],"values":["label","metric","color","filter_value"],"as":["title","wikirate_page","color","filter_value"]},{"type":"formula","expr":"datum.count/datum.sum_count","as":"percentage"},{"type":"formula","expr":"format(datum.count / datum.sum_count, \'.0%\')","as":"percent_label"},{"type":"formula","expr":"datum.count + \' out of \' + datum.sum_count + \' statements\'","as":"count_label"},{"type":"formula","expr":"{ value: datum.filter_value }","as":"filter"}]}],"scales":[{"name":"xscale","domain":[0,1],"zero":true,"type":"linear","range":"width"},{"name":"yscale","range":"height","domain":{"data":"counts","field":"title"},"type":"band","padding":0.4},{"name":"color","type":"linear","domain":[0,3],"range":{"signal":"[colors.orange, colors.yellow, colors.navy, colors.blue]"}}],"marks":[{"type":"rect","from":{"data":"counts"},"encode":{"update":{"x":{"value":0},"x2":{"scale":"xscale","value":1},"y":{"scale":"yscale","field":"title"},"height":{"signal":"barHeight"},"fill":{"signal":"colors.navy"},"tooltip":{"field":"count_label"},"opacity":{"signal":"if(barTitle == datum.title, 0.5, 1)"}},"hover":{"cursor":{"value":"pointer"}}}},{"type":"rect","from":{"data":"counts"},"encode":{"update":{"x":{"value":0},"x2":{"scale":"xscale","field":"percentage"},"y":{"scale":"yscale","field":"title"},"height":{"signal":"barHeight"},"fill":{"scale":"color","field":"color"},"tooltip":{"field":"count_label"}},"hover":{"cursor":{"value":"pointer"}}}},{"type":"text","from":{"data":"counts"},"encode":{"update":{"fontSize":{"value":15},"font":{"value":"SourceSansPro"},"x":{"scale":"xscale","value":1},"y":{"scale":"yscale","field":"title","offset":-3},"baseline":{"value":"bottom"},"align":{"value":"right"},"text":{"field":"percent_label"},"fontWeight":{"value":"bold"},"fill":{"scale":"color","signal":"if(barTitle == datum.title, datum.color, 2)"}},"hover":{"cursor":{"value":"pointer"}}}},{"type":"text","from":{"data":"counts"},"encode":{"update":{"fontSize":{"value":15},"font":{"value":"SourceSansPro"},"x":{"value":0},"y":{"scale":"yscale","field":"title","offset":-3},"text":{"field":"title"},"baseline":{"value":"bottom"},"fontWeight":{"value":"bold"},"fill":{"signal":"colors.navy"}},"hover":{"cursor":{"value":"pointer"}}}}]}');

/***/ }),

/***/ 2315:
/*!**************************************!*\
  !*** ./src/assets/charts/donut.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://vega.github.io/schema/vega/v5.json","description":"A basic donut chart example.","width":250,"height":250,"padding":10,"title":{"text":"56%","font":"Rubik","fontSize":60,"fontWeight":"700","dy":{"signal":"width/1.55"}},"signals":[{"name":"hoverValue","value":null,"on":[{"events":"arc:mouseover, @legendLabel:mouseover, @legendSymbol:mouseover","update":"datum.value"},{"events":"arc:mouseout, @legendLabel:mouseout, @legendSymbol:mouseout","update":"null"}]},{"name":"hoverOpacity","update":"if(hoverValue, 0.5, 1)","value":1},{"name":"click","value":null,"on":[{"events":"arc:click","update":"datum.URL"}]}],"data":[{"name":"table","values":[{"id":1,"percent":64},{"id":2,"percent":36}],"transform":[{"type":"pie","field":"percent","sort":true}]}],"scales":[{"name":"color","type":"ordinal","range":["#fafafa","#FF9300"],"domain":[1,2]}],"marks":[{"type":"arc","from":{"data":"table"},"encode":{"enter":{"fill":{"scale":"color","field":"id"},"x":{"signal":"width / 2"},"y":{"signal":"height / 2"},"startAngle":{"signal":"datum.startAngle"},"endAngle":{"signal":"datum.endAngle"},"padAngle":{"value":0},"innerRadius":{"value":80},"outerRadius":{"signal":"width / 2"},"cornerRadius":{"value":0}},"update":{"cursor":{"value":"pointer"}},"hover":{"tooltip":{"signal":"{title: datum.id, \'Percentage\': datum.percent+\'%\'}"}}}}]}');

/***/ }),

/***/ 64117:
/*!************************************!*\
  !*** ./src/assets/charts/pie.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://vega.github.io/schema/vega/v5.json","description":"Companies meeting minimum requirements","width":190,"height":180,"padding":10,"signals":[{"name":"hoverValue","value":null,"on":[{"events":"arc:mouseover, @legendLabel:mouseover, @legendSymbol:mouseover","update":"datum.value"},{"events":"arc:mouseout, @legendLabel:mouseout, @legendSymbol:mouseout","update":"null"}]},{"name":"hoverOpacity","update":"if(hoverValue, 0.5, 1)","value":1},{"name":"click","value":null,"on":[{"events":"arc:click","update":"datum.wikirate_page"},{"events":"arc:click","update":"datum.wikirate_page"}]}],"data":[{"name":"counts","values":[{"value":"Met","count":100,"sum_count":147},{"value":"Not Met","count":143,"sum_count":147}],"transform":[{"type":"pie","field":"count","sort":false},{"type":"formula","as":"filter","expr":"{ value: [datum.value] }"},{"type":"window","ops":["sum"],"fields":["count"],"frame":[null,null]},{"type":"formula","as":"percentage","expr":"format(datum.count / datum.sum_count, \'.0%\')"},{"type":"collect","sort":{"field":"value"}},{"type":"formula","expr":"datum.count + \' out of \' + datum.sum_count + \' statements\'","as":"count_label"}]}],"marks":[{"type":"arc","from":{"data":"counts"},"encode":{"enter":{"fill":{"scale":"color","field":"value"},"x":{"value":100},"y":{"value":100},"tooltip":{"field":"count_label"}},"update":{"startAngle":{"field":"startAngle"},"endAngle":{"field":"endAngle"},"padAngle":{"value":0},"innerRadius":{"value":0},"outerRadius":{"value":120},"cornerRadius":{"value":0},"opacity":{"signal":"if(hoverValue == datum.value, 1, hoverOpacity)"}},"hover":{"opacity":{"value":1},"cursor":{"value":"pointer"}}}},{"type":"text","from":{"data":"counts"},"encode":{"enter":{"x":{"value":100},"y":{"value":100},"radius":{"value":50},"fontWeight":{"value":"bold"},"fontSize":{"value":15},"theta":{"signal":"(datum.startAngle + datum.endAngle)/2"},"fill":{"value":"white"},"align":{"value":"center"},"baseline":{"value":"middle"},"text":{"field":"percentage"}}}}],"legends":[{"fill":"color","type":"symbol","encode":{"labels":{"name":"legendLabel","interactive":true,"update":{"fontSize":{"value":9},"fontWeight":[{"test":"hoverValue == datum.label","value":"bold"},{"value":400}]}},"symbols":{"name":"legendSymbol","interactive":true}}}],"scales":[{"name":"color","type":"ordinal","range":["#000028","#FF9300"],"domain":["Not Met","Met"]}]}');

/***/ }),

/***/ 69103:
/*!**************************************!*\
  !*** ./src/assets/charts/radar.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://vega.github.io/schema/vega/v5.json","description":"A radar chart example, showing multiple dimensions in a radial layout.","width":600,"height":600,"padding":40,"autosize":{"type":"none","contains":"padding"},"signals":[{"name":"radius","update":"width / 3"}],"data":[{"name":"table","values":[{"key":"key-0","value":19,"category":0},{"key":"key-1","value":22,"category":0},{"key":"key-2","value":14,"category":0},{"key":"key-3","value":38,"category":0},{"key":"key-4","value":23,"category":0},{"key":"key-5","value":5,"category":0},{"key":"key-6","value":27,"category":0},{"key":"key-0","value":13,"category":1},{"key":"key-1","value":12,"category":1},{"key":"key-2","value":42,"category":1},{"key":"key-3","value":13,"category":1},{"key":"key-4","value":6,"category":1},{"key":"key-5","value":15,"category":1},{"key":"key-6","value":8,"category":1}]},{"name":"keys","source":"table","transform":[{"type":"aggregate","groupby":["key"]}]}],"scales":[{"name":"angular","type":"point","range":{"signal":"[-PI, PI]"},"padding":0.5,"domain":{"data":"table","field":"key"}},{"name":"radial","type":"linear","range":{"signal":"[0, radius]"},"zero":true,"nice":false,"domain":{"data":"table","field":"value"},"domainMin":0},{"name":"color","type":"ordinal","domain":{"data":"table","field":"category"},"range":["#ff5900","#FF9300"]}],"encode":{"enter":{"x":{"signal":"radius*1.5"},"y":{"signal":"radius*1.5"}}},"marks":[{"type":"group","name":"categories","zindex":1,"from":{"facet":{"data":"table","name":"facet","groupby":["category"]}},"marks":[{"type":"line","name":"category-line","from":{"data":"facet"},"encode":{"enter":{"interpolate":{"value":"linear-closed"},"x":{"signal":"scale(\'radial\', datum.value) * cos(scale(\'angular\', datum.key))"},"y":{"signal":"scale(\'radial\', datum.value) * sin(scale(\'angular\', datum.key))"},"stroke":{"scale":"color","field":"category"},"strokeWidth":{"value":1},"fill":{"scale":"color","field":"category"},"fillOpacity":{"value":0.1}}}},{"type":"text","name":"value-text","from":{"data":"category-line"},"encode":{"enter":{"x":{"signal":"datum.x"},"y":{"signal":"datum.y"},"text":{"signal":"datum.datum.value"},"align":{"value":"center"},"baseline":{"value":"middle"},"fill":{"value":"black"}},"hover":{"cursor":{"value":"pointer"},"tooltip":{"signal":"{title: datum.datum.key, \'Legislation\': if(datum.datum.category==\'AUS\',\'Australian\', datum.datum.category), \'Coverage\': datum.datum.value+\'%\', \'Mandatory\': datum.datum.mandatory}"}}}}]},{"type":"rule","name":"radial-grid","from":{"data":"keys"},"zindex":0,"encode":{"enter":{"x":{"value":0},"y":{"value":0},"x2":{"signal":"radius * cos(scale(\'angular\', datum.key))"},"y2":{"signal":"radius * sin(scale(\'angular\', datum.key))"},"stroke":{"value":"lightgray"},"strokeWidth":{"value":1}}}},{"type":"text","name":"label","from":{"data":"table"},"zindex":1,"encode":{"enter":{"x":{"signal":"(radius + 20) * cos(scale(\'angular\', datum.key))"},"y":{"signal":"(radius + 20) * sin(scale(\'angular\', datum.key))"},"text":{"field":"label"},"align":[{"test":"abs(scale(\'angular\', datum.key)) > PI / 2","value":"right"},{"value":"left"}],"baseline":[{"test":"scale(\'angular\', datum.key) > 0","value":"top"},{"test":"scale(\'angular\', datum.key) == 0","value":"middle"},{"value":"bottom"}],"fill":{"value":"black"},"font":{"value":"Rubik"},"fontSize":{"value":12},"fontWeight":{"value":"300"}}}},{"type":"line","name":"outer-line","from":{"data":"radial-grid"},"encode":{"enter":{"interpolate":{"value":"linear-closed"},"x":{"field":"x2"},"y":{"field":"y2"},"stroke":{"value":"lightgray"},"strokeWidth":{"value":1}}}}]}');

/***/ }),

/***/ 28634:
/*!*******************************************!*\
  !*** ./src/assets/charts/semi-donut.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://vega.github.io/schema/vega/v5.json","description":"A basic semi donut chart example.","width":250,"padding":10,"title":{"text":"36%","font":"Rubik","fontSize":55,"fontWeight":"700","dy":{"signal":"width/1.75"}},"signals":[{"name":"hoverValue","value":null,"on":[{"events":"arc:mouseover, @legendLabel:mouseover, @legendSymbol:mouseover","update":"datum.value"},{"events":"arc:mouseout, @legendLabel:mouseout, @legendSymbol:mouseout","update":"null"}]},{"name":"hoverOpacity","update":"if(hoverValue, 0.5, 1)","value":1},{"name":"click","value":null,"on":[{"events":"arc:click","update":"datum.wikirate_page"},{"events":"arc:click","update":"datum.wikirate_page"}]}],"data":[{"name":"table","values":[{"id":1,"percent":64},{"id":2,"percent":36}],"transform":[{"type":"pie","field":"percent","startAngle":-1.570796326794897,"endAngle":1.570796326794897,"sort":false}]}],"scales":[{"name":"color","type":"ordinal","range":["#fafafa","#FF9300"],"domain":[1,2]}],"marks":[{"type":"arc","from":{"data":"table"},"encode":{"enter":{"fill":{"scale":"color","field":"id"},"x":{"signal":"width / 2"},"y":{"signal":"height / 2"},"startAngle":{"signal":"datum.startAngle"},"endAngle":{"signal":"datum.endAngle"},"padAngle":{"value":0},"innerRadius":{"value":80},"outerRadius":{"signal":"width / 2"},"cornerRadius":{"value":0}},"update":{"cursor":{"value":"pointer"}}}}]}');

/***/ }),

/***/ 5273:
/*!**********************************************!*\
  !*** ./src/assets/charts/shankey-chart.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://vega.github.io/schema/vega/v5.json","description":"Sankey Chart on Modern Slavery Incidents","width":500,"height":400,"padding":{"bottom":10,"left":5,"right":10,"top":10},"signals":[{"name":"standardGap","value":14,"description":"Gap as a percentage of full domain"},{"name":"base","value":"center","description":"How to stack(center or zero)"}],"data":[{"name":"input","values":[{"category":"Companies reporting\\nmodern slavery incidents","stack":1,"sort":1,"labels":"left","labeledValue":14},{"category":"Modern slavery","stack":2,"sort":1,"labels":"right","gap":10},{"category":"Recruitment fees","stack":2,"sort":2,"labels":"right","gap":10},{"category":"Freedom of movement","stack":2,"sort":3,"labels":"right","gap":10},{"category":"Wages and benefits","stack":2,"sort":4,"labels":"right","gap":10},{"category":"Working Hours","stack":2,"sort":5,"labels":"right","gap":10},{"category":"Working conditions","stack":2,"sort":6,"labels":"right","gap":10},{"category":"Other incidents","stack":2,"sort":7,"labels":"right","gap":10},{"source":"Companies reporting\\nmodern slavery incidents","destination":"Modern slavery","description":"Cases that companies qualified as forced or child labour","value":14},{"source":"Companies reporting\\nmodern slavery incidents","destination":"Recruitment fees","description":"Cases of workers paying recruitment or other fees","value":29},{"source":"Companies reporting\\nmodern slavery incidents","destination":"Freedom of movement","description":"Restrictions on freedom of movement workers (e.g. withholding of passports)","value":23},{"source":"Companies reporting\\nmodern slavery incidents","destination":"Wages and benefits","description":"Issues related to wages (underpayment, salary below minimum wages)","value":50},{"source":"Companies reporting\\nmodern slavery incidents","destination":"Working Hours","description":"Cases of excessive or mandatory overtime","value":50},{"source":"Companies reporting\\nmodern slavery incidents","destination":"Working conditions","description":"Issues related to health and safety or cases of harassment","value":40},{"source":"Companies reporting\\nmodern slavery incidents","destination":"Other incidents","description":"Cases of illegal subcontracting or issues related to general labour practices","value":40}]},{"name":"stacks","source":"input","transform":[{"type":"filter","expr":"datum.source != null"},{"type":"formula","as":"end","expr":"[\'source\',\'destination\']"},{"type":"formula","as":"name","expr":"[ datum.source,datum.destination]"},{"type":"project","fields":["end","name","value","description"]},{"type":"flatten","fields":["end","name"]},{"type":"lookup","from":"input","key":"category","values":["stack","sort","gap","labels","labeledValue"],"fields":["name"],"as":["stack","sort","gap","labels","labeledValue"]},{"type":"formula","expr":"datum.stack > 1? datum.description : null","as":"description"},{"type":"aggregate","fields":["value","stack","sort","gap","labels"],"groupby":["end","name","description","labeledValue"],"ops":["sum","max","max","max","max"],"as":["value","stack","sort","gap","labels"]},{"type":"aggregate","fields":["value","stack","sort","gap","labels"],"groupby":["name","description","labeledValue"],"ops":["max","max","max","max","max"],"as":["value","stack","sort","gap","labels"]},{"type":"formula","as":"gap","expr":"datum.gap?datum.gap:0"},{"type":"formula","as":"labeledValue","expr":"datum.labeledValue == null?datum.value:datum.labeledValue"}]},{"name":"maxValue","source":["stacks"],"transform":[{"type":"aggregate","fields":["value"],"groupby":["stack"],"ops":["sum"],"as":["value"]},{"type":"aggregate","fields":["value"],"ops":["max"],"as":["value"]}]},{"name":"plottedStacks","source":["stacks"],"transform":[{"type":"formula","as":"spacer","expr":" (data(\'maxValue\')[0].value/100)*(standardGap+datum.gap)"},{"type":"formula","as":"type","expr":"[\'data\',\'spacer\']"},{"type":"formula","as":"spacedValue","expr":"[datum.value,datum.spacer]"},{"type":"flatten","fields":["type","spacedValue"]},{"type":"stack","groupby":["stack"],"sort":{"field":"sort","order":"descending"},"field":"spacedValue","offset":{"signal":"base"}},{"type":"formula","expr":"((datum.value)/2)+datum.y0","as":"yc"}]},{"name":"finalTable","source":["plottedStacks"],"transform":[{"type":"filter","expr":"datum.type == \'data\'"}]},{"name":"linkTable","source":["input"],"transform":[{"type":"filter","expr":"datum.source != null"},{"type":"lookup","from":"finalTable","key":"name","values":["y0","y1","stack","sort"],"fields":["source"],"as":["sourceStacky0","sourceStacky1","sourceStack","sourceSort"]},{"type":"lookup","from":"finalTable","key":"name","values":["y0","y1","stack","sort"],"fields":["destination"],"as":["destinationStacky0","destinationStacky1","destinationStack","destinationSort"]},{"type":"stack","groupby":["source"],"sort":{"field":"destinationSort","order":"descending"},"field":"value","offset":"zero","as":["syi0","syi1"]},{"type":"formula","expr":"datum.syi0+datum.sourceStacky0","as":"sy0"},{"type":"formula","expr":"datum.sy0+datum.value","as":"sy1"},{"type":"stack","groupby":["destination"],"sort":{"field":"sourceSort","order":"descending"},"field":"value","offset":"zero","as":["dyi0","dyi1"]},{"type":"formula","expr":"datum.dyi0+datum.destinationStacky0","as":"dy0"},{"type":"formula","expr":"datum.dy0+datum.value","as":"dy1"},{"type":"formula","expr":"((datum.value)/2)+datum.sy0","as":"syc"},{"type":"formula","expr":"((datum.value)/2)+datum.dy0","as":"dyc"},{"type":"linkpath","orient":"horizontal","shape":"diagonal","sourceY":{"expr":"scale(\'y\', datum.syc)"},"sourceX":{"expr":"scale(\'x\', toNumber(  datum.sourceStack))+ bandwidth(\'x\')"},"targetY":{"expr":"scale(\'y\', datum.dyc)"},"targetX":{"expr":"scale(\'x\', datum.destinationStack)"}},{"type":"formula","expr":"range(\'y\')[0]-scale(\'y\', datum.value)","as":"strokeWidth"}]}],"scales":[{"name":"x","type":"band","range":"width","domain":{"data":"finalTable","field":"stack"},"paddingInner":0.88},{"name":"y","type":"linear","range":"height","domain":{"data":"finalTable","field":"y1"},"reverse":false},{"name":"color","type":"ordinal","range":["#FF5C45","#FFEE99","#FFDC00","#FFC400","#FFB000","#FF9A00","#FF7A30","#FF6338"],"domain":{"data":"stacks","field":"name"}}],"marks":[{"type":"rect","from":{"data":"finalTable"},"encode":{"update":{"x":{"scale":"x","field":"stack"},"width":{"scale":"x","band":1},"y":{"scale":"y","field":"y0"},"y2":{"scale":"y","field":"y1"},"fill":{"scale":"color","field":"name"},"fillOpacity":{"value":0.95},"strokeWidth":{"value":0},"stroke":{"scale":"color","field":"name"}},"hover":{"tooltip":{"signal":"datum.stack > 1 ? {\'Identified incidents of\':datum.name,\'Details\':datum.description, \'Value\':format(datum.value, \'\') + \'%\'}:null"},"fillOpacity":{"value":1}}}},{"type":"path","name":"links","from":{"data":"linkTable"},"clip":true,"encode":{"update":{"strokeWidth":{"field":"strokeWidth"},"path":{"field":"path"},"strokeOpacity":{"signal":"0.6"},"stroke":{"field":"destination","scale":"color"}},"hover":{"strokeOpacity":{"value":1},"tooltip":{"signal":"{\'Identified incidents of\':datum.destination,\'Details\':datum.description, \'Value\':format(datum.value, \'\') + \'%\'}"}}}},{"type":"group","name":"labelText","zindex":1,"from":{"facet":{"data":"finalTable","name":"labelFacet","groupby":["name","stack","yc","value","labels"]}},"clip":false,"encode":{"update":{"strokeWidth":{"value":1},"stroke":{"value":"red"},"x":{"signal":"datum.labels==\'left\'?scale(\'x\', datum.stack)-8 : scale(\'x\', datum.stack) + (bandwidth(\'x\')) +8"},"yc":{"scale":"y","signal":"datum.yc"},"width":{"signal":"0"},"height":{"signal":"0"},"fillOpacity":{"signal":"0.1"}}},"marks":[{"type":"text","name":"heading","from":{"data":"labelFacet"},"encode":{"update":{"x":{"value":0},"y":{"value":-2},"text":{"signal":"datum.stack > 1 ? datum.name : \'\'"},"lineBreak":{"value":"\\n"},"align":{"signal":"datum.labels==\'left\'?\'right\':\'left\'"},"fontWeight":{"value":"500"}}}},{"type":"text","name":"amount","from":{"data":"labelFacet"},"encode":{"update":{"x":{"value":0},"y":{"signal":"datum.stack > 1 ? 17 : 55"},"text":{"signal":"datum.stack > 1 ? format(datum.labeledValue, \'\') + \'%\' : \'\'"},"align":{"signal":"datum.labels==\'left\'?\'right\':\'left\'"}}}}]},{"type":"rect","from":{"data":"labelText"},"encode":{"update":{"x":{"field":"bounds.x1","offset":-5},"x2":{"field":"bounds.x2","offset":8},"y":{"field":"bounds.y1","offset":-8},"y2":{"field":"bounds.y2","offset":8},"fill":{"value":"transparent"},"cornerRadius":{"value":5}}}}],"config":{"view":{"stroke":"transparent"},"text":{"fontSize":18,"fill":"#000029","font":"Rubik","fontWeight":400}}}');

/***/ }),

/***/ 52443:
/*!*******************************************!*\
  !*** ./src/assets/charts/simple-bar.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://vega.github.io/schema/vega/v5.json","description":"A basic bar chart example, with value labels shown upon pointer hover.","width":400,"height":250,"padding":10,"title":{"text":"Signed by appropriate person","font":"Rubik","fontSize":16},"signals":[{"name":"tooltip","value":{},"on":[{"events":"rect:pointerover","update":"datum"},{"events":"rect:pointerout","update":"{}"}]},{"name":"click","value":null,"on":[{"events":"rect:click","update":"datum.wikirate_page"},{"events":"rect:click","update":"datum.wikirate_page"}]}],"data":[{"name":"table","values":[{"label":"Total","value":28,"color":"#000029"},{"label":"UK","value":55,"color":"#FF5C45"},{"label":"AUS","value":43,"color":"#FF5C45"}]}],"scales":[{"name":"xscale","type":"band","domain":{"data":"table","field":"label"},"range":"width","padding":0.1,"round":true},{"name":"yscale","domain":[0,100],"nice":true,"range":"height"}],"axes":[{"orient":"bottom","scale":"xscale"},{"orient":"left","scale":"yscale"}],"marks":[{"type":"rect","cornerRadius":5,"from":{"data":"table"},"encode":{"enter":{"cornerRadiusTopRight":{"value":10},"cornerRadiusTopLeft":{"value":10},"x":{"scale":"xscale","field":"label"},"width":{"scale":"xscale","band":1},"y":{"scale":"yscale","field":"value"},"y2":{"scale":"yscale","value":0}},"update":{"fill":{"field":"color"}},"hover":{"tooltip":{"signal":"{title: datum.metric, \'Legislation\': if(datum.label==\'AUS\',\'Australian\', datum.label), \'Coverage\': datum.value+\'%\', \'Mandatory\': datum.mandatory}"},"cursor":{"value":"pointer"}}}}]}');

/***/ }),

/***/ 67505:
/*!*******************************************!*\
  !*** ./src/assets/charts/single-bar.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://vega.github.io/schema/vega/v5.json","description":"Living wage in supply chains","width":650,"height":60,"signals":[{"name":"title","value":"Living wage in supply chains"},{"name":"barHeight","value":"25"},{"name":"colors","value":{"orange":"#FF5C45","red":"#FE0000","blue":"#7EB2E2","navy":"#000029","yellow":"#FFCB2B"}},{"name":"barTitle","value":null,"on":[{"events":"rect:mouseover, text:mouseover","update":"datum.title"},{"events":"rect:mouseout, text:mouseout","update":"null"}]},{"name":"click","value":null,"on":[{"events":"rect:click","update":"datum.wikirate_page"},{"events":"rect:click","update":"datum.wikirate_page"}]}],"data":[{"name":"metric_answers","values":[{"meet_criteria":20,"num_of_assessed":209}]},{"name":"counts","source":["metric_answers"],"transform":[{"type":"window","ops":["row_number"],"as":["seq"]},{"type":"formula","expr":"title","as":"title"},{"type":"formula","expr":"\'https://wikirate.org/\'+\'~14019233\'","as":"wikirate_page"},{"type":"formula","expr":"datum.meet_criteria/datum.num_of_assessed","as":"percentage"},{"type":"formula","expr":"format(datum.meet_criteria / datum.num_of_assessed, \'.0%\')","as":"percent_label"},{"type":"formula","expr":"datum.meet_criteria + \' out of \' + datum.num_of_assessed + \' statements\'","as":"count_label"}]}],"scales":[{"name":"xscale","domain":[0,1],"zero":true,"type":"linear","range":"width"},{"name":"yscale","range":"height","domain":{"data":"counts","field":"title"},"type":"band","padding":0.4},{"name":"color","type":"linear","domain":[0,3],"range":{"signal":"[colors.orange, colors.yellow, colors.navy, colors.blue]"}}],"marks":[{"type":"rect","from":{"data":"counts"},"encode":{"update":{"x":{"value":0},"x2":{"scale":"xscale","value":1},"y":{"scale":"yscale","field":"title"},"height":{"signal":"barHeight"},"fill":{"signal":"colors.navy"},"tooltip":{"field":"count_label"},"opacity":{"signal":"if(barTitle == datum.title, 0.5, 1)"},"cornerRadius":{"value":4}},"hover":{"cursor":{"value":"pointer"}}}},{"type":"rect","from":{"data":"counts"},"encode":{"update":{"x":{"value":0},"x2":{"scale":"xscale","field":"percentage"},"y":{"scale":"yscale","field":"title"},"height":{"signal":"barHeight"},"fill":{"signal":"colors.orange"},"tooltip":{"field":"count_label"},"cornerRadiusTopLeft":{"value":4},"cornerRadiusBottomLeft":{"value":4}},"hover":{"cursor":{"value":"pointer"}}}},{"type":"text","from":{"data":"counts"},"encode":{"update":{"fontSize":{"value":20},"font":{"value":"Rubik"},"x":{"scale":"xscale","value":1},"y":{"scale":"yscale","field":"title","offset":-6},"baseline":{"value":"bottom"},"align":{"value":"right"},"text":{"field":"percent_label"},"fontWeight":{"value":"bold"},"fill":{"scale":"color","signal":"if(barTitle == datum.title, 0, 2)"}},"hover":{"cursor":{"value":"pointer"}}}},{"type":"text","from":{"data":"counts"},"encode":{"update":{"fontSize":{"value":20},"font":{"value":"Rubik"},"x":{"value":0},"y":{"scale":"yscale","field":"title","offset":-6},"text":{"field":"title"},"baseline":{"value":"bottom"},"fontWeight":{"value":"bold"},"fill":{"signal":"colors.navy"}},"hover":{"cursor":{"value":"pointer"}}}}]}');

/***/ }),

/***/ 18013:
/*!**********************************************!*\
  !*** ./src/assets/charts/subgroup-bars.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://vega.github.io/schema/vega/v5.json","description":"Risk Management","width":300,"padding":{"right":5},"signals":[{"name":"totalAnswers","update":"data(\'answers\').length"},{"name":"numGroups","update":"data(\'groups\').length"},{"name":"barHeight","value":15},{"name":"height","update":"numGroups * (barHeight + 15)+ 200"},{"name":"colors","value":{"orange":"#FF5C45","red":"#FE0000","blue":"#7EB2E2","navy":"#000028","yellow":"#FFCB2B"}},{"name":"barOver","value":{},"on":[{"events":"rect:mouseover, text:mouseover","update":"datum"},{"events":"rect:mouseout, text:mouseout","update":"{}"}]}],"data":[{"name":"assessed","url":"https://wikirate.org/Walk_Free+UK_MSA_statement_assessed+Answer.json?filter%5Bnot_ids%5D=&filter%5Bcompany_name%5D=&view=answer_list&filter[value][]=Yes&limit=0&filter[year]=latest"},{"name":"answers","url":"https://wikirate.org/Walk_Free+MSA_risk_management_revised+answer/answer_list.json?limit=0&filter[year]=latest","transform":[{"type":"lookup","from":"assessed","key":"company","fields":["company"],"values":["value"],"as":["assessed"]},{"type":"filter","expr":"datum.value != \'\' && datum.assessed == \'Yes\'"},{"type":"formula","expr":"split(datum.value, \', \')","as":"value_array"}]},{"name":"subgroups","values":[{"key":"(self- reporting)","label":"Self reporting","color":0,"seq":1},{"key":"(independent)","label":"Independent","color":1,"seq":2}],"transform":[{"type":"window","ops":["row_number"],"as":["seq"]}]},{"name":"groups","values":[{"title":"Audits of suppliers","term":"Audits of suppliers","seq":1},{"title":"On-site visits","term":"On-site visits","seq":2}],"transform":[{"type":"window","ops":["row_number"],"as":["seq"]}]},{"name":"counts","source":"answers","transform":[{"type":"flatten","fields":["value_array"],"as":["value"]},{"type":"aggregate","ops":["count"],"groupby":["value"]},{"type":"formula","as":"term","expr":"replace(datum.value, / \\\\(.*/, \'\')"},{"type":"formula","as":"parens","expr":"replace(datum.value, /^[^\\\\(]*/, \'\')"},{"type":"formula","expr":"if(datum.count, datum.count, 0)","as":"count"},{"type":"lookup","from":"groups","key":"term","fields":["term"],"values":["seq"],"as":["group_seq"]},{"type":"filter","expr":"datum.group_seq != null"},{"type":"lookup","from":"subgroups","key":"key","fields":["parens"],"values":["seq","label","color"],"as":["subgroup_seq","subgroup_label","color"]},{"type":"collect","sort":{"field":["group_seq","subgroup_seq"]}},{"type":"formula","expr":"datum.count + \' out of \' + totalAnswers + \' statements\'","as":"count_label"},{"type":"formula","expr":"format(datum.count / totalAnswers, \'.0%\')","as":"percent_label"},{"type":"formula","expr":"datum.term + \' \' + datum.parens","as":"title"},{"type":"formula","as":"filter","expr":"{ value: [datum.value] }"}]}],"scales":[{"name":"xscale","domain":[0,{"signal":"totalAnswers"}],"zero":true,"type":"linear","range":"width"},{"name":"ygroupscale","range":"height","domain":{"data":"counts","field":"term"},"type":"band","padding":0.4},{"name":"color","type":"ordinal","domain":{"data":"counts","field":"subgroup_label"},"range":{"signal":"[colors.orange, colors.blue, colors.yellow, colors.navy]"}},{"name":"textColor","type":"linear","domain":[0,3],"range":{"signal":"[colors.orange, colors.blue, colors.yellow, colors.navy]"}}],"marks":[{"type":"group","from":{"facet":{"name":"faceted_counts","groupby":"term","data":"counts"}},"encode":{"enter":{"fill":{"value":"grey"},"y":{"scale":"ygroupscale","field":"term"}}},"scales":[{"name":"yscale","type":"band","range":"height","domain":{"data":"faceted_counts","field":"title"},"padding":0.1}],"signals":[{"name":"height","update":"bandwidth(\'ygroupscale\')"}],"marks":[{"type":"rect","from":{"data":"faceted_counts"},"encode":{"update":{"x":{"value":0},"x2":{"scale":"xscale","signal":"totalAnswers"},"y":{"scale":"yscale","field":"title"},"height":{"signal":"barHeight"},"fill":{"signal":"colors.navy"},"tooltip":{"field":"count_label"},"opacity":{"signal":"if(barOver.title == datum.title, 0.5, 1)"}},"hover":{"cursor":{"value":"pointer"}}}},{"type":"rect","from":{"data":"faceted_counts"},"encode":{"update":{"x":{"value":0},"x2":{"scale":"xscale","field":"count"},"y":{"scale":"yscale","field":"title"},"height":{"signal":"barHeight"},"fill":{"scale":"textColor","field":"color"},"tooltip":{"field":"percent_label"}},"hover":{"cursor":{"value":"pointer"}}}},{"name":"nocounts","type":"text","from":{"data":"faceted_counts"},"encode":{"update":{"x":{"value":5},"y":{"scale":"yscale","field":"title","offset":2},"baseline":{"value":"top"},"text":{"signal":"if(datum.count == 0, \'None\', \'\')"},"fill":{"value":"white"},"fontStyle":{"value":"italic"}}}},{"type":"text","from":{"data":"faceted_counts"},"encode":{"update":{"fontSize":{"value":15},"font":{"value":"SourceSansPro"},"x":{"scale":"xscale","signal":"totalAnswers","offset":4},"y":{"scale":"yscale","field":"title","offset":2},"baseline":{"value":"top"},"text":{"field":"percent_label"},"fontWeight":{"value":"bold"},"fill":{"scale":"textColor","signal":"if(barOver.title == datum.title, datum.color, 3)"}},"hover":{"cursor":{"value":"pointer"}}}}]},{"type":"text","from":{"data":"groups"},"encode":{"update":{"fontSize":{"value":15},"font":{"value":"SourceSansPro"},"x":{"value":0},"y":{"scale":"ygroupscale","field":"term","offset":-2},"text":{"field":"title"},"baseline":{"value":"bottom"},"fontWeight":{"value":"bold"},"fill":{"signal":"colors.navy"}}}}],"legends":[{"fill":"color","type":"symbol","orient":"none","direction":"horizontal","columnPadding":20,"rowPadding":20,"labelFontSize":{"value":25},"encode":{"legend":{"update":{"fontSize":{"value":13},"x":{"value":0},"y":{"offset":-10}}},"labels":{"update":{"fontSize":{"value":13}}}}}]}');

/***/ }),

/***/ 47187:
/*!*******************************************!*\
  !*** ./src/assets/methodology_table.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"metric":"Modern Slavery Act statement","url":"https://wikirate.org/Business_Human_Rights_Resource_Centre+Modern_Slavery_Statement","description":"Did the company produce a statement in relation to any Modern Slavery Act or legislation?","requirements_guidance":"If in-scope of the legislation, update your modern slavery statement every year","requirements_guidance_color":"red","requirements_criterion":"If in-scope of the legislation, update your modern slavery statement every year (p.17)","requirements_criterion_color":"red"},{"metric":"Statement publication","url":"https://wikirate.org/Walk_Free+MSA_Statement_Publication","description":"Does the company either publish their statement on their homepage (UK Act) or provide the statement to the registry (Australian Act)?","requirements_guidance":"Publish your modern slavery statement on your UK website","requirements_guidance_color":"red","requirements_criterion":"Provide your statement to the Australian Border Force, to be published on the online central register. (pp. 64-65)","requirements_criterion_color":"red"},{"metric":"Board approval","url":"https://wikirate.org/Business_Human_Rights_Resource_Centre+MSA_Statement_Approval","description":"Was the company\'s Modern Slavery Act statement explicitly approved by the board of directors (or equivalent management body)?","requirements_guidance":"Get approval from the board of directors (or equivalent management body)","requirements_guidance_color":"red","requirements_criterion":"Get approval by principal governing body (p. 62)","requirements_criterion_color":"red"},{"metric":"Signature","url":"https://wikirate.org/Business_Human_Rights_Resource_Centre+MSA_statement_signed","description":"Was the company’s Modern Slavery Act statement signed by an appropriate person?","requirements_guidance":"Get sign off from a director (or equivalent) or designated member (for LLPs)","requirements_guidance_color":"red","requirements_criterion":"Signed by a responsible member (p.62)","requirements_criterion_color":"red"},{"metric":"Organizational structure and operations","url":"https://wikirate.org/Walk_Free+MSA_Organizational_structure_and_operations","description":"Does the company disclose the ownership structure(s) and/or business model(s) of each of its brands, subsidiaries, and other businesses covered by their Modern Slavery statement?","requirements_guidance":"Organisation structure and supply chains (p. 27)","requirements_guidance_color":"yellow","requirements_criterion":"Identify the reporting entity and describe its structure, operations and supply chains (p. 32)","requirements_criterion_color":"red"},{"metric":"Supply chain disclosure","url":"https://wikirate.org/Walk_Free+MSA_supply_chain_disclosure","description":"Does the company’s statement identify the suppliers in their supply chain and/or the geographic regions where their supply chain operates?","requirements_guidance":"Organisation structure and supply chains (p. 27)","requirements_guidance_color":"yellow","requirements_criterion":"Identify the reporting entity and describe its structure, operations and supply chains (p. 32)","requirements_criterion_color":"red"},{"metric":"Policy","url":"https://wikirate.org/Walk_Free+MSA_policy_revised","description":"Does the company’s statement detail specific, organisational policies or actions to combat slavery in their direct (tier 1) and/or in-direct (beyond tier 1) supply chain?","requirements_guidance":"Policies in relation to slavery and human trafficking / Organisational policies (p. 29)","requirements_guidance_color":"yellow","requirements_criterion":"Pre-agreed processes or policies in place to guide actions (p.85)","requirements_criterion_color":"yellow"},{"metric":"Risk assessment","url":"https://wikirate.org/Walk_Free+MSA_risk_assessment","description":"How does the company assess the risks of modern slavery and trafficking in their supply chain?","requirements_guidance":"Due diligence processes (p. 33)","requirements_guidance_color":"yellow","requirements_criterion":"Describe the actions taken by the reporting entity and any entities that the reporting entity owns or controls to assess and address these risks, including due diligence and remediation processes (p. 46)","requirements_criterion_color":"red"},{"metric":"Risk management","url":"https://wikirate.org/Walk_Free+MSA_risk_management_revised","description":"Does the company continuously monitor suppliers to ensure that they comply with the company’s policies and local laws?","requirements_guidance":"Due diligence processes (p. 33)","requirements_guidance_color":"yellow","requirements_criterion":"Describe the actions taken by the reporting entity and any entities that the reporting entity owns or controls to assess and address these risks, including due diligence and remediation processes (p. 46)","requirements_criterion_color":"red"},{"metric":"Incidents remediation","url":"https://wikirate.org/Walk_Free+MSA_incidents_remediation_revised","description":"Did the company explain the corrective steps it has taken (or would take) in response to modern slavery incidents in their own operations and/or supply chain?","requirements_guidance":"Due diligence processes (p. 33)","requirements_guidance_color":"yellow","requirements_criterion":"Describe the actions taken by the reporting entity and any entities that the reporting entity owns or controls to assess and address these risks, including due diligence and remediation processes (p. 46)","requirements_criterion_color":"red"},{"metric":"Whistleblowing mechanism","url":"https://wikirate.org/Walk_Free+MSA_whistleblowing_mechanism_revised","description":"Does the company have a grievance mechanism in place to facilitate whistle-blowing or the reporting of suspected incidents of slavery or trafficking?","requirements_guidance":"Due diligence processes (p. 33)","requirements_guidance_color":"yellow","requirements_criterion":"Describe the actions taken by the reporting entity and any entities that the reporting entity owns or controls to assess and address these risks, including due diligence and remediation processes (p. 46)","requirements_criterion_color":"red"},{"metric":"Identification of risks","url":"https://wikirate.org/Walk_Free+MSA_Identification_of_risks","description":"Does the company’s statement identify specific geographic regions, industries, resources or types of workforce where the risk of modern slavery is the greatest?","requirements_guidance":"Risk assessment and management (p. 34)","requirements_guidance_color":"yellow","requirements_criterion":"Describe the risks of modern slavery practices in the operations and supply chains of the reporting entity and any entities the reporting entity owns or controls (p. 40)","requirements_criterion_color":"red"},{"metric":"Incidents identified","url":"https://wikirate.org/Walk_Free+MSA_incidents_identified","description":"Did the company identify any specific incidents related to modern slavery that require(d) remediation?","requirements_guidance":"","requirements_guidance_color":"white","requirements_criterion":"Describe the risks of modern slavery practices in the operations and supply chains of the reporting entity and any entities the reporting entity owns or controls  (p. 41)","requirements_criterion_color":"yellow"},{"metric":"Performance indicators","url":"https://wikirate.org/Walk_Free+MSA_Performance_Indicators","description":"Does the company define performance indicators that measure the effectiveness of their actions to combat slavery and trafficking?","requirements_guidance":"Key performance indicators to measure effectiveness of steps being taken (p. 36)","requirements_guidance_color":"yelow","requirements_criterion":"Describe how the reporting entity assesses the effectiveness of actions being taken to assess and address modern slavery risks (p. 54)","requirements_criterion_color":"red"},{"metric":"Business performance indicators","url":"https://wikirate.org/Walk_Free+MSA_Business_Performance_Indicators","description":"Has the company reviewed business KPIs to ensure they are not increasing risk of modern slavery?","requirements_guidance":"Key performance indicators to measure effectiveness of steps being taken (p. 36)","requirements_guidance_color":"yelow","requirements_criterion":"Describe how the reporting entity assesses the effectiveness of actions being taken to assess and address modern slavery risks (p. 54)","requirements_criterion_color":"red"},{"metric":"Training","url":"https://wikirate.org/Walk_Free+MSA_training_revised","description":"Does the statement describe training for staff that is specifically geared towards detecting signs of slavery or trafficking?","requirements_guidance":"Training on modern slavery and trafficking (p. 37)","requirements_guidance_color":"yellow","requirements_criterion":"Describe the actions taken by the reporting entity and any entities that the reporting entity owns or controls to assess and address these risks, including due diligence and remediation processes (p. 52)","requirements_criterion_color":"yellow"},{"metric":"Consultation process","url":"https://wikirate.org/Walk_Free+MSA_Consultation_Process","description":"Does the statement describe consulting with any entities that it owns or controls?","requirements_guidance":"","requirements_guidance_color":"white","requirements_criterion":"Describe the process of consultation with any entities the reporting entity owns or controls (p. 57)","requirements_criterion_color":"red"},{"metric":"Historic Record","url":"https://wikirate.org/Walk_Free+MSA_historic_record","description":"Does the company provide links to their modern slavery statements from previous years (either on their website or in their current statement)?","requirements_guidance":"Keep historic statements from previous years available online. p.14","requirements_guidance_color":"white","requirements_criterion":"N/A","requirements_criterion_color":"yellow"}]');

/***/ }),

/***/ 28807:
/*!********************************************!*\
  !*** ./src/assets/reports_per_sector.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"title":"Electronics","description":"A review of statements produced by Electronics Companies under the UK and Australian Modern Slavery Act.","image":"https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/20266642/49862489-large.png","href":"https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/20266644/49862490.pdf"},{"title":"Renewable Energy","description":"A review of statements produced by Renewable Energy Companies under the UK and Australian Modern Slavery Act.","image":"https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/15958724/42746867-large.png","href":"https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/15958720/42746861.pdf"},{"title":"Garment","description":"Assessing UK and Australian Modern Slavery Act statements produced by the garment industry and its investors","image":"https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/13009495/40065491-large.png","href":"https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/13009496/33519894.pdf"},{"title":"Finance","description":"A review of statements produced by asset managers under the UK Modern Slavery Act","image":"https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/13009707/40066709-large.png","href":"https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/13009668/33520645.pdf"},{"title":"Hospitality","description":"A review of statements produced by the Hospitality Sector under the UK Modern Slavery Act","image":"https://wikirate-production-storage.fra1.cdn.digitaloceanspaces.com/files/13009708/40066637-large.png","href":"https://cdn.walkfree.org/content/uploads/2020/10/06163448/2632_MSA-statements.V8_FNL.pdf"}]');

/***/ }),

/***/ 56770:
/*!*************************************************!*\
  !*** ./src/assets/spotlight_metrics_table.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"metric":"Collaborations and Memberships","url":"https://wikirate.org/Walk_Free+MSA_Collaborations_and_Memberships","description":"Does the company mention membership in, or partnership with, multi-stakeholder initiatives that address modern slavery issues?"},{"metric":"Living wage in supply chains","url":"https://wikirate.org/Walk_Free+Living_wage_in_supply_chains","description":"Does the company provide a commitment on, or detail their action to ensure living wages throughout their supply chain?"},{"metric":"MSA Workers Engagement","url":"https://wikirate.org/Walk_Free+MSA_Workers_Engagement","description":"Does the company engage with workers or trade unions in the supply chain?"}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map