(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\programming\diploma\diploma\diploma-gitpages\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0ZaS":
/*!***************************************************************!*\
  !*** ./src/app/services/favorite-service/favorite.service.ts ***!
  \***************************************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class FavoriteService {
    constructor(http) {
        this.http = http;
    }
    createFavPost(blogDto) {
        return this.http.post('/api/favorite', blogDto);
    }
    getUsersFavPosts(user) {
        return this.http.get('/api/favorite/user/' + user);
    }
    findOneBlog(id) {
        return this.http.get('/api/favorite/' + id);
    }
}
FavoriteService.ɵfac = function FavoriteService_Factory(t) { return new (t || FavoriteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FavoriteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FavoriteService, factory: FavoriteService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "1pfh":
/*!**********************************************************!*\
  !*** ./src/app/components/user/users/users.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-service/user.service */ "6epG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");










function UsersComponent_div_6_mat_header_row_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function UsersComponent_div_6_mat_row_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_div_6_mat_row_3_Template_mat_row_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const row_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.navigateToProfile(row_r13._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersComponent_div_6_mat_header_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersComponent_div_6_mat_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r16._id);
} }
function UsersComponent_div_6_mat_header_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersComponent_div_6_mat_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r17.name);
} }
function UsersComponent_div_6_mat_header_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nickname");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersComponent_div_6_mat_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r18.nickname);
} }
function UsersComponent_div_6_mat_header_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersComponent_div_6_mat_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r19.email);
} }
function UsersComponent_div_6_mat_header_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersComponent_div_6_mat_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r20.role);
} }
const _c0 = function () { return [5, 10, 50, 100]; };
function UsersComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UsersComponent_div_6_mat_header_row_2_Template, 1, 0, "mat-header-row", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UsersComponent_div_6_mat_row_3_Template, 1, 0, "mat-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UsersComponent_div_6_mat_header_cell_5_Template, 2, 0, "mat-header-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UsersComponent_div_6_mat_cell_6_Template, 2, 1, "mat-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UsersComponent_div_6_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UsersComponent_div_6_mat_cell_9_Template, 2, 1, "mat-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UsersComponent_div_6_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UsersComponent_div_6_mat_cell_12_Template, 2, 1, "mat-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UsersComponent_div_6_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UsersComponent_div_6_mat_cell_15_Template, 2, 1, "mat-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UsersComponent_div_6_mat_header_cell_17_Template, 2, 0, "mat-header-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UsersComponent_div_6_mat_cell_18_Template, 2, 1, "mat-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-paginator", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function UsersComponent_div_6_Template_mat_paginator_page_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r21.pageEvent = $event; return ctx_r21.onPaginateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.dataSource.docs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx_r0.dataSource.totalDocs)("pageSize", ctx_r0.dataSource.limit)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
} }
class UsersComponent {
    constructor(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.filterValue = null;
        this.dataSource = null;
        this.displayedColumns = ['name', 'nickname', 'email', 'role'];
    }
    ngOnInit() {
        this.initDataSource();
    }
    initDataSource() {
        this.userService.findAll(1, 10).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((userData) => this.dataSource = userData)).subscribe();
    }
    onPaginateChange(event) {
        let page = event.pageIndex;
        let size = event.pageSize;
        if (this.filterValue == null) {
            page = page + 1;
            this.userService.findAll(page, size).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((userData) => this.dataSource = userData)).subscribe();
        }
        else {
            page = page + 1;
            this.userService.paginateByName(page, size, this.filterValue).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((userData) => this.dataSource = userData)).subscribe();
        }
    }
    findByName(nickname) {
        this.userService.paginateByName(1, 10, nickname).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((userData) => this.dataSource = userData)).subscribe();
    }
    navigateToProfile(id) {
        this.router.navigate(['./' + id], { relativeTo: this.activatedRoute });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 7, vars: 2, consts: [[2, "text-align", "center"], ["matInput", "", "type", "text", "placeholder", "Search by username", 3, "ngModel", "ngModelChange", "input"], [4, "ngIf"], [3, "dataSource"], [4, "matHeaderRowDef"], [3, "click", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "nickname"], ["matColumnDef", "email"], ["matColumnDef", "role"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], [3, "click"], ["mat-sort-header", ""]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Filter by username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_5_listener($event) { return ctx.filterValue = $event; })("input", function UsersComponent_Template_input_input_5_listener() { return ctx.findByName(ctx.filterValue); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UsersComponent_div_6_Template, 20, 7, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filterValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataSource);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "61Wb":
/*!****************************************************************************!*\
  !*** ./src/app/components/ui/welcome-message/welcome-message.component.ts ***!
  \****************************************************************************/
/*! exports provided: WelcomeMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeMessageComponent", function() { return WelcomeMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class WelcomeMessageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateTo(value) {
        this.router.navigate(['../', value]);
    }
}
WelcomeMessageComponent.ɵfac = function WelcomeMessageComponent_Factory(t) { return new (t || WelcomeMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
WelcomeMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeMessageComponent, selectors: [["app-welcome-message"]], decls: 14, vars: 0, consts: [["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6", "crossorigin", "anonymous"], [1, "main-div", "welcome-div"], [1, "container"], [1, "row", "row-cols-2"], [1, "col", "all-quote"], [1, "quote"], ["mat-raised-button", "", 1, "join-button", 3, "click"]], template: function WelcomeMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041F\u043E\u043B\u044C \u0411\u043E\u043A\u044E\u0437");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0421\u0447\u0430\u0441\u0442\u044C\u0435 \u0436\u0438\u0432\u0435\u0442 \u043D\u0430 \u043A\u0443\u0445\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u041D\u0435 \u0441\u043B\u0435\u0434\u0443\u0435\u0442, \u043E\u0434\u043D\u0430\u043A\u043E \u0437\u0430\u0431\u044B\u0432\u0430\u0442\u044C, \u0447\u0442\u043E \u043D\u0430\u0447\u0430\u043B\u043E \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0432 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u0435\u043F\u0435\u043D\u0438 \u043E\u0431\u0443\u0441\u043B\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u0422\u043E\u0432\u0430\u0440\u0438\u0449\u0438! \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0444\u043E\u0440\u043C \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0438\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeMessageComponent_Template_button_click_12_listener() { return ctx.navigateTo("profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Orelega+One&family=PT+Sans+Narrow:wght@400;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito&display=swap\");\n.main-div[_ngcontent-%COMP%] {\n  padding: 10% 0 15% 0;\n}\n.welcome-div[_ngcontent-%COMP%] {\n  background-image: url(\"/../../../assets/bg/4.png\");\n  background-size: 100%;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 260%;\n  \n}\n*[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\np[_ngcontent-%COMP%] {\n  margin: 2% 0 5% 0;\n  font-size: 120%;\n}\n.join-button[_ngcontent-%COMP%] {\n  font-size: 120%;\n  margin-top: 1%;\n  padding: 1% 5% 1% 5%;\n  background-color: #19c719;\n  color: white;\n}\n.all-quote[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n.quote[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcd2VsY29tZS1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFSLG1IQUFBO0FBQ0EsMkVBQUE7QUFHUjtFQUNJLG9CQUFBO0FBQUo7QUFFQTtFQUNJLGtEQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUVBO0VBQ0ksbUNBQUE7RUFDQSxlQUFBO0VBQWlCLDhCQUFBO0FBRXJCO0FBQ0E7RUFDSSxpQ0FBQTtBQUVKO0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFFSjtBQUNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQ0E7RUFDSSxlQUFBO0FBRUo7QUFDQTtFQUNJLGNBQUE7QUFFSiIsImZpbGUiOiJ3ZWxjb21lLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3JlbGVnYStPbmUmZmFtaWx5PVBUK1NhbnMrTmFycm93OndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvJmRpc3BsYXk9c3dhcFwiKTtcbi5tYWluLWRpdiB7XG4gIHBhZGRpbmc6IDEwJSAwIDE1JSAwO1xufVxuXG4ud2VsY29tZS1kaXYge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vLi4vLi4vYXNzZXRzL2JnLzQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiT3JlbGVnYSBPbmVcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAyNjAlO1xuICAvKiDQoNCw0LfQvNC10YAg0YjRgNC40YTRgtCwINCyINC/0YDQvtGG0LXQvdGC0LDRhSAqL1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbnAge1xuICBtYXJnaW46IDIlIDAgNSUgMDtcbiAgZm9udC1zaXplOiAxMjAlO1xufVxuXG4uam9pbi1idXR0b24ge1xuICBmb250LXNpemU6IDEyMCU7XG4gIG1hcmdpbi10b3A6IDElO1xuICBwYWRkaW5nOiAxJSA1JSAxJSA1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5YzcxOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWxsLXF1b3RlIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4ucXVvdGUge1xuICBtYXJnaW4tdG9wOiA1JTtcbn0iXX0= */"] });


/***/ }),

/***/ "6epG":
/*!*******************************************************!*\
  !*** ./src/app/services/user-service/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentification-service/authentication.service */ "Uaz9");






class UserService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this._nickname = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setNickname() {
        console.log('set nickname');
        let userId = this.authService.getUserId();
        this.findOne(userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => this._nickname.next(user))).subscribe();
        // this._nickname.next(user);
        console.log(this._nickname);
    }
    // apply(o: {
    //   nickname: string
    // }) {
    //   this._nickname.next(o.nickname);
    // }
    findOne(id) {
        console.log('Сервис - user.service: findOne() из user.service.ts начал свою работу');
        console.log('Сервис - user.service: findOne() из user.service.ts. Получил id и вернул user', id);
        console.log('Сервис - user.service: findOne() из user.service.ts завершил свою работу');
        return this.http.get('/api/user/' + id);
    }
    updateOne(user) {
        console.log('Сервис - user.service: updateOne() из user.service.ts начал свою работу');
        console.log('Сервис - user.service: updateOne() из user.service.ts. Получает user ->', user);
        console.log('Сервис - user.service: updateOne() из user.service.ts. Берет user.id ->', user.id);
        console.log('Сервис - user.service: updateOne() из user.service.ts. Возвращает на бэкенд сторону запрос ->', this.http.put('api/user/' + user.id, user));
        console.log('Сервис - user.service: updateOne() из user.service.ts завершает свою работу');
        return this.http.put('api/user/' + user.id, user);
    }
    findAll(page, size) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.append('page', String(page));
        params = params.append('limit', String(size));
        return this.http.get('/api/user', { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((userData) => userData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err)));
    }
    uploadProfileImage(formData) {
        return this.http.post('/api/user/upload', formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
    paginateByName(page, size, nickname) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.append('page', String(page));
        params = params.append('limit', String(size));
        params = params.append('nickname', String(nickname));
        return this.http.get('/api/user', { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((userData) => userData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err)));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7YKZ":
/*!*****************************************************************!*\
  !*** ./src/app/services/draft-service/draft-service.service.ts ***!
  \*****************************************************************/
/*! exports provided: DraftServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftServiceService", function() { return DraftServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class DraftServiceService {
    constructor(http) {
        this.http = http;
    }
    getUsersDraftPosts(user) {
        return this.http.get('/api/draft/draft/' + user);
    }
}
DraftServiceService.ɵfac = function DraftServiceService_Factory(t) { return new (t || DraftServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DraftServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DraftServiceService, factory: DraftServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "96WC":
/*!********************************************************************!*\
  !*** ./src/app/components/user/user-blogs/user-blogs.component.ts ***!
  \********************************************************************/
/*! exports provided: UserBlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBlogsComponent", function() { return UserBlogsComponent; });
/* harmony import */ var _ui_delele_blog_delele_blog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/delele-blog/delele-blog.component */ "etYm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/blog-service/blog.service */ "dc9q");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










function UserBlogsComponent_mat_card_3_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const blog_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/api/blogs/image/", blog_r1.headerImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UserBlogsComponent_mat_card_3_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} }
function UserBlogsComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-menu", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserBlogsComponent_mat_card_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const blog_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.navigateToUpdate(blog_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserBlogsComponent_mat_card_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const blog_r1 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.openDeleteDialog(blog_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserBlogsComponent_mat_card_3_Template_div_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const blog_r1 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.navigate(blog_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UserBlogsComponent_mat_card_3_img_19_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UserBlogsComponent_mat_card_3_ng_template_20_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", blog_r1.headerImage)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", blog_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blog_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blog_r1.category.catTitle);
} }
class UserBlogsComponent {
    constructor(router, blogService, dialog) {
        this.router = router;
        this.blogService = blogService;
        this.dialog = dialog;
        this.blogEntriesLength = 0;
    }
    ngOnInit() {
    }
    navigate(id) {
        this.router.navigateByUrl('blogs/' + id);
    }
    navigateToUpdate(id) {
        this.router.navigate(['update-blog/', id]);
    }
    openDeleteDialog(blog) {
        // this.blogService.isBeDeleted = blogId;
        const dialogRef = this.dialog.open(_ui_delele_blog_delele_blog_component__WEBPACK_IMPORTED_MODULE_0__["DeleleBlogComponent"], { data: { blog } });
    }
}
UserBlogsComponent.ɵfac = function UserBlogsComponent_Factory(t) { return new (t || UserBlogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
UserBlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserBlogsComponent, selectors: [["app-user-blogs"]], inputs: { blogEntries: "blogEntries" }, decls: 4, vars: 1, consts: [[2, "margin-top", "3%"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["mat-icon-button", "", "type", "button", "aria-label", "Users menu", 1, "users-menu", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["color", "warn"], [1, "delete-button"], [2, "display", "flex", 3, "click"], [3, "src", 4, "ngIf", "ngIfElse"], ["placeholderImage", ""], [2, "margin-left", "30px"], [1, "crop-text-2"], [3, "src"], ["src", "../../../assets/placeholders/placeholder-blog-entry.jpg"]], template: function UserBlogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u044B \u0432\u0441\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0430\u043C\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u043E\u0448\u043B\u0438 \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044E. \u0414\u0440\u0443\u0433\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043C\u043E\u0433\u0443\u0442 \u0432\u0438\u0434\u0435\u0442\u044C \u0438\u0445. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserBlogsComponent_mat_card_3_Template, 31, 6, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.blogEntries);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["@charset \"UTF-8\";\nimg[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 250px;\n  height: 180px;\n}\n.card[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.users-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n.crop-text-2[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n.delete-button[_ngcontent-%COMP%] {\n  color: #eb0000;\n}\n.p[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 260%;\n  \n}\n*[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\n.placeholderNullPosts-image[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  border: 0;\n  filter: alpha(Opacity=50);\n  opacity: 0.5;\n}\n.placeholderNullPosts[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n  filter: alpha(Opacity=50);\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXNlci1ibG9ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFSjtBQUNBO0VBQ0ksZ0JBQUE7QUFFSjtBQURJO0VBQ0ksZUFBQTtBQUdSO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUFFSjtBQUNBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtBQUVKO0FBRUE7RUFDSSxjQUFBO0FBQ0o7QUFFQTtFQUNJLGVBQUE7QUFDSjtBQUVBO0VBQ0ksbUNBQUE7RUFDQSxlQUFBO0VBQWlCLDhCQUFBO0FBRXJCO0FBQ0E7RUFDSSxpQ0FBQTtBQUVKO0FBQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFFSjtBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFFSiIsImZpbGUiOiJ1c2VyLWJsb2dzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaW1nIHtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMTgwcHg7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5jYXJkIDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVzZXJzLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY3JvcC10ZXh0LTIge1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLmRlbGV0ZS1idXR0b24ge1xuICBjb2xvcjogI2ViMDAwMDtcbn1cblxuLnAge1xuICBmb250LXNpemU6IDEyMCU7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiT3JlbGVnYSBPbmVcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAyNjAlO1xuICAvKiDQoNCw0LfQvNC10YAg0YjRgNC40YTRgtCwINCyINC/0YDQvtGG0LXQvdGC0LDRhSAqL1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wbGFjZWhvbGRlck51bGxQb3N0cy1pbWFnZSB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBib3JkZXI6IDA7XG4gIGZpbHRlcjogYWxwaGEoT3BhY2l0eT01MCk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnBsYWNlaG9sZGVyTnVsbFBvc3RzIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjZW50ZXI7XG4gIGZpbHRlcjogYWxwaGEoT3BhY2l0eT01MCk7XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */"] });


/***/ }),

/***/ "9ioS":
/*!********************************************************************************!*\
  !*** ./src/app/components/blog/all-blog-entries/all-blog-entries.component.ts ***!
  \********************************************************************************/
/*! exports provided: AllBlogEntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllBlogEntriesComponent", function() { return AllBlogEntriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ui_ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/ingredients/ingredients.component */ "OPwS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/blog-service/blog.service */ "dc9q");
/* harmony import */ var src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentification-service/authentication.service */ "Uaz9");
/* harmony import */ var src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/function-service/function.service */ "Xck2");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ui_welcome_message_welcome_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/welcome-message/welcome-message.component */ "61Wb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");




















