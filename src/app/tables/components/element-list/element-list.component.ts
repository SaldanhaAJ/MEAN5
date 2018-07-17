import { Component, OnInit, ViewChild, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { SharedModule } from '../../../_shared/shared.module';
import { MatPaginator, MatTableDataSource, MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import {  DialogEditElementComponent } from '../dialog-edit-element/dialog-edit-element.component';
import { Element, ELEMENT_DATA } from '../../models/element.interface';


@Component({
  selector: 'element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent implements OnInit, AfterViewInit {

    @ViewChild(MatPaginator) paginator2: MatPaginator;
  
    @Input()
    items: Element[];

    @Output()
    update: EventEmitter<any> = new EventEmitter();
  
    @Output()
    edit: EventEmitter<any> = new EventEmitter();
  

    displayedColumns2 = ['position', 'name', 'weight', 'symbol', 'editcol'];
    dataSource2 = new MatTableDataSource();

    animal: string;
    name: string;

  constructor(
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataSource2 = new MatTableDataSource<Element>(this.items);
      
  }


  ngAfterViewInit() {
    this.dataSource2.paginator = this.paginator2;
  }

  startEditDialog(i: number, position: number, name: string , weight: number , symbol: string  )  {
    console.log(name);
    //emit a call at this point
    let dialogRef = this.dialog.open(DialogEditElementComponent, {
        width: '95%',
       // panelClass: 'myClass', // a global style; not encapsulated e.g in index.html
        hasBackdrop: true,
        disableClose: true,
       // backdropClass: 'myBackdrop',
        data: {i: i, position: position, name: name , weight: weight , symbol: symbol 
        }
    });
    const sub = dialogRef.componentInstance.onAdd.subscribe((data) => {
      alert(data);
      this.update.emit (data);
    });
    dialogRef.afterClosed().subscribe(result => {
      sub.unsubscribe();
      //console.log('The dialog was closed');
      this.animal = result;
    });
    

  }

}
