(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div align=\"center\" class=\"subtitle\">\r\n        Despre noi\r\n    </div>\r\n\r\n    <div class=\"description\">\r\n        <p align=\"center\">Producem și comercializăm sticlă în Bacău.</p>\r\n        <p align=\"center\">Ne aflăm pe piață de mai bine de 10 ani și suntem o echipă mică de oameni profesioniști.</p>\r\n    </div>\r\n</div>\r\n<img src=\"../../assets/images/about_us.jpg\" style=\"width: 100%; height: 10%;\"> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div style=\"margin-top: 70px;\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/catalog/catalog.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalog/catalog.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-container\">\r\n    <img class=\"title-image\" src=\"../../assets/images/sablare2.jpg\" alt=\"sablare\" />\r\n</div>\r\n\r\n<mat-drawer-container class=\"example-container\">\r\n    <!-- Left sidebar -->\r\n    <mat-drawer mode=\"side\" opened>\r\n        <mat-nav-list>\r\n            <mat-list>\r\n                <mat-list-item>\r\n                    Uși\r\n                    <button mat-button mat-icon-button (click)=\"changeSubmenuDoorsState()\">\r\n                        <mat-icon class=\"menu-button\" [ngClass]=\"{'rotated' : getSubmenuDoorsState()}\">expand_more\r\n                        </mat-icon>\r\n                    </button>\r\n                </mat-list-item>\r\n                <div class=\"submenu\" [ngClass]=\"{'expanded' : getSubmenuDoorsState()}\">\r\n                    <mat-list>\r\n                        <mat-list-item (click)=\"changeSelectionType('simple')\">\r\n                            Simple\r\n                            <button mat-button mat-icon-button (click)=\"changeSimpleDoorsState()\">\r\n                                <mat-icon class=\"menu-button\" [ngClass]=\"{'rotated' : getSimpleDoorsState()}\">\r\n                                    expand_more</mat-icon>\r\n                            </button>\r\n                        </mat-list-item>\r\n                        <div class=\"submenu\" [ngClass]=\"{'expanded' : getSimpleDoorsState()}\">\r\n                            <mat-list-item (click)=\"changeSelectionType('church')\">Bisericesti</mat-list-item>\r\n                            <mat-list-item (click)=\"changeSelectionType('children')\">Copii</mat-list-item>\r\n                            <mat-list-item (click)=\"changeSelectionType('flowers')\">Florale</mat-list-item>\r\n                            <mat-list-item (click)=\"changeSelectionType('salon')\">Salon</mat-list-item>\r\n                        </div>\r\n                    </mat-list>\r\n                    <mat-list-item (click)=\"changeSelectionType('double')\">Duble</mat-list-item>\r\n                </div>\r\n            </mat-list>\r\n            <a mat-list-item>\r\n                <span matLine (click)=\"changeSelectionType('glass')\">Sticlă</span>\r\n            </a>\r\n            <a mat-list-item>\r\n                <span matLine (click)=\"changeSelectionType('mirrors')\">Oglinzi</span>\r\n            </a>\r\n            <a mat-list-item>\r\n                <span matLine (click)=\"changeSelectionType('edge')\">Colțare</span>\r\n            </a>\r\n        </mat-nav-list>\r\n    </mat-drawer>\r\n\r\n    <!-- Right sidebar -->\r\n    <mat-drawer-content>\r\n        <div class=\"container\">\r\n            <ng-container *ngIf=\"isSimpleDoorType();\">\r\n                <mat-card class=\"card\" *ngFor=\"let poza of allImages\">\r\n                    <mat-card-content>\r\n                        <img src=\"./../../assets/images/catalog/usi/U{{poza.numar}}.png\">\r\n                    </mat-card-content>\r\n                </mat-card>\r\n                <div class=\"row\" align=\"center\" style=\"justify-content: center;\">\r\n                    <mat-paginator [length]=\"150\" [pageSize]=\"pageSize\" [pageIndex]=\"pageIndex\"\r\n                        [pageSizeOptions]=\"[25, 50, 100, 125, 150]\" (page)=\"getPageNumber($event)\">\r\n                    </mat-paginator>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isChurchDoorType();\">\r\n                <mat-card class=\"card\" *ngFor=\"let poza of usiBisericesti\">\r\n                    <mat-card-content>\r\n                        <img src=\"./../../assets/images/catalog/usi/bisericesti/U{{poza.numar}}.png\">\r\n                    </mat-card-content>\r\n                </mat-card>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isChildrenDoorType();\">\r\n                <mat-card class=\"card\" *ngFor=\"let poza of usiCopii\">\r\n                    <mat-card-content>\r\n                        <img src=\"./../../assets/images/catalog/usi/copii/U{{poza.numar}}.png\">\r\n                    </mat-card-content>\r\n                </mat-card>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isFlowersDoorType();\">\r\n                <mat-card class=\"card\" *ngFor=\"let poza of usiFlorale\">\r\n                    <mat-card-content>\r\n                        <img src=\"./../../assets/images/catalog/usi/florale/U{{poza.numar}}.png\">\r\n                    </mat-card-content>\r\n                </mat-card>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isSalonDoorType();\">\r\n                <mat-card class=\"card\" *ngFor=\"let poza of usiSalon\">\r\n                    <mat-card-content>\r\n                        <img src=\"./../../assets/images/catalog/usi/salon/U{{poza.numar}}.png\">\r\n                    </mat-card-content>\r\n                </mat-card>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isDoubleDoorType();\">\r\n                <mat-card class=\"doublecard\" *ngFor=\"let poza of usiDublePoze\">\r\n                    <mat-card-content>\r\n                        <img src=\"./../../assets/images/catalog/usi/duble/DU{{poza.numar}}.png\">\r\n                    </mat-card-content>\r\n                </mat-card>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isMirrorType();\">\r\n                <img class=\"imagine-galierie\" *ngFor=\"let item of oglinziItems; index as i\" [lightbox]=\"i\"\r\n                    [src]=\"item.data.thumb\">\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isEdgeType();\">\r\n                <img class=\"imagine-galierie\" *ngFor=\"let item of coltareItems; index as i\" [lightbox]=\"i\"\r\n                    [src]=\"item.data.thumb\">\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isGlassType();\">\r\n                <img class=\"imagine-galierie\" *ngFor=\"let item of sticlaItems; index as i\" [lightbox]=\"i\"\r\n                [src]=\"item.data.thumb\">\r\n                <!-- <mat-card class=\"card\" *ngFor=\"let poza of sticla\">\r\n                    <mat-card-content>\r\n                        <img src=\"./../../assets/images/catalog/sticla/S{{poza.numar}}.png\" height=\"300px\">\r\n                    </mat-card-content>\r\n                </mat-card> -->\r\n            </ng-container>\r\n\r\n        </div>\r\n    </mat-drawer-content>\r\n</mat-drawer-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div align=\"center\" class=\"small-container\">\r\n    <p class=\"white-text\">Informare GDPR</p>\r\n</div>\r\n<div align=\"center\" class=\"text\">\r\n    Această pagină web site nu folosește sau procesează date cu caracter personal.\r\n</div>\r\n\r\n<div align=\"center\" class=\"small-container\">\r\n    <p class=\"white-text\">Locație</p>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"14\">\r\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [label]=\"'Vetroglass'\"></agm-marker>\r\n    </agm-map>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Footer -->\r\n<footer class=\"page-footer font-small pt-4\">\r\n    <!-- Footer Links -->\r\n    <div class=\"container-fluid text-center text-md-center\" style=\"font-size: 20px;\">\r\n        <!-- Grid row -->\r\n        <div class=\"row\">\r\n            <!-- Grid column -->\r\n            <hr class=\"clearfix w-100 d-md-none pb-3\">\r\n            <!-- Grid column -->\r\n            <div class=\"col-md-4 mb-md-0 mb-3\">\r\n                <mat-icon aria-hidden=\"false\" aria-label=\"phone icon\">phonelink_ring</mat-icon>\r\n                <ul class=\"list-unstyled\">\r\n                    <li>\r\n                        <p>+40 0740627897</p>\r\n                    </li>\r\n                    <li>\r\n                        <p>+40 0751499096</p>\r\n                    </li>\r\n                    <li>\r\n                        <p>0334404550</p>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- Grid column -->\r\n            <div class=\"col-md-4 mb-md-0 mb-3\">\r\n                <mat-icon aria-hidden=\"false\" aria-label=\"place icon\">room</mat-icon>\r\n                <ul class=\"list-unstyled\">\r\n                    <li>\r\n                        <p>Strada Alexandru Piru, Nr. 113C, Sat Barați, Mărgineni</p>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- Grid column -->\r\n            <div class=\"col-md-3 mb-md-0 mb-3\">\r\n                <mat-icon aria-hidden=\"false\" aria-label=\"email icon\">mail_outline</mat-icon>\r\n                <ul class=\"list-unstyled\">\r\n                    <li>\r\n                        <p>vetroglass2007@yahoo.com</p>\r\n                    </li>\r\n                    <li>\r\n                        <p>vetroglass2017@gmail.com</p>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Copyright -->\r\n    <div class=\"container-fluid text-center text-md-center\"\r\n    style=\"padding-bottom: 1.5rem; font-size: 15px;\">&#9400; Copyright {{ date }} &#183; All rights reserved.</div>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"header\">\r\n    <div class=\"title\" routerLink=\"/home\">Vetroglass</div>\r\n    <!-- <div class=\"fill-remaining-space\"></div> -->\r\n    <div>\r\n        <div class=\"header-buttons\" fxHide.xs>\r\n            <button class=\"header-item\" mat-button routerLink=\"/acasa\">ACASĂ</button>\r\n            <button class=\"header-item\" mat-button routerLink=\"/servicii\">SERVICII</button>\r\n            <button class=\"header-item\" mat-button routerLink=\"/catalog\">CATALOG</button>\r\n            <button class=\"header-item\" mat-button routerLink=\"/contact\">CONTACT</button>\r\n        </div>\r\n        <button mat-button [mat-menu-trigger-for]=\"menu\" fxHide.gt-xs>\r\n            <mat-icon>menu</mat-icon>\r\n            <mat-menu #menu>\r\n                <button class=\"header-item\" mat-menu-item routerLink=\"/acasa\">ACASĂ</button>\r\n        <button class=\"header-item\" mat-menu-item routerLink=\"/servicii\">SERVICII</button>\r\n        <button class=\"header-item\" mat-menu-item routerLink=\"/catalog\">CATALOG</button>\r\n        <button class=\"header-item\" mat-menu-item routerLink=\"/contact\">CONTACT</button>\r\n        </mat-menu>\r\n        </button>\r\n    </div>\r\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-about></app-about>\r\n<app-services></app-services>\r\n<!-- \r\n<div align=\"center\" class=\"subtitle\">\r\n    PREMII\r\n</div> -->\r\n<app-offer></app-offer>\r\n<app-contact></app-contact>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div align=\"center\" class=\"subtitle\">\r\n        Oferim\r\n    </div>\r\n\r\n    <div align=\"center\" class=\"description\">\r\n        <p align=\"center\">Servicii profesionale de găurire, cântuire, sablare, tăiere și șlefuire sticlă.</p>\r\n        <p align=\"center\">Comercializare de ornamente din sticlă dintr-o gamă variată.</p>\r\n        <p align=\"center\" style=\"font-style: italic;\">La preferințele clientului</p>\r\n    </div>\r\n</div>\r\n<img src=\"../../assets/images/offer.jpg\" style=\"width: 100%; height: 10%;\">");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/antiburglary-glass/antiburglary-glass.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/antiburglary-glass/antiburglary-glass.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-container\">\r\n    <img class=\"title-image\" src=\"../../assets/images/servicii/sticla_laminata_1.jpg\" alt=\"sticla laminata\" />\r\n    <h3 align=center class=\"title\">Sticlă antiefracție</h3>\r\n</div>\r\n\r\n<div align=\"center\" class=\"description\">\r\n    <p align=\"center\">Este un tip de sticlă securizată, obținută prin suprapunerea a două sau mai multe foi de sticlă și intercalarea unor folii sintetice.</p>\r\n    <p align=\"center\">La o eventuală spargere, fragmentele de sticlă rezultate ramân atașate de folia de plastic și astfel sunt evitate accidentele.</p>\r\n</div>\r\n\r\n<div align=\"center\" class=\"image-container\">\r\n    <img style=\"width:100%; height:auto;\" src=\"../../assets/images/servicii/sticla_laminata_2.jpeg\" alt=\"sticla laminata\" />\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/antiburglary-termo-glass/antiburglary-termo-glass.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/antiburglary-termo-glass/antiburglary-termo-glass.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-container\">\r\n    <img class=\"title-image\" src=\"../../assets/images/servicii/geam_termoizolant_antiefractie_1.jpg\" alt=\"geam termoizolant antiefractie\" />\r\n    <h3 align=center class=\"title\">Geam termoizolant antiefracție</h3>\r\n</div>\r\n\r\n<div align=\"center\" class=\"description\">\r\n    <p align=\"center\">Pe lângă caracteristicile de bază ale geamului termoizolant,</p>\r\n    <p align=\"center\">acest tip de geam este special conceput pentru a evita spargerea sticlei.</p>\r\n</div>\r\n\r\n<div align=\"center\" class=\"image-container\">\r\n    <img style=\"width:100%; height:auto;\" src=\"../../assets/images/servicii/geam_termoizolant_antiefractie_2.jpg\" alt=\"geam termoizolant antiefractie\" />\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/blasted-glass/blasted-glass.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/blasted-glass/blasted-glass.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-container\">\r\n    <img class=\"title-image\" src=\"../../../assets/images/servicii/sticla_sablata_1.jpg\" alt=\"sticla sablata\" />\r\n    <h3 align=center class=\"title\">Sticlă sablată</h3>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div class=\"description\">\r\n        <p align=\"center\">Sablarea sticlei constă în mătuirea unei suprafețe prin propulsia unor particule fine și\r\n            abrazive.</p>\r\n        <p align=\"center\">Acest proces poate dura câteva ore, în funcție de dimensiunea geamului.</p>\r\n    </div>\r\n</div>\r\n\r\n<div align=\"center\" class=\"image-container\">\r\n    <img style=\"width:100%; height:auto;\" src=\"../../assets/images/servicii/sticla_sablata_2.jpg\"\r\n        alt=\"sticla sablata\" />\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/bulged-glass/bulged-glass.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/bulged-glass/bulged-glass.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-container\">\r\n    <img class=\"title-image\" src=\"../../../assets/images/servicii/sticla_bombata_1.jpg\" alt=\"sticla bombată\" />\r\n    <h3 align=center class=\"title\">Sticlă bombată</h3>\r\n</div>\r\n\r\n<div align=\"center\" class=\"description\">\r\n    <p align=\"center\">Curbarea sticlei se realizează folosind un cuptor specializat în această tehnică.</p>\r\n    <p align=\"center\">Sticla trece printr-un proces de încălzire la temperaturi suficient de ridicate pentru ca aceasta să poată fi modelată și ulterior curbată.</p>\r\n</div>\r\n\r\n<div align=\"center\" class=\"image-container\">\r\n    <img style=\"width:100%; height:auto;\" src=\"../../assets/images/servicii/sticla_bombata.jpg\"\r\n        alt=\"sticla bombată\" />\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/door-glass/door-glass.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/door-glass/door-glass.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-container\">\r\n    <img class=\"title-image\" src=\"../../assets/images/servicii/usi_din_sticla_4.jpg\" alt=\"Ușă din sticla\" />\r\n    <h3 align=center class=\"title\">Uși din sticlă</h3>\r\n</div>\r\n\r\n<div align=\"center\" class=\"description\">\r\n    <p align=\"center\">Permite pătrunderea luminii naturale.</p>\r\n    <p align=\"center\">Sticla aleasă protejează interiorului casei indiferent de anotimp.</p>\r\n</div>\r\n\r\n<div align=\"center\" class=\"image-container\">\r\n    <img style=\"width:100%; height:auto;\" src=\"../../assets/images/servicii/usi_din_sticla_3.jpg\" alt=\"Ușă din sticla\" />\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/double-triple-termo-glass/double-triple-termo-glass.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/double-triple-termo-glass/double-triple-termo-glass.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-container\">\r\n    <img class=\"title-image\" src=\"../../assets/images/servicii/geam_termoizolant_1.jpeg\" alt=\"geam termoizolant\" />\r\n    <h3 align=center class=\"title\">Geam termoizolant</h3>\r\n</div>\r\n\r\n<div align=\"center\" class=\"description\">\r\n    <p align=\"center\">Acest tip de geam este structurat din mai multe panouri de sticlă separate de un material</p>\r\n    <p align=\"center\">cu o conductivitate scăzută, ideal pentru a izola interiorul în anotimpul rece.</p>\r\n</div>\r\n\r\n<div align=\"center\" class=\"image-container\">\r\n    <img style=\"width:100%; height:auto;\" src=\"../../assets/images/servicii/geam_termoizolant_2.jpg\" alt=\"geam termoizolant\" />\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/furniture-glass/furniture-glass.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/furniture-glass/furniture-glass.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-container\">\r\n    <img class=\"title-image\" src=\"../../assets/images/servicii/mobilier_din_sticla_6.jpg\" alt=\"Mobilier din sticla\" />\r\n    <h3 align=center class=\"title\">Mobilier din sticlă</h3>\r\n</div>\r\n\r\n<div align=\"center\" class=\"description\">\r\n    <p align=\"center\">Oferă eleganță și lumină camerelor și birourilor.</p>\r\n    <p align=\"center\">Sticla poate fi prelucrată pentru a produce piese de mobilier din sticlă integral sau poate fi integrată cu un alt material.</p>\r\n</div>\r\n\r\n<div align=\"center\" class=\"image-container\">\r\n    <img style=\"width:100%; height:auto;\" src=\"../../assets/images/servicii/mobilier_sticla_4.jpg\" alt=\"Mobilier din sticla\" />\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/laccato-glass/laccato-glass.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/laccato-glass/laccato-glass.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-container\">\r\n    <img class=\"title-image\" src=\"../../assets/images/servicii/sticla_lacuita_1.jpg\" alt=\"sticla lacuita\" />\r\n    <h3 align=center class=\"title\">Sticlă lăcuită</h3>\r\n</div>\r\n\r\n<div align=\"center\" class=\"description\">\r\n    <p align=\"center\">Sticla trece printr-un tratament special pentru a asigura aderența optimă a lacului aplicat.</p>\r\n    <p align=\"center\">Culoarea sticlei și sclipirea acesteia sunt îmbunătățite.</p>\r\n</div>\r\n\r\n<div align=\"center\" class=\"image-container\">\r\n    <img style=\"width:100%; height:auto;\" src=\"../../assets/images/servicii/sticla_lacuita_2.jpg\" alt=\"sticla lacuita\" />\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/mirrors/mirrors.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/mirrors/mirrors.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-container\">\r\n    <img class=\"title-image\" src=\"../../assets/images/servicii/oglinzi_4.jpg\" alt=\"Oglindă\" />\r\n    <h3 align=center class=\"title\">Oglinzi</h3>\r\n</div>\r\n\r\n<div align=\"center\" class=\"description\">\r\n    <p align=\"center\">Obținute prin procesul de aplicare a unui strat subțire de argint metalic pe o bucată de sticlă transparentă. </p>\r\n</div>\r\n\r\n<div align=\"center\" class=\"image-container\">\r\n    <img style=\"width:100%; height:auto;\" src=\"../../assets/images/servicii/oglinzi_2.jpg\" alt=\"Oglindă\" />\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/ornamental-glass/ornamental-glass.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/ornamental-glass/ornamental-glass.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>ornamental-glass works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/ornamental-termo-glass/ornamental-termo-glass.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/ornamental-termo-glass/ornamental-termo-glass.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-container\">\r\n    <img class=\"title-image\" src=\"../../assets/images/servicii/geam_termoizolant_1.jpeg\" alt=\"geam termoizolant cu bagheta\" />\r\n    <h3 align=center class=\"title\">Geam termoizolant cu baghetă</h3>\r\n</div>\r\n\r\n<div align=\"center\" class=\"description\">\r\n    <p align=\"center\">Are aceleași caracteristici ca și geamul termoizolant de bază, însă este</p>\r\n    <p align=\"center\">îmbunățătit cu o baghetă ornamentală. Se poate aplica și un model la alegere.</p>\r\n</div>\r\n\r\n<div align=\"center\" class=\"image-container\">\r\n    <img style=\"width:100%; height:auto;\" src=\"../../assets/images/servicii/geam_termoizolant_bagheta_2.jpg\" alt=\"geam termoizolant cu bagheta\" />\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/partitions-glass/partitions-glass.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/partitions-glass/partitions-glass.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>partitions-glass works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/personalized-termo-glass/personalized-termo-glass.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/personalized-termo-glass/personalized-termo-glass.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-container\">\r\n    <img class=\"title-image\" src=\"../../assets/images/servicii/geam_termoizolant_personalizat_1.jpg\" alt=\"geam termoizolant personalizat\" />\r\n    <h3 align=center class=\"title\">Geam termoizolant personalizat</h3>\r\n</div>\r\n\r\n<div align=\"center\" class=\"description\">\r\n    <p align=\"center\">Are aceleași caracteristici ca și geamul termoizolant de bază,</p>\r\n    <p align=\"center\">însă este îmbunățătit cu un model la alegere.</p>\r\n</div>\r\n\r\n<div align=\"center\" class=\"image-container\">\r\n    <img style=\"width:100%; height:auto;\" src=\"../../assets/images/servicii/geam_termoizolant_personalizat_2.jpg\" alt=\"geam termoizolant personalizat\" />\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/plating-glass/plating-glass.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/plating-glass/plating-glass.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-container\">\r\n    <!-- <img class=\"title-image\" src=\"../../assets/images/servicii/usi_din_sticla_4.jpg\" alt=\"Oglindă\" /> -->\r\n    <h3 align=center class=\"title\">Placări</h3>\r\n</div>\r\n\r\n<div align=\"center\" class=\"description\">\r\n    <h1>Urmează</h1>\r\n    <p align=\"center\"></p>\r\n    <p align=\"center\"></p>\r\n</div>\r\n\r\n<div align=\"center\" class=\"image-container\">\r\n    <!-- <img style=\"width:100%; height:auto;\" src=\"../../assets/images/servicii/usi_din_sticla_3.jpg\" alt=\"Oglindă\" /> -->\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/processed-glass/processed-glass.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/processed-glass/processed-glass.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-container\">\r\n    <img class=\"title-image\" src=\"../../../assets/images/servicii/sticla_prelucrata_5.jpg\" alt=\"sticla prelucrată\" />\r\n    <h3 align=center class=\"title\">Sticlă prelucrată</h3>\r\n</div>\r\n\r\n<div align=\"center\" class=\"description\">\r\n    <p align=\"center\">Prelucrarea sticlei înseamnă controlarea termică sau tratarea chimicală a acesteia pentru a-i îmbunătăți rezistența.</p>\r\n    <p align=\"center\">O sticlă puternică protejează mai bine și este mai greu de spart.</p>\r\n</div>\r\n\r\n<div align=\"center\" class=\"image-container\">\r\n    <img style=\"width:100%; height:auto;\" src=\"../../assets/images/servicii/sticla_prelucrata_2.jpg\"\r\n        alt=\"sticla prelucrată\" />\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/secured-glass/secured-glass.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/secured-glass/secured-glass.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-container\">\r\n    <img class=\"title-image\" src=\"../../assets/images/servicii/sticla_securizata.jpg\" alt=\"sticla securizata\" />\r\n    <h3 align=center class=\"title\">Sticlă securizată</h3>\r\n</div>\r\n\r\n<div align=\"center\" class=\"description\">\r\n    <p>\r\n        Curbarea sticlei se realizează folosind un cuptor specializat în această tehnică.\r\n        Sticla trece printr-un proces de încălzire la temperaturi suficient de ridicate pentru ca aceasta să poată fi modelată și ulterior curbată.\r\n    </p>\r\n</div>\r\n\r\n<div align=\"center\" class=\"image-container\">\r\n    <img style=\"width:100%; height:auto;\" src=\"../../assets/images/servicii/sticla_prelucrata_2.jpg\" alt=\"sticla securizata\" />\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/secured-termo-glass/secured-termo-glass.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/secured-termo-glass/secured-termo-glass.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>secured-termo-glass works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sticla -->\r\n<div class=\"container\">\r\n    <div align=\"center\" class=\"subtitle\">\r\n        Geamuri și sticlă\r\n    </div>\r\n\r\n    <div align=\"center\" class=\"description\">\r\n        <p align=\"center\">Producem și comercializăm geamuri termoizolante, reflexive, antiefracție, sticlă bombată, sablată și personalizată.\r\n            <br>Realizăm sablare personalizată cu oxid de aluminiu.</p>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"image-container\">\r\n    <drag-scroll class=\"image-container\">\r\n        <div *ngFor=\"let service of service_data\">\r\n            <div drag-scroll-item routerLink=\"{{service.route}}\" class=\"image-container-text\">\r\n                <div class=\"service\">\r\n                    <img class=\"service-image\" src='../../assets/images/servicii/{{service.image}}.jpg' />\r\n                </div>\r\n                <div class=\"centered\"> {{service.title}} </div>\r\n            </div>\r\n        </div>\r\n    </drag-scroll>\r\n</div>\r\n\r\n<!-- Mobilier -->\r\n<div class=\"container\">\r\n    <div align=\"center\" class=\"subtitle\">\r\n        Pentru mobilier\r\n    </div>\r\n    <div align=\"center\" class=\"description\">\r\n        <p align=\"center\">\r\n            Producem și livrăm oglinzi, placări și <br> sticlă pentru mobilier, uși sau compartimentări.</p>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"image-container\">\r\n    <drag-scroll class=\"image-container\">\r\n        <div *ngFor=\"let service of service_data_furniture\">\r\n            <div drag-scroll-item routerLink=\"{{service.route}}\" class=\"image-container-text\">\r\n                <div class=\"service\">\r\n                    <img class=\"service-image\" src='../../assets/images/servicii/furniture/{{service.image}}.jpg' />\r\n                </div>\r\n                <div class=\"centered\"> {{service.title}} </div>\r\n            </div>\r\n        </div>\r\n    </drag-scroll>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/shower-glass/shower-glass.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/shower-glass/shower-glass.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>shower-glass works!</p>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

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

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  padding-bottom: 10rem;\n  width: 100%;\n}\n\n.subtitle {\n  font-weight: bold;\n  font-size: 30px;\n  padding-top: 10rem;\n  padding-bottom: 2rem;\n}\n\n.container {\n  font-family: \"Google Sans\", Arial, sans-serif;\n  max-width: 100%;\n  width: 100%;\n  padding: 0;\n  background-color: #fafafa;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXHZldHJvZ2xhc3Mvc3JjXFxhcHBcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsNkNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIixBcmlhbCxzYW5zLXNlcmlmO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIC8vIG1hcmdpbi10b3A6IDEwcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0iLCIuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nLWJvdHRvbTogMTByZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3VidGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTByZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutComponent);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookieconsent */ "./node_modules/ngx-cookieconsent/esm2015/ngx-cookieconsent.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




let AppComponent = class AppComponent {
    constructor(ccService, translateService) {
        this.ccService = ccService;
        this.translateService = translateService;
    }
    ngOnInit() {
        this.ccService.getConfig().content = this.ccService.getConfig().content || {};
        // Override default messages with the translated ones
        this.ccService.getConfig().content.header = 'Folosim Cookie-uri pe acest website!';
        this.ccService.getConfig().content.message = 'Acest website folosește cookie-uri pentru a asigura cea mai bună experiență utilizatorilor.';
        this.ccService.getConfig().content.dismiss = 'Am înțeles!';
        this.ccService.getConfig().content.allow = 'Permite Cookie-uri';
        this.ccService.getConfig().content.deny = 'Refuză';
        this.ccService.getConfig().content.link = 'Mai multe informații';
        this.ccService.getConfig().content.policy = 'Politica Cookie';
        this.ccService.destroy(); //remove previous cookie bar (with default messages)
        this.ccService.init(this.ccService.getConfig()); // update config with translated messages
        // subscribe to cookieconsent observables to react to main events
        this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(() => {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.popupCloseSubscription = this.ccService.popupClose$.subscribe(() => {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.initializeSubscription = this.ccService.initialize$.subscribe((event) => {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.statusChangeSubscription = this.ccService.statusChange$.subscribe((event) => {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(() => {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe((event) => {
            // you can use this.ccService.getConfig() to do stuff...
        });
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
};
AppComponent.ctorParameters = () => [
    { type: ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_2__["NgcCookieConsentService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_2__["NgcCookieConsentService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm2015/agm-direction.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catalog/catalog.component */ "./src/app/catalog/catalog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-useful-swiper */ "./node_modules/ngx-useful-swiper/fesm2015/ngx-useful-swiper.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _services_blasted_glass_blasted_glass_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/blasted-glass/blasted-glass.component */ "./src/app/services/blasted-glass/blasted-glass.component.ts");
/* harmony import */ var _services_bulged_glass_bulged_glass_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/bulged-glass/bulged-glass.component */ "./src/app/services/bulged-glass/bulged-glass.component.ts");
/* harmony import */ var _services_processed_glass_processed_glass_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/processed-glass/processed-glass.component */ "./src/app/services/processed-glass/processed-glass.component.ts");
/* harmony import */ var _services_antiburglary_glass_antiburglary_glass_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/antiburglary-glass/antiburglary-glass.component */ "./src/app/services/antiburglary-glass/antiburglary-glass.component.ts");
/* harmony import */ var _services_secured_glass_secured_glass_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/secured-glass/secured-glass.component */ "./src/app/services/secured-glass/secured-glass.component.ts");
/* harmony import */ var _services_ornamental_glass_ornamental_glass_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/ornamental-glass/ornamental-glass.component */ "./src/app/services/ornamental-glass/ornamental-glass.component.ts");
/* harmony import */ var _services_door_glass_door_glass_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/door-glass/door-glass.component */ "./src/app/services/door-glass/door-glass.component.ts");
/* harmony import */ var _services_partitions_glass_partitions_glass_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/partitions-glass/partitions-glass.component */ "./src/app/services/partitions-glass/partitions-glass.component.ts");
/* harmony import */ var _services_shower_glass_shower_glass_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/shower-glass/shower-glass.component */ "./src/app/services/shower-glass/shower-glass.component.ts");
/* harmony import */ var _services_furniture_glass_furniture_glass_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/furniture-glass/furniture-glass.component */ "./src/app/services/furniture-glass/furniture-glass.component.ts");
/* harmony import */ var _services_plating_glass_plating_glass_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/plating-glass/plating-glass.component */ "./src/app/services/plating-glass/plating-glass.component.ts");
/* harmony import */ var _services_mirrors_mirrors_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/mirrors/mirrors.component */ "./src/app/services/mirrors/mirrors.component.ts");
/* harmony import */ var _services_laccato_glass_laccato_glass_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/laccato-glass/laccato-glass.component */ "./src/app/services/laccato-glass/laccato-glass.component.ts");
/* harmony import */ var _services_double_triple_termo_glass_double_triple_termo_glass_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/double-triple-termo-glass/double-triple-termo-glass.component */ "./src/app/services/double-triple-termo-glass/double-triple-termo-glass.component.ts");
/* harmony import */ var _services_personalized_termo_glass_personalized_termo_glass_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/personalized-termo-glass/personalized-termo-glass.component */ "./src/app/services/personalized-termo-glass/personalized-termo-glass.component.ts");
/* harmony import */ var _services_ornamental_termo_glass_ornamental_termo_glass_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/ornamental-termo-glass/ornamental-termo-glass.component */ "./src/app/services/ornamental-termo-glass/ornamental-termo-glass.component.ts");
/* harmony import */ var _services_antiburglary_termo_glass_antiburglary_termo_glass_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/antiburglary-termo-glass/antiburglary-termo-glass.component */ "./src/app/services/antiburglary-termo-glass/antiburglary-termo-glass.component.ts");
/* harmony import */ var _services_secured_termo_glass_secured_termo_glass_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/secured-termo-glass/secured-termo-glass.component */ "./src/app/services/secured-termo-glass/secured-termo-glass.component.ts");
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./offer/offer.component */ "./src/app/offer/offer.component.ts");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-drag-scroll */ "./node_modules/ngx-drag-scroll/fesm2015/ngx-drag-scroll.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm2015/ngx-gallery-core.js");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./node_modules/@ngx-gallery/lightbox/fesm2015/ngx-gallery-lightbox.js");
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ngx-cookieconsent */ "./node_modules/ngx-cookieconsent/esm2015/ngx-cookieconsent.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");















































