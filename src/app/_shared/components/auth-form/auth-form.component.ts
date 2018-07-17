import { Component, OnInit, Input, Renderer, Output, EventEmitter, ContentChild, AfterViewInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../models/user.interface';

//For Content Child queries
import {AuthRememberMeComponent } from '../auth-remember-me/auth-remember-me.component';

//For View Child queries
import {AuthMessageComponent } from '../auth-message/auth-message.component';



@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit, AfterContentInit {

  ChildContentChecked: boolean= false;

  @ContentChild(AuthRememberMeComponent) remember: AuthRememberMeComponent;

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

  @ViewChild('email') email: ElementRef;


  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private renderer: Renderer) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
      console.log(this.email);
      // Modify the native elements in the case of a browser
      //this.email.nativeElement.setAttribute('placeholder','Enter valid email address');
      //this.email.nativeElement.focus();
      //this.email.nativeElement.classList.add ('email');
      //For mobile applications
      this.renderer.setElementAttribute (this.email.nativeElement, 'placeholder', 'placeholder text');
      this.renderer.setElementClass (this.email.nativeElement, 'email', true);
      this.renderer.invokeElementMethod (this.email.nativeElement, 'focus');
  }


  ngAfterContentInit(){
    // Does the Content Child exisit  
    if (this.remember){
      //Query the content child to see if it is checked
      this.remember.checked.subscribe((checked:boolean) => {
           this.ChildContentChecked = checked;
         }) 
    }
    if (this.message) {
      this.message.days = 31;
    }  
  }

  handleSubmit (user: User, isValid: boolean){
    this.submitted.emit(user);
  }

}
