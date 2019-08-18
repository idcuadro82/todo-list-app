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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-todo></app-todo>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"info\">\n  <p>Double-click to edit a todo</p>\n  <p>Template by <a href=\"http://sindresorhus.com\">Sindre Sorhus</a></p>\n  <p>Edited by <a href=\"http://ivan-cuadro.com\">Ivan Cuadro</a></p>\n  <p>Part of <a href=\"http://todomvc.com\">TodoMVC</a></p>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo-add/todo-add.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo-add/todo-add.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <h1>todos</h1>\n  <input\n    class=\"new-todo\"\n    placeholder=\"What needs to be done?\"\n    [formControl]=\"textTodoControl\"\n    (keyup.enter)=\"addTodo()\"\n    autofocus>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo-footer/todo-footer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo-footer/todo-footer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <span class=\"todo-count\"><strong>{{ todosLength }}</strong> item left</span>\n  <ul class=\"filters\">\n    <li (click)=\"changeFilter(filter)\" *ngFor=\"let filter of validFilters\">\n      <a [ngClass]=\"{'selected': filter === currentFilter}\">{{ getFilterTitle(filter) }}</a>\n    </li>\n  </ul>\n  <button class=\"clear-completed\" (click)=\"clearAllCompleted()\">Clear completed</button>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo-item/todo-item.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo-item/todo-item.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li [ngClass]=\"{'completed': todo.completed, 'editing': editingText }\">\n  <div class=\"view\">\n    <input class=\"toggle\"\n           type=\"checkbox\"\n           [formControl]=\"checkCompletedControl\"\n           [checked]=\"todo.completed\">\n    <label (dblclick)=\"startEdition()\">{{ todo.text }}</label>\n    <button class=\"destroy\" (click)=\"deleteTodo()\"></button>\n  </div>\n  <input class=\"edit\"\n         [value]=\"todo.text\"\n         [formControl]=\"templateTextControl\"\n         (keyup.enter)=\"endEdition($event);\"\n         (blur)=\"endEdition($event)\"\n         #editTextInput>\n</li>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo-list/todo-list.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo-list/todo-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"todo-list\">\n  <app-todo-item *ngFor=\"let todo of todoList | filterTodo: currentFilter\" [todo]=\"todo\"></app-todo-item>\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"todoapp\">\n  <app-todo-add></app-todo-add>\n  <section class=\"main\">\n    <input id=\"toggle-all\" class=\"toggle-all\" type=\"checkbox\" [formControl]=\"checkToggleAll\">\n    <label for=\"toggle-all\">Mark all as complete</label>\n    <app-todo-list></app-todo-list>\n  </section>\n  <app-todo-footer></app-todo-footer>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.reducers */ "./src/app/app.reducers.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo/todo-list/todo-list.component */ "./src/app/todo/todo-list/todo-list.component.ts");
/* harmony import */ var _todo_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todo/todo-item/todo-item.component */ "./src/app/todo/todo-item/todo-item.component.ts");
/* harmony import */ var _todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todo/todo-footer/todo-footer.component */ "./src/app/todo/todo-footer/todo-footer.component.ts");
/* harmony import */ var _todo_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./todo/todo-add/todo-add.component */ "./src/app/todo/todo-add/todo-add.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filter/filter.pipe */ "./src/app/filter/filter.pipe.ts");




// ngRx












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_9__["TodoComponent"],
                _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_10__["TodoListComponent"],
                _todo_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_11__["TodoItemComponent"],
                _todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_12__["TodoFooterComponent"],
                _todo_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_13__["TodoAddComponent"],
                _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_app_reducers__WEBPACK_IMPORTED_MODULE_6__["appReducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.reducers.ts":
/*!*********************************!*\
  !*** ./src/app/app.reducers.ts ***!
  \*********************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _todo_todo_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo/todo.reducer */ "./src/app/todo/todo.reducer.ts");
/* harmony import */ var _filter_filter_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter/filter.reducer */ "./src/app/filter/filter.reducer.ts");


