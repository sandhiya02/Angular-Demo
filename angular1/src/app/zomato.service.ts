import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZomatoService {

  drinks:any="mazaa";
  fruits:any="apple";

  orderDrinks() {
    return this.drinks;
  }
  orderFruits() {
    return this.fruits;
  }

  constructor() { }
}
