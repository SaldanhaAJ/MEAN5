import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ng Material
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule, MatTableModule } from '@angular/material';
import { MatSelectModule} from '@angular/material/select';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthRememberMeComponent } from './components/auth-remember-me/auth-remember-me.component';
import { AuthMessageComponent } from './components/auth-message/auth-message.component';
import { AuthDynamicComponent } from './components/auth-dynamic/auth-dynamic.component';

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
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTabsModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
//    MatDialog, 
//    MatDialogRef,
    MatTooltipModule,
//    MatPaginator, 
//    MatSort, 
//    MatTableDataSource,
    MatSnackBarModule,
    MatTableModule
  ],
  exports: [
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
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTabsModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
//    MatDialog, 
//    MatDialogRef, 
    MatTooltipModule,
 //   MatPaginator, 
 //   MatSort, 
 //   MatTableDataSource,
    MatSnackBarModule,
    MatTableModule,
    AuthFormComponent,
    AuthDynamicComponent,
    AuthRememberMeComponent
  ],
  declarations: [
    AuthFormComponent, 
    AuthRememberMeComponent, 
    AuthDynamicComponent,
    AuthMessageComponent
    ],
  entryComponents: [
    AuthDynamicComponent
  ]
})
export class SharedModule { }
