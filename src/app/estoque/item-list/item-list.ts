import { Component } from '@angular/core';
import { ItemService } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.html',
  standalone: false
})
export class ItemListComponent {
  constructor(private itemService: ItemService) {}

  get itens() {
    return this.itemService.getItens();
  }

  entrada(id: number) { this.itemService.alterarEstoque(id, 1); }
  saida(id: number) { this.itemService.alterarEstoque(id, -1); }
  deletar(id: number) { this.itemService.excluir(id); }
}