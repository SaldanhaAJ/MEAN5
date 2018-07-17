import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  temp: string;

//  items: Item[];
//  items: any[];
  public items : any;

  clickedItem: any;


  public items2$: Observable<any>;
  
  item: Item = {
    id:1,
    name: 'Name'
  };


  constructor(private _dataService : DataService) { 
    this.temp ="asdasd";

  }

  ngOnInit() {
    this._dataService.getUsers().
      subscribe(
        // the first argument is a function which runs on success
        data => { this.items = data},
        // the second argument is a function which runs on error
        err => console.error(err),
        // the third argument is a function which runs on completion
        () => console.log('done loading foods' )
      );
      // to an observable
      this.items2$ = this._dataService.getUsers();

  }






  //Event Binding

  ItemClick  (itemClickedOn: any): void {
      this.clickedItem = itemClickedOn;
      //alert (itemClickedOn.name);
      
  }
}
