import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ITarefa, createITarefa } from '../../models/tarefa.model';
import { TarefaService } from '../../services/tarefa';

@Component({
  selector: 'app-tarefa-atualiza',
  imports: [FormsModule, NgFor],
  templateUrl: './tarefa-atualiza.html',
  styleUrl: './tarefa-atualiza.css'
})
export class TarefaAtualiza implements OnInit {
  tarefa: ITarefa = createITarefa();
  categorias = ['domestico', 'pessoal', 'trabalho'];

  constructor(
    private service: TarefaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    const encontrada = this.service.buscarPorId(id);
    if (encontrada) {
      this.tarefa = { ...encontrada };
    } else {
      this.router.navigate(['/']);
    }
  }

  selecionarCategoria(cat: string): void {
    this.tarefa.categoria = cat;
  }

  atualizar(): void {
    this.service.atualizar(this.tarefa);
    this.router.navigate(['/']);
  }
}