import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  task: Task = {
    id: 0,
    content: '',
    author: '',
    difficulty: ''
  }
  constructor(
    private service: TaskService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')//Pega a informação do card da task, no caso id
    this.service.listarPorId(parseInt(id!)).subscribe((task)=>{
      this.task = task
    })
    //Vai procurar pelo id e vai pegar os dados da task que possui o id correspondente
  }

  editarTask(){
    this.service.editar(this.task).subscribe(()=>{
      this.router.navigate(['/listarTask'])
    })
  }

  cancel(){
    this.router.navigate(['/listarTask'])
  }

}
