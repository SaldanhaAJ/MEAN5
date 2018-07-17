import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

// Shared Module
import { SharedModule } from '../_shared/shared.module';



import { TableHttpComponent } from './table-http.component';
import { TableComponent } from './table.component';
import { IndexTablesComponent } from './index-tables.component';
import { EditAddressDialogComponent } from '../address/edit-address-dialog.component';
import { TablesDashboardComponent } from './containers/tables-dashboard/tables-dashboard.component';

// Components
import { ElementListComponent } from './components/element-list/element-list.component';

// Components - Dialog
import { DialogEditElementComponent } from './components/dialog-edit-element/dialog-edit-element.component';

//Services
import {DataService} from './services/data.service';
import { ToasterService } from './services/toaster.service';



@NgModule({
  imports: [
      SharedModule,
      RouterModule.forChild([      
        { path: 'indextables', component: IndexTablesComponent }
      ])      
      ],
  declarations: 
  [
    TableComponent,
    TableHttpComponent,
    IndexTablesComponent,
    TablesDashboardComponent,
    ElementListComponent,
    DialogEditElementComponent
  ],
  entryComponents: 
  [
    EditAddressDialogComponent,
    DialogEditElementComponent
  ],
  providers: [
    DataService,
    ToasterService
  ]
})
export class TablesModule { }