const AppRoutes = [
    { path: 'catalog', component: _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_8__["CatalogComponent"] },
    { path: 'sticla_sablata', component: _services_blasted_glass_blasted_glass_component__WEBPACK_IMPORTED_MODULE_20__["BlastedGlassComponent"] },
    { path: 'sticla_bombata', component: _services_bulged_glass_bulged_glass_component__WEBPACK_IMPORTED_MODULE_21__["BulgedGlassComponent"] },
    { path: 'sticla_prelucrata', component: _services_processed_glass_processed_glass_component__WEBPACK_IMPORTED_MODULE_22__["ProcessedGlassComponent"] },
    { path: 'sticla_antiefractie', component: _services_antiburglary_glass_antiburglary_glass_component__WEBPACK_IMPORTED_MODULE_23__["AntiburglaryGlassComponent"] },
    { path: 'sticla_securizata', component: _services_secured_glass_secured_glass_component__WEBPACK_IMPORTED_MODULE_24__["SecuredGlassComponent"] },
    { path: 'sticla_ornamentala', component: _services_ornamental_glass_ornamental_glass_component__WEBPACK_IMPORTED_MODULE_25__["OrnamentalGlassComponent"] },
    { path: 'usi_din_sticla', component: _services_door_glass_door_glass_component__WEBPACK_IMPORTED_MODULE_26__["DoorGlassComponent"] },
    { path: 'compartimentari_din_sticla', component: _services_partitions_glass_partitions_glass_component__WEBPACK_IMPORTED_MODULE_27__["PartitionsGlassComponent"] },
    { path: 'cabine_de_dus', component: _services_shower_glass_shower_glass_component__WEBPACK_IMPORTED_MODULE_28__["ShowerGlassComponent"] },
    { path: 'mobilier_din_sticla', component: _services_furniture_glass_furniture_glass_component__WEBPACK_IMPORTED_MODULE_29__["FurnitureGlassComponent"] },
    { path: 'placari_cu_sticla', component: _services_plating_glass_plating_glass_component__WEBPACK_IMPORTED_MODULE_30__["PlatingGlassComponent"] },
    { path: 'oglinzi', component: _services_mirrors_mirrors_component__WEBPACK_IMPORTED_MODULE_31__["MirrorsComponent"] },
    { path: 'sticla_laccato', component: _services_laccato_glass_laccato_glass_component__WEBPACK_IMPORTED_MODULE_32__["LaccatoGlassComponent"] },
    { path: 'geam_termo_dublu_triplu', component: _services_double_triple_termo_glass_double_triple_termo_glass_component__WEBPACK_IMPORTED_MODULE_33__["DoubleTripleTermoGlassComponent"] },
    { path: 'geam_termo_personalizat', component: _services_personalized_termo_glass_personalized_termo_glass_component__WEBPACK_IMPORTED_MODULE_34__["PersonalizedTermoGlassComponent"] },
    { path: 'geam_termo_bagheta', component: _services_ornamental_termo_glass_ornamental_termo_glass_component__WEBPACK_IMPORTED_MODULE_35__["OrnamentalTermoGlassComponent"] },
    { path: 'geam_termo_antiefractie', component: _services_antiburglary_termo_glass_antiburglary_termo_glass_component__WEBPACK_IMPORTED_MODULE_36__["AntiburglaryTermoGlassComponent"] },
    { path: 'geam_termo_securizat', component: _services_secured_termo_glass_secured_termo_glass_component__WEBPACK_IMPORTED_MODULE_37__["SecuredTermoGlassComponent"] },
    { path: 'servicii', component: _services_services_component__WEBPACK_IMPORTED_MODULE_14__["ServicesComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] }
];
const cookieConfig = {
    cookie: {
        domain: 'vetroglass.ro'
    },
    palette: {
        popup: {
            background: '#091540'
        },
        button: {
            background: '#091540'
        }
    },
    theme: 'block',
    type: 'opt-out'
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_8__["CatalogComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
            _services_services_component__WEBPACK_IMPORTED_MODULE_14__["ServicesComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"],
            _services_blasted_glass_blasted_glass_component__WEBPACK_IMPORTED_MODULE_20__["BlastedGlassComponent"],
            _services_bulged_glass_bulged_glass_component__WEBPACK_IMPORTED_MODULE_21__["BulgedGlassComponent"],
            _services_processed_glass_processed_glass_component__WEBPACK_IMPORTED_MODULE_22__["ProcessedGlassComponent"],
            _services_antiburglary_glass_antiburglary_glass_component__WEBPACK_IMPORTED_MODULE_23__["AntiburglaryGlassComponent"],
            _services_secured_glass_secured_glass_component__WEBPACK_IMPORTED_MODULE_24__["SecuredGlassComponent"],
            _services_ornamental_glass_ornamental_glass_component__WEBPACK_IMPORTED_MODULE_25__["OrnamentalGlassComponent"],
            _services_door_glass_door_glass_component__WEBPACK_IMPORTED_MODULE_26__["DoorGlassComponent"],
            _services_partitions_glass_partitions_glass_component__WEBPACK_IMPORTED_MODULE_27__["PartitionsGlassComponent"],
            _services_shower_glass_shower_glass_component__WEBPACK_IMPORTED_MODULE_28__["ShowerGlassComponent"],
            _services_furniture_glass_furniture_glass_component__WEBPACK_IMPORTED_MODULE_29__["FurnitureGlassComponent"],
            _services_plating_glass_plating_glass_component__WEBPACK_IMPORTED_MODULE_30__["PlatingGlassComponent"],
            _services_mirrors_mirrors_component__WEBPACK_IMPORTED_MODULE_31__["MirrorsComponent"],
            _services_laccato_glass_laccato_glass_component__WEBPACK_IMPORTED_MODULE_32__["LaccatoGlassComponent"],
            _services_double_triple_termo_glass_double_triple_termo_glass_component__WEBPACK_IMPORTED_MODULE_33__["DoubleTripleTermoGlassComponent"],
            _services_personalized_termo_glass_personalized_termo_glass_component__WEBPACK_IMPORTED_MODULE_34__["PersonalizedTermoGlassComponent"],
            _services_ornamental_termo_glass_ornamental_termo_glass_component__WEBPACK_IMPORTED_MODULE_35__["OrnamentalTermoGlassComponent"],
            _services_antiburglary_termo_glass_antiburglary_termo_glass_component__WEBPACK_IMPORTED_MODULE_36__["AntiburglaryTermoGlassComponent"],
            _services_secured_termo_glass_secured_termo_glass_component__WEBPACK_IMPORTED_MODULE_37__["SecuredTermoGlassComponent"],
            _offer_offer_component__WEBPACK_IMPORTED_MODULE_38__["OfferComponent"]
        ],
        imports: [
            _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_44__["LightboxModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_42__["FormsModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_40__["MatPaginatorModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
            ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_17__["NgxUsefulSwiperModule"],
            agm_direction__WEBPACK_IMPORTED_MODULE_4__["AgmDirectionModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_41__["MatTableModule"],
            ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_39__["DragScrollModule"],
            _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_43__["GalleryModule"],
            _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_44__["LightboxModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDkvGE1S5R8T5FqWeSCkPhOtk7esZ43ZOU'
            }),
            ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_45__["NgcCookieConsentModule"].forRoot(cookieConfig),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_46__["TranslateModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["WavesModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["MDBBootstrapModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(AppRoutes, {
                onSameUrlNavigation: 'reload',
                scrollPositionRestoration: 'enabled'
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/catalog/catalog.component.scss":
/*!************************************************!*\
  !*** ./src/app/catalog/catalog.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-drawer-content {\n  overflow: hidden;\n}\n\n.submenu {\n  overflow-y: hidden;\n  -webkit-transition: 300ms ease-in-out;\n  transition: 300ms ease-in-out;\n  height: 0;\n}\n\n.submenu.expanded {\n  display: inline;\n}\n\n.menu-button {\n  -webkit-transition: 300ms ease-in-out;\n  transition: 300ms ease-in-out;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n\n.menu-button.rotated {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.title {\n  background: white;\n  padding: 2%;\n  text-transform: uppercase;\n  font-family: \"Google Sanse\", serif;\n  border-bottom: 1px solid #e8eaed;\n}\n\n.title-container {\n  width: 100%;\n  height: 50%;\n  margin-bottom: 10%;\n}\n\n.title-image {\n  height: 100%;\n  width: 100%;\n}\n\n.usa {\n  width: 200px;\n  height: 400px;\n}\n\n.container {\n  max-width: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-flow: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: white !important;\n}\n\n.text-image {\n  font-size: 18px;\n  font-family: \"Google Sanse\", sans-serif;\n  margin-top: 15px;\n}\n\n.text-image:hover {\n  text-decoration: underline;\n  text-underline-position: under;\n}\n\n.imagine-galierie {\n  width: 200px;\n  height: 100%;\n}\n\n.card {\n  width: 200px;\n  height: 100%;\n  margin-left: 2vw;\n  margin-right: 2vw;\n  margin-bottom: 2vw;\n  box-shadow: none;\n}\n\n.doublecard {\n  width: 300px;\n  height: 100%;\n  margin-left: 2vw;\n  margin-right: 2vw;\n  margin-bottom: 2vw;\n  box-shadow: none;\n}\n\n.image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 80%;\n  border-radius: 4px;\n}\n\nmat-paginator {\n  color: black;\n  font-size: medium;\n}\n\n.example-container {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWxvZy9EOlxcdmV0cm9nbGFzcy9zcmNcXGFwcFxcY2F0YWxvZ1xcY2F0YWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2F0YWxvZy9jYXRhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLHFDQUFBO0VBQUEsNkJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQ0FBQTtVQUFBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0NBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhdGFsb2cvY2F0YWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc3VibWVudSB7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5cclxuLnN1Ym1lbnUuZXhwYW5kZWQge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4ubWVudS1idXR0b24ge1xyXG4gICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxufVxyXG5cclxuLm1lbnUtYnV0dG9uLnJvdGF0ZWQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNlXCIsIHNlcmlmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XHJcbn1cclxuXHJcbi50aXRsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuLnRpdGxlLWltYWdlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udXNhIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtaW1hZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fuc2UnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnRleHQtaW1hZ2U6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbjogdW5kZXI7XHJcbn1cclxuXHJcbi5pbWFnaW5lLWdhbGllcmlle1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAydnc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAydnc7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZG91YmxlY2FyZCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAydnc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAydnc7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5tYXQtcGFnaW5hdG9yIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4OztcclxufSIsIm1hdC1kcmF3ZXItY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zdWJtZW51IHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uc3VibWVudS5leHBhbmRlZCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuXG4ubWVudS1idXR0b24ucm90YXRlZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi50aXRsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNlXCIsIHNlcmlmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWFlZDtcbn1cblxuLnRpdGxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG4udGl0bGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXNhIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1pbWFnZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50ZXh0LWltYWdlOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uOiB1bmRlcjtcbn1cblxuLmltYWdpbmUtZ2FsaWVyaWUge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgbWFyZ2luLXJpZ2h0OiAydnc7XG4gIG1hcmdpbi1ib3R0b206IDJ2dztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmRvdWJsZWNhcmQge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgbWFyZ2luLXJpZ2h0OiAydnc7XG4gIG1hcmdpbi1ib3R0b206IDJ2dztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5tYXQtcGFnaW5hdG9yIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/catalog/catalog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/catalog/catalog.component.ts ***!
  \**********************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_poza__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/poza */ "./src/app/model/poza.ts");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-image-slider */ "./node_modules/ng-image-slider/fesm2015/ng-image-slider.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm2015/ngx-gallery-core.js");
/* harmony import */ var _model_pozaGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/pozaGallery */ "./src/app/model/pozaGallery.ts");






let CatalogComponent = class CatalogComponent {
    constructor(gallery, gallery2) {
        this.gallery = gallery;
        this.gallery2 = gallery2;
        this.showSubmenuDoors = false;
        this.showSubmenuGlass = false;
        this.showSimpleDoors = false;
        this.selectionType = "simple";
        this.pageIndex = 0;
        this.pageSize = 24;
        this.poze = [];
        this.usiCopii = [];
        this.usiFlorale = [];
        this.usiSalon = [];
        this.usiBisericesti = [];
        this.usiDublePoze = [];
        this.myImage = './../../assets/images/catalog/inscriptii/I1.png';
        this.myThumbnail = './../../assets/images/catalog/inscriptii/I1.png';
        this.oglinziGallery = [];
        this.coltareGallery = [];
        this.sticlaGallery = [];
        // Usi
        for (let i = 1; i <= 140; i++) {
            this.poze.push(new _model_poza__WEBPACK_IMPORTED_MODULE_2__["Poza"]("Poza " + i, i));
        }
        for (let i = 1; i <= 16; i++) {
            this.usiDublePoze.push(new _model_poza__WEBPACK_IMPORTED_MODULE_2__["Poza"]("Poza " + i, i));
        }
        for (let i = 1; i <= 17; i++) {
            this.usiSalon.push(new _model_poza__WEBPACK_IMPORTED_MODULE_2__["Poza"]("Poza " + i, i));
        }
        for (let i = 1; i <= 20; i++) {
            this.usiCopii.push(new _model_poza__WEBPACK_IMPORTED_MODULE_2__["Poza"]("Poza " + i, i));
        }
        for (let i = 1; i <= 60; i++) {
            this.usiFlorale.push(new _model_poza__WEBPACK_IMPORTED_MODULE_2__["Poza"]("Poza " + i, i));
        }
        for (let i = 1; i <= 29; i++) {
            this.usiBisericesti.push(new _model_poza__WEBPACK_IMPORTED_MODULE_2__["Poza"]("Poza " + i, i));
        }
        // Oglinzi
        for (let i = 1; i <= 6; i++) {
            let oglinda = new _model_pozaGallery__WEBPACK_IMPORTED_MODULE_5__["PozaGallery"]("./../../assets/images/catalog/oglinzi/O" + i + ".png", "./../../assets/images/catalog/oglinzi/O" + i + ".png", i);
            this.oglinziGallery.push(oglinda);
        }
        // Sticla
        for (let i = 1; i <= 4; i++) {
            let sticla = new _model_pozaGallery__WEBPACK_IMPORTED_MODULE_5__["PozaGallery"]("./../../assets/images/catalog/sticla/S" + i + ".png", "./../../assets/images/catalog/sticla/S" + i + ".png", i);
            this.sticlaGallery.push(sticla);
        }
        // Coltare
        for (let i = 1; i <= 2; i++) {
            let coltar = new _model_pozaGallery__WEBPACK_IMPORTED_MODULE_5__["PozaGallery"]("./../../assets/images/catalog/coltare/C" + i + ".png", "./../../assets/images/catalog/coltare/C" + i + ".png", i);
            this.coltareGallery.push(coltar);
        }
        this.oglinziItems = this.oglinziGallery.map(item => new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["ImageItem"]({ src: item.getSrcUrl(), thumb: item.getPreviewUrl() }));
        this.sticlaItems = this.sticlaGallery.map(item => new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["ImageItem"]({ src: item.getSrcUrl(), thumb: item.getPreviewUrl() }));
        this.coltareItems = this.coltareGallery.map(item => new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["ImageItem"]({ src: item.getSrcUrl(), thumb: item.getPreviewUrl() }));
    }
    ngOnInit() {
        this.getPageNumber({ pageIndex: this.pageIndex, pageSize: this.pageSize });
    }
    changeSimpleDoorsState() {
        this.showSimpleDoors = !this.showSimpleDoors;
    }
    changeSubmenuDoorsState() {
        this.showSubmenuDoors = !this.showSubmenuDoors;
    }
    changeSubmenuGlassState() {
        this.showSubmenuGlass = !this.showSubmenuGlass;
    }
    getSimpleDoorsState() {
        return this.showSimpleDoors;
    }
    getSubmenuDoorsState() {
        return this.showSubmenuDoors;
    }
    getSubmenuGlassState() {
        return this.showSubmenuGlass;
    }
    changeSelectionType(selectionType) {
        if (selectionType === "mirrors") {
            console.log("Mirror type. Resetting gallery");
            this.gallery.resetAll();
            this.gallery.ref().load(this.oglinziItems);
        }
        if (selectionType === "edge") {
            console.log("Edge type. Resetting gallery");
            this.gallery.resetAll();
            this.gallery.ref().load(this.coltareItems);
        }
        if (selectionType === "glass") {
            console.log("Glass type. Resetting gallery");
            this.gallery.resetAll();
            this.gallery.ref().load(this.sticlaItems);
        }
        this.selectionType = selectionType;
    }
    isSimpleDoorType() {
        return this.selectionType == "simple";
    }
    isChurchDoorType() {
        return this.selectionType == "church";
    }
    isChildrenDoorType() {
        return this.selectionType == "children";
    }
    isFlowersDoorType() {
        return this.selectionType == "flowers";
    }
    isSalonDoorType() {
        return this.selectionType == "salon";
    }
    isDoubleDoorType() {
        return this.selectionType == "double";
    }
    isMirrorType() {
        return this.selectionType == "mirrors";
    }
    isGlassType() {
        return this.selectionType == "glass";
    }
    isEdgeType() {
        return this.selectionType == "edge";
    }
    getPageNumber(obj) {
        let index = 0, startingIndex = obj.pageIndex * obj.pageSize, endingIndex = startingIndex + obj.pageSize;
        this.allImages = this.poze.filter(() => {
            index++;
            return (index > startingIndex && index <= endingIndex) ? true : false;
        });
    }
    getPageNumberUsiDuble(obj) {
        let index = 0, startingIndex = obj.pageIndex * obj.pageSize, endingIndex = startingIndex + obj.pageSize;
        this.toateUsileDuble = this.usiDublePoze.filter(() => {
            index++;
            return (index > startingIndex && index <= endingIndex) ? true : false;
        });
    }
};
CatalogComponent.ctorParameters = () => [
    { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["Gallery"] },
    { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["Gallery"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nav', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng_image_slider__WEBPACK_IMPORTED_MODULE_3__["NgImageSliderComponent"])
], CatalogComponent.prototype, "slider", void 0);
CatalogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catalog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./catalog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/catalog/catalog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./catalog.component.scss */ "./src/app/catalog/catalog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["Gallery"], _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["Gallery"]])
], CatalogComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 500px;\n  width: 100%;\n}\n\n.container {\n  font-family: \"Google Sans\", Arial, sans-serif;\n  max-width: 100%;\n  width: 100%;\n  padding: 0;\n  background-color: #fafafa;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.small-container {\n  background-color: #091540;\n  max-width: 100%;\n  width: 100%;\n  padding: 0;\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n\n.white-text {\n  color: #fafafa;\n  font-family: \"Google Sans\", Arial, sans-serif;\n  font-weight: bold;\n  font-size: 30px;\n}\n\n.text {\n  background-color: #fafafa;\n  font-family: \"Google Sans\", Arial, sans-serif;\n  max-width: 100%;\n  width: 100%;\n  padding: 0;\n  font-weight: bold;\n  font-size: 20px;\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9EOlxcdmV0cm9nbGFzcy9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnNtYWxsLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTE1NDA7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xyXG59XHJcblxyXG4ud2hpdGUtdGV4dHtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnRleHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XHJcbn0iLCJhZ20tbWFwIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5zbWFsbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkxNTQwO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG59XG5cbi53aGl0ZS10ZXh0IHtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4udGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() {
        this.lat = 46.577461;
        this.lng = 26.868266;
        this.dir = undefined;
    }
    getDirection() {
        this.dir = {
            origin: { lat: 24.799448, lng: 120.979021 },
            destination: { lat: 24.799524, lng: 120.975017 }
        };
    }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContactComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  color: white;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-top: 50px;\n  font-family: \"Roboto\", sans-serif;\n}\n\nmat-icon {\n  padding-bottom: 50px;\n}\n\np {\n  margin: 0;\n}\n\n.page-footer {\n  background-color: #091540 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Q6XFx2ZXRyb2dsYXNzL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURHQTtFQUNFLG9CQUFBO0FDQUY7O0FER0E7RUFDSSxTQUFBO0FDQUo7O0FER0E7RUFDRSxvQ0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAvLyBib3gtc2hhZG93OiAwcHggLTRweCAzcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnBhZ2UtZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzA5MTU0MCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxubWF0LWljb24ge1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBhZ2UtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5MTU0MCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
        this.date = new Date().getUTCFullYear();
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .navigation-tabs .mat-tab-label-container {\n  display: none;\n}\n\n.vertical-align-text {\n  padding-top: 2.5px;\n}\n\n.header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  position: fixed;\n  z-index: 3;\n  padding: 0;\n  opacity: 0.6;\n  top: 0;\n  height: 8%;\n  background-color: white;\n  border-bottom: 1px solid #e8eaed;\n}\n\n.header-buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-right: 15%;\n}\n\n.title {\n  color: black;\n  margin-left: 3rem;\n  float: left;\n  cursor: pointer;\n  font-size: 45px;\n  font-family: \"Tenor Sans\", sans-serif;\n}\n\n.mat-menu-content {\n  background-color: black !important;\n}\n\nmat-menu {\n  color: black !important;\n}\n\n.mat-menu-item {\n  color: black !important;\n}\n\n.header-item.mat-menu-item:hover {\n  color: black !important;\n}\n\n.header-item {\n  color: black;\n  background-color: white;\n  text-decoration: none;\n  font-size: 15px;\n  font-family: \"Tenor Sans\", sans-serif;\n}\n\n.header-item:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 2px;\n  left: 10%;\n  position: absolute;\n  background-color: #c19c78;\n  -webkit-transition: width 0.4s ease 0s, left 0.4s ease 0s;\n  transition: width 0.4s ease 0s, left 0.4s ease 0s;\n  width: 0;\n}\n\n.header-item:hover:after {\n  width: 100%;\n  left: 0;\n}\n\n.fill-remaining-space {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFx2ZXRyb2dsYXNzL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFFSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQ0FKOztBREdBO0VBQ0ksOENBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5REFBQTtFQUFBLGlEQUFBO0VBQ0EsUUFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLE9BQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO1VBQUEsY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubmF2aWdhdGlvbi10YWJzIC5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmVydGljYWwtYWxpZ24tdGV4dCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMi41cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiA4JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XHJcbn1cclxuXHJcbi5oZWFkZXItYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdUZW5vciBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1hdC1tZW51LWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LW1lbnUge1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtbWVudS1pdGVtIHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWl0ZW0ubWF0LW1lbnUtaXRlbTpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlci1pdGVtIHtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJUZW5vciBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5oZWFkZXItaXRlbTphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzE5Yzc4O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlIDBzLCBsZWZ0IDAuNHMgZWFzZSAwcztcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcblxyXG4uaGVhZGVyLWl0ZW06aG92ZXI6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn0iLCI6Om5nLWRlZXAgLm5hdmlnYXRpb24tdGFicyAubWF0LXRhYi1sYWJlbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udmVydGljYWwtYWxpZ24tdGV4dCB7XG4gIHBhZGRpbmctdG9wOiAyLjVweDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAzO1xuICBwYWRkaW5nOiAwO1xuICBvcGFjaXR5OiAwLjY7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiA4JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlYWVkO1xufVxuXG4uaGVhZGVyLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XG4gIGZsb2F0OiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgZm9udC1mYW1pbHk6IFwiVGVub3IgU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LW1lbnUtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1tZW51IHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtbWVudS1pdGVtIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaXRlbS5tYXQtbWVudS1pdGVtOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaXRlbSB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJUZW5vciBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXItaXRlbTphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gIGJvdHRvbTogMDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMnB4O1xuICBsZWZ0OiAxMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxOWM3ODtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlIDBzLCBsZWZ0IDAuNHMgZWFzZSAwcztcbiAgd2lkdGg6IDA7XG59XG5cbi5oZWFkZXItaXRlbTpob3ZlcjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subtitle {\n  color: black;\n  font-weight: bold;\n  font-size: 0.5cm;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcdmV0cm9nbGFzcy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VidGl0bGUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDAuNWNtO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIiwiLnN1YnRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjVjbTtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.config = {
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                clickable: true
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            spaceBetween: 30
        };
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm2015/accordion.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm2015/observers.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */












let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"],
            _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_4__["CdkAccordionModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/model/poza.ts":
/*!*******************************!*\
  !*** ./src/app/model/poza.ts ***!
  \*******************************/
/*! exports provided: Poza */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poza", function() { return Poza; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Poza {
    constructor(nume, numar) {
        this.nume = nume;
        this.numar = numar;
    }
}


/***/ }),

/***/ "./src/app/model/pozaGallery.ts":
/*!**************************************!*\
  !*** ./src/app/model/pozaGallery.ts ***!
  \**************************************/
/*! exports provided: PozaGallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PozaGallery", function() { return PozaGallery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PozaGallery {
    constructor(src, preview, nr) {
        this.srcUrl = src;
        this.previewUrl = preview;
        this.number = nr;
    }
    getSrcUrl() { return this.srcUrl; }
    getPreviewUrl() { return this.previewUrl; }
}


/***/ }),

