import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  listTasks = [
     {
      content: 'Teste',
      author: 'Fulano',
      difficulty:'difficulty3'
    },
    {
      content: 'Teste2',
      author: 'Fulano2',
      difficulty:'difficulty1'
    },
    {
      content: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
      author: 'Pedro',
      difficulty: 'difficulty2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
