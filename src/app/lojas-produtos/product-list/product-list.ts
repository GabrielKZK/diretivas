import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss']
})
export class ProductList {

  public produtos = [
    {
      nome: 'Notebook Gamer',
      preco: 4500,
      categoria: 'Eletrônicos',
      imagem: 'https://cdn-icons-png.flaticon.com/512/179/179386.png'
    },
    {
      nome: 'Mouse RGB',
      preco: 150,
      categoria: 'Periféricos',
      imagem: 'https://cdn-icons-png.flaticon.com/512/742/742751.png'
    },
    {
      nome: 'Teclado Mecânico',
      preco: 300,
      categoria: 'Periféricos',
      imagem: 'https://cdn-icons-png.flaticon.com/512/2097/2097743.png'
    }
  ];

  public produtoSelecionado: any = null;

  public selecionarProduto(produto: any) {
    this.produtoSelecionado = produto;
  }

}