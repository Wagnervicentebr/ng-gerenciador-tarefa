import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listaTodos() : Tarefa[] {
    const tarefas = localStorage['tarefas']
    return tarefas ? JSON.parse(tarefas): [];
  }

  salvarNovo(tarefa: Tarefa): void {
    const tarefas = this.listaTodos();
    tarefa.id = Math.floor(Math.random() * 10);
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarTarefa(tarefa: Tarefa): void {
    const tarefas = this.listaTodos();
    tarefas.forEach((obj, index, objList) => {
      if (obj.id === tarefa.id) objList[index] = tarefa;
     })
     localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas = this.listaTodos();
    return tarefas.find(tarefa => tarefa.id === id)
  }

  removerTarefa(id: number): void {
    let tarefas = this.listaTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id != id)
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas = this.listaTodos();
    tarefas.forEach((tarefa, index, tarefasList) => {
      if (tarefa.id === id) tarefasList[index].concluida = !tarefa.concluida 
    })
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
