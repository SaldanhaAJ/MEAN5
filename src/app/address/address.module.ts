import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule} from '@angular/material/select';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';


import { AddressListComponent } from './address-list.component';
import { AddressFormComponent } from './address-form.component';
import { AddressSearchComponent } from './address-search.component';


import { SharedModule } from '../_shared/shared.module';
import { EditAddressDialogComponent } from './edit-address-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    RouterModule.forChild([      
    { path: 'addresslist', component: AddressListComponent },
    { path: 'addresses', component: AddressListComponent }
  ]),
    SharedModule   
  ],
  declarations: [
    AddressListComponent,
    AddressFormComponent,
    AddressSearchComponent,
    EditAddressDialogComponent
  ]
})
export class AddressModule { }
