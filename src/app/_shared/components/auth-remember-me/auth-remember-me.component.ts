import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-remember-me',
  templateUrl: './auth-remember-me.component.html',
  styleUrls: ['./auth-remember-me.component.css']
})
export class AuthRememberMeComponent implements OnInit {
  @Output()
  checked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onChecked(value:boolean){
    this.checked.emit(value);

  }

}
