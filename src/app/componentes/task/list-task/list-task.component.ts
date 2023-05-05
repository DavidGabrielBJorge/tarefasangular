import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  listTasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
