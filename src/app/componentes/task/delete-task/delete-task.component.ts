import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {

  task: Task = {
    id: 0,
    content: '',
    author: '',
    difficulty:'',
    favorito: false

  }
  constructor(
    private service: TaskService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Vai buscar o id da tarefa
    const id= this.route.snapshot.paramMap.get('id')
    this.service.listarPorId(parseInt(id!)).subscribe((task)=>{
      this.task=task
    })
  }
  excluirTask(){
    if(this.task.id){
      this.service.excluir(this.task.id).subscribe(()=>{
        this.router.navigate(['/listarTask'])
      })

      //Vai excluir a task e redirecionar para a primeira página
    }
    else{
      console.log("Id do pensamento não existe")
    }
  }

  cancelar(){
    this.router.navigate(['/listarTask'])
  }
}
/*
ActivatedRoute => fornece informações sobre as rotas dos cartões de task

snapshot => faz uma captura da rota no momento que for acessada

paraMap => traz as informações da task
*/
