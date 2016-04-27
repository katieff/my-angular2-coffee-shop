System.register(['angular2/core', './coffee-detail.component', './coffee.service', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, coffee_detail_component_1, coffee_service_1, router_1;
    var CoffeeShopComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (coffee_detail_component_1_1) {
                coffee_detail_component_1 = coffee_detail_component_1_1;
            },
            function (coffee_service_1_1) {
                coffee_service_1 = coffee_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CoffeeShopComponent = (function () {
                function CoffeeShopComponent(_coffeeService, _router) {
                    this._coffeeService = _coffeeService;
                    this._router = _router;
                    this.title = 'My Coffee Shop';
                }
                CoffeeShopComponent.prototype.onSelect = function (coffee) { this.selectedCoffee = coffee; };
                ;
                CoffeeShopComponent.prototype.getCoffees = function () {
                    var _this = this;
                    this._coffeeService.getCoffees()
                        .then(function (data) { return _this.coffees = data; });
                };
                ;
                CoffeeShopComponent.prototype.ngOnInit = function () {
                    this.getCoffees();
                };
                CoffeeShopComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['CoffeeDetail', { id: this.selectedCoffee.id }]);
                };
                CoffeeShopComponent = __decorate([
                    core_1.Component({
                        selector: 'coffee-shop',
                        templateUrl: 'app/coffee-shop.component.html',
                        styleUrls: ['app/coffee-shop.component.css'],
                        directives: [coffee_detail_component_1.CoffeeDetailComponent],
                    }), 
                    __metadata('design:paramtypes', [coffee_service_1.CoffeeService, router_1.Router])
                ], CoffeeShopComponent);
                return CoffeeShopComponent;
            }());
            exports_1("CoffeeShopComponent", CoffeeShopComponent);
        }
    }
});
//# sourceMappingURL=coffee-shop.component.js.map