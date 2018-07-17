import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentCount: number = 11;
  constructor() { }

  ngOnInit() {
  }

  childChange(event){
    console.log("changed");
    this.parentCount=event;

  }
}
