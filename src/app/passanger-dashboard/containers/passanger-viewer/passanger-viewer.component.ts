import { Component, OnInit } from '@angular/core';


import {Passanger} from '../../models/passanger.interface'

import {PassangerDashboardService} from './../../passanger-dashboard.service';


//Shared Components
import { SharedModule } from '../../../_shared/shared.module';

import {GithubApi} from '../../models/GithubApi.interface';

import { Element, ELEMENT_DATA } from '../../models/GithubApi.interface';


@Component({
  selector: 'app-passanger-viewer',
  templateUrl: './passanger-viewer.component.html',
  styleUrls: ['./passanger-viewer.component.css']
})


export class PassangerViewerComponent implements OnInit {

  passanger: Passanger;

  addresses: GithubApi;

  element_data: Element[];

  constructor(private passService: PassangerDashboardService) { 

  

  }

  rememberMe: boolean= false;

  ngOnInit() {
    this.passService
    .getPassanger(4)
    .subscribe((data :Passanger) => {
      this.passanger =  data;
    });

    this.passService
    .getAddresses('','',1)
    .subscribe((data :GithubApi) => {
      this.addresses =  data;
    });
    
    this.element_data = ELEMENT_DATA;

  }

  OnUpdate(event: Passanger) {
    console.log(event);
    this.passService
    .updatePassanger(event)
    .subscribe((data:Passanger) => {
      this.passanger =  Object.assign({}, this.passanger, event)
      });
            
  }

  createUser(event: any){
      console.log(event);
        }

  loginUser(event: any){
      console.log(event);
              
      }

      rememberUser(event: boolean){
          this.rememberMe = event;
          console.log('rememberUser ' + event);
 
      }


    }

