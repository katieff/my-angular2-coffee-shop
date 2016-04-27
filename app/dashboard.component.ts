/**
 * Created by ferstlk on 20.04.2016.
 */

import { Component,OnInit } from 'angular2/core';

import { Coffee } from './coffee';
import { CoffeeService } from './coffee.service';
import {Router} from "angular2/router";

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    coffees: Coffee[] = [];

    constructor(
        private _coffeeService: CoffeeService,
        private _router: Router)
    {}

    ngOnInit() {
        this._coffeeService.getCoffees()
            .then(coffees => this.coffees = coffees.slice(1,5));
    }
    
    gotoDetail(coffee : Coffee) {
        let link = ['CoffeeDetail', {id: coffee.id}];
        this._router.navigate(link);
    }
}