function AllBlogEntriesComponent_app_welcome_message_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-welcome-message");
} }
function AllBlogEntriesComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllBlogEntriesComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.value = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllBlogEntriesComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r6.catTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", category_r6.catTitle, " ");
} }
function AllBlogEntriesComponent_div_29_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 30);
} if (rf & 2) {
    const blog_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/api/blogs/image/", blog_r9.headerImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AllBlogEntriesComponent_div_29_div_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
} }
function AllBlogEntriesComponent_div_29_div_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
} }
function AllBlogEntriesComponent_div_29_div_2_img_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
} if (rf & 2) {
    const blog_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/api/user/profile-image/", blog_r9.authorId.profileImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AllBlogEntriesComponent_div_29_div_2_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllBlogEntriesComponent_div_29_div_2_div_24_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.addPostToFavorites(ctx_r20.post); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllBlogEntriesComponent_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllBlogEntriesComponent_div_29_div_2_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const blog_r9 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.navigate(blog_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllBlogEntriesComponent_div_29_div_2_img_3_Template, 1, 1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllBlogEntriesComponent_div_29_div_2_ng_template_4_Template, 1, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AllBlogEntriesComponent_div_29_div_2_ng_template_13_Template, 1, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AllBlogEntriesComponent_div_29_div_2_img_17_Template, 1, 1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-subtitle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AllBlogEntriesComponent_div_29_div_2_div_24_Template, 3, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r9 = ctx.$implicit;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", blog_r9.headerImage)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", blog_r9.timeForCooking, " \u043C\u0438\u043D\u0443\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", blog_r9.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", blog_r9.authorId.profileImage)("ngIfElse", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r9.authorId.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, blog_r9.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isJoined === true);
} }
const _c0 = function () { return [5, 10, 50, 100]; };
function AllBlogEntriesComponent_div_29_mat_paginator_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function AllBlogEntriesComponent_div_29_mat_paginator_3_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r24.pageEvent = $event; return ctx_r24.onPaginateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r8.blogEntries == null ? null : ctx_r8.blogEntries.totalDocs)("pageSize", ctx_r8.blogEntries == null ? null : ctx_r8.blogEntries.limit)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
function AllBlogEntriesComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllBlogEntriesComponent_div_29_div_2_Template, 25, 12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllBlogEntriesComponent_div_29_mat_paginator_3_Template, 1, 4, "mat-paginator", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.blogEntries == null ? null : ctx_r3.blogEntries.docs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.blogEntries == null ? null : ctx_r3.blogEntries.docs);
} }
class AllBlogEntriesComponent {
    constructor(router, blogService, authService, functionService, dialog) {
        this.router = router;
        this.blogService = blogService;
        this.authService = authService;
        this.functionService = functionService;
        this.dialog = dialog;
        this.paginate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataSource$ = this.blogService.indexAll(1, 10);
        this.categorySource$ = this.functionService.getAllCategory();
        this.isJoined = false;
        this.panelOpenState = false;
        this.isLiked = false;
        this.userId = '0';
        this.value = '';
        this.allCategories = [];
    }
    ngOnInit() {
        const getUserId = this.authService.getUserId();
        if (getUserId != null) {
            this.isJoined = true;
            this.userId = getUserId;
        }
    }
    openDialog() {
        console.log('Modal here');
        const dialogRef = this.dialog.open(_ui_ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_1__["IngredientsComponent"], {
            width: '100%', height: '70%'
            // data: {name: this.name, animal: this.animal}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }
    onPaginateChange(event) {
        console.log(event);
        // let page = event.pageIndex;
        // let limit = event.pageSize;
        // page = page +1;
        event.pageIndex = event.pageIndex + 1;
        // event.previousPageIndex = event.previousPageIndex +1;
        this.paginate.emit(event);
        // console.log(event);
        // this.dataSource = this.blogService.indexAll(page, limit);
        // this.paginate.emit(event)
    }
    navigate(id) {
        this.router.navigateByUrl('blogs/' + id);
    }
    navigateToUpdate(id) {
        this.router.navigate(['update-blog/', id]);
    }
    // likeLog() {
    //   this.isLiked = true
    // }
    likeBlog(blog) {
        const userId = this.authService.getUserId();
        console.log('likeblog');
        this.blogService.toggle(blog, userId);
        // this.blogService.toggle(blog).subscribe(x => { } );
    }
    editBlog(blog) {
        console.log(blog);
    }
    deleteBlog(blog) {
        this.blogService.deleteBlogByUser(blog).subscribe();
    }
}
AllBlogEntriesComponent.ɵfac = function AllBlogEntriesComponent_Factory(t) { return new (t || AllBlogEntriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_5__["FunctionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
AllBlogEntriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllBlogEntriesComponent, selectors: [["app-all-blog-entries"]], inputs: { blogEntries: "blogEntries" }, outputs: { paginate: "paginate" }, decls: 30, vars: 7, consts: [[4, "ngIf"], [1, "row", "row-cols-5", "search", "d-flex", "justify-content-center", "align-items-center"], [1, "col", "what-to-cook"], [1, "col"], [1, "example-form-field"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["appearance", "fill"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col", "expansion-panel"], ["mat-stroked-button", "", 1, "ingredients-button", 3, "click"], ["mat-raised-button", "", 1, "find-button"], [1, "container"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", 3, "click"], [3, "value"], [1, "row", "row-cols-4"], ["class", "col", 4, "ngFor", "ngForOf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], [1, "card"], [3, "click"], ["class", "blog-image", 3, "src", 4, "ngIf", "ngIfElse"], ["placeholderBlogImage", ""], [1, "crop-text", 2, "margin", "0"], [1, "crop-text-2"], ["placeholderImage", ""], [1, "author", "row"], [1, "col-4"], ["class", "user-image", 3, "src", 4, "ngIf", "ngIfElse"], [2, "margin-top", "5px", "margin-bottom", "5px"], ["class", "bookmark-icon", 4, "ngIf"], [1, "blog-image", 3, "src"], ["src", "../../../assets/placeholders/placeholder-blog-entry.jpg", 1, "blog-image"], ["src", "../../../assets/placeholders/placeholder-blog-entry.jpg", 1, "user-image"], [1, "user-image", 3, "src"], [1, "bookmark-icon"], ["color", "accent", "matTooltip", "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442 \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435", "type", "button", 1, "bookmark-icon", 2, "cursor", "pointer", 3, "click"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"]], template: function AllBlogEntriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllBlogEntriesComponent_app_welcome_message_0_Template, 1, 0, "app-welcome-message", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0427\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u044E\u0434\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AllBlogEntriesComponent_Template_input_ngModelChange_9_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AllBlogEntriesComponent_button_10_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041B\u044E\u0431\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AllBlogEntriesComponent_mat_option_18_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllBlogEntriesComponent_Template_button_click_21_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0418\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u041F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041D\u043E\u0432\u044B\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u044B \u043E\u0442 \u043D\u0430\u0448\u0438\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AllBlogEntriesComponent_div_29_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isJoined === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 5, ctx.categorySource$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blogEntries == null ? null : ctx.blogEntries.docs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _ui_welcome_message_welcome_message_component__WEBPACK_IMPORTED_MODULE_14__["WelcomeMessageComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardSubtitle"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["@charset \"UTF-8\";\n.card[_ngcontent-%COMP%] {\n  max-width: 300px;\n  height: 400px;\n  margin-top: 15px;\n}\n.card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nmat-card[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n.crop-text-2[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 4;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n.crop-text[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n.users-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n.what-to-cook[_ngcontent-%COMP%] {\n  font-size: 130%;\n}\n.p[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 260%;\n  \n}\n*[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\n.search[_ngcontent-%COMP%] {\n  background-color: white;\n  margin: 0 2% 0 2%;\n  box-shadow: 0 6px 4px -4px rgba(0, 0, 0, 0.2);\n  padding: 2.5% 10% 2% 10%;\n}\n.blog-image[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  height: 150px;\n}\n.author[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  margin: 0;\n  padding-bottom: 0;\n}\n.bookmark-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 3%;\n  right: 0;\n  bottom: 0;\n}\n.user-image[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n}\n.find-button[_ngcontent-%COMP%] {\n  font-size: 120%;\n  margin-top: 1%;\n  padding: 1% 5% 1% 5%;\n  background-color: #19c719;\n  color: white;\n}\n.ingredients-button[_ngcontent-%COMP%] {\n  font-size: 120%;\n  margin-top: 1%;\n  padding: 1% 5% 1% 5%;\n  border-color: #19c719;\n}\n.expansion-panel[_ngcontent-%COMP%] {\n  height: 48px;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWxsLWJsb2ctZW50cmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUVKO0FBREk7RUFDSSxlQUFBO0FBR1I7QUFVQTtFQUNJLGlCQUFBO0FBUEo7QUFVQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUFQSjtBQVVBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtBQVBKO0FBVUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUFQSjtBQVVBO0VBQ0ksZUFBQTtBQVBKO0FBV0E7RUFDSSxlQUFBO0FBUko7QUFXQTtFQUNJLG1DQUFBO0VBQ0EsZUFBQTtFQUFpQiw4QkFBQTtBQVByQjtBQVVBO0VBQ0ksaUNBQUE7QUFQSjtBQVVBO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0Esd0JBQUE7QUFQSjtBQVVBO0VBQ0ksWUFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0FBUko7QUFXQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFSSjtBQVdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFSSjtBQWFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFWSjtBQWFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQVZKO0FBYUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFWSjtBQWNBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUFYSiIsImZpbGUiOiJhbGwtYmxvZy1lbnRyaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNhcmQge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNhcmQgOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYXQtY2FyZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uY3JvcC10ZXh0LTIge1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLmNyb3AtdGV4dCB7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4udXNlcnMtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi53aGF0LXRvLWNvb2sge1xuICBmb250LXNpemU6IDEzMCU7XG59XG5cbi5wIHtcbiAgZm9udC1zaXplOiAxMjAlO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9yZWxlZ2EgT25lXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjYwJTtcbiAgLyog0KDQsNC30LzQtdGAINGI0YDQuNGE0YLQsCDQsiDQv9GA0L7RhtC10L3RgtCw0YUgKi9cbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uc2VhcmNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMCAyJSAwIDIlO1xuICBib3gtc2hhZG93OiAwIDZweCA0cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBhZGRpbmc6IDIuNSUgMTAlIDIlIDEwJTtcbn1cblxuLmJsb2ctaW1hZ2Uge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uYXV0aG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5ib29rbWFyay1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDMlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4udXNlci1pbWFnZSB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uZmluZC1idXR0b24ge1xuICBmb250LXNpemU6IDEyMCU7XG4gIG1hcmdpbi10b3A6IDElO1xuICBwYWRkaW5nOiAxJSA1JSAxJSA1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5YzcxOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW5ncmVkaWVudHMtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMjAlO1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgcGFkZGluZzogMSUgNSUgMSUgNSU7XG4gIGJvcmRlci1jb2xvcjogIzE5YzcxOTtcbn1cblxuLmV4cGFuc2lvbi1wYW5lbCB7XG4gIGhlaWdodDogNDhweDtcbiAgei1pbmRleDogMTtcbn0iXX0= */"] });


/***/ }),

/***/ "9max":
/*!******************************************************************************!*\
  !*** ./src/app/components/ui/draft-blog-admin/draft-blog-admin.component.ts ***!
  \******************************************************************************/
/*! exports provided: DraftBlogAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftBlogAdminComponent", function() { return DraftBlogAdminComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/function-service/function.service */ "Xck2");
/* harmony import */ var src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/services/admin.service */ "CQUn");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








class DraftBlogAdminComponent {
    constructor(dialogRef, data, functionService, adminService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.functionService = functionService;
        this.adminService = adminService;
        this.snackBarMessage = 'Рецепт был успешно отклонен!';
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.draftBlogName = this.data.blog.title;
    }
    draftBlog() {
        // this.blogService.post(blog).pipe(
        //   tap(() => this.functionService.openSnackBar(this.snackBarMessageAccepted))
        // ).subscribe();
        // this.adminService.updateIsAcceptedStatus(blog._id).subscribe();
        // window.location.reload();
        const blogId = this.data._id;
        this.adminService.updateIsDraftStatus(blogId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.functionService.openSnackBar(this.snackBarMessage))).subscribe();
        document.location.reload();
    }
}
DraftBlogAdminComponent.ɵfac = function DraftBlogAdminComponent_Factory(t) { return new (t || DraftBlogAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_3__["FunctionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"])); };
DraftBlogAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DraftBlogAdminComponent, selectors: [["app-draft-blog-admin"]], decls: 10, vars: 4, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", "cdkFocusInitial", ""], ["mat-stroked-button", "", "color", "warn", 3, "mat-dialog-close", "click"]], template: function DraftBlogAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438, \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0438\u0445 \u0432 \u0434\u0430\u043D\u043D\u0443\u044E \u0444\u043E\u0440\u043C\u0443\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DraftBlogAdminComponent_Template_button_click_8_listener() { return ctx.draftBlog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0412\u044B \u043E\u0442\u043A\u043B\u043E\u043D\u044F\u0435\u0442\u0435 \u0440\u0435\u0446\u0435\u043F\u0442 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx.draftBlogName), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["LowerCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmFmdC1ibG9nLWFkbWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/blog-service/blog.service */ "dc9q");
/* harmony import */ var _blog_all_blog_entries_all_blog_entries_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog/all-blog-entries/all-blog-entries.component */ "9ioS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class HomeComponent {
    constructor(blogService) {
        this.blogService = blogService;
        this.blogEntries$ = this.blogService.indexAll(1, 10);
    }
    onPaginateChange(event) {
        this.blogEntries$ = this.blogService.indexAll(event.pageIndex, event.pageSize);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 3, consts: [[1, "home-component"], [3, "blogEntries", "paginate"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-all-blog-entries", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paginate", function HomeComponent_Template_app_all_blog_entries_paginate_1_listener($event) { return ctx.onPaginateChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blogEntries", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.blogEntries$));
    } }, directives: [_blog_all_blog_entries_all_blog_entries_component__WEBPACK_IMPORTED_MODULE_2__["AllBlogEntriesComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".home-component[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbXBvbmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIGh0bWwsIGJvZHkge21hcmdpbjowcHg7IH0iXX0= */"] });


/***/ }),

/***/ "CQUn":
/*!*************************************************!*\
  !*** ./src/app/admin/services/admin.service.ts ***!
  \*************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AdminService {
    constructor(http) {
        this.http = http;
    }
    paginatePostsForModeration(page, size) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.append('page', String(page));
        params = params.append('limit', String(size));
        return this.http.get('/api/moderator', { params });
    }
    getUsersFavPosts(user) {
        return this.http.get('/api/favorite/user/' + user);
    }
    paginatePostForModerationByAuthorId(id) {
        // let params = new HttpParams();
        // params = params.append('page', String(page));
        // params = params.append('limit', String(size));
        return this.http.get('/api/moderator/user/' + id);
    }
    updateIsAcceptedStatus(id) {
        return this.http.put('/api/moderator/' + id, { isRecipieAccepted: true });
    }
    updateIsDraftStatus(id) {
        return this.http.put('/api/moderator/' + id, { isRecipieDraft: true });
    }
    findOnePostForModerate(id) {
        return this.http.get('/api/moderator/' + id);
    }
    deletePost(blogId) {
        return this.http.delete('/api/moderator/' + blogId);
    }
    draftPost(blogId) {
        return this.http.post('/api/draft/', blogId);
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "DsG+":
/*!**********************************************************************!*\
  !*** ./src/app/components/blog/update-blog/update-blog.component.ts ***!
  \**********************************************************************/
/*! exports provided: UpdateBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBlogComponent", function() { return UpdateBlogComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ui_full_view_image_full_view_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/full-view-image/full-view-image.component */ "cAq3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/function-service/function.service */ "Xck2");
/* harmony import */ var src_app_services_tag_service_tag_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/tag-service/tag.service */ "vjlo");
/* harmony import */ var src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/authentification-service/authentication.service */ "Uaz9");
/* harmony import */ var src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/blog-service/blog.service */ "dc9q");
/* harmony import */ var src_app_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/user-service/user.service */ "6epG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
























