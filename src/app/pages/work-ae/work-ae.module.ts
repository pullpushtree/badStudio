import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkAePageRoutingModule } from './work-ae-routing.module';

import { WorkAePage } from './work-ae.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkAePageRoutingModule
  ],
  declarations: [WorkAePage]
})
export class WorkAePageModule {}
