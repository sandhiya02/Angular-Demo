import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZomatoService {

  drinks:any;
  fruits:any;

  orderDrinks() {
    return this.drinks;
  }
  orderFruits() {
    return this.fruits;
  }

  constructor() { }
}