/***/ "./src/app/offer/offer.component.scss":
/*!********************************************!*\
  !*** ./src/app/offer/offer.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  padding-bottom: 5rem;\n  width: 100%;\n}\n\n.subtitle {\n  font-weight: bold;\n  font-size: 30px;\n  padding-top: 10rem;\n  padding-bottom: 2rem;\n}\n\n.container {\n  font-family: \"Google Sans\", Arial, sans-serif;\n  max-width: 100%;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 5rem;\n  background-color: #fafafa;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmZXIvRDpcXHZldHJvZ2xhc3Mvc3JjXFxhcHBcXG9mZmVyXFxvZmZlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb2ZmZXIvb2ZmZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL29mZmVyL29mZmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0iLCIuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbi5jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */");

/***/ }),

/***/ "./src/app/offer/offer.component.ts":
/*!******************************************!*\
  !*** ./src/app/offer/offer.component.ts ***!
  \******************************************/
/*! exports provided: OfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferComponent", function() { return OfferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OfferComponent = class OfferComponent {
    constructor() { }
    ngOnInit() {
    }
};
OfferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./offer.component.scss */ "./src/app/offer/offer.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], OfferComponent);



/***/ }),

/***/ "./src/app/services/antiburglary-glass/antiburglary-glass.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/services/antiburglary-glass/antiburglary-glass.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  background: white;\n  padding: 2%;\n  text-transform: uppercase;\n  font-family: \"Google Sanse\", serif;\n  border-bottom: 1px solid #e8eaed;\n}\n\n.title-container {\n  background: #f1f1f1;\n  width: 100%;\n  height: 100%;\n}\n\n.title-image {\n  height: 100%;\n  width: 100%;\n}\n\n.image-container {\n  margin-top: 5%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  margin-left: 20%;\n}\n\n.description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  width: 100%;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvYW50aWJ1cmdsYXJ5LWdsYXNzL0Q6XFx2ZXRyb2dsYXNzL3NyY1xcYXBwXFxzZXJ2aWNlc1xcYW50aWJ1cmdsYXJ5LWdsYXNzXFxhbnRpYnVyZ2xhcnktZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL2FudGlidXJnbGFyeS1nbGFzcy9hbnRpYnVyZ2xhcnktZ2xhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL2FudGlidXJnbGFyeS1nbGFzcy9hbnRpYnVyZ2xhcnktZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNlXCIsIHNlcmlmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlYWVkO1xyXG59XHJcblxyXG4udGl0bGUtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxlLWltYWdlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG4iLCIudGl0bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMiU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zZVwiLCBzZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XG59XG5cbi50aXRsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/services/antiburglary-glass/antiburglary-glass.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/services/antiburglary-glass/antiburglary-glass.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AntiburglaryGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntiburglaryGlassComponent", function() { return AntiburglaryGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AntiburglaryGlassComponent = class AntiburglaryGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
AntiburglaryGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-antiburglary-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./antiburglary-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/antiburglary-glass/antiburglary-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./antiburglary-glass.component.scss */ "./src/app/services/antiburglary-glass/antiburglary-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AntiburglaryGlassComponent);



/***/ }),