const _c0 = ["tagInput"];
const _c1 = ["auto"];
const _c2 = ["fileUpload"];
function UpdateBlogComponent_form_0_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", category_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](category_r5.catTitle);
} }
function UpdateBlogComponent_form_0_img_30_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UpdateBlogComponent_form_0_img_30_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r6.showFullImage(ctx_r6.form.get("headerImage").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/api/blogs/image/", ctx_r2.form.get("headerImage").value, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function UpdateBlogComponent_form_0_mat_progress_bar_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-progress-bar", 46);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r3.file.progress);
} }
function UpdateBlogComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function UpdateBlogComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.updateBlog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u044E\u0434\u0430 \u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0431\u043B\u044E\u0434\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u044E\u0434\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UpdateBlogComponent_form_0_Template_mat_select_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r10.blogCategory._id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, UpdateBlogComponent_form_0_mat_option_24_Template, 2, 2, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "\u0424\u043E\u0442\u043E \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0431\u043B\u044E\u0434\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, UpdateBlogComponent_form_0_img_30_Template, 1, 1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, UpdateBlogComponent_form_0_mat_progress_bar_31_Template, 1, 1, "mat-progress-bar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UpdateBlogComponent_form_0_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r11.updateImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "hr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0431\u043B\u044E\u0434\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, " \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 2-3 \u0441\u0442\u0440\u043E\u043A\u0438 - \u0447\u0442\u043E \u044D\u0442\u043E \u0437\u0430 \u0431\u043B\u044E\u0434\u043E, \u0435\u0433\u043E \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438, \u0432\u043A\u0443\u0441\u043E\u0432\u044B\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430. \u042D\u0442\u043E\u0442 \u0442\u0435\u043A\u0441\u0442 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u043D\u043E\u043D\u0441\u0430 \u043A \u0412\u0430\u0448\u0435\u043C\u0443 \u0440\u0435\u0446\u0435\u043F\u0442\u0443 - \u0438 \u0438\u043C\u0435\u043D\u043D\u043E \u043F\u043E \u044D\u0442\u043E\u043C\u0443 \u0442\u0435\u043A\u0441\u0442\u0443 \u043B\u044E\u0434\u0438 \u0431\u0443\u0434\u0443\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C, \u0441\u0442\u043E\u0438\u0442 \u0447\u0438\u0442\u0430\u0442\u044C \u0412\u0430\u0448 \u0440\u0435\u0446\u0435\u043F\u0442 - \u0438\u043B\u0438 \u043D\u0435\u0442. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "hr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0440\u0446\u0438\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](65, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "\u043C\u0438\u043D\u0443\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](72, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "hr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UpdateBlogComponent_form_0_Template_button_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r12.updateBlog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](76, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u0412\u042B \u0418\u0417\u041C\u0415\u041D\u042F\u0415\u0422\u0415 \u0420\u0415\u0426\u0415\u041F\u0422: ", ctx_r0.blogTitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.blogCategory._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 7, ctx_r0.categorySource$));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.form.get("headerImage").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.file.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.form.invalid);
} }
class UpdateBlogComponent {
    constructor(dialog, formBuilder, functionService, tagService, authService, blogService, userService, router, activatedRoute) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.functionService = functionService;
        this.tagService = tagService;
        this.authService = authService;
        this.blogService = blogService;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.ingredientSource$ = this.functionService.getAllIngredients();
        this.tagsSource$ = this.tagService.getAllTags();
        this.categorySource$ = this.functionService.getAllCategory();
        this.snackBarMessage = 'Рецепт успешно обновлен!';
        this.snackBarImageMessage = 'Фотография успешно обновлена!';
        this.snackBarInfoMessage = 'Информация успешно обновлена!';
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]];
        this.tagCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.tags = [];
        this.ingredients = [];
        this.measures = [
            { value: 'гр.' },
            { value: 'стакан' },
            { value: 'чайн. л.' },
            { value: 'ст. л.' },
            { value: 'дес. л.' },
            { value: 'шт.' },
            { value: 'кусок' },
            { value: 'щепотка' },
            { value: 'на вкус' },
            { value: 'л.' },
            { value: 'мл.' },
        ];
        this.file = {
            data: null,
            inProgress: false,
            progress: 0
        };
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            const blogId = params.get('id');
            this.blogService.findOneBlog(blogId).subscribe(blog => {
                this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                    _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](blogId),
                    title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](blog.title),
                    description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](blog.description),
                    headerImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](blog.headerImage),
                    timeForCooking: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](blog.timeForCooking),
                    category: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](blog.category),
                    servings: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](blog.servings)
                });
                this.blogCategory = blog.category;
                this.blogTitle = blog.title;
            });
        });
    }
    updateImage() {
        const fileInput = this.fileUpload.nativeElement;
        fileInput.click();
        fileInput.onchange = () => {
            this.file = {
                data: fileInput.files[0],
                inProgress: false,
                progress: 0
            };
            this.fileUpload.nativeElement.value = '';
            this.uploadFile();
        };
    }
    uploadFile() {
        const formData = new FormData();
        formData.append('file', this.file.data);
        this.file.inProgress = true;
        this.blogService.uploadHeaderImage(formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress:
                    this.file.progress = Math.round(event.loaded * 100 / event.total);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response:
                    return event;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            this.file.inProgress = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('Upload failed');
        })).subscribe((event) => {
            if (typeof (event) === 'object') {
                this.form.patchValue({ headerImage: event.body.filename });
                this.functionService.openSnackBar(this.snackBarImageMessage);
            }
        });
    }
    updateBlog() {
        this.blogService.updateUserBlog(this.form.getRawValue()).subscribe();
        this.functionService.openSnackBar(this.snackBarInfoMessage);
        this.router.navigate(['../profile']);
    }
    showFullImage(postImage) {
        const link = 'blogs/image/';
        const dialogRef = this.dialog.open(_ui_full_view_image_full_view_image_component__WEBPACK_IMPORTED_MODULE_5__["FullViewImageComponent"], { data: { link, postImage } });
    }
}
UpdateBlogComponent.ɵfac = function UpdateBlogComponent_Factory(t) { return new (t || UpdateBlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_8__["FunctionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_tag_service_tag_service__WEBPACK_IMPORTED_MODULE_9__["TagService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_11__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"])); };
UpdateBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UpdateBlogComponent, selectors: [["app-update-blog"]], viewQuery: function UpdateBlogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.tagInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
    } }, decls: 1, vars: 1, consts: [[3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "main-div", 2, "margin", "0"], [1, "row", 2, "margin", "0"], [1, "col"], [1, "col-6"], [1, "container"], [2, "margin-top", "3%"], [1, "post-create"], ["width", "100%"], [1, "row", "title-category-div"], [1, "headers-text", 2, "padding", "0"], [1, "col", 2, "padding-left", "0"], [1, "post-title-div"], ["appearance", "outline"], ["matInput", "", "formControlName", "title"], [1, "col", 2, "padding-right", "0"], [1, "category-div"], ["appearance", "fill"], ["formControlName", "category", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "post-image"], [1, "headers-text"], ["class", "post-image-img", 3, "src", "click", 4, "ngIf"], ["style", "margin-top: 3%;", 3, "value", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["mat-button", "", "type", "button", 1, "update-button", 3, "click"], [2, "color", "rgb(25, 199, 25)"], ["type", "file", "id", "fileUpload", "name", "fileUpload", "accept", "image/*", 2, "display", "none"], ["fileUpload", ""], ["width", "80%"], [1, "post-description"], ["matInput", "", "formControlName", "description", 1, "post-textarea"], [1, "row", 2, "width", "100%", "margin-top", "2%"], [1, "col-4"], [1, "col-2"], ["matInput", "", "type", "number", "formControlName", "servings", 1, "servings"], [1, "col", "row"], [1, "col-3"], ["matInput", "", "type", "number", "formControlName", "timeForCooking", 1, "servings"], [1, "col", "container"], [1, "col", 2, "width", "100%"], [1, "text-left"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "addToModerateButton", 3, "disabled", "click"], [3, "value"], [1, "post-image-img", 3, "src", "click"], [2, "margin-top", "3%", 3, "value"]], template: function UpdateBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, UpdateBlogComponent_form_0_Template, 77, 9, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]], styles: ["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap\");\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10%;\n}\nimg[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px;\n  width: 150px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n  .mat-focused .mat-form-field-label {\n  \n  color: #19c719 !important;\n}\n .mat-form-field-ripple {\n  \n  background-color: #19c719 !important;\n}\n\n .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #19c719 !important;\n}\n.main-div[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  height: auto;\n}\n.post-image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 3%;\n}\n.post-image-img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none;\n  width: 100%;\n}\n.addToModerateButton[_ngcontent-%COMP%] {\n  font-size: 120%;\n  margin-top: 1%;\n  background-color: #19c719;\n  color: white;\n}\n.add-step-image-button[_ngcontent-%COMP%] {\n  color: #19c719;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.mat-card-step[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  height: 120px;\n}\n.post-title-div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.servings[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 0 !important;\n}\n.measure-div[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-left: 2%;\n}\np[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\n.step-image[_ngcontent-%COMP%] {\n  background-color: darkgray;\n}\n.post-create[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 170%;\n}\n.headers-text[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 120%;\n  margin: 0;\n}\n.title-category-div[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 3%;\n}\n.post-textarea[_ngcontent-%COMP%] {\n  height: 100px;\n  \n  resize: none;\n  outline: dimgrey;\n}\n.category-div[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  width: 100%;\n}\n.post-description[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 3%;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 260%;\n  \n}\n*[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans TC\", sans-serif;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n}\n.post-textarea[_ngcontent-%COMP%] {\n  height: 100px;\n  \n  resize: none;\n  outline: dimgrey;\n}\n.update-button[_ngcontent-%COMP%] {\n  font-size: 120%;\n  background-color: white;\n  color: black;\n  border: 2px solid #19c719;\n}\n.user-image-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n}\n.avatar-image[_ngcontent-%COMP%] {\n  height: 320px;\n  width: 300px;\n  border-radius: 2%;\n  cursor: pointer;\n  border: none;\n  object-fit: contain;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXBkYXRlLWJsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQVIsaUZBQUE7QUFFUjtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUNGO0FBRUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFFQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFDRjtBQUVBLFlBQUE7QUFDQTtFQUNFLDBCQUFBO0FBQ0Y7QUFFQTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUVBO0VBQ0UseUNBQUE7RUFDQSxvQ0FBQTtBQUNGO0FBRUEsV0FBQTtBQUNBO0VBQ0UseUJBQUE7QUFDRjtBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUNGO0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDRjtBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGO0FBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBRUE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtBQUNGO0FBRUE7RUFDRSwwQkFBQTtBQUNGO0FBRUE7RUFFRSxtQ0FBQTtFQUNBLGVBQUE7QUFBRjtBQUdBO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQWUsMkJBQUE7RUFDZixZQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUFpQiw4QkFBQTtBQUVuQjtBQUNBO0VBQ0UsdUNBQUE7QUFFRjtBQUVBO0VBQ0UsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFBZSwyQkFBQTtFQUNmLFlBQUE7RUFDQSxnQkFBQTtBQUVGO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRUY7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBRUYiLCJmaWxlIjoidXBkYXRlLWJsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK1RDJmRpc3BsYXk9c3dhcFwiKTtcbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG5pbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIEZpcmVmb3ggKi9cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cbiAgY29sb3I6ICMxOWM3MTkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTljNzE5ICFpbXBvcnRhbnQ7XG59XG5cbi8qIEJvcmRlciAqL1xuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiAjMTljNzE5ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnBvc3QtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5wb3N0LWltYWdlLWltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFkZFRvTW9kZXJhdGVCdXR0b24ge1xuICBmb250LXNpemU6IDEyMCU7XG4gIG1hcmdpbi10b3A6IDElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTljNzE5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hZGQtc3RlcC1pbWFnZS1idXR0b24ge1xuICBjb2xvcjogIzE5YzcxOTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1hdC1jYXJkLXN0ZXAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5wb3N0LXRpdGxlLWRpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VydmluZ3Mge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLm1lYXN1cmUtZGl2IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxMjAlO1xufVxuXG4uc3RlcC1pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xufVxuXG4ucG9zdC1jcmVhdGUge1xuICBmb250LWZhbWlseTogXCJPcmVsZWdhIE9uZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDE3MCU7XG59XG5cbi5oZWFkZXJzLXRleHQge1xuICBmb250LWZhbWlseTogXCJPcmVsZWdhIE9uZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDEyMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRpdGxlLWNhdGVnb3J5LWRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cblxuLnBvc3QtdGV4dGFyZWEge1xuICBoZWlnaHQ6IDEwMHB4O1xuICAvKiDQktGL0YHQvtGC0LAg0L/QvtC70Y8g0LIg0L/QuNC60YHQtdC70LDRhSAqL1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IGRpbWdyZXk7XG59XG5cbi5jYXRlZ29yeS1kaXYge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9zdC1kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJPcmVsZWdhIE9uZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDI2MCU7XG4gIC8qINCg0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAg0LIg0L/RgNC+0YbQtdC90YLQsNGFICovXG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgVENcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY2VudGVyO1xufVxuXG4ucG9zdC10ZXh0YXJlYSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIC8qINCS0YvRgdC+0YLQsCDQv9C+0LvRjyDQsiDQv9C40LrRgdC10LvQsNGFICovXG4gIHJlc2l6ZTogbm9uZTtcbiAgb3V0bGluZTogZGltZ3JleTtcbn1cblxuLnVwZGF0ZS1idXR0b24ge1xuICBmb250LXNpemU6IDEyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxOWM3MTk7XG59XG5cbi51c2VyLWltYWdlLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNlbnRlcjtcbn1cblxuLmF2YXRhci1pbWFnZSB7XG4gIGhlaWdodDogMzIwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMiU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59Il19 */"] });


/***/ }),

/***/ "LV9p":
/*!********************************************************************!*\
  !*** ./src/app/components/ui/recipe-step/recipe-step.component.ts ***!
  \********************************************************************/
/*! exports provided: RecipeStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStepComponent", function() { return RecipeStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RecipeStepComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecipeStepComponent.ɵfac = function RecipeStepComponent_Factory(t) { return new (t || RecipeStepComponent)(); };
RecipeStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeStepComponent, selectors: [["app-recipe-step"]], inputs: { title: "title" }, decls: 6, vars: 2, consts: [["type", "checkbox", 3, "value"]], template: function RecipeStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.status);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtc3RlcC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "MpjG":
/*!********************************************************************************!*\
  !*** ./src/app/components/ui/delete-blog-admin/delete-blog-admin.component.ts ***!
  \********************************************************************************/
/*! exports provided: DeleteBlogAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBlogAdminComponent", function() { return DeleteBlogAdminComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/function-service/function.service */ "Xck2");
/* harmony import */ var src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin/services/admin.service */ "CQUn");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







class DeleteBlogAdminComponent {
    constructor(dialogRef, data, functionService, adminService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.functionService = functionService;
        this.adminService = adminService;
        this.snackBarMessage = 'Рецепт, нарушающий правила, был успешно удален!';
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.deleteBlogName = this.data.blog.title;
    }
    deleteBlog() {
        const blogId = this.data.blog._id;
        this.adminService.deletePost(blogId).subscribe();
        // this.blogService.isBeDeleted = null
        this.functionService.openSnackBar(this.snackBarMessage);
        document.location.reload();
    }
}
DeleteBlogAdminComponent.ɵfac = function DeleteBlogAdminComponent_Factory(t) { return new (t || DeleteBlogAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_2__["FunctionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"])); };
DeleteBlogAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeleteBlogAdminComponent, selectors: [["app-delete-blog-admin"]], decls: 10, vars: 4, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", "cdkFocusInitial", ""], ["mat-stroked-button", "", "color", "warn", 3, "mat-dialog-close", "click"]], template: function DeleteBlogAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u044B? \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0441\u044F. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0443\u0434\u0430\u043B\u044F\u0439\u0442\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0440\u0443\u0448\u0430\u044E\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0430\u0439\u0442\u043E\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteBlogAdminComponent_Template_button_click_8_listener() { return ctx.deleteBlog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0412\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx.deleteBlogName), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LowerCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtYmxvZy1hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "OPwS":
/*!********************************************************************!*\
  !*** ./src/app/components/ui/ingredients/ingredients.component.ts ***!
  \********************************************************************/
/*! exports provided: IngredientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsComponent", function() { return IngredientsComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/function-service/function.service */ "Xck2");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function IngredientsComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ingredient_r1.ingTitleRu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ingredient_r1.ingTitleRu);
} }
class IngredientsComponent {
    constructor(dialogRef, data, functionService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.functionService = functionService;
        this.ingredientSource$ = this.functionService.getAllIngredients();
    }
    ngOnInit() {
    }
}
IngredientsComponent.ɵfac = function IngredientsComponent_Factory(t) { return new (t || IngredientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_2__["FunctionService"])); };
IngredientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IngredientsComponent, selectors: [["app-ingredients"]], decls: 8, vars: 3, consts: [["appearance", "fill"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function IngredientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IngredientsComponent_mat_option_6_Template, 2, 2, "mat-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 1, ctx.ingredientSource$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmdyZWRpZW50cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Otrp":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ui_full_view_image_full_view_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/full-view-image/full-view-image.component */ "cAq3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-service/user.service */ "6epG");
/* harmony import */ var src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/blog-service/blog.service */ "dc9q");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");











function UserProfileComponent_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserProfileComponent_div_1_img_3_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.showFullImage(user_r1.profileImage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/api/user/profile-image/", user_r1.profileImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function UserProfileComponent_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 16);
} }
function UserProfileComponent_div_1_mat_card_32_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 23);
} if (rf & 2) {
    const blog_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/api/blogs/image/", blog_r10.headerImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function UserProfileComponent_div_1_mat_card_32_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 24);
} }
function UserProfileComponent_div_1_mat_card_32_mat_chip_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", tag_r16, " ");
} }
function UserProfileComponent_div_1_mat_card_32_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserProfileComponent_div_1_mat_card_32_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const blog_r10 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.navigate(blog_r10._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UserProfileComponent_div_1_mat_card_32_img_3_Template, 1, 1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, UserProfileComponent_div_1_mat_card_32_ng_template_4_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, UserProfileComponent_div_1_mat_card_32_mat_chip_17_Template, 2, 1, "mat-chip", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r10 = ctx.$implicit;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", blog_r10.headerImage)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", blog_r10.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](blog_r10.category.catTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", blog_r10.tags);
} }
function UserProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UserProfileComponent_div_1_img_3_Template, 1, 1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, UserProfileComponent_div_1_ng_template_4_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-accordion", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-expansion-panel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("opened", function UserProfileComponent_div_1_Template_mat_expansion_panel_opened_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.panelOpenState = true; })("closed", function UserProfileComponent_div_1_Template_mat_expansion_panel_closed_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " \u0420\u0435\u0446\u0435\u043F\u0442\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, UserProfileComponent_div_1_mat_card_32_Template, 18, 5, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.ngIf;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", user_r1.profileImage)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", user_r1.userDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.panelOpenState ? "\u0421\u043A\u0440\u044B\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F" : "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 6, ctx_r0.blogEntries$));
} }
class UserProfileComponent {
    constructor(router, activatedRoute, userService, blogService, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.blogService = blogService;
        this.dialog = dialog;
        this.panelOpenState = false;
        this.userId$ = this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((params) => (params['id'])));
        // private sub: Subscription;
        // user: User = null;
        this.user$ = this.userId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((userId) => this.userService.findOne(userId)));
        this.blogEntries$ = this.userId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((userId) => this.blogService.indexByUser(userId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((a) => console.log(a)));
    }
    onPaginateChange(event) {
        return this.userId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((userId) => this.blogEntries$ = this.blogService.indexByUser(userId))).subscribe();
    }
    showFullImage(postImage) {
        const link = 'user/profile-image/';
        const dialogRef = this.dialog.open(_ui_full_view_image_full_view_image_component__WEBPACK_IMPORTED_MODULE_1__["FullViewImageComponent"], { data: { link, postImage } });
    }
    navigate(id) {
        this.router.navigateByUrl('blogs/' + id);
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_5__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 3, vars: 3, consts: [[1, "container"], ["class", "row", "style", "padding-left: 2%; padding-right: 2%; margin: 0;", 4, "ngIf"], [1, "row", 2, "padding-left", "2%", "padding-right", "2%", "margin", "0"], [1, "col-4"], [1, "avatar-image"], ["class", "user-image", 3, "src", "click", 4, "ngIf", "ngIfElse"], ["placeholderImage", ""], [1, "col"], [1, "user-info"], [1, "row"], [2, "text-indent", "20px"], [2, "margin-top", "3%"], [3, "opened", "closed"], [1, "row", "row-cols-4"], ["class", "col card", 4, "ngFor", "ngForOf"], [1, "user-image", 3, "src", "click"], ["src", "../../../assets/placeholders/placeholder-blog-entry.jpg", 1, "user-image"], [1, "col", "card"], [1, "row", 3, "click"], ["class", "image-img", 3, "src", 4, "ngIf", "ngIfElse"], [2, "margin-left", "4%"], [1, "col", "tag-div"], [4, "ngFor", "ngForOf"], [1, "image-img", 3, "src"], ["src", "../../../assets/placeholders/placeholder-blog-entry.jpg"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UserProfileComponent_div_1_Template, 34, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelDescription"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["@charset \"UTF-8\";\n.header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\n.card[_ngcontent-%COMP%] {\n  width: 80%;\n  max-width: 80%;\n  margin-top: 2%;\n}\n.main-div[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n.main-div[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  height: auto;\n}\n.post-button[_ngcontent-%COMP%] {\n  font-size: 120%;\n  margin-top: 5%;\n  background-color: #19c719;\n  color: white;\n}\n.admin-button[_ngcontent-%COMP%] {\n  font-size: 120%;\n  background-color: white;\n  color: black;\n  border: 2px solid #19c719;\n}\n.user-image[_ngcontent-%COMP%] {\n  height: 325px;\n  width: 280px;\n  border-radius: 2%;\n  cursor: pointer;\n}\nimg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.avatar-image[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n}\n.p[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 260%;\n  \n}\n*[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\n.user-info[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.make-user[_ngcontent-%COMP%] {\n  color: #19c719;\n}\n.make-admin[_ngcontent-%COMP%] {\n  color: #ea4c89;\n}\n.block-user-button[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border: 2px solid #ea4c89;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQ0E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFFSjtBQUNBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUVKO0FBQ0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFFSjtBQUNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFFSjtBQUNBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBRUo7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRUo7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUdBO0VBQ0ksZUFBQTtBQUFKO0FBR0E7RUFDSSxtQ0FBQTtFQUNBLGVBQUE7RUFBaUIsOEJBQUE7QUFDckI7QUFFQTtFQUNJLGlDQUFBO0FBQ0o7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7QUFDSjtBQUdBO0VBQ0ksY0FBQTtBQUFKO0FBR0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUFGIiwiZmlsZSI6InVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5tYWluLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1haW4tZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucG9zdC1idXR0b24ge1xuICBmb250LXNpemU6IDEyMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTljNzE5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hZG1pbi1idXR0b24ge1xuICBmb250LXNpemU6IDEyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxOWM3MTk7XG59XG5cbi51c2VyLWltYWdlIHtcbiAgaGVpZ2h0OiAzMjVweDtcbiAgd2lkdGg6IDI4MHB4O1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmF2YXRhci1pbWFnZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY2VudGVyO1xufVxuXG4ucCB7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJPcmVsZWdhIE9uZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDI2MCU7XG4gIC8qINCg0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAg0LIg0L/RgNC+0YbQtdC90YLQsNGFICovXG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnVzZXItaW5mbyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5tYWtlLXVzZXIge1xuICBjb2xvcjogIzE5YzcxOTtcbn1cblxuLm1ha2UtYWRtaW4ge1xuICBjb2xvcjogI2VhNGM4OTtcbn1cblxuLmJsb2NrLXVzZXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAycHggc29saWQgI2VhNGM4OTtcbn0iXX0= */"] });


