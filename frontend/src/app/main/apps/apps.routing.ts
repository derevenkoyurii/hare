import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class AppsRouting {}
