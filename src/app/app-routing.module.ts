import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'work-ae',
    loadChildren: () => import('./pages/work-ae/work-ae.module').then( m => m.WorkAePageModule)
  },
  {
    path: 'work-ie',
    loadChildren: () => import('./pages/work-ie/work-ie.module').then( m => m.WorkIePageModule)
  },
  {
    path: 'work-kc',
    loadChildren: () => import('./pages/work-kc/work-kc.module').then( m => m.WorkKcPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
