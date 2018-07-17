import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
  title:string;
  logo:string;
  name:string;
  name1:string;
  keyupValues:string;
  name2:string;
  keyupValues2:string;
  name5:string;
  name6:string;

  collection4 =['Windstorm', 'Bombasto', 'Magneta', 'Tornado']; 

  constructor() {
    this.title="Some Title";
    this.logo='http://www.yahoo.com/some.jpg';
    this.name="Some Name";
    this.name1="Some Name1";
    this.keyupValues='';
    this.name2="";
    this.keyupValues2='';
    this.name5='';
    this.name6='';
  }

  ngOnInit() {
  }

  handlBlur (event: any){
    console.log("handle blur");
  }

  handleFocus (event: any) {
    console.log("handle focus");
  }  
  
  handleInput (event: any){
    this.name1=event.target.value;

  }

  handleButtonClick() {
    this.name1='';

  }
  handleKeyUp(event: any){
    this.keyupValues += event.target.value + ' | ';
  }

  handleKeyUpViaRef(refvalue: any){
    this.keyupValues2 += refvalue + ' | ';
  }

  addValue(value:any){
    if (value){
      this.collection4.push(value);
    }
  }

  handleChange(value:string) {
    this.name5=value;

  }

}
