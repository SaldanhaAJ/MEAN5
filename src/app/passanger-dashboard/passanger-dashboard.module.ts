import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {FormsModule } from '@angular/forms';

import { SharedModule } from '../_shared/shared.module';


//Containers
import { PassangerDashboardComponent } from './containers/passanger-dashboard/passanger-dashboard.component';
import { PassangerViewerComponent } from './containers/passanger-viewer/passanger-viewer.component';


//Services
import {PassangerDashboardService} from './passanger-dashboard.service';

//Components

import { PassangerCountComponent } from './components/passanger-count/passanger-count.component';
import { PassangerDetailComponent } from './components/passanger-detail/passanger-detail.component';
import { PassangerFormComponent } from './components/passanger-form/passanger-form.component';
import { PassangerNavComponent } from './components/passanger-nav/passanger-nav.component';
//    SharedModule

import { ViewModule } from '../view/view.module';
import { PassangerListComponent } from './components/passanger-list/passanger-list.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ViewModule,
    SharedModule
  ],
  declarations: [
    PassangerDashboardComponent, 
    PassangerCountComponent, 
    PassangerDetailComponent, 
    PassangerViewerComponent, 
    PassangerFormComponent, 
    PassangerNavComponent, 
    PassangerListComponent 
    ],
  exports: [PassangerDashboardComponent, PassangerViewerComponent],
  providers: [PassangerDashboardService]
})
export class PassangerDashboardModule { }