/***/ }),

/***/ "QA2Q":
/*!********************************************************************************!*\
  !*** ./src/app/components/user/personal-profile/personal-profile.component.ts ***!
  \********************************************************************************/
/*! exports provided: PersonalProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalProfileComponent", function() { return PersonalProfileComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ui_full_view_image_full_view_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/full-view-image/full-view-image.component */ "cAq3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/services/admin.service */ "CQUn");
/* harmony import */ var src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentification-service/authentication.service */ "Uaz9");
/* harmony import */ var src_app_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user-service/user.service */ "6epG");
/* harmony import */ var src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/blog-service/blog.service */ "dc9q");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_favorite_service_favorite_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/favorite-service/favorite.service */ "0ZaS");
/* harmony import */ var src_app_services_draft_service_draft_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/draft-service/draft-service.service */ "7YKZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _user_blogs_user_blogs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../user-blogs/user-blogs.component */ "96WC");
/* harmony import */ var _user_favorites_user_favorites_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../user-favorites/user-favorites.component */ "sZTW");
/* harmony import */ var _user_drafts_user_drafts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../user-drafts/user-drafts.component */ "k//b");


















function PersonalProfileComponent_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PersonalProfileComponent_div_1_img_3_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.showFullImage(user_r3.profileImage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/api/user/profile-image/", user_r3.profileImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function PersonalProfileComponent_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PersonalProfileComponent_div_1_ng_template_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.showFullImage(ctx_r15.post.headerImage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PersonalProfileComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PersonalProfileComponent_div_1_div_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.navigateToAdmin("admin-main"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0440\u0430\u0437\u0434\u0435\u043B\u0443 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PersonalProfileComponent_div_1_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-user-blogs", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blogEntries", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r8.blogEntries$));
} }
function PersonalProfileComponent_div_1_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-user-favorites", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("favEntries", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r9.favEntries$));
} }
function PersonalProfileComponent_div_1_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-user-drafts", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("draftEntries", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r10.draftEntries$));
} }
function PersonalProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PersonalProfileComponent_div_1_img_3_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PersonalProfileComponent_div_1_ng_template_4_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PersonalProfileComponent_div_1_div_8_Template, 5, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PersonalProfileComponent_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.navigateTo("update-profile"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-tab-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-tab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, PersonalProfileComponent_div_1_ng_template_15_Template, 2, 3, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-tab", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, PersonalProfileComponent_div_1_ng_template_17_Template, 2, 3, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-tab", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, PersonalProfileComponent_div_1_ng_template_19_Template, 2, 3, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " \u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PersonalProfileComponent_div_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.navigateTo("create-blog-entry"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.ngIf;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", user_r3.profileImage)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", user_r3.userDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", user_r3.role === "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r3.name);
} }
function PersonalProfileComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0423 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043D\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0445 \u0440\u0435\u0446\u0435\u043F\u0442\u043E\u0432 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class PersonalProfileComponent {
    constructor(router, adminService, authService, userService, blogService, dialog, favService, draftService) {
        this.router = router;
        this.adminService = adminService;
        this.authService = authService;
        this.userService = userService;
        this.blogService = blogService;
        this.dialog = dialog;
        this.favService = favService;
        this.draftService = draftService;
        this.dataSource = null;
        this.userId$ = this.authService.observeGetUserId();
        this.user$ = this.userId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((userId) => this.userService.findOne(userId)));
        this.blogEntries$ = this.userId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((userId) => this.blogService.indexByUser(userId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((a) => console.log(a)));
        this.favEntries$ = this.userId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((userId) => this.favService.getUsersFavPosts(userId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((a) => console.log(a)));
        this.draftEntries$ = this.userId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((userId) => this.adminService.paginatePostForModerationByAuthorId(userId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(() => console.log('here')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((a) => console.log(a)));
    }
    ngOnInit() {
        console.log(this.blogEntries$);
    }
    navigateTo(value) {
        this.router.navigate(['../', value]);
    }
    navigateToAdmin(value) {
        this.router.navigate(['../admin/', value]);
    }
    showFullImage(postImage) {
        const link = 'user/profile-image/';
        const dialogRef = this.dialog.open(_ui_full_view_image_full_view_image_component__WEBPACK_IMPORTED_MODULE_1__["FullViewImageComponent"], { data: { link, postImage } });
    }
}
PersonalProfileComponent.ɵfac = function PersonalProfileComponent_Factory(t) { return new (t || PersonalProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_7__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_favorite_service_favorite_service__WEBPACK_IMPORTED_MODULE_9__["FavoriteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_draft_service_draft_service_service__WEBPACK_IMPORTED_MODULE_10__["DraftServiceService"])); };
PersonalProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PersonalProfileComponent, selectors: [["app-personal-profile"]], decls: 5, vars: 3, consts: [[1, "main-div", 2, "margin", "0"], ["class", "row", "style", "padding-left: 2%; padding-right: 2%; margin: 0;", 4, "ngIf"], ["placeholderNullPosts", ""], [1, "row", 2, "padding-left", "2%", "padding-right", "2%", "margin", "0"], [1, "col"], [1, "avatar-image"], ["class", "user-image", 3, "src", "click", 4, "ngIf", "ngIfElse"], ["placeholderImage", ""], [2, "margin-top", "3%", "text-align", "center"], ["style", "margin-top: 5%;", 4, "ngIf"], [2, "margin-top", "5%"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "admin-button", 3, "click"], [1, "col-6"], ["mat-stretch-tabs", ""], ["label", "\u0412\u0430\u0448\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u044B"], ["matTabContent", ""], ["label", "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"], ["label", "\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0438"], [1, "user-info"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "post-button", 3, "click"], [1, "user-image", 3, "src", "click"], ["src", "../../../assets/placeholders/placeholder-blog-entry.jpg", 1, "user-image", 3, "click"], [3, "blogEntries"], [3, "favEntries"], [3, "draftEntries"], [1, "placeholderNullPosts"], ["src", "../../../assets/placeholders/placeholder-emptyposts-girl.jpg", 1, "placeholderNullPosts-image"]], template: function PersonalProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PersonalProfileComponent_div_1_Template, 29, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PersonalProfileComponent_ng_template_3_Template, 4, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabContent"], _user_blogs_user_blogs_component__WEBPACK_IMPORTED_MODULE_15__["UserBlogsComponent"], _user_favorites_user_favorites_component__WEBPACK_IMPORTED_MODULE_16__["UserFavoritesComponent"], _user_drafts_user_drafts_component__WEBPACK_IMPORTED_MODULE_17__["UserDraftsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["@charset \"UTF-8\";\n.main-div[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  height: auto;\n}\n\n\n\n.post-button[_ngcontent-%COMP%] {\n  font-size: 120%;\n  margin-top: 5%;\n  background-color: #19c719;\n  color: white;\n}\n.admin-button[_ngcontent-%COMP%] {\n  font-size: 120%;\n  background-color: white;\n  color: black;\n  border: 2px solid #19c719;\n}\n.user-image[_ngcontent-%COMP%] {\n  height: 325px;\n  width: 280px;\n  border-radius: 2%;\n  cursor: pointer;\n}\nimg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.avatar-image[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n}\n.p[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 260%;\n  \n}\n*[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\n.user-info[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGVyc29uYWwtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFFSjtBQUNBLDBCQUFBO0FBU0Esb0NBQUE7QUFTQSwyQkFBQTtBQUtBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFsQko7QUFxQkE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFsQko7QUFxQkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWxCSjtBQXVCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFwQko7QUF1QkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQXBCSjtBQXVCQTtFQUNJLGVBQUE7QUFwQko7QUF1QkE7RUFDSSxtQ0FBQTtFQUNBLGVBQUE7RUFBaUIsOEJBQUE7QUFuQnJCO0FBc0JBO0VBQ0ksaUNBQUE7QUFuQko7QUFzQkE7RUFDSSxnQkFBQTtBQW5CSiIsImZpbGUiOiJwZXJzb25hbC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm1haW4tZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBTdHlsZXMgZm9yIHRhYiBsYWJlbHMgKi9cbi8qIFN0eWxlcyBmb3IgdGhlIGFjdGl2ZSB0YWIgbGFiZWwgKi9cbi8qIFN0eWxlcyBmb3IgdGhlIGluayBiYXIgKi9cbi5wb3N0LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOWM3MTk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFkbWluLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAycHggc29saWQgIzE5YzcxOTtcbn1cblxuLnVzZXItaW1hZ2Uge1xuICBoZWlnaHQ6IDMyNXB4O1xuICB3aWR0aDogMjgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYXZhdGFyLWltYWdlIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjZW50ZXI7XG59XG5cbi5wIHtcbiAgZm9udC1zaXplOiAxMjAlO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9yZWxlZ2EgT25lXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjYwJTtcbiAgLyog0KDQsNC30LzQtdGAINGI0YDQuNGE0YLQsCDQsiDQv9GA0L7RhtC10L3RgtCw0YUgKi9cbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udXNlci1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn0iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentification-service/authentication.service */ "Uaz9");
/* harmony import */ var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user-service/user.service */ "6epG");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "wxHw");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");











function AppComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.navigateTo("login"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " perm_identity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_8_div_1_Template_mat_option_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.navigateTo("profile"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_8_div_1_Template_mat_option_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.navigateTo("update-profile"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_8_div_1_Template_mat_option_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0412\u044B\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r6.loggedUser.name);
} }
function AppComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_8_div_2_Template_mat_option_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.navigateTo("profile"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_8_div_2_Template_mat_option_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.navigateTo("update-profile"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_8_div_2_Template_mat_option_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0412\u044B\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r7.toolbarName.name);
} }
function AppComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_8_div_1_Template, 9, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_8_div_2_Template, 9, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.loggedUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.toolbarName);
} }
class AppComponent {
    // user: any;
    // userId$: Observable<string> = this.authService.observeGetUserId();
    // user$: Observable<User> = this.userId$.pipe(
    //   switchMap((userId: string) => this.userService.findOne(userId))
    // )
    constructor(router, authService, userService, confService) {
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.confService = confService;
        this.title = 'frontend';
        this.toolbarName = null;
        this.loggedUser = null;
    }
    ngOnInit() {
        this.loggedUser = this.confService.getConfig();
        this.authService.currentUser.subscribe(x => {
            this.toolbarName = x;
        });
        console.log(this.toolbarName);
        //   .subscribe(x => {
        //   this.loggedUser = x;
        //   this.toolbarName = x.nickname;
        // })
        // this.userService.setNickname()
        // this.userService._nickname.subscribe(x => {
        //   this.loggedUser = x;
        //   this.toolbarName = x.nickname;
        // })
        // const userId = this.authService.getUserId();
        // this.userService.findOne(userId).subscribe(user => {
        //   this.user = user;
        //   // this.ngOnInit()
        // })
    }
    navigateTo(value) {
        this.router.navigate(['../', value]);
    }
    logout() {
        this.authService.logout();
        document.location.reload();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 3, consts: [["color", "primary"], ["routerLink", "/home", 1, "home-link"], [1, "example-spacer"], [4, "ngIf"], ["isNotLogged", ""], [4, "ngIf", "ngIfElse"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6", "crossorigin", "anonymous"], ["mat-flat-button", "", "routerLink", "create-blog-entry", 1, "create-post", 2, "margin-left", "20px"], [1, "not-logged", 3, "click"], [1, "material-icons", "login-icon"], ["name", "loginRegisterDropdown", 2, "margin-left", "20px"], [3, "placeholder"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cook book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_span_5_Template, 3, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_ng_template_6_Template, 4, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_8_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "link", 6);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedUser || ctx.toolbarName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedUser || ctx.toolbarName)("ngIfElse", _r1);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarRow"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Orelega+One&family=PT+Sans+Narrow:wght@400;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito&display=swap\");\n*[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\nmd-icon[_ngcontent-%COMP%] {\n  font-family: \"Material Icons\" !important;\n}\n.example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.home-link[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  outline: none;\n}\n  .mat-focused .mat-form-field-label {\n  \n  color: #19c719 !important;\n}\n .mat-form-field-ripple {\n  \n  background-color: #19c719 !important;\n}\n\n .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #19c719 !important;\n}\n.create-post[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border: 2px solid #19c719;\n}\n.not-logged[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n}\n.login-icon[_ngcontent-%COMP%] {\n  padding-top: 2%;\n}\n.home-link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.header-image[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: #f7f7f7;\n  color: #585857;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG1IQUFBO0FBQ0EsMkVBQUE7QUFFUjtFQUNFLGlDQUFBO0FBQUY7QUFHQTtFQUNFLHdDQUFBO0FBQUY7QUFFQTtFQUNFLGVBQUE7QUFDRjtBQUNBLDhDQUFBO0FBQ0E7RUFDRSxjQUFBO0FBRUY7QUFBQSxpREFBQTtBQUNBO0VBQ0UsbUNBQUE7RUFDQSxhQUFBO0FBR0Y7QUFDQTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUNBO0VBQ0MseUNBQUE7RUFDQSxvQ0FBQTtBQUVEO0FBQ0EsV0FBQTtBQUNBO0VBQ0UseUJBQUE7QUFFRjtBQUNBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUNBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFFRjtBQUNBO0VBQ0UsZUFBQTtBQUVGO0FBQ0E7RUFDRSxlQUFBO0FBRUY7QUFDQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUE7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9yZWxlZ2ErT25lJmZhbWlseT1QVCtTYW5zK05hcnJvdzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0byZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxubWQtaWNvbntcclxuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJyAhaW1wb3J0YW50O1xyXG59XHJcbi5leGFtcGxlLWljb24ge1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG4vKiAjZG9jcmVnaW9uIHRvb2xiYXItcG9zaXRpb24tY29udGVudC1zdHlsZSAqL1xyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi8qICNlbmRkb2NyZWdpb24gdG9vbGJhci1wb3NpdGlvbi1jb250ZW50LXN0eWxlICovXHJcbi5ob21lLWxpbmsge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3JlbGVnYSBPbmUnLCBjdXJzaXZlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xyXG4gIGNvbG9yOiByZ2IoMjUsIDE5OSwgMjUpICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xyXG4gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1LCAxOTksIDI1KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBCb3JkZXIgKi9cclxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgY29sb3I6IHJnYigyNSwgMTk5LCAyNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNyZWF0ZS1wb3N0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1LCAxOTksIDI1KTtcclxufVxyXG5cclxuLm5vdC1sb2dnZWQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubG9naW4taWNvbiB7XHJcbiAgcGFkZGluZy10b3A6IDIlO1xyXG59XHJcblxyXG4uaG9tZS1saW5rOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLmhlYWRlci1pbWFnZSB7XHJcbndpZHRoOiA1MHB4O1xyXG5oZWlnaHQ6IDUwcHg7XHJcblxyXG59IFxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIGNvbG9yOiAjNTg1ODU3O1xyXG59Il19 */"] });


/***/ }),

/***/ "Tk1w":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentification-service/authentication.service */ "Uaz9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AdminGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        const userRole = this.authService.getUserRole();
        if (userRole === 'admin') {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentification-service/authentication.service */ "Uaz9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        // console.log('Гуарды: функция canActivate() в authguard начала свою работу');    
        // console.log('Гуарды: выполняется функция canActivate в authguard. Смотрит, зарегистрированны мы или нет. Если нет - переводит на страницу логина. Выполняет функцию isAuthenticated');
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['login']);
            // console.log('Гуарды: выполняется функция canActivate в authguard. authguard вернул false и перевел на страницу логина');
            return false;
        }
        // console.log('Гуарды: выполняется функция canActivate в authguard. authguard вернул true - мы авторизованы');
        // console.log('Гуарды: функция canActivate() в authguard завершила свою работу');    
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Uaz9":
/*!*****************************************************************************!*\
  !*** ./src/app/services/authentification-service/authentication.service.ts ***!
  \*****************************************************************************/
