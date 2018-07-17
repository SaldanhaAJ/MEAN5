import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Passanger } from '../../models/passanger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
  selector: 'app-passanger-form',
  templateUrl: './passanger-form.component.html',
styleUrls: ['./passanger-form.component.css']
})


export class PassangerFormComponent implements OnInit {
  @Input()
  detail: Passanger;

  @Output()
  update: EventEmitter<Passanger> = new EventEmitter<Passanger>();


  baggage: Baggage[] = [
    {key: 'none', value:'No Baggage' },
    {key: 'hand-only', value:'Hand Baggage' },
    {key: 'hold-only', value:'Hold Baggage' },
    {key: 'hand-hold', value:'Hand and Hold Baggage' }
  ];


  constructor() { 
   // console.log(this.detail);

  }

  toggleCheckIn (checkedIn: boolean ){
    if (checkedIn)
    {
      this.detail.checkedInDate = Date.now();
    }

  }

  ngOnInit() {
    //console.log('ssssss'+this.detail);
  }

  handleSubmit (passanger: Passanger, isValid: boolean){
    this.update.emit( passanger);
  }

}
