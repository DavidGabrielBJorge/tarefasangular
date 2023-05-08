import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
/*Este arquivo será responsável por criar a lógica do projeto */

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  task = {
    content: '',
    author: '',
    difficulty:'difficulty1'
  }

  //injetar o serviço
  constructor(
    private service: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(){
    this.service.criar(this.task).subscribe(()=>
    this.router.navigate(['/listarTask']))
    //Ao criar um pensamento vai voltar para a tela de lista task
  }

  cancel(){
    this.router.navigate(['/listarTask'])
  }

}

/*
O nosso formulário está quase pronto, mas ainda temos um problema a resolver: se a gente
digitar qualquer outro conteúdo nos campos "task" e "author", a prévia não exibirá
esse texto, e sim o texto que colocamos no código. Ou seja, o conteúdo da Prévia está fixo.

Isso acontece pois até agora estamos utilizando somente associações de dados unidirecionais.

Para resolver isso precisamos utilizar uma associação de dados bidirecional, que atualize o template e o
component ao mesmo tempo.

Podemos associar o fluxo de dados do Angular a um tráfego de carros, onde o fluxo de dados
unidirecional ("one-way data binding") representa uma via de mão única, enquanto o fluxo
bidirecional ("two-way data binding") seria uma via de mão dupla

A sintaxe do o fluxo de dados bidirecional é uma junção das duas que vimos antes:
colchetes [] e parênteses (), formando assim a famosa "banana na caixa".

Para configurarmos o "data binding" bidirecional, utilizaremos uma diretiva no input de
pensamento do arquivo HTML.

Diretivas em Angular são classes que conseguem modificar elementos dentro da aplicação.

Vamos utilizar a diretiva de atributo "ngModel", que faz parte do FormsModule
*/
