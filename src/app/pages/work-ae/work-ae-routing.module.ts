import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkAePage } from './work-ae.page';

const routes: Routes = [
  {
    path: '',
    component: WorkAePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkAePageRoutingModule {}
