/**
 * Created by ferstlk on 17.04.2016.
 */

import {Component, Input, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';
import {Coffee} from './coffee';
import {CoffeeService} from "./coffee.service";

@Component({
    selector: 'coffee-detail',
    templateUrl: 'app/coffee-detail.component.html',
    styleUrls: ['app/coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit{
    @Input()
    coffee: Coffee;

    constructor(
        private _coffeeService: CoffeeService,
        private _routeParams: RouteParams
    ) {}

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._coffeeService.getCoffee(id)
            .then(coffee => this.coffee = coffee);
    }

    goBack() {
        window.history.back();
    }
}