var appReducers = {
    todos: _todo_todo_reducer__WEBPACK_IMPORTED_MODULE_0__["todoReducer"],
    filter: _filter_filter_reducer__WEBPACK_IMPORTED_MODULE_1__["filterReducer"]
};


/***/ }),

/***/ "./src/app/filter/filter.actions.ts":
/*!******************************************!*\
  !*** ./src/app/filter/filter.actions.ts ***!
  \******************************************/
/*! exports provided: SET_FILTER, SetFilterAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FILTER", function() { return SET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFilterAction", function() { return SetFilterAction; });
var SET_FILTER = '[FILTER] Set Filter';
var SetFilterAction = /** @class */ (function () {
    function SetFilterAction(filter) {
        this.filter = filter;
        this.type = SET_FILTER;
    }
    SetFilterAction.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SetFilterAction;
}());



/***/ }),

/***/ "./src/app/filter/filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/filter/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (todos, filter) {
        switch (filter) {
            case 'completed':
                return todos.filter(function (todo) { return todo.completed; });
            case 'pending':
                return todos.filter(function (todo) { return !todo.completed; });
            default:
                return todos;
        }
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterTodo'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/filter/filter.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/filter/filter.reducer.ts ***!
  \******************************************/
/*! exports provided: filterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterReducer", function() { return filterReducer; });
/* harmony import */ var _filter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.actions */ "./src/app/filter/filter.actions.ts");

var initialState = 'all';
function filterReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _filter_actions__WEBPACK_IMPORTED_MODULE_0__["SET_FILTER"]:
            return action.filter;
        default:
            return state;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo-add/todo-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/todo/todo-add/todo-add.component.ts ***!
  \*****************************************************/
/*! exports provided: TodoAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAddComponent", function() { return TodoAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todo.actions */ "./src/app/todo/todo.actions.ts");