/***/ "./src/app/services/antiburglary-termo-glass/antiburglary-termo-glass.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/services/antiburglary-termo-glass/antiburglary-termo-glass.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  background: white;\n  padding: 2%;\n  text-transform: uppercase;\n  font-family: \"Google Sanse\", serif;\n  border-bottom: 1px solid #e8eaed;\n}\n\n.title-container {\n  background: #f1f1f1;\n  width: 100%;\n  height: 100%;\n}\n\n.title-image {\n  height: 100%;\n  width: 100%;\n}\n\n.image-container {\n  margin-top: 5%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  margin-left: 20%;\n}\n\n.description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  width: 100%;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvYW50aWJ1cmdsYXJ5LXRlcm1vLWdsYXNzL0Q6XFx2ZXRyb2dsYXNzL3NyY1xcYXBwXFxzZXJ2aWNlc1xcYW50aWJ1cmdsYXJ5LXRlcm1vLWdsYXNzXFxhbnRpYnVyZ2xhcnktdGVybW8tZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL2FudGlidXJnbGFyeS10ZXJtby1nbGFzcy9hbnRpYnVyZ2xhcnktdGVybW8tZ2xhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ047O0FERUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL2FudGlidXJnbGFyeS10ZXJtby1nbGFzcy9hbnRpYnVyZ2xhcnktdGVybW8tZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc2VcIiwgc2VyaWY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWFlZDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gIH1cclxuICAiLCIudGl0bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMiU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zZVwiLCBzZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XG59XG5cbi50aXRsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/services/antiburglary-termo-glass/antiburglary-termo-glass.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/services/antiburglary-termo-glass/antiburglary-termo-glass.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AntiburglaryTermoGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntiburglaryTermoGlassComponent", function() { return AntiburglaryTermoGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AntiburglaryTermoGlassComponent = class AntiburglaryTermoGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
AntiburglaryTermoGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-antiburglary-termo-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./antiburglary-termo-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/antiburglary-termo-glass/antiburglary-termo-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./antiburglary-termo-glass.component.scss */ "./src/app/services/antiburglary-termo-glass/antiburglary-termo-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AntiburglaryTermoGlassComponent);



/***/ }),

