import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-auth-dynamic',
  templateUrl: './auth-dynamic.component.html',
  styleUrls: ['./auth-dynamic.component.css']
})
export class AuthDynamicComponent implements OnInit {
  public title: string;

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  handleSubmit (user: User, isValid: boolean){
    this.submitted.emit(user);
  }


}
