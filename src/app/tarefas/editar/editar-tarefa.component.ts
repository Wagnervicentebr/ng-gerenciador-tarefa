import { Component, OnInit, ViewChild } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Tarefa } from '../shared/tarefa.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa
  tarefaCadastrada: boolean

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const idTarefa = +this.route.snapshot.params['id']
    this.tarefa = this.tarefaService.buscarPorId(idTarefa);
  }

  atualizar(): void {
    if (this.formTarefa.valid) {
      this.tarefaService.alterarTarefa(this.tarefa);
      this.tarefaCadastrada = true;
      setTimeout (() => {
        this.tarefaCadastrada = false;
        this.router.navigate(["/tarefas"])
     }, 1000);
    }
   
  }
}
