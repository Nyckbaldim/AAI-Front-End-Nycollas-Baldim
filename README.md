# Tarefas NG - Lista de Tarefas em Angular

**Universidade FUMEC**
Curso: Ciência da Computação
Disciplina: Desenvolvimento Web Front-End
Professor: Msc. Dângelo Silva Miranda
Aluno: Nycollas de Souza Baldim (RA:1A291032644)

## Sobre

Aplicação web para gerenciar uma lista de tarefas, desenvolvida com **Angular** e **Bootstrap**. Permite listar, cadastrar, editar e deletar tarefas. Os dados ficam armazenados em memória (array no service), então são perdidos ao recarregar a página.

## Funcionalidades

- **Home**: exibe um card para cada tarefa (prioridade, nome e data de vencimento), com botões Editar e Deletar, botão Adicionar e a data atual no topo.
- **Tarefa nova**: formulário com nome, prioridade, data limite e categoria (escolhida por botões: doméstico, pessoal ou trabalho).
- **Tarefa atualiza**: formulário preenchido com os dados da tarefa para edição.
- **Header**: cabeçalho presente em todas as páginas.

## Tecnologias

- Angular (standalone components, Router, FormsModule)
- TypeScript
- Bootstrap e Bootstrap Icons

## Estrutura do projeto

```
src/app/
├── components/header/        # Cabeçalho
├── models/tarefa.model.ts    # Interface ITarefa e createITarefa()
├── pages/
│   ├── home/                 # Listagem das tarefas
│   ├── tarefa-nova/          # Cadastro
│   └── tarefa-atualiza/      # Edição
├── services/tarefa.ts        # TarefaService (CRUD em array)
├── app.routes.ts             # Rotas
└── app.ts / app.html         # Componente raiz
```

## Conceitos aplicados

- **Service com injeção de dependência** (`@Injectable`) para centralizar os dados.
- **Two-way data-binding** com `[(ngModel)]` nos formulários.
- **`*ngFor`** para listar as tarefas.
- **Rotas** com parâmetro (`tarefa-atualiza/:id`) e navegação via `routerLink` e `Router`.
- **Interface TypeScript** para padronizar a estrutura da tarefa.

## Como executar

Pré-requisito: Node.js (versão LTS) instalado.

```bash
npm install
ng serve
```

Acesse `http://localhost:4200`.