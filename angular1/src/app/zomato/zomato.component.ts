import { Component, OnInit } from '@angular/core';

import { ZomatoService } from '../zomato.service';

@Component({
  selector: 'app-zomato',
  templateUrl: './zomato.component.html',
  styleUrls: ['./zomato.component.css']
})
export class ZomatoComponent implements OnInit
 {

  constructor(private food:ZomatoService){}
  ngOnInit(): void {}
  
fruits()
  {
    let my =this.food .orderFruits();
    console.log(my)
  }
  drinks()
  {
    let my1=this.food.orderDrinks();
    console.log(my1);
  }
}
    


  


  
  