/*! exports provided: JWT_NAME, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWT_NAME", function() { return JWT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");





;
const JWT_NAME = 'user-token';
class AuthenticationService {
    constructor(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    login(loginForm) {
        return this.http.post('/api/user/login', { email: loginForm.email, password: loginForm.password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((token) => {
            localStorage.setItem(JWT_NAME, token.access_token);
            return token;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((a) => {
            this.getCurrentUser();
        }));
    }
    getCurrentUserObserv() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(localStorage.getItem(JWT_NAME)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((jwt) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.jwtHelper.decodeToken(jwt)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((jwt) => jwt.user)
        // map((a)=> this.currentUser = a)
        )));
    }
    getCurrentUser() {
        const token = localStorage.getItem(JWT_NAME);
        const decoded = this.jwtHelper.decodeToken(token);
        this.currentUser.next(decoded.user);
    }
    logout() {
        localStorage.removeItem(JWT_NAME);
    }
    register(user) {
        return this.http.post('/api/user/', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(user => user));
    }
    isAuthenticated() {
        const token = localStorage.getItem(JWT_NAME);
        const a = !this.jwtHelper.isTokenExpired(token);
        return a;
    }
    getUserId() {
        const token = localStorage.getItem(JWT_NAME);
        if (token) {
            const decoded = this.jwtHelper.decodeToken(token);
            return decoded.user._id;
        }
        else {
            return null;
        }
    }
    observeGetUserId() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(localStorage.getItem(JWT_NAME)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((jwt) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.jwtHelper.decodeToken(jwt)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((jwt) => jwt.user._id))));
    }
    getUserRole() {
        const token = localStorage.getItem(JWT_NAME);
        if (token) {
            const decoded = this.jwtHelper.decodeToken(token);
            return decoded.user.role;
        }
        else {
            return null;
        }
    }
    observeGetUserRole() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(localStorage.getItem(JWT_NAME)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((jwt) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.jwtHelper.decodeToken(jwt)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((jwt) => jwt.user.role))));
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentification-service/authentication.service */ "Uaz9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-service/user.service */ "6epG");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/config.service */ "wxHw");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function LoginComponent_mat_hint_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_hint_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authService, router, userService, confService) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.confService = confService;
        this.hide = true;
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)
            ])
        });
    }
    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.login(this.loginForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(a => this.confService.getConfig()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(b => this.router.navigate(['profile'])))
            .subscribe();
        // this.userService.setNickname();
    }
    navigateTo(value) {
        this.router.navigate(['../', value]);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 28, vars: 8, consts: [[1, "row", "main-container"], [1, "col-4", "login-image"], [1, "col-8"], [1, "new-user"], [1, "new-user-button", 3, "click"], [1, "second-login"], [3, "formGroup", "ngSubmit"], [1, "container"], ["matInput", "", "formControlName", "email", "placeholder", "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430"], [4, "ngIf"], ["matInput", "", "formControlName", "password", "type", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["href", "#", 1, "reset-pass"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "login-button", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u041D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_5_listener() { return ctx.navigateTo("register"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u0412\u0445\u043E\u0434 \u043D\u0430 Cook book ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, LoginComponent_mat_hint_14_Template, 2, 0, "mat-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u041F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, LoginComponent_mat_hint_22_Template, 2, 0, "mat-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u0412\u043E\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"]], styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n  .mat-focused .mat-form-field-label {\n  \n  color: #19c719 !important;\n}\n .mat-form-field-ripple {\n  \n  background-color: #19c719 !important;\n}\n.second-login[_ngcontent-%COMP%] {\n  margin-top: 15%;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 260%;\n  \n  text-align: center;\n  margin-bottom: 5%;\n}\n*[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\n.new-user[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n.reset-pass[_ngcontent-%COMP%] {\n  margin-left: 60%;\n}\n.new-user-button[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border: 2px solid #19c719;\n}\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.main-container[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  margin: 0;\n  padding: 0;\n  height: 91.5%;\n}\n.login-image[_ngcontent-%COMP%] {\n  background-image: url(\"/../../../assets/bg/5-1.jpg\");\n  background-size: 100%;\n}\n.login-button[_ngcontent-%COMP%] {\n  font-size: 120%;\n  margin-top: 1%;\n  background-color: #19c719;\n  color: white;\n}\nimg[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUo7QUFDQTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7QUFFSjtBQUNBO0VBQ0cseUNBQUE7RUFDQSxvQ0FBQTtBQUVIO0FBQ0E7RUFDSSxlQUFBO0FBRUo7QUFBQTtFQUNJLG1DQUFBO0VBQ0EsZUFBQTtFQUFpQiw4QkFBQTtFQUNqQixrQkFBQTtFQUNBLGlCQUFBO0FBSUo7QUFEQTtFQUNJLGlDQUFBO0FBSUo7QUFERTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQUlKO0FBQUE7RUFDSSxnQkFBQTtBQUdKO0FBQUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUdKO0FBREE7RUFDSSxVQUFBO0FBSUo7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBS0o7QUFIQTtFQUNJLG9EQUFBO0VBRUEscUJBQUE7QUFLSjtBQUZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFLSjtBQURBO0VBR0ksbUJBQUE7QUFFSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjMTljNzE5ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5YzcxOSAhaW1wb3J0YW50O1xufVxuXG4uc2Vjb25kLWxvZ2luIHtcbiAgbWFyZ2luLXRvcDogMTUlO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9yZWxlZ2EgT25lXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjYwJTtcbiAgLyog0KDQsNC30LzQtdGAINGI0YDQuNGE0YLQsCDQsiDQv9GA0L7RhtC10L3RgtCw0YUgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ubmV3LXVzZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuXG4ucmVzZXQtcGFzcyB7XG4gIG1hcmdpbi1sZWZ0OiA2MCU7XG59XG5cbi5uZXctdXNlci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTljNzE5O1xufVxuXG4uY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiA5MS41JTtcbn1cblxuLmxvZ2luLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uLy4uLy4uL2Fzc2V0cy9iZy81LTEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICBmb250LXNpemU6IDEyMCU7XG4gIG1hcmdpbi10b3A6IDElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTljNzE5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59Il19 */"] });


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentification-service/authentication.service */ "Uaz9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function RegisterComponent_mat_hint_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_hint_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_hint_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_hint_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043A\u0430\u043A \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u043E\u0434\u043D\u0443 \u0446\u0438\u0444\u0440\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_hint_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CustomValidators {
    static passwordContainsNumber(control) {
        const regex = /\d/;
        if (regex.test(control.value) && control.value !== null) {
            return null;
        }
        else {
            return { passwordInvalid: true };
        }
    }
    static passwordsMatch(control) {
        const password = control.get('password').value;
        const passwordConfirm = control.get('passwordConfirm').value;
        if ((password === passwordConfirm) && (password !== null && passwordConfirm !== null)) {
            return null;
        }
        else {
            return { passwordsNotMatching: true };
        }
    }
}
class RegisterComponent {
    constructor(authService, formBuilder, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.hide = true;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            nickname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email
                ]],
            password: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3),
                    CustomValidators.passwordContainsNumber
                ]],
            passwordConfirm: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        }, {
            validators: CustomValidators.passwordsMatch
        });
    }
    onSubmit() {
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.registerForm.value);
        this.authService.register(this.registerForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => this.router.navigate(['login']))).subscribe();
    }
    navigateTo(value) {
        this.router.navigate(['../', value]);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 34, vars: 11, consts: [[1, "row", "main-container"], [1, "col-4", "register-image"], [1, "col-8"], [1, "registered-user"], [1, "registered-user-button", 3, "click"], [1, "second-register"], [3, "formGroup", "ngSubmit"], [1, "container"], ["matInput", "", "formControlName", "name", "placeholder", "\u0418\u043C\u044F"], [4, "ngIf"], ["matInput", "", "formControlName", "nickname", "placeholder", "\u041B\u043E\u0433\u0438\u043D"], ["matInput", "", "formControlName", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "type", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "passwordConfirm", "placeholder", "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", "type", "password"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "register-button", 3, "disabled"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_5_listener() { return ctx.navigateTo("login"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0412\u043E\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0430 Cook book ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, RegisterComponent_mat_hint_14_Template, 2, 0, "mat-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, RegisterComponent_mat_hint_17_Template, 2, 0, "mat-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, RegisterComponent_mat_hint_20_Template, 2, 0, "mat-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u041F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_25_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, RegisterComponent_mat_hint_28_Template, 2, 0, "mat-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, RegisterComponent_mat_hint_31_Template, 2, 0, "mat-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registerForm.get("name").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registerForm.get("nickname").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("passwordsNotMatching"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"]], styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n  .mat-focused .mat-form-field-label {\n  \n  color: #19c719 !important;\n}\n .mat-form-field-ripple {\n  \n  background-color: #19c719 !important;\n}\n.second-register[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 260%;\n  \n  text-align: center;\n  margin-bottom: 3%;\n}\n*[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\n.registered-user[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n.registered-user-button[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border: 2px solid #19c719;\n}\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.main-container[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  margin: 0;\n  padding: 0;\n  height: 91.5%;\n}\n.register-image[_ngcontent-%COMP%] {\n  background-image: url(\"/../../../assets/bg/3.jpg\");\n  background-size: 100%;\n}\n.register-button[_ngcontent-%COMP%] {\n  font-size: 120%;\n  margin-top: 1%;\n  background-color: #19c719;\n  color: white;\n}\nimg[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUo7QUFDQTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7QUFFSjtBQUNFO0VBQ0MseUNBQUE7RUFDQSxvQ0FBQTtBQUVIO0FBQ0E7RUFDSSxlQUFBO0FBRUo7QUFBQTtFQUNJLG1DQUFBO0VBQ0EsZUFBQTtFQUFpQiw4QkFBQTtFQUNqQixrQkFBQTtFQUNBLGlCQUFBO0FBSUo7QUFEQTtFQUNJLGlDQUFBO0FBSUo7QUFERTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQUlKO0FBQUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUdKO0FBREE7RUFDSSxVQUFBO0FBSUo7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBS0o7QUFIQTtFQUNJLGtEQUFBO0VBRUEscUJBQUE7QUFLSjtBQUZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFLSjtBQURBO0VBR0ksbUJBQUE7QUFFSiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjMTljNzE5ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5YzcxOSAhaW1wb3J0YW50O1xufVxuXG4uc2Vjb25kLXJlZ2lzdGVyIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9yZWxlZ2EgT25lXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjYwJTtcbiAgLyog0KDQsNC30LzQtdGAINGI0YDQuNGE0YLQsCDQsiDQv9GA0L7RhtC10L3RgtCw0YUgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ucmVnaXN0ZXJlZC11c2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuLnJlZ2lzdGVyZWQtdXNlci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTljNzE5O1xufVxuXG4uY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiA5MS41JTtcbn1cblxuLnJlZ2lzdGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uLy4uLy4uL2Fzc2V0cy9iZy8zLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4ucmVnaXN0ZXItYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMjAlO1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5YzcxOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufSJdfQ== */"] });


/***/ }),

/***/ "Xck2":
/*!***************************************************************!*\
  !*** ./src/app/services/function-service/function.service.ts ***!
  \***************************************************************/
/*! exports provided: FunctionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionService", function() { return FunctionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");



class FunctionService {
    constructor(http, _snackBar) {
        this.http = http;
        this._snackBar = _snackBar;
        this.durationInSeconds = 3;
    }
    likeOneBlog(blog) {
        return this.http.put('api/functions/' + blog._id, blog);
    }
    dislikeOneBlog(blog) {
        blog.likes = blog.likes - 1;
        return this.http.put('api/functions/' + blog._id, blog);
    }
    openSnackBar(message) {
        const dialogRef = this._snackBar.open(message, null, { duration: 3000 });
        dialogRef.afterDismissed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    getAllCategory() {
        return this.http.get('/api/category');
    }
    getAllIngredients() {
        return this.http.get('/api/ingredient');
    }
    getIngredientById(id) {
        return this.http.get('/api/ingredient/' + id);
    }
}
FunctionService.ɵfac = function FunctionService_Factory(t) { return new (t || FunctionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
FunctionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FunctionService, factory: FunctionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initConfig", function() { return initConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ "hzlp");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _components_user_users_users_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/user/users/users.component */ "1pfh");
/* harmony import */ var _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/user/user-profile/user-profile.component */ "Otrp");
/* harmony import */ var _components_user_update_user_profile_update_user_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/user/update-user-profile/update-user-profile.component */ "ieRH");
/* harmony import */ var _components_blog_all_blog_entries_all_blog_entries_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/blog/all-blog-entries/all-blog-entries.component */ "9ioS");
/* harmony import */ var _components_blog_create_blog_entry_create_blog_entry_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/blog/create-blog-entry/create-blog-entry.component */ "b+Xi");
/* harmony import */ var _components_blog_view_blog_entry_view_blog_entry_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/blog/view-blog-entry/view-blog-entry.component */ "cR3V");
/* harmony import */ var _components_user_personal_profile_personal_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/user/personal-profile/personal-profile.component */ "QA2Q");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./config.service */ "wxHw");
/* harmony import */ var _components_blog_update_blog_update_blog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/blog/update-blog/update-blog.component */ "DsG+");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _components_ui_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/ui/snackbar/snackbar.component */ "fBKo");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_ui_delele_blog_delele_blog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/ui/delele-blog/delele-blog.component */ "etYm");
/* harmony import */ var _step_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./step.directive */ "y2o0");
/* harmony import */ var _components_ui_recipe_step_recipe_step_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/ui/recipe-step/recipe-step.component */ "LV9p");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _components_ui_welcome_message_welcome_message_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/ui/welcome-message/welcome-message.component */ "61Wb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _components_ui_ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/ui/ingredients/ingredients.component */ "OPwS");
/* harmony import */ var _components_user_user_blogs_user_blogs_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/user/user-blogs/user-blogs.component */ "96WC");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_ui_delete_blog_admin_delete_blog_admin_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/ui/delete-blog-admin/delete-blog-admin.component */ "MpjG");
/* harmony import */ var _components_ui_full_view_image_full_view_image_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/ui/full-view-image/full-view-image.component */ "cAq3");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _components_user_user_favorites_user_favorites_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/user/user-favorites/user-favorites.component */ "sZTW");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _components_user_user_drafts_user_drafts_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/user/user-drafts/user-drafts.component */ "k//b");
/* harmony import */ var _components_ui_draft_blog_admin_draft_blog_admin_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/ui/draft-blog-admin/draft-blog-admin.component */ "9max");

// import { CommonModule  } from '@angular/platform-browser';
























































function initConfig(config) {
    return () => config.loadConfig();
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _config_service__WEBPACK_IMPORTED_MODULE_29__["ConfigService"],
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
            useFactory: initConfig,
            multi: true,
            deps: [_config_service__WEBPACK_IMPORTED_MODULE_29__["ConfigService"]]
        },
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtHelperService"],
        { provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JWT_OPTIONS"], useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JWT_OPTIONS"] },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_17__["JwtInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_47__["CommonModule"],
            // BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__["MatAutocompleteModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_41__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_31__["MatChipsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_44__["MatMenuModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_45__["MatProgressSpinnerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_46__["MatSidenavModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_50__["MatTabsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_52__["MatTooltipModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_39__["MatStepperModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_21__["MarkdownModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        _components_user_users_users_component__WEBPACK_IMPORTED_MODULE_22__["UsersComponent"],
        _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_23__["UserProfileComponent"],
        _components_user_update_user_profile_update_user_profile_component__WEBPACK_IMPORTED_MODULE_24__["UpdateUserProfileComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
        _components_blog_all_blog_entries_all_blog_entries_component__WEBPACK_IMPORTED_MODULE_25__["AllBlogEntriesComponent"],
        _components_blog_create_blog_entry_create_blog_entry_component__WEBPACK_IMPORTED_MODULE_26__["CreateBlogEntryComponent"],
        _components_blog_view_blog_entry_view_blog_entry_component__WEBPACK_IMPORTED_MODULE_27__["ViewBlogEntryComponent"],
        _components_user_personal_profile_personal_profile_component__WEBPACK_IMPORTED_MODULE_28__["PersonalProfileComponent"],
        _components_blog_update_blog_update_blog_component__WEBPACK_IMPORTED_MODULE_30__["UpdateBlogComponent"],
        _components_ui_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_34__["SnackbarComponent"],
        _components_ui_delele_blog_delele_blog_component__WEBPACK_IMPORTED_MODULE_36__["DeleleBlogComponent"],
        _step_directive__WEBPACK_IMPORTED_MODULE_37__["StepDirective"],
        _components_ui_recipe_step_recipe_step_component__WEBPACK_IMPORTED_MODULE_38__["RecipeStepComponent"],
        _components_ui_welcome_message_welcome_message_component__WEBPACK_IMPORTED_MODULE_40__["WelcomeMessageComponent"],
        _components_ui_ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_42__["IngredientsComponent"],
        _components_user_user_blogs_user_blogs_component__WEBPACK_IMPORTED_MODULE_43__["UserBlogsComponent"],
        _components_ui_delete_blog_admin_delete_blog_admin_component__WEBPACK_IMPORTED_MODULE_48__["DeleteBlogAdminComponent"],
        _components_ui_full_view_image_full_view_image_component__WEBPACK_IMPORTED_MODULE_49__["FullViewImageComponent"],
        _components_user_user_favorites_user_favorites_component__WEBPACK_IMPORTED_MODULE_51__["UserFavoritesComponent"],
        _components_user_user_drafts_user_drafts_component__WEBPACK_IMPORTED_MODULE_53__["UserDraftsComponent"],
        _components_ui_draft_blog_admin_draft_blog_admin_component__WEBPACK_IMPORTED_MODULE_54__["DraftBlogAdminComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_47__["CommonModule"],
        // BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__["MatAutocompleteModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_41__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_31__["MatChipsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_44__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_45__["MatProgressSpinnerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_46__["MatSidenavModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_50__["MatTabsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_52__["MatTooltipModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_39__["MatStepperModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_21__["MarkdownModule"]] }); })();


/***/ }),

/***/ "b+Xi":
/*!**********************************************************************************!*\
  !*** ./src/app/components/blog/create-blog-entry/create-blog-entry.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CreateBlogEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBlogEntryComponent", function() { return CreateBlogEntryComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/blog-service/blog.service */ "dc9q");
/* harmony import */ var src_app_services_tag_service_tag_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tag-service/tag.service */ "vjlo");
/* harmony import */ var src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/function-service/function.service */ "Xck2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");






















