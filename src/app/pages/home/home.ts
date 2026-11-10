import { Component, OnInit } from '@angular/core';
import { NgFor, NgClass, DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ITarefa } from '../../models/tarefa.model';
import { TarefaService } from '../../services/tarefa';

@Component({
  selector: 'app-home',
  imports: [NgFor, NgClass, DatePipe, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  hoje = new Date();
  tarefas: ITarefa[] = [];

  constructor(private service: TarefaService, private router: Router) {}

  ngOnInit(): void {
    this.tarefas = this.service.listar();
  }

  editar(id: string): void {
    this.router.navigate(['/tarefa-atualiza', id]);
  }

  deletar(id: string): void {
    this.service.deletar(id);
  }
}