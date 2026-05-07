import { Component } from '@angular/core';
import { CpFilho } from '../cp-filho/cp-filho';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cp-pai',
  imports: [CpFilho],
  templateUrl: './cp-pai.html',
  styleUrl: './cp-pai.scss',
})
export class CpPai {

  public carro = {
    marca: "",
    modelo: "",
    ano: 0,
  }
}
