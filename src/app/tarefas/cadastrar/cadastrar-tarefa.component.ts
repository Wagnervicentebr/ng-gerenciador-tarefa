import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa
  tarefaCadastrada: boolean

  constructor(
    private tarefaService: TarefaService,
  ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if (this.formTarefa.valid) {
      this.tarefaService.salvarNovo(this.tarefa);
      this.tarefaCadastrada = true;
      setTimeout (() => {
        this.tarefaCadastrada = false;
     }, 2000);
    }
  }

}