const _c0 = ["tagInput"];
const _c1 = ["auto"];
const _c2 = ["fileUpload"];
function CreateBlogEntryComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", category_r12._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](category_r12.catTitle);
} }
function CreateBlogEntryComponent_img_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 59);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/api/blogs/image/", ctx_r1.form.get("headerImage").value, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function CreateBlogEntryComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateBlogEntryComponent_div_34_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.deleteImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0445");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CreateBlogEntryComponent_mat_card_actions_35_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateBlogEntryComponent_mat_card_actions_35_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "mat-progress-bar", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r3.file.progress);
} }
function CreateBlogEntryComponent_div_76_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ingredient_r22._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ingredient_r22.ingTitleRu);
} }
function CreateBlogEntryComponent_div_76_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const measure_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", measure_r23.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", measure_r23.value, " ");
} }
function CreateBlogEntryComponent_div_76_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateBlogEntryComponent_div_76_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r24.deleteItemIng(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CreateBlogEntryComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CreateBlogEntryComponent_div_76_mat_option_14_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-form-field", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "\u0415\u0434. \u0438\u0437\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, CreateBlogEntryComponent_div_76_mat_option_25_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CreateBlogEntryComponent_div_76_button_26_Template, 2, 0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u0418\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442 ", i_r18 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 5, ctx_r5.ingredientSource$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.measures);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r18 >= 1);
} }
function CreateBlogEntryComponent_div_84_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 59);
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/api/blogs/image/", ctx_r29.form.get("headerImage").value, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function CreateBlogEntryComponent_div_84_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateBlogEntryComponent_div_84_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r34.deleteImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0445");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CreateBlogEntryComponent_div_84_mat_card_actions_9_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-actions", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateBlogEntryComponent_div_84_mat_card_actions_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r36.stepImageUpload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CreateBlogEntryComponent_div_84_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateBlogEntryComponent_div_84_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const y_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r38.deleteItemStep(y_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CreateBlogEntryComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CreateBlogEntryComponent_div_84_img_7_Template, 1, 1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CreateBlogEntryComponent_div_84_div_8_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CreateBlogEntryComponent_div_84_mat_card_actions_9_Template, 8, 0, "mat-card-actions", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "textarea", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, CreateBlogEntryComponent_div_84_button_20_Template, 2, 0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r28 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", y_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u0428\u0430\u0433 ", y_r28 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.form.get("headerImage").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.form.get("headerImage").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r6.form.get("headerImage").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0448\u0430\u0433\u0430 ", y_r28 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", y_r28 >= 1);
} }
function CreateBlogEntryComponent_mat_chip_93_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CreateBlogEntryComponent_mat_chip_93_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-chip", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("removed", function CreateBlogEntryComponent_mat_chip_93_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44); const tag_r41 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r43.remove(tag_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CreateBlogEntryComponent_mat_chip_93_mat_icon_2_Template, 2, 0, "mat-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r41 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectable", ctx_r8.selectable)("removable", ctx_r8.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tag_r41, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.removable);
} }
function CreateBlogEntryComponent_mat_option_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", tag_r45.tagName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tag_r45.tagName, " ");
} }
class CreateBlogEntryComponent {
    constructor(formBuilder, blogService, tagService, functionService, router) {
        this.formBuilder = formBuilder;
        this.blogService = blogService;
        this.tagService = tagService;
        this.functionService = functionService;
        this.router = router;
        this.ingredientSource$ = this.functionService.getAllIngredients();
        this.tagsSource$ = this.tagService.getAllTags();
        this.categorySource$ = this.functionService.getAllCategory();
        this.snackBarMessage = 'Рецепт успешно отправлен на модерацию!';
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"]];
        this.tagCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.tags = [];
        this.ingredients = [];
        this.measures = [
            { value: 'гр.' },
            { value: 'стакан' },
            { value: 'чайн. л.' },
            { value: 'ст. л.' },
            { value: 'дес. л.' },
            { value: 'шт.' },
            { value: 'кусок' },
            { value: 'щепотка' },
            { value: 'на вкус' },
            { value: 'л.' },
            { value: 'мл.' },
        ];
        this.file = {
            data: null,
            inProgress: false,
            progress: 0
        };
        // this.form = this.formBuilder.group({
        //   published: true,
        //   credentials: this.formBuilder.array([]),
        // });
    }
    get tagsArr() {
        return this.form.get('tags');
    }
    getIngredient(event) {
        console.log(event);
        // this.measures = {
        //   value: event.value,
        //   text: event.source.triggerValue
        // };
        // console.log(this.measures);
        // const ingId = this.ingredient;
        // console.log(ingId);
        // this.measureSource$ = this.functionService.getIngredientById(ingId).pipe(
        //   tap((x) => this.measures.push(x.measurementRu)
        //   )
        // )
        // console.log( this.measures)
    }
    add(event) {
        console.log('add function');
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.tags.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
        this.tagsArr.setValue(null);
    }
    remove(tag) {
        console.log('remove func');
        const index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    }
    selected(event) {
        console.log('selected function');
        // const a =  event.option.viewValue
        // this.tagsArr.push(a)
        this.tags.push(event.option.viewValue);
        this.tagInput.nativeElement.value = '';
        this.tagsArr.setValue(null);
    }
    // private _filter(value: string): string[] {
    //   const filterValue = value.toLowerCase();
    //   return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    // }
    ngOnInit() {
        this.form = this.formBuilder.group({
            id: [{ value: null, disabled: true }],
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            slug: [{ value: null, disabled: true }],
            description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // body: [null, [Validators.required]],
            headerImage: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            tags: [null],
            steps: this.formBuilder.array([this.init()]),
            timeForCooking: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            category: [null],
            ingredients: this.formBuilder.array([this.initIng()]),
            servings: [null]
        });
        // this.formGroup = this._formBuilder.group({
        //   formArray : this._formBuilder.array([this.init()])
        // }) 
        this.addItem();
        this.addItemIng();
        console.log(this.tagsSource$);
    }
    init() {
        return this.formBuilder.group({
            stepPhoto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", []),
            step: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    initIng() {
        return this.formBuilder.group({
            ingredient: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            measure: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    addItem() {
        this.formArray = this.form.get("steps");
        this.formArray.push(this.init());
    }
    addItemIng() {
        this.formArray = this.form.get("ingredients");
        this.formArray.push(this.initIng());
        // this.formArray = this.form.get("quantity") as FormArray;
        // this.formArray.push(this.initIng());
    }
    deleteItemIng(i) {
        let a = this.form.get("ingredients");
        a.removeAt(i);
    }
    deleteItemStep(i) {
        let a = this.form.get("steps");
        a.removeAt(i);
    }
    post() {
        this.form.controls['tags'].setValue(this.tags);
        console.log(this.form.getRawValue());
        this.blogService.postToModerate(this.form.getRawValue()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.functionService.openSnackBar(this.snackBarMessage)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.router.navigate(['../']))).subscribe();
    }
    // openSnackBar() {
    //   this._snackBar.openFromComponent(SnackbarComponent, {
    //     duration: this.durationInSeconds * 1000,
    //   });
    // }
    stepImageUpload() {
        console.log('stepimageupload');
        const fileInput = this.fileUpload.nativeElement;
        fileInput.click();
        fileInput.onchange = () => {
            this.file = {
                data: fileInput.files[0],
                inProgress: false,
                progress: 0
            };
            this.fileUpload.nativeElement.value = '';
            this.uploadStepFile();
        };
    }
    onClick() {
        const fileInput = this.fileUpload.nativeElement;
        fileInput.click();
        fileInput.onchange = () => {
            this.file = {
                data: fileInput.files[0],
                inProgress: false,
                progress: 0
            };
            this.fileUpload.nativeElement.value = '';
            this.uploadFile();
        };
    }
    deleteImage() {
        this.form.controls['headerImage'].setValue(null);
    }
    uploadFile() {
        console.log('Компонент - update-user-profile: uploadFile() начал свою работу');
        const formData = new FormData();
        formData.append('file', this.file.data);
        this.file.inProgress = true;
        this.blogService.uploadHeaderImage(formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress:
                    this.file.progress = Math.round(event.loaded * 100 / event.total);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Response:
                    return event;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            this.file.inProgress = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Upload failed');
        })).subscribe((event) => {
            if (typeof (event) === 'object') {
                this.form.patchValue({ headerImage: event.body.filename });
            }
        });
    }
    uploadStepFile() {
        console.log('Компонент -uploadStepFile() начал свою работу');
        const formData = new FormData();
        formData.append('file', this.file.data);
        this.file.inProgress = true;
        this.blogService.uploadStepImage(formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress:
                    this.file.progress = Math.round(event.loaded * 100 / event.total);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Response:
                    return event;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            this.file.inProgress = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Upload failed');
        })).subscribe((event) => {
            if (typeof (event) === 'object') {
                this.form.patchValue({ stepPhoto: event.body.filename });
            }
        });
    }
}
CreateBlogEntryComponent.ɵfac = function CreateBlogEntryComponent_Factory(t) { return new (t || CreateBlogEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_6__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_tag_service_tag_service__WEBPACK_IMPORTED_MODULE_7__["TagService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_8__["FunctionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
CreateBlogEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CreateBlogEntryComponent, selectors: [["app-create-blog-entry"]], viewQuery: function CreateBlogEntryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.tagInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
    } }, decls: 103, vars: 18, consts: [[1, "main-div", 2, "margin", "0"], [1, "row", 2, "margin", "0"], [1, "col"], [1, "col-6"], [3, "formGroup"], [1, "container"], [2, "margin-top", "3%"], [1, "post-create"], ["width", "100%"], [1, "row", "title-category-div"], [1, "headers-text", 2, "padding", "0"], [1, "col", 2, "padding-left", "0"], [1, "post-title-div"], ["appearance", "outline"], ["matInput", "", "formControlName", "title"], [1, "col", 2, "padding-right", "0"], [1, "category-div"], ["appearance", "fill"], ["formControlName", "category"], [3, "value", 4, "ngFor", "ngForOf"], [1, "post-image"], [1, "headers-text"], ["class", "post-image-img", 3, "src", 4, "ngIf"], ["class", "img-wrap", 4, "ngIf"], [4, "ngIf"], ["type", "file", "id", "fileUpload", "name", "fileUpload", "accept", "image/*", 2, "display", "none"], ["fileUpload", ""], ["width", "80%"], [1, "post-description"], ["matInput", "", "formControlName", "description", 1, "post-textarea"], [1, "row", 2, "width", "100%", "margin-top", "2%"], [1, "col-4"], [1, "col-2"], ["matInput", "", "type", "number", "formControlName", "servings", 1, "servings"], [1, "col", "row"], [1, "col-3"], ["matInput", "", "type", "number", "formControlName", "timeForCooking", 1, "servings"], [1, "col", "container"], [1, "col", 2, "width", "100%"], [1, "text-left"], [2, "width", "100%"], [1, "headers-text", 2, "margin-bottom", "2%", "margin-top", "1%"], ["formArrayName", "ingredients", 2, "width", "100%"], ["class", "row row-cols-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", "mat-raised-button", "", 1, "add-button", 3, "click"], [1, "headers-text", 2, "margin-bottom", "2%"], ["formArrayName", "steps", 2, "width", "100%"], ["class", "row", "style", "margin-top: 3%;", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", "mat-raised-button", "", 1, "add-button", 2, "margin-top", "3%", 3, "click"], [1, "example-chip-list"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "tags", "placeholder", "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0442\u044D\u0433\u0438", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["tagInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "addToModerateButton", 3, "disabled", "click"], [3, "value"], [1, "post-image-img", 3, "src"], [1, "img-wrap"], ["id", "clear", 1, "hide", 3, "click"], [1, "row"], ["mat-button", "", "type", "button", 1, "add-image", 3, "click"], [1, "row", "row-cols-2", 3, "formGroupName"], ["formControlName", "ingredient"], [1, "col", "quantity-measure"], ["appearance", "outline", 1, "servings-div"], ["matInput", "", "type", "number", "formControlName", "quantity", 1, "servings"], ["appearance", "fill", 1, "measure-div"], ["formControlName", "measure"], ["type", "button", "class", "deleteItemIng", "mat-flat-button", "", 3, "click", 4, "ngIf"], ["type", "button", "mat-flat-button", "", 1, "deleteItemIng", 3, "click"], [1, "row", 2, "margin-top", "3%", 3, "formGroupName"], [1, "step-image"], ["class", "mat-card-step", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "step", 1, "add-step-textarea"], ["type", "button", "mat-flat-button", "", 3, "click", 4, "ngIf"], [1, "mat-card-step"], ["mat-button", "", "type", "button", 1, "add-step-image-button", 3, "click"], ["type", "button", "mat-flat-button", "", 3, "click"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""]], template: function CreateBlogEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u0412\u042B \u0421\u041E\u0417\u0414\u0410\u0415\u0422\u0415 \u041D\u041E\u0412\u042B\u0419 \u0420\u0415\u0426\u0415\u041F\u0422:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u044E\u0434\u0430 \u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0431\u043B\u044E\u0434\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u044E\u0434\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0431\u043B\u044E\u0434\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CreateBlogEntryComponent_mat_option_26_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "\u0424\u043E\u0442\u043E \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0431\u043B\u044E\u0434\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, CreateBlogEntryComponent_img_33_Template, 1, 1, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, CreateBlogEntryComponent_div_34_Template, 3, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, CreateBlogEntryComponent_mat_card_actions_35_Template, 11, 1, "mat-card-actions", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "hr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0431\u043B\u044E\u0434\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "textarea", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "                                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 2-3 \u0441\u0442\u0440\u043E\u043A\u0438 - \u0447\u0442\u043E \u044D\u0442\u043E \u0437\u0430 \u0431\u043B\u044E\u0434\u043E, \u0435\u0433\u043E \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438, \u0432\u043A\u0443\u0441\u043E\u0432\u044B\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430. \u042D\u0442\u043E\u0442 \u0442\u0435\u043A\u0441\u0442 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u043D\u043E\u043D\u0441\u0430 \u043A \u0412\u0430\u0448\u0435\u043C\u0443 \u0440\u0435\u0446\u0435\u043F\u0442\u0443 - \u0438 \u0438\u043C\u0435\u043D\u043D\u043E \u043F\u043E \u044D\u0442\u043E\u043C\u0443 \u0442\u0435\u043A\u0441\u0442\u0443 \u043B\u044E\u0434\u0438 \u0431\u0443\u0434\u0443\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C, \u0441\u0442\u043E\u0438\u0442 \u0447\u0438\u0442\u0430\u0442\u044C \u0412\u0430\u0448 \u0440\u0435\u0446\u0435\u043F\u0442 - \u0438\u043B\u0438 \u043D\u0435\u0442. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "hr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0440\u0446\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "\u043C\u0438\u043D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](70, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "hr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "\u0418\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, CreateBlogEntryComponent_div_76_Template, 28, 7, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateBlogEntryComponent_Template_button_click_77_listener() { return ctx.addItemIng(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0438\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "hr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "\u041F\u043E\u0448\u0430\u0433\u043E\u0432\u0430\u044F \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](84, CreateBlogEntryComponent_div_84_Template, 21, 7, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateBlogEntryComponent_Template_button_click_85_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0448\u0430\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](87, "hr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "mat-form-field", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "mat-label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "\u0422\u044D\u0433\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "mat-chip-list", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](93, CreateBlogEntryComponent_mat_chip_93_Template, 3, 4, "mat-chip", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "input", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matChipInputTokenEnd", function CreateBlogEntryComponent_Template_input_matChipInputTokenEnd_94_listener($event) { return ctx.add($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "mat-autocomplete", 55, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("optionSelected", function CreateBlogEntryComponent_Template_mat_autocomplete_optionSelected_96_listener($event) { return ctx.selected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](98, CreateBlogEntryComponent_mat_option_98_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](99, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateBlogEntryComponent_Template_button_click_100_listener() { return ctx.post(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](102, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](92);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 14, ctx.categorySource$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("headerImage").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("headerImage").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.form.get("headerImage").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.form.get("ingredients")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.form.get("steps")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.tagsArr)("matAutocomplete", _r10)("matChipInputFor", _r7)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](99, 16, ctx.tagsSource$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipList"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteTrigger"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipRemove"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]], styles: ["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap\");\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n  .mat-focused .mat-form-field-label {\n  \n  color: #19c719 !important;\n}\n .mat-form-field-ripple {\n  \n  background-color: #19c719 !important;\n}\n\n .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #19c719 !important;\n}\n.post-servings[_ngcontent-%COMP%] {\n  width: 50px;\n  padding: 0;\n  margin: 0;\n}\n.main-div[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  height: auto;\n}\n.post-image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 3%;\n}\n.post-image-img[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n}\n.addToModerateButton[_ngcontent-%COMP%] {\n  font-size: 120%;\n  margin-top: 1%;\n  background-color: #19c719;\n  color: white;\n}\n.add-image[_ngcontent-%COMP%] {\n  color: #19c719;\n}\n.add-step-image-button[_ngcontent-%COMP%] {\n  color: #19c719;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.mat-card-step[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  height: 120px;\n}\n.add-step-textarea[_ngcontent-%COMP%] {\n  height: 100px;\n  \n  resize: none;\n  outline: dimgrey;\n  font-size: 20px;\n  padding: 0 !important;\n}\n.post-title-div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.servings[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 0 !important;\n}\n.servings-div[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.measure-div[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-left: 2%;\n}\n.deleteItemIng[_ngcontent-%COMP%] {\n  bottom: 30px;\n  left: 13px;\n}\n.post-title[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  flex: 1 1 0%;\n  padding: 17px 15px;\n  border-radius: 3px;\n  position: relative;\n  max-width: 100%;\n  min-width: 100%;\n  width: 100%;\n  min-height: unset;\n  font-weight: 900;\n  font-size: 50px;\n  line-height: 50px;\n  color: #585857;\n  text-align: center;\n  border: none;\n  resize: none;\n  outline: none;\n  background-color: transparent;\n}\n.post-title[_ngcontent-%COMP%]:placeholder-shown {\n  color: aquamarine;\n}\np[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\n.step-image[_ngcontent-%COMP%] {\n  background-color: darkgray;\n}\n.post-create[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 170%;\n}\n.headers-text[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 120%;\n  margin: 0;\n}\n.title-category-div[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 3%;\n}\n.post-textarea[_ngcontent-%COMP%] {\n  height: 100px;\n  \n  resize: none;\n  outline: dimgrey;\n}\n.category-div[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  width: 100%;\n}\n.post-description[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 3%;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 260%;\n  \n}\n*[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans TC\", sans-serif;\n}\n.add-button[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border: 2px solid #19c719;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\nimg[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px;\n  width: 150px;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n}\n.variable-textarea[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);\n  min-height: 420px;\n  padding: 8px;\n  transition: all 300ms ease-out;\n}\n.variable-textarea[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 12px 3px rgba(0, 0, 0, 0.09), 0 2px 3px 1px rgba(0, 0, 0, 0.06);\n}\n.variable-binding[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n}\n.example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY3JlYXRlLWJsb2ctZW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQVIsaUZBQUE7QUFFUjtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFFQSxZQUFBO0FBQ0E7RUFDRSwwQkFBQTtBQUNGO0FBRUE7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFFQTtFQUNDLHlDQUFBO0VBQ0Esb0NBQUE7QUFDRDtBQUVBLFdBQUE7QUFDQTtFQUNFLHlCQUFBO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNGO0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLGNBQUE7QUFDRjtBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGO0FBR0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUFlLDJCQUFBO0VBQ2YsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7QUFDRjtBQUVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUFDRjtBQUlBO0VBQ0UsK0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBREY7QUFJQTtFQUNFLGlCQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7QUFERjtBQUlBO0VBQ0UsMEJBQUE7QUFERjtBQUlBO0VBRUUsbUNBQUE7RUFDQSxlQUFBO0FBRkY7QUFLQTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFGRjtBQUtBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFGRjtBQUtBO0VBQ0UsYUFBQTtFQUFlLDJCQUFBO0VBQ2YsWUFBQTtFQUNBLGdCQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQURGO0FBSUE7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFBaUIsOEJBQUE7QUFBbkI7QUFHQTtFQUNFLHVDQUFBO0FBQUY7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0FBREY7QUFJQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURKO0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBREo7QUFJRTtFQUNFLGlGQUFBO0FBREo7QUFLRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBRko7QUFLRTtFQUNFLFdBQUE7QUFGSiIsImZpbGUiOiJjcmVhdGUtYmxvZy1lbnRyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrVEMmZGlzcGxheT1zd2FwXCIpO1xubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBGaXJlZm94ICovXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjMTljNzE5ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5YzcxOSAhaW1wb3J0YW50O1xufVxuXG4vKiBCb3JkZXIgKi9cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogIzE5YzcxOSAhaW1wb3J0YW50O1xufVxuXG4ucG9zdC1zZXJ2aW5ncyB7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5tYWluLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnBvc3QtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5wb3N0LWltYWdlLWltZyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZGRUb01vZGVyYXRlQnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMjAlO1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5YzcxOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWRkLWltYWdlIHtcbiAgY29sb3I6ICMxOWM3MTk7XG59XG5cbi5hZGQtc3RlcC1pbWFnZS1idXR0b24ge1xuICBjb2xvcjogIzE5YzcxOTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1hdC1jYXJkLXN0ZXAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5hZGQtc3RlcC10ZXh0YXJlYSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIC8qINCS0YvRgdC+0YLQsCDQv9C+0LvRjyDQsiDQv9C40LrRgdC10LvQsNGFICovXG4gIHJlc2l6ZTogbm9uZTtcbiAgb3V0bGluZTogZGltZ3JleTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wb3N0LXRpdGxlLWRpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VydmluZ3Mge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLnNlcnZpbmdzLWRpdiB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ubWVhc3VyZS1kaXYge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5kZWxldGVJdGVtSW5nIHtcbiAgYm90dG9tOiAzMHB4O1xuICBsZWZ0OiAxM3B4O1xufVxuXG4ucG9zdC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZsZXg6IDEgMSAwJTtcbiAgcGFkZGluZzogMTdweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiB1bnNldDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6ICM1ODU4NTc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucG9zdC10aXRsZTpwbGFjZWhvbGRlci1zaG93biB7XG4gIGNvbG9yOiBhcXVhbWFyaW5lO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxMjAlO1xufVxuXG4uc3RlcC1pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xufVxuXG4ucG9zdC1jcmVhdGUge1xuICBmb250LWZhbWlseTogXCJPcmVsZWdhIE9uZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDE3MCU7XG59XG5cbi5oZWFkZXJzLXRleHQge1xuICBmb250LWZhbWlseTogXCJPcmVsZWdhIE9uZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDEyMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRpdGxlLWNhdGVnb3J5LWRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cblxuLnBvc3QtdGV4dGFyZWEge1xuICBoZWlnaHQ6IDEwMHB4O1xuICAvKiDQktGL0YHQvtGC0LAg0L/QvtC70Y8g0LIg0L/QuNC60YHQtdC70LDRhSAqL1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IGRpbWdyZXk7XG59XG5cbi5jYXRlZ29yeS1kaXYge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9zdC1kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJPcmVsZWdhIE9uZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDI2MCU7XG4gIC8qINCg0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAg0LIg0L/RgNC+0YbQtdC90YLQsNGFICovXG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgVENcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmFkZC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTljNzE5O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG5pbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjZW50ZXI7XG59XG5cbi52YXJpYWJsZS10ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gIG1pbi1oZWlnaHQ6IDQyMHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLW91dDtcbn1cblxuLnZhcmlhYmxlLXRleHRhcmVhOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA5KSwgMCAycHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuXG4udmFyaWFibGUtYmluZGluZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5leGFtcGxlLWNoaXAtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ "cAq3":
/*!****************************************************************************!*\
  !*** ./src/app/components/ui/full-view-image/full-view-image.component.ts ***!
  \****************************************************************************/
/*! exports provided: FullViewImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullViewImageComponent", function() { return FullViewImageComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class FullViewImageComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        console.log(this.data);
    }
}
FullViewImageComponent.ɵfac = function FullViewImageComponent_Factory(t) { return new (t || FullViewImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
FullViewImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FullViewImageComponent, selectors: [["app-full-view-image"]], decls: 2, vars: 2, consts: [[1, "container"], [1, "img-fluid", 3, "src"]], template: function FullViewImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "http://localhost:3000/api/", ctx.data.link, "", ctx.data.postImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLXZpZXctaW1hZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "cR3V":
/*!******************************************************************************!*\
  !*** ./src/app/components/blog/view-blog-entry/view-blog-entry.component.ts ***!
  \******************************************************************************/
/*! exports provided: ViewBlogEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBlogEntryComponent", function() { return ViewBlogEntryComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ui_full_view_image_full_view_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/full-view-image/full-view-image.component */ "cAq3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentification-service/authentication.service */ "Uaz9");
/* harmony import */ var src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/function-service/function.service */ "Xck2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/blog-service/blog.service */ "dc9q");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_favorite_service_favorite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/favorite-service/favorite.service */ "0ZaS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
















function ViewBlogEntryComponent_div_4_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ing_r10 = ctx.$implicit;
    const y_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", y_r11 + 1, " ", ing_r10.ingredient.ingTitleRu, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ing_r10.quantity, " ", ing_r10.measure, " ");
} }
function ViewBlogEntryComponent_div_4_img_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 35);
} if (rf & 2) {
    const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/api/user/profile-image/", post_r1.authorId.profileImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ViewBlogEntryComponent_div_4_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 36);
} }
function ViewBlogEntryComponent_div_4_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r14 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", step_r13.step, " ");
} }
function ViewBlogEntryComponent_div_4_mat_chip_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tag_r15);
} }
function ViewBlogEntryComponent_div_4_mat_card_actions_61_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewBlogEntryComponent_div_4_mat_card_actions_61_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.addPostToFavorites(post_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewBlogEntryComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-menu", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "flag");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "hr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewBlogEntryComponent_div_4_Template_img_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const post_r1 = ctx.ngIf; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.showFullImage(post_r1.headerImage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u0418\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ViewBlogEntryComponent_div_4_div_28_Template, 7, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewBlogEntryComponent_div_4_Template_div_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const post_r1 = ctx.ngIf; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.navigateToProfile(post_r1.authorId._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ViewBlogEntryComponent_div_4_img_31_Template, 1, 1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ViewBlogEntryComponent_div_4_ng_template_34_Template, 1, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "hr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "timer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " \u042D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "\u041F\u043E\u0448\u0430\u0433\u043E\u0432\u0430\u044F \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, ViewBlogEntryComponent_div_4_div_54_Template, 5, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "mat-chip-list", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, ViewBlogEntryComponent_div_4_mat_chip_57_Template, 2, 1, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, ViewBlogEntryComponent_div_4_mat_card_actions_61_Template, 4, 0, "mat-card-actions", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u26AC ", post_r1.category.catTitle, " \u26AC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", post_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/api/blogs/image/", post_r1.headerImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", post_r1.ingredients);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", post_r1.authorId.profileImage)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", post_r1.authorId.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", post_r1.servings, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", post_r1.timeForCooking, " \u043C\u0438\u043D\u0443\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", post_r1.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", post_r1.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 14, post_r1.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isJoined === true);
} }
class ViewBlogEntryComponent {
    constructor(authService, functionService, router, activatedRoute, blogService, dialog, favoreteService) {
        this.authService = authService;
        this.functionService = functionService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.dialog = dialog;
        this.favoreteService = favoreteService;
        this.snackBarInfoMessage = 'Пост успешно добавлен в избранное!';
        this.isJoined = false;
        this.blogDto$ = this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((params) => {
            const blogDtoId = (params['id']);
            return this.blogService.findOneBlog(blogDtoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((blogDto) => blogDto), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((blogDto) => console.log(blogDto)));
        }));
    }
    ngOnInit() {
        const getUserId = this.authService.getUserId();
        if (getUserId != null) {
            this.isJoined = true;
        }
    }
    showFullImage(postImage) {
        const link = 'blogs/image/';
        const dialogRef = this.dialog.open(_ui_full_view_image_full_view_image_component__WEBPACK_IMPORTED_MODULE_1__["FullViewImageComponent"], { data: { link, postImage } });
    }
    addPostToFavorites(post) {
        this.favoreteService.createFavPost(post).subscribe();
        this.functionService.openSnackBar(this.snackBarInfoMessage);
    }
    navigateToProfile(id) {
        this.router.navigate(['users/' + id]);
    }
}
ViewBlogEntryComponent.ɵfac = function ViewBlogEntryComponent_Factory(t) { return new (t || ViewBlogEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_4__["FunctionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_6__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_favorite_service_favorite_service__WEBPACK_IMPORTED_MODULE_8__["FavoriteService"])); };
ViewBlogEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewBlogEntryComponent, selectors: [["app-view-blog-entry"]], decls: 7, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col-2"], [1, "col"], ["class", "main-div", 4, "ngIf"], [1, "main-div"], [1, "card"], ["mat-icon-button", "", "type", "button", "aria-label", "Users menu", 1, "users-menu", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "post-category-div"], [1, "text-center"], [1, "text-center", 2, "text-transform", "uppercase", "margin-top", "3%", "margin-bottom", "0"], ["width", "100%"], [1, "header-image", 3, "src", "click"], [1, "ingredients", 2, "margin-top", "3%"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col", 2, "margin-left", "20px"], [1, "avatar-image", 3, "click"], ["class", "user-image", 3, "src", 4, "ngIf", "ngIfElse"], ["placeholderImage", ""], ["matTooltip", "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0438\u043D\u0433\u0440\u0438\u0434\u0438\u0435\u043D\u0442\u043E\u0432", 1, "col"], ["src", "https://img.icons8.com/material-outlined/25/000000/shopping-cart-loaded.png"], ["matTooltip", "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0440\u0446\u0438\u0439", 1, "col"], ["src", "https://img.icons8.com/material-outlined/24/000000/salad-bowl.png"], ["matTooltip", "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F", 1, "col", "timer-icon-text"], ["mat-list-icon", ""], [1, "steps"], [4, "ngFor", "ngForOf"], [1, "tags", 2, "margin-top", "3%"], ["aria-label", "Fish selection"], [1, "date"], [4, "ngIf"], [1, "col-3"], [1, "user-image", 3, "src"], ["src", "../../../assets/placeholders/placeholder-blog-entry.jpg", 1, "user-image"], [2, "margin-right", "2%"], [1, "step-div"], ["color", "accent", "matTooltip", "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442 \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435", 2, "cursor", "pointer", 3, "click"]], template: function ViewBlogEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ViewBlogEntryComponent_div_4_Template, 62, 16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 1, ctx.blogDto$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: ["@charset \"UTF-8\";\nh1[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 300%;\n  \n  text-align: center;\n  margin-bottom: 5%;\n}\n*[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\n.step-div[_ngcontent-%COMP%] {\n  line-height: 1.3em;\n  margin: 0.5% 2% 2% 2%;\n  font-size: 120%;\n  text-indent: 20px;\n  \n}\n.post-category-div[_ngcontent-%COMP%] {\n  color: #19c719;\n}\n.timer-icon-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n}\n.header-image[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 300px;\n  cursor: pointer;\n}\n.avatar-image[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n  cursor: pointer;\n}\n.user-image[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 70px;\n  border-radius: 50%;\n}\n.users-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n.date[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  margin: 1%;\n  color: slategray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlldy1ibG9nLWVudHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLG1DQUFBO0VBQ0EsZUFBQTtFQUFpQiw4QkFBQTtFQUNqQixrQkFBQTtFQUNBLGlCQUFBO0FBR0o7QUFBQTtFQUNJLGlDQUFBO0FBR0o7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFBbUIsb0NBQUE7QUFFdkI7QUFFQTtFQUNJLGNBQUE7QUFDSjtBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUFDSjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InZpZXctYmxvZy1lbnRyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiT3JlbGVnYSBPbmVcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMDAlO1xuICAvKiDQoNCw0LfQvNC10YAg0YjRgNC40YTRgtCwINCyINC/0YDQvtGG0LXQvdGC0LDRhSAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5zdGVwLWRpdiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgbWFyZ2luOiAwLjUlIDIlIDIlIDIlO1xuICBmb250LXNpemU6IDEyMCU7XG4gIHRleHQtaW5kZW50OiAyMHB4O1xuICAvKiDQntGC0YHRgtGD0L8g0L/QtdGA0LLQvtC5INGB0YLRgNC+0LrQuCDQsiDQv9C40LrRgdC10LvQsNGFICovXG59XG5cbi5wb3N0LWNhdGVnb3J5LWRpdiB7XG4gIGNvbG9yOiAjMTljNzE5O1xufVxuXG4udGltZXItaWNvbi10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW1hZ2Uge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmF2YXRhci1pbWFnZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VyLWltYWdlIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udXNlcnMtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5kYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IDElO1xuICBjb2xvcjogc2xhdGVncmF5O1xufSJdfQ== */"] });


