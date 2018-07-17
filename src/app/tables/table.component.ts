import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { DataService } from '../data.service';
import { address } from '../address/address.model';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  errorMessage: any;
  products: address[]



  displayedColumns = ['firstname', 'lastname', 'address', 'city'];
  dataSource = new MatTableDataSource<address>();
  
  displayedColumns2 = ['position', 'name', 'weight', 'symbol'];
  dataSource2 = new MatTableDataSource(null);
  
  public addresses : address[];
  _addresses: address[];

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  applyFilter2(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource2.filter = filterValue;
  }
  constructor(private _dataService : DataService) { }

  ngOnInit() {
    

    this.dataSource2 = new MatTableDataSource(ELEMENT_DATA);        

    this.dataSource = new MatTableDataSource(ADDRESS_DATA);
    



    this._dataService.getProducts()
    .subscribe(
      (products : address[]) => this.products = products,
      error => this.errorMessage = <any>error,
      
    );

   // this.dataSource = new MatTableDataSource(this.products);
    
    //debugger
console.log ('ddd ' + JSON.stringify(this.products));

    
    this._dataService.getAddresses().
    subscribe(
      // the first argument is a function which runs on success
      data => { this.addresses = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('ngOnInit: loading addresses' )
    );

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

const ADDRESS_DATA : address[] =
[
  {
    "_id": "5a45bfce4cd510e61c8748ea",
    "firstname": "John ",
    "lastname": "Doe 1 ",
    "address": "123 Main Street",
    "city": "Dallas",
    "state": "TX",
    "postalcode": "75206"
  },
  {
    "_id": "5a45bfce4cd510e61c8748eb",
    "firstname": "John ",
    "lastname": "Doe 2 ",
    "address": "102 Main Street",
    "city": "Fort Worth",
    "state": "TX",
    "postalcode": "75206"
  },
  {
    "_id": "5a45bfce4cd510e61c8748ec",
    "firstname": "John ",
    "lastname": "Doe 3 ",
    "address": "102 Main Street",
    "city": "Fort Worth",
    "state": "TX",
    "postalcode": "75206"
  },
  {
    "_id": "5a45bfce4cd510e61c8748ee",
    "firstname": "John ",
    "lastname": "Doe 5 ",
    "address": "102 Main Street",
    "city": "Fort Worth",
    "state": "TX",
    "postalcode": "75206"
  },
  {
    "_id": "5a45bfce4cd510e61c8748ed",
    "firstname": "John ",
    "lastname": "Doe 4 ",
    "address": "102 Main Street",
    "city": "Fort Worth",
    "state": "TX",
    "postalcode": "75206"
  },
  {
    "_id": "5a45bfce4cd510e61c8748ef",
    "firstname": "John ",
    "lastname": "Doe 6 ",
    "address": "102 Main Street",
    "city": "Fort Worth",
    "state": "TX",
    "postalcode": "75206"
  }
];


const ADDRESS_DATA2 : any[] =
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