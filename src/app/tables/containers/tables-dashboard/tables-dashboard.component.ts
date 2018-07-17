import { Component, OnInit } from '@angular/core';
import { Element, ELEMENT_DATA } from '../../models/element.interface';


@Component({
  selector: 'tables-dashboard',
  templateUrl: './tables-dashboard.component.html',
  styleUrls: ['./tables-dashboard.component.css']
})
export class TablesDashboardComponent implements OnInit {

  element_data: Element[];
  
  constructor() { }

  ngOnInit() {
    this.element_data = ELEMENT_DATA;
  }

  handleRemove(event : Element) {
    console.log (event);
  }

  handleEdit (event : Element) {
    console.log (event);
  }

  handleUpdate (event : any) {
    console.log (event);
  }

}
