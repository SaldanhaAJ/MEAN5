import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  passangers: Passanger[] =
  [
    {
    id: 1,
    fullname : 'Rose',
    checkedIn:false
    },
    {
      id: 2,
      fullname : 'James',
      checkedIn:true
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
}