import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  listTasks: Task[] = [];

  //Para acessar o serviço de listar todas as tasks, precisa injetar no constructor
  constructor(private service: TaskService) { }

  //Toda a lógica que for executada assim que o componente dor criado deve colocar no ngOnInit
  ngOnInit(): void {
    this.service.listar().subscribe((listTasks) =>{
       //Com o subscribe o observer vai entender que é necessário emitir notificações quando ocorre uma mudança
      this.listTasks = listTasks
    })

  }

}
