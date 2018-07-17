import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  passangers: Passanger[] =
  [
    {
    id: 1,
    fullname : 'Rose',
    checkedIn:false,
    checkedInDate: 1491606000000
  },
    {
      id: 2,
      fullname : 'James',
      checkedIn:true,
      children: [{name: 'name',age: 10}]
    },
    {
      id: 3,
      fullname : 'Louis',
      checkedIn:false
    }  
  ];
  constructor() { }

  ngOnInit() {
  }

}
export interface Passanger {
  id: number
  fullname: string;
  checkedIn: boolean;
  checkedInDate?: number;
  children?: Child[];
}

export interface Child {
  name: string;
  age: number;
}