import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class ExemploService {

  public lista: Array<string> = [];
  public listaAtualizada = new Subject<string[]>();

  public adiciona(valor: string) {
    this.lista.push(valor);
    this.listaAtualizada.next([... this.lista]);
    //0 operador spread ( ... ) eqivalente ao 'clone' do java

  }

}