var TodoAddComponent = /** @class */ (function () {
    function TodoAddComponent(store) {
        this.store = store;
    }
    TodoAddComponent.prototype.ngOnInit = function () {
        this.textTodoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    };
    TodoAddComponent.prototype.addTodo = function () {
        if (this.textTodoControl.valid) {
            var action = new _todo_actions__WEBPACK_IMPORTED_MODULE_4__["AddTodoAction"](this.textTodoControl.value);
            this.store.dispatch(action);
            this.textTodoControl.setValue('');
        }
    };
    TodoAddComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    TodoAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-add',
            template: __webpack_require__(/*! raw-loader!./todo-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo-add/todo-add.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], TodoAddComponent);
    return TodoAddComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo-footer/todo-footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/todo/todo-footer/todo-footer.component.ts ***!
  \***********************************************************/
/*! exports provided: TodoFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFooterComponent", function() { return TodoFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_filter_filter_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/filter/filter.actions */ "./src/app/filter/filter.actions.ts");
/* harmony import */ var src_app_todo_todo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/todo/todo.actions */ "./src/app/todo/todo.actions.ts");





var TodoFooterComponent = /** @class */ (function () {
    function TodoFooterComponent(store) {
        this.store = store;
        this.validFilters = ['all', 'completed', 'pending'];
        this.todosLength = 0;
    }
    TodoFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.subscribe(function (state) {
            _this.currentFilter = state.filter;
            _this.countPending(state.todos);
        });
    };
    TodoFooterComponent.prototype.changeFilter = function (newFilter) {
        var action = new src_app_filter_filter_actions__WEBPACK_IMPORTED_MODULE_3__["SetFilterAction"](newFilter);
        this.store.dispatch(action);
    };
    TodoFooterComponent.prototype.getFilterTitle = function (filter) {
        return filter.charAt(0).toUpperCase() + filter.slice(1);
    };
    TodoFooterComponent.prototype.countPending = function (todos) {
        this.todosLength = todos.filter(function (todo) { return !todo.completed; }).length;
    };
    TodoFooterComponent.prototype.clearAllCompleted = function () {
        var action = new src_app_todo_todo_actions__WEBPACK_IMPORTED_MODULE_4__["ClearAllCompletedTodosAction"]();
        this.store.dispatch(action);
    };
    TodoFooterComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    TodoFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-footer',
            template: __webpack_require__(/*! raw-loader!./todo-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo-footer/todo-footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TodoFooterComponent);
    return TodoFooterComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo-item/todo-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-item/todo-item.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todo.model */ "./src/app/todo/todo.model.ts");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todo.actions */ "./src/app/todo/todo.actions.ts");






var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent(store) {
        this.store = store;
    }
    TodoItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkCompletedControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.todo.completed);
        this.templateTextControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.todo.text, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.checkCompletedControl.valueChanges.subscribe(function () {
            var action = new _todo_actions__WEBPACK_IMPORTED_MODULE_5__["ToggleTodoAction"](_this.todo.id);
            _this.store.dispatch(action);
        });
    };
    TodoItemComponent.prototype.startEdition = function () {
        var _this = this;
        this.editingText = true;
        setTimeout(function () {
            _this.editTextInput.nativeElement.select();
        }, 200);
    };
    TodoItemComponent.prototype.endEdition = function (event) {
        this.editingText = false;
        if (event instanceof KeyboardEvent && this.templateTextControl.valid) {
            var action = new _todo_actions__WEBPACK_IMPORTED_MODULE_5__["EditTodoAction"](this.todo.id, this.templateTextControl.value);
            this.store.dispatch(action);
        }
    };
    TodoItemComponent.prototype.deleteTodo = function () {
        var action = new _todo_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteTodoAction"](this.todo.id);
        this.store.dispatch(action);
    };
    TodoItemComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _todo_model__WEBPACK_IMPORTED_MODULE_4__["Todo"])
    ], TodoItemComponent.prototype, "todo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editTextInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TodoItemComponent.prototype, "editTextInput", void 0);
    TodoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-item',
            template: __webpack_require__(/*! raw-loader!./todo-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo-item/todo-item.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TodoItemComponent);
    return TodoItemComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(store) {
        this.store = store;
        this.todoList = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.subscribe(function (state) {
            _this.currentFilter = state.filter;
            _this.todoList = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state.todos);
        });
    };
    TodoListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! raw-loader!./todo-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo-list/todo-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.actions.ts":
/*!**************************************!*\
  !*** ./src/app/todo/todo.actions.ts ***!
  \**************************************/
/*! exports provided: ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_ALL_TODOS, CLEAR_ALL_COMPLETED_TODOS, AddTodoAction, ToggleTodoAction, EditTodoAction, DeleteTodoAction, ToggleAllTodosAction, ClearAllCompletedTodosAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_TODO", function() { return TOGGLE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_TODO", function() { return EDIT_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TODO", function() { return DELETE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_ALL_TODOS", function() { return TOGGLE_ALL_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ALL_COMPLETED_TODOS", function() { return CLEAR_ALL_COMPLETED_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoAction", function() { return AddTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleTodoAction", function() { return ToggleTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodoAction", function() { return EditTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTodoAction", function() { return DeleteTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleAllTodosAction", function() { return ToggleAllTodosAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearAllCompletedTodosAction", function() { return ClearAllCompletedTodosAction; });
var ADD_TODO = '[TODO] Add todo';
var TOGGLE_TODO = '[TODO] Toggle todo';
var EDIT_TODO = '[TODO] Edit todo';
var DELETE_TODO = '[TODO] Delete todo';
var TOGGLE_ALL_TODOS = '[TODO] Toggle all todos';
var CLEAR_ALL_COMPLETED_TODOS = '[TODO] Clear all completed todos';
var AddTodoAction = /** @class */ (function () {
    function AddTodoAction(text) {
        this.text = text;
        this.type = ADD_TODO;
    }
    AddTodoAction.ctorParameters = function () { return [
        { type: String }
    ]; };
    return AddTodoAction;
}());

var ToggleTodoAction = /** @class */ (function () {
    function ToggleTodoAction(id) {
        this.id = id;
        this.type = TOGGLE_TODO;
    }
    ToggleTodoAction.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return ToggleTodoAction;
}());

var EditTodoAction = /** @class */ (function () {
    function EditTodoAction(id, text) {
        this.id = id;
        this.text = text;
        this.type = EDIT_TODO;
    }
    EditTodoAction.ctorParameters = function () { return [
        { type: Number },
        { type: String }
    ]; };
    return EditTodoAction;
}());

var DeleteTodoAction = /** @class */ (function () {
    function DeleteTodoAction(id) {
        this.id = id;
        this.type = DELETE_TODO;
    }
    DeleteTodoAction.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return DeleteTodoAction;
}());

var ToggleAllTodosAction = /** @class */ (function () {
    function ToggleAllTodosAction(completed) {
        this.completed = completed;
        this.type = TOGGLE_ALL_TODOS;
    }
    ToggleAllTodosAction.ctorParameters = function () { return [
        { type: Boolean }
    ]; };
    return ToggleAllTodosAction;
}());

var ClearAllCompletedTodosAction = /** @class */ (function () {
    function ClearAllCompletedTodosAction() {
        this.type = CLEAR_ALL_COMPLETED_TODOS;
    }
    return ClearAllCompletedTodosAction;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo.actions */ "./src/app/todo/todo.actions.ts");





var TodoComponent = /** @class */ (function () {
    function TodoComponent(store) {
        this.store = store;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkToggleAll = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.checkToggleAll.valueChanges.subscribe(function (value) {
            var action = new _todo_actions__WEBPACK_IMPORTED_MODULE_4__["ToggleAllTodosAction"](value);
            _this.store.dispatch(action);
        });
    };
    TodoComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.model.ts":
/*!************************************!*\
  !*** ./src/app/todo/todo.model.ts ***!
  \************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(text) {
        this.id = Math.random();
        this.text = text.charAt(0).toUpperCase() + text.slice(1);
        this.completed = false;
    }
    Todo.ctorParameters = function () { return [
        { type: String }
    ]; };
    return Todo;
}());



/***/ }),

/***/ "./src/app/todo/todo.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/todo/todo.reducer.ts ***!
  \**************************************/
/*! exports provided: todoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.actions */ "./src/app/todo/todo.actions.ts");
/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.model */ "./src/app/todo/todo.model.ts");



