import { Injectable } from '@angular/core';

export interface Item {
  id: number;
  nome: string;
  quantidade: number;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private listaItens: Item[] = [];
  private proximoId = 1;

  getItens(): Item[] {
    return this.listaItens;
  }

  adicionar(nome: string, quantidade: number): void {
    const novo: Item = { id: this.proximoId++, nome, quantidade };
    this.listaItens.push(novo);
  }

  excluir(id: number): void {
    this.listaItens = this.listaItens.filter(i => i.id !== id);
  }

  alterarEstoque(id: number, valor: number): void {
    const item = this.listaItens.find(i => i.id === id);
    if (item && (item.quantidade + valor >= 0)) {
      item.quantidade += valor;
    }
  }
}