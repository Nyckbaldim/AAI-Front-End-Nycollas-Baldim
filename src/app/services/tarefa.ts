import { Injectable } from '@angular/core';
import { ITarefa } from '../models/tarefa.model';

@Injectable({ providedIn: 'root' })
export class TarefaService {
  private tarefas: ITarefa[] = [];

  listar(): ITarefa[] {
    return this.tarefas;
  }

  buscarPorId(id: string): ITarefa | undefined {
    return this.tarefas.find(t => t.id === id);
  }

  cadastrar(tarefa: ITarefa): void {
    tarefa.id = Date.now().toString();
    this.tarefas.push({ ...tarefa });
  }

  atualizar(tarefa: ITarefa): void {
    const i = this.tarefas.findIndex(t => t.id === tarefa.id);
    if (i >= 0) {
      this.tarefas[i] = { ...tarefa };
    }
  }

  deletar(id: string): void {
    const i = this.tarefas.findIndex(t => t.id === id);
    if (i >= 0) {
      this.tarefas.splice(i, 1);
    }
  }
}