import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*
Esse arquivo é um service  que contenha a lógica de negócios e que seja responsável pela
comunicação com o servidor. Este arquivo contém todas as requisições ao servidor, ao mesmo
tempo que nos auxilia a separar informações importantes e o modo de obtê-las. */

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(http: HttpClient) { }
}
/*Utilizando a dependência http, permite com que
tenha acesso a todos os métodos do HttpClient, dessa forma
será possível fazer a inserção de dependências externas*/
