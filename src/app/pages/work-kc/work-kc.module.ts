import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkKcPageRoutingModule } from './work-kc-routing.module';

import { WorkKcPage } from './work-kc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkKcPageRoutingModule
  ],
  declarations: [WorkKcPage]
})
export class WorkKcPageModule {}
