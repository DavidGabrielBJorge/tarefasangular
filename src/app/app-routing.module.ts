import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './componentes/task/task-create/task-create.component';
import { ListTaskComponent } from './componentes/task/list-task/list-task.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarTask',
    pathMatch: 'full'
  },
  {
    path: 'criarTask',
    component: TaskCreateComponent
  },
  {
    path: 'listarTask',
    component: ListTaskComponent
  }
];

//Decorator NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
Declaração das rotas
  {
    path: '', -> Ao colocar em uma url raiz
    redirectTo: 'listarTask', -> Vai redirecionar para a url /listarTask
    pathMatch: 'full' -> Por padrão ao usar o path:'' ou raiz deve inserir o pathMatch podendo ser full ou prefix
  },
  {
    path: 'criarTask', -> Declara que ao colocar na url /criarTask vai criar o componente "TaskCreate"
    component: TaskCreateComponent
  },
  {
    path: 'listarTask',-> Declara que ao colocar na url /listarTask vai criar o componente "ListTaske"
    component: ListTaskComponent
  }

  Diferenças dos tipos de PathMatch:

  full: vai exibir a url inteira do site:
  http://localhost:4200/listarTask

  prefix: vai ingonorar o restante da url, mostrando apenas o principal
  http://localhost:4200
*/
