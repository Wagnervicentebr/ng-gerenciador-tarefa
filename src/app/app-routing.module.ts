import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { TarefaRouter } from './tarefas/tarefas-routing.module';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  ...TarefaRouter
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
 
})

export class AppRoutingModule { }