/***/ "./src/app/services/blasted-glass/blasted-glass.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/services/blasted-glass/blasted-glass.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  background: white;\n  padding: 2%;\n  text-transform: uppercase;\n  font-family: \"Google Sanse\", serif;\n  border-bottom: 1px solid #e8eaed;\n}\n\n.title-container {\n  background: #f1f1f1;\n  width: 100%;\n  height: 100%;\n}\n\n.title-image {\n  height: 100%;\n  width: 100%;\n}\n\n.image-container {\n  margin-top: 5%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  margin-left: 20%;\n}\n\n.subtitle {\n  font-weight: bold;\n  font-size: 30px;\n  padding-top: 10rem;\n  padding-bottom: 2rem;\n}\n\n.description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  width: 100%;\n}\n\n.container {\n  font-family: \"Google Sans\", Arial, sans-serif;\n  max-width: 100%;\n  width: 100%;\n  padding: 0;\n  background-color: #fafafa;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvYmxhc3RlZC1nbGFzcy9EOlxcdmV0cm9nbGFzcy9zcmNcXGFwcFxcc2VydmljZXNcXGJsYXN0ZWQtZ2xhc3NcXGJsYXN0ZWQtZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL2JsYXN0ZWQtZ2xhc3MvYmxhc3RlZC1nbGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLDZDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBRUEseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvYmxhc3RlZC1nbGFzcy9ibGFzdGVkLWdsYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyJTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zZVwiLCBzZXJpZjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWFlZDtcclxufVxyXG5cclxuLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50aXRsZS1pbWFnZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCIsQXJpYWwsc2Fucy1zZXJpZjtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMDtcclxuICAvLyBtYXJnaW4tdG9wOiAxMHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vLyAuZGVzY3JpcHRpb24ge1xyXG4vLyAgIGZvbnQtc2l6ZTogMjVweDtcclxuLy8gICBtYXJnaW46IDAgYXV0bztcclxuLy8gICBvdXRsaW5lOiBub25lO1xyXG4vLyAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgcGFkZGluZy10b3A6IDEwcmVtO1xyXG4vLyAgIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4vLyB9XHJcbiIsIi50aXRsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNlXCIsIHNlcmlmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWFlZDtcbn1cblxuLnRpdGxlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aXRsZS1pbWFnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4uc3VidGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTByZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nLXRvcDogMTByZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */");

