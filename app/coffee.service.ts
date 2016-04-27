/**
 * Created by ferstlk on 17.04.2016.
 */

import {Injectable} from 'angular2/core';
import {COFFEES} from './mock-coffees';
import {Coffee} from './coffee';

@Injectable()
export class CoffeeService {
    getCoffees() {
        return Promise.resolve(COFFEES);
    };
    getCoffee(id:number) {
        return Promise.resolve(COFFEES).then(
            coffees => coffees.filter(coffee => coffee.id === id)[0]
        );
    }
    getCoffeesSlowly() {
        return new Promise<Coffee[]>(resolve =>
            setTimeout(()=>resolve(COFFEES), 2000) // 2 seconds
        );
    };
}