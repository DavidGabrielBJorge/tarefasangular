import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  listTasks: Task[] = [];
  paginaAtual: number = 1;
  haMaisTask: boolean = true;
  filtro: string = ''
  favoritos: boolean = false
  listaFavoritos: Task[] = [];
  titulo: string = 'Minhas tarefas'

  //Para acessar o serviço de listar todas as tasks, precisa injetar no constructor
  constructor(private service: TaskService, private router: Router) { }

  //Toda a lógica que for executada assim que o componente dor criado deve colocar no ngOnInit
  ngOnInit(): void {
    //Vai listar e além disso vai criar uma páginação
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listTasks) =>{
       //Com o subscribe o observer vai entender que é necessário emitir notificações quando ocorre uma mudança
      this.listTasks = listTasks
    })

  }

  carregarTasks(){
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe(listTasks =>{
      this.listTasks.push(...listTasks)
      //se não houverem mais task
      if(!listTasks.length){
        this.haMaisTask = false
      }
    })
  }

  pesquisarTarefa(){
    this.haMaisTask = true;//Ao pesquisar, o botão de mostrar mais tarefa vai aparecer
    this.paginaAtual = 1;//Ao fazer a pesquisa, sempre será na primeira página
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listTasks=>{
      this.listTasks = listTasks
    })
  }

  //Mostrar as tasks favoritos
  listarFavoritos(){
    this.titulo = 'Tarefas favoritas'
    this.favoritos = true
    this.haMaisTask = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listarTaskFavoritos=>{
      this.listTasks = listarTaskFavoritos
      this.listaFavoritos = listarTaskFavoritos//enviar a lista de favoritos para uma outra lista
    })
  }

  recarregarComponente(){
    //location.reload(); recarrega a página

    this.favoritos = false;
    this.paginaAtual = 1;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;//Como não haverá navegação entre componentes de outras totas deve indicar que não vai usar a reutilização de rotas
    //deve reutilizar a url

    this.router.onSameUrlNavigation = 'reload'
    //O router é um serviço que manipula os recursos da url e também da navegação entre views, onSameUrlNavigation é uma propriedade que diz que ao navegar na mesma URL deve informar ao angular o que deve fazer

    this.router.navigate([this.router.url])//this.router.url: representa a url atual
  }

}
