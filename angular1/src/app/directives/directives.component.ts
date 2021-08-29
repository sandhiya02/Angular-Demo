import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  displayName=true;

  names=["tom","sandy","jack","maha"]

  constructor() { }

  ngOnInit(): void {
  }

}
