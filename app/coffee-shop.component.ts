import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Coffee} from './coffee';
import {CoffeeDetailComponent} from './coffee-detail.component';
import {CoffeeService} from './coffee.service';
import {Router} from "angular2/router";

@Component({
    selector: 'coffee-shop',
    templateUrl: 'app/coffee-shop.component.html',
    styleUrls:['app/coffee-shop.component.css'],
    directives: [CoffeeDetailComponent],
})
export class CoffeeShopComponent implements OnInit{
    title = 'My Coffee Shop';
    selectedCoffee:Coffee;
    onSelect(coffee: Coffee) {this.selectedCoffee = coffee;}
    coffees: Coffee[];
    constructor(
        private _coffeeService: CoffeeService,
        private _router: Router
    ) { };
    getCoffees () {
        this._coffeeService.getCoffees()
            .then(
                data => this.coffees = data
            );
    };
    ngOnInit () {
        this.getCoffees();
    }

    gotoDetail() {
        this._router.navigate(['CoffeeDetail', {id:this.selectedCoffee.id}]);
    }
}


