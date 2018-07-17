import { Component, OnInit } from '@angular/core';

import {Passanger} from '../../models/passanger.interface'
import {PassangerDashboardService} from './../../passanger-dashboard.service';


@Component({
  selector: 'app-passanger-dashboard',
  templateUrl: './passanger-dashboard.component.html',
  styleUrls: ['./passanger-dashboard.component.css']
})
export class PassangerDashboardComponent implements OnInit {

  passangers: Passanger[];

  constructor(private passService: PassangerDashboardService) { }

  ngOnInit() {

      this.passService
        .getPassangers()
        .subscribe((data :Passanger[]) => {
          console.log(data);
          this.passangers =  data;
        });

 /*
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
  */ 
  }
  handleRemove(event : Passanger) {
    console.log (event);
    this.passService
      .deletePassanger(event)
      .subscribe((data:Passanger) => {
        this.passangers = this.passangers.filter((passanger: Passanger) => {
          return (passanger.id != event.id)
          });
              
      })
  }


  handleEdit (event : Passanger) {
    this.passService
      .updatePassanger(event)
      .subscribe((data:Passanger) => {
        this.passangers = this.passangers.map((passanger: Passanger) => {
          if (event.id === passanger.id){
            passanger = Object.assign({}, passanger, event)
          }
          return (passanger)
        });
              
      })
/*
      this.passangers = this.passangers.map((passanger: Passanger) => {
      if (event.id === passanger.id){
        passanger = Object.assign({}, passanger, event)
      }
*/
  
    console.log (event);
  }

}
