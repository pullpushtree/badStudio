import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkKcPage } from './work-kc.page';

const routes: Routes = [
  {
    path: '',
    component: WorkKcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkKcPageRoutingModule {}
