import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkIePage } from './work-ie.page';

const routes: Routes = [
  {
    path: '',
    component: WorkIePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkIePageRoutingModule {}
