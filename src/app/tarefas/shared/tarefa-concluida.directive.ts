import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  @Input() tarefaConcluida: boolean

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void{
    if (this.tarefaConcluida) {
      this.elemento.nativeElement.style.textDecoration = "line-through"
    }
  }
}