var initialState = [];
function todoReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _todo_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TODO"]:
            var todo = new _todo_model__WEBPACK_IMPORTED_MODULE_2__["Todo"](action.text);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state, [todo]);
        case _todo_actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_TODO"]:
            return state.map(function (todoEdit) {
                if (todoEdit.id === action.id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, todoEdit, { completed: !todoEdit.completed });
                }
                else {
                    return todoEdit;
                }
            });
        case _todo_actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_TODO"]:
            return state.map(function (todoEdit) {
                if (todoEdit.id === action.id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, todoEdit, { completed: !todoEdit.completed });
                }
                else {
                    return todoEdit;
                }
            });
        case _todo_actions__WEBPACK_IMPORTED_MODULE_1__["EDIT_TODO"]:
            return state.map(function (todoEdit) {
                if (todoEdit.id === action.id && action.text) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, todoEdit, { text: action.text });
                }
                else {
                    return todoEdit;
                }
            });
        case _todo_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_TODO"]:
            return state.filter(function (todoEdit) { return todoEdit.id !== action.id; });
        case _todo_actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_ALL_TODOS"]:
            return state.map(function (todoEdit) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, todoEdit, { completed: action.completed });
            });
        case _todo_actions__WEBPACK_IMPORTED_MODULE_1__["CLEAR_ALL_COMPLETED_TODOS"]:
            return state.filter(function (todoEdit) { return !todoEdit.completed; });
        default:
            return state;
    }
}


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ivandariocuadroguzman/Documents/redux/todo-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map