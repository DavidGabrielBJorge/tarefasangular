import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from './task'
import { Observable } from 'rxjs';
/*
Esse arquivo é um service  que contenha a lógica de negócios e que seja responsável pela
comunicação com o servidor. Este arquivo contém todas as requisições ao servidor, ao mesmo
tempo que nos auxilia a separar informações importantes e o modo de obtê-las. */

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly API= "http://localhost:3000/tasks"
  constructor(private http: HttpClient) { }

  //método listar tasks
  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Task[]>{
    const tasksPorPagina = 5;

    let params = new HttpParams().set("_page",pagina).set("_limit", tasksPorPagina)

    //Pesquisar as tarefas criadas
    if(filtro.trim().length > 2){
      params = params.set("q", filtro)
    }

    //Vai conferir se vai mostrar somente as tasks com o favorito ou não
    if(favoritos){
      params=params.set("favorito",true)
    }

    return this.http.get<Task[]>(this.API, {params: params})
    //No backend o JSON Server possui uma biblioteca de paginação que deve seguir essa ordem: GET /posts?_page=7&_limit=20

    /*Foi usado o HttpParams para criar a paginação na página principal, logo em vez de mostrar todas as tasks vai mostrar de 5 em 5 */
  }

  //método criar task
  criar(task: Task):Observable<Task>{
    return this.http.post<Task>(this.API, task)
  }

  //método para buscar pelo id
  listarPorId(id: number): Observable<Task>{
    const url = `${this.API}/${id}`
    return this.http.get<Task>(url)
  }

  //método excluir task
  excluir(id:number): Observable<Task>{
    const url = `${this.API}/${id}`
    return this.http.delete<Task>(url)
  }

  editar(task: Task): Observable<Task>{
    const url = `${this.API}/${task.id}`
    return this.http.put<Task>(url, task)
  }

  //Método para atualizar o pensamento e passar o favorito de inativo para ativo
  mudarFavorito(task: Task): Observable<Task>{
    task.favorito = !task.favorito
    const url = `${this.API}/${task.id}`
    return this.editar(task)

    /* Tanto o editar quanto o mudarFavorito retornam a mesma coisa, portanto para evitar repetição basta chamar o método editar
    return this.http.put<Task>(url, task)*/

  }




}
/*
Utilizando a dependência http, permite com que
tenha acesso a todos os métodos do HttpClient, dessa forma
será possível fazer a inserção de dependências externas

==================================================================================
Observable:
Imagine que uma pessoa conhecida queira trocar de celular e entra todos os dias no
site para ver se o preço baixou. Você indica a ela que coloque o produto na lista de
"Favoritos", pois assim ela receberá uma notificação quando o preço do celular cair.

Através deste exemplo entenderemos como funciona um Observable, ou observável,
que neste caso é o site de compras. A pessoa conhecida, por sua vez, é a Observer, ou
observadora, que está interessada em receber as notificações.

O Observable funciona de forma similar ao promise do Javascript, mas com a vantagem de
possuir uma transferência de dados contínua. Ou seja, o Observable é capaz de emitir
dados várias vezes durante a sua existência. Este comando faz parte da biblioteca RXJS,
que é utilizada de forma camuflada pelo Angular e já vem instalada na aplicação.
*/
