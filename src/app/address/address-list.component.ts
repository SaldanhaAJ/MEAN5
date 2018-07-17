import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { address } from './address.model';
//import { MatTableDataSource } from '@angular/material';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  public addresses : any;
//  items2$: Observable<any>
  displayedAddresses: address[];
//  dataSource = new AddressSource(this._dataService,'', this.displayedAddresses);

  dataSource: AddressSource | null;

// ???????????????????????/

  _addresses2: any[];  

//  dataSource2 = new MatTableDataSource<Element>(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource<any>(this._addresses2);
//  dataSource2 : MatTableDataSource  | null;
  
//  dataSource = new AddressSource(this._dataService,'');
  displayedColumns = ['firstname', 'lastname', 'address', 'city'];
  filteredAddresses: address[];

    // MdPaginator Inputs
    length = 100;
    pageSize = 10;
    pageSizeOptions = [5, 10, 25, 100];
  


  // MdPaginator Output
  pageEvent: PageEvent;
  
    setPageSizeOptions(setPageSizeOptionsInput: string) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
    
    onPaginateChange(event){
      alert(JSON.stringify("Current page index: " + event.pageIndex));
    }


//  displayedColumns2 = ['position', 'name', 'weight', 'symbol'];
//  dataSource2 = new MatTableDataSource<Element>(ELEMENT_DATA);

//  @ViewChild(MatPaginator) paginator: MatPaginator;
  
    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
 
//     ngAfterViewInit() {
//      this.dataSource2.paginator = this.paginator;
//  }

  constructor(private _dataService : DataService) { }

  // Getter and setter intead of just a variable lstFilter
  _lstFilter: string ='cart';

  get lstFilter():string {
    return this._lstFilter;
  }
  set lstFilter(value: string) {
    this._lstFilter=value;
    console.log ('filtering');
//    this.dataSource = new AddressSource(this._dataService, value, this.displayedAddresses);
    this.dataSource = new AddressSource(this._dataService, value);
    
  }


  ngOnInit() {

    //dataSource = new AddressSource(this._dataService);
    //displayedColumns = ['name', 'email', 'phone', 'company'];

    this.dataSource = new AddressSource(this._dataService,'');
//    this.dataSource

  this._dataService.getAddresses().
    subscribe(
      // the first argument is a function which runs on success
      data => { this.displayedAddresses = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('ngOnInit: loading displa:yed addresses' )
    );


    this._dataService.getAddresses().
      subscribe(
        // the first argument is a function which runs on success
        data => { this.addresses = data},
        // the second argument is a function which runs on error
        err => console.error(err),
        // the third argument is a function which runs on completion
        () => console.log('ngOnInit: loading addresses' )
    );

    this.dataSource2 = new MatTableDataSource<address[]>(this.addresses);
    
  }

}




export class AddressSource extends DataSource<any> {
  _filterBy: string;
  _addresses: Observable <address[]>;
  _filteredAddresses: Observable <address[]>;

//  constructor(private _dataService : DataService, filterBy:string, displayedAddresses: address[]) {    
    constructor(private _dataService : DataService, filterBy:string) {    
    super();
    this._filterBy = filterBy;
//    this._displayedAddresses = displayedAddresses; 
  }
  connect(): Observable<address[]> {
    console.log ('connect');
    this._addresses = this._dataService.getAddresses();
    
    if (this._filterBy){
      this._filteredAddresses = this._filterBy ? this.performFilter(this._filterBy) : this._addresses;
      console.log ('returning filtered addresses');
      return (this._filteredAddresses);
    }
    else {
      console.log ('returning un-filtered addresses');
      return (this._addresses);        
    }
  }
  disconnect() {}


  performFilter(filterBy: string): Observable<address[]> {
    filterBy = filterBy.toLocaleLowerCase();
    return this._addresses
      .map(addresses => addresses.filter(address => address.lastname.toLocaleLowerCase().lastIndexOf(filterBy) !==-1));
  }
}


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

/*

const address_data: address [] =
[
  {
      "firstname": "John ",
      "lastname": "Doe 1 ",
      "address": "123 Main Street",
      "city" : "Dallas",
      "state" : "TX",
      "postalcode" : "75206"

  },
  {
      "firstname": "John ",
      "lastname": "Doe 2 ",
      "address": "102 Main Street",
      "city" : "Fort Worth",
      "state" : "TX",
      "postalcode" : "75206"

  },
  {
      "firstname": "John ",
      "lastname": "Doe 3 ",
      "address": "102 Main Street",
      "city" : "Fort Worth",
      "state" : "TX",
      "postalcode" : "75206"

  },
  {
      "firstname": "John ",
      "lastname": "Doe 4 ",
      "address": "102 Main Street",
      "city" : "Fort Worth",
      "state" : "TX",
      "postalcode" : "75206"

  },
  {
      "firstname": "John ",
      "lastname": "Doe 5 ",
      "address": "102 Main Street",
      "city" : "Fort Worth",
      "state" : "TX",
      "postalcode" : "75206"

  },
  {
      "firstname": "John ",
      "lastname": "Doe 6 ",
      "address": "102 Main Street",
      "city" : "Fort Worth",
      "state" : "TX",
      "postalcode" : "75206"

  }
];
*/