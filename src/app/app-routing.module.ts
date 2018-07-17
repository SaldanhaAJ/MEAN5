import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './items/item-list.component';
import { AddressListComponent } from './address/address-list.component';
import { HomeComponent } from './home/home.component';
import { IndexOverlaysComponent } from './overlay/index-overlays.component';
import { IndexEmitterComponent } from './emitter/index-emitter.component';
import { PassangerViewerComponent } from './passanger-dashboard/containers/passanger-viewer/passanger-viewer.component';
import {IndexTablesComponent} from './tables/index-tables.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'indexoverlays', component: IndexOverlaysComponent },
  { path: 'indexemitters', component: IndexEmitterComponent },
  { path: 'itemlist', component: ItemListComponent },
  {path: 'indexpassengers', component: PassangerViewerComponent},
  {path: 'indextables', component: IndexTablesComponent},
  {path:'addresses', component: AddressListComponent},
  { path: '**', component: NotFoundComponent }
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