/***/ }),

/***/ "./src/app/services/blasted-glass/blasted-glass.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/blasted-glass/blasted-glass.component.ts ***!
  \*******************************************************************/
/*! exports provided: BlastedGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlastedGlassComponent", function() { return BlastedGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlastedGlassComponent = class BlastedGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
BlastedGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blasted-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blasted-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/blasted-glass/blasted-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blasted-glass.component.scss */ "./src/app/services/blasted-glass/blasted-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlastedGlassComponent);



/***/ }),

/***/ "./src/app/services/bulged-glass/bulged-glass.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/services/bulged-glass/bulged-glass.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  background: white;\n  padding: 2%;\n  text-transform: uppercase;\n  font-family: \"Google Sanse\", serif;\n  border-bottom: 1px solid #e8eaed;\n}\n\n.title-container {\n  background: #f1f1f1;\n  width: 100%;\n  height: 100%;\n}\n\n.title-image {\n  height: 100%;\n  width: 100%;\n}\n\n.image-container {\n  margin-top: 5%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  margin-left: 20%;\n}\n\n.description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  width: 100%;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvYnVsZ2VkLWdsYXNzL0Q6XFx2ZXRyb2dsYXNzL3NyY1xcYXBwXFxzZXJ2aWNlc1xcYnVsZ2VkLWdsYXNzXFxidWxnZWQtZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL2J1bGdlZC1nbGFzcy9idWxnZWQtZ2xhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL2J1bGdlZC1nbGFzcy9idWxnZWQtZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNlXCIsIHNlcmlmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlYWVkO1xyXG59XHJcblxyXG4udGl0bGUtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxlLWltYWdlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG4iLCIudGl0bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMiU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zZVwiLCBzZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XG59XG5cbi50aXRsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/services/bulged-glass/bulged-glass.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/bulged-glass/bulged-glass.component.ts ***!
  \*****************************************************************/
/*! exports provided: BulgedGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulgedGlassComponent", function() { return BulgedGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BulgedGlassComponent = class BulgedGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
BulgedGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bulged-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bulged-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/bulged-glass/bulged-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bulged-glass.component.scss */ "./src/app/services/bulged-glass/bulged-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BulgedGlassComponent);



/***/ }),

/***/ "./src/app/services/door-glass/door-glass.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/services/door-glass/door-glass.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  background: white;\n  padding: 2%;\n  text-transform: uppercase;\n  font-family: \"Google Sanse\", serif;\n  border-bottom: 1px solid #e8eaed;\n}\n\n.title-container {\n  background: #f1f1f1;\n  width: 100%;\n  height: 100%;\n}\n\n.title-image {\n  height: 50%;\n  width: 100%;\n}\n\n.image-container {\n  margin-top: 5%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  margin-left: 20%;\n}\n\n.description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  width: 100%;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvZG9vci1nbGFzcy9EOlxcdmV0cm9nbGFzcy9zcmNcXGFwcFxcc2VydmljZXNcXGRvb3ItZ2xhc3NcXGRvb3ItZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL2Rvb3ItZ2xhc3MvZG9vci1nbGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDTjs7QURFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvZG9vci1nbGFzcy9kb29yLWdsYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNlXCIsIHNlcmlmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gIH1cclxuICAiLCIudGl0bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMiU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zZVwiLCBzZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XG59XG5cbi50aXRsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTByZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59Il19 */");

/***/ }),

/***/ "./src/app/services/door-glass/door-glass.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/door-glass/door-glass.component.ts ***!
  \*************************************************************/
/*! exports provided: DoorGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoorGlassComponent", function() { return DoorGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DoorGlassComponent = class DoorGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
DoorGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-door-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./door-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/door-glass/door-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./door-glass.component.scss */ "./src/app/services/door-glass/door-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DoorGlassComponent);



/***/ }),

/***/ "./src/app/services/double-triple-termo-glass/double-triple-termo-glass.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/services/double-triple-termo-glass/double-triple-termo-glass.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  background: white;\n  padding: 2%;\n  text-transform: uppercase;\n  font-family: \"Google Sanse\", serif;\n  border-bottom: 1px solid #e8eaed;\n}\n\n.title-container {\n  background: #f1f1f1;\n  width: 100%;\n  height: 100%;\n}\n\n.title-image {\n  height: 100%;\n  width: 100%;\n}\n\n.image-container {\n  margin-top: 5%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  margin-left: 20%;\n}\n\n.description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  width: 100%;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvZG91YmxlLXRyaXBsZS10ZXJtby1nbGFzcy9EOlxcdmV0cm9nbGFzcy9zcmNcXGFwcFxcc2VydmljZXNcXGRvdWJsZS10cmlwbGUtdGVybW8tZ2xhc3NcXGRvdWJsZS10cmlwbGUtdGVybW8tZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL2RvdWJsZS10cmlwbGUtdGVybW8tZ2xhc3MvZG91YmxlLXRyaXBsZS10ZXJtby1nbGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDTjs7QURFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvZG91YmxlLXRyaXBsZS10ZXJtby1nbGFzcy9kb3VibGUtdHJpcGxlLXRlcm1vLWdsYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNlXCIsIHNlcmlmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIH1cclxuICBcclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICB9XHJcbiAgIiwiLnRpdGxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc2VcIiwgc2VyaWY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlYWVkO1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTByZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/services/double-triple-termo-glass/double-triple-termo-glass.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/services/double-triple-termo-glass/double-triple-termo-glass.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DoubleTripleTermoGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoubleTripleTermoGlassComponent", function() { return DoubleTripleTermoGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DoubleTripleTermoGlassComponent = class DoubleTripleTermoGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
DoubleTripleTermoGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-double-triple-termo-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./double-triple-termo-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/double-triple-termo-glass/double-triple-termo-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./double-triple-termo-glass.component.scss */ "./src/app/services/double-triple-termo-glass/double-triple-termo-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DoubleTripleTermoGlassComponent);



/***/ }),

