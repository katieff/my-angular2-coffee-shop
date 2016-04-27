/**
 * Created by ferstlk on 20.04.2016.
 */

import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {CoffeeShopComponent} from "./coffee-shop.component";
import {CoffeeService} from "./coffee.service";
import {DashboardComponent} from "./dashboard.component";
import {CoffeeDetailComponent} from "./coffee-detail.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Coffees']">Coffees</a>
  </nav>
        <router-outlet></router-outlet>
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, CoffeeService],
    styleUrls: ['app/app.component.css']
})

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path:'/coffees',
        name: 'Coffees',
        component: CoffeeShopComponent
    },
    {
        path: '/coffee-detail/:id',
        name: 'CoffeeDetail',
        component: CoffeeDetailComponent
    }
])

export class AppComponent {
    title = 'My angular2 App';
}
