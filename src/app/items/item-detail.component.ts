import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: any;
  
  constructor(private _dataService : DataService) { }

  ngOnInit() {
  }

  save(item): void {
    //call the service to save this.hero
//    this._dataService.updateItem(item)
    this._dataService.updateItem(item)
    .subscribe(
      data => {
        // refresh the list
        //this._dataService.getUsers();
        return true;
      },
      error => {
        console.error("Error saving food!");
        return Observable.throw(error);
      }
   );

    console.log('after updateItem');

  }




  goBack(): void {
    alert('goBack');
  }


}