/***/ "./src/app/services/furniture-glass/furniture-glass.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/services/furniture-glass/furniture-glass.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  background: white;\n  padding: 2%;\n  text-transform: uppercase;\n  font-family: \"Google Sanse\", serif;\n  border-bottom: 1px solid #e8eaed;\n}\n\n.title-container {\n  background: #f1f1f1;\n  width: 100%;\n  height: 100%;\n}\n\n.title-image {\n  height: 50%;\n  width: 100%;\n}\n\n.image-container {\n  margin-top: 5%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  margin-left: 20%;\n}\n\n.description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  width: 100%;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvZnVybml0dXJlLWdsYXNzL0Q6XFx2ZXRyb2dsYXNzL3NyY1xcYXBwXFxzZXJ2aWNlc1xcZnVybml0dXJlLWdsYXNzXFxmdXJuaXR1cmUtZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL2Z1cm5pdHVyZS1nbGFzcy9mdXJuaXR1cmUtZ2xhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ047O0FERUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL2Z1cm5pdHVyZS1nbGFzcy9mdXJuaXR1cmUtZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc2VcIiwgc2VyaWY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWFlZDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICB9XHJcbiAgXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgfVxyXG4gICIsIi50aXRsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNlXCIsIHNlcmlmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWFlZDtcbn1cblxuLnRpdGxlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aXRsZS1pbWFnZSB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTByZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/services/furniture-glass/furniture-glass.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/furniture-glass/furniture-glass.component.ts ***!
  \***********************************************************************/
/*! exports provided: FurnitureGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureGlassComponent", function() { return FurnitureGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FurnitureGlassComponent = class FurnitureGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
FurnitureGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-furniture-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./furniture-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/furniture-glass/furniture-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./furniture-glass.component.scss */ "./src/app/services/furniture-glass/furniture-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FurnitureGlassComponent);



/***/ }),

/***/ "./src/app/services/laccato-glass/laccato-glass.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/services/laccato-glass/laccato-glass.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  background: white;\n  padding: 2%;\n  text-transform: uppercase;\n  font-family: \"Google Sanse\", serif;\n  border-bottom: 1px solid #e8eaed;\n}\n\n.title-container {\n  background: #f1f1f1;\n  width: 100%;\n  height: 100%;\n}\n\n.title-image {\n  height: 100%;\n  width: 100%;\n}\n\n.image-container {\n  margin-top: 5%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  margin-left: 20%;\n}\n\n.description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  width: 100%;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvbGFjY2F0by1nbGFzcy9EOlxcdmV0cm9nbGFzcy9zcmNcXGFwcFxcc2VydmljZXNcXGxhY2NhdG8tZ2xhc3NcXGxhY2NhdG8tZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL2xhY2NhdG8tZ2xhc3MvbGFjY2F0by1nbGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDTjs7QURFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvbGFjY2F0by1nbGFzcy9sYWNjYXRvLWdsYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNlXCIsIHNlcmlmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIH1cclxuICBcclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICB9XHJcbiAgIiwiLnRpdGxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc2VcIiwgc2VyaWY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlYWVkO1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTByZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/services/laccato-glass/laccato-glass.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/laccato-glass/laccato-glass.component.ts ***!
  \*******************************************************************/
/*! exports provided: LaccatoGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaccatoGlassComponent", function() { return LaccatoGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LaccatoGlassComponent = class LaccatoGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
LaccatoGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-laccato-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./laccato-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/laccato-glass/laccato-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./laccato-glass.component.scss */ "./src/app/services/laccato-glass/laccato-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LaccatoGlassComponent);



/***/ }),

/***/ "./src/app/services/mirrors/mirrors.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/services/mirrors/mirrors.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  background: white;\n  padding: 2%;\n  text-transform: uppercase;\n  font-family: \"Google Sanse\", serif;\n  border-bottom: 1px solid #e8eaed;\n}\n\n.title-container {\n  background: #f1f1f1;\n  width: 100%;\n  height: 100%;\n}\n\n.title-image {\n  height: 50%;\n  width: 100%;\n}\n\n.image-container {\n  margin-top: 5%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  margin-left: 20%;\n}\n\n.description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  width: 100%;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvbWlycm9ycy9EOlxcdmV0cm9nbGFzcy9zcmNcXGFwcFxcc2VydmljZXNcXG1pcnJvcnNcXG1pcnJvcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL21pcnJvcnMvbWlycm9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDTjs7QURFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvbWlycm9ycy9taXJyb3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNlXCIsIHNlcmlmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gIH1cclxuICAiLCIudGl0bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMiU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zZVwiLCBzZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XG59XG5cbi50aXRsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTByZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59Il19 */");

/***/ }),

/***/ "./src/app/services/mirrors/mirrors.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/mirrors/mirrors.component.ts ***!
  \*******************************************************/
/*! exports provided: MirrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MirrorsComponent", function() { return MirrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MirrorsComponent = class MirrorsComponent {
    constructor() { }
    ngOnInit() {
    }
};
MirrorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mirrors',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mirrors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/mirrors/mirrors.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mirrors.component.scss */ "./src/app/services/mirrors/mirrors.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MirrorsComponent);



/***/ }),

/***/ "./src/app/services/ornamental-glass/ornamental-glass.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/services/ornamental-glass/ornamental-glass.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL29ybmFtZW50YWwtZ2xhc3Mvb3JuYW1lbnRhbC1nbGFzcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/services/ornamental-glass/ornamental-glass.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/ornamental-glass/ornamental-glass.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrnamentalGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrnamentalGlassComponent", function() { return OrnamentalGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrnamentalGlassComponent = class OrnamentalGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrnamentalGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ornamental-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ornamental-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/ornamental-glass/ornamental-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ornamental-glass.component.scss */ "./src/app/services/ornamental-glass/ornamental-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], OrnamentalGlassComponent);



/***/ }),

/***/ "./src/app/services/ornamental-termo-glass/ornamental-termo-glass.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/services/ornamental-termo-glass/ornamental-termo-glass.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  background: white;\n  padding: 2%;\n  text-transform: uppercase;\n  font-family: \"Google Sanse\", serif;\n  border-bottom: 1px solid #e8eaed;\n}\n\n.title-container {\n  background: #f1f1f1;\n  width: 100%;\n  height: 100%;\n}\n\n.title-image {\n  height: 100%;\n  width: 100%;\n}\n\n.image-container {\n  margin-top: 5%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  margin-left: 20%;\n}\n\n.description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  width: 100%;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvb3JuYW1lbnRhbC10ZXJtby1nbGFzcy9EOlxcdmV0cm9nbGFzcy9zcmNcXGFwcFxcc2VydmljZXNcXG9ybmFtZW50YWwtdGVybW8tZ2xhc3NcXG9ybmFtZW50YWwtdGVybW8tZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL29ybmFtZW50YWwtdGVybW8tZ2xhc3Mvb3JuYW1lbnRhbC10ZXJtby1nbGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDTjs7QURFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvb3JuYW1lbnRhbC10ZXJtby1nbGFzcy9vcm5hbWVudGFsLXRlcm1vLWdsYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNlXCIsIHNlcmlmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIH1cclxuICBcclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICB9XHJcbiAgIiwiLnRpdGxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc2VcIiwgc2VyaWY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlYWVkO1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTByZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/services/ornamental-termo-glass/ornamental-termo-glass.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/services/ornamental-termo-glass/ornamental-termo-glass.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrnamentalTermoGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrnamentalTermoGlassComponent", function() { return OrnamentalTermoGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrnamentalTermoGlassComponent = class OrnamentalTermoGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrnamentalTermoGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ornamental-termo-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ornamental-termo-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/ornamental-termo-glass/ornamental-termo-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ornamental-termo-glass.component.scss */ "./src/app/services/ornamental-termo-glass/ornamental-termo-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], OrnamentalTermoGlassComponent);



/***/ }),

/***/ "./src/app/services/partitions-glass/partitions-glass.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/services/partitions-glass/partitions-glass.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3BhcnRpdGlvbnMtZ2xhc3MvcGFydGl0aW9ucy1nbGFzcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/services/partitions-glass/partitions-glass.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/partitions-glass/partitions-glass.component.ts ***!
  \*************************************************************************/
/*! exports provided: PartitionsGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartitionsGlassComponent", function() { return PartitionsGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PartitionsGlassComponent = class PartitionsGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
PartitionsGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-partitions-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partitions-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/partitions-glass/partitions-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./partitions-glass.component.scss */ "./src/app/services/partitions-glass/partitions-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PartitionsGlassComponent);



/***/ }),

/***/ "./src/app/services/personalized-termo-glass/personalized-termo-glass.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/services/personalized-termo-glass/personalized-termo-glass.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  background: white;\n  padding: 2%;\n  text-transform: uppercase;\n  font-family: \"Google Sanse\", serif;\n  border-bottom: 1px solid #e8eaed;\n}\n\n.title-container {\n  background: #f1f1f1;\n  width: 100%;\n  height: 100%;\n}\n\n.title-image {\n  height: 100%;\n  width: 100%;\n}\n\n.image-container {\n  margin-top: 5%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  margin-left: 20%;\n}\n\n.description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  width: 100%;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvcGVyc29uYWxpemVkLXRlcm1vLWdsYXNzL0Q6XFx2ZXRyb2dsYXNzL3NyY1xcYXBwXFxzZXJ2aWNlc1xccGVyc29uYWxpemVkLXRlcm1vLWdsYXNzXFxwZXJzb25hbGl6ZWQtdGVybW8tZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL3BlcnNvbmFsaXplZC10ZXJtby1nbGFzcy9wZXJzb25hbGl6ZWQtdGVybW8tZ2xhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ047O0FERUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3BlcnNvbmFsaXplZC10ZXJtby1nbGFzcy9wZXJzb25hbGl6ZWQtdGVybW8tZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc2VcIiwgc2VyaWY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZWFlZDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gIH1cclxuICAiLCIudGl0bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMiU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zZVwiLCBzZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XG59XG5cbi50aXRsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/services/personalized-termo-glass/personalized-termo-glass.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/services/personalized-termo-glass/personalized-termo-glass.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PersonalizedTermoGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalizedTermoGlassComponent", function() { return PersonalizedTermoGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PersonalizedTermoGlassComponent = class PersonalizedTermoGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
PersonalizedTermoGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personalized-termo-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personalized-termo-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/personalized-termo-glass/personalized-termo-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personalized-termo-glass.component.scss */ "./src/app/services/personalized-termo-glass/personalized-termo-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PersonalizedTermoGlassComponent);



/***/ }),

/***/ "./src/app/services/plating-glass/plating-glass.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/services/plating-glass/plating-glass.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  background: white;\n  padding: 2%;\n  text-transform: uppercase;\n  font-family: \"Google Sanse\", serif;\n  border-bottom: 1px solid #e8eaed;\n}\n\n.title-container {\n  background: #f1f1f1;\n  width: 100%;\n  height: 100%;\n}\n\n.title-image {\n  height: 50%;\n  width: 100%;\n}\n\n.image-container {\n  margin-top: 5%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  margin-left: 20%;\n}\n\n.description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  width: 100%;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvcGxhdGluZy1nbGFzcy9EOlxcdmV0cm9nbGFzcy9zcmNcXGFwcFxcc2VydmljZXNcXHBsYXRpbmctZ2xhc3NcXHBsYXRpbmctZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL3BsYXRpbmctZ2xhc3MvcGxhdGluZy1nbGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDTjs7QURFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvcGxhdGluZy1nbGFzcy9wbGF0aW5nLWdsYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNlXCIsIHNlcmlmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gIH1cclxuICAiLCIudGl0bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMiU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zZVwiLCBzZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XG59XG5cbi50aXRsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTByZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59Il19 */");

/***/ }),

/***/ "./src/app/services/plating-glass/plating-glass.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/plating-glass/plating-glass.component.ts ***!
  \*******************************************************************/
/*! exports provided: PlatingGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatingGlassComponent", function() { return PlatingGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlatingGlassComponent = class PlatingGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
PlatingGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-plating-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./plating-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/plating-glass/plating-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./plating-glass.component.scss */ "./src/app/services/plating-glass/plating-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PlatingGlassComponent);



/***/ }),

