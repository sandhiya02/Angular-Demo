import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event=" ";
  Onclick()
  {
    this.event="event Binding"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
