import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-paginacao',
  templateUrl: './botao-paginacao.component.html',
  styleUrls: ['./botao-paginacao.component.css']
})
export class BotaoPaginacaoComponent implements OnInit {

  @Input() haMaisTask: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
