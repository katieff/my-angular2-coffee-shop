/**
 * Created by ferstlk on 17.04.2016.
 */
System.register(['angular2/core', 'angular2/router', './coffee', "./coffee.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, coffee_1, coffee_service_1;
    var CoffeeDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (coffee_1_1) {
                coffee_1 = coffee_1_1;
            },
            function (coffee_service_1_1) {
                coffee_service_1 = coffee_service_1_1;
            }],
        execute: function() {
            CoffeeDetailComponent = (function () {
                function CoffeeDetailComponent(_coffeeService, _routeParams) {
                    this._coffeeService = _coffeeService;
                    this._routeParams = _routeParams;
                }
                CoffeeDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._coffeeService.getCoffee(id)
                        .then(function (coffee) { return _this.coffee = coffee; });
                };
                CoffeeDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', coffee_1.Coffee)
                ], CoffeeDetailComponent.prototype, "coffee", void 0);
                CoffeeDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'coffee-detail',
                        templateUrl: 'app/coffee-detail.component.html',
                        styleUrls: ['app/coffee-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [coffee_service_1.CoffeeService, router_1.RouteParams])
                ], CoffeeDetailComponent);
                return CoffeeDetailComponent;
            }());
            exports_1("CoffeeDetailComponent", CoffeeDetailComponent);
        }
    }
});
//# sourceMappingURL=coffee-detail.component.js.map