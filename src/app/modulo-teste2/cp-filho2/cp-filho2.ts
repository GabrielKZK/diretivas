import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cp-filho2',
  imports: [],
  templateUrl: './cp-filho2.html',
  styleUrl: './cp-filho2.scss',
})
export class CpFilho2 {

@Output() public emiteEventoPai = new EventEmitter();

  public sorteiaNumero() {
    let numero = Math.floor(Math.random() * 100 + 1);
    this.emiteEventoPai.emit(numero);

  }

}