/***/ "./src/app/services/processed-glass/processed-glass.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/services/processed-glass/processed-glass.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  background: white;\n  padding: 2%;\n  text-transform: uppercase;\n  font-family: \"Google Sanse\", serif;\n  border-bottom: 1px solid #e8eaed;\n}\n\n.title-container {\n  background: #f1f1f1;\n  width: 100%;\n  height: 100%;\n}\n\n.title-image {\n  height: 100%;\n  width: 100%;\n}\n\n.image-container {\n  margin-top: 5%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  margin-left: 20%;\n}\n\n.description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  width: 100%;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvcHJvY2Vzc2VkLWdsYXNzL0Q6XFx2ZXRyb2dsYXNzL3NyY1xcYXBwXFxzZXJ2aWNlc1xccHJvY2Vzc2VkLWdsYXNzXFxwcm9jZXNzZWQtZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL3Byb2Nlc3NlZC1nbGFzcy9wcm9jZXNzZWQtZ2xhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3Byb2Nlc3NlZC1nbGFzcy9wcm9jZXNzZWQtZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNlXCIsIHNlcmlmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlYWVkO1xyXG59XHJcblxyXG4udGl0bGUtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxlLWltYWdlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG4iLCIudGl0bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMiU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zZVwiLCBzZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGVhZWQ7XG59XG5cbi50aXRsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/services/processed-glass/processed-glass.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/processed-glass/processed-glass.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProcessedGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessedGlassComponent", function() { return ProcessedGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProcessedGlassComponent = class ProcessedGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProcessedGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-processed-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./processed-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/processed-glass/processed-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./processed-glass.component.scss */ "./src/app/services/processed-glass/processed-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProcessedGlassComponent);



/***/ }),

/***/ "./src/app/services/secured-glass/secured-glass.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/services/secured-glass/secured-glass.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  background: white;\n  padding: 2%;\n  text-transform: uppercase;\n  font-family: \"Roboto\", sans-serif;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.title-container {\n  background: #f1f1f1;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 15%;\n}\n\n.title-image {\n  height: 100%;\n  width: 100%;\n}\n\n.image-container {\n  margin-top: 5%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  margin-left: 20%;\n}\n\n.description {\n  font-family: \"Roboto\", sans-serif;\n  width: 70%;\n  margin-top: 3%;\n  margin-bottom: 5%;\n  margin-left: 15%;\n  margin-right: 15%;\n  padding: 20px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(black), to(black)), -webkit-gradient(linear, left top, right top, from(black), to(black)), -webkit-gradient(linear, left top, left bottom, from(black), to(black)), -webkit-gradient(linear, right top, left top, from(black), to(black));\n  background-image: linear-gradient(black, black), linear-gradient(to right, black, black), linear-gradient(to bottom, black, black), linear-gradient(to left, black, black);\n  background-repeat: no-repeat;\n  background-size: 2px 20%, 4% 2px, 2px 20%, 4% 2px;\n  background-position: right bottom, right bottom, left top, left top, 1px 1px;\n}\n\n.description:hover {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#c19c78), to(#c19c78)), -webkit-gradient(linear, left top, right top, from(#c19c78), to(#c19c78)), -webkit-gradient(linear, left top, left bottom, from(#c19c78), to(#c19c78)), -webkit-gradient(linear, right top, left top, from(#c19c78), to(#c19c78));\n  background-image: linear-gradient(#c19c78, #c19c78), linear-gradient(to right, #c19c78, #c19c78), linear-gradient(to bottom, #c19c78, #c19c78), linear-gradient(to left, #c19c78, #c19c78);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvc2VjdXJlZC1nbGFzcy9EOlxcdmV0cm9nbGFzcy9zcmNcXGFwcFxcc2VydmljZXNcXHNlY3VyZWQtZ2xhc3NcXHNlY3VyZWQtZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL3NlY3VyZWQtZ2xhc3Mvc2VjdXJlZC1nbGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBRUEsaUNBQUE7RUFDQSx3Q0FBQTtBQ0FKOztBREdFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdFO0VBQ0UsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnVEFBQTtFQUFBLDBLQUFBO0VBRUEsNEJBQUE7RUFDQSxpREFBQTtFQUNBLDRFQUFBO0FDREo7O0FESUU7RUFDRSxnVUFBQTtFQUFBLDBMQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlcy9zZWN1cmVkLWdsYXNzL3NlY3VyZWQtZ2xhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAvLyBmb250LWZhbWlseTogJ011bGknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLWltYWdlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChibGFjaywgYmxhY2spLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGJsYWNrLCBibGFjayksXHJcbiAgICAgIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGJsYWNrLCBibGFjayksIGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBibGFjaywgYmxhY2spO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMnB4IDIwJSwgNCUgMnB4LCAycHggMjAlLCA0JSAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b20sIHJpZ2h0IGJvdHRvbSwgbGVmdCB0b3AsIGxlZnQgdG9wLCAxcHggMXB4O1xyXG4gIH1cclxuICBcclxuICAuZGVzY3JpcHRpb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNjMTljNzgsICNjMTljNzgpLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjMTljNzgsICNjMTljNzgpLFxyXG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYzE5Yzc4LCAjYzE5Yzc4KSwgbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNjMTljNzgsICNjMTljNzgpO1xyXG4gIH1cclxuICAiLCIudGl0bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMiU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTUlO1xufVxuXG4udGl0bGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChibGFjaywgYmxhY2spLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGJsYWNrLCBibGFjayksIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGJsYWNrLCBibGFjayksIGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBibGFjaywgYmxhY2spO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDJweCAyMCUsIDQlIDJweCwgMnB4IDIwJSwgNCUgMnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b20sIHJpZ2h0IGJvdHRvbSwgbGVmdCB0b3AsIGxlZnQgdG9wLCAxcHggMXB4O1xufVxuXG4uZGVzY3JpcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2MxOWM3OCwgI2MxOWM3OCksIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2MxOWM3OCwgI2MxOWM3OCksIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNjMTljNzgsICNjMTljNzgpLCBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2MxOWM3OCwgI2MxOWM3OCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/services/secured-glass/secured-glass.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/secured-glass/secured-glass.component.ts ***!
  \*******************************************************************/
/*! exports provided: SecuredGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuredGlassComponent", function() { return SecuredGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SecuredGlassComponent = class SecuredGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
SecuredGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-secured-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./secured-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/secured-glass/secured-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./secured-glass.component.scss */ "./src/app/services/secured-glass/secured-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SecuredGlassComponent);



/***/ }),

/***/ "./src/app/services/secured-termo-glass/secured-termo-glass.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/services/secured-termo-glass/secured-termo-glass.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlY3VyZWQtdGVybW8tZ2xhc3Mvc2VjdXJlZC10ZXJtby1nbGFzcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/services/secured-termo-glass/secured-termo-glass.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/secured-termo-glass/secured-termo-glass.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SecuredTermoGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuredTermoGlassComponent", function() { return SecuredTermoGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SecuredTermoGlassComponent = class SecuredTermoGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
SecuredTermoGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-secured-termo-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./secured-termo-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/secured-termo-glass/secured-termo-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./secured-termo-glass.component.scss */ "./src/app/services/secured-termo-glass/secured-termo-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SecuredTermoGlassComponent);



/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  width: 100% !important;\n  margin: 0px;\n  padding: 0px;\n  overflow: scroll;\n  overflow-y: hidden;\n  overflow-x: hidden !important;\n}\n\n.image-container::-webkit-scrollbar {\n  display: none;\n}\n\n.service-image {\n  width: 600px;\n  height: 500px;\n  margin: 5px;\n}\n\n.service-image:hover {\n  width: 600px;\n  height: 500px;\n  margin: 5px 5px 5px 5px;\n  opacity: 0.6;\n  transition: opacity 0.5s ease-out;\n  -moz-transition: opacity 0.5s ease-out;\n  -webkit-transition: opacity 0.5s ease-out;\n  -o-transition: opacity 0.5s ease-out;\n}\n\n.centered {\n  font-size: 25px;\n  font-weight: bold;\n  position: absolute;\n  text-transform: uppercase;\n  color: white;\n  text-shadow: #343a40 2px 2px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.image-container-text {\n  position: relative;\n  text-align: center;\n  cursor: pointer;\n}\n\n.description {\n  font-size: 25px;\n  margin: 0 auto;\n  outline: none;\n  text-align: justify;\n  padding-bottom: 13rem;\n  width: 100%;\n}\n\n.subtitle {\n  font-weight: bold;\n  font-size: 30px;\n  padding-top: 13rem;\n  padding-bottom: 2rem;\n}\n\n.container {\n  font-family: \"Google Sans\", Arial, sans-serif;\n  max-width: 100%;\n  width: 100%;\n  padding: 0;\n  background-color: #fafafa;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvRDpcXHZldHJvZ2xhc3Mvc3JjXFxhcHBcXHNlcnZpY2VzXFxzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsY0FBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esb0NBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2VydmljZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWltYWdlOmhvdmVyIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDVweCA1cHggNXB4IDVweDtcclxuICAgIG9wYWNpdHk6IC42O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2Utb3V0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2VudGVyZWQge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6ICMzNDNhNDAgMnB4IDJweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXItdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEzcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxM3JlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59IiwiLmltYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5pbWFnZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlcnZpY2UtaW1hZ2Uge1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uc2VydmljZS1pbWFnZTpob3ZlciB7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgbWFyZ2luOiA1cHggNXB4IDVweCA1cHg7XG4gIG9wYWNpdHk6IDAuNjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dDtcbn1cblxuLmNlbnRlcmVkIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAjMzQzYTQwIDJweCAycHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyLXRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nLWJvdHRvbTogMTNyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3VidGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicesComponent = class ServicesComponent {
    constructor() {
        this.service_data = [
            {
                image: 'sticla_sablata',
                title: 'Sticlă sablată',
                route: '/sticla_sablata'
            },
            {
                image: 'sticla_prelucrata',
                title: 'Sticlă prelucrată',
                route: '/sticla_prelucrata'
            },
            {
                image: 'sticla_antiefractie',
                title: 'Sticlă antiefracție',
                route: '/sticla_antiefractie'
            },
            {
                image: 'sticla_bombata',
                title: 'Sticlă bombată',
                route: '/sticla_bombata'
            },
            {
                image: 'sticla_laccato',
                title: 'Sticlă lăcuită',
                route: '/sticla_laccato'
            },
            {
                image: 'geam_dublu',
                title: 'Geam termoizolant dublu și triplu',
                route: '/geam_termo_dublu_triplu'
            },
            {
                image: 'geam_termoizolant_personalizat',
                title: 'Geam termoizolant personalizat',
                route: '/geam_termo_personalizat'
            },
            {
                image: 'geam_termoizolant_bagheta',
                title: 'Geam termoizolant cu baghetă ornamentală',
                route: '/geam_termo_bagheta'
            },
            {
                image: 'geam_termoizolant_antiefractie',
                title: 'Geam termoizolant antiefracție',
                route: '/geam_termo_antiefractie'
            }
        ];
        this.service_data_furniture = [
            {
                image: 'mobilier',
                title: 'Mobilier',
                route: '/mobilier_din_sticla'
            },
            {
                image: 'usi',
                title: 'Uși',
                route: '/usi_din_sticla'
            },
            {
                image: 'oglinzi',
                title: 'Oglinzi',
                route: '/oglinzi'
            }
        ];
    }
    ngOnInit() {
    }
};
ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ServicesComponent);



/***/ }),

/***/ "./src/app/services/shower-glass/shower-glass.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/services/shower-glass/shower-glass.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3Nob3dlci1nbGFzcy9zaG93ZXItZ2xhc3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/services/shower-glass/shower-glass.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/shower-glass/shower-glass.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShowerGlassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowerGlassComponent", function() { return ShowerGlassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShowerGlassComponent = class ShowerGlassComponent {
    constructor() { }
    ngOnInit() {
    }
};
ShowerGlassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shower-glass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shower-glass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/shower-glass/shower-glass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shower-glass.component.scss */ "./src/app/services/shower-glass/shower-glass.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShowerGlassComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\vetroglass\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map