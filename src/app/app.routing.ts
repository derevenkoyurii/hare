import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ui/page-layouts/carded/right-sidebar-tabbed-2'
  },
  {
    path: 'apps',
    loadChildren: () => import('./main/apps/apps.module').then((m) => m.AppsModule)
  },
  {
    path: 'ui',
    loadChildren: () => import('./main/ui/ui.module').then((m) => m.UIModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
