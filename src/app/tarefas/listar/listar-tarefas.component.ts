import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../shared/tarefa.model';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];
  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTarefas();
  }

  listarTarefas() {
    return this.tarefaService.listaTodos();
  }

  excluirTarefa(tarefa: Tarefa): void {
    if(confirm('deseja realmente exluir a tarefa"' + tarefa.nome + '"?')) {
      this.tarefaService.removerTarefa(tarefa.id);
      this.tarefas = this.listarTarefas();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    this.tarefaService.alterarStatus(tarefa.id);
    this.tarefas = this.listarTarefas();
  }
}
