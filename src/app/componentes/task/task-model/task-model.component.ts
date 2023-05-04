import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-model',
  templateUrl: './task-model.component.html',
  styleUrls: ['./task-model.component.css']
})
export class TaskModelComponent implements OnInit {

  /*
  O Input é um decorator que informa que a propriedade task vai receber informações do
  componente pai
  */
  @Input() task ={
    content: 'Estudar Angular',
    author: 'Ciclano',
    difficulty:'difficulty2'
  }
  constructor() { }

  ngOnInit(): void {
  }

  widthTask(): string{
    if(this.task.content.length >= 256){
      return 'task-g';//Retorna um estilo
    }
    return 'task-p';
  }

}
