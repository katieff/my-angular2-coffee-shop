/**
 * Created by ferstlk on 20.04.2016.
 */
System.register(['angular2/core', 'angular2/router', "./coffee-shop.component", "./coffee.service", "./dashboard.component", "./coffee-detail.component"], function(exports_1, context_1) {
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
    var core_1, router_1, coffee_shop_component_1, coffee_service_1, dashboard_component_1, coffee_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (coffee_shop_component_1_1) {
                coffee_shop_component_1 = coffee_shop_component_1_1;
            },
            function (coffee_service_1_1) {
                coffee_service_1 = coffee_service_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (coffee_detail_component_1_1) {
                coffee_detail_component_1 = coffee_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'My angular2 App';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>{{title}}</h1>\n        <nav>\n    <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n    <a [routerLink]=\"['Coffees']\">Coffees</a>\n  </nav>\n        <router-outlet></router-outlet>\n        ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, coffee_service_1.CoffeeService],
                        styleUrls: ['app/app.component.css']
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/coffees',
                            name: 'Coffees',
                            component: coffee_shop_component_1.CoffeeShopComponent
                        },
                        {
                            path: '/coffee-detail/:id',
                            name: 'CoffeeDetail',
                            component: coffee_detail_component_1.CoffeeDetailComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map