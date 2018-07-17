import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule} from '../_shared/shared.module';


import { ContainerViewComponent } from './container-view.component';

@NgModule({
  declarations: [
    ContainerViewComponent
],
  imports: [
    CommonModule,
    SharedModule,
FormsModule
  ],
  exports: [
    ContainerViewComponent
]


})
export class ViewModule {}