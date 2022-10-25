import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkIePageRoutingModule } from './work-ie-routing.module';

import { WorkIePage } from './work-ie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkIePageRoutingModule
  ],
  declarations: [WorkIePage]
})
export class WorkIePageModule {}
