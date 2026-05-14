import { Component } from '@angular/core';
import { ExemploService } from '../services/exemplo-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cp-b',
  imports: [CommonModule],
  templateUrl: './cp-b.html',
  styleUrl: './cp-b.scss',
})
export class CpB {

  public lista: Array<string> = [];

  //Injeção de dependência do service
  constructor(private service: ExemploService) {
    this.lista = this.service.lista;
    this.service.listaAtualizada.subscribe(listaAtualizada => {
      this.lista = listaAtualizada;
    });
  }

}