/***/ }),

/***/ "dc9q":
/*!*******************************************************!*\
  !*** ./src/app/services/blog-service/blog.service.ts ***!
  \*******************************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class BlogService {
    constructor(http) {
        this.http = http;
    }
    indexAll(page, size) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.append('page', String(page));
        params = params.append('limit', String(size));
        return this.http.get('/api/blogs', { params });
    }
    indexByUser(userId) {
        return this.http.get('/api/blogs/user/' + userId);
    }
    postToModerate(blogDto) {
        return this.http.post('/api/moderator', blogDto);
    }
    post(blogDto) {
        console.log('post');
        console.log(blogDto);
        return this.http.post('/api/blogs', blogDto);
    }
    uploadHeaderImage(formData) {
        return this.http.post('/api/blogs/image/upload', formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
    uploadStepImage(formData) {
        return this.http.post('/api/blogs/image/step-image-upload', formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
    findOneBlog(id) {
        return this.http.get('/api/blogs/' + id);
    }
    updateUserBlog(blog) {
        console.log(blog);
        console.log(blog._id);
        return this.http.put('/api/blogs/' + blog._id, blog);
    }
    deleteBlogByUser(blogId) {
        return this.http.delete('/api/blogs/' + blogId);
    }
    toggle(blog, userId) {
        if (blog.likeUserId != 0) {
            blog.likeUserId.forEach(function (v) {
                if (v === userId) {
                    return true;
                }
            });
        }
        // if (blog.likeUserid === userId) {
        //   console.log('Айди есть');
        // } else {
        //   console.log('айди нет');
        // }
        console.log(blog);
        console.log(userId);
        return;
        // return this.toggled ? this.likeOneBlog(blog) : this.dislikeOneBlog(blog);
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "etYm":
/*!********************************************************************!*\
  !*** ./src/app/components/ui/delele-blog/delele-blog.component.ts ***!
  \********************************************************************/
/*! exports provided: DeleleBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleleBlogComponent", function() { return DeleleBlogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/blog-service/blog.service */ "dc9q");
/* harmony import */ var src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/function-service/function.service */ "Xck2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







class DeleleBlogComponent {
    constructor(dialogRef, data, blogService, functionService, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.blogService = blogService;
        this.functionService = functionService;
        this.router = router;
        this.snackBarMessage = 'Рецепт был успешно удален!';
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.deleteBlogName = this.data.blog.title;
    }
    deleteBlog() {
        const blogId = this.data.blog._id;
        console.log(blogId);
        this.blogService.deleteBlogByUser(blogId).subscribe();
        // this.blogService.isBeDeleted = null
        this.functionService.openSnackBar(this.snackBarMessage);
        document.location.reload();
    }
}
DeleleBlogComponent.ɵfac = function DeleleBlogComponent_Factory(t) { return new (t || DeleleBlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_blog_service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_3__["FunctionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
DeleleBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeleleBlogComponent, selectors: [["app-delele-blog"]], decls: 9, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", "cdkFocusInitial", ""], ["mat-stroked-button", "", "color", "warn", 3, "mat-dialog-close", "click"]], template: function DeleleBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u044B? \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0441\u044F.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleleBlogComponent_Template_button_click_7_listener() { return ctx.deleteBlog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0412\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442 ", ctx.deleteBlogName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxlbGUtYmxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "fBKo":
/*!**************************************************************!*\
  !*** ./src/app/components/ui/snackbar/snackbar.component.ts ***!
  \**************************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SnackbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SnackbarComponent.ɵfac = function SnackbarComponent_Factory(t) { return new (t || SnackbarComponent)(); };
SnackbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackbarComponent, selectors: [["app-snackbar"]], decls: 1, vars: 0, consts: [[1, "saved"]], template: function SnackbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbmFja2Jhci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "hzlp":
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authentification-service/authentication.service */ "Uaz9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class JwtInterceptor {
    constructor() { }
    intercept(request, next) {
        console.log('Интерсептор: intercept() из intercept.ts начал работу.');
        // console.log('Интерсептор: intercept() из intercept.ts. Получает токен и отправляет в header всю информацию из него. Если нет, возвращает запрос');
        const token = localStorage.getItem(_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__["JWT_NAME"]);
        // console.log('Интерсептор: intercept() из intercept.ts. Получил токен из localStorage ->', token);    
        if (token) {
            const cloneReq = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + token)
            });
            // console.log('Интерсептор: intercept() из intercept.ts. Из полученного токен отправил инфу в headers и сделал запрос ->', cloneReq);
            // console.log('Интерсептор: intercept() из intercept.ts. Возвращает ->', next.handle(cloneReq));
            console.log('Интерсептор: intercept() из intercept.ts завершил работу');
            return next.handle(cloneReq);
        }
        else {
            // console.log('Интерсептор: intercept() из intercept.ts. Не получил токен, сделал запрос ->', request);
            // console.log('Интерсептор: intercept() из intercept.ts. Возвращает ->', next.handle(request));
            console.log('Интерсептор: intercept() из intercept.ts завершил работу');
            return next.handle(request);
        }
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ "ieRH":
/*!**************************************************************************************!*\
  !*** ./src/app/components/user/update-user-profile/update-user-profile.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UpdateUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserProfileComponent", function() { return UpdateUserProfileComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ui_full_view_image_full_view_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/full-view-image/full-view-image.component */ "cAq3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentification-service/authentication.service */ "Uaz9");
/* harmony import */ var src_app_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user-service/user.service */ "6epG");
/* harmony import */ var src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/function-service/function.service */ "Xck2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");



















