import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private service: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')//Pega a informação do card da task, no caso id
    this.service.listarPorId(parseInt(id!)).subscribe((task)=>{
      this.formulario = this.formBuilder.group({
        id: [task.id],
        content: [task.content, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        author: [task.author, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        difficulty: [task.difficulty]
      })

    })
    //Vai procurar pelo id e vai pegar os dados da task que possui o id correspondente

  }

  editarTask(){
    this.service.editar(this.formulario.value).subscribe(()=>{
      this.router.navigate(['/listarTask'])
    })
  }

  cancel(){
    this.router.navigate(['/listarTask'])
  }

  habilitarBotao(): string {
    if(this.formulario.valid) {
      return "botao"
    }
    else return "botao_desabilitado"
  }

}
