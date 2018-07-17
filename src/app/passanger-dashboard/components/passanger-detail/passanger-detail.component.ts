import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Passanger} from '../../models/passanger.interface'

@Component({
  selector: 'app-passanger-detail',
  templateUrl: './passanger-detail.component.html',
  styleUrls: ['./passanger-detail.component.css']
})
export class PassangerDetailComponent implements OnChanges  {
  @Input()
  detail: Passanger;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  editMode: boolean= false;

  onSaveFullName(fullname: string){
    this.detail.fullname = fullname;
  }

  ngOnChanges (changes){
    if (changes.detail){
      // create a local version to edit independent of the global var - till the 
      // emitter is called
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log ('ngOnChanges');
  }
  toggleEdit(){
    if (this.editMode){
      this.edit.emit(this.detail);
    }

    this.editMode=!this.editMode;
  }

  removeItem(){
      this.remove.emit(this.detail);
  }
}
