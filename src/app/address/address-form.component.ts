import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

import {Address} from './address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  address = new Address();
  email = new FormControl('', [Validators.required, Validators.email]);
  

  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert("Thanks for submitting! Data: " + JSON.stringify(this.address));
  }

  
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }
}
