import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { ITarefa, createITarefa } from '../../models/tarefa.model';
import { TarefaService } from '../../services/tarefa';

@Component({
  selector: 'app-tarefa-nova',
  imports: [FormsModule, NgFor],
  templateUrl: './tarefa-nova.html',
  styleUrl: './tarefa-nova.css'
})
export class TarefaNova {
  tarefa: ITarefa = { ...createITarefa(), prioridade: 'Alto' };
  categorias = ['domestico', 'pessoal', 'trabalho'];

  constructor(private service: TarefaService, private router: Router) {}

  selecionarCategoria(cat: string): void {
    this.tarefa.categoria = cat;
  }

  salvar(): void {
    this.service.cadastrar(this.tarefa);
    this.router.navigate(['/']);
  }
}