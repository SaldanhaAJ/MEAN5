import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ng Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule} from '@angular/material/select';
*/
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatTabsModule} from '@angular/material/tabs';

import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';

import { DataService } from './data.service';
import { ItemListComponent } from './items/item-list.component';
import { ItemDetailComponent } from './items/item-detail.component';
import { ModalService } from './_services/modal.service';
import { ModalComponent } from './_directives/modal.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './/app-routing.module';
import { AddressModule } from './address/address.module';
import { TablesModule } from './tables/tables.module';
import { FilePreviewOverlayComponent } from './overlay/file-preview-overlay.component';
import { FilePreviewOverlayService } from './overlay/file-preview-overlay.service';
import { IndexOverlaysComponent } from './overlay/index-overlays.component';
import { MatListModule } from '@angular/material';
import { MatSidenavModule} from '@angular/material/sidenav';
import { IndexEmitterComponent } from './emitter/index-emitter.component';
import { ParentComponent } from './emitter/parent.component';
import { ChildComponent } from './emitter/child.component';
import { BindingsComponent } from './home/bindings.component';
import { StructureComponent } from './home/structure.component';
import { PipesComponent } from './home/pipes.component';
import { PassangerDashboardModule } from './passanger-dashboard/passanger-dashboard.module';
import { NotFoundComponent } from './not-found.component';

import { ContainerViewComponent } from './view/container-view.component';
import {SharedModule } from './_shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDetailComponent,
    ModalComponent,
    HomeComponent,
    FilePreviewOverlayComponent,
    IndexOverlaysComponent,
    IndexEmitterComponent,
    ParentComponent,
    ChildComponent,
    BindingsComponent,
    StructureComponent,
    PipesComponent,
 //   ContainerViewComponent ,
    NotFoundComponent
    ],

  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
  /*
      MatCheckboxModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatButtonModule,
  */
      MatMenuModule,
      MatIconModule,
      MatToolbarModule,
      MatTabsModule,
      MatListModule,
      MatSidenavModule,
      AppRoutingModule,
      AddressModule,
      TablesModule,
      SharedModule,
      PassangerDashboardModule
  ],
  providers: [DataService, ModalService, FilePreviewOverlayService],
  bootstrap: [AppComponent],
  entryComponents: [
    // Needs to be added here because otherwise we can't
    // dynamically render this component at runtime
  //  AuthDynamicComponent,
  FilePreviewOverlayComponent
  
  ]
})
export class AppModule { }
