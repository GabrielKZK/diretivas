import { Component } from '@angular/core';
import { ItemService } from '../item';

@Component({
  selector: 'app-item-registration',
  templateUrl: './item-registration.html',
  standalone: false
})
export class ItemRegistrationComponent {
  constructor(private itemService: ItemService) {}

  salvar(nome: string, quantidade: string): void {
    if (nome && nome.trim()) {
      this.itemService.adicionar(nome, Number(quantidade));
    } else {
      alert('Preencha o nome do item!');
    }
  }
}