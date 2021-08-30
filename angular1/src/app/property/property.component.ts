import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  repDetail: FormGroup | undefined;

  Isshow=false;

  constructor() { }

  ngOnInit(): void {
    this.repDetail=new FormGroup({
      name: new FormControl(),
      password: new FormControl(),
    });
  }
  save() {
    
  }

}