const _c0 = ["fileUpload"];
function UpdateUserProfileComponent_form_0_img_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpdateUserProfileComponent_form_0_img_8_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r4.showFullImage(ctx_r4.form.get("profileImage").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/api/user/profile-image/", ctx_r1.form.get("profileImage").value, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function UpdateUserProfileComponent_form_0_mat_progress_bar_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-progress-bar", 23);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r2.file.progress);
} }
function UpdateUserProfileComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function UpdateUserProfileComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, UpdateUserProfileComponent_form_0_img_8_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, UpdateUserProfileComponent_form_0_mat_progress_bar_9_Template, 1, 1, "mat-progress-bar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpdateUserProfileComponent_form_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.updateImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.form.get("profileImage").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.file.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r0.form.valid);
} }
class UpdateUserProfileComponent {
    constructor(dialog, formBuilder, authService, userService, functionService, router) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.userService = userService;
        this.functionService = functionService;
        this.router = router;
        this.file = {
            data: null,
            inProgress: false,
            progress: 0
        };
        this.snackBarImageMessage = 'Фотография успешно обновлена!';
        this.snackBarInfoMessage = 'Информация успешно обновлена!';
    }
    ngOnInit() {
        const userId = this.authService.getUserId();
        console.log(userId);
        this.userService.findOne(userId).subscribe(user => {
            console.log(user);
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](userId),
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.name),
                nickname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.nickname),
                profileImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.profileImage),
                userDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.userDescription),
            });
        });
    }
    updateImage() {
        console.log('Компонент - update-user-profile: updateImage() начал свою работу');
        console.log('Компонент - update-user-profile: updateImage() получил fileInput ->');
        const fileInput = this.fileUpload.nativeElement;
        console.log(fileInput);
        fileInput.click();
        fileInput.onchange = () => {
            this.file = {
                data: fileInput.files[0],
                inProgress: false,
                progress: 0
            };
            this.fileUpload.nativeElement.value = '';
            this.uploadFile();
        };
    }
    uploadFile() {
        console.log('Компонент - update-user-profile: uploadFile() начал свою работу');
        const formData = new FormData();
        formData.append('file', this.file.data);
        this.file.inProgress = true;
        this.userService.uploadProfileImage(formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress:
                    this.file.progress = Math.round(event.loaded * 100 / event.total);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Response:
                    return event;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            this.file.inProgress = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Upload failed');
        })).subscribe((event) => {
            if (typeof (event) === 'object') {
                this.form.patchValue({ profileImage: event.body.profileImage });
                this.functionService.openSnackBar(this.snackBarImageMessage);
            }
        });
    }
    // this.form.controls['tags'].setValue(this.tags);
    // console.log(this.form.getRawValue());
    // this.blogService.postToModerate(this.form.getRawValue()).pipe(
    //   tap(() => this.functionService.openSnackBar(this.snackBarMessage)),
    //   tap(() => this.router.navigate(['../']))
    // ).subscribe();
    update() {
        this.userService.updateOne(this.form.getRawValue()).subscribe();
        this.functionService.openSnackBar(this.snackBarInfoMessage);
        this.router.navigate(['../profile']);
        console.log('Компонент - update-user-profile: update() из update-user-profile.ts закончил работу.');
    }
    showFullImage(postImage) {
        const link = 'user/profile-image/';
        const dialogRef = this.dialog.open(_ui_full_view_image_full_view_image_component__WEBPACK_IMPORTED_MODULE_4__["FullViewImageComponent"], { data: { link, postImage } });
    }
}
UpdateUserProfileComponent.ɵfac = function UpdateUserProfileComponent_Factory(t) { return new (t || UpdateUserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_function_service_function_service__WEBPACK_IMPORTED_MODULE_9__["FunctionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
UpdateUserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UpdateUserProfileComponent, selectors: [["app-update-user-profile"]], viewQuery: function UpdateUserProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
    } }, decls: 1, vars: 1, consts: [[3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "container"], [1, "text-center", 2, "margin-top", "2%"], [1, "row"], [1, "col-4"], [1, "user-image-card"], ["class", "avatar-image", 3, "src", "click", 4, "ngIf"], ["style", "margin-top: 3%;", 3, "value", 4, "ngIf"], ["mat-button", "", "type", "button", 1, "update-button", 3, "click"], [2, "color", "rgb(25, 199, 25)"], ["type", "file", "id", "fileUpload", "name", "fileUpload", "accept", "image/*", 2, "display", "none"], ["fileUpload", ""], [1, "col"], [1, "user-info"], [1, "row", 2, "margin-top", "1%"], ["matInput", "", "placeholder", "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F", "formControlName", "name"], ["matInput", "", "placeholder", "\u041D\u0438\u043A\u043D\u0435\u0439\u043C", "formControlName", "nickname"], ["appearance", "outline"], [1, "headers-text"], ["matInput", "", "placeholder", "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", "formControlName", "userDescription", 1, "post-textarea"], ["mat-flat-button", "", "type", "submit", 1, "update-info-button", 3, "disabled"], [1, "avatar-image", 3, "src", "click"], [2, "margin-top", "3%", 3, "value"]], template: function UpdateUserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, UpdateUserProfileComponent_form_0_Template, 34, 4, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBar"]], styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n}\n.update-info-button[_ngcontent-%COMP%] {\n  font-size: 120%;\n  background-color: #19c719;\n  color: white;\n}\n.post-textarea[_ngcontent-%COMP%] {\n  height: 100px;\n  \n  resize: none;\n  outline: dimgrey;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 260%;\n  \n}\n*[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\n.update-button[_ngcontent-%COMP%] {\n  font-size: 120%;\n  background-color: white;\n  color: black;\n  border: 2px solid #19c719;\n}\n.user-image-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n}\n.avatar-image[_ngcontent-%COMP%] {\n  height: 320px;\n  width: 300px;\n  border-radius: 2%;\n  cursor: pointer;\n  border: none;\n  object-fit: contain;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXBkYXRlLXVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxXQUFBO0FBRUo7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUNKO0FBRUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFBZSwyQkFBQTtFQUNqQixZQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUNBO0VBQ0ksbUNBQUE7RUFDQSxlQUFBO0VBQWlCLDhCQUFBO0FBR3JCO0FBQUE7RUFDSSxpQ0FBQTtBQUdKO0FBQUE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFHSjtBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBR0o7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRUo7QUFZQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBVEoiLCJmaWxlIjoidXBkYXRlLXVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY2VudGVyO1xufVxuXG4udXBkYXRlLWluZm8tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTljNzE5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wb3N0LXRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgLyog0JLRi9GB0L7RgtCwINC/0L7Qu9GPINCyINC/0LjQutGB0LXQu9Cw0YUgKi9cbiAgcmVzaXplOiBub25lO1xuICBvdXRsaW5lOiBkaW1ncmV5O1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9yZWxlZ2EgT25lXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjYwJTtcbiAgLyog0KDQsNC30LzQtdGAINGI0YDQuNGE0YLQsCDQsiDQv9GA0L7RhtC10L3RgtCw0YUgKi9cbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udXBkYXRlLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAycHggc29saWQgIzE5YzcxOTtcbn1cblxuLnVzZXItaW1hZ2UtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY2VudGVyO1xufVxuXG4uYXZhdGFyLWltYWdlIHtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn0iXX0= */"] });


/***/ }),

/***/ "k//b":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/user-drafts/user-drafts.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserDraftsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDraftsComponent", function() { return UserDraftsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/services/admin.service */ "CQUn");
/* harmony import */ var src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentification-service/authentication.service */ "Uaz9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function UserDraftsComponent_mat_card_3_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const blog_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/api/blogs/image/", blog_r1.headerImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UserDraftsComponent_mat_card_3_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} }
function UserDraftsComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-menu", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserDraftsComponent_mat_card_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const blog_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.navigateToUpdate(blog_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserDraftsComponent_mat_card_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const blog_r1 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.openDeleteDialog(blog_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserDraftsComponent_mat_card_3_Template_div_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const blog_r1 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.navigate(blog_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UserDraftsComponent_mat_card_3_img_19_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UserDraftsComponent_mat_card_3_ng_template_20_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", blog_r1.headerImage)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", blog_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blog_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blog_r1.category.catTitle);
} }
class UserDraftsComponent {
    constructor(adminService, authService, router, dialog) {
        this.adminService = adminService;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.userId$ = this.authService.observeGetUserId();
        this.selected = 'Все рецепты';
        this.filters = [
            { value: 'Все рецепты' },
            { value: 'На проверке' },
            { value: 'Отклоненные' }
        ];
    }
    filterDrafts(value) {
        console.log(value);
        if (value === 'Все рецепты') {
            this.getAllDrafts();
        }
        if (value === 'На проверке') {
            this.getOnModerationDrafts();
        }
        if (value === 'Отклоненные') {
            this.getRejectedDrafts();
        }
    }
    getAllDrafts() {
        this.draftEntries = this.userId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((userId) => this.adminService.paginatePostForModerationByAuthorId(userId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((a) => console.log(a)));
    }
    getOnModerationDrafts() {
        this.test = 'На проверке';
    }
    getRejectedDrafts() {
        this.test = 'Отклоненные';
    }
    ngOnInit() {
    }
    navigate(id) {
        this.router.navigateByUrl('blogs/' + id);
    }
}
UserDraftsComponent.ɵfac = function UserDraftsComponent_Factory(t) { return new (t || UserDraftsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authentification_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
UserDraftsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserDraftsComponent, selectors: [["app-user-drafts"]], inputs: { draftEntries: "draftEntries" }, decls: 4, vars: 1, consts: [[2, "margin-top", "3%"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["mat-icon-button", "", "type", "button", "aria-label", "Users menu", 1, "users-menu", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["color", "warn"], [1, "delete-button"], [2, "display", "flex", 3, "click"], [3, "src", 4, "ngIf", "ngIfElse"], ["placeholderImage", ""], [2, "margin-left", "30px"], [1, "crop-text-2"], [3, "src"], ["src", "../../../assets/placeholders/placeholder-blog-entry.jpg"]], template: function UserDraftsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u044B \u0440\u0435\u0446\u0435\u043F\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u043F\u0440\u043E\u0448\u043B\u0438 \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044E \u0438\u043B\u0438 \u0435\u0449\u0435 \u043D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435. \u0414\u0440\u0443\u0433\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043C\u043E\u0433\u0443\u0442 \u0432\u0438\u0434\u0435\u0442\u044C \u0438\u0445. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserDraftsComponent_mat_card_3_Template, 31, 6, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.draftEntries.docs);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["@charset \"UTF-8\";\nimg[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 250px;\n  height: 180px;\n}\n.card[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.users-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n.crop-text-2[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n.delete-button[_ngcontent-%COMP%] {\n  color: #eb0000;\n}\n.p[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 260%;\n  \n}\n*[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\n.placeholderNullPosts-image[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  border: 0;\n  filter: alpha(Opacity=50);\n  opacity: 0.5;\n}\n.placeholderNullPosts[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n  filter: alpha(Opacity=50);\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXNlci1kcmFmdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRUo7QUFDQTtFQUNJLGdCQUFBO0FBRUo7QUFESTtFQUNJLGVBQUE7QUFHUjtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FBRUo7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUFFSjtBQUVBO0VBQ0ksY0FBQTtBQUNKO0FBRUE7RUFDSSxlQUFBO0FBQ0o7QUFFQTtFQUNJLG1DQUFBO0VBQ0EsZUFBQTtFQUFpQiw4QkFBQTtBQUVyQjtBQUNBO0VBQ0ksaUNBQUE7QUFFSjtBQUNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBRUo7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBRUoiLCJmaWxlIjoidXNlci1kcmFmdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5pbWcge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAxODBweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNhcmQgOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXNlcnMtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jcm9wLXRleHQtMiB7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4uZGVsZXRlLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZWIwMDAwO1xufVxuXG4ucCB7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJPcmVsZWdhIE9uZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDI2MCU7XG4gIC8qINCg0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAg0LIg0L/RgNC+0YbQtdC90YLQsNGFICovXG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBsYWNlaG9sZGVyTnVsbFBvc3RzLWltYWdlIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGJvcmRlcjogMDtcbiAgZmlsdGVyOiBhbHBoYShPcGFjaXR5PTUwKTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ucGxhY2Vob2xkZXJOdWxsUG9zdHMge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNlbnRlcjtcbiAgZmlsdGVyOiBhbHBoYShPcGFjaXR5PTUwKTtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */"] });


/***/ }),

/***/ "sZTW":
/*!****************************************************************************!*\
  !*** ./src/app/components/user/user-favorites/user-favorites.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserFavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFavoritesComponent", function() { return UserFavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function UserFavoritesComponent_mat_card_7_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const blog_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/api/blogs/image/", blog_r1.blog.headerImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserFavoritesComponent_mat_card_7_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} }
function UserFavoritesComponent_mat_card_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserFavoritesComponent_mat_card_7_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const blog_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.navigate(blog_r1.blog._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserFavoritesComponent_mat_card_7_img_4_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserFavoritesComponent_mat_card_7_ng_template_5_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", blog_r1.blog.headerImage)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", blog_r1.blog.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r1.blog.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r1.blog.category.catTitle);
} }
class UserFavoritesComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        console.log(this.favEntries);
    }
    navigate(id) {
        this.router.navigateByUrl('blogs/' + id);
    }
    navigateToUpdate(id) {
        this.router.navigate(['update-blog/', id]);
    }
}
UserFavoritesComponent.ɵfac = function UserFavoritesComponent_Factory(t) { return new (t || UserFavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UserFavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserFavoritesComponent, selectors: [["app-user-favorites"]], inputs: { favEntries: "favEntries" }, decls: 8, vars: 2, consts: [[2, "margin-top", "3%"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [2, "display", "flex", 3, "click"], [3, "src", 4, "ngIf", "ngIfElse"], ["placeholderImage", ""], [2, "margin-left", "30px"], [1, "crop-text-2"], [3, "src"], ["src", "../../../assets/placeholders/placeholder-blog-entry.jpg"]], template: function UserFavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u044B \u0432\u0441\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435. \u0414\u0440\u0443\u0433\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0432\u0438\u0434\u0435\u0442\u044C \u0438\u0445. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserFavoritesComponent_mat_card_7_Template, 16, 5, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u043C \u0440\u0435\u0446\u0435\u043F\u0442\u043E\u0432: ", ctx.favEntries.totalDocs, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favEntries.docs);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["@charset \"UTF-8\";\nimg[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 250px;\n  height: 180px;\n}\n.card[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.users-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n.crop-text-2[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n.delete-button[_ngcontent-%COMP%] {\n  color: #eb0000;\n}\n.p[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Orelega One\", cursive;\n  font-size: 260%;\n  \n}\n*[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\n.placeholderNullPosts-image[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  border: 0;\n  filter: alpha(Opacity=50);\n  opacity: 0.5;\n}\n.placeholderNullPosts[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n  filter: alpha(Opacity=50);\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXNlci1mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRUo7QUFDQTtFQUNJLGdCQUFBO0FBRUo7QUFESTtFQUNJLGVBQUE7QUFHUjtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FBRUo7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUFFSjtBQUNBO0VBQ0ksY0FBQTtBQUVKO0FBQ0E7RUFDSSxlQUFBO0FBRUo7QUFDQTtFQUNJLG1DQUFBO0VBQ0EsZUFBQTtFQUFpQiw4QkFBQTtBQUdyQjtBQUFBO0VBQ0ksaUNBQUE7QUFHSjtBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBR0o7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBR0oiLCJmaWxlIjoidXNlci1mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5pbWcge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAxODBweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNhcmQgOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXNlcnMtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jcm9wLXRleHQtMiB7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4uZGVsZXRlLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZWIwMDAwO1xufVxuXG4ucCB7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJPcmVsZWdhIE9uZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDI2MCU7XG4gIC8qINCg0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAg0LIg0L/RgNC+0YbQtdC90YLQsNGFICovXG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBsYWNlaG9sZGVyTnVsbFBvc3RzLWltYWdlIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGJvcmRlcjogMDtcbiAgZmlsdGVyOiBhbHBoYShPcGFjaXR5PTUwKTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ucGxhY2Vob2xkZXJOdWxsUG9zdHMge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNlbnRlcjtcbiAgZmlsdGVyOiBhbHBoYShPcGFjaXR5PTUwKTtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_blog_create_blog_entry_create_blog_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/blog/create-blog-entry/create-blog-entry.component */ "b+Xi");
/* harmony import */ var _components_blog_update_blog_update_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/blog/update-blog/update-blog.component */ "DsG+");
/* harmony import */ var _components_blog_view_blog_entry_view_blog_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/blog/view-blog-entry/view-blog-entry.component */ "cR3V");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_user_personal_profile_personal_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/personal-profile/personal-profile.component */ "QA2Q");
/* harmony import */ var _components_user_update_user_profile_update_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/update-user-profile/update-user-profile.component */ "ieRH");
/* harmony import */ var _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/user-profile/user-profile.component */ "Otrp");
/* harmony import */ var _components_user_users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/users/users.component */ "1pfh");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/admin.guard */ "Tk1w");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















const routes = [
    {
        path: 'admin',
        loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(m => m.AdminModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
    },
    {
        path: 'users',
        children: [
            {
                path: '',
                component: _components_user_users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"]
            },
            {
                path: ':id',
                component: _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"]
            }
        ]
    },
    {
        path: 'update-profile',
        component: _components_user_update_user_profile_update_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UpdateUserProfileComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'update-blog/:id',
        component: _components_blog_update_blog_update_blog_component__WEBPACK_IMPORTED_MODULE_2__["UpdateBlogComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'blogs/:id',
        component: _components_blog_view_blog_entry_view_blog_entry_component__WEBPACK_IMPORTED_MODULE_3__["ViewBlogEntryComponent"]
    },
    {
        path: 'favorites/:id',
        component: _components_blog_view_blog_entry_view_blog_entry_component__WEBPACK_IMPORTED_MODULE_3__["ViewBlogEntryComponent"]
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'profile',
        component: _components_user_personal_profile_personal_profile_component__WEBPACK_IMPORTED_MODULE_7__["PersonalProfileComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'create-blog-entry',
        component: _components_blog_create_blog_entry_create_blog_entry_component__WEBPACK_IMPORTED_MODULE_1__["CreateBlogEntryComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vjlo":
/*!*****************************************************!*\
  !*** ./src/app/services/tag-service/tag.service.ts ***!
  \*****************************************************/
/*! exports provided: TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class TagService {
    constructor(http) {
        this.http = http;
    }
    getAllTags() {
        return this.http.get('/api/tags');
    }
    getOneTagById(blogId) {
        return this.http.get('/api/tags' + blogId);
    }
    getOneByName(tagName) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.append('tagName', String(tagName));
        return this.http.get('/api/tags', { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((tags) => tags), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err)));
    }
    createTag(tagDto) {
        return this.http.post('/api/tags', tagDto);
    }
}
TagService.ɵfac = function TagService_Factory(t) { return new (t || TagService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TagService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TagService, factory: TagService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "wxHw":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: JWT_NAME, ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWT_NAME", function() { return JWT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");




const JWT_NAME = 'user-token';
class ConfigService {
    constructor(_http, jwtHelper) {
        this._http = _http;
        this.jwtHelper = jwtHelper;
        this.user = null;
        this._appConfig = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getUserId() {
        const token = localStorage.getItem(JWT_NAME);
        if (token) {
            const decoded = this.jwtHelper.decodeToken(token);
            return decoded.user._id;
        }
        else {
            console.log('non authorized');
        }
    }
    loadConfig() {
        let userId = this.getUserId();
        if (userId) {
            return this._http.get('/api/user/' + userId)
                .toPromise()
                .then(res => {
                this.user = res;
                this._appConfig.next(this.user);
            });
        }
        else {
            console.log('non authorized');
        }
    }
    getConfig() {
        return this.user;
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac });


/***/ }),

/***/ "y2o0":
/*!***********************************!*\
  !*** ./src/app/step.directive.ts ***!
  \***********************************/
/*! exports provided: StepDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepDirective", function() { return StepDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_blog_create_blog_entry_create_blog_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/blog/create-blog-entry/create-blog-entry.component */ "b+Xi");


class StepDirective {
    constructor(recipeStep) {
        this.recipeStep = recipeStep;
    }
    onClick() {
        console.log('directive');
        // this.recipeStep.list.push("new task")
    }
}
StepDirective.ɵfac = function StepDirective_Factory(t) { return new (t || StepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_blog_create_blog_entry_create_blog_entry_component__WEBPACK_IMPORTED_MODULE_1__["CreateBlogEntryComponent"])); };
StepDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: StepDirective, selectors: [["", "appStep", ""]], hostBindings: function StepDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map