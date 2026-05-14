import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CpFilho2 } from '../cp-filho2/cp-filho2';

@Component({
  selector: 'app-cp-pai2',
  imports: [CpFilho2],
  templateUrl: './cp-pai2.html',
  styleUrl: './cp-pai2.scss',
})
export class CpPai2 {

  public numeroSorteado: number = 0;

  public recebeNumero(nr: number) {
    this.numeroSorteado = nr;
  }

}
