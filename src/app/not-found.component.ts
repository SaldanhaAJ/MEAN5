import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'not-found',
  template:`
    <div>
    Not Found.
    <a routerLink="/">Go Home </a>
    </div>
  
  `
})
export class NotFoundComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {

  }

}
